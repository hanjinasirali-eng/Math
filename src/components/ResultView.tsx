import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { getLocalizedChapter } from '../data/chaptersMeta';
import { getLocalizedMCQ } from '../data/mathUtils';
import { BUILTIN_QUESTION_MAP } from '../data/questionBank';
import { Language, TestResult } from '../types/math';
import {
  UI_TEXT,
  getDifficultyLabel,
  getOptionLabels,
  getPerformanceStatusForLang,
} from '../utils/i18n';
import { SolutionStepsBlock } from './SolutionStepsBlock';

interface ResultViewProps {
  lang: Language;
  result: TestResult;
  onRetakeTest: () => void;
  onPracticeChapter: () => void;
  onBackDashboard: () => void;
}

type ReviewFilter = 'all' | 'correct' | 'incorrect' | 'unanswered';

export const ResultView: React.FC<ResultViewProps> = ({
  lang,
  result,
  onRetakeTest,
  onPracticeChapter,
  onBackDashboard,
}) => {
  const [filter, setFilter] = useState<ReviewFilter>('all');
  const isRtl = lang === 'ur';
  const t = UI_TEXT[lang].result;
  const optionLabels = getOptionLabels(lang);
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  const localizedChapterName = getLocalizedChapter(result.chapterId, lang).name;
  const diffLabel = getDifficultyLabel(result.difficulty, lang);
  const perfStatus = getPerformanceStatusForLang(result.percentage, lang);

  const filteredReview = result.review.filter((item) => {
    if (filter === 'correct') return item.selectedIndex === item.correctIndex;
    if (filter === 'incorrect') {
      return (
        item.selectedIndex !== null && item.selectedIndex !== item.correctIndex
      );
    }
    if (filter === 'unanswered') return item.selectedIndex === null;
    return true;
  });

  const statusTone =
    result.percentage >= 75
      ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900'
      : result.percentage >= 50
      ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900'
      : 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-900';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      {/* Summary */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-1.5">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {t.subHeader(localizedChapterName, diffLabel)}
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {t.title}
            </h1>
          </div>

          <div
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold self-start md:self-auto ${statusTone}`}
          >
            <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{perfStatus}</span>
          </div>
        </div>

        {/* All 8 Result Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.totalQuestions}
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
              {result.totalQuestions}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900">
            <div className="text-xs text-emerald-700 dark:text-emerald-400">
              {t.correctAnswers}
            </div>
            <div className="mt-1 text-2xl font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
              {result.correctCount}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-900">
            <div className="text-xs text-rose-700 dark:text-rose-400">
              {t.incorrectAnswers}
            </div>
            <div className="mt-1 text-2xl font-bold text-rose-700 dark:text-rose-400 tabular-nums">
              {result.incorrectCount}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900">
            <div className="text-xs text-amber-700 dark:text-amber-400">
              {t.unansweredQuestions}
            </div>
            <div className="mt-1 text-2xl font-bold text-amber-700 dark:text-amber-400 tabular-nums">
              {result.unansweredCount}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.totalMarks}
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
              {result.totalMarks}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.obtainedMarks}
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
              {result.obtainedMarks}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900">
            <div className="text-xs text-blue-700 dark:text-blue-400">
              {t.percentage}
            </div>
            <div className="mt-1 text-2xl font-bold text-blue-700 dark:text-blue-400 tabular-nums">
              {result.percentage}%
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.performanceStatus}
            </div>
            <div className="mt-1.5 text-sm font-bold text-slate-900 dark:text-white leading-snug">
              {perfStatus}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            onClick={onRetakeTest}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            {t.retakeTest}
          </button>
          <button
            type="button"
            onClick={onPracticeChapter}
            className="min-h-[44px] px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap"
          >
            <BookOpen
              className="w-4 h-4 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
            {t.practiceChapter(localizedChapterName)}
          </button>
          <button
            type="button"
            onClick={onBackDashboard}
            className="min-h-[44px] px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium inline-flex items-center gap-2 whitespace-nowrap"
          >
            <BackArrow className="w-4 h-4" aria-hidden="true" />
            {t.backDashboard}
          </button>
        </div>
      </section>

      {/* Detailed Answer Review */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {t.reviewHeading}
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-xl">
            {(
              [
                { id: 'all', label: t.filterAll(result.totalQuestions) },
                { id: 'correct', label: t.filterCorrect(result.correctCount) },
                {
                  id: 'incorrect',
                  label: t.filterIncorrect(result.incorrectCount),
                },
                {
                  id: 'unanswered',
                  label: t.filterUnanswered(result.unansweredCount),
                },
              ] as Array<{ id: ReviewFilter; label: string }>
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  filter === tab.id
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredReview.map((item) => {
            const origIndex = result.review.findIndex(
              (r) => r.questionId === item.questionId
            );
            const isCorrect = item.selectedIndex === item.correctIndex;
            const isUnanswered = item.selectedIndex === null;

            const enContent =
              item.en ?? BUILTIN_QUESTION_MAP[item.questionId]?.en;
            const loc = getLocalizedMCQ({ ...item, en: enContent }, lang);

            return (
              <article
                key={item.questionId}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                    {t.questionHeader(origIndex + 1, loc.topic)}
                  </span>

                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                      {t.badgeCorrect}
                    </span>
                  ) : isUnanswered ? (
                    <span className="inline-flex items-center gap-1.5 font-semibold text-amber-700 dark:text-amber-400">
                      <HelpCircle className="w-4 h-4" aria-hidden="true" />
                      {t.badgeUnanswered}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-semibold text-rose-700 dark:text-rose-400">
                      <XCircle className="w-4 h-4" aria-hidden="true" />
                      {t.badgeIncorrect}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
                  {loc.question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {loc.options.map((opt, oIdx) => {
                    const isRight = oIdx === item.correctIndex;
                    const isChosen = oIdx === item.selectedIndex;
                    const isPureMath = isRtl && !/[\u0600-\u06FF]/.test(opt);

                    let cls =
                      'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300';
                    if (isRight) {
                      cls =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 font-semibold';
                    } else if (isChosen && !isRight) {
                      cls =
                        'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100';
                    }

                    return (
                      <div
                        key={oIdx}
                        className={`px-3.5 py-2.5 rounded-xl border text-sm flex items-center justify-between gap-2 ${cls}`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="font-bold text-sm shrink-0">
                            {optionLabels[oIdx]}.
                          </span>
                          <span
                            className={`break-words ${
                              isPureMath ? 'math-ltr inline-block' : ''
                            }`}
                          >
                            {opt}
                          </span>
                        </div>
                        {isRight && (
                          <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 shrink-0">
                            {t.rightAnswerTag}
                          </span>
                        )}
                        {isChosen && !isRight && (
                          <span className="text-[11px] font-semibold text-rose-700 dark:text-rose-400 shrink-0">
                            {t.yourAnswerTag}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2 text-sm">
                  <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <span>
                      {t.studentSelectedLabel}{' '}
                      <strong className="text-slate-900 dark:text-white">
                        {item.selectedIndex !== null
                          ? `${optionLabels[item.selectedIndex]} (${loc.options[item.selectedIndex]})`
                          : t.notSelected}
                      </strong>
                    </span>
                    <span>
                      {t.correctAnswerLabel}{' '}
                      <strong className="text-emerald-700 dark:text-emerald-400">
                        {optionLabels[item.correctIndex]} (
                        {loc.options[item.correctIndex]})
                      </strong>
                    </span>
                  </div>

                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-3.5 sm:p-4 space-y-2">
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.stepByStepHeading}
                    </div>
                    <SolutionStepsBlock
                      lang={lang}
                      questionId={item.questionId}
                      chapterId={result.chapterId}
                      topic={loc.topic}
                      question={loc.question}
                      options={loc.options}
                      correctIndex={item.correctIndex}
                      selectedIndex={item.selectedIndex}
                      explanation={loc.explanation}
                      steps={loc.steps}
                      correctAnswerText={loc.options[item.correctIndex]}
                      optionLabel={optionLabels[item.correctIndex]}
                    />
                  </div>
                </div>
              </article>
            );
          })}

          {filteredReview.length === 0 && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center text-sm text-slate-500 dark:text-slate-400">
              {t.noQuestionsInFilter}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

