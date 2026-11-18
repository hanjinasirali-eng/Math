import { ChapterId, Difficulty, MCQQuestion } from '../types/math';
import { ALGEBRA_QUESTIONS } from './chapters/algebra';
import { GEOMETRY_QUESTIONS } from './chapters/geometry';
import { MEASUREMENT_QUESTIONS } from './chapters/measurement';
import { NUMBERS_QUESTIONS } from './chapters/numbers';
import { STATISTICS_QUESTIONS } from './chapters/statistics';

export const BUILTIN_QUESTION_BANK: Record<ChapterId, MCQQuestion[]> = {
  numbers: NUMBERS_QUESTIONS,
  algebra: ALGEBRA_QUESTIONS,
  measurement: MEASUREMENT_QUESTIONS,
  geometry: GEOMETRY_QUESTIONS,
  statistics: STATISTICS_QUESTIONS,
};

export const BUILTIN_QUESTION_MAP: Record<string, MCQQuestion> = Object.fromEntries(
  Object.values(BUILTIN_QUESTION_BANK)
    .flat()
    .map((q) => [q.id, q])
);

export function getQuestionsForSelection(
  chapterId: ChapterId,
  difficulty: Difficulty,
  aiQuestions: MCQQuestion[] = []
): MCQQuestion[] {
  const builtin = BUILTIN_QUESTION_BANK[chapterId].filter(
    (q) => q.difficulty === difficulty
  );
  const aiFiltered = aiQuestions.filter(
    (q) => q.chapterId === chapterId && q.difficulty === difficulty
  );

  const seenTexts = new Set<string>();
  const combined: MCQQuestion[] = [];

  for (const q of [...aiFiltered, ...builtin]) {
    const key = q.question.trim().toLowerCase();
    if (!seenTexts.has(key)) {
      seenTexts.add(key);
      combined.push(q);
    }
  }

  return combined;
}

export function selectRandomizedQuestions(
  pool: MCQQuestion[],
  requestedCount: number
): MCQQuestion[] {
  const copy = [...pool];
  // Fisher-Yates shuffle
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(requestedCount, copy.length));
}

export function getChapterTotalCount(
  chapterId: ChapterId,
  aiQuestions: MCQQuestion[] = []
): number {
  const base = BUILTIN_QUESTION_BANK[chapterId].length;
  const aiCount = aiQuestions.filter((q) => q.chapterId === chapterId).length;
  return base + aiCount;
}
