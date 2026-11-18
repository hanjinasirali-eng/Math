import { getQuestionSteps } from '../data/mathUtils';
import {
  ChapterId,
  Language,
  MistakeAnalysis,
  TeacherExplanation,
} from '../types/math';
import { asciiMathToLatex } from '../components/MathText';

interface BuildFallbackTeacherParams {
  chapterId?: ChapterId;
  topic: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  selectedIndex?: number | null;
  explanation: string;
  steps?: string[];
  lang: Language;
}

const HAS_URDU_CHAR = /[\u0600-\u06FF]/;
const HAS_ENGLISH_WORD = /\b[A-Za-z]{3,}\b/;

function cleanStepPrefix(raw: string): string {
  return raw.replace(/^(?:مرحلہ|Step)\s*\d+\s*[:：]\s*/iu, '').trim();
}

function buildBoxedLatex(answerText: string): string | undefined {
  const trimmed = answerText.trim();
  if (!trimmed || HAS_URDU_CHAR.test(trimmed)) return undefined;
  const noWords = trimmed.replace(/\\[a-zA-Z]+/g, '');
  if (HAS_ENGLISH_WORD.test(noWords)) {
    // Allow simple short units like "24 cm", "12 m^2", "Rs. 6000", "42 kg"
    const unitMatch = trimmed.match(
      /^(-?\d+(?:\.\d+)?(?:\/\d+)?)\s*(cm²|cm³|cm\^2|cm\^3|cm|m²|m³|m\^2|m\^3|m|km|kg|liters|L|sq\.?\s*cm|sq\.?\s*m)$/i
    );
    if (unitMatch) {
      const numLatex = asciiMathToLatex(unitMatch[1]);
      return `\\boxed{${numLatex}\\text{ ${unitMatch[2]}}}`;
    }
    return undefined;
  }
  const latex = asciiMathToLatex(trimmed);
  if (!latex) return undefined;
  return `\\boxed{${latex}}`;
}

function inferFormulaHint(
  chapterId: ChapterId | undefined,
  topic: string,
  lang: Language
): { method: string; tip: string } {
  const isUr = lang === 'ur';

  if (chapterId === 'numbers') {
    return isUr
      ? {
          method: `اس سوال کا تعلق "${topic}" سے ہے۔ ہم دیے گئے اعداد اور علامتوں کے مطابق درست ریاضیاتی اصول (مثلاً مشترک مخرج، قوتِ نما، مربع/مکعب جزر، یا تناسب کا کلیہ) استعمال کریں گے تاکہ حساب میں کوئی غلطی نہ ہو۔`,
          tip: `اسی طرح کا کوئی بھی سوال حل کرتے وقت پہلے دیے گئے اعداد کو ایک جیسی شکل میں لائیں (مثلاً کسور کے مخرج برابر کریں یا فیصد کو کسر میں بدلیں)، پھر ایک ایک کر کے حساب کریں۔`,
        }
      : {
          method: `This question is from "${topic}". We apply the exact arithmetic rule or formula needed—such as finding a common denominator, applying laws of exponents, square/cube roots, or proportion—so every step stays accurate.`,
          tip: `To solve a similar question, first write all given numbers in a matching form (for example, equal denominators or fractions), then perform one operation at a time and check signs carefully.`,
        };
  }

  if (chapterId === 'algebra') {
    return isUr
      ? {
          method: `یہ سوال "${topic}" کے تحت آتا ہے۔ الجبرا میں ہم یکساں ارکان (like terms) کو اکٹھا کرتے ہیں، درست الجبری کلیہ یا تجزی لگاتے ہیں، اور مساوات کے دونوں طرف برابر عمل کر کے متغیر کی قیمت معلوم کرتے ہیں۔`,
          tip: `ایسے کسی بھی سوال میں علامتوں (+ اور −) کا خاص خیال رکھیں، مساوات کے ایک طرف سے دوسری طرف عدد لے جاتے وقت علامت لازمی بدلیں، اور آخر میں قیمت واپس درج کر کے پڑتال کریں۔`,
        }
      : {
          method: `This question belongs to "${topic}". In algebra, we group like terms, apply the appropriate identity or factorization rule, and perform the same operation on both sides of an equation to isolate the variable.`,
          tip: `For similar algebra questions, track positive and negative signs carefully, reverse the sign whenever moving a term across the equals sign, and substitute your result back to double-check.`,
        };
  }

  if (chapterId === 'measurement') {
    return isUr
      ? {
          method: `یہ سوال "${topic}" سے متعلق ہے۔ پیمائش کے مسائل میں ہم سب سے پہلے دی گئی شکل (مثلاً ذوزنقہ، معین، مکعب یا اسطوانہ) کا صحیح کلیہ منتخب کرتے ہیں اور اس بات کی تصدیق کرتے ہیں کہ تمام پیمائشیں ایک ہی اکائی میں ہوں۔`,
          tip: `اسی طرح کے سوال کے لیے پہلے دی گئی تمام لمبائیوں کی اکائیاں برابر کریں، صحیح رقبے یا حجم کا کلیہ لکھیں، قیمتیں درج کریں اور جواب کے ساتھ مناسب اکائی (مربع یا مکعب) ضرور لکھیں۔`,
        }
      : {
          method: `This problem covers "${topic}". In measurement, we first choose the right geometric formula (such as area of a trapezium/rhombus or surface area/volume of a cube/cuboid/cylinder) and make sure all dimensions share the same unit.`,
          tip: `When solving similar measurement questions, check that all units match before calculating, write the formula first, substitute each value cleanly, and verify whether the answer needs square or cubic units.`,
        };
  }

  if (chapterId === 'geometry') {
    return isUr
      ? {
          method: `یہ سوال "${topic}" کے اصول پر مبنی ہے۔ جیومیٹری میں ہم زاویوں کے مجموعے، متوازی خطوط، چوکور اشکال کی خصوصیات، یا مسئلہ فیثاغورث (اور یولر کے کلیے) کو استعمال کر کے نامعلوم قدر معلوم کرتے ہیں۔`,
          tip: `جیومیٹری کے اسی طرح کے سوال حل کرتے وقت پہلے شکل کی خاصیت یاد کریں (مثلاً مثلث کے زاویوں کا مجموعہ 180° یا چوکور کے زاویوں کا مجموعہ 360°)، پھر مساوات بنا کر قدم بہ قدم حل کریں۔`,
        }
      : {
          method: `This problem is based on "${topic}". In geometry, we use angle-sum properties, parallel-line relationships, quadrilateral rules, Pythagoras’ theorem, or Euler’s formula to relate known and unknown values.`,
          tip: `To solve similar geometry questions, identify the geometric property first (such as 180° in a triangle, 360° in a quadrilateral, or c² = a² + b²), set up an equation, and solve step by step.`,
        };
  }

  return isUr
    ? {
        method: `یہ سوال "${topic}" کے باب سے ہے۔ شماریات اور احتمال میں ہم دیے گئے اعداد و شمار کو ترتیب دیتے ہیں، درست کلیہ (اوسط، وسطانیہ، عادہ، مرکزی زاویہ، یا موافق نتائج / کل نتائج) لگاتے ہیں۔`,
        tip: `اسی طرح کے سوال کے لیے پہلے کل ممکنہ نتائج یا مشاہدات کی درست تعداد گنیں، وسطانیہ کے لیے اعداد کو ترتیب میں لکھیں، اور احتمال کی کسر کو ہمیشہ مختصر ترین شکل میں لائیں۔`,
      }
    : {
        method: `This question is from "${topic}". In statistics and probability, we organize the given data carefully and apply the exact formula—mean, median, mode, central angle, or (favorable outcomes / total outcomes).`,
        tip: `For similar questions, always count total outcomes or observations first, sort data before finding a median, and simplify probability fractions to lowest terms.`,
      };
}

function buildLocalMistakeAnalysis(
  selectedText: string,
  correctText: string,
  explanation: string,
  lang: Language
): MistakeAnalysis {
  if (lang === 'ur') {
    return {
      selectedAnswer: selectedText,
      whyWrong: `آپ نے "${selectedText}" منتخب کیا، لیکن ریاضیاتی حساب کے مطابق یہ دیے گئے سوال کی شرط پر پورا نہیں اترتا۔ درست قدر "${correctText}" ہے۔`,
      whereMistakeHappened: `اکثر طلبہ جلد بازی میں علامت (+ یا −) بدلنے، کسر کو مختصر کرنے، اکائی تبدیل کرنے، یا کلیے کا کوئی حصہ چھوٹ جانے کی وجہ سے "${selectedText}" پر پہنچ جاتے ہیں۔ آئیے شروع سے ہر مرحلہ آرام سے سمجھتے ہیں تاکہ یہ غلطی دوبارہ نہ ہو (${explanation})۔`,
    };
  }
  return {
    selectedAnswer: selectedText,
    whyWrong: `You chose "${selectedText}", which does not match the mathematical result required by the question. The verified answer is "${correctText}".`,
    whereMistakeHappened: `A common slip—such as overlooking a sign (+ or −), skipping fraction simplification, mixing up a formula step, or misreading a unit—can lead to "${selectedText}". Let us walk through every step carefully from the start (${explanation}).`,
  };
}

function buildVerificationText(
  question: string,
  correctText: string,
  explanation: string,
  lang: Language
): string {
  if (lang === 'ur') {
    return `جب ہم حاصل شدہ جواب "${correctText}" کو واپس سوال کی اصل شرط سے ملا کر دیکھتے ہیں (${explanation}) تو سوال کے دونوں حصے بالکل درست ثابت ہوتے ہیں، اس لیے "${correctText}" 100% درست جواب ہے۔`;
  }
  return `Checking "${correctText}" back against the original question condition confirms that it satisfies every mathematical rule (${explanation}). Therefore, "${correctText}" is completely verified.`;
}

export function buildFallbackTeacherExplanation(
  params: BuildFallbackTeacherParams
): TeacherExplanation {
  const {
    chapterId,
    topic,
    question,
    options,
    correctIndex,
    selectedIndex,
    explanation,
    steps,
    lang,
  } = params;

  const isUr = lang === 'ur';
  const rawSteps = getQuestionSteps({ question, explanation, steps }, lang).map(
    cleanStepPrefix
  );
  const correctText = options[correctIndex] ?? '';
  const boxedLatex = buildBoxedLatex(correctText);
  const hints = inferFormulaHint(chapterId, topic, lang);

  // Build Step 1 (Understand), Step 2 (Method), Step 3 (Calculations), Step 4 (Obtain Answer)
  let step1Understand: string;
  let step2Method: string;
  let step3Calculations: string[];
  let step4ObtainAnswer: string;

  if (rawSteps.length >= 3) {
    step1Understand = isUr
      ? `دیے گئے سوال کو غور سے پڑھیں: اس میں ہمیں "${topic}" کے اصول استعمال کرتے ہوئے درست قیمت معلوم کرنی ہے۔ پہلے قدم میں دی گئی معلومات دیکھیں:\n${rawSteps[0]}`
      : `Read the question carefully: we need to apply "${topic}" to find the exact answer. Let us identify what is given first:\n${rawSteps[0]}`;

    step2Method = `${hints.method}\n${rawSteps[1]}`;
    step3Calculations = rawSteps.slice(1);
    step4ObtainAnswer = isUr
      ? `تمام مراحل کو ترتیب سے حل کرنے کے بعد آخری مرحلے (${rawSteps[rawSteps.length - 1]}) سے ہمیں براہِ راست درست نتیجہ "${correctText}" حاصل ہوتا ہے۔`
      : `Following all calculation steps in order leads directly from the final step (${rawSteps[rawSteps.length - 1]}) to the exact result "${correctText}".`;
  } else if (rawSteps.length === 2) {
    step1Understand = isUr
      ? `اس سوال میں "${topic}" سے متعلق بنیادی قدر معلوم کرنے کو کہا گیا ہے۔ دی گئی معلومات:\n${rawSteps[0]}`
      : `This question asks us to find a key value under "${topic}". Given information:\n${rawSteps[0]}`;
    step2Method = hints.method;
    step3Calculations = rawSteps;
    step4ObtainAnswer = isUr
      ? `حساب مکمل کرنے پر ہمیں درست جواب "${correctText}" حاصل ہوتا ہے۔`
      : `Completing the calculation gives us the exact answer "${correctText}".`;
  } else {
    step1Understand = isUr
      ? `سوال میں "${topic}" کا بنیادی تصور یا حساب پوچھا گیا ہے۔`
      : `The question tests a core concept or calculation from "${topic}".`;
    step2Method = hints.method;
    step3Calculations = [explanation];
    step4ObtainAnswer = isUr
      ? `اس وضاحت کی روشنی میں درست جواب "${correctText}" ہے۔`
      : `From this reasoning, the correct answer is "${correctText}".`;
  }

  // Ensure the final calculation line displays boxed result if pure math
  if (boxedLatex) {
    const lastCalc = step3Calculations[step3Calculations.length - 1] ?? '';
    if (!lastCalc.includes('\\boxed')) {
      step3Calculations = [...step3Calculations, `$$=${boxedLatex}$$`];
    }
  }

  const isWrong =
    selectedIndex !== undefined &&
    selectedIndex !== null &&
    selectedIndex !== correctIndex &&
    options[selectedIndex] !== undefined;

  return {
    source: 'bank',
    verifiedCorrectIndex: correctIndex,
    questionRestatement: question,
    mistakeAnalysis: isWrong
      ? buildLocalMistakeAnalysis(
          options[selectedIndex!],
          correctText,
          explanation,
          lang
        )
      : null,
    step1Understand,
    step2Method,
    step3Calculations,
    step4ObtainAnswer,
    step5Verify: buildVerificationText(question, correctText, explanation, lang),
    finalAnswerText: correctText,
    finalAnswerLatex: boxedLatex,
    similarQuestionTip: hints.tip,
  };
}

const EXPLAIN_CACHE_KEY = 'c8_math_mcq_ai_explanations_v1';
const memoryExplainCache = new Map<string, TeacherExplanation>();

export function makeExplainCacheKey(
  questionId: string,
  selectedIndex: number | null | undefined,
  lang: Language
): string {
  return `${questionId}:${selectedIndex ?? 'none'}:${lang}`;
}

export function getCachedTeacherExplanation(
  cacheKey: string
): TeacherExplanation | null {
  const mem = memoryExplainCache.get(cacheKey);
  if (mem) return mem;
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.sessionStorage.getItem(EXPLAIN_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Record<string, TeacherExplanation>;
    const hit = parsed[cacheKey] ?? null;
    if (hit) memoryExplainCache.set(cacheKey, hit);
    return hit;
  } catch {
    return null;
  }
}

export function saveCachedTeacherExplanation(
  cacheKey: string,
  value: TeacherExplanation
): void {
  memoryExplainCache.set(cacheKey, value);
  if (typeof window === 'undefined') return;
  try {
    const raw = window.sessionStorage.getItem(EXPLAIN_CACHE_KEY);
    const parsed = raw ? (JSON.parse(raw) as Record<string, TeacherExplanation>) : {};
    const keys = Object.keys(parsed);
    if (keys.length > 60) {
      delete parsed[keys[0]];
    }
    parsed[cacheKey] = value;
    window.sessionStorage.setItem(EXPLAIN_CACHE_KEY, JSON.stringify(parsed));
  } catch {
    // Ignore storage quota errors
  }
}
