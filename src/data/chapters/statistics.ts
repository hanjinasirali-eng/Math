import { MCQQuestion } from '../../types/math';
import { buildBilingualMCQ, formatFraction } from '../mathUtils';

interface BilingualEntry {
  topic: string;
  q: string;
  correct: string;
  distractors: string[];
  exp: string;
  steps: string[];
}

function createStatisticsEasy(): MCQQuestion[] {
  const list: MCQQuestion[] = [];
  let idx = 1;
  const push = (ur: BilingualEntry, en: BilingualEntry) => {
    list.push(
      buildBilingualMCQ({
        id: `sta-e-${idx}`,
        chapterId: 'statistics',
        difficulty: 'easy',
        seed: idx * 7 + 4,
        ur: {
          topic: ur.topic,
          question: ur.q,
          correct: ur.correct,
          distractors: ur.distractors,
          explanation: ur.exp,
          steps: ur.steps,
        },
        en: {
          topic: en.topic,
          question: en.q,
          correct: en.correct,
          distractors: en.distractors,
          explanation: en.exp,
          steps: en.steps,
        },
      })
    );
    idx++;
  };

  // 15 conceptual questions
  push(
    {
      topic: 'تعدد اور جماعتی وقفے',
      q: 'دیے گئے مواد میں سب سے بڑی اور سب سے چھوٹی قدر کے فرق کو کیا کہتے ہیں؟',
      correct: 'وسعت',
      distractors: ['اوسط', 'جماعتی وقفے کی چوڑائی', 'تعدد'],
      exp: 'وسعت = سب سے بڑا مشاہدہ − سب سے چھوٹا مشاہدہ۔',
      steps: [
        'مواد کے پھیلاؤ کی پیمائش کا بنیادی کلیہ لکھیں:\nوسعت = زیادہ سے زیادہ قدر − کم سے کم قدر',
        'اوسط، وسطانیہ یا تعدد سب سے بڑی اور سب سے چھوٹی قدر کے فرق کو ظاہر نہیں کرتے۔',
        'اس لیے صحیح اصطلاح "وسعت" ہے۔',
      ],
    },
    {
      topic: 'Frequency & Class Intervals',
      q: 'What is the difference between the largest value and the smallest value in a given data set called?',
      correct: 'Range',
      distractors: ['Mean', 'Class width', 'Frequency'],
      exp: 'Range = Largest observation − Smallest observation.',
      steps: [
        'Write the basic formula for the spread of data:\nRange = Maximum value − Minimum value',
        'Mean, median, or frequency do not represent the difference between the largest and smallest values.',
        'Therefore, the correct term is "Range".',
      ],
    }
  );

  push(
    {
      topic: 'دائروی گراف اور ستونی گراف',
      q: 'ایک مکمل دائروی گراف (پائی چارٹ) کا کل مرکزی زاویہ کتنا ہوتا ہے؟',
      correct: '360°',
      distractors: ['180°', '90°', '100°'],
      exp: 'مکمل دائرے کا مرکزی زاویہ 360° ہوتا ہے۔',
      steps: [
        'دائروی گراف ایک مکمل دائرے پر مشتمل ہوتا ہے۔',
        'ہندسہ (جیومیٹری) کے مطابق ایک پورے دائرے کے مرکز پر بننے والا کل زاویہ 360° ہوتا ہے۔',
        'اس لیے دائروی گراف کے تمام حصوں کے مرکزی زاویوں کا مجموعہ 360° ہوتا ہے۔',
      ],
    },
    {
      topic: 'Pie Charts & Bar Graphs',
      q: 'What is the total central angle of a complete pie chart (circle graph)?',
      correct: '360°',
      distractors: ['180°', '90°', '100°'],
      exp: 'The total central angle around the center of a full circle is 360°.',
      steps: [
        'A pie chart is represented by a complete circle.',
        'In geometry, the total angle around the center of a full circle is 360°.',
        'Therefore, the sum of the central angles of all sectors in a pie chart is 360°.',
      ],
    }
  );

  push(
    {
      topic: 'تعدد اور جماعتی وقفے',
      q: 'جماعتی وقفے 20–30 میں بالائی جماعتی حد کیا ہے؟',
      correct: '30',
      distractors: ['20', '10', '25'],
      exp: 'جماعتی وقفے a–b میں a زیریں حد اور b بالائی حد کہلاتی ہے۔',
      steps: [
        'جماعتی وقفے کی معیاری صورت لکھیں:\nزیریں حد – بالائی حد',
        'وقفے 20–30 میں چھوٹی قدر (20) زیریں حد اور بڑی قدر (30) بالائی حد ہے۔',
        'چنانچہ بالائی جماعتی حد 30 ہے۔',
      ],
    },
    {
      topic: 'Frequency & Class Intervals',
      q: 'In the class interval 20–30, what is the upper class limit?',
      correct: '30',
      distractors: ['20', '10', '25'],
      exp: 'In a class interval a–b, a is the lower limit and b is the upper limit.',
      steps: [
        'Write the standard form of a class interval:\nLower limit – Upper limit',
        'In the interval 20–30, the smaller value (20) is the lower limit and the larger value (30) is the upper limit.',
        'Thus, the upper class limit is 30.',
      ],
    }
  );

  push(
    {
      topic: 'تعدد اور جماعتی وقفے',
      q: 'جماعتی وقفے 15–25 کی چوڑائی (جماعتی جسامت) کتنی ہے؟',
      correct: '10',
      distractors: ['15', '25', '20'],
      exp: 'جماعتی چوڑائی = بالائی حد − زیریں حد = 25 − 15 = 10۔',
      steps: [
        'جماعتی چوڑائی کا کلیہ لکھیں:\nجماعتی چوڑائی = بالائی حد − زیریں حد',
        'بالائی حد 25 اور زیریں حد 15 درج کریں:\n25 − 15',
        'تفریق مکمل کریں:\n10',
      ],
    },
    {
      topic: 'Frequency & Class Intervals',
      q: 'What is the width (class size) of the class interval 15–25?',
      correct: '10',
      distractors: ['15', '25', '20'],
      exp: 'Class width = Upper limit − Lower limit = 25 − 15 = 10.',
      steps: [
        'Write the formula for class width:\nClass width = Upper limit − Lower limit',
        'Substitute upper limit = 25 and lower limit = 15:\n25 − 15',
        'Subtract:\n10',
      ],
    }
  );

  push(
    {
      topic: 'تعدد اور جماعتی وقفے',
      q: 'کوئی خاص مشاہدہ مواد میں جتنی مرتبہ آتا ہے، اسے اس کا کیا کہتے ہیں؟',
      correct: 'تعدد',
      distractors: ['وسعت', 'جماعتی نشان', 'وسطانیہ'],
      exp: 'کوئی قدر مواد میں جتنی بار دہرائی جائے، اس تعداد کو تعدد کہتے ہیں۔',
      steps: [
        'شماریات میں تعدد کی تعریف یہ ہے کہ کوئی خاص قدر یا مشاہدہ دیے گئے مواد میں کتنی مرتبہ آیا ہے۔',
        'مثال کے طور پر اگر عدد 5 مواد میں 4 بار آئے تو 5 کا تعدد 4 ہے۔',
        'اس لیے درست جواب "تعدد" ہے۔',
      ],
    },
    {
      topic: 'Frequency & Class Intervals',
      q: 'The number of times a particular observation occurs in a data set is called its:',
      correct: 'Frequency',
      distractors: ['Range', 'Class mark', 'Median'],
      exp: 'The number of times a value repeats in data is called its frequency.',
      steps: [
        'In statistics, frequency is defined as how many times a specific value or observation appears in the given data.',
        'For example, if the number 5 appears 4 times in the data, the frequency of 5 is 4.',
        'Therefore, the correct answer is "Frequency".',
      ],
    }
  );

  push(
    {
      topic: 'اوسط، وسطانیہ اور عادہ',
      q: 'مرکزی رجحان کا وہ پیمانہ جو مواد میں سب سے زیادہ مرتبہ آنے والی قدر کو ظاہر کرتا ہے، کیا کہلاتا ہے؟',
      correct: 'عادہ',
      distractors: ['اوسط', 'وسطانیہ', 'وسعت'],
      exp: 'مواد میں جو قدر سب سے زیادہ بار آئے، اسے عادہ کہتے ہیں۔',
      steps: [
        'مرکزی رجحان کے تین پیمانے دیکھیں:\nاوسط = تمام قدروں کا مجموعہ ÷ تعداد\nوسطانیہ = مرتب مواد کی درمیانی قدر\nعادہ = سب سے زیادہ بار آنے والی قدر',
        'سوال میں سب سے زیادہ مرتبہ آنے والی قدر پوچھی گئی ہے۔',
        'اس لیے درست جواب "عادہ" ہے۔',
      ],
    },
    {
      topic: 'Mean, Median & Mode',
      q: 'The measure of central tendency that represents the most frequently occurring value in a data set is called:',
      correct: 'Mode',
      distractors: ['Mean', 'Median', 'Range'],
      exp: 'The value that occurs most often in a data set is called the mode.',
      steps: [
        'Review the three measures of central tendency:\nMean = Sum of all values ÷ Total number of values\nMedian = Middle value of ordered data\nMode = Value that appears most frequently',
        'The question asks for the value that occurs most often.',
        'Therefore, the correct answer is "Mode".',
      ],
    }
  );

  push(
    {
      topic: 'اوسط، وسطانیہ اور عادہ',
      q: 'مواد کا وسطانیہ معلوم کرنے کے لیے مشاہدات کو سب سے پہلے:',
      correct: 'صعودی یا نزولی ترتیب میں لکھنا ضروری ہے',
      distractors: ['آپس میں ضرب دینا ضروری ہے', 'وسعت سے تقسیم کرنا ضروری ہے', 'دہائیوں کے گروہوں میں بانٹنا ضروری ہے'],
      exp: 'وسطانیہ صرف اسی وقت درمیانی قدر ہوتا ہے جب مواد کو صعودی یا نزولی ترتیب میں مرتب کیا جائے۔',
      steps: [
        'وسطانیہ مرتب کیے گئے مواد کی بالکل درمیانی قدر ہوتی ہے۔',
        'اگر اعداد بے ترتیب ہوں تو درمیان والا عدد صحیح وسطانیہ نہیں ہوگا۔',
        'اس لیے سب سے پہلے مشاہدات کو صعودی (بڑھتی) یا نزولی (گھٹتی) ترتیب میں لکھنا ضروری ہے۔',
      ],
    },
    {
      topic: 'Mean, Median & Mode',
      q: 'To find the median of a data set, the observations must first be:',
      correct: 'Arranged in ascending or descending order',
      distractors: ['Multiplied together', 'Divided by the range', 'Grouped into tens'],
      exp: 'The median is the middle value only after the data is arranged in ascending or descending order.',
      steps: [
        'The median is the exact middle value of an ordered data set.',
        'If the numbers are unordered, the middle position will not give the true median.',
        'Therefore, observations must first be arranged in ascending (increasing) or descending (decreasing) order.',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'جب ایک متوازن سکے کو ایک مرتبہ اچھالا جائے تو سر (چت) آنے کا احتمال کیا ہے؟',
      correct: '1/2',
      distractors: ['1', '1/4', '0'],
      exp: 'دو یکساں ممکنہ نتائج (چت، پٹ) ہیں اور مطلوبہ نتیجہ 1 ہے، لہٰذا احتمال = 1/2۔',
      steps: [
        'سکے کو ایک بار اچھالنے کے تمام ممکنہ نتائج لکھیں:\n{چت، پٹ}، یعنی کل نتائج = 2',
        'چت آنے کے موافق نتائج = 1',
        'احتمال کا کلیہ لگائیں:\nاحتمال = موافق نتائج / کل ممکنہ نتائج = 1/2',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'When a fair coin is tossed once, what is the probability of getting a head?',
      correct: '1/2',
      distractors: ['1', '1/4', '0'],
      exp: 'There are 2 equally likely outcomes (Head, Tail) and 1 favorable outcome, so probability = 1/2.',
      steps: [
        'List all possible outcomes when tossing a coin once:\n{Head, Tail}, so total outcomes = 2',
        'Favorable outcomes for getting a Head = 1',
        'Apply the probability formula:\nProbability = Favorable outcomes / Total possible outcomes = 1/2',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'کسی ناممکن واقعے کا احتمال کتنا ہوتا ہے؟',
      correct: '0',
      distractors: ['1', '-1', '1/2'],
      exp: 'جو واقعہ کبھی پیش نہ آ سکے اس کے موافق نتائج 0 ہوتے ہیں، اس لیے اس کا احتمال 0 ہوتا ہے۔',
      steps: [
        'احتمال کا کلیہ لکھیں:\nP(E) = موافق نتائج کی تعداد / کل ممکنہ نتائج کی تعداد',
        'ناممکن واقعے کے موافق نتائج کی تعداد 0 ہوتی ہے۔',
        '0 / کل نتائج = 0، اس لیے ناممکن واقعے کا احتمال 0 ہوتا ہے۔',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'What is the probability of an impossible event?',
      correct: '0',
      distractors: ['1', '-1', '1/2'],
      exp: 'An impossible event has 0 favorable outcomes, so its probability is 0.',
      steps: [
        'Write the probability formula:\nP(E) = Number of favorable outcomes / Total number of possible outcomes',
        'An impossible event can never occur, so favorable outcomes = 0.',
        '0 / Total outcomes = 0, so the probability of an impossible event is 0.',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'کسی یقینی واقعے کا احتمال کتنا ہوتا ہے؟',
      correct: '1',
      distractors: ['0', '100', '1/2'],
      exp: 'یقینی واقعہ ہر تجربے میں پیش آتا ہے، اس لیے اس کا احتمال 1 ہوتا ہے۔',
      steps: [
        'یقینی واقعہ وہ ہے جو لازمی طور پر پیش آتا ہے، اس لیے موافق نتائج اور کل ممکنہ نتائج برابر ہوتے ہیں۔',
        'احتمال کے کلیے میں دونوں کو برابر رکھنے پر:\nP(E) = n / n',
        'تقسیم کرنے پر:\n1',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'What is the probability of a sure (certain) event?',
      correct: '1',
      distractors: ['0', '100', '1/2'],
      exp: 'A sure event occurs in every trial, so its probability is 1.',
      steps: [
        'A sure event is guaranteed to happen, so the number of favorable outcomes equals the total possible outcomes.',
        'Substitute equal values into the probability formula:\nP(E) = n / n',
        'Divide:\n1',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'درج ذیل میں سے کون سا عدد کسی واقعے کا احتمال نہیں ہو سکتا؟',
      correct: '1.2',
      distractors: ['0.75', '0', '3/5'],
      exp: 'کسی بھی واقعے کا احتمال ہمیشہ 0 اور 1 کے درمیان (0 ≤ P(E) ≤ 1) ہوتا ہے؛ یہ 1 سے بڑا نہیں ہو سکتا۔',
      steps: [
        'احتمال کا بنیادی اصول لکھیں:\nکسی بھی واقعے کا احتمال 0 سے 1 کے درمیان ہوتا ہے (0 ≤ P(E) ≤ 1)۔',
        'آپشنز کی جانچ کریں:\n0.75 (0 اور 1 کے درمیان)، 0 (0 سے برابر)، 3/5 = 0.6 (0 اور 1 کے درمیان)۔',
        '1.2 عدد 1 سے بڑا ہے، اس لیے یہ کسی واقعے کا احتمال نہیں ہو سکتا۔',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'Which of the following numbers CANNOT be the probability of an event?',
      correct: '1.2',
      distractors: ['0.75', '0', '3/5'],
      exp: 'The probability of any event always lies between 0 and 1 (0 ≤ P(E) ≤ 1); it cannot be greater than 1.',
      steps: [
        'Write the fundamental rule of probability:\nThe probability of an event must satisfy 0 ≤ P(E) ≤ 1.',
        'Check the options:\n0.75 (between 0 and 1), 0 (equal to 0), 3/5 = 0.6 (between 0 and 1).',
        'Since 1.2 is greater than 1, it cannot be the probability of an event.',
      ],
    }
  );

  push(
    {
      topic: 'دائروی گراف اور ستونی گراف',
      q: 'بغیر وقفے کے مسلسل گروہی مواد کو ظاہر کرنے کے لیے کون سا گراف سب سے بہتر ہے؟',
      correct: 'کالمی نقشہ (ہسٹوگرام)',
      distractors: ['تصویری گراف', 'خطی گراف', 'وقفے دار ستونی گراف'],
      exp: 'ہسٹوگرام مسلسل جماعتی وقفوں کو باہم ملے ہوئے ستونوں (بغیر خلا) کی مدد سے ظاہر کرتا ہے۔',
      steps: [
        'مسلسل جماعتی وقفوں (مثلاً 0–10، 10–20، 20–30) میں ایک وقفے کی بالائی حد اگلے کی زیریں حد ہوتی ہے۔',
        'ایسے مواد کو ظاہر کرنے کے لیے ستون ایک دوسرے سے جڑے (بغیر وقفے کے) بنائے جاتے ہیں۔',
        'اس گراف کو کالمی نقشہ (ہسٹوگرام) کہتے ہیں۔',
      ],
    },
    {
      topic: 'Pie Charts & Bar Graphs',
      q: 'Which graph is best suited to represent continuous grouped data without gaps between bars?',
      correct: 'Histogram',
      distractors: ['Pictograph', 'Line graph', 'Spaced bar graph'],
      exp: 'A histogram represents continuous class intervals using adjacent bars with no gaps between them.',
      steps: [
        'In continuous class intervals (e.g., 0–10, 10–20, 20–30), the upper limit of one class is the lower limit of the next.',
        'To display such data, bars are drawn touching each other with no gaps.',
        'This graph is called a Histogram.',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'جب چھ پہلوؤں والا ایک متوازن پانسہ ایک بار پھینکا جائے تو کل کتنے ممکنہ نتائج ہوتے ہیں؟',
      correct: '6',
      distractors: ['2', '12', '3'],
      exp: 'معیاری پانسے پر 1، 2، 3، 4، 5 اور 6 درج ہوتے ہیں — کل 6 ممکنہ نتائج۔',
      steps: [
        'پانسے کے چھ پہلو ہوتے ہیں جن پر 1 سے 6 تک ہندسے درج ہوتے ہیں۔',
        'ممکنہ نتائج کا سیٹ لکھیں:\n{1, 2, 3, 4, 5, 6}',
        'کل ممکنہ نتائج کی تعداد = 6',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'When a fair six-sided die is rolled once, how many total possible outcomes are there?',
      correct: '6',
      distractors: ['2', '12', '3'],
      exp: 'A standard die has faces numbered 1, 2, 3, 4, 5, and 6 — a total of 6 possible outcomes.',
      steps: [
        'A standard die has six faces numbered from 1 to 6.',
        'Write the sample space (set of possible outcomes):\n{1, 2, 3, 4, 5, 6}',
        'Total number of possible outcomes = 6',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'ایک تھیلے میں 3 سرخ گیندیں اور 5 نیلی گیندیں ہیں۔ بے ترتیبی سے ایک سرخ گیند نکالنے کا احتمال کیا ہوگا؟',
      correct: '3/8',
      distractors: ['3/5', '5/8', '1/3'],
      exp: 'کل گیندیں = 3 + 5 = 8۔ سرخ گیند کا احتمال = 3/8۔',
      steps: [
        'تھیلے میں کل گیندوں کی تعداد معلوم کریں:\nکل گیندیں = 3 + 5 = 8',
        'سرخ گیندیں (موافق نتائج) = 3',
        'احتمال کا کلیہ لگائیں:\nاحتمال = سرخ گیندیں / کل گیندیں = 3/8',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'A bag contains 3 red balls and 5 blue balls. What is the probability of drawing a red ball at random?',
      correct: '3/8',
      distractors: ['3/5', '5/8', '1/3'],
      exp: 'Total balls = 3 + 5 = 8. Probability of a red ball = 3/8.',
      steps: [
        'Find the total number of balls in the bag:\nTotal balls = 3 + 5 = 8',
        'Number of red balls (favorable outcomes) = 3',
        'Apply the probability formula:\nProbability = Red balls / Total balls = 3/8',
      ],
    }
  );

  push(
    {
      topic: 'دائروی گراف اور ستونی گراف',
      q: 'اگر دائروی گراف میں کوئی حصہ کل مواد کے 25% کو ظاہر کرے تو اس کا مرکزی زاویہ کتنا ہوگا؟',
      correct: '90°',
      distractors: ['45°', '120°', '72°'],
      exp: '360° کا 25% = (25/100) × 360° = 90°۔',
      steps: [
        'دائروی گراف کا کل مرکزی زاویہ 360° ہوتا ہے۔',
        'کل زاویے کا 25% نکالیں:\n(25 / 100) × 360° = ¼ × 360°',
        'تقسیم مکمل کریں:\n360° ÷ 4 = 90°',
      ],
    },
    {
      topic: 'Pie Charts & Bar Graphs',
      q: 'If a sector in a pie chart represents 25% of the total data, what is its central angle?',
      correct: '90°',
      distractors: ['45°', '120°', '72°'],
      exp: '25% of 360° = (25/100) × 360° = 90°.',
      steps: [
        'The total central angle of a pie chart is 360°.',
        'Find 25% of the total angle:\n(25 / 100) × 360° = (1/4) × 360°',
        'Divide:\n360° ÷ 4 = 90°',
      ],
    }
  );

  // 20 range questions
  for (let i = 1; i <= 20; i++) {
    const min = 5 + i;
    const max = 25 + i * 2;
    const mid1 = min + 4;
    const mid2 = min + 9;
    const mid3 = max - 3;
    const range = max - min;
    push(
      {
        topic: 'تعدد اور جماعتی وقفے',
        q: `مشاہدات ${mid2}، ${max}، ${mid1}، ${min}، ${mid3} کی وسعت معلوم کریں۔`,
        correct: `${range}`,
        distractors: [`${max + min}`, `${range + 4}`, `${Math.max(1, range - 3)}`],
        exp: `سب سے بڑی قدر = ${max}، سب سے چھوٹی قدر = ${min}۔ وسعت = ${max} − ${min} = ${range}۔`,
        steps: [
          `مواد میں سے سب سے بڑی اور سب سے چھوٹی قدر منتخب کریں:\nسب سے بڑی قدر = ${max}، سب سے چھوٹی قدر = ${min}`,
          `وسعت کا کلیہ لکھیں:\nوسعت = سب سے بڑی قدر − سب سے چھوٹی قدر`,
          `تفریق مکمل کریں:\n${max} − ${min} = ${range}`,
        ],
      },
      {
        topic: 'Frequency & Class Intervals',
        q: `Find the range of the observations ${mid2}, ${max}, ${mid1}, ${min}, ${mid3}.`,
        correct: `${range}`,
        distractors: [`${max + min}`, `${range + 4}`, `${Math.max(1, range - 3)}`],
        exp: `Largest value = ${max}, smallest value = ${min}. Range = ${max} − ${min} = ${range}.`,
        steps: [
          `Identify the largest and smallest values in the data:\nLargest value = ${max}, Smallest value = ${min}`,
          `Write the range formula:\nRange = Largest value − Smallest value`,
          `Subtract:\n${max} − ${min} = ${range}`,
        ],
      }
    );
  }

  // 25 arithmetic mean of 5 numbers
  for (let i = 1; i <= 25; i++) {
    const mean = 8 + i * 2;
    const a = mean - 4;
    const b = mean - 2;
    const c = mean;
    const d = mean + 1;
    const e = mean + 5;
    const total = a + b + c + d + e;
    push(
      {
        topic: 'اوسط، وسطانیہ اور عادہ',
        q: `اعداد ${a}، ${b}، ${c}، ${d}، ${e} کا حسابی اوسط معلوم کریں۔`,
        correct: `${mean}`,
        distractors: [`${mean + 2}`, `${mean - 2}`, `${total}`],
        exp: `مجموعہ = ${total}۔ اوسط = ${total} ÷ 5 = ${mean}۔`,
        steps: [
          `حسابی اوسط کا کلیہ لکھیں:\nاوسط = تمام اعداد کا مجموعہ ÷ اعداد کی کل تعداد`,
          `تمام 5 اعداد کو جمع کریں:\n${a} + ${b} + ${c} + ${d} + ${e} = ${total}`,
          `مجموعے کو تعداد (5) پر تقسیم کریں:\n${total} ÷ 5 = ${mean}`,
        ],
      },
      {
        topic: 'Mean, Median & Mode',
        q: `Find the arithmetic mean of the numbers ${a}, ${b}, ${c}, ${d}, ${e}.`,
        correct: `${mean}`,
        distractors: [`${mean + 2}`, `${mean - 2}`, `${total}`],
        exp: `Sum = ${total}. Mean = ${total} ÷ 5 = ${mean}.`,
        steps: [
          `Write the formula for arithmetic mean:\nMean = Sum of all observations ÷ Total number of observations`,
          `Add all 5 numbers:\n${a} + ${b} + ${c} + ${d} + ${e} = ${total}`,
          `Divide the sum by the count (5):\n${total} ÷ 5 = ${mean}`,
        ],
      }
    );
  }

  // 20 mode and median
  for (let i = 1; i <= 20; i++) {
    const base = i + 2;
    if (i <= 10) {
      const m = base + 3;
      const listUr = `${base}، ${m}، ${base + 1}، ${m}، ${base + 5}، ${m}، ${base + 2}`;
      const listEn = `${base}, ${m}, ${base + 1}, ${m}, ${base + 5}, ${m}, ${base + 2}`;
      push(
        {
          topic: 'اوسط، وسطانیہ اور عادہ',
          q: `دیے گئے مواد کا عادہ معلوم کریں: ${listUr}۔`,
          correct: `${m}`,
          distractors: [`${base + 1}`, `${base + 2}`, `${base + 5}`],
          exp: `${m} سب سے زیادہ (3 مرتبہ) آیا ہے، اس لیے عادہ ${m} ہے۔`,
          steps: [
            `عادہ کی تعریف لکھیں:\nمواد میں جو قدر سب سے زیادہ مرتبہ آئے، وہ عادہ کہلاتی ہے۔`,
            `ہر عدد کے آنے کی تعداد دیکھیں:\nعدد ${m} تین (3) مرتبہ آیا ہے جبکہ باقی تمام اعداد صرف ایک ایک بار آئے ہیں۔`,
            `چونکہ ${m} سب سے زیادہ مرتبہ آیا ہے، اس لیے عادہ ${m} ہے۔`,
          ],
        },
        {
          topic: 'Mean, Median & Mode',
          q: `Find the mode of the given data: ${listEn}.`,
          correct: `${m}`,
          distractors: [`${base + 1}`, `${base + 2}`, `${base + 5}`],
          exp: `${m} appears most often (3 times), so the mode is ${m}.`,
          steps: [
            `Recall the definition of mode:\nThe value that occurs most frequently in a data set is called the mode.`,
            `Count the frequency of each number:\nThe number ${m} appears 3 times while all other numbers appear only once.`,
            `Since ${m} occurs most frequently, the mode is ${m}.`,
          ],
        }
      );
    } else {
      const v = [base, base + 2, base + 4, base + 7, base + 9, base + 12, base + 15];
      push(
        {
          topic: 'اوسط، وسطانیہ اور عادہ',
          q: `مشاہدات ${v[3]}، ${v[0]}، ${v[5]}، ${v[1]}، ${v[6]}، ${v[2]}، ${v[4]} کا وسطانیہ معلوم کریں۔`,
          correct: `${v[3]}`,
          distractors: [`${v[2]}`, `${v[4]}`, `${v[1]}`],
          exp: `صعودی ترتیب: ${v.join('، ')}۔ درمیان کی (چوتھی) قدر ${v[3]} ہے۔`,
          steps: [
            `پہلے تمام 7 مشاہدات کو صعودی (بڑھتی) ترتیب میں لکھیں:\n${v.join('، ')}`,
            `طاق تعداد (n = 7) کے لیے وسطانیہ کا مقام = (7 + 1) ÷ 2 = چوتھی قدر`,
            `ترتیب میں چوتھی قدر دیکھیں، جو ${v[3]} ہے۔`,
          ],
        },
        {
          topic: 'Mean, Median & Mode',
          q: `Find the median of the observations ${v[3]}, ${v[0]}, ${v[5]}, ${v[1]}, ${v[6]}, ${v[2]}, ${v[4]}.`,
          correct: `${v[3]}`,
          distractors: [`${v[2]}`, `${v[4]}`, `${v[1]}`],
          exp: `Ascending order: ${v.join(', ')}. The middle (4th) value is ${v[3]}.`,
          steps: [
            `First arrange all 7 observations in ascending order:\n${v.join(', ')}`,
            `For an odd number of observations (n = 7), median position = (7 + 1) ÷ 2 = 4th value`,
            `Look at the 4th value in the ordered list, which is ${v[3]}.`,
          ],
        }
      );
    }
  }

  // 20 basic probability
  for (let i = 1; i <= 20; i++) {
    const fav = (i % 5) + 2;
    const other = (i % 6) + 3;
    const total = fav + other;
    const ans = formatFraction(fav, total);
    push(
      {
        topic: 'سادہ واقعے کا احتمال',
        q: `ایک ڈبے میں ${fav} سبز اور ${other} پیلے کنچے ہیں۔ بے ترتیبی سے ایک کنچا نکالا جاتا ہے۔ اس کے سبز ہونے کا احتمال کیا ہوگا؟`,
        correct: ans,
        distractors: [
          formatFraction(other, total),
          formatFraction(fav, other),
          formatFraction(1, total),
        ],
        exp: `کل کنچے = ${fav} + ${other} = ${total}۔ سبز کنچے کا احتمال = ${fav}/${total} = ${ans}۔`,
        steps: [
          `کل کنچوں کی تعداد معلوم کریں:\n${fav} + ${other} = ${total}`,
          `احتمال کا کلیہ لگائیں:\nسبز کنچے کا احتمال = سبز کنچے / کل کنچے = ${fav}/${total}`,
          `کسر کو مختصر ترین شکل میں لکھیں:\n${ans}`,
        ],
      },
      {
        topic: 'Probability of Simple Events',
        q: `A box contains ${fav} green and ${other} yellow marbles. One marble is drawn at random. What is the probability that it is green?`,
        correct: ans,
        distractors: [
          formatFraction(other, total),
          formatFraction(fav, other),
          formatFraction(1, total),
        ],
        exp: `Total marbles = ${fav} + ${other} = ${total}. Probability of a green marble = ${fav}/${total} = ${ans}.`,
        steps: [
          `Find the total number of marbles:\n${fav} + ${other} = ${total}`,
          `Apply the probability formula:\nP(green) = Green marbles / Total marbles = ${fav}/${total}`,
          `Simplify the fraction to lowest terms:\n${ans}`,
        ],
      }
    );
  }

  return list;
}

function createStatisticsMedium(): MCQQuestion[] {
  const list: MCQQuestion[] = [];
  let idx = 1;
  const push = (ur: BilingualEntry, en: BilingualEntry) => {
    list.push(
      buildBilingualMCQ({
        id: `sta-m-${idx}`,
        chapterId: 'statistics',
        difficulty: 'medium',
        seed: idx * 11 + 8,
        ur: {
          topic: ur.topic,
          question: ur.q,
          correct: ur.correct,
          distractors: ur.distractors,
          explanation: ur.exp,
          steps: ur.steps,
        },
        en: {
          topic: en.topic,
          question: en.q,
          correct: en.correct,
          distractors: en.distractors,
          explanation: en.exp,
          steps: en.steps,
        },
      })
    );
    idx++;
  };

  // 12 medium conceptual questions
  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'ایک متوازن چھ پہلوؤں والا پانسہ ایک مرتبہ پھینکا جاتا ہے۔ مفرد عدد آنے کا احتمال کیا ہوگا؟',
      correct: '1/2',
      distractors: ['1/3', '2/3', '1/6'],
      exp: 'پانسے پر مفرد اعداد 2، 3 اور 5 ہیں (6 میں سے 3 نتائج)۔ احتمال = 3/6 = 1/2۔',
      steps: [
        'پانسے کے کل ممکنہ نتائج لکھیں: {1, 2, 3, 4, 5, 6} (کل 6)',
        'ان میں سے مفرد اعداد (1 مفرد نہیں ہے) منتخب کریں:\n{2, 3, 5} (موافق نتائج = 3)',
        'احتمال نکال کر مختصر کریں:\n3/6 = 1/2',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'A fair six-sided die is rolled once. What is the probability of getting a prime number?',
      correct: '1/2',
      distractors: ['1/3', '2/3', '1/6'],
      exp: 'The prime numbers on a die are 2, 3, and 5 (3 out of 6 outcomes). Probability = 3/6 = 1/2.',
      steps: [
        'List all possible outcomes of rolling a die: {1, 2, 3, 4, 5, 6} (Total = 6)',
        'Identify the prime numbers (note that 1 is not prime):\n{2, 3, 5} (Favorable outcomes = 3)',
        'Calculate and simplify the probability:\n3/6 = 1/2',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'تاش کے 52 پتوں کی اچھی طرح ملی ہوئی گڈی میں سے ایک پتا بے ترتیبی سے نکالا جاتا ہے۔ بادشاہ آنے کا احتمال کیا ہوگا؟',
      correct: '1/13',
      distractors: ['1/52', '1/4', '4/13'],
      exp: '52 پتوں میں 4 بادشاہ ہوتے ہیں، اس لیے احتمال = 4/52 = 1/13۔',
      steps: [
        'کل پتے = 52 اور گڈی میں کل بادشاہوں کی تعداد = 4',
        'احتمال کا کلیہ لگائیں:\nبادشاہ آنے کا احتمال = 4 / 52',
        'شمار کنندہ اور مخرج کو 4 پر تقسیم کر کے مختصر کریں:\n4/52 = 1/13',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'A card is drawn at random from a well-shuffled deck of 52 playing cards. What is the probability of drawing a King?',
      correct: '1/13',
      distractors: ['1/52', '1/4', '4/13'],
      exp: 'There are 4 Kings in a 52-card deck, so probability = 4/52 = 1/13.',
      steps: [
        'Total cards = 52, and total number of Kings in the deck = 4',
        'Apply the probability formula:\nP(King) = 4 / 52',
        'Divide numerator and denominator by 4 to simplify:\n4/52 = 1/13',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: '52 پتوں کی گڈی میں سے ایک پتا نکالا جاتا ہے۔ سرخ تصویری پتا (غلام، بیگم یا بادشاہ) آنے کا احتمال کیا ہے؟',
      correct: '3/26',
      distractors: ['3/13', '1/26', '1/13'],
      exp: 'سرخ تصویری پتے کل 6 ہوتے ہیں (پان اور اینٹ کے غلام، بیگم، بادشاہ)۔ احتمال = 6/52 = 3/26۔',
      steps: [
        'سرخ رنگ کے دو رنگ (پان اور اینٹ) ہوتے ہیں اور ہر ایک میں 3 تصویری پتے (غلام، بیگم، بادشاہ) ہوتے ہیں:\nکل سرخ تصویری پتے = 3 + 3 = 6',
        'کل پتے = 52، پس احتمال = 6 / 52',
        '2 پر مختصر کریں:\n6/52 = 3/26',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'One card is drawn from a deck of 52 cards. What is the probability of getting a red face card (Jack, Queen, or King)?',
      correct: '3/26',
      distractors: ['3/13', '1/26', '1/13'],
      exp: 'There are 6 red face cards (Jack, Queen, King of Hearts and Diamonds). Probability = 6/52 = 3/26.',
      steps: [
        'There are two red suits (Hearts and Diamonds), each with 3 face cards (Jack, Queen, King):\nTotal red face cards = 3 + 3 = 6',
        'Total cards = 52, so probability = 6 / 52',
        'Simplify by dividing by 2:\n6/52 = 3/26',
      ],
    }
  );

  push(
    {
      topic: 'تعدد اور جماعتی وقفے',
      q: 'جماعتی وقفے 35–45 کا جماعتی نشان (درمیانی نقطہ) کیا ہے؟',
      correct: '40',
      distractors: ['10', '35', '45'],
      exp: 'جماعتی نشان = (زیریں حد + بالائی حد)/2 = (35 + 45)/2 = 40۔',
      steps: [
        'جماعتی نشان کا کلیہ لکھیں:\nجماعتی نشان = (زیریں حد + بالائی حد) ÷ 2',
        'زیریں حد = 35 اور بالائی حد = 45 درج کریں:\n(35 + 45) ÷ 2 = 80 ÷ 2',
        'تقسیم مکمل کریں:\n40',
      ],
    },
    {
      topic: 'Frequency & Class Intervals',
      q: 'What is the class mark (midpoint) of the class interval 35–45?',
      correct: '40',
      distractors: ['10', '35', '45'],
      exp: 'Class mark = (Lower limit + Upper limit) / 2 = (35 + 45) / 2 = 40.',
      steps: [
        'Write the formula for class mark:\nClass mark = (Lower limit + Upper limit) ÷ 2',
        'Substitute lower limit = 35 and upper limit = 45:\n(35 + 45) ÷ 2 = 80 ÷ 2',
        'Divide:\n40',
      ],
    }
  );

  push(
    {
      topic: 'دائروی گراف اور ستونی گراف',
      q: '180 طلبہ کے سروے کے دائروی گراف میں 45 طلبہ سائیکل پر اسکول آتے ہیں۔ سائیکل والے حصے کا مرکزی زاویہ کتنا ہوگا؟',
      correct: '90°',
      distractors: ['45°', '72°', '120°'],
      exp: 'مرکزی زاویہ = (45/180) × 360° = ¼ × 360° = 90°۔',
      steps: [
        'مرکزی زاویے کا کلیہ لکھیں:\nمرکزی زاویہ = (حصے کی تعداد / کل تعداد) × 360°',
        'دی گئی قیمتیں درج کریں:\n(45 / 180) × 360°',
        '360 ÷ 180 = 2، اب ضرب دیں:\n45 × 2 = 90°',
      ],
    },
    {
      topic: 'Pie Charts & Bar Graphs',
      q: 'In a survey of 180 students for a pie chart, 45 students come to school by bicycle. What is the central angle of the bicycle sector?',
      correct: '90°',
      distractors: ['45°', '72°', '120°'],
      exp: 'Central angle = (45/180) × 360° = (1/4) × 360° = 90°.',
      steps: [
        'Write the formula for central angle:\nCentral angle = (Part value / Total value) × 360°',
        'Substitute the given values:\n(45 / 180) × 360°',
        'Since 360 ÷ 180 = 2, multiply:\n45 × 2 = 90°',
      ],
    }
  );

  push(
    {
      topic: 'دائروی گراف اور ستونی گراف',
      q: '18,000 روپے کے ماہانہ بجٹ کے دائروی گراف میں خوراک کا مرکزی زاویہ 120° ہے۔ خوراک پر کتنے روپے خرچ ہوتے ہیں؟',
      correct: '6000 روپے',
      distractors: ['4500 روپے', '9000 روپے', '3000 روپے'],
      exp: 'خوراک پر خرچ = (120°/360°) × 18000 = ⅓ × 18000 = 6000 روپے۔',
      steps: [
        'خرچ معلوم کرنے کا کلیہ لکھیں:\nرقم = (مرکزی زاویہ / 360°) × کل بجٹ',
        'قیمتیں درج کریں:\n(120° / 360°) × 18000 = (1/3) × 18000',
        'تقسیم مکمل کریں:\n18000 ÷ 3 = 6000 روپے',
      ],
    },
    {
      topic: 'Pie Charts & Bar Graphs',
      q: 'In a pie chart for a monthly budget of Rs. 18,000, the central angle for food is 120°. How much money is spent on food?',
      correct: 'Rs. 6000',
      distractors: ['Rs. 4500', 'Rs. 9000', 'Rs. 3000'],
      exp: 'Food expense = (120°/360°) × 18000 = (1/3) × 18000 = Rs. 6000.',
      steps: [
        'Write the formula to find the amount:\nAmount = (Central angle / 360°) × Total budget',
        'Substitute the values:\n(120° / 360°) × 18000 = (1/3) × 18000',
        'Divide:\n18000 ÷ 3 = Rs. 6000',
      ],
    }
  );

  push(
    {
      topic: 'مکمل واقعات',
      q: 'اگر کسی کھیل کے جیتنے کا احتمال 0.65 ہو تو نہ جیتنے (ہارنے) کا احتمال کیا ہوگا؟',
      correct: '0.35',
      distractors: ['0.65', '0.45', '1.35'],
      exp: 'نہ جیتنے کا احتمال = 1 − 0.65 = 0.35۔',
      steps: [
        'مکمل واقعات کا کلیہ لکھیں:\nP(واقعہ نہ ہونا) = 1 − P(واقعہ ہونا)',
        'جیتنے کا احتمال 0.65 درج کریں:\n1 − 0.65',
        'تفریق مکمل کریں:\n1.00 − 0.65 = 0.35',
      ],
    },
    {
      topic: 'Complementary Events',
      q: 'If the probability of winning a game is 0.65, what is the probability of not winning (losing) it?',
      correct: '0.35',
      distractors: ['0.65', '0.45', '1.35'],
      exp: 'Probability of not winning = 1 − 0.65 = 0.35.',
      steps: [
        'Write the formula for complementary events:\nP(not E) = 1 − P(E)',
        'Substitute P(winning) = 0.65:\n1 − 0.65',
        'Subtract:\n1.00 − 0.65 = 0.35',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'لفظ «پاکستان» (7 حروف: پ، ا، ک، س، ت، ا، ن) میں سے ایک حرف بے ترتیبی سے منتخب کیا جاتا ہے۔ اس کے حرف «ا» ہونے کا احتمال کیا ہے؟',
      correct: '2/7',
      distractors: ['1/7', '3/7', '4/7'],
      exp: 'لفظ «پاکستان» میں کل 7 حروف ہیں جن میں حرف «ا» 2 مرتبہ آیا ہے۔ احتمال = 2/7۔',
      steps: [
        'لفظ «پاکستان» کے تمام حروف گنیں:\nپ، ا، ک، س، ت، ا، ن — کل ممکنہ نتائج = 7',
        'ان میں حرف «ا» کی تعداد گنیں:\nموافق نتائج = 2 مرتبہ',
        'احتمال نکالیں:\n2/7',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'A letter is chosen at random from the word "KARACHI" (7 letters: K, A, R, A, C, H, I). What is the probability that it is the letter "A"?',
      correct: '2/7',
      distractors: ['1/7', '3/7', '4/7'],
      exp: 'The word "KARACHI" has 7 letters in total, and the letter "A" appears 2 times. Probability = 2/7.',
      steps: [
        'Count all letters in the word "KARACHI":\nK, A, R, A, C, H, I — Total possible outcomes = 7',
        'Count how many times "A" appears:\nFavorable outcomes = 2',
        'Find the probability:\n2/7',
      ],
    }
  );

  push(
    {
      topic: 'اوسط، وسطانیہ اور عادہ',
      q: 'پہلے 5 مفرد اعداد کا حسابی اوسط معلوم کریں۔',
      correct: '5.6',
      distractors: ['5', '5.2', '6'],
      exp: 'پہلے 5 مفرد اعداد: 2، 3، 5، 7، 11۔ مجموعہ = 28۔ اوسط = 28 ÷ 5 = 5.6۔',
      steps: [
        'پہلے 5 مفرد اعداد لکھیں (نوٹ: 1 مفرد عدد نہیں ہے):\n2، 3، 5، 7، 11',
        'ان پانچوں اعداد کو جمع کریں:\n2 + 3 + 5 + 7 + 11 = 28',
        'اعداد کی تعداد (5) پر تقسیم کریں:\n28 ÷ 5 = 5.6',
      ],
    },
    {
      topic: 'Mean, Median & Mode',
      q: 'Find the arithmetic mean of the first 5 prime numbers.',
      correct: '5.6',
      distractors: ['5', '5.2', '6'],
      exp: 'First 5 prime numbers: 2, 3, 5, 7, 11. Sum = 28. Mean = 28 ÷ 5 = 5.6.',
      steps: [
        'List the first 5 prime numbers (note: 1 is not a prime number):\n2, 3, 5, 7, 11',
        'Add these five numbers:\n2 + 3 + 5 + 7 + 11 = 28',
        'Divide by the count (5):\n28 ÷ 5 = 5.6',
      ],
    }
  );

  push(
    {
      topic: 'اوسط، وسطانیہ اور عادہ',
      q: 'جفت اعداد 10، 14، 18، 22، 26، 30 کا وسطانیہ معلوم کریں۔',
      correct: '20',
      distractors: ['18', '22', '19'],
      exp: '6 مرتب قدروں کا وسطانیہ تیسرے اور چوتھے نمبر کی اوسط ہے: (18 + 22)/2 = 20۔',
      steps: [
        'اعداد پہلے سے صعودی ترتیب میں ہیں اور کل تعداد n = 6 (جفت) ہے۔',
        'جفت تعداد کے لیے وسطانیہ درمیان والی دو قدروں (تیسری 18 اور چوتھی 22) کا اوسط ہوتا ہے:\n(18 + 22) ÷ 2',
        'حساب مکمل کریں:\n40 ÷ 2 = 20',
      ],
    },
    {
      topic: 'Mean, Median & Mode',
      q: 'Find the median of the numbers 10, 14, 18, 22, 26, 30.',
      correct: '20',
      distractors: ['18', '22', '19'],
      exp: 'For 6 ordered values, the median is the mean of the 3rd and 4th values: (18 + 22) / 2 = 20.',
      steps: [
        'The numbers are already in ascending order and n = 6 (even).',
        'For an even count, the median is the average of the two middle values (3rd value 18 and 4th value 22):\n(18 + 22) ÷ 2',
        'Calculate:\n40 ÷ 2 = 20',
      ],
    }
  );

  push(
    {
      topic: 'تعدد اور جماعتی وقفے',
      q: 'جماعتی وقفوں 0–10، 10–20، 20–30 میں عدد 20 کو کس وقفے میں شمار کیا جائے گا؟',
      correct: '20–30',
      distractors: ['10–20', 'دونوں وقفوں میں', 'کسی میں نہیں'],
      exp: 'معیاری اصول کے مطابق بالائی حد کو خارج اور زیریں حد کو شامل کیا جاتا ہے، اس لیے 20 وقفے 20–30 میں شمار ہوگا۔',
      steps: [
        'مسلسل جماعتی وقفوں کا معیاری شماریاتی اصول یاد رکھیں:',
        'ہر وقفے میں زیریں حد شامل کی جاتی ہے جبکہ بالائی حد کو اگلے وقفے کے لیے چھوڑ دیا جاتا ہے۔',
        'چونکہ 20 وقفے 20–30 کی زیریں حد ہے، اس لیے اسے 20–30 میں شمار کیا جائے گا۔',
      ],
    },
    {
      topic: 'Frequency & Class Intervals',
      q: 'In the class intervals 0–10, 10–20, 20–30, which interval will include the number 20?',
      correct: '20–30',
      distractors: ['10–20', 'Both intervals', 'Neither interval'],
      exp: 'By standard convention, the upper limit is excluded and the lower limit is included, so 20 goes into 20–30.',
      steps: [
        'Recall the standard rule for continuous class intervals:',
        'The lower limit is included in an interval while the upper limit is left for the next interval.',
        'Since 20 is the lower limit of 20–30, it is counted in 20–30.',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'دو متوازن سکے ایک ساتھ اچھالے جاتے ہیں۔ کم از کم ایک سر (چت) آنے کا احتمال کیا ہوگا؟',
      correct: '3/4',
      distractors: ['1/2', '1/4', '2/3'],
      exp: 'ممکنہ نتائج: {چت چت، چت پٹ، پٹ چت، پٹ پٹ}۔ تین نتائج میں کم از کم ایک چت ہے، پس احتمال = 3/4۔',
      steps: [
        'دو سکے اچھالنے کے تمام ممکنہ نتائج لکھیں:\n{چت چت، چت پٹ، پٹ چت، پٹ پٹ} (کل = 4)',
        'کم از کم ایک چت والے نتائج منتخب کریں:\n{چت چت، چت پٹ، پٹ چت} (موافق = 3)',
        'احتمال معلوم کریں:\n3/4',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'Two fair coins are tossed together. What is the probability of getting at least one head?',
      correct: '3/4',
      distractors: ['1/2', '1/4', '2/3'],
      exp: 'Possible outcomes: {HH, HT, TH, TT}. Three outcomes have at least one head, so probability = 3/4.',
      steps: [
        'List all possible outcomes of tossing two coins:\n{HH, HT, TH, TT} (Total = 4)',
        'Select outcomes with at least one head:\n{HH, HT, TH} (Favorable = 3)',
        'Find the probability:\n3/4',
      ],
    }
  );

  // 22 class marks
  for (let i = 1; i <= 22; i++) {
    const low = i * 5;
    const width = i % 3 === 0 ? 10 : i % 3 === 1 ? 20 : 12;
    const high = low + width;
    const mid = (low + high) / 2;
    push(
      {
        topic: 'تعدد اور جماعتی وقفے',
        q: `جماعتی وقفے ${low}–${high} کا جماعتی نشان (درمیانی قدر) معلوم کریں۔`,
        correct: `${mid}`,
        distractors: [`${width}`, `${mid + 5}`, `${low}`],
        exp: `جماعتی نشان = (${low} + ${high}) ÷ 2 = ${low + high} ÷ 2 = ${mid}۔`,
        steps: [
          `جماعتی نشان کا کلیہ لکھیں:\nجماعتی نشان = (زیریں حد + بالائی حد) ÷ 2`,
          `دونوں حدود جمع کریں:\n${low} + ${high} = ${low + high}`,
          `2 پر تقسیم کریں:\n${low + high} ÷ 2 = ${mid}`,
        ],
      },
      {
        topic: 'Frequency & Class Intervals',
        q: `Find the class mark (midpoint) of the class interval ${low}–${high}.`,
        correct: `${mid}`,
        distractors: [`${width}`, `${mid + 5}`, `${low}`],
        exp: `Class mark = (${low} + ${high}) ÷ 2 = ${low + high} ÷ 2 = ${mid}.`,
        steps: [
          `Write the class mark formula:\nClass mark = (Lower limit + Upper limit) ÷ 2`,
          `Add both limits:\n${low} + ${high} = ${low + high}`,
          `Divide by 2:\n${low + high} ÷ 2 = ${mid}`,
        ],
      }
    );
  }

  // 22 pie chart central angles
  const piePairs: Array<[number, number]> = [
    [36, 9], [72, 18], [120, 40], [180, 45], [360, 75], [90, 30], [45, 15], [60, 20], [72, 30], [180, 75], [120, 50],
    [36, 12], [72, 24], [120, 30], [180, 60], [360, 105], [90, 45], [45, 20], [60, 15], [72, 12], [180, 30], [120, 20],
  ];
  for (let i = 0; i < 22; i++) {
    const [tot, cleanPart] = piePairs[i];
    const angle = (cleanPart * 360) / tot;
    if (i < 11) {
      push(
        {
          topic: 'دائروی گراف اور ستونی گراف',
          q: `${tot} طلبہ کے سروے میں سے ${cleanPart} طلبہ نے ریاضی کو اپنا پسندیدہ مضمون قرار دیا۔ دائروی گراف میں ریاضی کا مرکزی زاویہ کتنا ہوگا؟`,
          correct: `${angle}°`,
          distractors: [`${cleanPart}°`, `${Math.min(350, angle + 15)}°`, `${Math.max(5, angle - 15)}°`],
          exp: `مرکزی زاویہ = (${cleanPart}/${tot}) × 360° = ${angle}°۔`,
          steps: [
            `مرکزی زاویے کا کلیہ لکھیں:\nمرکزی زاویہ = (مطلوبہ تعداد / کل تعداد) × 360°`,
            `قیمتیں درج کریں:\n(${cleanPart} / ${tot}) × 360°`,
            `ضرب اور تقسیم مکمل کریں:\n${cleanPart * 360} ÷ ${tot} = ${angle}°`,
          ],
        },
        {
          topic: 'Pie Charts & Bar Graphs',
          q: `In a survey of ${tot} students, ${cleanPart} chose Mathematics as their favorite subject. What will be the central angle for Mathematics in a pie chart?`,
          correct: `${angle}°`,
          distractors: [`${cleanPart}°`, `${Math.min(350, angle + 15)}°`, `${Math.max(5, angle - 15)}°`],
          exp: `Central angle = (${cleanPart}/${tot}) × 360° = ${angle}°.`,
          steps: [
            `Write the formula for central angle:\nCentral angle = (Favorite count / Total count) × 360°`,
            `Substitute the values:\n(${cleanPart} / ${tot}) × 360°`,
            `Multiply and divide:\n${cleanPart * 360} ÷ ${tot} = ${angle}°`,
          ],
        }
      );
    } else {
      push(
        {
          topic: 'دائروی گراف اور ستونی گراف',
          q: `${tot} اشیاء کو ظاہر کرنے والے دائروی گراف میں ایک حصے کا مرکزی زاویہ ${angle}° ہے۔ اس حصے میں کتنی اشیاء آتی ہیں؟`,
          correct: `${cleanPart}`,
          distractors: [`${cleanPart + 5}`, `${Math.max(1, cleanPart - 4)}`, `${angle}`],
          exp: `اشیاء کی تعداد = (${angle}°/360°) × ${tot} = ${cleanPart}۔`,
          steps: [
            `اشیاء کی تعداد معلوم کرنے کا کلیہ لکھیں:\nتعداد = (مرکزی زاویہ / 360°) × کل اشیاء`,
            `قیمتیں درج کریں:\n(${angle}° / 360°) × ${tot}`,
            `حساب مکمل کریں:\n${angle * tot} ÷ 360 = ${cleanPart}`,
          ],
        },
        {
          topic: 'Pie Charts & Bar Graphs',
          q: `In a pie chart representing ${tot} items, a sector has a central angle of ${angle}°. How many items does this sector represent?`,
          correct: `${cleanPart}`,
          distractors: [`${cleanPart + 5}`, `${Math.max(1, cleanPart - 4)}`, `${angle}`],
          exp: `Number of items = (${angle}°/360°) × ${tot} = ${cleanPart}.`,
          steps: [
            `Write the formula for the number of items:\nCount = (Central angle / 360°) × Total items`,
            `Substitute the values:\n(${angle}° / 360°) × ${tot}`,
            `Calculate:\n${angle * tot} ÷ 360 = ${cleanPart}`,
          ],
        }
      );
    }
  }

  // 22 slips and complementary probability
  for (let i = 1; i <= 22; i++) {
    const n = 10 + i * 2;
    if (i <= 11) {
      const divisor = i % 2 === 0 ? 3 : 4;
      const fav = Math.floor(n / divisor);
      const ans = formatFraction(fav, n);
      push(
        {
          topic: 'سادہ واقعے کا احتمال',
          q: `1 سے ${n} تک نمبروں والی پرچیاں ایک ڈبے میں ڈال کر ملا دی گئیں۔ بے ترتیبی سے ایک پرچی نکالنے پر ${divisor} کا مضاعف آنے کا احتمال کیا ہوگا؟`,
          correct: ans,
          distractors: [
            formatFraction(fav + 1, n),
            formatFraction(1, divisor),
            formatFraction(Math.max(1, fav - 1), n),
          ],
          exp: `1 سے ${n} کے درمیان ${divisor} کے ${fav} اضعاف ہیں۔ احتمال = ${fav}/${n} = ${ans}۔`,
          steps: [
            `کل ممکنہ نتائج = ${n}۔ اب 1 سے ${n} تک ${divisor} کے اضعاف کی تعداد معلوم کریں:\n${n} ÷ ${divisor} کا صحیح حصہ = ${fav} اضعاف`,
            `احتمال کا کلیہ لگائیں:\nاحتمال = ${fav} / ${n}`,
            `کسر کو مختصر ترین شکل میں لکھیں:\n${ans}`,
          ],
        },
        {
          topic: 'Probability of Simple Events',
          q: `Slips numbered from 1 to ${n} are placed in a box and mixed well. One slip is drawn at random. What is the probability of getting a multiple of ${divisor}?`,
          correct: ans,
          distractors: [
            formatFraction(fav + 1, n),
            formatFraction(1, divisor),
            formatFraction(Math.max(1, fav - 1), n),
          ],
          exp: `There are ${fav} multiples of ${divisor} from 1 to ${n}. Probability = ${fav}/${n} = ${ans}.`,
          steps: [
            `Total possible outcomes = ${n}. Find the number of multiples of ${divisor} from 1 to ${n}:\nInteger part of ${n} ÷ ${divisor} = ${fav} multiples`,
            `Apply the probability formula:\nProbability = ${fav} / ${n}`,
            `Simplify the fraction to lowest terms:\n${ans}`,
          ],
        }
      );
    } else {
      const num = i - 10;
      const den = num + (i % 5) + 3;
      const pYes = formatFraction(num, den);
      const pNot = formatFraction(den - num, den);
      push(
        {
          topic: 'مکمل واقعات',
          q: `اگر کل بارش ہونے کا احتمال ${pYes} ہو تو بارش نہ ہونے کا احتمال کیا ہوگا؟`,
          correct: pNot,
          distractors: [
            pYes,
            formatFraction(num + 1, den),
            formatFraction(1, den),
          ],
          exp: `بارش نہ ہونے کا احتمال = 1 − ${pYes} = ${pNot}۔`,
          steps: [
            `مکمل واقعات کا کلیہ لکھیں:\nبارش نہ ہونے کا احتمال = 1 − بارش ہونے کا احتمال`,
            `دی گئی کسر درج کر کے مشترک مخرج بنائیں:\n1 − ${pYes}`,
            `تفریق کر کے مختصر کریں:\n${pNot}`,
          ],
        },
        {
          topic: 'Complementary Events',
          q: `If the probability of rain tomorrow is ${pYes}, what is the probability that it will NOT rain?`,
          correct: pNot,
          distractors: [
            pYes,
            formatFraction(num + 1, den),
            formatFraction(1, den),
          ],
          exp: `Probability of no rain = 1 − ${pYes} = ${pNot}.`,
          steps: [
            `Write the complementary event formula:\nP(no rain) = 1 − P(rain)`,
            `Substitute the given fraction:\n1 − ${pYes}`,
            `Subtract and simplify:\n${pNot}`,
          ],
        }
      );
    }
  }

  // 22 even median and natural numbers mean
  for (let i = 1; i <= 22; i++) {
    if (i <= 11) {
      const start = i * 2;
      const d = [start, start + 3, start + 6, start + 10, start + 15, start + 20];
      const med = (d[2] + d[3]) / 2;
      push(
        {
          topic: 'اوسط، وسطانیہ اور عادہ',
          q: `مرتب مواد ${d.join('، ')} کا وسطانیہ معلوم کریں۔`,
          correct: `${med}`,
          distractors: [`${d[2]}`, `${d[3]}`, `${med + 2}`],
          exp: `6 قدروں میں وسطانیہ تیسری (${d[2]}) اور چوتھی (${d[3]}) قدر کا اوسط ہوتا ہے = (${d[2]} + ${d[3]})/2 = ${med}۔`,
          steps: [
            `دیے گئے 6 اعداد صعودی ترتیب میں ہیں (تعداد جفت ہے)۔ درمیانی دو قدریں تیسری (${d[2]}) اور چوتھی (${d[3]}) ہیں۔`,
            `دونوں درمیانی قدروں کو جمع کریں:\n${d[2]} + ${d[3]} = ${d[2] + d[3]}`,
            `2 پر تقسیم کر کے اوسط نکالیں:\n${d[2] + d[3]} ÷ 2 = ${med}`,
          ],
        },
        {
          topic: 'Mean, Median & Mode',
          q: `Find the median of the ordered data ${d.join(', ')}.`,
          correct: `${med}`,
          distractors: [`${d[2]}`, `${d[3]}`, `${med + 2}`],
          exp: `For 6 values, the median is the average of the 3rd (${d[2]}) and 4th (${d[3]}) values = (${d[2]} + ${d[3]})/2 = ${med}.`,
          steps: [
            `The 6 numbers are in ascending order (even count). The two middle values are the 3rd (${d[2]}) and 4th (${d[3]}).`,
            `Add the two middle values:\n${d[2]} + ${d[3]} = ${d[2] + d[3]}`,
            `Divide by 2 to get their average:\n${d[2] + d[3]} ÷ 2 = ${med}`,
          ],
        }
      );
    } else {
      const n = (i - 10) * 2 + 1;
      const mean = (n + 1) / 2;
      push(
        {
          topic: 'اوسط، وسطانیہ اور عادہ',
          q: `پہلے ${n} قدرتی اعداد (1 سے ${n} تک) کا حسابی اوسط کتنا ہوگا؟`,
          correct: `${mean}`,
          distractors: [`${mean + 1}`, `${n / 2}`, `${mean - 1}`],
          exp: `1 سے ${n} تک اعداد کا اوسط = (${n} + 1) ÷ 2 = ${mean}۔`,
          steps: [
            `مسلسل قدرتی اعداد 1 سے n تک کے اوسط کا کلیہ لکھیں:\nاوسط = (n + 1) ÷ 2`,
            `n = ${n} درج کریں:\n(${n} + 1) ÷ 2 = ${n + 1} ÷ 2`,
            `تقسیم مکمل کریں:\n${mean}`,
          ],
        },
        {
          topic: 'Mean, Median & Mode',
          q: `What is the arithmetic mean of the first ${n} natural numbers (from 1 to ${n})?`,
          correct: `${mean}`,
          distractors: [`${mean + 1}`, `${n / 2}`, `${mean - 1}`],
          exp: `Mean of numbers from 1 to ${n} = (${n} + 1) ÷ 2 = ${mean}.`,
          steps: [
            `Write the formula for the mean of consecutive natural numbers from 1 to n:\nMean = (n + 1) ÷ 2`,
            `Substitute n = ${n}:\n(${n} + 1) ÷ 2 = ${n + 1} ÷ 2`,
            `Divide:\n${mean}`,
          ],
        }
      );
    }
  }

  return list;
}

function createStatisticsHard(): MCQQuestion[] {
  const list: MCQQuestion[] = [];
  let idx = 1;
  const push = (ur: BilingualEntry, en: BilingualEntry) => {
    list.push(
      buildBilingualMCQ({
        id: `sta-h-${idx}`,
        chapterId: 'statistics',
        difficulty: 'hard',
        seed: idx * 17 + 3,
        ur: {
          topic: ur.topic,
          question: ur.q,
          correct: ur.correct,
          distractors: ur.distractors,
          explanation: ur.exp,
          steps: ur.steps,
        },
        en: {
          topic: en.topic,
          question: en.q,
          correct: en.correct,
          distractors: en.distractors,
          explanation: en.exp,
          steps: en.steps,
        },
      })
    );
    idx++;
  };

  // 12 hard conceptual questions
  push(
    {
      topic: 'اوسط، وسطانیہ اور عادہ',
      q: '5 مشاہدات کا اوسط 18 ہے۔ اگر ایک مشاہدہ نکال دیا جائے تو باقی 4 مشاہدات کا اوسط 16 ہو جاتا ہے۔ نکالا گیا مشاہدہ معلوم کریں۔',
      correct: '26',
      distractors: ['20', '24', '22'],
      exp: '5 کا مجموعہ = 5 × 18 = 90۔ 4 کا مجموعہ = 4 × 16 = 64۔ نکالا گیا مشاہدہ = 90 − 64 = 26۔',
      steps: [
        'پہلے تمام 5 مشاہدات کا کل مجموعہ معلوم کریں:\n5 × 18 = 90',
        'اب باقی بچنے والے 4 مشاہدات کا کل مجموعہ معلوم کریں:\n4 × 16 = 64',
        'دونوں مجموعوں کا فرق نکالا گیا مشاہدہ ہے:\n90 − 64 = 26',
      ],
    },
    {
      topic: 'Mean, Median & Mode',
      q: 'The mean of 5 observations is 18. If one observation is excluded, the mean of the remaining 4 observations becomes 16. Find the excluded observation.',
      correct: '26',
      distractors: ['20', '24', '22'],
      exp: 'Sum of 5 = 5 × 18 = 90. Sum of 4 = 4 × 16 = 64. Excluded observation = 90 − 64 = 26.',
      steps: [
        'First find the total sum of all 5 observations:\n5 × 18 = 90',
        'Now find the sum of the remaining 4 observations:\n4 × 16 = 64',
        'Subtract to find the excluded observation:\n90 − 64 = 26',
      ],
    }
  );

  push(
    {
      topic: 'اوسط، وسطانیہ اور عادہ',
      q: '10 اعداد کا اوسط 24 ہے۔ اگر ہر عدد کو 2 سے ضرب دے کر اس میں 3 جمع کر دیا جائے تو نیا اوسط کیا ہوگا؟',
      correct: '51',
      distractors: ['48', '27', '54'],
      exp: 'ہر عدد کو 2 سے ضرب اور 3 جمع کرنے سے اوسط بھی اسی طرح بدلتا ہے: 2(24) + 3 = 51۔',
      steps: [
        'پہلے 10 اعداد کا پرانا مجموعہ نکالیں:\n10 × 24 = 240',
        'ہر عدد کو 2 سے ضرب دینے پر نیا مجموعہ 2 × 240 = 480، اور ہر 10 عدد میں 3 جمع کرنے پر مجموعہ میں 10 × 3 = 30 کا اضافہ ہوگا:\nنیا کل مجموعہ = 480 + 30 = 510',
        'نیا اوسط معلوم کریں:\n510 ÷ 10 = 51',
      ],
    },
    {
      topic: 'Mean, Median & Mode',
      q: 'The mean of 10 numbers is 24. If each number is multiplied by 2 and then 3 is added to it, what will be the new mean?',
      correct: '51',
      distractors: ['48', '27', '54'],
      exp: 'Multiplying each number by 2 and adding 3 changes the mean in the same way: 2(24) + 3 = 51.',
      steps: [
        'First find the original sum of the 10 numbers:\n10 × 24 = 240',
        'Multiplying each number by 2 makes the sum 2 × 240 = 480, and adding 3 to each of the 10 numbers adds 10 × 3 = 30:\nNew total sum = 480 + 30 = 510',
        'Find the new mean:\n510 ÷ 10 = 51',
      ],
    }
  );

  push(
    {
      topic: 'اوسط، وسطانیہ اور عادہ',
      q: 'مشاہدات 6، 8، x، x + 2، 15، 21 صعودی ترتیب میں لکھے گئے ہیں اور ان کا وسطانیہ 11 ہے۔ x کی قیمت معلوم کریں۔',
      correct: '10',
      distractors: ['9', '11', '12'],
      exp: 'وسطانیہ تیسرے اور چوتھے رکن کا اوسط ہے: (x + x + 2)/2 = x + 1 = 11 ⇐ x = 10۔',
      steps: [
        'کل 6 مشاہدات ہیں، اس لیے وسطانیہ تیسری (x) اور چوتھی (x + 2) قدر کا اوسط ہوگا:\nوسطانیہ = [x + (x + 2)] ÷ 2 = 11',
        'بریکٹ حل کریں:\n(2x + 2) ÷ 2 = 11 ⇐ x + 1 = 11',
        'x کی قیمت نکالیں:\nx = 11 − 1 = 10',
      ],
    },
    {
      topic: 'Mean, Median & Mode',
      q: 'The observations 6, 8, x, x + 2, 15, 21 are written in ascending order and their median is 11. Find the value of x.',
      correct: '10',
      distractors: ['9', '11', '12'],
      exp: 'The median is the mean of the 3rd and 4th terms: (x + x + 2)/2 = x + 1 = 11 ⇒ x = 10.',
      steps: [
        'There are 6 observations, so the median is the mean of the 3rd (x) and 4th (x + 2) values:\nMedian = [x + (x + 2)] ÷ 2 = 11',
        'Simplify:\n(2x + 2) ÷ 2 = 11 ⇒ x + 1 = 11',
        'Solve for x:\nx = 11 − 1 = 10',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'دو متوازن پانسے ایک ساتھ پھینکے جاتے ہیں۔ دونوں پر آنے والے اعداد کا مجموعہ 7 ہونے کا احتمال کیا ہوگا؟',
      correct: '1/6',
      distractors: ['1/12', '7/36', '5/36'],
      exp: '36 میں سے موافق جوڑے: (1,6)، (2,5)، (3,4)، (4,3)، (5,2)، (6,1) = 6 جوڑے۔ احتمال = 6/36 = 1/6۔',
      steps: [
        'دو پانسے پھینکنے پر کل ممکنہ جوڑوں کی تعداد = 6 × 6 = 36',
        'جن جوڑوں کا مجموعہ 7 بنتا ہے انہیں لکھیں:\n(1,6)، (2,5)، (3,4)، (4,3)، (5,2)، (6,1) — کل 6 موافق جوڑے',
        'احتمال نکال کر مختصر کریں:\n6/36 = 1/6',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'Two fair dice are rolled together. What is the probability that the sum of the numbers on both dice is 7?',
      correct: '1/6',
      distractors: ['1/12', '7/36', '5/36'],
      exp: 'Favorable pairs out of 36: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 pairs. Probability = 6/36 = 1/6.',
      steps: [
        'Total possible pairs when rolling two dice = 6 × 6 = 36',
        'List the pairs whose sum is 7:\n(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — 6 favorable pairs',
        'Calculate and simplify the probability:\n6/36 = 1/6',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'دو متوازن پانسے ایک ساتھ اچھالے جاتے ہیں۔ دونوں پر یکساں عدد آنے کا احتمال کیا ہے؟',
      correct: '1/6',
      distractors: ['1/36', '1/12', '1/3'],
      exp: 'یکساں جوڑے (1,1)، (2,2)، (3,3)، (4,4)، (5,5)، (6,6) ہیں — 36 میں سے 6 نتائج = 1/6۔',
      steps: [
        'کل ممکنہ نتائج = 6 × 6 = 36',
        'دونوں پانسوں پر یکساں عدد آنے والے جوڑے:\n(1,1)، (2,2)، (3,3)، (4,4)، (5,5)، (6,6) — کل 6 جوڑے',
        'احتمال نکال کر مختصر کریں:\n6/36 = 1/6',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'Two fair dice are thrown simultaneously. What is the probability of getting the same number on both dice?',
      correct: '1/6',
      distractors: ['1/36', '1/12', '1/3'],
      exp: 'Matching pairs are (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) — 6 out of 36 outcomes = 1/6.',
      steps: [
        'Total possible outcomes = 6 × 6 = 36',
        'Pairs with the same number on both dice:\n(1,1), (2,2), (3,3), (4,4), (5,5), (6,6) — 6 pairs',
        'Calculate and simplify the probability:\n6/36 = 1/6',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: '52 پتوں کی گڈی میں سے ایک پتا بے ترتیبی سے نکالا جاتا ہے۔ اس کے نہ تو پان کا پتا اور نہ ہی بادشاہ ہونے کا احتمال کیا ہے؟',
      correct: '9/13',
      distractors: ['10/13', '3/4', '17/52'],
      exp: 'پان کے پتے = 13، بادشاہ = 4، پان کا بادشاہ دو بار شمار ہوا ⇐ 13 + 4 − 1 = 16 پتے۔ باقی = 52 − 16 = 36۔ احتمال = 36/52 = 9/13۔',
      steps: [
        'پان کے پتے (13) اور بادشاہ (4) کل ملا کر نکالیں (پان کا بادشاہ ایک ہی پتا ہے):\nخارج کیے جانے والے پتے = 13 + 4 − 1 = 16',
        'باقی موافق پتوں کی تعداد نکالیں:\n52 − 16 = 36 پتے',
        'احتمال نکال کر 4 پر مختصر کریں:\n36/52 = 9/13',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'A card is drawn at random from a deck of 52 cards. What is the probability that it is NEITHER a Heart NOR a King?',
      correct: '9/13',
      distractors: ['10/13', '3/4', '17/52'],
      exp: 'Hearts = 13, Kings = 4, King of Hearts counted twice ⇒ 13 + 4 − 1 = 16 cards. Remaining = 52 − 16 = 36. Probability = 36/52 = 9/13.',
      steps: [
        'Count cards that are Hearts (13) or Kings (4), subtracting the overlapping King of Hearts:\nExcluded cards = 13 + 4 − 1 = 16',
        'Find the remaining favorable cards:\n52 − 16 = 36 cards',
        'Find the probability and simplify by dividing by 4:\n36/52 = 9/13',
      ],
    }
  );

  push(
    {
      topic: 'دائروی گراف اور ستونی گراف',
      q: '720 طلبہ کے ایک اسکول کے دائروی گراف میں سائنس کا زاویہ 110° اور انگریزی کا زاویہ 80° ہے۔ سائنس لینے والے طلبہ انگریزی سے کتنے زیادہ ہیں؟',
      correct: '60',
      distractors: ['30', '80', '110'],
      exp: 'زاویے کا فرق = 110° − 80° = 30°۔ طلبہ = (30°/360°) × 720 = 60۔',
      steps: [
        'دونوں مضامین کے مرکزی زاویوں کا فرق معلوم کریں:\n110° − 80° = 30°',
        'اس 30° فرق کے مطابق طلبہ کی تعداد کا کلیہ لگائیں:\n(30° / 360°) × 720',
        '720 ÷ 360 = 2، پس:\n30 × 2 = 60 طلبہ',
      ],
    },
    {
      topic: 'Pie Charts & Bar Graphs',
      q: 'In a pie chart of a school with 720 students, Science has a central angle of 110° and English has 80°. How many more students take Science than English?',
      correct: '60',
      distractors: ['30', '80', '110'],
      exp: 'Difference in angles = 110° − 80° = 30°. Students = (30°/360°) × 720 = 60.',
      steps: [
        'Find the difference between the central angles:\n110° − 80° = 30°',
        'Convert this 30° difference to the number of students:\n(30° / 360°) × 720',
        'Since 720 ÷ 360 = 2:\n30 × 2 = 60 students',
      ],
    }
  );

  push(
    {
      topic: 'اوسط، وسطانیہ اور عادہ',
      q: '8 لڑکوں کا اوسط وزن 45 کلوگرام اور 12 لڑکیوں کا اوسط وزن 40 کلوگرام ہے۔ تمام 20 طلبہ کا مجموعی اوسط وزن معلوم کریں۔',
      correct: '42 کلوگرام',
      distractors: ['42.5 کلوگرام', '43 کلوگرام', '41 کلوگرام'],
      exp: 'کل وزن = (8 × 45) + (12 × 40) = 360 + 480 = 840 کلوگرام۔ مجموعی اوسط = 840 ÷ 20 = 42 کلوگرام۔',
      steps: [
        'لڑکوں اور لڑکیوں کا الگ الگ کل وزن نکالیں:\nلڑکوں کا کل وزن = 8 × 45 = 360 کلوگرام\nلڑکیوں کا کل وزن = 12 × 40 = 480 کلوگرام',
        'تمام 20 طلبہ کا کل وزن جمع کریں:\n360 + 480 = 840 کلوگرام',
        'کل طلبہ (20) پر تقسیم کر کے مجموعی اوسط نکالیں:\n840 ÷ 20 = 42 کلوگرام',
      ],
    },
    {
      topic: 'Mean, Median & Mode',
      q: 'The average weight of 8 boys is 45 kg and the average weight of 12 girls is 40 kg. Find the combined average weight of all 20 students.',
      correct: '42 kg',
      distractors: ['42.5 kg', '43 kg', '41 kg'],
      exp: 'Total weight = (8 × 45) + (12 × 40) = 360 + 480 = 840 kg. Combined mean = 840 ÷ 20 = 42 kg.',
      steps: [
        'Find the total weight of boys and girls separately:\nBoys total weight = 8 × 45 = 360 kg\nGirls total weight = 12 × 40 = 480 kg',
        'Add the weights of all 20 students:\n360 + 480 = 840 kg',
        'Divide by total students (20) to get the combined mean:\n840 ÷ 20 = 42 kg',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: '1 سے 30 تک صحیح اعداد میں سے ایک عدد بے ترتیبی سے چنا جاتا ہے۔ اس کے مفرد عدد ہونے کا احتمال کیا ہے؟',
      correct: '1/3',
      distractors: ['3/10', '11/30', '2/5'],
      exp: '1 سے 30 تک مفرد اعداد: 2، 3، 5، 7، 11، 13، 17، 19، 23، 29 (کل 10)۔ احتمال = 10/30 = 1/3۔',
      steps: [
        'کل ممکنہ نتائج = 30۔ اب 1 سے 30 تک تمام مفرد اعداد لکھیں:\n2، 3، 5، 7، 11، 13، 17، 19، 23، 29',
        'مفرد اعداد کی تعداد گنیں: کل 10 موافق نتائج ہیں۔',
        'احتمال نکال کر مختصر کریں:\n10/30 = 1/3',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'An integer is chosen at random from 1 to 30. What is the probability that it is a prime number?',
      correct: '1/3',
      distractors: ['3/10', '11/30', '2/5'],
      exp: 'Prime numbers from 1 to 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 (10 primes). Probability = 10/30 = 1/3.',
      steps: [
        'Total possible outcomes = 30. List all prime numbers from 1 to 30:\n2, 3, 5, 7, 11, 13, 17, 19, 23, 29',
        'Count the primes: there are 10 favorable outcomes.',
        'Calculate and simplify the probability:\n10/30 = 1/3',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'ایک تھیلے میں 4 سرخ، 5 سفید اور x نیلی گیندیں ہیں۔ اگر نیلی گیند نکالنے کا احتمال 1/4 ہو تو x کی قیمت معلوم کریں۔',
      correct: '3',
      distractors: ['4', '2', '5'],
      exp: 'x / (9 + x) = 1/4 ⇐ 4x = 9 + x ⇐ 3x = 9 ⇐ x = 3۔',
      steps: [
        'تھیلے میں کل گیندیں لکھیں:\n4 + 5 + x = 9 + x',
        'نیلی گیند کے احتمال کو 1/4 کے برابر رکھیں:\nx / (9 + x) = 1/4',
        'چلیپائی ضرب دے کر حل کریں:\n4x = 9 + x ⇐ 3x = 9 ⇐ x = 9 ÷ 3 = 3',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'A bag contains 4 red, 5 white, and x blue balls. If the probability of drawing a blue ball is 1/4, find the value of x.',
      correct: '3',
      distractors: ['4', '2', '5'],
      exp: 'x / (9 + x) = 1/4 ⇒ 4x = 9 + x ⇒ 3x = 9 ⇒ x = 3.',
      steps: [
        'Write the total number of balls in the bag:\n4 + 5 + x = 9 + x',
        'Set the probability of drawing a blue ball equal to 1/4:\nx / (9 + x) = 1/4',
        'Cross-multiply and solve for x:\n4x = 9 + x ⇒ 3x = 9 ⇒ x = 9 ÷ 3 = 3',
      ],
    }
  );

  push(
    {
      topic: 'تعدد اور جماعتی وقفے',
      q: 'اگر کسی تقسیم کے جماعتی نشانات 15، 25، 35، 45 ہوں تو جماعتی نشان 25 کا جماعتی وقفہ کیا ہوگا؟',
      correct: '20–30',
      distractors: ['15–35', '25–35', '20–25'],
      exp: 'جماعتی چوڑائی = 25 − 15 = 10۔ وقفہ = 25 ± (10/2) = 20–30۔',
      steps: [
        'پہلے دو مسلسل جماعتی نشانات کے فرق سے جماعتی چوڑائی (h) نکالیں:\nh = 25 − 15 = 10',
        'زیریں اور بالائی حد کے لیے نصف چوڑائی (10 ÷ 2 = 5) تفریق اور جمع کریں:\nزیریں حد = 25 − 5 = 20\nبالائی حد = 25 + 5 = 30',
        'لہٰذا مطلوبہ جماعتی وقفہ 20–30 ہے۔',
      ],
    },
    {
      topic: 'Frequency & Class Intervals',
      q: 'If the class marks of a distribution are 15, 25, 35, 45, what is the class interval corresponding to the class mark 25?',
      correct: '20–30',
      distractors: ['15–35', '25–35', '20–25'],
      exp: 'Class width = 25 − 15 = 10. Interval = 25 ± (10/2) = 20–30.',
      steps: [
        'Find the class width (h) from the difference between two consecutive class marks:\nh = 25 − 15 = 10',
        'Subtract and add half the width (10 ÷ 2 = 5) to find the lower and upper limits:\nLower limit = 25 − 5 = 20\nUpper limit = 25 + 5 = 30',
        'Therefore, the required class interval is 20–30.',
      ],
    }
  );

  push(
    {
      topic: 'سادہ واقعے کا احتمال',
      q: 'تین متوازن سکے ایک ساتھ اچھالے جاتے ہیں۔ بالکل دو مرتبہ سر (چت) آنے کا احتمال کیا ہوگا؟',
      correct: '3/8',
      distractors: ['1/2', '1/4', '1/8'],
      exp: 'کل 8 نتائج میں سے دو چت والے نتائج 3 ہیں، لہٰذا احتمال = 3/8۔',
      steps: [
        'تین سکے اچھالنے پر کل ممکنہ نتائج (2³ = 8) لکھیں:\n{چت چت چت، چت چت پٹ، چت پٹ چت، پٹ چت چت، چت پٹ پٹ، پٹ چت پٹ، پٹ پٹ چت، پٹ پٹ پٹ}',
        'بالکل دو چت والے نتائج منتخب کریں:\n{چت چت پٹ، چت پٹ چت، پٹ چت چت} — کل 3 نتائج',
        'احتمال نکالیں:\n3/8',
      ],
    },
    {
      topic: 'Probability of Simple Events',
      q: 'Three fair coins are tossed simultaneously. What is the probability of getting exactly two heads?',
      correct: '3/8',
      distractors: ['1/2', '1/4', '1/8'],
      exp: 'Out of 8 total outcomes, 3 outcomes have exactly two heads, so probability = 3/8.',
      steps: [
        'List all possible outcomes when tossing three coins (2³ = 8):\n{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}',
        'Select outcomes with exactly two heads:\n{HHT, HTH, THH} — 3 outcomes',
        'Find the probability:\n3/8',
      ],
    }
  );

  // 22 finding unknown observation x from mean
  for (let i = 1; i <= 22; i++) {
    const targetMean = 10 + i;
    const n1 = targetMean - 4;
    const n2 = targetMean - 1;
    const n3 = targetMean + 2;
    const n4 = targetMean + 6;
    const knownSum = n1 + n2 + n3 + n4;
    const totalSum = 5 * targetMean;
    const x = totalSum - knownSum;
    push(
      {
        topic: 'اوسط، وسطانیہ اور عادہ',
        q: `اعداد ${n1}، ${n2}، ${n3}، ${n4} اور x کا حسابی اوسط ${targetMean} ہے۔ x کی قیمت معلوم کریں۔`,
        correct: `${x}`,
        distractors: [`${x + 3}`, `${Math.max(1, x - 2)}`, `${targetMean}`],
        exp: `کل مجموعہ = 5 × ${targetMean} = ${totalSum}۔ پس x = ${totalSum} − ${knownSum} = ${x}۔`,
        steps: [
          `پہلے پانچوں اعداد کا مطلوبہ کل مجموعہ معلوم کریں:\nکل مجموعہ = تعداد × اوسط = 5 × ${targetMean} = ${totalSum}`,
          `معلوم چاروں اعداد کو جمع کریں:\n${n1} + ${n2} + ${n3} + ${n4} = ${knownSum}`,
          `کل مجموعے میں سے ${knownSum} تفریق کر کے x نکالیں:\nx = ${totalSum} − ${knownSum} = ${x}`,
        ],
      },
      {
        topic: 'Mean, Median & Mode',
        q: `The arithmetic mean of ${n1}, ${n2}, ${n3}, ${n4}, and x is ${targetMean}. Find the value of x.`,
        correct: `${x}`,
        distractors: [`${x + 3}`, `${Math.max(1, x - 2)}`, `${targetMean}`],
        exp: `Total sum = 5 × ${targetMean} = ${totalSum}. Thus x = ${totalSum} − ${knownSum} = ${x}.`,
        steps: [
          `First find the required total sum of all 5 numbers:\nTotal sum = Count × Mean = 5 × ${targetMean} = ${totalSum}`,
          `Add the four known numbers:\n${n1} + ${n2} + ${n3} + ${n4} = ${knownSum}`,
          `Subtract ${knownSum} from the total sum to find x:\nx = ${totalSum} − ${knownSum} = ${x}`,
        ],
      }
    );
  }

  // 22 finding newly added observation
  for (let i = 1; i <= 22; i++) {
    const count = 4 + (i % 5);
    const oldMean = 15 + i * 2;
    const delta = (i % 3) + 2;
    const newMean = oldMean + delta;
    const oldSum = count * oldMean;
    const newSum = (count + 1) * newMean;
    const addedVal = newSum - oldSum;
    push(
      {
        topic: 'اوسط، وسطانیہ اور عادہ',
        q: `${count} مشاہدات کا اوسط ${oldMean} ہے۔ جب ایک نیا مشاہدہ شامل کیا جاتا ہے تو اوسط ${newMean} ہو جاتا ہے۔ نیا شامل کردہ مشاہدہ معلوم کریں۔`,
        correct: `${addedVal}`,
        distractors: [`${oldMean + delta}`, `${addedVal - count}`, `${addedVal + 4}`],
        exp: `نیا مجموعہ = ${count + 1} × ${newMean} = ${newSum}۔ پرانا مجموعہ = ${count} × ${oldMean} = ${oldSum}۔ نیا مشاہدہ = ${addedVal}۔`,
        steps: [
          `پرانے ${count} مشاہدات کا مجموعہ نکالیں:\n${count} × ${oldMean} = ${oldSum}`,
          `نئے ${count + 1} مشاہدات کا مجموعہ نکالیں:\n${count + 1} × ${newMean} = ${newSum}`,
          `نئے مجموعے میں سے پرانا مجموعہ تفریق کریں:\nنیا مشاہدہ = ${newSum} − ${oldSum} = ${addedVal}`,
        ],
      },
      {
        topic: 'Mean, Median & Mode',
        q: `The mean of ${count} observations is ${oldMean}. When a new observation is included, the mean becomes ${newMean}. Find the newly included observation.`,
        correct: `${addedVal}`,
        distractors: [`${oldMean + delta}`, `${addedVal - count}`, `${addedVal + 4}`],
        exp: `New sum = ${count + 1} × ${newMean} = ${newSum}. Old sum = ${count} × ${oldMean} = ${oldSum}. New observation = ${addedVal}.`,
        steps: [
          `Find the sum of the original ${count} observations:\n${count} × ${oldMean} = ${oldSum}`,
          `Find the sum of the new ${count + 1} observations:\n${count + 1} × ${newMean} = ${newSum}`,
          `Subtract the old sum from the new sum:\nNew observation = ${newSum} − ${oldSum} = ${addedVal}`,
        ],
      }
    );
  }

  // 22 combined mean
  for (let i = 1; i <= 22; i++) {
    const k = (i % 4) + 2;
    const g1 = 10;
    const g2 = 20;
    const mean1 = 40 + i;
    const mean2 = mean1 + 3 * k;
    const sum1 = g1 * mean1;
    const sum2 = g2 * mean2;
    const totalSum = sum1 + sum2;
    const combined = totalSum / (g1 + g2);
    push(
      {
        topic: 'اوسط، وسطانیہ اور عادہ',
        q: `سیکشن الف کے ${g1} طلبہ کے نمبروں کا اوسط ${mean1} ہے اور سیکشن ب کے ${g2} طلبہ کے نمبروں کا اوسط ${mean2} ہے۔ تمام ${g1 + g2} طلبہ کا مجموعی اوسط کیا ہوگا؟`,
        correct: `${combined}`,
        distractors: [`${(mean1 + mean2) / 2}`, `${combined + 2}`, `${combined - 3}`],
        exp: `کل نمبر = (${g1} × ${mean1}) + (${g2} × ${mean2}) = ${totalSum}۔ مجموعی اوسط = ${totalSum} ÷ ${g1 + g2} = ${combined}۔`,
        steps: [
          `دونوں سیکشنز کے الگ الگ کل نمبر نکالیں:\nسیکشن الف = ${g1} × ${mean1} = ${sum1}\nسیکشن ب = ${g2} × ${mean2} = ${sum2}`,
          `تمام ${g1 + g2} طلبہ کے کل نمبر جمع کریں:\n${sum1} + ${sum2} = ${totalSum}`,
          `مجموعی اوسط نکالنے کے لیے کل طلبہ (${g1 + g2}) پر تقسیم کریں:\n${totalSum} ÷ ${g1 + g2} = ${combined}`,
        ],
      },
      {
        topic: 'Mean, Median & Mode',
        q: `The mean marks of ${g1} students in Section A is ${mean1} and the mean marks of ${g2} students in Section B is ${mean2}. What is the combined mean of all ${g1 + g2} students?`,
        correct: `${combined}`,
        distractors: [`${(mean1 + mean2) / 2}`, `${combined + 2}`, `${combined - 3}`],
        exp: `Total marks = (${g1} × ${mean1}) + (${g2} × ${mean2}) = ${totalSum}. Combined mean = ${totalSum} ÷ ${g1 + g2} = ${combined}.`,
        steps: [
          `Find the total marks for each section separately:\nSection A = ${g1} × ${mean1} = ${sum1}\nSection B = ${g2} × ${mean2} = ${sum2}`,
          `Add the total marks of all ${g1 + g2} students:\n${sum1} + ${sum2} = ${totalSum}`,
          `Divide by the total number of students (${g1 + g2}) to find the combined mean:\n${totalSum} ÷ ${g1 + g2} = ${combined}`,
        ],
      }
    );
  }

  // 22 unknown balls & two-dice probability
  for (let i = 1; i <= 22; i++) {
    if (i <= 11) {
      const denom = (i % 3) + 3;
      const x = i + 2;
      const known = (denom - 1) * x;
      const red = Math.floor(known / 2);
      const green = known - red;
      push(
        {
          topic: 'سادہ واقعے کا احتمال',
          q: `ایک تھیلے میں ${red} سرخ، ${green} سبز اور x نیلی گیندیں ہیں۔ اگر نیلی گیند نکلنے کا احتمال 1/${denom} ہو تو x معلوم کریں۔`,
          correct: `${x}`,
          distractors: [`${x + 2}`, `${Math.max(1, x - 1)}`, `${known}`],
          exp: `x / (${known} + x) = 1/${denom} ⇐ ${denom}x = ${known} + x ⇐ ${denom - 1}x = ${known} ⇐ x = ${x}۔`,
          steps: [
            `تھیلے میں کل گیندیں لکھیں: ${red} + ${green} + x = ${known} + x\nاحتمال کو 1/${denom} کے برابر رکھیں: x / (${known} + x) = 1/${denom}`,
            `چلیپائی ضرب دے کر x والے ارکان یکجا کریں:\n${denom}x = ${known} + x ⇐ ${denom}x − x = ${known} ⇐ ${denom - 1}x = ${known}`,
            `${denom - 1} پر تقسیم کریں:\nx = ${known} ÷ ${denom - 1} = ${x}`,
          ],
        },
        {
          topic: 'Probability of Simple Events',
          q: `A bag contains ${red} red, ${green} green, and x blue balls. If the probability of drawing a blue ball is 1/${denom}, find x.`,
          correct: `${x}`,
          distractors: [`${x + 2}`, `${Math.max(1, x - 1)}`, `${known}`],
          exp: `x / (${known} + x) = 1/${denom} ⇒ ${denom}x = ${known} + x ⇒ ${denom - 1}x = ${known} ⇒ x = ${x}.`,
          steps: [
            `Write the total balls: ${red} + ${green} + x = ${known} + x\nSet the probability equal to 1/${denom}: x / (${known} + x) = 1/${denom}`,
            `Cross-multiply and collect x terms:\n${denom}x = ${known} + x ⇒ ${denom}x − x = ${known} ⇒ ${denom - 1}x = ${known}`,
            `Divide by ${denom - 1}:\nx = ${known} ÷ ${denom - 1} = ${x}`,
          ],
        }
      );
    } else {
      const targets: Array<[number, number]> = [
        [2, 1], [3, 2], [4, 3], [5, 4], [6, 5], [8, 5], [9, 4], [10, 3], [11, 2], [12, 1], [7, 6],
      ];
      const [sumTarget, favCount] = targets[i - 12];
      const ans = formatFraction(favCount, 36);
      push(
        {
          topic: 'سادہ واقعے کا احتمال',
          q: `دو متوازن چھ پہلوؤں والے پانسے ایک ساتھ پھینکے جاتے ہیں۔ دونوں پر آنے والے اعداد کا مجموعہ ${sumTarget} ہونے کا احتمال کیا ہوگا؟`,
          correct: ans,
          distractors: [
            formatFraction(favCount + 1, 36),
            formatFraction(sumTarget, 36),
            formatFraction(1, 6 === favCount ? 12 : 6),
          ],
          exp: `36 ممکنہ جوڑوں میں سے ${favCount} جوڑے ${sumTarget} کا مجموعہ دیتے ہیں، پس احتمال = ${favCount}/36 = ${ans}۔`,
          steps: [
            `دو پانسے پھینکنے پر کل ممکنہ جوڑے = 6 × 6 = 36`,
            `ایسے ممکنہ جوڑے گنیں جن پر آنے والے اعداد کا مجموعہ ${sumTarget} ہو:\nموافق جوڑوں کی تعداد = ${favCount}`,
            `احتمال نکال کر مختصر کریں:\n${favCount}/36 = ${ans}`,
          ],
        },
        {
          topic: 'Probability of Simple Events',
          q: `Two fair six-sided dice are rolled together. What is the probability of getting a sum of ${sumTarget}?`,
          correct: ans,
          distractors: [
            formatFraction(favCount + 1, 36),
            formatFraction(sumTarget, 36),
            formatFraction(1, 6 === favCount ? 12 : 6),
          ],
          exp: `Out of 36 possible pairs, ${favCount} pairs give a sum of ${sumTarget}, so probability = ${favCount}/36 = ${ans}.`,
          steps: [
            `Total possible pairs when rolling two dice = 6 × 6 = 36`,
            `Count the pairs whose numbers add up to ${sumTarget}:\nNumber of favorable pairs = ${favCount}`,
            `Calculate and simplify the probability:\n${favCount}/36 = ${ans}`,
          ],
        }
      );
    }
  }

  return list;
}

export const STATISTICS_QUESTIONS: MCQQuestion[] = [
  ...createStatisticsEasy(),
  ...createStatisticsMedium(),
  ...createStatisticsHard(),
];
