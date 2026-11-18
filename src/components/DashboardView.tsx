import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { CHAPTERS, QUESTION_COUNTS, getLocalizedChapter } from '../data/chaptersMeta';
import { getChapterTotalCount, getQuestionsForSelection } from '../data/questionBank';
import {
  ChapterId,
  Difficulty,
  Language,
  MCQQuestion,
  PracticeProgress,
  QuestionCount,
  TestResult,
} from '../types/math';
import { UI_TEXT, getDifficultyLabel } from '../utils/i18n';
import { ChapterGlyph, MathLogo } from './MathLogo';

interface DashboardViewProps {
  selectedChapter: ChapterId;
  selectedDifficulty: Difficulty;
  selectedCount: QuestionCount;
  aiQuestions: MCQQuestion[];
  testHistory: TestResult[];
  practiceProgress: PracticeProgress;
  lang: Language;
  onSelectChapter: (chapterId: ChapterId) => void;
  onSelectDifficulty: (difficulty: Difficulty) => void;
  onSelectCount: (count: QuestionCount) => void;
  onStartPractice: () => void;
  onStartTest: () => void;
  onOpenHistory: () => void;
  onGenerateAIQuestions: (
    chapterId: ChapterId,
    difficulty: Difficulty,
    count: number
  ) => Promise<{ added: number; message: string; isFallback: boolean }>;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  selectedChapter,
  selectedDifficulty,
  selectedCount,
  aiQuestions,
  testHistory,
  practiceProgress,
  lang,
  onSelectChapter,
  onSelectDifficulty,
  onSelectCount,
  onStartPractice,
  onStartTest,
  onOpenHistory,
  onGenerateAIQuestions,
}) => {
  const [aiLoading, setAiLoading] = useState(false);
  const [aiStatus, setAiStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const t = UI_TEXT[lang];
  const isRtl = lang === 'ur';
  const activeChapter = getLocalizedChapter(selectedChapter, lang);
  const availableForCurrent = getQuestionsForSelection(
    selectedChapter,
    selectedDifficulty,
    aiQuestions
  ).length;

  const bestScore =
    testHistory.length > 0
      ? Math.max(...testHistory.map((item) => item.percentage))
      : null;

  const practiceAccuracy =
    practiceProgress.totalAttempted > 0
      ? Math.round(
          (practiceProgress.totalCorrect / practiceProgress.totalAttempted) * 100
        )
      : null;

  const handleGenerateMore = async () => {
    setAiLoading(true);
    setAiStatus(null);
    const result = await onGenerateAIQuestions(
      selectedChapter,
      selectedDifficulty,
      5
    );
    setAiLoading(false);
    setAiStatus({
      message: result.message,
      isError: result.isFallback && result.added === 0,
    });
  };

  const lastTestChapterName =
    testHistory.length > 0
      ? getLocalizedChapter(testHistory[0].chapterId, lang).name
      : '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-3">
            <MathLogo className="w-10 h-10 shrink-0" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {t.classHeading}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            {t.appTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.dashboard.heroSubtitle}
          </p>
        </div>

        {/* Local Performance Summary */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shrink-0">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.dashboard.completedTests}
            </div>
            <div className="mt-1 text-xl font-bold text-slate-900 dark:text-white tabular-nums">
              {testHistory.length}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.dashboard.bestScore}
            </div>
            <div className="mt-1 text-xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
              {bestScore !== null ? `${bestScore}%` : '—'}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.dashboard.practicedQuestions}
            </div>
            <div className="mt-1 text-xl font-bold text-slate-900 dark:text-white tabular-nums">
              {practiceProgress.totalAttempted}
              {practiceAccuracy !== null && (
                <span
                  className={`text-xs font-medium text-emerald-600 dark:text-emerald-400 ${
                    isRtl ? 'mr-1' : 'ml-1'
                  }`}
                >
                  ({practiceAccuracy}%)
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Five Chapters */}
      <section aria-labelledby="chapters-heading" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2
            id="chapters-heading"
            className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white"
          >
            {t.dashboard.step1Heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t.dashboard.step1Sub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CHAPTERS.map((rawChapter) => {
            const chapter = getLocalizedChapter(rawChapter.id, lang);
            const isSelected = selectedChapter === chapter.id;
            const totalInChapter = getChapterTotalCount(chapter.id, aiQuestions);
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => onSelectChapter(chapter.id)}
                aria-pressed={isSelected}
                className={`group ${
                  isRtl ? 'text-right' : 'text-left'
                } rounded-2xl p-5 transition-all duration-150 flex flex-col justify-between min-h-[168px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-semibold ${
                        isSelected
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {t.dashboard.chapterPrefix} {chapter.number}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                      }`}
                    >
                      <ChapterGlyph chapterId={chapter.id} className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white leading-snug">
                      {chapter.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {chapter.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 tabular-nums">
                    {totalInChapter} {t.dashboard.questionsWord}
                  </span>
                  {isSelected && (
                    <span className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      {t.dashboard.selectedBadge}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Step 2 & 3: Difficulty, Question Count, and Start */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6">
          {/* Difficulty */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {t.dashboard.step2Heading}
              </h2>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {t.dashboard.difficulties[selectedDifficulty].description}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(['easy', 'medium', 'hard'] as Difficulty[]).map((level) => {
                const active = selectedDifficulty === level;
                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => onSelectDifficulty(level)}
                    aria-pressed={active}
                    className={`min-h-[48px] px-4 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                      active
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {t.dashboard.difficulties[level].button}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Count */}
          <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {t.dashboard.step3Heading}
              </h2>
              <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                {t.dashboard.maxLimitNote(
                  activeChapter.name,
                  getDifficultyLabel(selectedDifficulty, lang),
                  availableForCurrent
                )}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {QUESTION_COUNTS.map((count) => {
                const active = selectedCount === count;
                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => onSelectCount(count)}
                    aria-pressed={active}
                    className={`min-h-[44px] px-3 py-2.5 rounded-xl text-sm font-medium tabular-nums whitespace-nowrap transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                      active
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {count} {t.dashboard.questionsWord}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Practice and Test Start Buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onStartPractice}
              className="flex-1 min-h-[50px] px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-900 dark:text-white font-semibold text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              {t.dashboard.startPractice}
            </button>

            <button
              type="button"
              onClick={onStartTest}
              className="flex-1 min-h-[50px] px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap shadow-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
              {t.dashboard.startTest}
              {isRtl ? (
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              ) : (
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Selected Chapter Sidebar & AI Question Generator */}
        <aside className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {t.dashboard.selectedChapterLabel(activeChapter.number)}
              </div>
              <h3 className="mt-1 font-display text-xl font-bold text-slate-900 dark:text-white">
                {activeChapter.name}
              </h3>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {t.dashboard.includedTopics}
              </div>
              <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                {activeChapter.keyTopics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"
                    />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {t.dashboard.aiHeading}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {getDifficultyLabel(selectedDifficulty, lang)}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.dashboard.aiDescription(activeChapter.name)}
              </p>

              <button
                type="button"
                onClick={handleGenerateMore}
                disabled={aiLoading}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
              >
                {aiLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    {t.dashboard.aiGenerating}
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    {t.dashboard.aiButton}
                  </>
                )}
              </button>

              {aiStatus && (
                <p
                  role="status"
                  className={`text-xs leading-relaxed ${
                    aiStatus.isError
                      ? 'text-amber-700 dark:text-amber-400'
                      : 'text-emerald-700 dark:text-emerald-400'
                  }`}
                >
                  {aiStatus.message}
                </p>
              )}
            </div>
          </div>

          {testHistory.length > 0 && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-xs">
              <span className="text-slate-500 dark:text-slate-400">
                {t.dashboard.lastTest(lastTestChapterName, testHistory[0].percentage)}
              </span>
              <button
                type="button"
                onClick={onOpenHistory}
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap"
              >
                {t.dashboard.viewHistory}
              </button>
            </div>
          )}
        </aside>
      </section>
    </div>
  );
};
