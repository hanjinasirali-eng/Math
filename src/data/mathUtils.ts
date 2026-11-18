import {
  ChapterId,
  Difficulty,
  Language,
  LocalizedQuestionContent,
  MCQQuestion,
} from '../types/math';

export function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

export function formatFraction(num: number, den: number): string {
  if (den === 0) return '0';
  const sign = (num < 0) !== (den < 0) ? -1 : 1;
  const n = Math.abs(num);
  const d = Math.abs(den);
  const g = gcd(n, d);
  const rn = (n / g) * sign;
  const rd = d / g;
  if (rd === 1) return `${rn}`;
  return `${rn}/${rd}`;
}

export function makeUniqueOptions(
  correct: string,
  candidates: string[],
  seed: number
): { options: [string, string, string, string]; correctIndex: 0 | 1 | 2 | 3 } {
  const seen = new Set<string>([correct]);
  const distractors: string[] = [];
  for (const c of candidates) {
    if (!seen.has(c) && c.trim().length > 0) {
      seen.add(c);
      distractors.push(c);
      if (distractors.length === 3) break;
    }
  }

  let fallbackOffset = 1;
  const numericMatch = correct.match(/^-?\d+(\.\d+)?$/);
  while (distractors.length < 3) {
    let candidate: string;
    if (numericMatch) {
      const val = Number(correct);
      const delta = fallbackOffset % 2 === 0 ? fallbackOffset : -fallbackOffset;
      const nextVal = Number.isInteger(val)
        ? val + delta
        : Number((val + delta * 0.5).toFixed(2));
      candidate = `${nextVal}`;
    } else {
      candidate = `${correct} (${fallbackOffset})`;
    }
    if (!seen.has(candidate)) {
      seen.add(candidate);
      distractors.push(candidate);
    }
    fallbackOffset += 1;
  }

  const targetIdx = (Math.abs(seed) % 4) as 0 | 1 | 2 | 3;
  const ordered: string[] = [];
  let dIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetIdx) {
      ordered.push(correct);
    } else {
      ordered.push(distractors[dIdx++]);
    }
  }

  return {
    options: ordered as [string, string, string, string],
    correctIndex: targetIdx,
  };
}

export function makeUniqueBilingualOptions(
  correctUr: string,
  candidatesUr: string[],
  correctEn: string,
  candidatesEn: string[],
  seed: number
): {
  optionsUr: [string, string, string, string];
  optionsEn: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
} {
  const seenUr = new Set<string>([correctUr]);
  const seenEn = new Set<string>([correctEn]);
  const distUr: string[] = [];
  const distEn: string[] = [];

  for (let i = 0; i < candidatesUr.length; i++) {
    const u = (candidatesUr[i] ?? '').trim();
    const e = (candidatesEn[i] ?? u).trim();
    if (u && e && !seenUr.has(u) && !seenEn.has(e)) {
      seenUr.add(u);
      seenEn.add(e);
      distUr.push(u);
      distEn.push(e);
      if (distUr.length === 3) break;
    }
  }

  let fallbackOffset = 1;
  const numericMatch = correctUr.match(/^-?\d+(\.\d+)?$/);
  while (distUr.length < 3) {
    let candUr: string;
    let candEn: string;
    if (numericMatch) {
      const val = Number(correctUr);
      const delta = fallbackOffset % 2 === 0 ? fallbackOffset : -fallbackOffset;
      const nextVal = Number.isInteger(val)
        ? val + delta
        : Number((val + delta * 0.5).toFixed(2));
      candUr = `${nextVal}`;
      candEn = `${nextVal}`;
    } else {
      candUr = `${correctUr} (${fallbackOffset})`;
      candEn = `${correctEn} (${fallbackOffset})`;
    }
    if (!seenUr.has(candUr) && !seenEn.has(candEn)) {
      seenUr.add(candUr);
      seenEn.add(candEn);
      distUr.push(candUr);
      distEn.push(candEn);
    }
    fallbackOffset += 1;
  }

  const targetIdx = (Math.abs(seed) % 4) as 0 | 1 | 2 | 3;
  const orderedUr: string[] = [];
  const orderedEn: string[] = [];
  let dIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetIdx) {
      orderedUr.push(correctUr);
      orderedEn.push(correctEn);
    } else {
      orderedUr.push(distUr[dIdx]);
      orderedEn.push(distEn[dIdx]);
      dIdx++;
    }
  }

  return {
    optionsUr: orderedUr as [string, string, string, string],
    optionsEn: orderedEn as [string, string, string, string],
    correctIndex: targetIdx,
  };
}

export function buildMCQ(
  id: string,
  chapterId: ChapterId,
  difficulty: Difficulty,
  topic: string,
  question: string,
  correct: string,
  distractors: string[],
  explanation: string,
  seed: number,
  steps?: string[]
): MCQQuestion {
  const { options, correctIndex } = makeUniqueOptions(
    correct,
    distractors,
    seed
  );
  return {
    id,
    chapterId,
    difficulty,
    topic,
    question,
    options,
    correctIndex,
    explanation,
    steps: steps && steps.length > 0 ? steps : undefined,
    source: 'bank',
  };
}

export interface BilingualQuestionInput {
  id: string;
  chapterId: ChapterId;
  difficulty: Difficulty;
  seed: number;
  ur: {
    topic: string;
    question: string;
    correct: string;
    distractors: string[];
    explanation: string;
    steps: string[];
  };
  en: {
    topic: string;
    question: string;
    correct: string;
    distractors: string[];
    explanation: string;
    steps: string[];
  };
}

export function buildBilingualMCQ(input: BilingualQuestionInput): MCQQuestion {
  const { optionsUr, optionsEn, correctIndex } = makeUniqueBilingualOptions(
    input.ur.correct,
    input.ur.distractors,
    input.en.correct,
    input.en.distractors,
    input.seed
  );

  return {
    id: input.id,
    chapterId: input.chapterId,
    difficulty: input.difficulty,
    topic: input.ur.topic,
    question: input.ur.question,
    options: optionsUr,
    correctIndex,
    explanation: input.ur.explanation,
    steps: input.ur.steps.length > 0 ? input.ur.steps : undefined,
    en: {
      topic: input.en.topic,
      question: input.en.question,
      options: optionsEn,
      explanation: input.en.explanation,
      steps: input.en.steps.length > 0 ? input.en.steps : undefined,
    },
    source: 'bank',
  };
}

export function getLocalizedMCQ(
  item: {
    topic: string;
    question: string;
    options: [string, string, string, string];
    explanation: string;
    steps?: string[];
    en?: LocalizedQuestionContent;
  },
  lang: Language
): LocalizedQuestionContent {
  if (lang === 'en' && item.en) {
    return item.en;
  }
  return {
    topic: item.topic,
    question: item.question,
    options: item.options,
    explanation: item.explanation,
    steps: item.steps,
  };
}

export function getQuestionSteps(
  item: {
    question?: string;
    explanation: string;
    steps?: string[];
  },
  lang: Language = 'ur'
): string[] {
  if (item.steps && item.steps.length > 0) {
    return item.steps;
  }
  if (lang === 'en') {
    const parts = item.explanation
      .split(/[.!\n]+/)
      .map((p) => p.trim())
      .filter(Boolean);
    if (parts.length >= 2) {
      return parts.map((p) => (p.endsWith('.') ? p : `${p}.`));
    }
    return item.explanation.trim() ? [item.explanation.trim()] : [];
  }
  const parts = item.explanation
    .split(/[۔\n]+/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.length >= 2) {
    return parts.map((p) => (p.endsWith('۔') ? p : `${p}۔`));
  }
  return item.explanation.trim() ? [item.explanation.trim()] : [];
}
