import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  RefreshCw,
  Sparkles,
  XCircle,
} from 'lucide-react';
import {
  CHAPTERS,
  QUESTION_COUNTS,
  getLocalizedChapter,
} from '../data/chaptersMeta';
import { getLocalizedMCQ } from '../data/mathUtils';
import {
  getQuestionsForSelection,
  selectRandomizedQuestions,
} from '../data/questionBank';
import {
  ChapterId,
  Difficulty,
  Language,
  MCQQuestion,
  QuestionCount,
} from '../types/math';
import { UI_TEXT, getOptionLabels } from '../utils/i18n';
import { SolutionStepsBlock } from './SolutionStepsBlock';

interface PracticeViewProps {
  lang: Language;
  initialChapter: ChapterId;
  initialDifficulty: Difficulty;
  initialCount: QuestionCount;
  aiQuestions: MCQQuestion[];
  onRecordPractice: (chapterId: ChapterId, isCorrect: boolean) => void;
  onGenerateAIQuestions: (
    chapterId: ChapterId,
    difficulty: Difficulty,
    count: number
  ) => Promise<{
    added: number;
    message: string;
    isFallback: boolean;
    questions?: MCQQuestion[];
  }>;
  onBackDashboard: () => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  lang,
  initialChapter,
  initialDifficulty,
  initialCount,
  aiQuestions,
  onRecordPractice,
  onGenerateAIQuestions,
  onBackDashboard,
}) => {
  const isRtl = lang === 'ur';
  const t = UI_TEXT[lang].practice;
  const dt = UI_TEXT[lang].dashboard;
  const optionLabels = getOptionLabels(lang);
  const PrevArrow = isRtl ? ArrowRight : ArrowLeft;
  const NextArrow = isRtl ? ArrowLeft : ArrowRight;

  const [chapterId, setChapterId] = useState<ChapterId>(initialChapter);
  const [difficulty, setDifficulty] = useState<Difficulty>(initialDifficulty);
  const [questionCount, setQuestionCount] =
    useState<QuestionCount>(initialCount);

  const [questions, setQuestions] = useState<MCQQuestion[]>(() => {
    const pool = getQuestionsForSelection(
      initialChapter,
      initialDifficulty,
      aiQuestions
    );
    return selectRandomizedQuestions(pool, initialCount);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number>
  >({});
  const [recordedIds, setRecordedIds] = useState<Record<string, boolean>>({});
  const [showCorrectSteps, setShowCorrectSteps] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiNotice, setAiNotice] = useState<string | null>(null);

  const loadNewPracticeSet = (
    nextChapter: ChapterId,
    nextDifficulty: Difficulty,
    nextCount: QuestionCount
  ) => {
    const pool = getQuestionsForSelection(
      nextChapter,
      nextDifficulty,
      aiQuestions
    );
    setQuestions(selectRandomizedQuestions(pool, nextCount));
    setCurrentIndex(0);
    setSelectedAnswers({});
    setRecordedIds({});
    setShowCorrectSteps(false);
    setAiNotice(null);
  };

  useEffect(() => {
    setChapterId(initialChapter);
    setDifficulty(initialDifficulty);
    setQuestionCount(initialCount);
    const pool = getQuestionsForSelection(
      initialChapter,
      initialDifficulty,
      aiQuestions
    );
    setQuestions(selectRandomizedQuestions(pool, initialCount));
    setCurrentIndex(0);
    setSelectedAnswers({});
    setRecordedIds({});
    setShowCorrectSteps(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialChapter, initialDifficulty, initialCount]);

  useEffect(() => {
    setShowCorrectSteps(false);
  }, [currentIndex]);

  const activeChapter = getLocalizedChapter(chapterId, lang);
  const currentQ = questions[currentIndex];
  const localizedQ = currentQ ? getLocalizedMCQ(currentQ, lang) : null;
  const selectedOpt = currentQ ? selectedAnswers[currentQ.id] : undefined;
  const hasAnswered = selectedOpt !== undefined;
  const isCorrect =
    hasAnswered && currentQ ? selectedOpt === currentQ.correctIndex : false;

  const answeredCount = Object.keys(selectedAnswers).length;
  const correctSoFar = questions.reduce((acc, q) => {
    const sel = selectedAnswers[q.id];
    return sel !== undefined && sel === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const handleSelectOption = (optionIndex: number) => {
    if (!currentQ) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));

    if (!recordedIds[currentQ.id]) {
      setRecordedIds((prev) => ({ ...prev, [currentQ.id]: true }));
      onRecordPractice(chapterId, optionIndex === currentQ.correctIndex);
    }
  };

  const handleGenerateAI = async () => {
    setAiLoading(true);
    setAiNotice(null);
    const res = await onGenerateAIQuestions(chapterId, difficulty, 5);
    setAiLoading(false);
    setAiNotice(res.message);
    if (res.questions && res.questions.length > 0) {
      setQuestions((prev) => {
        const existingTexts = new Set(
          prev.map((p) => p.question.trim().toLowerCase())
        );
        const fresh = res.questions!.filter(
          (item) => !existingTexts.has(item.question.trim().toLowerCase())
        );
        if (fresh.length === 0) return prev;
        return [...prev, ...fresh].slice(0, 100);
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Practice Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
              {t.badge}
            </div>
            <h1 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {t.chapterTitle(activeChapter.number, activeChapter.name)}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onBackDashboard}
              className="min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <PrevArrow className="w-4 h-4" aria-hidden="true" />
              {t.dashboardBtn}
            </button>
            <button
              type="button"
              onClick={() =>
                loadNewPracticeSet(chapterId, difficulty, questionCount)
              }
              className="min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <RefreshCw className="w-4 h-4" aria-hidden="true" />
              {t.newSetBtn}
            </button>
          </div>
        </div>

        {/* Filter Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div>
            <label
              htmlFor="practice-chapter"
              className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1"
            >
              {t.chapterLabel}
            </label>
            <select
              id="practice-chapter"
              value={chapterId}
              onChange={(e) => {
                const next = e.target.value as ChapterId;
                setChapterId(next);
                loadNewPracticeSet(next, difficulty, questionCount);
              }}
              className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white"
            >
              {CHAPTERS.map((ch) => {
                const locCh = getLocalizedChapter(ch.id, lang);
                return (
                  <option key={ch.id} value={ch.id}>
                    {t.chapterTitle(locCh.number, locCh.name)}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label
              htmlFor="practice-difficulty"
              className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1"
            >
              {t.difficultyLabel}
            </label>
            <select
              id="practice-difficulty"
              value={difficulty}
              onChange={(e) => {
                const next = e.target.value as Difficulty;
                setDifficulty(next);
                loadNewPracticeSet(chapterId, next, questionCount);
              }}
              className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white"
            >
              <option value="easy">{dt.difficulties.easy.button}</option>
              <option value="medium">{dt.difficulties.medium.button}</option>
              <option value="hard">{dt.difficulties.hard.button}</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="practice-count"
              className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1"
            >
              {t.countLabel}
            </label>
            <select
              id="practice-count"
              value={questionCount}
              onChange={(e) => {
                const next = Number(e.target.value) as QuestionCount;
                setQuestionCount(next);
                loadNewPracticeSet(chapterId, difficulty, next);
              }}
              className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white tabular-nums"
            >
              {QUESTION_COUNTS.map((cnt) => (
                <option key={cnt} value={cnt}>
                  {cnt} {dt.questionsWord}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Question Card */}
      {currentQ && localizedQ && (
        <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-7 space-y-6">
          {/* Question Number & Selection Status */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium tabular-nums">
              <span>{t.questionProgress(currentIndex + 1, questions.length)}</span>
              <span aria-hidden="true">·</span>
              <span>{localizedQ.topic}</span>
              {currentQ.source === 'ai' && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    {t.aiTag}
                  </span>
                </>
              )}
            </div>

            <div className="text-slate-500 dark:text-slate-400 tabular-nums">
              {hasAnswered ? (
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {t.selectedOption(optionLabels[selectedOpt!])}
                </span>
              ) : (
                <span>{t.noAnswerYet}</span>
              )}
              <span aria-hidden="true" className="mx-2">
                ·
              </span>
              <span>{t.scoreLabel(correctSoFar, answeredCount)}</span>
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white leading-relaxed">
            {localizedQ.question}
          </h2>

          {/* Four Options */}
          <div
            className="space-y-3"
            role="radiogroup"
            aria-label={t.optionsAria}
          >
            {localizedQ.options.map((optText, oIdx) => {
              const isSelected = selectedOpt === oIdx;
              const isRightOption = currentQ.correctIndex === oIdx;
              const isPureMath = isRtl && !/[\u0600-\u06FF]/.test(optText);

              let stateClasses =
                'border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-500 text-slate-900 dark:text-slate-100';

              if (hasAnswered) {
                if (isRightOption) {
                  stateClasses =
                    'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100';
                } else if (isSelected && !isRightOption) {
                  stateClasses =
                    'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-950 dark:text-rose-100';
                } else {
                  stateClasses =
                    'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 opacity-80';
                }
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => handleSelectOption(oIdx)}
                  className={`w-full min-h-[52px] px-4 py-3.5 rounded-xl border ${
                    isRtl ? 'text-right' : 'text-left'
                  } flex items-center justify-between gap-3 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${stateClasses}`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                        hasAnswered && isRightOption
                          ? 'bg-emerald-600 text-white'
                          : hasAnswered && isSelected && !isRightOption
                          ? 'bg-rose-600 text-white'
                          : isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {optionLabels[oIdx]}
                    </span>
                    <span
                      className={`text-sm sm:text-base font-medium break-words ${
                        isPureMath ? 'math-ltr inline-block' : ''
                      }`}
                    >
                      {optText}
                    </span>
                  </div>

                  {hasAnswered && isRightOption && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 shrink-0">
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                      {t.correctOptionTag}
                    </span>
                  )}
                  {hasAnswered && isSelected && !isRightOption && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 dark:text-rose-400 shrink-0">
                      <XCircle className="w-4 h-4" aria-hidden="true" />
                      {t.yourChoiceTag}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Feedback & Step-by-Step Solution */}
          {hasAnswered && (
            <div
              role="status"
              className={`rounded-xl p-4 sm:p-5 border space-y-3 ${
                isCorrect
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900'
                  : 'bg-rose-50/60 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900'
              }`}
            >
              {isCorrect ? (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-emerald-800 dark:text-emerald-300">
                      <CheckCircle2
                        className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{t.correctBanner}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowCorrectSteps((prev) => !prev)}
                      className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:underline"
                    >
                      {showCorrectSteps ? t.hideSteps : t.showSteps}
                    </button>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {t.shortExplanation}{' '}
                    </span>
                    {localizedQ.explanation}
                  </p>

                  {showCorrectSteps && (
                    <div className="pt-2 border-t border-emerald-200/70 dark:border-emerald-900/70">
                      <SolutionStepsBlock
                        lang={lang}
                        questionId={currentQ.id}
                        chapterId={chapterId}
                        topic={localizedQ.topic}
                        question={localizedQ.question}
                        options={localizedQ.options}
                        correctIndex={currentQ.correctIndex}
                        selectedIndex={selectedOpt}
                        explanation={localizedQ.explanation}
                        steps={localizedQ.steps}
                        correctAnswerText={
                          localizedQ.options[currentQ.correctIndex]
                        }
                        optionLabel={optionLabels[currentQ.correctIndex]}
                      />
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-rose-800 dark:text-rose-300">
                      <XCircle
                        className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{t.wrongBanner}</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {t.correctAnswerLabel}{' '}
                      <span className="text-emerald-700 dark:text-emerald-400">
                        {t.optionPrefix} {optionLabels[currentQ.correctIndex]} (
                        <span
                          className={
                            isRtl &&
                            !/[\u0600-\u06FF]/.test(
                              localizedQ.options[currentQ.correctIndex]
                            )
                              ? 'math-ltr inline-block'
                              : ''
                          }
                        >
                          {localizedQ.options[currentQ.correctIndex]}
                        </span>
                        )
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-rose-200/70 dark:border-rose-900/70">
                    <SolutionStepsBlock
                      lang={lang}
                      questionId={currentQ.id}
                      chapterId={chapterId}
                      topic={localizedQ.topic}
                      question={localizedQ.question}
                      options={localizedQ.options}
                      correctIndex={currentQ.correctIndex}
                      selectedIndex={selectedOpt}
                      explanation={localizedQ.explanation}
                      steps={localizedQ.steps}
                      correctAnswerText={
                        localizedQ.options[currentQ.correctIndex]
                      }
                      optionLabel={optionLabels[currentQ.correctIndex]}
                      autoFetchAI={true}
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {/* Previous / AI Generate / Next Navigation */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 inline-flex items-center gap-2 whitespace-nowrap"
            >
              <PrevArrow className="w-4 h-4" aria-hidden="true" />
              {t.prevQuestion}
            </button>

            <button
              type="button"
              onClick={handleGenerateAI}
              disabled={aiLoading}
              className="min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 inline-flex items-center gap-1.5 whitespace-nowrap disabled:opacity-60"
            >
              {aiLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  {t.addAiLoading}
                </>
              ) : (
                <>
                  <Sparkles
                    className="w-4 h-4 text-blue-600 dark:text-blue-400"
                    aria-hidden="true"
                  />
                  {t.addAiBtn}
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))
              }
              disabled={currentIndex === questions.length - 1}
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold disabled:opacity-40 inline-flex items-center gap-2 whitespace-nowrap"
            >
              {t.nextQuestion}
              <NextArrow className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {aiNotice && (
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {aiNotice}
            </p>
          )}
        </article>
      )}
    </div>
  );
};

