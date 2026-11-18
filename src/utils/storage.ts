import {
  ChapterId,
  Difficulty,
  Language,
  MCQQuestion,
  PracticeProgress,
  QuestionCount,
  TestAnswerRecord,
  TestResult,
  UserPreferences,
} from '../types/math';
import { getLocalizedChapter } from '../data/chaptersMeta';
import { getPerformanceStatusForLang } from './i18n';

const KEYS = {
  PREFS: 'c8_math_mcq_preferences_v1',
  LANGUAGE: 'c8_math_mcq_language_v1',
  TEST_HISTORY: 'c8_math_mcq_test_history_ur_v1',
  PRACTICE_PROGRESS: 'c8_math_mcq_practice_progress_ur_v1',
  AI_QUESTIONS: 'c8_math_mcq_ai_questions_ur_v1',
};

const DEFAULT_PREFS: UserPreferences = {
  chapterId: 'numbers',
  difficulty: 'easy',
  questionCount: 10,
  theme: 'light',
  language: 'ur',
};

const DEFAULT_PRACTICE: PracticeProgress = {
  totalAttempted: 0,
  totalCorrect: 0,
  byChapter: {
    numbers: { attempted: 0, correct: 0 },
    algebra: { attempted: 0, correct: 0 },
    measurement: { attempted: 0, correct: 0 },
    geometry: { attempted: 0, correct: 0 },
    statistics: { attempted: 0, correct: 0 },
  },
  lastUpdated: new Date().toISOString(),
};

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function loadPreferences(): UserPreferences {
  if (typeof window === 'undefined') return DEFAULT_PREFS;
  const parsed = safeParse<Partial<UserPreferences>>(
    window.localStorage.getItem(KEYS.PREFS),
    {}
  );
  const storedLang = window.localStorage.getItem(KEYS.LANGUAGE);
  const validChapter: ChapterId =
    parsed.chapterId &&
    ['numbers', 'algebra', 'measurement', 'geometry', 'statistics'].includes(
      parsed.chapterId
    )
      ? parsed.chapterId
      : DEFAULT_PREFS.chapterId;
  const validDiff: Difficulty =
    parsed.difficulty &&
    ['easy', 'medium', 'hard'].includes(parsed.difficulty)
      ? parsed.difficulty
      : DEFAULT_PREFS.difficulty;
  const validCount: QuestionCount =
    parsed.questionCount &&
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].includes(parsed.questionCount)
      ? parsed.questionCount
      : DEFAULT_PREFS.questionCount;
  const validTheme = parsed.theme === 'dark' ? 'dark' : 'light';
  const rawLang = parsed.language ?? storedLang;
  const validLanguage: Language =
    rawLang === 'en' || rawLang === 'ur' ? rawLang : DEFAULT_PREFS.language;

  return {
    chapterId: validChapter,
    difficulty: validDiff,
    questionCount: validCount,
    theme: validTheme,
    language: validLanguage,
  };
}

export function savePreferences(prefs: UserPreferences): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(KEYS.PREFS, JSON.stringify(prefs));
  window.localStorage.setItem(KEYS.LANGUAGE, prefs.language);
}

export function loadTestHistory(): TestResult[] {
  if (typeof window === 'undefined') return [];
  const list = safeParse<TestResult[]>(
    window.localStorage.getItem(KEYS.TEST_HISTORY),
    []
  );
  return Array.isArray(list) ? list : [];
}

export function saveTestResult(result: TestResult): TestResult[] {
  const existing = loadTestHistory();
  const updated = [result, ...existing].slice(0, 50);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(KEYS.TEST_HISTORY, JSON.stringify(updated));
  }
  return updated;
}

export function clearTestHistory(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(KEYS.TEST_HISTORY);
}

export function loadPracticeProgress(): PracticeProgress {
  if (typeof window === 'undefined') return DEFAULT_PRACTICE;
  const parsed = safeParse<Partial<PracticeProgress>>(
    window.localStorage.getItem(KEYS.PRACTICE_PROGRESS),
    {}
  );
  return {
    totalAttempted: Number(parsed.totalAttempted) || 0,
    totalCorrect: Number(parsed.totalCorrect) || 0,
    byChapter: {
      numbers: parsed.byChapter?.numbers ?? { attempted: 0, correct: 0 },
      algebra: parsed.byChapter?.algebra ?? { attempted: 0, correct: 0 },
      measurement: parsed.byChapter?.measurement ?? { attempted: 0, correct: 0 },
      geometry: parsed.byChapter?.geometry ?? { attempted: 0, correct: 0 },
      statistics: parsed.byChapter?.statistics ?? { attempted: 0, correct: 0 },
    },
    lastUpdated: parsed.lastUpdated || new Date().toISOString(),
  };
}

export function recordPracticeAttempt(
  chapterId: ChapterId,
  isCorrect: boolean
): PracticeProgress {
  const current = loadPracticeProgress();
  const ch = current.byChapter[chapterId] ?? { attempted: 0, correct: 0 };
  const updated: PracticeProgress = {
    totalAttempted: current.totalAttempted + 1,
    totalCorrect: current.totalCorrect + (isCorrect ? 1 : 0),
    byChapter: {
      ...current.byChapter,
      [chapterId]: {
        attempted: ch.attempted + 1,
        correct: ch.correct + (isCorrect ? 1 : 0),
      },
    },
    lastUpdated: new Date().toISOString(),
  };
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(
      KEYS.PRACTICE_PROGRESS,
      JSON.stringify(updated)
    );
  }
  return updated;
}

export function loadAIQuestions(): MCQQuestion[] {
  if (typeof window === 'undefined') return [];
  const list = safeParse<MCQQuestion[]>(
    window.localStorage.getItem(KEYS.AI_QUESTIONS),
    []
  );
  return Array.isArray(list) ? list : [];
}

export function appendAIQuestions(newItems: MCQQuestion[]): MCQQuestion[] {
  const existing = loadAIQuestions();
  const seen = new Set(existing.map((q) => q.question.trim().toLowerCase()));
  const merged = [...existing];
  for (const item of newItems) {
    const key = item.question.trim().toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(item);
    }
  }
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(KEYS.AI_QUESTIONS, JSON.stringify(merged));
  }
  return merged;
}

export function getPerformanceStatus(percentage: number): string {
  return getPerformanceStatusForLang(percentage, 'ur');
}

export function getDifficultyLabelUrdu(difficulty: Difficulty): string {
  if (difficulty === 'easy') return 'آسان';
  if (difficulty === 'medium') return 'درمیانی';
  return 'مشکل';
}

export function calculateTestResult(
  chapterId: ChapterId,
  difficulty: Difficulty,
  questions: MCQQuestion[],
  answers: Record<string, number | null>,
  lang: Language = 'ur'
): TestResult {
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const review: TestAnswerRecord[] = questions.map((q) => {
    const selected = answers[q.id] ?? null;
    if (selected === null || selected === undefined) {
      unansweredCount += 1;
    } else if (selected === q.correctIndex) {
      correctCount += 1;
    } else {
      incorrectCount += 1;
    }

    return {
      questionId: q.id,
      question: q.question,
      topic: q.topic,
      options: q.options,
      selectedIndex: selected,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      steps: q.steps,
      en: q.en,
    };
  });

  const totalQuestions = questions.length;
  const totalMarks = totalQuestions;
  const obtainedMarks = correctCount;
  const percentage =
    totalQuestions > 0
      ? Math.round((obtainedMarks / totalQuestions) * 1000) / 10
      : 0;

  return {
    id: `test-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    chapterId,
    chapterName: getLocalizedChapter(chapterId, lang).name,
    difficulty,
    totalQuestions,
    correctCount,
    incorrectCount,
    unansweredCount,
    totalMarks,
    obtainedMarks,
    percentage,
    performanceStatus: getPerformanceStatusForLang(percentage, lang),
    completedAt: new Date().toISOString(),
    review,
  };
}
