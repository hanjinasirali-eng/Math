import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Trash2,
} from 'lucide-react';
import { CHAPTERS, getLocalizedChapter } from '../data/chaptersMeta';
import { Language, PracticeProgress, TestResult } from '../types/math';
import {
  UI_TEXT,
  getDifficultyLabel,
  getPerformanceStatusForLang,
} from '../utils/i18n';

interface HistoryViewProps {
  lang: Language;
  testHistory: TestResult[];
  practiceProgress: PracticeProgress;
  onViewResult: (result: TestResult) => void;
  onClearHistory: () => void;
  onBackDashboard: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  lang,
  testHistory,
  practiceProgress,
  onViewResult,
  onClearHistory,
  onBackDashboard,
}) => {
  const [confirmClear, setConfirmClear] = useState(false);
  const isRtl = lang === 'ur';
  const t = UI_TEXT[lang].history;
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;
  const ItemChevron = isRtl ? ChevronLeft : ChevronRight;

  const overallAccuracy =
    practiceProgress.totalAttempted > 0
      ? Math.round(
          (practiceProgress.totalCorrect / practiceProgress.totalAttempted) * 100
        )
      : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
            {t.subBadge}
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {t.title}
          </h1>
        </div>

        <button
          type="button"
          onClick={onBackDashboard}
          className="min-h-[44px] px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 inline-flex items-center gap-2 whitespace-nowrap"
        >
          <BackArrow className="w-4 h-4" aria-hidden="true" />
          {t.dashboardBtn}
        </button>
      </div>

      {/* Chapter-wise Practice Progress */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            {t.chapterProgressTitle}
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
            {t.totalPracticed(
              practiceProgress.totalAttempted,
              practiceProgress.totalAttempted > 0 ? `${overallAccuracy}%` : '—'
            )}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {CHAPTERS.map((ch) => {
            const locCh = getLocalizedChapter(ch.id, lang);
            const stats = practiceProgress.byChapter[ch.id] ?? {
              attempted: 0,
              correct: 0,
            };
            const acc =
              stats.attempted > 0
                ? Math.round((stats.correct / stats.attempted) * 100)
                : null;
            return (
              <div
                key={ch.id}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1.5"
              >
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {t.chapterPrefix} {locCh.number}
                </div>
                <div className="font-semibold text-sm text-slate-900 dark:text-white truncate">
                  {locCh.name}
                </div>
                <div className="pt-1 text-xs text-slate-600 dark:text-slate-300 tabular-nums">
                  {t.correctOutOf(stats.correct, stats.attempted)}
                  {acc !== null && (
                    <span
                      className={`${
                        isRtl ? 'mr-1.5' : 'ml-1.5'
                      } font-semibold text-blue-600 dark:text-blue-400`}
                    >
                      ({acc}%)
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Past Tests List */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            {t.completedTestsTitle(testHistory.length)}
          </h2>

          {testHistory.length > 0 && (
            <button
              type="button"
              onClick={() => setConfirmClear(true)}
              className="min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 inline-flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
              {t.clearHistoryBtn}
            </button>
          )}
        </div>

        {testHistory.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center space-y-3">
            <ClipboardCheck
              className="w-8 h-8 text-slate-400 mx-auto"
              aria-hidden="true"
            />
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t.emptyMessage}
            </p>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl divide-y divide-slate-100 dark:divide-slate-800">
            {testHistory.map((item) => {
              const chapterName = getLocalizedChapter(item.chapterId, lang).name;
              const diffLabel = getDifficultyLabel(item.difficulty, lang);
              const dateStr = new Date(item.completedAt).toLocaleDateString(
                lang === 'en' ? 'en-US' : 'ur-PK',
                {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }
              );
              const statusText = getPerformanceStatusForLang(
                item.percentage,
                lang
              );

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onViewResult(item)}
                  className={`w-full p-4 sm:p-5 ${
                    isRtl ? 'text-right' : 'text-left'
                  } hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 first:rounded-t-2xl last:rounded-b-2xl`}
                >
                  <div className="space-y-1">
                    <div className="font-display font-semibold text-base text-slate-900 dark:text-white">
                      {chapterName}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                      {t.testMeta(diffLabel, item.totalQuestions, dateStr)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-5">
                    <div
                      className={`${
                        isRtl ? 'text-right sm:text-left' : 'text-left sm:text-right'
                      } tabular-nums`}
                    >
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {item.obtainedMarks}/{item.totalMarks} ({item.percentage}%)
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {statusText}
                      </div>
                    </div>
                    <ItemChevron
                      className="w-5 h-5 text-slate-400 shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {confirmClear && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="clear-history-title"
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
            <h3
              id="clear-history-title"
              className="font-display text-lg font-bold text-slate-900 dark:text-white"
            >
              {t.confirmClearTitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t.confirmClearBody}
            </p>
            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setConfirmClear(false)}
                className="flex-1 min-h-[44px] px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                {t.cancelBtn}
              </button>
              <button
                type="button"
                onClick={() => {
                  onClearHistory();
                  setConfirmClear(false);
                }}
                className="flex-1 min-h-[44px] px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold"
              >
                {t.confirmBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

