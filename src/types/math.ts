export type Language = 'ur' | 'en';

export type ChapterId =
  | 'numbers'
  | 'algebra'
  | 'measurement'
  | 'geometry'
  | 'statistics';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuestionCount = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export interface LocalizedQuestionContent {
  topic: string;
  question: string;
  options: [string, string, string, string];
  explanation: string;
  steps?: string[];
}

export interface MCQQuestion {
  id: string;
  chapterId: ChapterId;
  difficulty: Difficulty;
  topic: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  steps?: string[];
  en?: LocalizedQuestionContent;
  source?: 'bank' | 'ai';
}

export interface ChapterInfo {
  id: ChapterId;
  number: number;
  name: string;
  shortDescription: string;
  keyTopics: string[];
  en: {
    name: string;
    shortDescription: string;
    keyTopics: string[];
  };
}

export interface TestAnswerRecord {
  questionId: string;
  question: string;
  topic: string;
  options: [string, string, string, string];
  selectedIndex: number | null;
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  steps?: string[];
  en?: LocalizedQuestionContent;
}

export interface TestResult {
  id: string;
  chapterId: ChapterId;
  chapterName: string;
  difficulty: Difficulty;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  totalMarks: number;
  obtainedMarks: number;
  percentage: number;
  performanceStatus: string;
  completedAt: string;
  review: TestAnswerRecord[];
}

export interface PracticeProgress {
  totalAttempted: number;
  totalCorrect: number;
  byChapter: Record<ChapterId, { attempted: number; correct: number }>;
  lastUpdated: string;
}

export interface UserPreferences {
  chapterId: ChapterId;
  difficulty: Difficulty;
  questionCount: QuestionCount;
  theme: 'light' | 'dark';
  language: Language;
}

export type AppView =
  | 'dashboard'
  | 'practice'
  | 'test'
  | 'result'
  | 'history';

export interface MistakeAnalysis {
  selectedAnswer: string;
  whyWrong: string;
  whereMistakeHappened: string;
}

export interface TeacherExplanation {
  source: 'ai' | 'bank';
  verifiedCorrectIndex?: number;
  questionRestatement: string;
  mistakeAnalysis?: MistakeAnalysis | null;
  step1Understand: string;
  step2Method: string;
  step3Calculations: string[];
  step4ObtainAnswer: string;
  step5Verify: string;
  finalAnswerText: string;
  finalAnswerLatex?: string;
  similarQuestionTip: string;
}

