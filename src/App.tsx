/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { DashboardView } from './components/DashboardView';
import { Header } from './components/Header';
import { HistoryView } from './components/HistoryView';
import { MobileBottomNav } from './components/MobileBottomNav';
import { PracticeView } from './components/PracticeView';
import { ResultView } from './components/ResultView';
import { TestView } from './components/TestView';
import { getQuestionsForSelection } from './data/questionBank';
import {
  AppView,
  ChapterId,
  Difficulty,
  Language,
  MCQQuestion,
  PracticeProgress,
  QuestionCount,
  TestResult,
  UserPreferences,
} from './types/math';
import { UI_TEXT } from './utils/i18n';
import {
  appendAIQuestions,
  calculateTestResult,
  clearTestHistory,
  loadAIQuestions,
  loadPracticeProgress,
  loadPreferences,
  loadTestHistory,
  recordPracticeAttempt,
  savePreferences,
  saveTestResult,
} from './utils/storage';

export default function App() {
  const [prefs, setPrefs] = useState<UserPreferences>(() => loadPreferences());
  const [view, setView] = useState<AppView>('dashboard');
  const [aiQuestions, setAiQuestions] = useState<MCQQuestion[]>(() =>
    loadAIQuestions()
  );
  const [testHistory, setTestHistory] = useState<TestResult[]>(() =>
    loadTestHistory()
  );
  const [practiceProgress, setPracticeProgress] = useState<PracticeProgress>(
    () => loadPracticeProgress()
  );
  const [activeResult, setActiveResult] = useState<TestResult | null>(null);
  const [testSessionKey, setTestSessionKey] = useState<number>(1);

  const lang = prefs.language;

  // Sync theme, language, and direction on <html> and persist preferences
  useEffect(() => {
    const root = document.documentElement;
    if (prefs.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.lang = prefs.language;
    root.dir = prefs.language === 'ur' ? 'rtl' : 'ltr';
    document.title = UI_TEXT[prefs.language].appTitle;
    savePreferences(prefs);
  }, [prefs]);

  const updatePrefs = (patch: Partial<UserPreferences>) => {
    setPrefs((prev) => ({ ...prev, ...patch }));
  };

  const handleToggleTheme = () => {
    updatePrefs({ theme: prefs.theme === 'dark' ? 'light' : 'dark' });
  };

  const handleChangeLanguage = (language: Language) => {
    updatePrefs({ language });
  };

  const handleNavigate = (nextView: AppView) => {
    if (nextView === 'result' && !activeResult) {
      setView(testHistory[0] ? 'result' : 'dashboard');
      if (testHistory[0]) setActiveResult(testHistory[0]);
      return;
    }
    setView(nextView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartPractice = () => {
    setView('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartTest = () => {
    setTestSessionKey((k) => k + 1);
    setView('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitTest = (
    chapterId: ChapterId,
    difficulty: Difficulty,
    questions: MCQQuestion[],
    answers: Record<string, number | null>
  ) => {
    const result = calculateTestResult(
      chapterId,
      difficulty,
      questions,
      answers,
      lang
    );
    const updatedHistory = saveTestResult(result);
    setTestHistory(updatedHistory);
    setActiveResult(result);
    setView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRecordPractice = (chapterId: ChapterId, isCorrect: boolean) => {
    const updated = recordPracticeAttempt(chapterId, isCorrect);
    setPracticeProgress(updated);
  };

  const handleClearHistory = () => {
    clearTestHistory();
    setTestHistory([]);
    if (view === 'result') {
      setActiveResult(null);
      setView('history');
    }
  };

  const handleGenerateAIQuestions = async (
    chapterId: ChapterId,
    difficulty: Difficulty,
    count: number
  ): Promise<{
    added: number;
    message: string;
    isFallback: boolean;
    questions?: MCQQuestion[];
  }> => {
    const aiMsg = UI_TEXT[lang].ai;
    try {
      const existingPool = getQuestionsForSelection(
        chapterId,
        difficulty,
        aiQuestions
      );
      const existingPrompts = existingPool.slice(0, 25).map((q) => q.question);

      const response = await fetch('/api/questions/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chapterId,
          difficulty,
          count,
          lang,
          existingPrompts,
        }),
      });

      const data = (await response.json()) as {
        ok: boolean;
        fallback?: boolean;
        error?: string;
        questions?: MCQQuestion[];
      };

      if (!response.ok || !data.ok || !Array.isArray(data.questions)) {
        return {
          added: 0,
          isFallback: true,
          message: data.error || aiMsg.fallbackUnavailable,
        };
      }

      const prevCount = aiQuestions.length;
      const merged = appendAIQuestions(data.questions);
      const added = merged.length - prevCount;
      setAiQuestions(merged);

      return {
        added,
        isFallback: false,
        questions: data.questions,
        message: added > 0 ? aiMsg.addedMessage(added) : aiMsg.alreadyExists,
      };
    } catch {
      return {
        added: 0,
        isFallback: true,
        message: aiMsg.networkError,
      };
    }
  };

  const appT = UI_TEXT[lang];

  return (
    <div
      dir={lang === 'ur' ? 'rtl' : 'ltr'}
      className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-16 md:pb-0"
    >
      <Header
        currentView={view}
        onNavigate={handleNavigate}
        theme={prefs.theme}
        onToggleTheme={handleToggleTheme}
        lang={lang}
        onChangeLanguage={handleChangeLanguage}
      />

      <main className="flex-1">
        {view === 'dashboard' && (
          <DashboardView
            lang={lang}
            selectedChapter={prefs.chapterId}
            selectedDifficulty={prefs.difficulty}
            selectedCount={prefs.questionCount}
            aiQuestions={aiQuestions}
            testHistory={testHistory}
            practiceProgress={practiceProgress}
            onSelectChapter={(chapterId: ChapterId) =>
              updatePrefs({ chapterId })
            }
            onSelectDifficulty={(difficulty: Difficulty) =>
              updatePrefs({ difficulty })
            }
            onSelectCount={(questionCount: QuestionCount) =>
              updatePrefs({ questionCount })
            }
            onStartPractice={handleStartPractice}
            onStartTest={handleStartTest}
            onOpenHistory={() => handleNavigate('history')}
            onGenerateAIQuestions={handleGenerateAIQuestions}
          />
        )}

        {view === 'practice' && (
          <PracticeView
            lang={lang}
            initialChapter={prefs.chapterId}
            initialDifficulty={prefs.difficulty}
            initialCount={prefs.questionCount}
            aiQuestions={aiQuestions}
            onRecordPractice={handleRecordPractice}
            onGenerateAIQuestions={handleGenerateAIQuestions}
            onBackDashboard={() => handleNavigate('dashboard')}
          />
        )}

        {view === 'test' && (
          <TestView
            key={testSessionKey}
            lang={lang}
            initialChapter={prefs.chapterId}
            initialDifficulty={prefs.difficulty}
            initialCount={prefs.questionCount}
            aiQuestions={aiQuestions}
            onSubmitTest={handleSubmitTest}
            onBackDashboard={() => handleNavigate('dashboard')}
          />
        )}

        {view === 'result' && activeResult && (
          <ResultView
            lang={lang}
            result={activeResult}
            onRetakeTest={handleStartTest}
            onPracticeChapter={() => {
              updatePrefs({
                chapterId: activeResult.chapterId,
                difficulty: activeResult.difficulty,
              });
              setView('practice');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackDashboard={() => handleNavigate('dashboard')}
          />
        )}

        {view === 'history' && (
          <HistoryView
            lang={lang}
            testHistory={testHistory}
            practiceProgress={practiceProgress}
            onViewResult={(res) => {
              setActiveResult(res);
              setView('result');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onClearHistory={handleClearHistory}
            onBackDashboard={() => handleNavigate('dashboard')}
          />
        )}
      </main>

      <footer className="hidden md:block border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-5 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span>{appT.appTitle}</span>
          <span>{appT.footerChapters}</span>
        </div>
      </footer>

      <MobileBottomNav
        lang={lang}
        currentView={view}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

