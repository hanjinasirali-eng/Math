import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Loader2,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import {
  ChapterId,
  Language,
  TeacherExplanation,
} from '../types/math';
import { UI_TEXT } from '../utils/i18n';
import {
  buildFallbackTeacherExplanation,
  getCachedTeacherExplanation,
  makeExplainCacheKey,
  saveCachedTeacherExplanation,
} from '../utils/teacherFormatter';
import { MathText } from './MathText';

interface SolutionStepsBlockProps {
  questionId?: string;
  chapterId?: ChapterId;
  topic?: string;
  question?: string;
  options?: [string, string, string, string];
  correctIndex?: 0 | 1 | 2 | 3;
  selectedIndex?: number | null;
  explanation: string;
  steps?: string[];
  correctAnswerText: string;
  optionLabel?: string;
  lang: Language;
  autoFetchAI?: boolean;
}

const HAS_URDU_CHAR = /[\u0600-\u06FF]/;

export const SolutionStepsBlock: React.FC<SolutionStepsBlockProps> = ({
  questionId,
  chapterId,
  topic = '',
  question = '',
  options,
  correctIndex,
  selectedIndex = null,
  explanation,
  steps,
  correctAnswerText,
  optionLabel,
  lang,
  autoFetchAI = false,
}) => {
  const t = UI_TEXT[lang].solution;

  const safeOptions: [string, string, string, string] = useMemo(
    () =>
      options ?? [
        correctAnswerText,
        correctAnswerText,
        correctAnswerText,
        correctAnswerText,
      ],
    [options, correctAnswerText]
  );
  const safeCorrectIdx: 0 | 1 | 2 | 3 = correctIndex ?? 0;

  const fallbackGuide = useMemo(
    () =>
      buildFallbackTeacherExplanation({
        chapterId,
        topic,
        question,
        options: safeOptions,
        correctIndex: safeCorrectIdx,
        selectedIndex,
        explanation,
        steps,
        lang,
      }),
    [
      chapterId,
      topic,
      question,
      safeOptions,
      safeCorrectIdx,
      selectedIndex,
      explanation,
      steps,
      lang,
    ]
  );

  const cacheKey = useMemo(
    () =>
      questionId
        ? makeExplainCacheKey(questionId, selectedIndex, lang)
        : null,
    [questionId, selectedIndex, lang]
  );

  const [aiGuide, setAiGuide] = useState<TeacherExplanation | null>(() =>
    cacheKey ? getCachedTeacherExplanation(cacheKey) : null
  );
  const [loading, setLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Sync cached AI explanation whenever questionId, selectedIndex, or language changes
  useEffect(() => {
    setAiError(null);
    if (cacheKey) {
      setAiGuide(getCachedTeacherExplanation(cacheKey));
    } else {
      setAiGuide(null);
    }
  }, [cacheKey]);

  const fetchAIExplanation = useCallback(
    async (forceRefresh = false) => {
      if (!question || !options) return;
      if (!forceRefresh && cacheKey) {
        const cached = getCachedTeacherExplanation(cacheKey);
        if (cached) {
          setAiGuide(cached);
          return;
        }
      }

      setLoading(true);
      setAiError(null);
      try {
        const response = await fetch('/api/questions/explain', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chapterId: chapterId ?? 'numbers',
            topic,
            question,
            options,
            correctIndex: safeCorrectIdx,
            selectedIndex,
            lang,
          }),
        });

        const data = (await response.json()) as {
          ok?: boolean;
          error?: string;
          explanation?: TeacherExplanation;
        };

        if (!response.ok || !data.ok || !data.explanation) {
          setAiError(
            data.error ||
              (lang === 'en'
                ? 'Could not load AI explanation right now.'
                : 'اس وقت اے آئی وضاحت دستیاب نہیں ہو سکی۔')
          );
          return;
        }

        if (cacheKey) {
          saveCachedTeacherExplanation(cacheKey, data.explanation);
        }
        setAiGuide(data.explanation);
      } catch {
        setAiError(
          lang === 'en'
            ? 'Network error while contacting AI Math Teacher.'
            : 'اے آئی استادِ ریاضی سے رابطے کے دوران نیٹ ورک کا مسئلہ پیش آیا۔'
        );
      } finally {
        setLoading(false);
      }
    },
    [
      question,
      options,
      cacheKey,
      chapterId,
      topic,
      safeCorrectIdx,
      selectedIndex,
      lang,
    ]
  );

  // Auto-fetch personalized Gemini AI teacher lesson when a student gets a wrong answer in Practice Mode
  useEffect(() => {
    if (!autoFetchAI || !question || !options) return;
    if (cacheKey && getCachedTeacherExplanation(cacheKey)) return;
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      if (!controller.signal.aborted) {
        void fetchAIExplanation(false);
      }
    }, 120);
    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [autoFetchAI, cacheKey, question, options, fetchAIExplanation]);

  const guide = aiGuide ?? fallbackGuide;
  const isAI = guide.source === 'ai';
  const showMistakeBox = Boolean(guide.mistakeAnalysis);
  const canRequestAI = Boolean(question && options);

  return (
    <div className="space-y-3.5 text-sm text-slate-800 dark:text-slate-200">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <GraduationCap
            className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0"
            aria-hidden="true"
          />
          <span>{isAI ? t.aiTeacherBadge : t.teacherBadge}</span>
        </div>

        <div className="flex items-center gap-2">
          {isAI && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
              {t.aiVerifiedLabel}
            </span>
          )}
          {canRequestAI && (
            <button
              type="button"
              onClick={() => void fetchAIExplanation(Boolean(aiGuide))}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50/80 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-xs font-semibold text-blue-700 dark:text-blue-300 transition-colors disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
                  <span>{t.aiLoading}</span>
                </>
              ) : isAI ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t.refreshAiBtn}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t.askAiBtn}</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {aiError && (
        <div className="rounded-lg border border-amber-200 dark:border-amber-900/80 bg-amber-50/70 dark:bg-amber-950/30 px-3 py-2 text-xs text-amber-800 dark:text-amber-300">
          {aiError}
        </div>
      )}

      {/* Mistake Analysis when the student chose a wrong answer */}
      {showMistakeBox && guide.mistakeAnalysis && (
        <div className="rounded-xl border border-rose-200 dark:border-rose-900/80 bg-white/90 dark:bg-slate-900/80 p-3.5 sm:p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-700 dark:text-rose-400">
            <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t.mistakeHeading}</span>
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              <strong className="text-slate-900 dark:text-white">
                {t.selectedWrongLabel}{' '}
              </strong>
              <MathText text={guide.mistakeAnalysis.selectedAnswer} autoUpgradeMath={false} />
            </p>
            <p>
              <strong className="text-rose-700 dark:text-rose-400">
                {t.whyWrongLabel}{' '}
              </strong>
              <MathText text={guide.mistakeAnalysis.whyWrong} />
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">
                {t.whereMistakeLabel}{' '}
              </strong>
              <MathText text={guide.mistakeAnalysis.whereMistakeHappened} />
            </p>
          </div>
        </div>
      )}

      {/* Full Question Restatement */}
      {guide.questionRestatement && (
        <div className="rounded-lg bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 px-3.5 py-2.5 leading-relaxed">
          <span className="font-bold text-slate-900 dark:text-white">
            {t.questionLabel}{' '}
          </span>
          <MathText text={guide.questionRestatement} autoUpgradeMath={false} />
        </div>
      )}

      {/* Exact 5-Step ChatGPT-style Mathematical Walkthrough */}
      <ol className="space-y-2.5">
        {/* Step 1: Understand */}
        <li className="rounded-lg bg-white/85 dark:bg-slate-900/75 border border-slate-200/80 dark:border-slate-700/80 px-3.5 py-2.5 leading-relaxed">
          <div className="font-bold text-blue-700 dark:text-blue-400 text-xs mb-1">
            {t.step1Title}
          </div>
          <div className="text-slate-800 dark:text-slate-200">
            <MathText text={guide.step1Understand} />
          </div>
        </li>

        {/* Step 2: Method */}
        <li className="rounded-lg bg-white/85 dark:bg-slate-900/75 border border-slate-200/80 dark:border-slate-700/80 px-3.5 py-2.5 leading-relaxed">
          <div className="font-bold text-blue-700 dark:text-blue-400 text-xs mb-1">
            {t.step2Title}
          </div>
          <div className="text-slate-800 dark:text-slate-200">
            <MathText text={guide.step2Method} />
          </div>
        </li>

        {/* Step 3: Perform Calculations */}
        <li className="rounded-lg bg-white/85 dark:bg-slate-900/75 border border-slate-200/80 dark:border-slate-700/80 px-3.5 py-2.5 leading-relaxed space-y-2">
          <div className="font-bold text-blue-700 dark:text-blue-400 text-xs">
            {t.step3Title}
          </div>
          <div className="space-y-2">
            {guide.step3Calculations.map((calcStep, idx) => (
              <div
                key={idx}
                className="pl-2.5 pr-2.5 py-1.5 rounded-md bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-slate-900 dark:text-slate-100"
              >
                <MathText text={calcStep} />
              </div>
            ))}
          </div>
        </li>

        {/* Step 4: Obtain the Answer */}
        <li className="rounded-lg bg-white/85 dark:bg-slate-900/75 border border-slate-200/80 dark:border-slate-700/80 px-3.5 py-2.5 leading-relaxed">
          <div className="font-bold text-blue-700 dark:text-blue-400 text-xs mb-1">
            {t.step4Title}
          </div>
          <div className="text-slate-800 dark:text-slate-200">
            <MathText text={guide.step4ObtainAnswer} />
          </div>
        </li>

        {/* Step 5: Verify the Answer */}
        <li className="rounded-lg bg-white/85 dark:bg-slate-900/75 border border-slate-200/80 dark:border-slate-700/80 px-3.5 py-2.5 leading-relaxed">
          <div className="font-bold text-blue-700 dark:text-blue-400 text-xs mb-1">
            {t.step5Title}
          </div>
          <div className="text-slate-800 dark:text-slate-200">
            <MathText text={guide.step5Verify} />
          </div>
        </li>
      </ol>

      {/* Final Highlighted Boxed Answer */}
      <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800 px-4 py-3 font-semibold text-emerald-900 dark:text-emerald-200 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <span>{t.finalAnswerTitle}</span>
          {optionLabel && (
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-600 text-white">
              {t.optionPrefix} {optionLabel}
            </span>
          )}
          <span
            className={
              lang === 'ur' && !HAS_URDU_CHAR.test(correctAnswerText)
                ? 'math-ltr inline-block font-bold'
                : 'font-bold'
            }
          >
            {correctAnswerText}
          </span>
        </div>
        {guide.finalAnswerLatex && (
          <div className="pt-1">
            <MathText text={`$$${guide.finalAnswerLatex}$$`} autoUpgradeMath={false} />
          </div>
        )}
      </div>

      {/* How to Solve a Similar Question */}
      {guide.similarQuestionTip && (
        <div className="rounded-lg bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/70 px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
          <Lightbulb
            className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div>
            <strong className="text-blue-800 dark:text-blue-300">
              {t.similarTipTitle}{' '}
            </strong>
            <MathText text={guide.similarQuestionTip} />
          </div>
        </div>
      )}
    </div>
  );
};
