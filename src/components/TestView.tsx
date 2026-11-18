import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Eraser,
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

interface TestViewProps {
  lang: Language;
  initialChapter: ChapterId;
  initialDifficulty: Difficulty;
  initialCount: QuestionCount;
  aiQuestions: MCQQuestion[];
  onSubmitTest: (
    chapterId: ChapterId,
    difficulty: Difficulty,
    questions: MCQQuestion[],
    answers: Record<string, number | null>
  ) => void;
  onBackDashboard: () => void;
}

export const TestView: React.FC<TestViewProps> = ({
  lang,
  initialChapter,
  initialDifficulty,
  initialCount,
  aiQuestions,
  onSubmitTest,
  onBackDashboard,
}) => {
  const isRtl = lang === 'ur';
  const t = UI_TEXT[lang].test;
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
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [confirmOpen, setConfirmOpen] = useState(false);

  const startFreshTest = (
    nextCh: ChapterId,
    nextDiff: Difficulty,
    nextCnt: QuestionCount
  ) => {
    const pool = getQuestionsForSelection(nextCh, nextDiff, aiQuestions);
    setQuestions(selectRandomizedQuestions(pool, nextCnt));
    setCurrentIndex(0);
    setAnswers({});
    setConfirmOpen(false);
  };

  const activeChapter = getLocalizedChapter(chapterId, lang);
  const currentQ = questions[currentIndex];
  const localizedQ = currentQ ? getLocalizedMCQ(currentQ, lang) : null;
  const currentSelected = currentQ ? answers[currentQ.id] ?? null : null;

  const answeredCount = questions.filter(
    (q) => answers[q.id] !== undefined && answers[q.id] !== null
  ).length;
  const unansweredCount = questions.length - answeredCount;

  const handleSelectOption = (optionIndex: number) => {
    if (!currentQ) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
  };

  const handleClearChoice = () => {
    if (!currentQ) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: null,
    }));
  };

  const handleConfirmSubmit = () => {
    setConfirmOpen(false);
    onSubmitTest(chapterId, difficulty, questions, answers);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Test Bar */}
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

          <div className="flex items-center gap-2.5">
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
              onClick={() => setConfirmOpen(true)}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
              {t.submitTestBtn}
            </button>
          </div>
        </div>

        {/* Configuration Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div>
            <label
              htmlFor="test-chapter"
              className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1"
            >
              {t.chapterLabel}
            </label>
            <select
              id="test-chapter"
              value={chapterId}
              onChange={(e) => {
                const next = e.target.value as ChapterId;
                setChapterId(next);
                startFreshTest(next, difficulty, questionCount);
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
              htmlFor="test-difficulty"
              className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1"
            >
              {t.difficultyLabel}
            </label>
            <select
              id="test-difficulty"
              value={difficulty}
              onChange={(e) => {
                const next = e.target.value as Difficulty;
                setDifficulty(next);
                startFreshTest(chapterId, next, questionCount);
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
              htmlFor="test-count"
              className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1"
            >
              {t.countLabel}
            </label>
            <select
              id="test-count"
              value={questionCount}
              onChange={(e) => {
                const next = Number(e.target.value) as QuestionCount;
                setQuestionCount(next);
                startFreshTest(chapterId, difficulty, next);
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

      {/* Two-Column Test Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Question Card */}
        {currentQ && localizedQ && (
          <article className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-7 space-y-6">
            {/* Question Number & Selection Status */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-2 font-medium text-slate-600 dark:text-slate-300 tabular-nums">
                <span>
                  {t.questionProgress(currentIndex + 1, questions.length)}
                </span>
                <span aria-hidden="true">·</span>
                <span>{localizedQ.topic}</span>
              </div>

              <div className="font-medium tabular-nums">
                {currentSelected !== null ? (
                  <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    {t.selectedOption(optionLabels[currentSelected])}
                  </span>
                ) : (
                  <span className="text-slate-500 dark:text-slate-400">
                    {t.notAnsweredYet}
                  </span>
                )}
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
                const isSelected = currentSelected === oIdx;
                const isPureMath = isRtl && !/[\u0600-\u06FF]/.test(optText);

                return (
                  <button
                    key={oIdx}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`w-full min-h-[52px] px-4 py-3.5 rounded-xl border ${
                      isRtl ? 'text-right' : 'text-left'
                    } flex items-center gap-3.5 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                      isSelected
                        ? 'border-blue-600 dark:border-blue-500 bg-blue-50/80 dark:bg-blue-950/50 text-slate-900 dark:text-white'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 text-slate-800 dark:text-slate-100'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                        isSelected
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
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                  disabled={currentIndex === 0}
                  className="min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <PrevArrow className="w-4 h-4" aria-hidden="true" />
                  {t.prevQuestion}
                </button>

                {currentSelected !== null && (
                  <button
                    type="button"
                    onClick={handleClearChoice}
                    className="min-h-[44px] px-3 py-2.5 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <Eraser className="w-3.5 h-3.5" aria-hidden="true" />
                    {t.clearChoice}
                  </button>
                )}
              </div>

              {currentIndex < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))
                  }
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap"
                >
                  {t.nextQuestion}
                  <NextArrow className="w-4 h-4" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmOpen(true)}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
                  {t.submitTestBtn}
                </button>
              )}
            </div>
          </article>
        )}

        {/* Question Navigator */}
        <aside className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-base text-slate-900 dark:text-white">
              {t.navigatorTitle}
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              {t.solvedOf(answeredCount, questions.length)}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-blue-600 inline-block" />
              {t.answeredCount(answeredCount)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 inline-block" />
              {t.unansweredCount(unansweredCount)}
            </span>
          </div>

          <div
            className={`grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 gap-2 max-h-[340px] overflow-y-auto ${
              isRtl ? 'pl-1' : 'pr-1'
            }`}
          >
            {questions.map((q, idx) => {
              const isCurrent = idx === currentIndex;
              const isAnswered =
                answers[q.id] !== undefined && answers[q.id] !== null;

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={t.navItemAria(idx + 1, isAnswered)}
                  aria-current={isCurrent ? 'step' : undefined}
                  className={`min-h-[40px] rounded-lg text-xs font-semibold tabular-nums transition-all ${
                    isCurrent
                      ? 'ring-2 ring-slate-900 dark:ring-white ring-offset-1 dark:ring-offset-slate-900'
                      : ''
                  } ${
                    isAnswered
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setConfirmOpen(true)}
            className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold inline-flex items-center justify-center gap-2"
          >
            <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
            {t.submitTestBtn}
          </button>
        </aside>
      </div>

      {/* Confirmation Dialog */}
      {confirmOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="submit-dialog-title"
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center shrink-0">
                <AlertCircle
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h2
                  id="submit-dialog-title"
                  className="font-display text-lg font-bold text-slate-900 dark:text-white"
                >
                  {t.confirmTitle}
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {t.confirmBody}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-slate-50 dark:bg-slate-800/70 rounded-xl p-3.5 text-center">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {t.totalQuestionsLabel}
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white tabular-nums">
                  {questions.length}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {t.solvedLabel}
                </div>
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                  {answeredCount}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {t.unsolvedLabel}
                </div>
                <div className="text-lg font-bold text-amber-600 dark:text-amber-400 tabular-nums">
                  {unansweredCount}
                </div>
              </div>
            </div>

            {unansweredCount > 0 && (
              <p className="text-xs text-amber-700 dark:text-amber-400">
                {t.unansweredWarning(unansweredCount)}
              </p>
            )}

            <div className="flex flex-col-reverse sm:flex-row gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setConfirmOpen(false)}
                className="flex-1 min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {t.reviewAnswersBtn}
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="flex-1 min-h-[44px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold"
              >
                {t.confirmSubmitBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

