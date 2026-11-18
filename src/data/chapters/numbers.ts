import { MCQQuestion } from '../../types/math';
import { buildBilingualMCQ, formatFraction } from '../mathUtils';

function createNumbersEasy(): MCQQuestion[] {
  const list: MCQQuestion[] = [];
  let idx = 1;
  const push = (
    topicUr: string,
    topicEn: string,
    qUr: string,
    qEn: string,
    correctUr: string,
    correctEn: string,
    distractorsUr: string[],
    distractorsEn: string[],
    expUr: string,
    expEn: string,
    stepsUr: string[],
    stepsEn: string[]
  ) => {
    list.push(
      buildBilingualMCQ({
        id: `num-e-${idx}`,
        chapterId: 'numbers',
        difficulty: 'easy',
        seed: idx * 7 + 3,
        ur: {
          topic: topicUr,
          question: qUr,
          correct: correctUr,
          distractors: distractorsUr,
          explanation: expUr,
          steps: stepsUr,
        },
        en: {
          topic: topicEn,
          question: qEn,
          correct: correctEn,
          distractors: distractorsEn,
          explanation: expEn,
          steps: stepsEn,
        },
      })
    );
    idx++;
  };

  // 15 basic conceptual questions
  push(
    'ناطق اعداد',
    'Rational Numbers',
    'ناطق اعداد کے لیے جمعی ذاتی عنصر کون سا عدد ہے؟',
    'Which number is the additive identity for rational numbers?',
    '0',
    '0',
    ['1', '-1', '1/2'],
    ['1', '-1', '1/2'],
    'کسی بھی ناطق عدد میں 0 جمع کرنے سے عدد تبدیل نہیں ہوتا: a + 0 = a۔',
    'Adding 0 to any rational number leaves it unchanged: a + 0 = a.',
    [
      'جمعی ذاتی عنصر کی تعریف سمجھیں:\nوہ عدد جسے کسی بھی عدد میں جمع کرنے پر اصل عدد تبدیل نہ ہو، جمعی ذاتی عنصر کہلاتا ہے۔',
      'ناطق عدد a کے ساتھ جانچ کریں:\na + 0 = a\nاور\n0 + a = a',
      'چونکہ 0 جمع کرنے سے عدد کی قدر پر کوئی اثر نہیں پڑتا، اس لیے ناطق اعداد کا جمعی ذاتی عنصر 0 ہے۔',
    ],
    [
      'Recall the definition of additive identity:\nA number that leaves any number unchanged when added to it is the additive identity.',
      'Check with any rational number a:\na + 0 = a and 0 + a = a',
      'Since adding 0 does not change the value, 0 is the additive identity for rational numbers.',
    ]
  );
  push(
    'ناطق اعداد',
    'Rational Numbers',
    'ناطق اعداد کے لیے ضربی ذاتی عنصر کون سا عدد ہے؟',
    'Which number is the multiplicative identity for rational numbers?',
    '1',
    '1',
    ['0', '-1', '10'],
    ['0', '-1', '10'],
    'کسی بھی ناطق عدد کو 1 سے ضرب دینے پر عدد وہی رہتا ہے: a × 1 = a۔',
    'Multiplying any rational number by 1 leaves it unchanged: a × 1 = a.',
    [
      'ضربی ذاتی عنصر کی تعریف سمجھیں:\nوہ عدد جس سے کسی بھی عدد کو ضرب دینے پر اصل عدد تبدیل نہ ہو، ضربی ذاتی عنصر کہلاتا ہے۔',
      'ناطق عدد a کے ساتھ جانچ کریں:\na × 1 = a\nاور\n1 × a = a',
      'چونکہ 1 سے ضرب دینے پر عدد وہی رہتا ہے، اس لیے ضربی ذاتی عنصر 1 ہے۔',
    ],
    [
      'Recall the definition of multiplicative identity:\nA number that leaves any number unchanged when multiplied by it is the multiplicative identity.',
      'Check with any rational number a:\na × 1 = a and 1 × a = a',
      'Since multiplying by 1 leaves the number unchanged, 1 is the multiplicative identity.',
    ]
  );
  push(
    'ناطق اعداد',
    'Rational Numbers',
    'کون سے ناطق عدد کا ضربی معکوس (الٹ) موجود نہیں ہوتا؟',
    'Which rational number does not have a multiplicative inverse (reciprocal)?',
    '0',
    '0',
    ['1', '-1', '1/2'],
    ['1', '-1', '1/2'],
    'صفر سے تقسیم کرنا ممکن نہیں، اس لیے 0 کا کوئی ضربی معکوس نہیں ہوتا۔',
    'Division by zero is undefined, so 0 has no multiplicative inverse.',
    [
      'ضربی معکوس کا اصول لکھیں:\nکسی عدد a کا ضربی معکوس 1/a ہوتا ہے، بشرطیکہ a × (1/a) = 1 ہو۔',
      'اگر a = 0 رکھیں تو ضربی معکوس 1/0 بنے گا۔',
      'ریاضی میں 0 سے تقسیم غیر معین (ناممکن) ہے اور کسی بھی عدد کو 0 سے ضرب دے کر 1 حاصل نہیں کیا جا سکتا۔ اس لیے 0 کا ضربی معکوس موجود نہیں ہوتا۔',
    ],
    [
      'Recall the rule for multiplicative inverse:\nThe reciprocal of a is 1/a, such that a × (1/a) = 1.',
      'If a = 0, its reciprocal would be 1/0.',
      'Division by 0 is undefined and no number multiplied by 0 equals 1. Thus, 0 has no multiplicative inverse.',
    ]
  );
  push(
    'ناطق اعداد',
    'Rational Numbers',
    'عدد -7/9 کا جمعی معکوس کیا ہے؟',
    'What is the additive inverse of -7/9?',
    '7/9',
    '7/9',
    ['-9/7', '9/7', '-7/9'],
    ['-9/7', '9/7', '-7/9'],
    '-a/b کا جمعی معکوس +a/b ہوتا ہے کیونکہ (-7/9) + (7/9) = 0۔',
    'The additive inverse of -a/b is +a/b because (-7/9) + (7/9) = 0.',
    [
      'جمعی معکوس کا اصول لکھیں:\nکسی عدد کا جمعی معکوس وہ عدد ہوتا ہے جسے اصل عدد میں جمع کرنے پر حاصلِ جمع 0 آئے۔',
      'دیے گئے عدد کی علامت تبدیل کریں:\n-7/9 کی منفی علامت کو مثبت کرنے پر 7/9 حاصل ہوتا ہے۔',
      'تصدیق کریں:\n(-7/9) + (7/9) = (-7 + 7)/9 = 0/9 = 0',
    ],
    [
      'Recall the rule for additive inverse:\nIt is the number that gives 0 when added to the original number.',
      'Change the sign of -7/9:\nChanging negative to positive gives 7/9.',
      'Check:\n(-7/9) + (7/9) = (-7 + 7)/9 = 0/9 = 0',
    ]
  );
  push(
    'ناطق اعداد',
    'Rational Numbers',
    'عدد -5/8 کا ضربی معکوس کیا ہے؟',
    'What is the multiplicative inverse (reciprocal) of -5/8?',
    '-8/5',
    '-8/5',
    ['8/5', '5/8', '-5/8'],
    ['8/5', '5/8', '-5/8'],
    '-5/8 کا ضربی معکوس -8/5 ہے کیونکہ (-5/8) × (-8/5) = 1۔',
    'The reciprocal of -5/8 is -8/5 because (-5/8) × (-8/5) = 1.',
    [
      'ضربی معکوس کا اصول لکھیں:\nکسر p/q کا ضربی معکوس q/p ہوتا ہے (علامت وہی رہتی ہے اور شمار کنندہ و مخرج الٹ جاتے ہیں)۔',
      'کسر -5/8 کو الٹ دیں:\nشمار کنندہ 5 اور مخرج 8 کی جگہ بدلنے سے -8/5 حاصل ہوتا ہے۔',
      'تصدیق کریں:\n(-5/8) × (-8/5) = 40/40 = 1',
    ],
    [
      'Recall the rule for reciprocal:\nSwap the numerator and denominator while keeping the same sign: p/q becomes q/p.',
      'Invert -5/8:\nSwapping 5 and 8 gives -8/5.',
      'Check:\n(-5/8) × (-8/5) = 40/40 = 1',
    ]
  );
  push(
    'ناطق اعداد',
    'Rational Numbers',
    'مساوات (2/3) + (4/5) = (4/5) + (2/3) میں جمع کی کون سی خاصیت ظاہر ہوتی ہے؟',
    'Which property of addition is shown by (2/3) + (4/5) = (4/5) + (2/3)?',
    'خاصیتِ مبادلہ بلحاظ جمع',
    'Commutative property of addition',
    ['خاصیتِ تلازم', 'خاصیتِ توزیع', 'خاصیتِ بندش'],
    ['Associative property', 'Distributive property', 'Closure property'],
    'جمع میں دو اعداد کی ترتیب بدلنے (a + b = b + a) کو خاصیتِ مبادلہ بلحاظ جمع کہتے ہیں۔',
    'Changing the order of two numbers in addition (a + b = b + a) is the commutative property of addition.',
    [
      'دی گئی مساوات کا مشاہدہ کریں:\n(2/3) + (4/5) = (4/5) + (2/3)',
      'یہ مساوات کلیہ a + b = b + a کی صورت میں ہے جہاں دو ناطق اعداد کی ترتیب بدلی گئی ہے۔',
      'اعداد کی ترتیب بدلنے سے حاصلِ جمع برابر رہے تو اسے خاصیتِ مبادلہ بلحاظ جمع کہتے ہیں۔',
    ],
    [
      'Observe the given equation:\n(2/3) + (4/5) = (4/5) + (2/3)',
      'It follows the form a + b = b + a, where the order of the two addends is swapped.',
      'When swapping the order leaves the sum unchanged, it is the commutative property of addition.',
    ]
  );
  push(
    'مربع اور جذر المربع',
    'Squares and Square Roots',
    'درج ذیل میں سے کون سا ہندسہ کسی کامل مربع کے اکائی کے مقام پر کبھی نہیں آ سکتا؟',
    'Which of the following digits can never appear in the units place of a perfect square?',
    '7',
    '7',
    ['4', '5', '6'],
    ['4', '5', '6'],
    'کامل مربع ہمیشہ 0، 1، 4، 5، 6 یا 9 پر ختم ہوتا ہے؛ یہ کبھی 2، 3، 7 یا 8 پر ختم نہیں ہوتا۔',
    'A perfect square always ends in 0, 1, 4, 5, 6, or 9; it never ends in 2, 3, 7, or 8.',
    [
      '0 سے 9 تک تمام ہندسوں کے مربع نکال کر ان کے اکائی کے ہندسے دیکھیں:\n0²=0, 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81',
      'حاصل ہونے والے اکائی کے ہندسے صرف 0، 1، 4، 5، 6 اور 9 ہیں۔',
      'دیے گئے آپشنز میں سے 7 کسی بھی کامل مربع کے اکائی کے مقام پر نہیں آتا۔',
    ],
    [
      'Check the units digits of squares of 0 to 9:\n0²=0, 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81',
      'The possible units digits of a perfect square are only 0, 1, 4, 5, 6, and 9.',
      'Among the given options, 7 can never be the units digit of a perfect square.',
    ]
  );
  push(
    'مربع اور جذر المربع',
    'Squares and Square Roots',
    '9² اور 10² کے درمیان کتنے غیر مربع قدرتی اعداد موجود ہیں؟',
    'How many non-square natural numbers lie between 9² and 10²?',
    '18',
    '18',
    ['19', '17', '20'],
    ['19', '17', '20'],
    'n² اور (n+1)² کے درمیان 2n غیر مربع قدرتی اعداد ہوتے ہیں۔ یہاں 2 × 9 = 18۔',
    'Between n² and (n + 1)², there are 2n non-square natural numbers. Here 2 × 9 = 18.',
    [
      'کلیہ لکھیں:\nدو مسلسل مربع اعداد n² اور (n + 1)² کے درمیان غیر مربع قدرتی اعداد کی تعداد = 2n',
      'یہاں n = 9 ہے (9² = 81 اور 10² = 100)۔',
      'کلیے میں قیمت درج کریں:\n2 × 9 = 18',
    ],
    [
      'Write the formula:\nNumber of non-square natural numbers between n² and (n + 1)² = 2n',
      'Here n = 9 (since 9² = 81 and 10² = 100).',
      'Substitute n = 9:\n2 × 9 = 18',
    ]
  );
  push(
    'مربع اور جذر المربع',
    'Squares and Square Roots',
    'پہلے 6 طاق قدرتی اعداد: 1 + 3 + 5 + 7 + 9 + 11 کا مجموعہ کیا ہے؟',
    'What is the sum of the first 6 odd natural numbers: 1 + 3 + 5 + 7 + 9 + 11?',
    '36',
    '36',
    ['30', '42', '25'],
    ['30', '42', '25'],
    'پہلے n طاق قدرتی اعداد کا مجموعہ n² ہوتا ہے۔ یہاں 6² = 36۔',
    'The sum of the first n odd natural numbers is n². Here 6² = 36.',
    [
      'کلیہ لکھیں:\nپہلے n طاق قدرتی اعداد کا مجموعہ = n²',
      'دیے گئے اعداد کی تعداد گنیں: کل 6 طاق اعداد ہیں (n = 6)۔',
      'حساب کریں:\n6² = 6 × 6 = 36\n(تصدیق: 1 + 3 + 5 + 7 + 9 + 11 = 36)',
    ],
    [
      'Write the formula:\nSum of the first n odd natural numbers = n²',
      'Count the odd numbers given: there are 6 numbers (n = 6).',
      'Calculate:\n6² = 6 × 6 = 36\n(Check: 1 + 3 + 5 + 7 + 9 + 11 = 36)',
    ]
  );
  push(
    'مکعب اور جذر المکعب',
    'Cubes and Cube Roots',
    'عدد 14 کے مکعب کا اکائی کا ہندسہ کیا ہوگا؟',
    'What will be the units digit of the cube of 14?',
    '4',
    '4',
    ['6', '2', '8'],
    ['6', '2', '8'],
    'چونکہ 14 کا آخری ہندسہ 4 ہے اور 4³ = 64، اس لیے 14³ کا اکائی ہندسہ 4 ہوگا۔',
    'Since the units digit of 14 is 4 and 4³ = 64, the units digit of 14³ is 4.',
    [
      'دیے گئے عدد 14 کا اکائی کا ہندسہ دیکھیں، جو 4 ہے۔',
      'اس اکائی ہندسے کا مکعب نکالیں:\n4³ = 4 × 4 × 4 = 64',
      '64 کا اکائی کا ہندسہ 4 ہے، اس لیے 14³ کے اکائی کا ہندسہ بھی 4 ہوگا۔',
    ],
    [
      'Look at the units digit of 14, which is 4.',
      'Find the cube of this units digit:\n4³ = 4 × 4 × 4 = 64',
      'The units digit of 64 is 4, so the units digit of 14³ is also 4.',
    ]
  );
  push(
    'مکعب اور جذر المکعب',
    'Cubes and Cube Roots',
    'درج ذیل میں سے کون سا عدد ایک کامل مکعب ہے؟',
    'Which of the following numbers is a perfect cube?',
    '216',
    '216',
    ['128', '250', '400'],
    ['128', '250', '400'],
    '216 = 6 × 6 × 6 = 6³، اس لیے 216 ایک کامل مکعب ہے۔',
    '216 = 6 × 6 × 6 = 6³, so 216 is a perfect cube.',
    [
      'مکعب کی تعریف لکھیں:\nجو عدد کسی صحیح عدد کو تین بار آپس میں ضرب دینے سے حاصل ہو، کامل مکعب کہلاتا ہے۔',
      'عدد 216 کے مفرد اجزائے ضربی بنائیں:\n216 = 2 × 2 × 2 × 3 × 3 × 3 = (2 × 3)³',
      'حساب کریں:\n6 × 6 × 6 = 216\nجبکہ 128، 250 اور 400 کسی صحیح عدد کا مکعب نہیں ہیں۔',
    ],
    [
      'Recall the definition of a perfect cube:\nA number obtained by multiplying an integer by itself three times.',
      'Prime factorize 216:\n216 = 2 × 2 × 2 × 3 × 3 × 3 = (2 × 3)³',
      'Calculate:\n6 × 6 × 6 = 216\n128, 250, and 400 are not cubes of any integer.',
    ]
  );
  push(
    'قوت نما اور طاقتیں',
    'Exponents and Powers',
    '(7⁰ + 5⁰) × 2 کی قیمت کیا ہے؟',
    'What is the value of (7⁰ + 5⁰) × 2?',
    '4',
    '4',
    ['2', '24', '0'],
    ['2', '24', '0'],
    'کسی بھی غیر صفر عدد کی قوت 0 ہو تو قیمت 1 ہوتی ہے۔ چنانچہ (1 + 1) × 2 = 4۔',
    'Any non-zero number raised to the power 0 equals 1. So (1 + 1) × 2 = 4.',
    [
      'صفر قوت کا قانون لکھیں:\na⁰ = 1 (جہاں a ≠ 0)',
      'قانون کے مطابق 7⁰ = 1 اور 5⁰ = 1 درج کریں:\n(1 + 1) × 2',
      'بریکٹ حل کریں اور ضرب دیں:\n2 × 2 = 4',
    ],
    [
      'Apply the zero exponent law:\na⁰ = 1 (for a ≠ 0)',
      'Substitute 7⁰ = 1 and 5⁰ = 1:\n(1 + 1) × 2',
      'Simplify and multiply:\n2 × 2 = 4',
    ]
  );
  push(
    'قوت نما اور طاقتیں',
    'Exponents and Powers',
    'کسر 1/3⁴ کو منفی قوت نما کی صورت میں کیسے لکھا جائے گا؟',
    'How is 1/3⁴ written with a negative exponent?',
    '3⁻⁴',
    '3⁻⁴',
    ['-3⁴', '4⁻³', '3⁴'],
    ['-3⁴', '4⁻³', '3⁴'],
    'منفی قوت نما کے قانون کے مطابق 1/aⁿ = a⁻ⁿ، اس لیے 1/3⁴ = 3⁻⁴۔',
    'By the negative exponent law 1/aⁿ = a⁻ⁿ, 1/3⁴ = 3⁻⁴.',
    [
      'منفی قوت نما کا قانون لکھیں:\n1 / aⁿ = a⁻ⁿ',
      'یہاں اساس a = 3 اور قوت نما n = 4 ہے۔',
      'کلیے میں رکھنے پر:\n1 / 3⁴ = 3⁻⁴',
    ],
    [
      'Use the negative exponent law:\n1 / aⁿ = a⁻ⁿ',
      'Here base a = 3 and exponent n = 4.',
      'Therefore:\n1 / 3⁴ = 3⁻⁴',
    ]
  );
  push(
    'فیصد',
    'Percentages',
    'نسبت 3 : 4 کو فیصد میں ظاہر کریں۔',
    'Express the ratio 3 : 4 as a percentage.',
    '75%',
    '75%',
    ['70%', '60%', '80%'],
    ['70%', '60%', '80%'],
    '(3/4) × 100% = 75%۔',
    '(3/4) × 100% = 75%.',
    [
      'دی گئی نسبت کو کسر کی صورت میں لکھیں:\n3 : 4 = 3/4',
      'فیصد میں بدلنے کے لیے 100% سے ضرب دیں:\n(3/4) × 100%',
      'مختصر کریں:\n100 ÷ 4 = 25\n3 × 25 = 75%',
    ],
    [
      'Write the ratio as a fraction:\n3 : 4 = 3/4',
      'Multiply by 100% to convert to percentage:\n(3/4) × 100%',
      'Simplify:\n100 ÷ 4 = 25, and 3 × 25 = 75%',
    ]
  );
  push(
    'فیصد',
    'Percentages',
    'اگر 30 طلبہ کی جماعت میں 40% لڑکیاں ہوں تو جماعت میں کتنی لڑکیاں ہیں؟',
    'If 40% of 30 students in a class are girls, how many girls are there?',
    '12',
    '12',
    ['10', '15', '18'],
    ['10', '15', '18'],
    '30 کا 40% = (40/100) × 30 = 12 لڑکیاں۔',
    '40% of 30 = (40/100) × 30 = 12 girls.',
    [
      'معلوم معلومات لکھیں:\nکل طلبہ = 30، لڑکیوں کا فیصد = 40%',
      'فیصد کا کلیہ لگائیں:\nلڑکیوں کی تعداد = (40 / 100) × 30',
      'حساب کریں:\n(40 × 30) ÷ 100 = 1200 ÷ 100 = 12',
    ],
    [
      'Write the given information:\nTotal students = 30, percentage of girls = 40%',
      'Apply the percentage formula:\nNumber of girls = (40 / 100) × 30',
      'Calculate:\n(40 × 30) ÷ 100 = 1200 ÷ 100 = 12',
    ]
  );

  // 15 squares of numbers (11..25)
  for (let n = 11; n <= 25; n++) {
    const sq = n * n;
    push(
      'مربع اور جذر المربع',
      'Squares and Square Roots',
      `عدد ${n} کا مربع کیا ہے؟`,
      `What is the square of ${n}?`,
      `${sq}`,
      `${sq}`,
      [`${sq + n}`, `${sq - 10}`, `${n * 2}`],
      [`${sq + n}`, `${sq - 10}`, `${n * 2}`],
      `${n}² = ${n} × ${n} = ${sq}۔`,
      `${n}² = ${n} × ${n} = ${sq}.`,
      [
        `مربع کا کلیہ لکھیں:\nکسی عدد n کا مربع n² = n × n ہوتا ہے۔`,
        `عدد ${n} درج کریں:\n${n}² = ${n} × ${n}`,
        `ضرب کا عمل مکمل کریں:\n${n} × ${n} = ${sq}`,
      ],
      [
        `Write the definition of a square:\nThe square of n is n² = n × n.`,
        `Substitute n = ${n}:\n${n}² = ${n} × ${n}`,
        `Multiply:\n${n} × ${n} = ${sq}`,
      ]
    );
  }

  // 15 square roots
  const sqRoots = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 25];
  for (const r of sqRoots) {
    const sq = r * r;
    push(
      'مربع اور جذر المربع',
      'Squares and Square Roots',
      `√${sq} کی قیمت معلوم کریں۔`,
      `Find the value of √${sq}.`,
      `${r}`,
      `${r}`,
      [`${r + 2}`, `${r - 1}`, `${Math.floor(sq / 2)}`],
      [`${r + 2}`, `${r - 1}`, `${Math.floor(sq / 2)}`],
      `چونکہ ${r} × ${r} = ${sq}، اس لیے √${sq} = ${r}۔`,
      `Since ${r} × ${r} = ${sq}, √${sq} = ${r}.`,
      [
        `دیا گیا سوال لکھیں:\n√${sq}`,
        `ایسا مثبت عدد تلاش کریں جسے خود سے ضرب دینے پر ${sq} حاصل ہو:\n${r} × ${r} = ${sq}`,
        `لہٰذا جذر المربع لینے پر:\n√${sq} = √(${r}²) = ${r}`,
      ],
      [
        `Write the given radical:\n√${sq}`,
        `Find the positive number whose square is ${sq}:\n${r} × ${r} = ${sq}`,
        `Take the square root:\n√${sq} = √(${r}²) = ${r}`,
      ]
    );
  }

  // 15 cubes & cube roots
  const cubeBases = [2, 3, 4, 5, 6, 7, 8, 9, 10, -2, -3, -4, -5, 11, 12];
  for (let i = 0; i < cubeBases.length; i++) {
    const b = cubeBases[i];
    const c = b * b * b;
    if (i < 8) {
      push(
        'مکعب اور جذر المکعب',
        'Cubes and Cube Roots',
        `عدد ${b} کا مکعب کیا ہے؟`,
        `What is the cube of ${b}?`,
        `${c}`,
        `${c}`,
        [`${b * b}`, `${c + b}`, `${b * 3}`],
        [`${b * b}`, `${c + b}`, `${b * 3}`],
        `${b}³ = ${b} × ${b} × ${b} = ${c}۔`,
        `${b}³ = ${b} × ${b} × ${b} = ${c}.`,
        [
          `مکعب کا کلیہ لکھیں:\nکسی عدد کا مکعب معلوم کرنے کے لیے اسے تین مرتبہ آپس میں ضرب دیا جاتا ہے۔`,
          `عدد ${b} لکھیں:\n${b}³ = ${b} × ${b} × ${b}`,
          `پہلے دو اعداد ضرب دیں: ${b} × ${b} = ${b * b}\nاب دوبارہ ${b} سے ضرب دیں: ${b * b} × ${b} = ${c}`,
        ],
        [
          `Write the cube rule:\nTo cube a number, multiply it by itself three times.`,
          `Substitute ${b}:\n${b}³ = ${b} × ${b} × ${b}`,
          `First multiply ${b} × ${b} = ${b * b}, then ${b * b} × ${b} = ${c}`,
        ]
      );
    } else {
      push(
        'مکعب اور جذر المکعب',
        'Cubes and Cube Roots',
        `جذر المکعب معلوم کریں: ∛(${c})۔`,
        `Find the cube root: ∛(${c}).`,
        `${b}`,
        `${b}`,
        [`${-b}`, `${b + (b > 0 ? 2 : -2)}`, `${Math.abs(b) * 3}`],
        [`${-b}`, `${b + (b > 0 ? 2 : -2)}`, `${Math.abs(b) * 3}`],
        `چونکہ (${b})³ = ${c}، اس لیے ∛(${c}) = ${b}۔`,
        `Since (${b})³ = ${c}, ∛(${c}) = ${b}.`,
        [
          `دیا گیا سوال لکھیں:\n∛(${c})`,
          `ایسا عدد تلاش کریں جس کا مکعب ${c} ہو:\n(${b}) × (${b}) × (${b}) = ${c}`,
          `لہٰذا جذر المکعب لینے پر:\n∛(${c}) = ∛(${b}³) = ${b}`,
        ],
        [
          `Write the given cube root:\n∛(${c})`,
          `Find the number whose cube equals ${c}:\n(${b}) × (${b}) × (${b}) = ${c}`,
          `Take the cube root:\n∛(${c}) = ∛(${b}³) = ${b}`,
        ]
      );
    }
  }

  // 15 simple powers
  const expCases: Array<[number, number]> = [
    [2, 4], [2, 5], [2, 6], [3, 3], [3, 4],
    [4, 3], [5, 3], [6, 2], [10, 4], [-2, 4],
    [-3, 3], [-1, 9], [-1, 12], [2, 3], [7, 2],
  ];
  for (const [base, pow] of expCases) {
    const val = Math.pow(base, pow);
    const expanded = Array(pow).fill(`(${base})`).join(' × ');
    push(
      'قوت نما اور طاقتیں',
      'Exponents and Powers',
      `قیمت معلوم کریں: (${base})^${pow}۔`,
      `Evaluate: (${base})^${pow}.`,
      `${val}`,
      `${val}`,
      [`${base * pow}`, `${-val === val ? val + 2 : -val}`, `${val + Math.abs(base)}`],
      [`${base * pow}`, `${-val === val ? val + 2 : -val}`, `${val + Math.abs(base)}`],
      `${base} کو آپس میں ${pow} مرتبہ ضرب دینے سے ${val} حاصل ہوتا ہے۔`,
      `Multiplying ${base} by itself ${pow} times equals ${val}.`,
      [
        `دیا گیا جملہ لکھیں:\n(${base})^${pow}`,
        `اساس ${base} کو قوت نما ${pow} کے مطابق پھیلا کر لکھیں:\n${expanded}`,
        `تمام اعداد کو آپس میں ضرب دینے سے حاصل ہوتا ہے:\n${val}`,
      ],
      [
        `Write the given expression:\n(${base})^${pow}`,
        `Expand the base ${base} repeated ${pow} times:\n${expanded}`,
        `Multiply the factors:\n${val}`,
      ]
    );
  }

  // 15 simple percentages
  const pctCases: Array<[number, number]> = [
    [10, 90], [20, 150], [25, 80], [50, 64], [15, 200],
    [30, 120], [5, 400], [12, 100], [75, 40], [60, 50],
    [35, 200], [45, 200], [80, 150], [20, 350], [10, 480],
  ];
  for (const [p, total] of pctCases) {
    const ans = (p * total) / 100;
    push(
      'فیصد',
      'Percentages',
      `${total} کا ${p}% کتنا ہوگا؟`,
      `What is ${p}% of ${total}?`,
      `${ans}`,
      `${ans}`,
      [`${ans + 5}`, `${ans * 2}`, `${Math.max(1, ans - 4)}`],
      [`${ans + 5}`, `${ans * 2}`, `${Math.max(1, ans - 4)}`],
      `${total} کا ${p}% = (${p}/100) × ${total} = ${ans}۔`,
      `${p}% of ${total} = (${p}/100) × ${total} = ${ans}.`,
      [
        `فیصد نکالنے کا کلیہ لکھیں:\nکسی رقم کا P% = (P / 100) × کل رقم`,
        `دی گئی قیمتیں درج کریں:\n(${p} / 100) × ${total}`,
        `ضرب اور تقسیم کا عمل مکمل کریں:\n${p * total} ÷ 100 = ${ans}`,
      ],
      [
        `Write the percentage formula:\nP% of Total = (P / 100) × Total`,
        `Substitute the values:\n(${p} / 100) × ${total}`,
        `Multiply and divide by 100:\n${p * total} ÷ 100 = ${ans}`,
      ]
    );
  }

  // 10 rational addition with same denominator
  const ratCases: Array<[number, number, number]> = [
    [1, 3, 4], [2, 5, 7], [3, 4, 8], [-2, 5, 9], [3, 7, 11],
    [5, 2, 9], [-1, 4, 6], [7, 3, 10], [2, 9, 13], [4, 5, 11],
  ];
  for (const [a, b, d] of ratCases) {
    const ans = formatFraction(a + b, d);
    push(
      'ناطق اعداد',
      'Rational Numbers',
      `مجموعہ معلوم کریں: (${a}/${d}) + (${b}/${d})۔`,
      `Find the sum: (${a}/${d}) + (${b}/${d}).`,
      ans,
      ans,
      [
        formatFraction(a - b, d),
        formatFraction(a + b + 1, d),
        formatFraction(a + b, d * 2),
      ],
      [
        formatFraction(a - b, d),
        formatFraction(a + b + 1, d),
        formatFraction(a + b, d * 2),
      ],
      `چونکہ دونوں کسروں کا مخرج ${d} یکساں ہے، شمار کنندگان کو جمع کریں: (${a} + ${b})/${d} = ${ans}۔`,
      `Since the denominators are both ${d}, add the numerators: (${a} + ${b})/${d} = ${ans}.`,
      [
        `دی گئی کسریں لکھیں:\n(${a}/${d}) + (${b}/${d})`,
        `چونکہ دونوں کسروں کا مخرج (${d}) ایک جیسا ہے، شمار کنندگان کو جمع کریں:\n(${a} + ${b}) / ${d} = ${a + b}/${d}`,
        `اگر کسر مزید مختصر ہوتی ہو تو سادہ ترین شکل میں لکھیں:\n${ans}`,
      ],
      [
        `Write the given fractions:\n(${a}/${d}) + (${b}/${d})`,
        `Since both denominators are ${d}, add the numerators:\n(${a} + ${b}) / ${d} = ${a + b}/${d}`,
        `Reduce to simplest form if possible:\n${ans}`,
      ]
    );
  }

  return list;
}

function createNumbersMedium(): MCQQuestion[] {
  const list: MCQQuestion[] = [];
  let idx = 1;
  const push = (
    topicUr: string,
    topicEn: string,
    qUr: string,
    qEn: string,
    correctUr: string,
    correctEn: string,
    distractorsUr: string[],
    distractorsEn: string[],
    expUr: string,
    expEn: string,
    stepsUr: string[],
    stepsEn: string[]
  ) => {
    list.push(
      buildBilingualMCQ({
        id: `num-m-${idx}`,
        chapterId: 'numbers',
        difficulty: 'medium',
        seed: idx * 11 + 5,
        ur: {
          topic: topicUr,
          question: qUr,
          correct: correctUr,
          distractors: distractorsUr,
          explanation: expUr,
          steps: stepsUr,
        },
        en: {
          topic: topicEn,
          question: qEn,
          correct: correctEn,
          distractors: distractorsEn,
          explanation: expEn,
          steps: stepsEn,
        },
      })
    );
    idx++;
  };

  // 12 conceptual medium questions
  push(
    'مربع اور جذر المربع',
    'Squares and Square Roots',
    'درج ذیل میں سے کون سا مجموعہ فیثاغورث کا ثلاثیہ ہے؟',
    'Which of the following is a Pythagorean triplet?',
    '(6, 8, 10)',
    '(6, 8, 10)',
    ['(5, 7, 9)', '(4, 6, 8)', '(7, 9, 11)'],
    ['(5, 7, 9)', '(4, 6, 8)', '(7, 9, 11)'],
    '6² + 8² = 36 + 64 = 100 = 10²، اس لیے (6, 8, 10) فیثاغورث کا ثلاثیہ ہے۔',
    '6² + 8² = 36 + 64 = 100 = 10², so (6, 8, 10) is a Pythagorean triplet.',
    [
      'فیثاغورث کے ثلاثیے کا قانون لکھیں:\na² + b² = c² (جہاں c سب سے بڑا عدد ہو)',
      'مجموعہ (6, 8, 10) کے مربع نکال کر جمع کریں:\n6² + 8² = 36 + 64 = 100',
      'سب سے بڑے عدد کا مربع نکالیں:\n10² = 100\nچونکہ دونوں برابر ہیں، اس لیے (6, 8, 10) درست ثلاثیہ ہے۔',
    ],
    [
      'Write the condition for a Pythagorean triplet:\na² + b² = c² (where c is the largest number)',
      'Sum the squares of the two smaller numbers in (6, 8, 10):\n6² + 8² = 36 + 64 = 100',
      'Compare with the square of the largest number:\n10² = 100\nSince they match, (6, 8, 10) is a Pythagorean triplet.',
    ]
  );
  push(
    'مربع اور جذر المربع',
    'Squares and Square Roots',
    'وہ فیثاغورث کا ثلاثیہ معلوم کریں جس کا سب سے چھوٹا عدد 8 ہو۔',
    'Find the Pythagorean triplet whose smallest number is 8.',
    '(8, 15, 17)',
    '(8, 15, 17)',
    ['(8, 10, 12)', '(8, 12, 15)', '(8, 14, 16)'],
    ['(8, 10, 12)', '(8, 12, 15)', '(8, 14, 16)'],
    'کلیہ 2m, m² − 1, m² + 1 میں 2m = 8 رکھنے سے m = 4 ملتا ہے، پس m² − 1 = 15 اور m² + 1 = 17۔',
    'Using (2m, m² − 1, m² + 1) with 2m = 8 gives m = 4, so m² − 1 = 15 and m² + 1 = 17.',
    [
      'فیثاغورث کے ثلاثیے کا کلیہ لکھیں:\n(2m, m² − 1, m² + 1)',
      'سب سے چھوٹے رکن کو 8 کے برابر رکھیں:\n2m = 8 ⇐ m = 8 ÷ 2 = 4',
      'باقی دونوں ارکان نکالیں:\nm² − 1 = 4² − 1 = 16 − 1 = 15\nm² + 1 = 4² + 1 = 16 + 1 = 17\nپس ثلاثیہ (8, 15, 17) ہے۔',
    ],
    [
      'Write the general Pythagorean triplet form:\n(2m, m² − 1, m² + 1)',
      'Set the smallest member 2m = 8:\n2m = 8 => m = 4',
      'Find the other two members:\nm² − 1 = 4² − 1 = 15\nm² + 1 = 4² + 1 = 17\nSo the triplet is (8, 15, 17).',
    ]
  );
  push(
    'مکعب اور جذر المکعب',
    'Cubes and Cube Roots',
    'وہ سب سے چھوٹا ہارڈی رامانوجن عدد کون سا ہے جو دو مختلف طریقوں سے دو مکعبوں کے مجموعے کے طور پر لکھا جا سکے؟',
    'What is the smallest Hardy-Ramanujan number expressible as the sum of two cubes in two different ways?',
    '1729',
    '1729',
    ['1728', '1331', '4104'],
    ['1728', '1331', '4104'],
    '1729 = 1³ + 12³ = 9³ + 10³ سب سے چھوٹا ہارڈی رامانوجن عدد ہے۔',
    '1729 = 1³ + 12³ = 9³ + 10³ is the smallest Hardy-Ramanujan number.',
    [
      'پہلے طریقے سے دو مکعبوں کا مجموعہ جانچیں:\n1³ + 12³ = 1 + 1728 = 1729',
      'دوسرے طریقے سے دو مکعبوں کا مجموعہ جانچیں:\n9³ + 10³ = 729 + 1000 = 1729',
      'چونکہ 1729 دو الگ طریقوں سے دو مکعبوں کا مجموعہ بننے والا سب سے چھوٹا عدد ہے، یہی ہارڈی رامانوجن عدد ہے۔',
    ],
    [
      'Check the first pair of cubes:\n1³ + 12³ = 1 + 1728 = 1729',
      'Check the second pair of cubes:\n9³ + 10³ = 729 + 1000 = 1729',
      '1729 is the smallest number expressible as the sum of two cubes in two different ways.',
    ]
  );
  push(
    'ناطق اعداد',
    'Rational Numbers',
    'دو ناطق اعداد کا مجموعہ -2 ہے۔ اگر ان میں سے ایک عدد -14/5 ہو تو دوسرا عدد کیا ہوگا؟',
    'The sum of two rational numbers is -2. If one of them is -14/5, what is the other number?',
    '4/5',
    '4/5',
    ['-24/5', '-4/5', '24/5'],
    ['-24/5', '-4/5', '24/5'],
    'دوسرا عدد = -2 − (-14/5) = -10/5 + 14/5 = 4/5۔',
    'Other number = -2 − (-14/5) = -10/5 + 14/5 = 4/5.',
    [
      'فرض کریں دوسرا عدد x ہے:\nx + (-14/5) = -2',
      'مساوات سے x الگ کریں:\nx = -2 − (-14/5) = -2 + 14/5',
      'مشترک مخرج 5 لے کر حل کریں:\n(-10 + 14)/5 = 4/5',
    ],
    [
      'Let the other number be x:\nx + (-14/5) = -2',
      'Isolate x:\nx = -2 − (-14/5) = -2 + 14/5',
      'Use common denominator 5:\n(-10 + 14)/5 = 4/5',
    ]
  );
  push(
    'ناطق اعداد',
    'Rational Numbers',
    'کسر -3/4 کو کس عدد سے ضرب دی جائے کہ حاصلِ ضرب 9/16 آئے؟',
    'By what number should -3/4 be multiplied to get 9/16?',
    '-3/4',
    '-3/4',
    ['3/4', '-4/3', '4/3'],
    ['3/4', '-4/3', '4/3'],
    'مطلوبہ عدد = (9/16) ÷ (-3/4) = (9/16) × (-4/3) = -3/4۔',
    'Required number = (9/16) ÷ (-3/4) = (9/16) × (-4/3) = -3/4.',
    [
      'فرض کریں مطلوبہ عدد x ہے:\n(-3/4) × x = 9/16',
      'x معلوم کرنے کے لیے تقسیم کو ضربی معکوس میں بدلیں:\nx = (9/16) ÷ (-3/4) = (9/16) × (-4/3)',
      'شمار کنندہ اور مخرج مختصر کریں:\n(9 ÷ 3) / (16 ÷ 4) × (-1) = -3/4',
    ],
    [
      'Let the required number be x:\n(-3/4) × x = 9/16',
      'Divide by -3/4 by multiplying by its reciprocal:\nx = (9/16) ÷ (-3/4) = (9/16) × (-4/3)',
      'Simplify:\n(9 ÷ 3) / (16 ÷ 4) × (-1) = -3/4',
    ]
  );
  push(
    'قوت نما اور طاقتیں',
    'Exponents and Powers',
    'قیمت معلوم کریں: (2⁻¹ + 3⁻¹)⁻¹۔',
    'Evaluate: (2⁻¹ + 3⁻¹)⁻¹.',
    '6/5',
    '6/5',
    ['5/6', '1/5', '5'],
    ['5/6', '1/5', '5'],
    '2⁻¹ + 3⁻¹ = 1/2 + 1/3 = 5/6۔ معکوس لینے پر (5/6)⁻¹ = 6/5۔',
    '2⁻¹ + 3⁻¹ = 1/2 + 1/3 = 5/6. Taking the reciprocal gives (5/6)⁻¹ = 6/5.',
    [
      'منفی قوت نما کو مثبت کسر میں بدلیں (a⁻¹ = 1/a):\n2⁻¹ = 1/2 اور 3⁻¹ = 1/3',
      'بریکٹ کے اندر جمع کریں:\n1/2 + 1/3 = (3 + 2)/6 = 5/6',
      'اب پورے جواب کا معکوس لیں:\n(5/6)⁻¹ = 6/5',
    ],
    [
      'Rewrite negative exponents as fractions (a⁻¹ = 1/a):\n2⁻¹ = 1/2 and 3⁻¹ = 1/3',
      'Add inside the bracket:\n1/2 + 1/3 = (3 + 2)/6 = 5/6',
      'Take the reciprocal:\n(5/6)⁻¹ = 6/5',
    ]
  );
  push(
    'قوت نما اور طاقتیں',
    'Exponents and Powers',
    'قیمت معلوم کریں: (3⁻¹ × 4⁻¹) ÷ 6⁻¹۔',
    'Evaluate: (3⁻¹ × 4⁻¹) ÷ 6⁻¹.',
    '1/2',
    '1/2',
    ['2', '1/72', '12'],
    ['2', '1/72', '12'],
    '(1/3 × 1/4) ÷ (1/6) = (1/12) × 6 = 6/12 = 1/2۔',
    '(1/3 × 1/4) ÷ (1/6) = (1/12) × 6 = 6/12 = 1/2.',
    [
      'منفی قوت نماؤں کو کسروں میں بدلیں:\n(1/3 × 1/4) ÷ (1/6)',
      'بریکٹ کے اندر ضرب دیں:\n1/12 ÷ 1/6',
      'تقسیم کو معکوس ضرب میں بدل کر مختصر کریں:\n(1/12) × 6 = 6/12 = 1/2',
    ],
    [
      'Convert negative exponents into fractions:\n(1/3 × 1/4) ÷ (1/6)',
      'Multiply inside the bracket:\n1/12 ÷ 1/6',
      'Multiply by the reciprocal and simplify:\n(1/12) × 6 = 6/12 = 1/2',
    ]
  );
  push(
    'تناسب راست و معکوس',
    'Direct and Inverse Proportion',
    'دو مقداریں x اور y تناسبِ راست میں ہیں۔ جب x = 5 ہو تو y = 20 ہے۔ جب x = 9 ہو تو y کیا ہوگا؟',
    'If x and y are in direct proportion and y = 20 when x = 5, what is y when x = 9?',
    '36',
    '36',
    ['45', '24', '32'],
    ['45', '24', '32'],
    'چونکہ نسبت y/x = 20/5 = 4 مستقل ہے، لہٰذا x = 9 پر y = 4 × 9 = 36۔',
    'Since y/x = 20/5 = 4 is constant, when x = 9, y = 4 × 9 = 36.',
    [
      'تناسبِ راست کا کلیہ لکھیں:\ny₁ / x₁ = y₂ / x₂',
      'دی گئی قیمتیں درج کریں:\n20 / 5 = y / 9 ⇐ 4 = y / 9',
      'دونوں طرف 9 سے ضرب دیں:\ny = 4 × 9 = 36',
    ],
    [
      'Write the direct proportion equation:\ny₁ / x₁ = y₂ / x₂',
      'Substitute the given values:\n20 / 5 = y / 9 => 4 = y / 9',
      'Multiply both sides by 9:\ny = 4 × 9 = 36',
    ]
  );
  push(
    'تناسب راست و معکوس',
    'Direct and Inverse Proportion',
    'دو مقداریں x اور y تناسبِ معکوس میں ہیں۔ جب x = 12 ہو تو y = 5 ہے۔ جب x = 15 ہو تو y کیا ہوگا؟',
    'If x and y vary inversely and y = 5 when x = 12, find y when x = 15.',
    '4',
    '4',
    ['6', '3', '10'],
    ['6', '3', '10'],
    'چونکہ حاصلِ ضرب x × y = 12 × 5 = 60 مستقل ہے، لہٰذا y = 60 ÷ 15 = 4۔',
    'Since x × y = 12 × 5 = 60 is constant, y = 60 ÷ 15 = 4.',
    [
      'تناسبِ معکوس کا کلیہ لکھیں:\nx₁ × y₁ = x₂ × y₂',
      'دی گئی قیمتیں درج کریں:\n12 × 5 = 15 × y',
      'حساب مکمل کریں:\n60 = 15y ⇐ y = 60 ÷ 15 = 4',
    ],
    [
      'Write the inverse proportion equation:\nx₁ × y₁ = x₂ × y₂',
      'Substitute the given values:\n12 × 5 = 15 × y',
      'Solve for y:\n60 = 15y => y = 60 ÷ 15 = 4',
    ]
  );
  push(
    'فیصد اور سود',
    'Percentages and Interest',
    'ایک چیز کی درج شدہ قیمت 840 روپے ہے اور اسے 714 روپے میں فروخت کیا گیا۔ رعایت کا فیصد معلوم کریں۔',
    'An item marked at Rs. 840 is sold for Rs. 714. Find the discount percentage.',
    '15%',
    '15%',
    ['12%', '18%', '20%'],
    ['12%', '18%', '20%'],
    'رعایت = 840 − 714 = 126 روپے۔ رعایت فیصد = (126/840) × 100 = 15%۔',
    'Discount = 840 − 714 = Rs. 126. Discount % = (126/840) × 100 = 15%.',
    [
      'پہلے رعایت کی رقم معلوم کریں:\nرعایت = درج شدہ قیمت − قیمتِ فروخت = 840 − 714 = 126 روپے',
      'رعایت فیصد کا کلیہ لگائیں:\nرعایت فیصد = (رعایت / درج شدہ قیمت) × 100',
      'قیمتیں درج کر کے مختصر کریں:\n(126 / 840) × 100 = 0.15 × 100 = 15%',
    ],
    [
      'First find the discount amount:\nDiscount = Marked Price − Selling Price = 840 − 714 = Rs. 126',
      'Apply the discount percentage formula:\nDiscount % = (Discount / Marked Price) × 100',
      'Substitute and simplify:\n(126 / 840) × 100 = 0.15 × 100 = 15%',
    ]
  );
  push(
    'مربع اور جذر المربع',
    'Squares and Square Roots',
    '√(1.44) کی قیمت کیا ہے؟',
    'What is the value of √(1.44)?',
    '1.2',
    '1.2',
    ['0.12', '12', '1.4'],
    ['0.12', '12', '1.4'],
    '1.2 × 1.2 = 1.44، اس لیے √(1.44) = 1.2۔',
    '1.2 × 1.2 = 1.44, so √(1.44) = 1.2.',
    [
      'اعشاریہ کو کسر میں تبدیل کریں:\n1.44 = 144 / 100',
      'شمار کنندہ اور مخرج دونوں کا جذر المربع لیں:\n√144 = 12 اور √100 = 10',
      'دوبارہ اعشاریہ میں لکھیں:\n12 / 10 = 1.2',
    ],
    [
      'Convert the decimal to a fraction:\n1.44 = 144 / 100',
      'Take the square root of numerator and denominator:\n√144 = 12 and √100 = 10',
      'Convert back to a decimal:\n12 / 10 = 1.2',
    ]
  );
  push(
    'مکعب اور جذر المکعب',
    'Cubes and Cube Roots',
    '0.027 کا جذر المکعب معلوم کریں۔',
    'Find the cube root of 0.027.',
    '0.3',
    '0.3',
    ['0.03', '3', '0.9'],
    ['0.03', '3', '0.9'],
    '0.3 × 0.3 × 0.3 = 0.027، اس لیے ∛(0.027) = 0.3۔',
    '0.3 × 0.3 × 0.3 = 0.027, so ∛(0.027) = 0.3.',
    [
      'اعشاریہ کو کسر کی صورت میں لکھیں:\n0.027 = 27 / 1000',
      'شمار کنندہ اور مخرج کا جذر المکعب لیں:\n∛27 = 3 اور ∛1000 = 10',
      'کسر کو اعشاریہ میں بدلیں:\n3 / 10 = 0.3',
    ],
    [
      'Write the decimal as a fraction:\n0.027 = 27 / 1000',
      'Take the cube root of numerator and denominator:\n∛27 = 3 and ∛1000 = 10',
      'Convert back to a decimal:\n3 / 10 = 0.3',
    ]
  );

  // 18 operations on rational numbers with different denominators
  const fracOps: Array<[number, number, number, number]> = [
    [1, 2, 1, 3], [2, 3, 1, 4], [3, 5, 1, 2], [5, 6, -1, 3], [3, 4, -2, 5],
    [4, 7, 1, 2], [5, 8, -1, 4], [2, 9, 1, 3], [-3, 5, 1, 4], [7, 10, -2, 5],
    [1, 6, 3, 4], [5, 12, 1, 3], [-2, 3, 5, 6], [3, 8, 1, 6], [4, 5, -1, 2],
    [7, 9, -1, 3], [1, 4, 2, 7], [5, 9, 1, 6],
  ];
  for (let i = 0; i < fracOps.length; i++) {
    const [a, b, c, d] = fracOps[i];
    if (i < 10) {
      const commonD = b * d;
      const numSum = a * d + c * b;
      const ans = formatFraction(numSum, commonD);
      push(
        'ناطق اعداد',
        'Rational Numbers',
        `مختصر کریں: (${a}/${b}) + (${c}/${d})۔`,
        `Simplify: (${a}/${b}) + (${c}/${d}).`,
        ans,
        ans,
        [
          formatFraction(a + c, b + d),
          formatFraction(a * d - c * b, b * d),
          formatFraction(a * c, b * d),
        ],
        [
          formatFraction(a + c, b + d),
          formatFraction(a * d - c * b, b * d),
          formatFraction(a * c, b * d),
        ],
        `مشترک مخرج ${commonD} ہے: (${a * d} + ${c * b})/${commonD} = ${ans}۔`,
        `Using common denominator ${commonD}: (${a * d} + ${c * b})/${commonD} = ${ans}.`,
        [
          `مخارج ${b} اور ${d} کو برابر کرنے کے لیے مشترک مخرج ${commonD} بنائیں:\n(${a} × ${d})/${commonD} + (${c} × ${b})/${commonD}`,
          `شمار کنندگان کو جمع کریں:\n(${a * d} + ${c * b}) / ${commonD} = ${numSum}/${commonD}`,
          `کسر کو مختصر ترین شکل میں لکھیں:\n${ans}`,
        ],
        [
          `Convert to a common denominator ${commonD}:\n(${a} × ${d})/${commonD} + (${c} × ${b})/${commonD}`,
          `Add the numerators:\n(${a * d} + ${c * b}) / ${commonD} = ${numSum}/${commonD}`,
          `Reduce to lowest terms:\n${ans}`,
        ]
      );
    } else {
      const ans = formatFraction(a * d, b * c);
      push(
        'ناطق اعداد',
        'Rational Numbers',
        `حاصلِ تقسیم معلوم کریں: (${a}/${b}) ÷ (${c}/${d})۔`,
        `Divide: (${a}/${b}) ÷ (${c}/${d}).`,
        ans,
        ans,
        [
          formatFraction(a * c, b * d),
          formatFraction(b * c, a * d),
          formatFraction(a * d + b * c, b * d),
        ],
        [
          formatFraction(a * c, b * d),
          formatFraction(b * c, a * d),
          formatFraction(a * d + b * c, b * d),
        ],
        `${c}/${d} سے تقسیم کرنے کے لیے اس کے ضربی معکوس ${d}/${c} سے ضرب دیں: (${a}/${b}) × (${d}/${c}) = ${ans}۔`,
        `To divide by ${c}/${d}, multiply by its reciprocal ${d}/${c}: (${a}/${b}) × (${d}/${c}) = ${ans}.`,
        [
          `تقسیم کو ضرب میں بدلنے کے لیے دوسری کسر (${c}/${d}) کا ضربی معکوس (${d}/${c}) لیں:\n(${a}/${b}) × (${d}/${c})`,
          `شمار کنندگان اور مخارج کو آپس میں ضرب دیں:\n(${a} × ${d}) / (${b} × ${c}) = ${a * d}/${b * c}`,
          `کسر کو مختصر کریں:\n${ans}`,
        ],
        [
          `Multiply by the reciprocal of ${c}/${d}, which is ${d}/${c}:\n(${a}/${b}) × (${d}/${c})`,
          `Multiply numerators and denominators:\n(${a} × ${d}) / (${b} × ${c}) = ${a * d}/${b * c}`,
          `Simplify the fraction:\n${ans}`,
        ]
      );
    }
  }

  // 18 exponent laws
  const expLawCases: Array<[number, number, number, string]> = [
    [2, -3, 5, 'mul'], [3, -2, 4, 'mul'], [5, 4, -2, 'mul'], [2, 6, 2, 'div'],
    [3, 5, 2, 'div'], [4, 3, 5, 'div'], [7, -2, 3, 'mul'], [10, 5, 2, 'div'],
    [2, -4, -1, 'pow'], [3, -2, -2, 'pow'], [5, 3, 5, 'div'], [6, 4, 2, 'div'],
    [2, 5, -3, 'mul'], [3, 4, -1, 'mul'], [4, 2, 4, 'div'], [2, -2, -3, 'pow'],
    [3, -1, -3, 'pow'], [5, -1, -2, 'pow'],
  ];
  for (const [b, p1, p2, mode] of expLawCases) {
    if (mode === 'mul') {
      const p = p1 + p2;
      const val = p >= 0 ? `${Math.pow(b, p)}` : `1/${Math.pow(b, -p)}`;
      push(
        'قوت نما اور طاقتیں',
        'Exponents and Powers',
        `مختصر کر کے قیمت معلوم کریں: ${b}^(${p1}) × ${b}^(${p2})۔`,
        `Simplify and evaluate: ${b}^(${p1}) × ${b}^(${p2}).`,
        val,
        val,
        [
          `${Math.pow(b, Math.abs(p1 * p2))}`,
          `1/${Math.pow(b, Math.abs(p) + 1)}`,
          `${b * (p === 0 ? 1 : p)}`,
        ],
        [
          `${Math.pow(b, Math.abs(p1 * p2))}`,
          `1/${Math.pow(b, Math.abs(p) + 1)}`,
          `${b * (p === 0 ? 1 : p)}`,
        ],
        `قانون aᵐ × aⁿ = aᵐ⁺ⁿ کے مطابق: ${b}^(${p1} + ${p2}) = ${b}^${p} = ${val}۔`,
        `Using aᵐ × aⁿ = aᵐ⁺ⁿ: ${b}^(${p1} + ${p2}) = ${b}^${p} = ${val}.`,
        [
          `ضرب کا قانونِ قوت نما لکھیں (اساس ایک جیسی ہو تو قوتیں جمع ہوتی ہیں):\naᵐ × aⁿ = aᵐ⁺ⁿ`,
          `قوتیں جمع کریں:\n${b}^(${p1} + (${p2})) = ${b}^${p}`,
          `قیمت نکالیں:\n${b}^${p} = ${val}`,
        ],
        [
          `Use the product law of exponents (same base => add powers):\naᵐ × aⁿ = aᵐ⁺ⁿ`,
          `Add the exponents:\n${b}^(${p1} + (${p2})) = ${b}^${p}`,
          `Evaluate:\n${b}^${p} = ${val}`,
        ]
      );
    } else if (mode === 'div') {
      const p = p1 - p2;
      const val = p >= 0 ? `${Math.pow(b, p)}` : `1/${Math.pow(b, -p)}`;
      push(
        'قوت نما اور طاقتیں',
        'Exponents and Powers',
        `مختصر کر کے قیمت معلوم کریں: ${b}^(${p1}) ÷ ${b}^(${p2})۔`,
        `Simplify and evaluate: ${b}^(${p1}) ÷ ${b}^(${p2}).`,
        val,
        val,
        [
          `${Math.pow(b, p1 + p2)}`,
          p >= 0 ? `1/${Math.pow(b, p)}` : `${Math.pow(b, -p)}`,
          `${Math.pow(b, Math.abs(p) + 1)}`,
        ],
        [
          `${Math.pow(b, p1 + p2)}`,
          p >= 0 ? `1/${Math.pow(b, p)}` : `${Math.pow(b, -p)}`,
          `${Math.pow(b, Math.abs(p) + 1)}`,
        ],
        `قانون aᵐ ÷ aⁿ = aᵐ⁻ⁿ کے مطابق: ${b}^(${p1} − ${p2}) = ${b}^${p} = ${val}۔`,
        `Using aᵐ ÷ aⁿ = aᵐ⁻ⁿ: ${b}^(${p1} − ${p2}) = ${b}^${p} = ${val}.`,
        [
          `تقسیم کا قانونِ قوت نما لکھیں (اساس ایک جیسی ہو تو قوتیں تفریق ہوتی ہیں):\naᵐ ÷ aⁿ = aᵐ⁻ⁿ`,
          `قوتیں تفریق کریں:\n${b}^(${p1} − ${p2}) = ${b}^${p}`,
          `${p < 0 ? `منفی قوت کو مثبت بنانے کے لیے 1/${b}^${-p} لکھیں اور قیمت نکالیں` : 'قیمت نکالیں'}:\n${val}`,
        ],
        [
          `Use the quotient law of exponents:\naᵐ ÷ aⁿ = aᵐ⁻ⁿ`,
          `Subtract the exponents:\n${b}^(${p1} − ${p2}) = ${b}^${p}`,
          `${p < 0 ? `Convert negative power to positive 1/${b}^${-p} and evaluate` : 'Evaluate'}:\n${val}`,
        ]
      );
    } else {
      const p = p1 * p2;
      const val = `${Math.pow(b, p)}`;
      push(
        'قوت نما اور طاقتیں',
        'Exponents and Powers',
        `قیمت معلوم کریں: (${b}^(${p1}))^(${p2})۔`,
        `Evaluate: (${b}^(${p1}))^(${p2}).`,
        val,
        val,
        [
          `${Math.pow(b, p1 + p2)}`,
          `1/${val}`,
          `${b * p}`,
        ],
        [
          `${Math.pow(b, p1 + p2)}`,
          `1/${val}`,
          `${b * p}`,
        ],
        `قانون (aᵐ)ⁿ = aᵐⁿ کے مطابق: ${b}^(${p1} × ${p2}) = ${b}^${p} = ${val}۔`,
        `Using (aᵐ)ⁿ = aᵐⁿ: ${b}^(${p1} × ${p2}) = ${b}^${p} = ${val}.`,
        [
          `قوت کی قوت کا قانون لکھیں:\n(aᵐ)ⁿ = aᵐ×ⁿ`,
          `دونوں قوتوں کو ضرب دیں:\n${b}^(${p1} × ${p2}) = ${b}^${p}`,
          `قیمت نکالیں:\n${b}^${p} = ${val}`,
        ],
        [
          `Use the power of a power law:\n(aᵐ)ⁿ = aᵐ×ⁿ`,
          `Multiply the exponents:\n${b}^(${p1} × ${p2}) = ${b}^${p}`,
          `Evaluate:\n${b}^${p} = ${val}`,
        ]
      );
    }
  }

  // 16 standard form / scientific notation
  const sciCases: Array<[string, string, string, string[]]> = [
    ['0.00045', '4.5 × 10⁻⁴', '4.5 × 10⁻⁵', ['45 × 10⁻⁵', '4.5 × 10⁴']],
    ['0.000072', '7.2 × 10⁻⁵', '7.2 × 10⁻⁴', ['7.2 × 10⁻⁶', '7.2 × 10⁵']],
    ['0.0081', '8.1 × 10⁻³', '8.1 × 10⁻²', ['81 × 10⁻³', '8.1 × 10³']],
    ['0.0000036', '3.6 × 10⁻⁶', '3.6 × 10⁻⁵', ['3.6 × 10⁻⁷', '36 × 10⁻⁶']],
    ['0.00094', '9.4 × 10⁻⁴', '9.4 × 10⁻³', ['9.4 × 10⁻⁵', '94 × 10⁻⁴']],
    ['0.000019', '1.9 × 10⁻⁵', '1.9 × 10⁻⁴', ['1.9 × 10⁻⁶', '19 × 10⁻⁵']],
    ['420000', '4.2 × 10⁵', '4.2 × 10⁴', ['4.2 × 10⁶', '42 × 10⁵']],
    ['7800000', '7.8 × 10⁶', '7.8 × 10⁵', ['7.8 × 10⁷', '7.8 × 10⁻⁶']],
    ['65000', '6.5 × 10⁴', '6.5 × 10³', ['6.5 × 10⁵', '65 × 10⁴']],
    ['93000000', '9.3 × 10⁷', '9.3 × 10⁶', ['9.3 × 10⁸', '9.3 × 10⁻⁷']],
    ['0.0000005', '5 × 10⁻⁷', '5 × 10⁻⁶', ['5 × 10⁻⁸', '5 × 10⁷']],
    ['315000', '3.15 × 10⁵', '3.15 × 10⁴', ['3.15 × 10⁶', '31.5 × 10⁵']],
    ['0.00205', '2.05 × 10⁻³', '2.05 × 10⁻²', ['2.05 × 10⁻⁴', '20.5 × 10⁻³']],
    ['840000', '8.4 × 10⁵', '8.4 × 10⁴', ['8.4 × 10⁶', '84 × 10⁵']],
    ['0.0000604', '6.04 × 10⁻⁵', '6.04 × 10⁻⁴', ['6.04 × 10⁻⁶', '60.4 × 10⁻⁵']],
    ['1250000', '1.25 × 10⁶', '1.25 × 10⁵', ['1.25 × 10⁷', '12.5 × 10⁶']],
  ];
  for (const [raw, std, d1, others] of sciCases) {
    const isSmall = raw.startsWith('0.');
    push(
      'قوت نما اور طاقتیں',
      'Exponents and Powers',
      `عدد ${raw} کو معیاری صورت (سائنسی ترقیم) میں لکھیں۔`,
      `Write ${raw} in standard form (scientific notation).`,
      std,
      std,
      [d1, ...others],
      [d1, ...others],
      `اعشاریہ کو اس طرح منتقل کریں کہ بائیں جانب صرف ایک غیر صفر ہندسہ رہے: ${raw} = ${std}۔`,
      `Move the decimal point so that only one non-zero digit lies to its left: ${raw} = ${std}.`,
      [
        `معیاری صورت (m × 10ⁿ) کا اصول:\nاعشاریہ کو پہلے غیر صفر ہندسے کے فوراً بعد لایا جاتا ہے جہاں 1 ≤ m < 10 ہو۔`,
        isSmall
          ? `چونکہ عدد 1 سے چھوٹا ہے، اعشاریہ کو دائیں طرف منتقل کریں اور 10 کی قوت منفی رکھیں۔`
          : `چونکہ عدد 10 سے بڑا ہے، اعشاریہ کو بائیں طرف پہلے ہندسے کے بعد لائیں اور منتقل کیے گئے ہندسوں کی تعداد 10 کی مثبت قوت کے طور پر لکھیں۔`,
        `درست سائنسی ترقیم:\n${raw} = ${std}`,
      ],
      [
        `Standard form (m × 10ⁿ) rule:\nPlace the decimal right after the first non-zero digit so that 1 ≤ m < 10.`,
        isSmall
          ? `Since the number is less than 1, move the decimal point to the right and use a negative power of 10.`
          : `Since the number is greater than 10, move the decimal point to the left and use a positive power of 10.`,
        `Correct scientific notation:\n${raw} = ${std}`,
      ]
    );
  }

  // 18 direct & inverse proportion
  const directCases: Array<[number, number, number]> = [
    [5, 75, 8], [6, 90, 11], [4, 68, 9], [7, 105, 12], [8, 120, 15],
    [9, 135, 6], [3, 54, 10], [12, 180, 7], [15, 225, 4],
  ];
  for (const [n1, cost1, n2] of directCases) {
    const unit = cost1 / n1;
    const ans = unit * n2;
    push(
      'تناسب راست و معکوس',
      'Direct and Inverse Proportion',
      `اگر ${n1} کاپیوں کی قیمت ${cost1} روپے ہو تو ویسی ہی ${n2} کاپیوں کی قیمت کتنی ہوگی؟`,
      `If ${n1} notebooks cost Rs. ${cost1}, what will be the cost of ${n2} such notebooks?`,
      `${ans} روپے`,
      `Rs. ${ans}`,
      [`${ans + unit} روپے`, `${ans - unit} روپے`, `${n2 * n1} روپے`],
      [`Rs. ${ans + unit}`, `Rs. ${ans - unit}`, `Rs. ${n2 * n1}`],
      `ایک کاپی کی قیمت = ${cost1} ÷ ${n1} = ${unit} روپے۔ ${n2} کاپیوں کی قیمت = ${unit} × ${n2} = ${ans} روپے۔`,
      `Cost of 1 notebook = ${cost1} ÷ ${n1} = Rs. ${unit}. Cost of ${n2} notebooks = ${unit} × ${n2} = Rs. ${ans}.`,
      [
        `چونکہ کاپیاں اور قیمت تناسبِ راست میں ہیں، پہلے 1 کاپی کی قیمت معلوم کریں:\n1 کاپی کی قیمت = ${cost1} ÷ ${n1} = ${unit} روپے`,
        `اب ${n2} کاپیوں کی قیمت معلوم کرنے کے لیے ${unit} کو ${n2} سے ضرب دیں:\n${unit} × ${n2}`,
        `حساب مکمل کریں:\n${ans} روپے`,
      ],
      [
        `Since notebooks and cost are in direct proportion, find the cost of 1 notebook:\n${cost1} ÷ ${n1} = Rs. ${unit}`,
        `Multiply by ${n2} to find the cost of ${n2} notebooks:\n${unit} × ${n2}`,
        `Calculate:\nRs. ${ans}`,
      ]
    );
  }
  const invCases: Array<[number, number, number]> = [
    [6, 10, 12], [8, 15, 10], [12, 8, 16], [10, 12, 15], [15, 4, 10],
    [9, 12, 18], [14, 6, 12], [20, 9, 15], [16, 5, 10],
  ];
  for (const [w1, d1, w2] of invCases) {
    const prod = w1 * d1;
    const d2 = prod / w2;
    push(
      'تناسب راست و معکوس',
      'Direct and Inverse Proportion',
      `اگر ${w1} مزدور ایک دیوار ${d1} دن میں بنا سکتے ہیں تو اسی رفتار سے ${w2} مزدور کتنے دن میں بنائیں گے؟`,
      `If ${w1} workers can build a wall in ${d1} days, how many days will ${w2} workers take at the same pace?`,
      `${d2} دن`,
      `${d2} days`,
      [`${d2 + 2} دن`, `${Math.max(1, d2 - 1)} دن`, `${(w2 * d1) / w1} دن`],
      [`${d2 + 2} days`, `${Math.max(1, d2 - 1)} days`, `${(w2 * d1) / w1} days`],
      `مزدور اور دن تناسبِ معکوس میں ہیں: ${w1} × ${d1} = ${w2} × دن ⇐ دن = ${prod} ÷ ${w2} = ${d2}۔`,
      `Workers and days vary inversely: ${w1} × ${d1} = ${w2} × days => days = ${prod} ÷ ${w2} = ${d2}.`,
      [
        `مزدوروں کی تعداد اور دنوں میں تناسبِ معکوس ہے، اس لیے کلیہ لگائیں:\nمزدور₁ × دن₁ = مزدور₂ × دن₂`,
        `معلوم قیمتیں درج کریں:\n${w1} × ${d1} = ${w2} × دن ⇐ ${prod} = ${w2} × دن`,
        `${w2} سے تقسیم کر کے دن معلوم کریں:\nدن = ${prod} ÷ ${w2} = ${d2} دن`,
      ],
      [
        `Workers and days are in inverse proportion:\nWorkers₁ × Days₁ = Workers₂ × Days₂`,
        `Substitute the values:\n${w1} × ${d1} = ${w2} × days => ${prod} = ${w2} × days`,
        `Divide by ${w2}:\ndays = ${prod} ÷ ${w2} = ${d2} days`,
      ]
    );
  }

  // 18 profit/loss and simple interest
  const siCases: Array<[number, number, number]> = [
    [2000, 5, 2], [4000, 6, 3], [5000, 8, 2], [3000, 10, 3], [6000, 5, 4],
    [2500, 8, 3], [8000, 7, 2], [1500, 12, 2], [4500, 4, 5],
  ];
  for (const [p, r, t] of siCases) {
    const si = (p * r * t) / 100;
    push(
      'فیصد اور سود',
      'Percentages and Interest',
      `${p} روپے پر ${r}% سالانہ شرح سے ${t} سال کا سادہ سود معلوم کریں۔`,
      `Find the simple interest on Rs. ${p} at ${r}% per annum for ${t} years.`,
      `${si} روپے`,
      `Rs. ${si}`,
      [`${si + 100} روپے`, `${si / 2} روپے`, `${p + si} روپے`],
      [`Rs. ${si + 100}`, `Rs. ${si / 2}`, `Rs. ${p + si}`],
      `سادہ سود = (اصل زر × شرح × وقت) / 100 = (${p} × ${r} × ${t}) / 100 = ${si} روپے۔`,
      `Simple Interest = (P × R × T) / 100 = (${p} × ${r} × ${t}) / 100 = Rs. ${si}.`,
      [
        `سادہ سود کا کلیہ لکھیں:\nسادہ سود = (اصل زر × شرح × وقت) / 100`,
        `دی گئی قیمتیں (اصل زر = ${p}، شرح = ${r}%، وقت = ${t} سال) درج کریں:\n(${p} × ${r} × ${t}) / 100`,
        `ضرب اور 100 پر تقسیم مکمل کریں:\n${p * r * t} ÷ 100 = ${si} روپے`,
      ],
      [
        `Write the simple interest formula:\nSI = (Principal × Rate × Time) / 100`,
        `Substitute P = ${p}, R = ${r}%, T = ${t}:\n(${p} × ${r} × ${t}) / 100`,
        `Multiply and divide by 100:\n${p * r * t} ÷ 100 = Rs. ${si}`,
      ]
    );
  }
  const plCases: Array<[number, number]> = [
    [400, 20], [500, 15], [800, 25], [600, 10], [1200, 15],
    [1000, 12], [750, 20], [900, 10], [2000, 18],
  ];
  for (const [cp, pct] of plCases) {
    const profit = (cp * pct) / 100;
    const sp = cp + profit;
    push(
      'فیصد اور سود',
      'Percentages and Interest',
      `ایک دکاندار نے کوئی چیز ${cp} روپے میں خریدی اور ${pct}% نفع پر فروخت کر دی۔ قیمتِ فروخت کیا ہے؟`,
      `A shopkeeper bought an item for Rs. ${cp} and sold it at a profit of ${pct}%. What is the selling price?`,
      `${sp} روپے`,
      `Rs. ${sp}`,
      [`${cp - profit} روپے`, `${sp + 20} روپے`, `${cp + pct} روپے`],
      [`Rs. ${cp - profit}`, `Rs. ${sp + 20}`, `Rs. ${cp + pct}`],
      `نفع = ${cp} کا ${pct}% = ${profit} روپے۔ قیمتِ فروخت = ${cp} + ${profit} = ${sp} روپے۔`,
      `Profit = ${pct}% of ${cp} = Rs. ${profit}. Selling price = ${cp} + ${profit} = Rs. ${sp}.`,
      [
        `پہلے نفع کی رقم معلوم کریں:\nنفع = (${pct} / 100) × ${cp} = ${profit} روپے`,
        `قیمتِ فروخت کا کلیہ لکھیں:\nقیمتِ فروخت = قیمتِ خرید + نفع`,
        `دونوں رقوم کو جمع کریں:\n${cp} + ${profit} = ${sp} روپے`,
      ],
      [
        `First find the profit amount:\nProfit = (${pct} / 100) × ${cp} = Rs. ${profit}`,
        `Write the selling price formula:\nSelling Price = Cost Price + Profit`,
        `Add:\n${cp} + ${profit} = Rs. ${sp}`,
      ]
    );
  }

  return list;
}

function createNumbersHard(): MCQQuestion[] {
  const list: MCQQuestion[] = [];
  let idx = 1;
  const push = (
    topicUr: string,
    topicEn: string,
    qUr: string,
    qEn: string,
    correctUr: string,
    correctEn: string,
    distractorsUr: string[],
    distractorsEn: string[],
    expUr: string,
    expEn: string,
    stepsUr: string[],
    stepsEn: string[]
  ) => {
    list.push(
      buildBilingualMCQ({
        id: `num-h-${idx}`,
        chapterId: 'numbers',
        difficulty: 'hard',
        seed: idx * 13 + 7,
        ur: {
          topic: topicUr,
          question: qUr,
          correct: correctUr,
          distractors: distractorsUr,
          explanation: expUr,
          steps: stepsUr,
        },
        en: {
          topic: topicEn,
          question: qEn,
          correct: correctEn,
          distractors: distractorsEn,
          explanation: expEn,
          steps: stepsEn,
        },
      })
    );
    idx++;
  };

  // 12 hard conceptual questions
  push(
    'مربع اور جذر المربع',
    'Squares and Square Roots',
    'وہ سب سے چھوٹا کامل مربع عدد کون سا ہے جو 4، 9 اور 10 میں سے ہر ایک پر پورا تقسیم ہوتا ہو؟',
    'What is the smallest perfect square divisible by each of 4, 9, and 10?',
    '900',
    '900',
    ['180', '360', '1600'],
    ['180', '360', '1600'],
    '4، 9 اور 10 کا ذواضعافِ اقل 180 = 2² × 3² × 5 ہے۔ 5 کا جوڑا بنانے کے لیے 5 سے ضرب دیں: 180 × 5 = 900۔',
    'The LCM of 4, 9, and 10 is 180 = 2² × 3² × 5. Multiply by 5 to pair 5: 180 × 5 = 900.',
    [
      'پہلے 4، 9 اور 10 کا ذواضعافِ اقل معلوم کریں:\nذواضعافِ اقل = 180',
      '180 کے مفرد اجزائے ضربی بنائیں:\n180 = 2² × 3² × 5\nیہاں 5 کا جوڑا مکمل نہیں ہے۔',
      'کامل مربع بنانے کے لیے 180 کو 5 سے ضرب دیں:\n180 × 5 = 900 (جو 30² ہے)',
    ],
    [
      'First find the LCM of 4, 9, and 10:\nLCM = 180',
      'Write the prime factorization of 180:\n180 = 2² × 3² × 5\nHere, the factor 5 is unpaired.',
      'Multiply 180 by 5 to make it a perfect square:\n180 × 5 = 900 (which equals 30²)',
    ]
  );
  push(
    'مربع اور جذر المربع',
    'Squares and Square Roots',
    'وہ سب سے چھوٹا کامل مربع عدد معلوم کریں جو 8، 15 اور 20 پر پورا تقسیم ہو۔',
    'Find the smallest perfect square divisible by 8, 15, and 20.',
    '3600',
    '3600',
    ['120', '900', '1800'],
    ['120', '900', '1800'],
    '8، 15 اور 20 کا ذواضعافِ اقل 120 = 2³ × 3 × 5 ہے۔ تمام قوتیں جفت بنانے کے لیے 2 × 3 × 5 = 30 سے ضرب دیں: 120 × 30 = 3600۔',
    'The LCM of 8, 15, and 20 is 120 = 2³ × 3 × 5. Multiply by 2 × 3 × 5 = 30 to pair all factors: 120 × 30 = 3600.',
    [
      '8، 15 اور 20 کا ذواضعافِ اقل معلوم کریں:\nذواضعافِ اقل = 120',
      '120 کے مفرد اجزائے ضربی لکھیں:\n120 = 2 × 2 × 2 × 3 × 5\nیہاں ایک 2، ایک 3 اور ایک 5 بغیر جوڑے کے ہیں۔',
      'جوڑے مکمل کرنے کے لیے 2 × 3 × 5 = 30 سے ضرب دیں:\n120 × 30 = 3600 (جو 60² ہے)',
    ],
    [
      'Find the LCM of 8, 15, and 20:\nLCM = 120',
      'Prime factorize 120:\n120 = 2 × 2 × 2 × 3 × 5\nOne 2, one 3, and one 5 are left unpaired.',
      'Multiply by 2 × 3 × 5 = 30 to complete all pairs:\n120 × 30 = 3600 (which equals 60²)',
    ]
  );
  push(
    'ناطق اعداد',
    'Rational Numbers',
    'کون سا ناطق عدد 1/4 اور 1/2 کے بالکل درمیان واقع ہے؟',
    'Which rational number lies halfway between 1/4 and 1/2?',
    '3/8',
    '3/8',
    ['1/3', '5/8', '2/6'],
    ['1/3', '5/8', '2/6'],
    'درمیانی عدد = (1/4 + 1/2) ÷ 2 = (3/4) ÷ 2 = 3/8۔',
    'Midpoint = (1/4 + 1/2) ÷ 2 = (3/4) ÷ 2 = 3/8.',
    [
      'دو اعداد کے بالکل درمیان کا عدد معلوم کرنے کا کلیہ لکھیں:\nدرمیانی عدد = (پہلا عدد + دوسرا عدد) ÷ 2',
      'دونوں کسروں کو جمع کریں (مشترک مخرج 4 لے کر):\n1/4 + 1/2 = 1/4 + 2/4 = 3/4',
      'حاصلِ جمع کو 2 پر تقسیم کریں:\n(3/4) ÷ 2 = 3/4 × 1/2 = 3/8',
    ],
    [
      'Use the midpoint formula:\nMidpoint = (First number + Second number) ÷ 2',
      'Add the two fractions with common denominator 4:\n1/4 + 1/2 = 1/4 + 2/4 = 3/4',
      'Divide by 2:\n(3/4) ÷ 2 = (3/4) × (1/2) = 3/8',
    ]
  );
  push(
    'ناطق اعداد',
    'Rational Numbers',
    'اگر x = -3/4 اور y = 2/3 ہو تو (x + y) ÷ (x − y) کی قیمت معلوم کریں۔',
    'If x = -3/4 and y = 2/3, find the value of (x + y) ÷ (x − y).',
    '1/17',
    '1/17',
    ['-1/17', '17', '-5/17'],
    ['-1/17', '17', '-5/17'],
    'x + y = (-9 + 8)/12 = -1/12؛ x − y = (-9 − 8)/12 = -17/12۔ نسبت = (-1/12) ÷ (-17/12) = 1/17۔',
    'x + y = (-9 + 8)/12 = -1/12; x − y = (-9 − 8)/12 = -17/12. Ratio = (-1/12) ÷ (-17/12) = 1/17.',
    [
      'پہلے x + y معلوم کریں (مشترک مخرج 12):\nx + y = -3/4 + 2/3 = (-9 + 8)/12 = -1/12',
      'اب x − y معلوم کریں:\nx − y = -3/4 − 2/3 = (-9 − 8)/12 = -17/12',
      'تقسیم کریں:\n(-1/12) ÷ (-17/12) = (-1/12) × (-12/17) = 1/17',
    ],
    [
      'First compute x + y (common denominator 12):\nx + y = -3/4 + 2/3 = (-9 + 8)/12 = -1/12',
      'Next compute x − y:\nx − y = -3/4 − 2/3 = (-9 − 8)/12 = -17/12',
      'Divide:\n(-1/12) ÷ (-17/12) = (-1/12) × (-12/17) = 1/17',
    ]
  );
  push(
    'فیصد اور سود',
    'Percentages and Interest',
    '10,000 روپے پر 10% سالانہ شرح سے 2 سال کے لیے مرکب سود اور سادہ سود کا فرق کتنا ہوگا؟',
    'What is the difference between compound interest and simple interest on Rs. 10,000 at 10% per annum for 2 years?',
    '100 روپے',
    'Rs. 100',
    ['200 روپے', '110 روپے', '50 روپے'],
    ['Rs. 200', 'Rs. 110', 'Rs. 50'],
    'سادہ سود = 2000 روپے؛ مرکب سود = 10000 × (1.1)² − 10000 = 2100 روپے۔ فرق = 2100 − 2000 = 100 روپے۔',
    'Simple interest = Rs. 2000; Compound interest = 10000 × (1.1)² − 10000 = Rs. 2100. Difference = 2100 − 2000 = Rs. 100.',
    [
      'پہلے سادہ سود نکالیں:\nسادہ سود = (10000 × 10 × 2) / 100 = 2000 روپے',
      'اب مرکب سود نکالیں:\nکل رقم = 10000 × (1 + 10/100)² = 10000 × 1.21 = 12100 روپے\nمرکب سود = 12100 − 10000 = 2100 روپے',
      'دونوں کا فرق معلوم کریں:\n2100 − 2000 = 100 روپے',
    ],
    [
      'First calculate the simple interest:\nSI = (10000 × 10 × 2) / 100 = Rs. 2000',
      'Now calculate the compound interest:\nAmount = 10000 × (1 + 10/100)² = 10000 × 1.21 = Rs. 12100\nCI = 12100 − 10000 = Rs. 2100',
      'Find the difference:\n2100 − 2000 = Rs. 100',
    ]
  );
  push(
    'فیصد اور سود',
    'Percentages and Interest',
    '800 روپے کتنے سال میں 10% سالانہ مرکب سود (ششماہی حساب سے) کے تحت 926.10 روپے ہو جائیں گے؟',
    'In how many years will Rs. 800 amount to Rs. 926.10 at 10% per annum compounded half-yearly?',
    '1.5 سال',
    '1.5 years',
    ['2 سال', '1 سال', '3 سال'],
    ['2 years', '1 year', '3 years'],
    'ششماہی شرح = 5%۔ 800 × (1.05)ⁿ = 926.10 ⇐ (21/20)ⁿ = 9261/8000 = (21/20)³ ⇐ n = 3 ششماہی = 1.5 سال۔',
    'Half-yearly rate = 5%. 800 × (1.05)ⁿ = 926.10 => (21/20)ⁿ = 9261/8000 = (21/20)³, so n = 3 half-years = 1.5 years.',
    [
      'ششماہی شرح معلوم کریں:\nسالانہ شرح 10% کا نصف = 5% فی ششماہی',
      'مرکب سود کے کلیے میں قیمتیں رکھیں:\n800 × (1 + 5/100)ⁿ = 926.10 ⇐ (21/20)ⁿ = 926.10 / 800 = 9261 / 8000',
      'قوت نما موازنہ کریں:\n9261/8000 = (21/20)³ ⇐ n = 3 ششماہیاں = 3 ÷ 2 = 1.5 سال',
    ],
    [
      'Find the half-yearly interest rate:\nHalf of 10% = 5% per half-year',
      'Substitute into the compound amount formula:\n800 × (1 + 5/100)ⁿ = 926.10 => (21/20)ⁿ = 9261 / 8000',
      'Compare powers:\n9261/8000 = (21/20)³ => n = 3 half-years = 1.5 years',
    ]
  );
  push(
    'قوت نما اور طاقتیں',
    'Exponents and Powers',
    'اگر 5^(2x − 1) ÷ 25 = 125 ہو تو x کی قیمت معلوم کریں۔',
    'Find x if 5^(2x − 1) ÷ 25 = 125.',
    '3',
    '3',
    ['2', '4', '2.5'],
    ['2', '4', '2.5'],
    '5^(2x−1) ÷ 5² = 5³ ⇐ 5^(2x−3) = 5³ ⇐ 2x − 3 = 3 ⇐ x = 3۔',
    '5^(2x−1) ÷ 5² = 5³ gives 5^(2x−3) = 5³, so 2x − 3 = 3 and x = 3.',
    [
      'تمام اعداد کو اساس 5 کی قوت میں لکھیں:\n25 = 5² اور 125 = 5³\nمساوات: 5^(2x − 1) ÷ 5² = 5³',
      'بائیں جانب قانونِ تقسیم (aᵐ ÷ aⁿ = aᵐ⁻ⁿ) لگائیں:\n5^(2x − 1 − 2) = 5³ ⇐ 5^(2x − 3) = 5³',
      'اساس برابر ہیں اس لیے قوت نماؤں کو برابر رکھیں:\n2x − 3 = 3 ⇐ 2x = 6 ⇐ x = 3',
    ],
    [
      'Express all numbers with base 5:\n25 = 5² and 125 = 5³ => 5^(2x − 1) ÷ 5² = 5³',
      'Apply aᵐ ÷ aⁿ = aᵐ⁻ⁿ:\n5^(2x − 1 − 2) = 5³ => 5^(2x − 3) = 5³',
      'Equate the exponents:\n2x − 3 = 3 => 2x = 6 => x = 3',
    ]
  );
  push(
    'قوت نما اور طاقتیں',
    'Exponents and Powers',
    'm کی قیمت معلوم کریں اگر (-3)^(m+1) × (-3)⁵ = (-3)⁷ ہو۔',
    'Find m if (-3)^(m+1) × (-3)⁵ = (-3)⁷.',
    '1',
    '1',
    ['2', '3', '-1'],
    ['2', '3', '-1'],
    '(-3)^(m + 1 + 5) = (-3)⁷ ⇐ m + 6 = 7 ⇐ m = 1۔',
    '(-3)^(m + 1 + 5) = (-3)⁷ gives m + 6 = 7, so m = 1.',
    [
      'بائیں طرف ضرب کا قانونِ قوت نما (aᵐ × aⁿ = aᵐ⁺ⁿ) لگائیں:\n(-3)^(m + 1 + 5) = (-3)⁷',
      'قوت کو مختصر کریں:\n(-3)^(m + 6) = (-3)⁷',
      'دونوں طرف اساس -3 برابر ہے، پس قوتیں برابر رکھیں:\nm + 6 = 7 ⇐ m = 7 − 6 = 1',
    ],
    [
      'Apply the product law (aᵐ × aⁿ = aᵐ⁺ⁿ):\n(-3)^(m + 1 + 5) = (-3)⁷',
      'Simplify the exponent:\n(-3)^(m + 6) = (-3)⁷',
      'Since bases are equal, equate exponents:\nm + 6 = 7 => m = 7 − 6 = 1',
    ]
  );
  push(
    'مربع اور جذر المربع',
    'Squares and Square Roots',
    'ایک مربع نما میدان کا رقبہ 5184 مربع میٹر ہے۔ اس کے ایک ضلع کی لمبائی معلوم کریں۔',
    'The area of a square field is 5184 m². Find the length of one side.',
    '72 میٹر',
    '72 m',
    ['68 میٹر', '74 میٹر', '64 میٹر'],
    ['68 m', '74 m', '64 m'],
    '√5184 = 72، کیونکہ 72 × 72 = 5184۔',
    '√5184 = 72, because 72 × 72 = 5184.',
    [
      'مربع کے رقبے کا کلیہ لکھیں:\nرقبہ = ضلع² ⇐ ضلع = √رقبہ',
      '5184 کا جذر المربع معلوم کریں:\n5184 = 2⁶ × 3⁴ = (2³ × 3²)² = (8 × 9)² = 72²',
      'لہٰذا ضلع کی لمبائی = √5184 = 72 میٹر',
    ],
    [
      'Write the area formula for a square:\nArea = side² => side = √Area',
      'Factorize 5184:\n5184 = 2⁶ × 3⁴ = (2³ × 3²)² = (8 × 9)² = 72²',
      'Therefore, the side length = √5184 = 72 m',
    ]
  );
  push(
    'مکعب اور جذر المکعب',
    'Cubes and Cube Roots',
    'تین اعداد 1 : 2 : 3 کی نسبت میں ہیں اور ان کے مکعبوں کا مجموعہ 4500 ہے۔ سب سے چھوٹا عدد معلوم کریں۔',
    'Three numbers are in the ratio 1 : 2 : 3 and the sum of their cubes is 4500. Find the smallest number.',
    '5',
    '5',
    ['10', '15', '3'],
    ['10', '15', '3'],
    '(k)³ + (2k)³ + (3k)³ = 36k³ = 4500 ⇐ k³ = 125 ⇐ k = 5۔',
    '(k)³ + (2k)³ + (3k)³ = 36k³ = 4500 => k³ = 125 => k = 5.',
    [
      'نسبت کے مطابق تینوں اعداد k، 2k اور 3k فرض کریں:\nk³ + (2k)³ + (3k)³ = 4500',
      'مکعب کھول کر جمع کریں:\nk³ + 8k³ + 27k³ = 36k³ = 4500',
      '36 پر تقسیم کریں اور جذر المکعب لیں:\nk³ = 4500 ÷ 36 = 125 ⇐ k = ∛125 = 5',
    ],
    [
      'Let the three numbers be k, 2k, and 3k:\nk³ + (2k)³ + (3k)³ = 4500',
      'Expand and combine:\nk³ + 8k³ + 27k³ = 36k³ = 4500',
      'Divide by 36 and take the cube root:\nk³ = 4500 ÷ 36 = 125 => k = ∛125 = 5',
    ]
  );
  push(
    'تناسب راست و معکوس',
    'Direct and Inverse Proportion',
    'ایک ہاسٹل میں 120 طلبہ کے لیے 30 دن کی خوراک موجود ہے۔ 5 دن بعد 30 مزید طلبہ آ جاتے ہیں۔ باقی خوراک مزید کتنے دن چلے گی؟',
    'A hostel has food for 120 students for 30 days. After 5 days, 30 more students join. How many more days will the remaining food last?',
    '20 دن',
    '20 days',
    ['25 دن', '18 دن', '24 دن'],
    ['25 days', '18 days', '24 days'],
    'باقی خوراک 120 طلبہ کے لیے 25 دن کافی ہے۔ 150 طلبہ کے لیے: (120 × 25) ÷ 150 = 20 دن۔',
    'Remaining food lasts 25 days for 120 students. For 150 students: (120 × 25) ÷ 150 = 20 days.',
    [
      '5 دن گزرنے کے بعد باقی دن اور کل طلبہ نکالیں:\nباقی دن (120 طلبہ کے لیے) = 30 − 5 = 25 دن\nنئے کل طلبہ = 120 + 30 = 150 طلبہ',
      'طلبہ اور دن تناسبِ معکوس میں ہیں:\n120 × 25 = 150 × مطلوبہ دن',
      'حساب کریں:\nمطلوبہ دن = 3000 ÷ 150 = 20 دن',
    ],
    [
      'After 5 days:\nRemaining days for 120 students = 30 − 5 = 25 days\nNew number of students = 120 + 30 = 150',
      'Students and days are in inverse proportion:\n120 × 25 = 150 × days',
      'Solve:\ndays = 3000 ÷ 150 = 20 days',
    ]
  );
  push(
    'فیصد اور سود',
    'Percentages and Interest',
    '20% اور 10% کی دو مسلسل رعایتوں کے برابر ایک مجموعی رعایت کتنی ہوگی؟',
    'What single discount is equivalent to two successive discounts of 20% and 10%?',
    '28%',
    '28%',
    ['30%', '26%', '32%'],
    ['30%', '26%', '32%'],
    '100 روپے پر: 20% رعایت کے بعد 80 روپے؛ پھر 10% رعایت کے بعد 72 روپے۔ کل رعایت = 100 − 72 = 28%۔',
    'On Rs. 100: after 20% discount -> Rs. 80; after 10% discount -> Rs. 72. Total discount = 100 − 72 = 28%.',
    [
      'فرض کریں اصل قیمت 100 روپے ہے۔ پہلی 20% رعایت کے بعد قیمت:\n100 − 20 = 80 روپے',
      'اب 80 روپے پر 10% دوسری رعایت نکالیں:\n80 کا 10% = 8 روپے ⇐ نئی قیمت = 80 − 8 = 72 روپے',
      'کل مجموعی رعایت معلوم کریں:\n100 − 72 = 28%',
    ],
    [
      'Assume original price = Rs. 100. After the first 20% discount:\n100 − 20 = Rs. 80',
      'Apply the second 10% discount on Rs. 80:\n10% of 80 = 8 => new price = 80 − 8 = Rs. 72',
      'Total equivalent discount:\n100 − 72 = 28%',
    ]
  );

  // 18 smallest number to multiply/divide to make perfect square or cube
  const sqMakeCases: Array<[number, number, string]> = [
    [180, 5, 'multiply'], [252, 7, 'multiply'], [2925, 13, 'divide'], [396, 11, 'divide'],
    [768, 3, 'multiply'], [1458, 2, 'multiply'], [2028, 3, 'multiply'], [1620, 5, 'divide'],
    [2800, 7, 'divide'],
  ];
  for (const [num, ans, action] of sqMakeCases) {
    const actUr = action === 'multiply' ? 'ضرب دی جائے' : 'تقسیم کیا جائے';
    const actNoun = action === 'multiply' ? 'ضرب دینے' : 'تقسیم کرنے';
    const actEn = action === 'multiply' ? 'multiplied' : 'divided';
    const actNounEn = action === 'multiply' ? 'multiplying' : 'dividing';
    const targetSq = action === 'multiply' ? num * ans : num / ans;
    push(
      'مربع اور جذر المربع',
      'Squares and Square Roots',
      `وہ سب سے چھوٹا قدرتی عدد معلوم کریں جس سے ${num} کو ${actUr} کہ کامل مربع حاصل ہو۔`,
      `Find the smallest natural number by which ${num} should be ${actEn} to obtain a perfect square.`,
      `${ans}`,
      `${ans}`,
      [`${ans + 2}`, `${ans === 2 ? 3 : 2}`, `${ans * 2}`],
      [`${ans + 2}`, `${ans === 2 ? 3 : 2}`, `${ans * 2}`],
      `${num} کے مفرد اجزائے ضربی بنانے پر ${ans} کا جوڑا نہیں بنتا، اس لیے ${ans} سے ${actNoun} سے کامل مربع بن جاتا ہے۔`,
      `In the prime factorization of ${num}, the factor ${ans} has no pair, so ${actNounEn} by ${ans} yields a perfect square.`,
      [
        `عدد ${num} کے مفرد اجزائے ضربی بنا کر دو دو کے جوڑے بنائیں۔`,
        `تجزی سے واضح ہوتا ہے کہ مفرد عامل ${ans} کا جوڑا باقی نہیں رہتا۔`,
        `اس لیے ${num} کو ${ans} سے ${actNoun} پر کامل مربع ${targetSq} (= ${Math.sqrt(targetSq)}²) حاصل ہوتا ہے۔`,
      ],
      [
        `Find the prime factorization of ${num} and group equal factors in pairs.`,
        `From the factorization, the prime factor ${ans} is left unpaired.`,
        `Therefore, ${actNounEn} ${num} by ${ans} gives the perfect square ${targetSq} (= ${Math.sqrt(targetSq)}²).`,
      ]
    );
  }
  const cubeMakeCases: Array<[number, number, string]> = [
    [243, 3, 'divide'], [128, 2, 'divide'], [675, 5, 'multiply'], [100, 10, 'multiply'],
    [192, 3, 'divide'], [135, 5, 'divide'], [500, 2, 'multiply'], [256, 2, 'multiply'],
    [72, 3, 'multiply'],
  ];
  for (const [num, ans, action] of cubeMakeCases) {
    const actUr = action === 'multiply' ? 'ضرب دی جائے' : 'تقسیم کیا جائے';
    const actNoun = action === 'multiply' ? 'ضرب دینے' : 'تقسیم کرنے';
    const actEn = action === 'multiply' ? 'multiplied' : 'divided';
    const actNounEn = action === 'multiply' ? 'multiplying' : 'dividing';
    const targetCube = action === 'multiply' ? num * ans : num / ans;
    push(
      'مکعب اور جذر المکعب',
      'Cubes and Cube Roots',
      `وہ سب سے چھوٹا قدرتی عدد معلوم کریں جس سے ${num} کو ${actUr} کہ یہ کامل مکعب بن جائے۔`,
      `Find the smallest natural number by which ${num} should be ${actEn} to make it a perfect cube.`,
      `${ans}`,
      `${ans}`,
      [`${ans + 1}`, `${ans * 2}`, `${ans + 3}`],
      [`${ans + 1}`, `${ans * 2}`, `${ans + 3}`],
      `${num} کے مفرد اجزائے ضربی سے ظاہر ہوتا ہے کہ ${ans} سے ${actNoun} سے تمام اجزا تین تین کے گروہ میں آ جاتے ہیں۔`,
      `From the prime factorization of ${num}, ${actNounEn} by ${ans} groups all prime factors into triples.`,
      [
        `عدد ${num} کے مفرد اجزائے ضربی نکال کر تین تین کے گروہ بنائیں۔`,
        `تین تین کے گروہ مکمل کرنے کے لیے عدد ${ans} سے ${actNoun} کی ضرورت ہے۔`,
        `${num} کو ${ans} سے ${actNoun} پر کامل مکعب ${targetCube} (= ${Math.round(Math.cbrt(targetCube))}³) حاصل ہوتا ہے۔`,
      ],
      [
        `Write the prime factorization of ${num} and group prime factors into triples.`,
        `To ensure every prime factor appears in a complete group of three, we need ${actNounEn} by ${ans}.`,
        `${actNounEn} ${num} by ${ans} produces the perfect cube ${targetCube} (= ${Math.round(Math.cbrt(targetCube))}³).`,
      ]
    );
  }

  // 18 exponential equations
  const expEqCases: Array<[number, number, number, number]> = [
    [2, 2, 1, 7], [2, 3, -1, 8], [3, 2, 1, 5], [3, 1, 2, 6], [5, 2, -2, 4],
    [2, 2, -2, 6], [4, 1, 1, 4], [7, 2, -1, 3], [3, 3, 0, 6], [2, 1, 3, 7],
    [5, 1, 1, 4], [2, 3, 1, 10], [3, 2, -2, 4], [6, 1, 2, 5], [2, 2, 3, 9],
    [3, 1, -1, 3], [5, 2, 0, 6], [2, 4, -3, 5],
  ];
  for (const [base, a, b, target] of expEqCases) {
    const x = (target - b) / a;
    const rhs = Math.pow(base, target);
    const expr =
      a === 1
        ? b >= 0 ? `x + ${b}` : `x − ${-b}`
        : b === 0
        ? `${a}x`
        : b > 0
        ? `${a}x + ${b}`
        : `${a}x − ${-b}`;
    push(
      'قوت نما اور طاقتیں',
      'Exponents and Powers',
      `x کی قیمت معلوم کریں: ${base}^(${expr}) = ${rhs}۔`,
      `Find the value of x: ${base}^(${expr}) = ${rhs}.`,
      `${x}`,
      `${x}`,
      [`${x + 1}`, `${x - 1}`, `${x + 2}`],
      [`${x + 1}`, `${x - 1}`, `${x + 2}`],
      `چونکہ ${rhs} = ${base}^${target}، قوت نماؤں کو برابر رکھیں: ${expr} = ${target} ⇐ x = ${x}۔`,
      `Since ${rhs} = ${base}^${target}, equate the exponents: ${expr} = ${target}, so x = ${x}.`,
      [
        `دائیں جانب موجود عدد ${rhs} کو اساس ${base} کی قوت میں لکھیں:\n${base}^(${expr}) = ${base}^${target}`,
        `دونوں طرف اساس برابر ہے، اس لیے قوت نماؤں کو برابر رکھیں:\n${expr} = ${target}`,
        `خطی مساوات حل کر کے x نکالیں:\n${a === 1 ? `x = ${x}` : `${a}x = ${target - b} ⇐ x = ${target - b} ÷ ${a} = ${x}`}`,
      ],
      [
        `Write ${rhs} as a power of ${base}:\n${base}^(${expr}) = ${base}^${target}`,
        `Since the bases are equal, equate the exponents:\n${expr} = ${target}`,
        `Solve for x:\n${a === 1 ? `x = ${x}` : `${a}x = ${target - b} => x = ${target - b} ÷ ${a} = ${x}`}`,
      ]
    );
  }

  // 18 compound interest
  const ciCases: Array<[number, number, number]> = [
    [1000, 10, 2], [2000, 10, 2], [4000, 5, 2], [5000, 10, 2], [8000, 5, 2],
    [10000, 10, 2], [1000, 10, 3], [8000, 10, 3], [20000, 5, 2], [12000, 10, 2],
    [16000, 5, 2], [6000, 10, 2], [15000, 10, 2], [4000, 10, 2], [2500, 20, 2],
    [5000, 20, 2], [10000, 20, 2], [3000, 10, 2],
  ];
  for (let i = 0; i < ciCases.length; i++) {
    const [p, r, t] = ciCases[i];
    const amt = Math.round(p * Math.pow(1 + r / 100, t));
    const ci = amt - p;
    if (i % 2 === 0) {
      push(
        'فیصد اور سود',
        'Percentages and Interest',
        `${p} روپے پر ${r}% سالانہ شرح سے ${t} سال کا سالانہ مرکب سود معلوم کریں۔`,
        `Find the compound interest on Rs. ${p} at ${r}% per annum for ${t} years compounded annually.`,
        `${ci} روپے`,
        `Rs. ${ci}`,
        [`${amt} روپے`, `${(p * r * t) / 100} روپے`, `${ci + 100} روپے`],
        [`Rs. ${amt}`, `Rs. ${(p * r * t) / 100}`, `Rs. ${ci + 100}`],
        `کل رقم = ${p} × (1 + ${r}/100)^${t} = ${amt} روپے۔ مرکب سود = ${amt} − ${p} = ${ci} روپے۔`,
        `Amount = ${p} × (1 + ${r}/100)^${t} = Rs. ${amt}. Compound interest = ${amt} − ${p} = Rs. ${ci}.`,
        [
          `مرکب سود سے کل رقم کا کلیہ لکھیں:\nکل رقم (A) = P × (1 + R/100)^t`,
          `قیمتیں درج کر کے کل رقم معلوم کریں:\nA = ${p} × (1 + ${r}/100)^${t} = ${amt} روپے`,
          `مرکب سود نکالنے کے لیے کل رقم میں سے اصل زر تفریق کریں:\nمرکب سود = ${amt} − ${p} = ${ci} روپے`,
        ],
        [
          `Write the compound amount formula:\nA = P × (1 + R/100)^t`,
          `Substitute P = ${p}, R = ${r}, and t = ${t}:\nA = ${p} × (1 + ${r}/100)^${t} = Rs. ${amt}`,
          `Subtract principal from amount:\nCI = ${amt} − ${p} = Rs. ${ci}`,
        ]
      );
    } else {
      push(
        'فیصد اور سود',
        'Percentages and Interest',
        `${p} روپے کی رقم ${r}% سالانہ مرکب سود کی شرح سے ${t} سال میں بڑھ کر کتنی ہو جائے گی؟`,
        `What amount will Rs. ${p} grow to in ${t} years at ${r}% per annum compounded annually?`,
        `${amt} روپے`,
        `Rs. ${amt}`,
        [`${ci} روپے`, `${p + (p * r * t) / 100} روپے`, `${amt + 120} روپے`],
        [`Rs. ${ci}`, `Rs. ${p + (p * r * t) / 100}`, `Rs. ${amt + 120}`],
        `کل رقم = P(1 + R/100)^t = ${p} × (1 + ${r}/100)^${t} = ${amt} روپے۔`,
        `Amount = P(1 + R/100)^t = ${p} × (1 + ${r}/100)^${t} = Rs. ${amt}.`,
        [
          `مرکب سود سے کل رقم کا کلیہ لکھیں:\nA = P × (1 + R/100)^t`,
          `اصل زر P = ${p}، شرح R = ${r}% اور وقت t = ${t} سال درج کریں:\nA = ${p} × (1 + ${r}/100)^${t}`,
          `قوت حل کر کے ضرب دیں:\nA = ${amt} روپے`,
        ],
        [
          `Write the compound amount formula:\nA = P × (1 + R/100)^t`,
          `Substitute P = ${p}, R = ${r}%, and t = ${t}:\nA = ${p} × (1 + ${r}/100)^${t}`,
          `Evaluate:\nA = Rs. ${amt}`,
        ]
      );
    }
  }

  // 17 GST & Marked Price
  const gstCases: Array<[number, number]> = [
    [1000, 18], [1500, 12], [2000, 5], [2500, 12], [4000, 18],
    [3000, 10], [5000, 18], [800, 5], [1200, 12],
  ];
  for (const [price, gst] of gstCases) {
    const tax = (price * gst) / 100;
    const bill = price + tax;
    push(
      'فیصد اور سود',
      'Percentages and Interest',
      `ایک چیز کی قیمت ${price} روپے ہے اور اس پر ${gst}% ٹیکس شامل ہے۔ کل بل کتنے روپے ہوگا؟`,
      `An item costs Rs. ${price} plus ${gst}% sales tax. What is the total bill amount?`,
      `${bill} روپے`,
      `Rs. ${bill}`,
      [`${price - tax} روپے`, `${bill + 50} روپے`, `${tax} روپے`],
      [`Rs. ${price - tax}`, `Rs. ${bill + 50}`, `Rs. ${tax}`],
      `ٹیکس = ${price} کا ${gst}% = ${tax} روپے۔ کل بل = ${price} + ${tax} = ${bill} روپے۔`,
      `Tax = ${gst}% of ${price} = Rs. ${tax}. Total bill = ${price} + ${tax} = Rs. ${bill}.`,
      [
        `پہلے ٹیکس کی رقم نکالیں:\nٹیکس = (${gst} / 100) × ${price} = ${tax} روپے`,
        `کل بل کا کلیہ لکھیں:\nکل بل = اصل قیمت + ٹیکس`,
        `دونوں رقوم کو جمع کریں:\n${price} + ${tax} = ${bill} روپے`,
      ],
      [
        `First find the tax amount:\nTax = (${gst} / 100) × ${price} = Rs. ${tax}`,
        `Write the total bill formula:\nTotal Bill = Original Price + Tax`,
        `Add:\n${price} + ${tax} = Rs. ${bill}`,
      ]
    );
  }
  const mpCases: Array<[number, number]> = [
    [900, 10], [1600, 20], [1200, 25], [2400, 20], [1700, 15],
    [3400, 15], [1800, 10], [2100, 30],
  ];
  for (const [sp, disc] of mpCases) {
    const mp = (sp * 100) / (100 - disc);
    push(
      'فیصد اور سود',
      'Percentages and Interest',
      `${disc}% رعایت دینے کے بعد ایک جیکٹ ${sp} روپے میں فروخت کی گئی۔ اس کی درج شدہ قیمت معلوم کریں۔`,
      `After a ${disc}% discount, a jacket is sold for Rs. ${sp}. Find its marked price.`,
      `${mp} روپے`,
      `Rs. ${mp}`,
      [`${sp + (sp * disc) / 100} روپے`, `${mp + 100} روپے`, `${mp - 50} روپے`],
      [`Rs. ${sp + (sp * disc) / 100}`, `Rs. ${mp + 100}`, `Rs. ${mp - 50}`],
      `قیمتِ فروخت = درج شدہ قیمت × (100 − ${disc})/100 ⇐ درج شدہ قیمت = (${sp} × 100) / ${100 - disc} = ${mp} روپے۔`,
      `Selling price = Marked Price × (100 − ${disc})/100 => Marked Price = (${sp} × 100) / ${100 - disc} = Rs. ${mp}.`,
      [
        `رعایت کے بعد قیمتِ فروخت کا کلیہ لکھیں:\nقیمتِ فروخت = درج شدہ قیمت × (100 − رعایت%) / 100`,
        `دی گئی قیمتیں درج کریں:\n${sp} = درج شدہ قیمت × (${100 - disc} / 100)`,
        `درج شدہ قیمت نکالنے کے لیے حل کریں:\nدرج شدہ قیمت = (${sp} × 100) ÷ ${100 - disc} = ${mp} روپے`,
      ],
      [
        `Write the selling price formula:\nSelling Price = Marked Price × (100 − Discount%) / 100`,
        `Substitute the values:\n${sp} = Marked Price × (${100 - disc} / 100)`,
        `Solve for Marked Price:\nMarked Price = (${sp} × 100) ÷ ${100 - disc} = Rs. ${mp}`,
      ]
    );
  }

  // 17 speed, time, and distance
  const speedCases: Array<[number, number, number]> = [
    [60, 4, 80], [50, 6, 75], [40, 9, 60], [45, 8, 60], [72, 5, 60],
    [54, 10, 90], [48, 5, 60], [64, 6, 48], [80, 3, 60], [36, 5, 45],
    [90, 4, 72], [55, 6, 66], [42, 10, 70], [60, 5, 75], [84, 5, 70],
    [75, 4, 50], [65, 6, 78],
  ];
  for (const [s1, t1, s2] of speedCases) {
    const dist = s1 * t1;
    const t2 = dist / s2;
    push(
      'تناسب راست و معکوس',
      'Direct and Inverse Proportion',
      `ایک گاڑی ${s1} کلومیٹر فی گھنٹہ کی رفتار سے سفر کر کے ${t1} گھنٹے میں منزل پر پہنچتی ہے۔ اگر رفتار ${s2} کلومیٹر فی گھنٹہ ہو تو وہ کتنا وقت لے گی؟`,
      `A car traveling at ${s1} km/h reaches a destination in ${t1} hours. How long will it take at ${s2} km/h?`,
      `${t2} گھنٹے`,
      `${t2} hours`,
      [`${t2 + 1} گھنٹے`, `${Math.max(1, t2 - 1)} گھنٹے`, `${t1 + 1} گھنٹے`],
      [`${t2 + 1} hours`, `${Math.max(1, t2 - 1)} hours`, `${t1 + 1} hours`],
      `فاصلہ = ${s1} × ${t1} = ${dist} کلومیٹر۔ ${s2} کلومیٹر فی گھنٹہ کی رفتار سے وقت = ${dist} ÷ ${s2} = ${t2} گھنٹے۔`,
      `Distance = ${s1} × ${t1} = ${dist} km. Time at ${s2} km/h = ${dist} ÷ ${s2} = ${t2} hours.`,
      [
        `پہلے کل طے شدہ فاصلہ معلوم کریں:\nفاصلہ = رفتار × وقت = ${s1} × ${t1} = ${dist} کلومیٹر`,
        `اب نئی رفتار (${s2} کلومیٹر فی گھنٹہ) سے وقت نکالنے کا کلیہ لگائیں:\nوقت = فاصلہ ÷ نئی رفتار`,
        `تقسیم کا عمل مکمل کریں:\n${dist} ÷ ${s2} = ${t2} گھنٹے`,
      ],
      [
        `First find the total distance:\nDistance = Speed × Time = ${s1} × ${t1} = ${dist} km`,
        `Use the new speed (${s2} km/h) to find time:\nTime = Distance ÷ New Speed`,
        `Divide:\n${dist} ÷ ${s2} = ${t2} hours`,
      ]
    );
  }

  return list;
}

export const NUMBERS_QUESTIONS: MCQQuestion[] = [
  ...createNumbersEasy(),
  ...createNumbersMedium(),
  ...createNumbersHard(),
];
