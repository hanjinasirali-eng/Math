import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel, Type } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const CHAPTER_SYLLABUS: Record<
  string,
  { nameUr: string; nameEn: string; topicsUr: string; topicsEn: string }
> = {
  numbers: {
    nameUr: 'اعداد اور عملیات',
    nameEn: 'Numbers and Operations',
    topicsUr:
      'ناطق اعداد اور ان کی خصوصیات، مربع اور جذر المربع، مکعب اور جذر المکعب، قوانینِ قوت نما اور معیاری ترقیم، تناسبِ راست و معکوس، فیصد، نفع، نقصان، رعایت، سادہ اور مرکب سود۔',
    topicsEn:
      'Rational numbers and properties, squares and square roots, cubes and cube roots, laws of exponents and scientific notation, direct and inverse proportion, percentages, profit, loss, discount, simple and compound interest.',
  },
  algebra: {
    nameUr: 'الجبرا',
    nameEn: 'Algebra',
    topicsUr:
      'الجبری جملے (یک رقمی، دو رقمی، کثیر رقمی)، جمع، تفریق اور ضرب، بنیادی کلیات (a+b)^2، (a-b)^2، a^2-b^2، تجزی، کثیر رقمی کی تقسیم، یک متغیری خطی مساوات اور عبارتی سوالات۔',
    topicsEn:
      'Algebraic expressions (monomials, binomials, polynomials), addition, subtraction, multiplication, algebraic identities (a+b)^2, (a-b)^2, a^2-b^2, factorization, polynomial division, linear equations in one variable, and word problems.',
  },
  measurement: {
    nameUr: 'پیمائش',
    nameEn: 'Measurement',
    topicsUr:
      'ذوزنقہ، معین اور چوکور اشکال کا رقبہ؛ مکعب، مکعب نما اور قائمہ دائروی اسطوانے کا اطرافی، کل سطحی رقبہ اور حجم؛ اکائیوں کی تبدیلی (مکعب میٹر سے لیٹر، مربع میٹر سے مربع سینٹی میٹر)۔',
    topicsEn:
      'Area of trapezium, rhombus, and quadrilaterals; lateral and total surface area and volume of cube, cuboid, and right circular cylinder; unit conversions (m^3 to liters, m^2 to cm^2).',
  },
  geometry: {
    nameUr: 'جیومیٹری',
    nameEn: 'Geometry',
    topicsUr:
      'چوکور اشکال (متوازی الاضلاع، معین، مستطیل، مربع، پتنگ نما، ذوزنقہ)، محدب اور منتظم کثیر الاضلاع کے اندرونی و بیرونی زاویوں کا مجموعہ، متوازی خطوط اور قاطع خط، مسئلہ فیثاغورث، مثلثوں کا تماثل اور یولر کا کلیہ (F + V - E = 2)۔',
    topicsEn:
      'Quadrilaterals (parallelogram, rhombus, rectangle, square, kite, trapezium), interior and exterior angles of polygons, parallel lines and transversals, Pythagoras theorem, congruence of triangles, and Euler’s formula (F + V - E = 2).',
  },
  statistics: {
    nameUr: 'شماریات اور احتمال',
    nameEn: 'Statistics and Probability',
    topicsUr:
      'گروہی تعدد کی تقسیم، جماعتی وقفے اور جماعتی نشانات، ہسٹوگرام، دائروی گراف (مرکزی زاویے)، وسعت، حسابی اوسط، وسطانیہ، عادہ، سادہ واقعے کا احتمال اور مکمل واقعات۔',
    topicsEn:
      'Grouped frequency distribution, class intervals and class marks, histograms, pie charts (central angles), range, arithmetic mean, median, mode, probability of simple events, and complementary events.',
  },
};

interface GeneratedQuestionPayload {
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  steps?: string[];
  topicEn: string;
  questionEn: string;
  optionsEn: string[];
  explanationEn: string;
  stepsEn?: string[];
}

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
      timeout: 25000,
    },
  });
}

async function generateWithRetry<T>(
  fn: () => Promise<T>,
  retries = 1
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (attempt < retries) {
        const delayMs = 600 * Math.pow(2, attempt);
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
  }
  throw lastError;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    const aiReady = Boolean(getGeminiClient());
    res.json({ status: 'ok', aiAvailable: aiReady });
  });

  app.post('/api/questions/generate', async (req, res) => {
    const {
      chapterId,
      difficulty = 'medium',
      count = 5,
      lang = 'ur',
      existingPrompts = [],
    } = req.body ?? {};

    const isEn = lang === 'en';
    const chapterInfo = CHAPTER_SYLLABUS[String(chapterId)];
    if (!chapterInfo) {
      res.status(400).json({
        ok: false,
        fallback: true,
        error: isEn
          ? 'Selected chapter is invalid.'
          : 'منتخب کردہ باب درست نہیں ہے۔',
        questions: [],
      });
      return;
    }

    const safeDifficulty =
      difficulty === 'easy' || difficulty === 'medium' || difficulty === 'hard'
        ? difficulty
        : 'medium';

    const safeCount = Math.min(Math.max(Number(count) || 5, 1), 15);

    const ai = getGeminiClient();
    if (!ai) {
      res.status(503).json({
        ok: false,
        fallback: true,
        error: isEn
          ? 'AI service is currently unavailable. Continuing with the verified built-in question bank.'
          : 'اے آئی سروس فی الحال دستیاب نہیں ہے۔ تصدیق شدہ بلٹ ان سوال بینک کے ساتھ جاری رکھا جا رہا ہے۔',
        questions: [],
      });
      return;
    }

    const avoidSample = Array.isArray(existingPrompts)
      ? existingPrompts.slice(0, 25).map((s) => String(s))
      : [];

    const difficultyGuide =
      safeDifficulty === 'easy'
        ? 'آسان سطح (Easy): بنیادی ریاضیاتی تصورات، تعریفیں اور سادہ حسابی سوالات۔'
        : safeDifficulty === 'medium'
        ? 'درمیانی سطح (Medium): درمیانے درجے کے تصوراتی اور دو مرحلوں والے حسابی مسائل۔'
        : 'مشکل سطح (Hard): جماعت ہشتم کے نصاب کے مطابق منطقی، کثیر مرحلوں والے اور عبارتی سوالات۔';

    const promptText = `Generate ${safeCount} brand-new, mathematically verified Class 8 Mathematics MCQs in BOTH Urdu (topic, question, options, explanation, steps) AND English (topicEn, questionEn, optionsEn, explanationEn, stepsEn) representing the EXACT SAME mathematical question, identical numbers, and identical option ordering (sharing the same correctIndex 0..3).

Chapter: ${chapterInfo.nameUr} / ${chapterInfo.nameEn}
Syllabus Topics: ${chapterInfo.topicsEn}
Difficulty: ${difficultyGuide}

Strict Rules:
1. Urdu fields (topic, question, options, explanation, steps) MUST be written in pure, simple, grammatically correct Pakistani Urdu script with ZERO English words, ZERO parenthetical English translations, ZERO Roman Urdu, and ZERO Hindi/Devanagari words. Units must be in Urdu (سینٹی میٹر، مربع سینٹی میٹر، مکعب میٹر، لیٹر، روپے، گھنٹے، سال).
2. English fields (topicEn, questionEn, optionsEn, explanationEn, stepsEn) MUST be written in clear, simple Class 8 English with ZERO Urdu script words.
3. options and optionsEn must each have EXACTLY 4 unique items in identical correspondence (options[i] translates optionsEn[i]), with only correctIndex (0..3) mathematically right. Verify arithmetic before setting correctIndex!
4. steps and stepsEn must each contain at least 3 clear step-by-step calculation steps with no skipped steps.
5. Do not repeat any of these existing questions:
${avoidSample.map((q, i) => `${i + 1}. ${q}`).join('\n')}`;

    const callModel = (model: string) =>
      ai.models.generateContent({
        model,
        contents: promptText,
        config: {
          systemInstruction:
            'You are a bilingual Class 8 Mathematics curriculum author. Every MCQ must provide exact 1-to-1 parallel content in pure simple Pakistani Urdu and simple Class 8 English with identical numbers, identical 4 options order, verified correctIndex (0..3), short explanation, and complete step-by-step solutions (at least 3 steps) in both languages.',
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                topic: {
                  type: Type.STRING,
                  description: 'Subtopic strictly in pure Urdu.',
                },
                question: {
                  type: Type.STRING,
                  description: 'Class 8 Mathematics MCQ strictly in pure Urdu.',
                },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'Exactly 4 unique options strictly in Urdu.',
                },
                correctIndex: {
                  type: Type.INTEGER,
                  description: '0-based index (0, 1, 2, or 3) matching both Urdu and English options.',
                },
                explanation: {
                  type: Type.STRING,
                  description: 'Short 1-2 sentence explanation strictly in Urdu.',
                },
                steps: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'At least 3 complete calculation steps strictly in Urdu.',
                },
                topicEn: {
                  type: Type.STRING,
                  description: 'Same subtopic in simple Class 8 English.',
                },
                questionEn: {
                  type: Type.STRING,
                  description: 'Exact same Class 8 Mathematics MCQ in simple English.',
                },
                optionsEn: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'Exactly 4 unique options in English in identical order.',
                },
                explanationEn: {
                  type: Type.STRING,
                  description: 'Short 1-2 sentence explanation in simple English.',
                },
                stepsEn: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'At least 3 complete calculation steps in simple English.',
                },
              },
              required: [
                'topic',
                'question',
                'options',
                'correctIndex',
                'explanation',
                'steps',
                'topicEn',
                'questionEn',
                'optionsEn',
                'explanationEn',
                'stepsEn',
              ],
            },
          },
        },
      });

    try {
      let response;
      try {
        response = await generateWithRetry(() => callModel('gemini-4-hydrogen'), 1);
      } catch (primaryErr: unknown) {
        const status = (primaryErr as { status?: number })?.status;
        if (status === 503 || status === 429) {
          response = await callModel('gemini-3.1-flash-lite');
        } else {
          throw primaryErr;
        }
      }

      const rawText = (response.text ?? '[]').trim();
      const parsed = JSON.parse(rawText) as GeneratedQuestionPayload[];
      const existingSet = new Set(
        avoidSample.map((q) => q.trim().toLowerCase())
      );

      const validated = [];
      for (let i = 0; i < parsed.length; i++) {
        const item = parsed[i];
        if (!item || typeof item.question !== 'string') continue;
        const qText = item.question.trim();
        const qTextEn = String(item.questionEn ?? '').trim();
        if (!qText || !qTextEn || existingSet.has(qText.toLowerCase())) continue;

        if (!Array.isArray(item.options) || item.options.length !== 4) continue;
        if (!Array.isArray(item.optionsEn) || item.optionsEn.length !== 4) continue;

        const cleanOpts = item.options.map((o) => String(o).trim());
        const cleanOptsEn = item.optionsEn.map((o) => String(o).trim());
        if (
          cleanOpts.some((o) => !o) ||
          new Set(cleanOpts).size !== 4 ||
          cleanOptsEn.some((o) => !o) ||
          new Set(cleanOptsEn).size !== 4
        ) {
          continue;
        }

        const cIdx = Number(item.correctIndex);
        if (!Number.isInteger(cIdx) || cIdx < 0 || cIdx > 3) continue;

        const expText = String(item.explanation ?? '').trim();
        const expTextEn = String(item.explanationEn ?? '').trim();
        if (!expText || !expTextEn) continue;

        const cleanSteps = Array.isArray(item.steps)
          ? item.steps.map((s) => String(s).trim()).filter(Boolean)
          : [];
        const cleanStepsEn = Array.isArray(item.stepsEn)
          ? item.stepsEn.map((s) => String(s).trim()).filter(Boolean)
          : [];

        existingSet.add(qText.toLowerCase());
        validated.push({
          id: `ai-${chapterId}-${safeDifficulty}-${Date.now()}-${i}`,
          chapterId,
          difficulty: safeDifficulty,
          topic: String(item.topic || chapterInfo.nameUr).trim(),
          question: qText,
          options: cleanOpts as [string, string, string, string],
          correctIndex: cIdx as 0 | 1 | 2 | 3,
          explanation: expText,
          steps: cleanSteps.length > 0 ? cleanSteps : undefined,
          en: {
            topic: String(item.topicEn || chapterInfo.nameEn).trim(),
            question: qTextEn,
            options: cleanOptsEn as [string, string, string, string],
            explanation: expTextEn,
            steps: cleanStepsEn.length > 0 ? cleanStepsEn : undefined,
          },
          source: 'ai' as const,
        });
      }

      if (validated.length === 0) {
        res.status(502).json({
          ok: false,
          fallback: true,
          error: isEn
            ? 'Generated AI questions did not pass verification. Continuing with the built-in question bank.'
            : 'اے آئی سے موصول ہونے والے سوالات تصدیق کے معیار پر پورے نہیں اترے۔ بلٹ ان سوال بینک استعمال کیا جا رہا ہے۔',
          questions: [],
        });
        return;
      }

      res.json({
        ok: true,
        fallback: false,
        questions: validated,
      });
    } catch (error) {
      console.error('Gemini MCQ generation error:', error);
      res.status(502).json({
        ok: false,
        fallback: true,
        error: isEn
          ? 'Could not connect to AI question generator right now. Continuing with the verified built-in question bank.'
          : 'اس وقت اے آئی سوال جنریٹر سے رابطہ ممکن نہیں۔ تصدیق شدہ بلٹ ان سوال بینک کے ساتھ جاری رکھا جا رہا ہے۔',
        questions: [],
      });
    }
  });

  app.post('/api/questions/explain', async (req, res) => {
    const {
      chapterId = 'numbers',
      topic = '',
      question = '',
      options = [],
      correctIndex,
      selectedIndex = null,
      lang = 'ur',
    } = req.body ?? {};

    const isEn = lang === 'en';
    const cleanQuestion = String(question ?? '').trim();
    const cleanOptions = Array.isArray(options)
      ? options.map((o) => String(o ?? '').trim())
      : [];

    if (!cleanQuestion || cleanOptions.length !== 4) {
      res.status(400).json({
        ok: false,
        error: isEn
          ? 'Invalid question payload for explanation.'
          : 'وضاحت کے لیے سوال کا ڈیٹا درست نہیں ہے۔',
      });
      return;
    }

    const ai = getGeminiClient();
    if (!ai) {
      res.status(503).json({
        ok: false,
        error: isEn
          ? 'Gemini AI service is not configured in Settings > Secrets. Showing the built-in 5-step verified solution below.'
          : 'جیمنائی اے آئی سروس اس وقت سیٹ نہیں ہے (Settings > Secrets چیک کریں)۔ نیچے تصدیق شدہ 5 مرحلوں والا حل موجود ہے۔',
      });
      return;
    }

    const chapterInfo = CHAPTER_SYLLABUS[String(chapterId)] ?? CHAPTER_SYLLABUS.numbers;
    const optionLetters = isEn ? ['A', 'B', 'C', 'D'] : ['ا', 'ب', 'ج', 'د'];
    const hasSelection =
      selectedIndex !== null &&
      selectedIndex !== undefined &&
      Number.isInteger(Number(selectedIndex)) &&
      Number(selectedIndex) >= 0 &&
      Number(selectedIndex) <= 3;
    const safeSelectedIdx = hasSelection ? Number(selectedIndex) : null;
    const expectedIdx =
      correctIndex !== undefined &&
      correctIndex !== null &&
      Number.isInteger(Number(correctIndex)) &&
      Number(correctIndex) >= 0 &&
      Number(correctIndex) <= 3
        ? Number(correctIndex)
        : null;

    const studentChosenText =
      safeSelectedIdx !== null ? cleanOptions[safeSelectedIdx] : null;
    const isWrong =
      safeSelectedIdx !== null &&
      expectedIdx !== null &&
      safeSelectedIdx !== expectedIdx;

    const languageRules = isEn
      ? `Language & Tone Rules:
- Write 100% in clear, warm, simple Class 8 English. Do NOT include any Urdu script characters.
- Teach patiently like a friendly personal Mathematics teacher sitting beside the student.
- Explain any difficult mathematical terms in simple words.`
      : `Language & Tone Rules:
- Write 100% in pure, simple, friendly Pakistani Urdu script. Do NOT use complicated literary Urdu, Hindi/Devanagari words, Roman Urdu, or ANY English words or parenthetical English translations such as "(fractions)", "(denominators)", or "(LCM)" (only mathematical variables like x, y and LaTeX math commands inside $...$ or $$...$$ are allowed).
- Use correct standard Pakistani Urdu mathematical spelling: کسر / کسروں (not قصر), شمار کنندہ / شمار کنندگان, مخرج, ذواضعاف اقل, مساوات, متغیر, رقبہ, حجم, اوسط, وسطانیہ, عادہ, احتمال.
- Act like a patient, caring Pakistani Mathematics teacher sitting beside a Class 8 student, explaining every concept in easy everyday Urdu.`;

    const mistakePromptPart =
      safeSelectedIdx !== null
        ? isWrong
          ? `Student selected Option ${optionLetters[safeSelectedIdx]}: "${studentChosenText}", which is WRONG.
You MUST populate "mistakeAnalysis":
- selectedAnswer: "${studentChosenText}"
- whyWrong: Gently explain why "${studentChosenText}" is incorrect mathematically.
- whereMistakeHappened: Identify the exact likely calculation or conceptual mistake that leads to "${studentChosenText}", so the student learns where they went wrong.`
          : `Student selected Option ${optionLetters[safeSelectedIdx]}: "${studentChosenText}", which is CORRECT. Set mistakeAnalysis to null.`
        : `No student answer was selected (post-test review). Set mistakeAnalysis to null.`;

    const promptText = `You are explaining a Class 8 Mathematics MCQ to a student step by step, just like ChatGPT teaches mathematics carefully.

Chapter: ${isEn ? chapterInfo.nameEn : chapterInfo.nameUr}
Topic: ${String(topic || (isEn ? chapterInfo.nameEn : chapterInfo.nameUr))}
Complete Question: ${cleanQuestion}
Options:
0 (${optionLetters[0]}): ${cleanOptions[0]}
1 (${optionLetters[1]}): ${cleanOptions[1]}
2 (${optionLetters[2]}): ${cleanOptions[2]}
3 (${optionLetters[3]}): ${cleanOptions[3]}

${mistakePromptPart}

${languageRules}

Mathematical Instructions:
1. Solve the question completely from scratch BEFORE deciding verifiedCorrectIndex (0..3). Never skip a calculation step!
2. Verify every arithmetic and algebraic step carefully so there are ZERO mathematical errors.
3. Format mathematical expressions cleanly using LaTeX wrapped in $$...$$ for display lines or $...$ for inline math inside strings. For example, in step3Calculations return separate clean steps like:
   - "$$\\frac{2}{5} + \\frac{2}{6}$$"
   - "$$= \\frac{12}{30} + \\frac{10}{30}$$"
   - "$$= \\frac{12 + 10}{30}$$"
   - "$$= \\frac{22}{30}$$"
   - "$$= \\boxed{\\frac{11}{15}}$$"
   You may include a short explanation line in ${isEn ? 'English' : 'simple Urdu'} before a $$...$$ expression when helpful.
4. Follow the exact 5-step teaching structure:
   - questionRestatement: Complete question clearly restated.
   - step1Understand: Explain what the question means and what information is given in very simple language.
   - step2Method: Explain which formula or mathematical method is needed and why we use it.
   - step3Calculations: Array of 3 to 7 separate, crystal-clear calculation steps showing every intermediate value and ending with the boxed result.
   - step4ObtainAnswer: Explain clearly how the final answer is obtained from the calculations.
   - step5Verify: Check/verify the answer mathematically (substitute back, reverse the operation, or double-check the rule).
   - finalAnswerText: Exact matching text of the correct option.
   - finalAnswerLatex: Clean LaTeX boxed answer such as "\\boxed{\\frac{11}{15}}" or "\\boxed{5}" (or empty string if the answer is purely a text definition).
   - similarQuestionTip: Practical, encouraging advice teaching the student how to solve a similar question next time.`;

    const callExplainModel = (model: string) =>
      ai.models.generateContent({
        model,
        contents: promptText,
        config: {
          systemInstruction: isEn
            ? 'You are a patient, accurate Class 8 Mathematics teacher. Independently solve every problem, verify the final answer, explain mistakes kindly, use clean LaTeX math formatting ($$...$$ and \\boxed{...}), and never skip calculation steps.'
            : 'You are a patient, accurate Pakistani Class 8 Mathematics teacher teaching in simple everyday Urdu. Independently solve every problem, verify the final answer, explain mistakes kindly, use clean LaTeX math formatting ($$...$$ and \\boxed{...}), and never skip calculation steps.',
          thinkingConfig: { thinkingLevel: ThinkingLevel.MEDIUM },
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              verifiedCorrectIndex: {
                type: Type.INTEGER,
                description: 'Independently calculated 0-based index (0..3) of the correct option.',
              },
              questionRestatement: { type: Type.STRING },
              mistakeAnalysis: {
                type: Type.OBJECT,
                nullable: true,
                properties: {
                  selectedAnswer: { type: Type.STRING },
                  whyWrong: { type: Type.STRING },
                  whereMistakeHappened: { type: Type.STRING },
                },
                required: ['selectedAnswer', 'whyWrong', 'whereMistakeHappened'],
              },
              step1Understand: { type: Type.STRING },
              step2Method: { type: Type.STRING },
              step3Calculations: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              step4ObtainAnswer: { type: Type.STRING },
              step5Verify: { type: Type.STRING },
              finalAnswerText: { type: Type.STRING },
              finalAnswerLatex: { type: Type.STRING },
              similarQuestionTip: { type: Type.STRING },
            },
            required: [
              'verifiedCorrectIndex',
              'questionRestatement',
              'step1Understand',
              'step2Method',
              'step3Calculations',
              'step4ObtainAnswer',
              'step5Verify',
              'finalAnswerText',
              'finalAnswerLatex',
              'similarQuestionTip',
            ],
          },
        },
      });

    try {
      let response;
      try {
        response = await generateWithRetry(() => callExplainModel('gemini-4-hydrogen'), 1);
      } catch (primaryErr: unknown) {
        const status = (primaryErr as { status?: number })?.status;
        if (status === 503 || status === 429) {
          response = await callExplainModel('gemini-3.1-flash-lite');
        } else {
          throw primaryErr;
        }
      }

      const rawText = (response.text ?? '{}').trim();
      const parsed = JSON.parse(rawText) as {
        verifiedCorrectIndex?: number;
        questionRestatement?: string;
        mistakeAnalysis?: {
          selectedAnswer?: string;
          whyWrong?: string;
          whereMistakeHappened?: string;
        } | null;
        step1Understand?: string;
        step2Method?: string;
        step3Calculations?: string[];
        step4ObtainAnswer?: string;
        step5Verify?: string;
        finalAnswerText?: string;
        finalAnswerLatex?: string;
        similarQuestionTip?: string;
      };

      const vIdx = Number(parsed.verifiedCorrectIndex);
      if (
        !Number.isInteger(vIdx) ||
        vIdx < 0 ||
        vIdx > 3 ||
        !parsed.step1Understand?.trim() ||
        !parsed.step2Method?.trim() ||
        !Array.isArray(parsed.step3Calculations) ||
        parsed.step3Calculations.length === 0 ||
        !parsed.step4ObtainAnswer?.trim() ||
        !parsed.step5Verify?.trim()
      ) {
        res.status(502).json({
          ok: false,
          error: isEn
            ? 'AI explanation could not be verified. Showing the verified 5-step solution.'
            : 'اے آئی کی وضاحت تصدیق کے معیار پر پوری نہیں اتری۔ تصدیق شدہ 5 مرحلوں والا حل دکھایا جا رہا ہے۔',
        });
        return;
      }

      // If expectedIdx was supplied and AI disagreed, treat as unverified so we never display an inconsistent solution
      if (expectedIdx !== null && vIdx !== expectedIdx) {
        res.status(502).json({
          ok: false,
          error: isEn
            ? 'AI response did not match the verified answer key. Showing the verified 5-step solution.'
            : 'اے آئی کا نتیجہ تصدیق شدہ جوابی کلید سے مطابقت نہیں رکھتا۔ تصدیق شدہ 5 مرحلوں والا حل دکھایا جا رہا ہے۔',
        });
        return;
      }

      const safeCalcs = parsed.step3Calculations
        .map((c) => String(c ?? '').trim())
        .filter(Boolean);

      const safeMistake =
        isWrong && parsed.mistakeAnalysis
          ? {
              selectedAnswer: String(
                parsed.mistakeAnalysis.selectedAnswer || studentChosenText || ''
              ).trim(),
              whyWrong: String(parsed.mistakeAnalysis.whyWrong || '').trim(),
              whereMistakeHappened: String(
                parsed.mistakeAnalysis.whereMistakeHappened || ''
              ).trim(),
            }
          : null;

      res.json({
        ok: true,
        explanation: {
          source: 'ai',
          verifiedCorrectIndex: vIdx,
          questionRestatement: String(
            parsed.questionRestatement || cleanQuestion
          ).trim(),
          mistakeAnalysis:
            safeMistake && safeMistake.whyWrong && safeMistake.whereMistakeHappened
              ? safeMistake
              : null,
          step1Understand: String(parsed.step1Understand).trim(),
          step2Method: String(parsed.step2Method).trim(),
          step3Calculations: safeCalcs,
          step4ObtainAnswer: String(parsed.step4ObtainAnswer).trim(),
          step5Verify: String(parsed.step5Verify).trim(),
          finalAnswerText: String(
            parsed.finalAnswerText || cleanOptions[vIdx] || ''
          ).trim(),
          finalAnswerLatex: String(parsed.finalAnswerLatex || '').trim() || undefined,
          similarQuestionTip: String(parsed.similarQuestionTip || '').trim(),
        },
      });
    } catch (error: unknown) {
      console.error('Gemini MCQ explain error:', error);
      const status = (error as { status?: number })?.status;
      if (status === 403 || status === 400) {
        res.status(status).json({
          ok: false,
          error: isEn
            ? 'Gemini API key error. Please check your API key in Settings > Secrets.'
            : 'جیمنائی اے آئی کلید میں مسئلہ ہے۔ براہِ کرم Settings > Secrets میں اپنی API کلید چیک کریں۔',
        });
        return;
      }
      if (status === 429) {
        res.status(429).json({
          ok: false,
          error: isEn
            ? 'AI explanation rate limit reached right now. Please try again in a moment.'
            : 'اس وقت اے آئی وضاحت کی حد پوری ہو گئی ہے۔ براہِ کرم تھوڑی دیر بعد دوبارہ کوشش کریں۔',
        });
        return;
      }
      res.status(502).json({
        ok: false,
        error: isEn
          ? 'Could not reach AI Math Teacher right now. Showing the verified 5-step solution below.'
          : 'اس وقت اے آئی استادِ ریاضی سے رابطہ نہیں ہو سکا۔ نیچے تصدیق شدہ 5 مرحلوں والا حل دکھایا جا رہا ہے۔',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('/{*splat}', (_req, res) => {
      const indexFile = path.join(distPath, 'index.html');
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        res.status(404).send('بلڈ فائل دستیاب نہیں ہے۔');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`جماعت ہشتم ریاضی ایم سی کیو ماسٹر پورٹ ${PORT} پر فعال ہے`);
  });
}

startServer();
