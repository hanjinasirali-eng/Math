import { MCQQuestion } from '../../types/math';
import { buildBilingualMCQ } from '../mathUtils';

function createAlgebraEasy(): MCQQuestion[] {
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
        id: `alg-e-${idx}`,
        chapterId: 'algebra',
        difficulty: 'easy',
        seed: idx * 5 + 2,
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

  // 15 conceptual questions
  push(
    'الجبری جملے',
    'Algebraic Expressions',
    'درج ذیل میں سے کون سا الجبری جملہ دو رقمی ہے؟',
    'Which of the following algebraic expressions is a binomial?',
    '3x + 5',
    '3x + 5',
    ['7xy', 'x² + 2x + 1', '4a²b'],
    ['7xy', 'x² + 2x + 1', '4a²b'],
    'دو رقمی جملے میں دو غیر مشابہ ارکان ہوتے ہیں۔ جملہ 3x + 5 میں دو ارکان ہیں۔',
    'A binomial contains two unlike terms. The expression 3x + 5 has two terms.',
    [
      'دو رقمی جملے کی تعریف لکھیں:\nوہ الجبری جملہ جس میں + یا − کی علامت سے جڑے دو غیر مشابہ ارکان ہوں، دو رقمی کہلاتا ہے۔',
      'تمام آپشنز کے ارکان گنیں:\n7xy اور 4a²b میں 1 رکن (یک رقمی)، x² + 2x + 1 میں 3 ارکان (سہ رقمی) ہیں۔',
      'جملہ 3x + 5 میں دو غیر مشابہ ارکان (3x اور 5) ہیں، اس لیے یہی دو رقمی جملہ ہے۔',
    ],
    [
      'Recall the definition of a binomial:\nAn algebraic expression with two unlike terms connected by + or − is called a binomial.',
      'Count the terms in each option:\n7xy and 4a²b have 1 term (monomials), while x² + 2x + 1 has 3 terms (trinomial).',
      'The expression 3x + 5 has two unlike terms (3x and 5), so it is a binomial.',
    ]
  );
  push(
    'الجبری جملے',
    'Algebraic Expressions',
    'رکن -9x²yz میں x²y کا عددی سر کیا ہے؟',
    'What is the numerical coefficient in the term -9x²yz?',
    '-9',
    '-9',
    ['9', '-9z', '2'],
    ['9', '-9z', '2'],
    'رکن -9x²yz میں متغیرات کے ساتھ ضرب کھانے والا عدد -9 ہے۔',
    'In the term -9x²yz, the number multiplied by the variables is -9.',
    [
      'عددی سر کی تعریف سمجھیں:\nکسی الجبری رکن میں متغیرات کے ساتھ ضرب کھانے والا عددی حصہ اس کا عددی سر کہلاتا ہے۔',
      'دیے گئے رکن -9x²yz کو حصوں میں دیکھیں:\nعددی حصہ = -9 اور متغیرات = x²yz',
      'چنانچہ عددی سر -9 ہے۔',
    ],
    [
      'Recall what a numerical coefficient is:\nIt is the constant number factor multiplied by the variable part of a term.',
      'Break the term -9x²yz into parts:\nNumerical factor = -9 and variable part = x²yz',
      'Therefore, the numerical coefficient is -9.',
    ]
  );
  push(
    'الجبری جملے',
    'Algebraic Expressions',
    'کون سا جوڑا مشابہ ارکان پر مشتمل ہے؟',
    'Which pair consists of like terms?',
    '4x²y اور -7yx²',
    '4x²y and -7yx²',
    ['4x²y اور 4xy²', '3x اور 3y', '5a² اور 5a³'],
    ['4x²y and 4xy²', '3x and 3y', '5a² and 5a³'],
    'مشابہ ارکان میں متغیرات اور ان کے قوت نما ایک جیسے ہوتے ہیں: x²y اور yx² برابر ہیں۔',
    'Like terms have the exact same variables raised to the same powers: x²y is identical to yx².',
    [
      'مشابہ ارکان کی شرط لکھیں:\nدو ارکان تب مشابہ ہوتے ہیں جب ان کے متغیرات اور ان کی قوتیں بالکل یکساں ہوں۔',
      'پہلے جوڑے کا موازنہ کریں:\n4x²y میں x کی قوت 2 اور y کی قوت 1 ہے۔\n-7yx² میں بھی x کی قوت 2 اور y کی قوت 1 ہے (کیونکہ x²y = yx²)۔',
      'دوسرے آپشنز میں متغیرات یا ان کی قوتیں مختلف ہیں، اس لیے درست جوڑا 4x²y اور -7yx² ہے۔',
    ],
    [
      'State the rule for like terms:\nTwo terms are like terms if they contain the same variables raised to the exact same exponents.',
      'Inspect 4x²y and -7yx²:\nBoth have x² and y¹ (since x²y = yx²).',
      'In the other pairs, either the variables or their powers differ, so 4x²y and -7yx² are like terms.',
    ]
  );
  push(
    'الجبری جملے',
    'Algebraic Expressions',
    'کثیر رقمی 5x³ − 4x² + 7x − 2 کا درجہ کیا ہے؟',
    'What is the degree of the polynomial 5x³ − 4x² + 7x − 2?',
    '3',
    '3',
    ['5', '2', '4'],
    ['5', '2', '4'],
    'یک متغیری کثیر رقمی کا درجہ متغیر کا سب سے بڑا قوت نما ہوتا ہے، جو یہاں 3 ہے۔',
    'The degree of a polynomial in one variable is the highest power of the variable, which is 3.',
    [
      'کثیر رقمی کے درجے کی تعریف:\nیک متغیری کثیر رقمی میں متغیر کی سب سے بڑی قوت (قوت نما) کو کثیر رقمی کا درجہ کہتے ہیں۔',
      'ہر رکن میں x کا قوت نما دیکھیں:\n5x³ میں 3، -4x² میں 2، 7x میں 1 اور -2 میں 0۔',
      'سب سے بڑا قوت نما 3 ہے، اس لیے کثیر رقمی کا درجہ 3 ہے۔',
    ],
    [
      'Definition of degree of a polynomial:\nIt is the highest exponent of the variable in the polynomial.',
      'Check the power of x in each term:\n5x³ has power 3, -4x² has 2, 7x has 1, and -2 has 0.',
      'The greatest exponent is 3, so the degree of the polynomial is 3.',
    ]
  );
  push(
    'الجبری جملے',
    'Algebraic Expressions',
    'سہ رقمی جملے میں کتنے ارکان ہوتے ہیں؟',
    'How many unlike terms does a trinomial have?',
    '3',
    '3',
    ['1', '2', '4'],
    ['1', '2', '4'],
    'سہ رقمی جملے میں بالکل 3 غیر مشابہ ارکان ہوتے ہیں۔',
    'A trinomial has exactly 3 unlike terms.',
    [
      'لفظ "سہ" کے معنی 3 کے ہیں۔',
      'مثال کے طور پر x² + 2x + 1 ایک سہ رقمی جملہ ہے جس میں تین غیر مشابہ ارکان ہیں۔',
      'اس لیے سہ رقمی جملے میں بالکل 3 ارکان ہوتے ہیں۔',
    ],
    [
      'The prefix "tri-" means 3.',
      'For example, x² + 2x + 1 is a trinomial because it contains three unlike terms.',
      'Therefore, a trinomial has exactly 3 terms.',
    ]
  );
  push(
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    'کلیہ (a + b)² کس کے برابر ہے؟',
    'What is the identity (a + b)² equal to?',
    'a² + 2ab + b²',
    'a² + 2ab + b²',
    ['a² + b²', 'a² − 2ab + b²', 'a² − b²'],
    ['a² + b²', 'a² − 2ab + b²', 'a² − b²'],
    '(a + b)(a + b) کو پھیلانے سے a² + 2ab + b² حاصل ہوتا ہے۔',
    'Expanding (a + b)(a + b) gives a² + 2ab + b².',
    [
      'مربع کو دو مرتبہ ضرب کی صورت میں لکھیں:\n(a + b)² = (a + b)(a + b)',
      'تقسیمی خاصیت سے ضرب دیں:\na(a + b) + b(a + b) = a² + ab + ba + b²',
      'مشابہ ارکان ab + ba = 2ab جمع کریں:\na² + 2ab + b²',
    ],
    [
      'Write the square as a product of two binomials:\n(a + b)² = (a + b)(a + b)',
      'Apply the distributive property:\na(a + b) + b(a + b) = a² + ab + ba + b²',
      'Combine like terms (ab + ba = 2ab):\na² + 2ab + b²',
    ]
  );
  push(
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    'کلیہ a² − b² کس کے برابر ہے؟',
    'What is the identity a² − b² equal to?',
    '(a + b)(a − b)',
    '(a + b)(a − b)',
    ['(a − b)²', '(a + b)²', 'a² − 2ab + b²'],
    ['(a − b)²', '(a + b)²', 'a² − 2ab + b²'],
    'دو مربعوں کا فرق (a + b)(a − b) کے برابر ہوتا ہے۔',
    'The difference of two squares equals (a + b)(a − b).',
    [
      'الجبری کلیے (a + b)(a − b) کو ضرب دے کر جانچیں:\na(a − b) + b(a − b)',
      'بریکٹ کھولیں:\na² − ab + ab − b²',
      '-ab اور +ab آپس میں کٹ جاتے ہیں، پس:\na² − b² = (a + b)(a − b)',
    ],
    [
      'Multiply out (a + b)(a − b) to verify:\na(a − b) + b(a − b)',
      'Expand the brackets:\na² − ab + ab − b²',
      'The middle terms -ab and +ab cancel out, leaving:\na² − b² = (a + b)(a − b)',
    ]
  );
  push(
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    '(x − 3)² کی توسیع کیا ہوگی؟',
    'What is the expansion of (x − 3)²?',
    'x² − 6x + 9',
    'x² − 6x + 9',
    ['x² − 9', 'x² + 6x + 9', 'x² − 3x + 9'],
    ['x² − 9', 'x² + 6x + 9', 'x² − 3x + 9'],
    'کلیہ (a − b)² = a² − 2ab + b² استعمال کرتے ہوئے: x² − 2(x)(3) + 3² = x² − 6x + 9۔',
    'Using (a − b)² = a² − 2ab + b²: x² − 2(x)(3) + 3² = x² − 6x + 9.',
    [
      'بنیادی کلیہ لکھیں:\n(a − b)² = a² − 2ab + b²',
      'یہاں a = x اور b = 3 درج کریں:\n(x)² − 2(x)(3) + (3)²',
      'حساب مکمل کریں:\nx² − 6x + 9',
    ],
    [
      'Write the identity:\n(a − b)² = a² − 2ab + b²',
      'Substitute a = x and b = 3:\n(x)² − 2(x)(3) + (3)²',
      'Simplify:\nx² − 6x + 9',
    ]
  );
  push(
    'خطی مساوات',
    'Linear Equations',
    'خطی مساوات میں متغیر کی زیادہ سے زیادہ طاقت کتنی ہوتی ہے؟',
    'What is the highest power of the variable in a linear equation?',
    '1',
    '1',
    ['2', '0', '3'],
    ['2', '0', '3'],
    'خطی مساوات میں متغیر کا درجہ ہمیشہ 1 ہوتا ہے۔',
    'In a linear equation, the highest exponent (degree) of the variable is always 1.',
    [
      'خطی مساوات کی معیاری صورت لکھیں:\nax + b = 0 (جہاں a ≠ 0)',
      'اس میں متغیر x کی قوت x¹ یعنی 1 ہے۔',
      'اس لیے خطی مساوات میں متغیر کی زیادہ سے زیادہ طاقت 1 ہوتی ہے۔',
    ],
    [
      'Write the standard form of a linear equation:\nax + b = 0 (where a ≠ 0)',
      'Here the power of x is x¹, which is 1.',
      'Thus, the highest power of the variable in a linear equation is 1.',
    ]
  );
  push(
    'خطی مساوات',
    'Linear Equations',
    'اگر x − 7 = 15 ہو تو x کی قیمت کیا ہے؟',
    'If x − 7 = 15, what is the value of x?',
    '22',
    '22',
    ['8', '-8', '105'],
    ['8', '-8', '105'],
    'دونوں طرف 7 جمع کرنے سے x = 15 + 7 = 22 حاصل ہوتا ہے۔',
    'Adding 7 to both sides gives x = 15 + 7 = 22.',
    [
      'دی گئی مساوات لکھیں:\nx − 7 = 15',
      'دونوں طرف 7 جمع کریں (یا -7 کو دائیں طرف لے جائیں):\nx = 15 + 7',
      'جمع کریں:\nx = 22',
    ],
    [
      'Write the given equation:\nx − 7 = 15',
      'Add 7 to both sides (transpose -7 to the right side):\nx = 15 + 7',
      'Add:\nx = 22',
    ]
  );
  push(
    'تجزی',
    'Factorization',
    '6ab اور 12a² کا مشترک جزو کیا ہے؟',
    'What is the highest common factor of 6ab and 12a²?',
    '6a',
    '6a',
    ['6ab', '12a', 'a²'],
    ['6ab', '12a', 'a²'],
    '6ab = 6 × a × b اور 12a² = 6 × 2 × a × a، لہٰذا سب سے بڑا مشترک جزو 6a ہے۔',
    '6ab = 6 × a × b and 12a² = 6 × 2 × a × a, so the common factor is 6a.',
    [
      'دونوں ارکان کے مفرد اجزائے ضربی لکھیں:\n6ab = 2 × 3 × a × b\n12a² = 2 × 2 × 3 × a × a',
      'دونوں میں مشترک عوامل منتخب کریں:\n2 × 3 × a',
      'مشترک عوامل کو ضرب دیں:\n6 × a = 6a',
    ],
    [
      'Factor each term completely:\n6ab = 2 × 3 × a × b\n12a² = 2 × 2 × 3 × a × a',
      'Pick the factors common to both terms:\n2 × 3 × a',
      'Multiply the common factors:\n6 × a = 6a',
    ]
  );
  push(
    'تجزی',
    'Factorization',
    'مکمل تجزی کریں: 5x + 20۔',
    'Factorize completely: 5x + 20.',
    '5(x + 4)',
    '5(x + 4)',
    ['5(x + 20)', '4(x + 5)', '5x(1 + 4)'],
    ['5(x + 20)', '4(x + 5)', '5x(1 + 4)'],
    'مشترک جزو 5 باہر نکالنے سے 5(x + 4) حاصل ہوتا ہے۔',
    'Taking out the common factor 5 gives 5(x + 4).',
    [
      'دونوں ارکان کو 5 کے مضاعف کی صورت میں لکھیں:\n5x + 20 = 5(x) + 5(4)',
      'مشترک عددی جزو 5 کو بریکٹ کے باہر نکالیں:\n5(x + 4)',
      'تصدیق: 5 × x + 5 × 4 = 5x + 20',
    ],
    [
      'Rewrite each term as a multiple of 5:\n5x + 20 = 5(x) + 5(4)',
      'Factor out the common factor 5:\n5(x + 4)',
      'Check: 5 × x + 5 × 4 = 5x + 20',
    ]
  );
  push(
    'الجبری جملے',
    'Algebraic Expressions',
    '3x اور -4x² کا حاصلِ ضرب کیا ہے؟',
    'What is the product of 3x and -4x²?',
    '-12x³',
    '-12x³',
    ['-12x²', '12x³', '-x³'],
    ['-12x²', '12x³', '-x³'],
    'عددی سروں کو ضرب دیں (3 × -4 = -12) اور قوت نما جمع کریں (x¹ × x² = x³)۔',
    'Multiply the coefficients (3 × -4 = -12) and add the exponents (x¹ × x² = x³).',
    [
      'عددی سروں اور متغیرات کو الگ الگ ضرب کی صورت میں لکھیں:\n(3 × -4) × (x¹ × x²)',
      'عددی سروں کو ضرب دیں: 3 × -4 = -12',
      'قانونِ قوت نما (xᵐ × xⁿ = xᵐ⁺ⁿ) سے متغیر حل کریں:\nx¹⁺² = x³\nکل حاصلِ ضرب = -12x³',
    ],
    [
      'Group the numerical coefficients and variables separately:\n(3 × -4) × (x¹ × x²)',
      'Multiply the numbers: 3 × -4 = -12',
      'Apply the exponent law (xᵐ × xⁿ = xᵐ⁺ⁿ):\nx¹⁺² = x³\nProduct = -12x³',
    ]
  );
  push(
    'الجبری جملے',
    'Algebraic Expressions',
    'جب x = 4 ہو تو جملہ 2x + 5 کی قیمت معلوم کریں۔',
    'Find the value of the expression 2x + 5 when x = 4.',
    '13',
    '13',
    ['11', '29', '14'],
    ['11', '29', '14'],
    'x = 4 درج کرنے پر: 2(4) + 5 = 8 + 5 = 13۔',
    'Substituting x = 4 gives 2(4) + 5 = 8 + 5 = 13.',
    [
      'دیا گیا جملہ لکھیں:\n2x + 5',
      'جملے میں x کی جگہ 4 درج کریں:\n2(4) + 5',
      'پہلے ضرب اور پھر جمع کریں:\n8 + 5 = 13',
    ],
    [
      'Write the given expression:\n2x + 5',
      'Substitute x = 4:\n2(4) + 5',
      'Multiply first, then add:\n8 + 5 = 13',
    ]
  );
  push(
    'خطی مساوات',
    'Linear Equations',
    '"عدد n کے دوگنا سے 5 زیادہ 19 ہے" کے لیے کون سی مساوات درست ہے؟',
    'Which equation represents "5 more than twice a number n is 19"?',
    '2n + 5 = 19',
    '2n + 5 = 19',
    ['5n + 2 = 19', '2(n + 5) = 19', '2n − 5 = 19'],
    ['5n + 2 = 19', '2(n + 5) = 19', '2n − 5 = 19'],
    '"n کا دوگنا" 2n ہے اور "2n سے 5 زیادہ" 2n + 5 ہے۔',
    '"Twice a number n" is 2n, and "5 more than 2n" is 2n + 5.',
    [
      'عبارت کے پہلے حصے کو الجبرا میں لکھیں:\nعدد n کا دوگنا = 2 × n = 2n',
      'اس میں 5 زیادہ کرنے کے لیے 5 جمع کریں:\n2n + 5',
      'یہ جملہ 19 کے برابر ہے، پس مساوات:\n2n + 5 = 19',
    ],
    [
      'Translate the first phrase into algebra:\nTwice the number n = 2 × n = 2n',
      'Add 5 to express "5 more than 2n":\n2n + 5',
      'Set it equal to 19:\n2n + 5 = 19',
    ]
  );

  // 25 simple linear equations
  for (let i = 1; i <= 25; i++) {
    const a = (i % 6) + 2;
    const x = (i % 11) + 2;
    const b = i + 3;
    const rhs = a * x + b;
    const diff = rhs - b;
    push(
      'خطی مساوات',
      'Linear Equations',
      `x کے لیے حل کریں: ${a}x + ${b} = ${rhs}۔`,
      `Solve for x: ${a}x + ${b} = ${rhs}.`,
      `${x}`,
      `${x}`,
      [`${x + 2}`, `${Math.max(1, x - 1)}`, `${diff}`],
      [`${x + 2}`, `${Math.max(1, x - 1)}`, `${diff}`],
      `${b} تفریق کریں: ${a}x = ${diff}۔ پھر ${a} پر تقسیم کریں: x = ${x}۔`,
      `Subtract ${b}: ${a}x = ${diff}. Then divide by ${a}: x = ${x}.`,
      [
        `دی گئی مساوات لکھیں:\n${a}x + ${b} = ${rhs}`,
        `دونوں طرف سے ${b} تفریق کریں:\n${a}x = ${rhs} − ${b} = ${diff}`,
        `دونوں طرف ${a} سے تقسیم کریں:\nx = ${diff} ÷ ${a} = ${x}`,
      ],
      [
        `Write the given equation:\n${a}x + ${b} = ${rhs}`,
        `Subtract ${b} from both sides:\n${a}x = ${rhs} − ${b} = ${diff}`,
        `Divide both sides by ${a}:\nx = ${diff} ÷ ${a} = ${x}`,
      ]
    );
  }

  // 20 evaluating algebraic expressions
  for (let i = 1; i <= 20; i++) {
    const a = (i % 5) + 2;
    const b = (i % 4) + 1;
    const xVal = (i % 6) + 1;
    const term1 = a * xVal * xVal;
    const term2 = b * xVal;
    const ans = term1 - term2;
    push(
      'الجبری جملے',
      'Algebraic Expressions',
      `جب x = ${xVal} ہو تو ${a}x² − ${b}x کی قیمت معلوم کریں۔`,
      `Evaluate ${a}x² − ${b}x when x = ${xVal}.`,
      `${ans}`,
      `${ans}`,
      [`${ans + a}`, `${a * xVal - b}`, `${ans - b}`],
      [`${ans + a}`, `${a * xVal - b}`, `${ans - b}`],
      `${a}(${xVal})² − ${b}(${xVal}) = ${term1} − ${term2} = ${ans}۔`,
      `${a}(${xVal})² − ${b}(${xVal}) = ${term1} − ${term2} = ${ans}.`,
      [
        `دیے گئے جملے میں x = ${xVal} درج کریں:\n${a}(${xVal})² − ${b}(${xVal})`,
        `مربع اور ضرب کے عمل حل کریں:\n${a} × ${xVal * xVal} − ${term2} = ${term1} − ${term2}`,
        `تفریق کریں:\n${term1} − ${term2} = ${ans}`,
      ],
      [
        `Substitute x = ${xVal} into the expression:\n${a}(${xVal})² − ${b}(${xVal})`,
        `Evaluate the square and multiply:\n${a} × ${xVal * xVal} − ${term2} = ${term1} − ${term2}`,
        `Subtract:\n${term1} − ${term2} = ${ans}`,
      ]
    );
  }

  // 20 monomial multiplication and combining like terms
  for (let i = 1; i <= 20; i++) {
    const c1 = i + 1;
    const c2 = (i % 5) + 2;
    if (i <= 10) {
      const prod = c1 * c2;
      push(
        'الجبری جملے',
        'Algebraic Expressions',
        `${c1}xy اور ${c2}x²y کا حاصلِ ضرب معلوم کریں۔`,
        `Find the product of ${c1}xy and ${c2}x²y.`,
        `${prod}x³y²`,
        `${prod}x³y²`,
        [`${prod}x²y`, `${c1 + c2}x³y²`, `${prod}x³y`],
        [`${prod}x²y`, `${c1 + c2}x³y²`, `${prod}x³y`],
        `عددی سروں کو ضرب دیں (${c1} × ${c2} = ${prod}) اور x اور y کے قوت نما جمع کریں: ${prod}x³y²۔`,
        `Multiply the coefficients (${c1} × ${c2} = ${prod}) and add exponents of x and y to get ${prod}x³y².`,
        [
          `عددی سروں اور متغیرات کو الگ کر کے لکھیں:\n(${c1} × ${c2}) × (x¹ × x²) × (y¹ × y¹)`,
          `عددی سروں کو ضرب دیں: ${c1} × ${c2} = ${prod}`,
          `یکساں متغیرات کے قوت نما جمع کریں (x¹⁺² = x³، y¹⁺¹ = y²):\n${prod}x³y²`,
        ],
        [
          `Group coefficients and like variables:\n(${c1} × ${c2}) × (x¹ × x²) × (y¹ × y¹)`,
          `Multiply coefficients: ${c1} × ${c2} = ${prod}`,
          `Add exponents of like variables (x¹⁺² = x³, y¹⁺¹ = y²):\n${prod}x³y²`,
        ]
      );
    } else {
      const sum = c1 + c2;
      push(
        'الجبری جملے',
        'Algebraic Expressions',
        `مشابہ ارکان کو جمع کریں: ${c1}a²b + ${c2}a²b۔`,
        `Add the like terms: ${c1}a²b + ${c2}a²b.`,
        `${sum}a²b`,
        `${sum}a²b`,
        [`${c1 * c2}a²b`, `${sum}a⁴b²`, `${Math.abs(c1 - c2)}a²b`],
        [`${c1 * c2}a²b`, `${sum}a⁴b²`, `${Math.abs(c1 - c2)}a²b`],
        `مشابہ ارکان کے عددی سروں کو جمع کریں: (${c1} + ${c2})a²b = ${sum}a²b۔`,
        `Add the numerical coefficients of the like terms: (${c1} + ${c2})a²b = ${sum}a²b.`,
        [
          `دونوں ارکان میں مشترک متغیر a²b کو الگ کریں:\n(${c1} + ${c2})a²b`,
          `عددی سروں کو جمع کریں:\n${c1} + ${c2} = ${sum}`,
          `متغیر ساتھ لکھنے پر حتمی جواب:\n${sum}a²b`,
        ],
        [
          `Factor out the common variable part a²b:\n(${c1} + ${c2})a²b`,
          `Add the coefficients:\n${c1} + ${c2} = ${sum}`,
          `Write the final term:\n${sum}a²b`,
        ]
      );
    }
  }

  // 20 simple common-factor factorization
  for (let i = 1; i <= 20; i++) {
    const k = (i % 7) + 2;
    const m = i + 2;
    const a = k * 1;
    const b = k * m;
    push(
      'تجزی',
      'Factorization',
      `تجزی کریں: ${a}x + ${b}۔`,
      `Factorize: ${a}x + ${b}.`,
      `${k}(x + ${m})`,
      `${k}(x + ${m})`,
      [`${k}(x + ${b})`, `${m}(x + ${k})`, `${k}(x − ${m})`],
      [`${k}(x + ${b})`, `${m}(x + ${k})`, `${k}(x − ${m})`],
      `${a}x اور ${b} کا عادِ اعظم ${k} ہے۔ ${k} مشترک لینے پر ${k}(x + ${m}) حاصل ہوتا ہے۔`,
      `The HCF of ${a}x and ${b} is ${k}. Factoring out ${k} gives ${k}(x + ${m}).`,
      [
        `دونوں ارکان ${a}x اور ${b} کا سب سے بڑا مشترک عددی جزو معلوم کریں، جو ${k} ہے:\n${a}x + ${b} = ${k}(x) + ${k}(${m})`,
        `مشترک جزو ${k} کو بریکٹ سے باہر نکالیں:\n${k}(x + ${m})`,
        `تصدیق: ${k} × x + ${k} × ${m} = ${a}x + ${b}`,
      ],
      [
        `Find the greatest common factor of ${a}x and ${b}, which is ${k}:\n${a}x + ${b} = ${k}(x) + ${k}(${m})`,
        `Factor ${k} out of both terms:\n${k}(x + ${m})`,
        `Check: ${k} × x + ${k} × ${m} = ${a}x + ${b}`,
      ]
    );
  }

  return list;
}

function createAlgebraMedium(): MCQQuestion[] {
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
        id: `alg-m-${idx}`,
        chapterId: 'algebra',
        difficulty: 'medium',
        seed: idx * 9 + 4,
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
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    'مناسب الجبری کلیہ استعمال کرتے ہوئے 98² کی قیمت معلوم کریں۔',
    'Evaluate 98² using a suitable algebraic identity.',
    '9604',
    '9604',
    ['9600', '9404', '9804'],
    ['9600', '9404', '9804'],
    '(100 − 2)² = 100² − 2(100)(2) + 2² = 10000 − 400 + 4 = 9604۔',
    '(100 − 2)² = 100² − 2(100)(2) + 2² = 10000 − 400 + 4 = 9604.',
    [
      '98 کو (100 − 2) لکھیں اور کلیہ (a − b)² = a² − 2ab + b² لگائیں:\n(100 − 2)² = 100² − 2(100)(2) + 2²',
      'مربع اور ضرب حل کریں:\n10000 − 400 + 4',
      'تفریق اور جمع مکمل کریں:\n9600 + 4 = 9604',
    ],
    [
      'Write 98 as (100 − 2) and apply (a − b)² = a² − 2ab + b²:\n(100 − 2)² = 100² − 2(100)(2) + 2²',
      'Evaluate the squares and product:\n10000 − 400 + 4',
      'Simplify:\n9600 + 4 = 9604',
    ]
  );
  push(
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    'کلیہ (a + b)(a − b) = a² − b² استعمال کرتے ہوئے 103 × 97 کی قیمت معلوم کریں۔',
    'Evaluate 103 × 97 using the identity (a + b)(a − b) = a² − b².',
    '9991',
    '9991',
    ['9999', '9981', '10009'],
    ['9999', '9981', '10009'],
    '(100 + 3)(100 − 3) = 100² − 3² = 10000 − 9 = 9991۔',
    '(100 + 3)(100 − 3) = 100² − 3² = 10000 − 9 = 9991.',
    [
      '103 اور 97 کو 100 کے قریب لکھیں:\n(100 + 3)(100 − 3)',
      'کلیہ (a + b)(a − b) = a² − b² لگائیں:\n100² − 3² = 10000 − 9',
      'تفریق مکمل کریں:\n9991',
    ],
    [
      'Rewrite 103 and 97 around 100:\n(100 + 3)(100 − 3)',
      'Apply (a + b)(a − b) = a² − b²:\n100² − 3² = 10000 − 9',
      'Subtract:\n9991',
    ]
  );
  push(
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    '4c(−a + b + c) میں سے 3a(a + b + c) − 2b(a − b + c) تفریق کرنے پر c² کا عددی سر کیا ہوگا؟',
    'What is the coefficient of c² when 3a(a + b + c) − 2b(a − b + c) is subtracted from 4c(−a + b + c)?',
    '4',
    '4',
    ['-4', '2', '1'],
    ['-4', '2', '1'],
    'صرف 4c(c) = 4c² سے c² والا رکن بنتا ہے، اس لیے اس کا عددی سر 4 ہے۔',
    'Only 4c(c) = 4c² produces a c² term, so its coefficient is 4.',
    [
      'پہلے جملے 4c(−a + b + c) کو کھولیں:\n-4ac + 4bc + 4c²',
      'دوسرے جملے 3a(a + b + c) − 2b(a − b + c) کو کھولیں:\n3a² + 3ab + 3ac − 2ab + 2b² − 2bc\nاس میں کوئی c² والا رکن نہیں ہے۔',
      'تفریق کرنے کے بعد c² کا واحد رکن 4c² بچتا ہے، اس لیے عددی سر 4 ہے۔',
    ],
    [
      'Expand the first expression 4c(−a + b + c):\n-4ac + 4bc + 4c²',
      'Expand 3a(a + b + c) − 2b(a − b + c):\n3a² + 3ab + 3ac − 2ab + 2b² − 2bc\nNotice there is no c² term here.',
      'After subtraction, the only c² term is 4c², so the coefficient is 4.',
    ]
  );
  push(
    'تجزی',
    'Factorization',
    'تجزی کریں: 4p² − 9q²۔',
    'Factorize: 4p² − 9q².',
    '(2p + 3q)(2p − 3q)',
    '(2p + 3q)(2p − 3q)',
    ['(2p − 3q)²', '(4p + 9q)(4p − 9q)', '(2p + 9q)(2p − q)'],
    ['(2p − 3q)²', '(4p + 9q)(4p − 9q)', '(2p + 9q)(2p − q)'],
    '4p² − 9q² = (2p)² − (3q)² = (2p + 3q)(2p − 3q)۔',
    '4p² − 9q² = (2p)² − (3q)² = (2p + 3q)(2p − 3q).',
    [
      'دونوں ارکان کو مکمل مربع کی صورت میں لکھیں:\n4p² − 9q² = (2p)² − (3q)²',
      'دو مربعوں کے فرق کا کلیہ a² − b² = (a + b)(a − b) لگائیں (جہاں a = 2p اور b = 3q)۔',
      'قیمتیں درج کریں:\n(2p + 3q)(2p − 3q)',
    ],
    [
      'Write both terms as perfect squares:\n4p² − 9q² = (2p)² − (3q)²',
      'Apply a² − b² = (a + b)(a − b) with a = 2p and b = 3q.',
      'Substitute:\n(2p + 3q)(2p − 3q)',
    ]
  );
  push(
    'تجزی',
    'Factorization',
    'گروہ بندی سے تجزی کریں: xy + x + y + 1۔',
    'Factorize by grouping: xy + x + y + 1.',
    '(x + 1)(y + 1)',
    '(x + 1)(y + 1)',
    ['(x + y)(x + 1)', '(x − 1)(y + 1)', 'x(y + 1) + 1'],
    ['(x + y)(x + 1)', '(x − 1)(y + 1)', 'x(y + 1) + 1'],
    'xy + x + y + 1 = x(y + 1) + 1(y + 1) = (x + 1)(y + 1)۔',
    'xy + x + y + 1 = x(y + 1) + 1(y + 1) = (x + 1)(y + 1).',
    [
      'پہلے دو اور آخری دو ارکان کے گروہ بنائیں:\n(xy + x) + (y + 1)',
      'پہلے گروہ سے x اور دوسرے گروہ سے 1 مشترک لیں:\nx(y + 1) + 1(y + 1)',
      'مشترک دو رقمی جزو (y + 1) باہر نکالیں:\n(x + 1)(y + 1)',
    ],
    [
      'Group the first two terms and the last two terms:\n(xy + x) + (y + 1)',
      'Factor x from the first group and 1 from the second:\nx(y + 1) + 1(y + 1)',
      'Factor out the common binomial (y + 1):\n(x + 1)(y + 1)',
    ]
  );
  push(
    'خطی مساوات',
    'Linear Equations',
    'حل کریں: (2x − 3)/5 = 3۔',
    'Solve: (2x − 3)/5 = 3.',
    '9',
    '9',
    ['6', '12', '3'],
    ['6', '12', '3'],
    '5 سے ضرب دینے پر: 2x − 3 = 15 ⇐ 2x = 18 ⇐ x = 9۔',
    'Multiplying by 5 gives 2x − 3 = 15, so 2x = 18 and x = 9.',
    [
      'مساوات کے دونوں طرف 5 سے ضرب دیں:\n2x − 3 = 3 × 5 = 15',
      'دونوں طرف 3 جمع کریں:\n2x = 15 + 3 = 18',
      'دونوں طرف 2 سے تقسیم کریں:\nx = 18 ÷ 2 = 9',
    ],
    [
      'Multiply both sides by 5:\n2x − 3 = 3 × 5 = 15',
      'Add 3 to both sides:\n2x = 15 + 3 = 18',
      'Divide both sides by 2:\nx = 18 ÷ 2 = 9',
    ]
  );
  push(
    'خطی مساوات',
    'Linear Equations',
    'اگر (x/2) + (x/3) = 10 ہو تو x معلوم کریں۔',
    'Find x if (x/2) + (x/3) = 10.',
    '12',
    '12',
    ['6', '15', '10'],
    ['6', '15', '10'],
    '5x/6 = 10 ⇐ 5x = 60 ⇐ x = 12۔',
    '5x/6 = 10 implies 5x = 60, so x = 12.',
    [
      'مخارج 2 اور 3 کا ذواضعافِ اقل 6 لے کر بائیں طرف جمع کریں:\n(3x + 2x) / 6 = 10 ⇐ 5x / 6 = 10',
      'دونوں طرف 6 سے ضرب دیں:\n5x = 10 × 6 = 60',
      '5 پر تقسیم کریں:\nx = 60 ÷ 5 = 12',
    ],
    [
      'Take the LCM of 2 and 3, which is 6, on the left side:\n(3x + 2x) / 6 = 10 => 5x / 6 = 10',
      'Multiply both sides by 6:\n5x = 10 × 6 = 60',
      'Divide by 5:\nx = 60 ÷ 5 = 12',
    ]
  );
  push(
    'الجبری جملے',
    'Algebraic Expressions',
    '(2x + 5y)² کی توسیع کریں۔',
    'Expand (2x + 5y)².',
    '4x² + 20xy + 25y²',
    '4x² + 20xy + 25y²',
    ['4x² + 10xy + 25y²', '4x² + 25y²', '2x² + 20xy + 5y²'],
    ['4x² + 10xy + 25y²', '4x² + 25y²', '2x² + 20xy + 5y²'],
    '(2x)² + 2(2x)(5y) + (5y)² = 4x² + 20xy + 25y²۔',
    '(2x)² + 2(2x)(5y) + (5y)² = 4x² + 20xy + 25y².',
    [
      'کلیہ (a + b)² = a² + 2ab + b² لکھیں جہاں a = 2x اور b = 5y ہے۔',
      'کلیے میں قیمتیں درج کریں:\n(2x)² + 2(2x)(5y) + (5y)²',
      'ہر رکن کا مربع اور ضرب حل کریں:\n4x² + 20xy + 25y²',
    ],
    [
      'Use (a + b)² = a² + 2ab + b² with a = 2x and b = 5y.',
      'Substitute into the identity:\n(2x)² + 2(2x)(5y) + (5y)²',
      'Simplify each term:\n4x² + 20xy + 25y²',
    ]
  );
  push(
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    'جملے x² + 6x میں کیا جمع کیا جائے کہ یہ کامل مربع بن جائے؟',
    'What should be added to x² + 6x to make it a perfect square?',
    '9',
    '9',
    ['3', '6', '36'],
    ['3', '6', '36'],
    'x² + 2(x)(3) + 3² سے موازنہ کرنے پر (x + 3)² بنانے کے لیے 3² = 9 درکار ہے۔',
    'Comparing with x² + 2(x)(3) + 3², we need 3² = 9 to form (x + 3)².',
    [
      'کامل مربع کے کلیے a² + 2ab + b² سے موازنہ کریں:\nx² + 6x = x² + 2(x)(3)',
      'یہاں a = x اور b = 3 ہے۔ کامل مربع بنانے کے لیے b² جمع کرنا ہوگا۔',
      'b² = 3² = 9\n(تصدیق: x² + 6x + 9 = (x + 3)²)',
    ],
    [
      'Compare with the perfect square identity a² + 2ab + b²:\nx² + 6x = x² + 2(x)(3)',
      'Here a = x and b = 3, so we need to add b².',
      'b² = 3² = 9\n(Check: x² + 6x + 9 = (x + 3)²)',
    ]
  );
  push(
    'تجزی',
    'Factorization',
    '24(x²yz + xy²z + xyz²) کو 8xyz پر تقسیم کریں۔',
    'Divide 24(x²yz + xy²z + xyz²) by 8xyz.',
    '3(x + y + z)',
    '3(x + y + z)',
    ['3xyz', '8(x + y + z)', '3(x² + y² + z²)'],
    ['3xyz', '8(x + y + z)', '3(x² + y² + z²)'],
    'شمار کنندہ سے 8xyz مشترک نکالنے پر: 8xyz × 3(x + y + z) ÷ 8xyz = 3(x + y + z)۔',
    'Factoring xyz from the numerator gives 24xyz(x + y + z) ÷ 8xyz = 3(x + y + z).',
    [
      'شمار کنندہ کی بریکٹ میں سے مشترک متغیر xyz باہر نکالیں:\n24xyz(x + y + z)',
      'اب 8xyz سے تقسیم کی صورت میں لکھیں:\n[24xyz(x + y + z)] ÷ 8xyz',
      '24 ÷ 8 = 3 اور xyz سے xyz کٹنے پر حاصل جواب:\n3(x + y + z)',
    ],
    [
      'Factor out xyz from inside the bracket:\n24xyz(x + y + z)',
      'Divide by 8xyz:\n[24xyz(x + y + z)] ÷ 8xyz',
      '24 ÷ 8 = 3 and xyz cancels out, leaving:\n3(x + y + z)',
    ]
  );
  push(
    'عبارتی سوالات',
    'Word Problems',
    'تین مسلسل صحیح اعداد کا مجموعہ 48 ہے۔ سب سے چھوٹا صحیح عدد معلوم کریں۔',
    'The sum of three consecutive integers is 48. Find the smallest integer.',
    '15',
    '15',
    ['16', '14', '17'],
    ['16', '14', '17'],
    'فرض کریں اعداد x، x+1، x+2 ہیں۔ پس 3x + 3 = 48 ⇐ 3x = 45 ⇐ x = 15۔',
    'Let the integers be x, x + 1, and x + 2. Then 3x + 3 = 48, so 3x = 45 and x = 15.',
    [
      'تین مسلسل صحیح اعداد x، (x + 1) اور (x + 2) فرض کریں اور مجموعہ 48 کے برابر رکھیں:\nx + (x + 1) + (x + 2) = 48',
      'مشابہ ارکان جمع کریں:\n3x + 3 = 48 ⇐ 3x = 48 − 3 = 45',
      '3 پر تقسیم کریں:\nx = 45 ÷ 3 = 15',
    ],
    [
      'Let the three consecutive integers be x, (x + 1), and (x + 2):\nx + (x + 1) + (x + 2) = 48',
      'Combine like terms:\n3x + 3 = 48 => 3x = 48 − 3 = 45',
      'Divide by 3:\nx = 45 ÷ 3 = 15',
    ]
  );
  push(
    'عبارتی سوالات',
    'Word Problems',
    'ایک مستطیل کا احاطہ 54 سینٹی میٹر ہے اور اس کی لمبائی چوڑائی سے 3 سینٹی میٹر زیادہ ہے۔ چوڑائی معلوم کریں۔',
    'The perimeter of a rectangle is 54 cm, and its length is 3 cm more than its breadth. Find the breadth.',
    '12 سینٹی میٹر',
    '12 cm',
    ['15 سینٹی میٹر', '13.5 سینٹی میٹر', '10 سینٹی میٹر'],
    ['15 cm', '13.5 cm', '10 cm'],
    '2(b + b + 3) = 54 ⇐ 2b + 3 = 27 ⇐ 2b = 24 ⇐ b = 12 سینٹی میٹر۔',
    '2(b + b + 3) = 54 gives 2b + 3 = 27, so 2b = 24 and b = 12 cm.',
    [
      'فرض کریں چوڑائی = b اور لمبائی = b + 3۔ مستطیل کے احاطے کا کلیہ لگائیں:\n2(لمبائی + چوڑائی) = 54 ⇐ 2(b + 3 + b) = 54',
      'دونوں طرف 2 سے تقسیم کریں اور بریکٹ مختصر کریں:\n2b + 3 = 27',
      'حل کر کے b معلوم کریں:\n2b = 27 − 3 = 24 ⇐ b = 24 ÷ 2 = 12 سینٹی میٹر',
    ],
    [
      'Let breadth = b and length = b + 3. Apply the perimeter formula:\n2(length + breadth) = 54 => 2(b + 3 + b) = 54',
      'Divide both sides by 2 and simplify:\n2b + 3 = 27',
      'Solve for b:\n2b = 27 − 3 = 24 => b = 24 ÷ 2 = 12 cm',
    ]
  );

  // 22 equations with variables on both sides
  for (let i = 1; i <= 22; i++) {
    const c = (i % 4) + 1;
    const diff = (i % 3) + 2;
    const a = c + diff;
    const x = (i % 9) + 2;
    const b = i + 1;
    const d = (a - c) * x + b;
    push(
      'خطی مساوات',
      'Linear Equations',
      `x کے لیے حل کریں: ${a}x + ${b} = ${c}x + ${d}۔`,
      `Solve for x: ${a}x + ${b} = ${c}x + ${d}.`,
      `${x}`,
      `${x}`,
      [`${x + 2}`, `${Math.max(1, x - 2)}`, `${x + 1}`],
      [`${x + 2}`, `${Math.max(1, x - 2)}`, `${x + 1}`],
      `(${a} − ${c})x = ${d} − ${b} ⇐ ${diff}x = ${d - b} ⇐ x = ${x}۔`,
      `(${a} − ${c})x = ${d} − ${b} => ${diff}x = ${d - b} => x = ${x}.`,
      [
        `متغیر x والے ارکان کو بائیں طرف اور مستقل اعداد کو دائیں طرف لے جائیں:\n${a}x − ${c}x = ${d} − ${b}`,
        `دونوں اطراف تفریق کریں:\n${diff}x = ${d - b}`,
        `دونوں طرف ${diff} سے تقسیم کریں:\nx = ${d - b} ÷ ${diff} = ${x}`,
      ],
      [
        `Collect x terms on the left and constants on the right:\n${a}x − ${c}x = ${d} − ${b}`,
        `Subtract on both sides:\n${diff}x = ${d - b}`,
        `Divide both sides by ${diff}:\nx = ${d - b} ÷ ${diff} = ${x}`,
      ]
    );
  }

  // 22 products of two binomials
  for (let i = 1; i <= 22; i++) {
    const p = (i % 7) + 1;
    const q = ((i + 3) % 8) + 1;
    const sum = p + q;
    const prod = p * q;
    push(
      'الجبری جملے',
      'Algebraic Expressions',
      `حاصلِ ضرب معلوم کریں: (x + ${p})(x + ${q})۔`,
      `Find the product: (x + ${p})(x + ${q}).`,
      `x² + ${sum}x + ${prod}`,
      `x² + ${sum}x + ${prod}`,
      [
        `x² + ${prod}x + ${sum}`,
        `x² + ${sum}x + ${sum}`,
        `x² + ${p}x + ${prod}`,
      ],
      [
        `x² + ${prod}x + ${sum}`,
        `x² + ${sum}x + ${sum}`,
        `x² + ${p}x + ${prod}`,
      ],
      `کلیہ (x + a)(x + b) = x² + (a + b)x + ab سے: x² + (${p} + ${q})x + ${prod} = x² + ${sum}x + ${prod}۔`,
      `Using (x + a)(x + b) = x² + (a + b)x + ab: x² + (${p} + ${q})x + ${prod} = x² + ${sum}x + ${prod}.`,
      [
        `الجبری کلیہ لکھیں:\n(x + a)(x + b) = x² + (a + b)x + ab`,
        `یہاں a = ${p} اور b = ${q} درج کریں:\nx² + (${p} + ${q})x + (${p} × ${q})`,
        `جمع اور ضرب مکمل کریں:\nx² + ${sum}x + ${prod}`,
      ],
      [
        `Write the algebraic identity:\n(x + a)(x + b) = x² + (a + b)x + ab`,
        `Substitute a = ${p} and b = ${q}:\nx² + (${p} + ${q})x + (${p} × ${q})`,
        `Simplify:\nx² + ${sum}x + ${prod}`,
      ]
    );
  }

  // 22 difference of two squares A² − B²
  for (let i = 1; i <= 22; i++) {
    const b = 10 + i * 2;
    const a = b + (i % 4) + 2;
    const sum = a + b;
    const diff = a - b;
    const ans = sum * diff;
    push(
      'بنیادی الجبری کلیات',
      'Algebraic Identities',
      `کلیہ a² − b² = (a + b)(a − b) استعمال کرتے ہوئے ${a}² − ${b}² کی قیمت معلوم کریں۔`,
      `Evaluate ${a}² − ${b}² using a² − b² = (a + b)(a − b).`,
      `${ans}`,
      `${ans}`,
      [`${ans + 20}`, `${diff * diff}`, `${ans - 10}`],
      [`${ans + 20}`, `${diff * diff}`, `${ans - 10}`],
      `${a}² − ${b}² = (${a} + ${b})(${a} − ${b}) = ${sum} × ${diff} = ${ans}۔`,
      `${a}² − ${b}² = (${a} + ${b})(${a} − ${b}) = ${sum} × ${diff} = ${ans}.`,
      [
        `کلیہ a² − b² = (a + b)(a − b) میں a = ${a} اور b = ${b} درج کریں:\n(${a} + ${b})(${a} − ${b})`,
        `دونوں بریکٹیں حل کریں:\n${a} + ${b} = ${sum} اور ${a} − ${b} = ${diff}`,
        `دونوں حاصلات کو ضرب دیں:\n${sum} × ${diff} = ${ans}`,
      ],
      [
        `Substitute a = ${a} and b = ${b} into a² − b² = (a + b)(a − b):\n(${a} + ${b})(${a} − ${b})`,
        `Evaluate inside each bracket:\n${a} + ${b} = ${sum} and ${a} − ${b} = ${diff}`,
        `Multiply the two values:\n${sum} × ${diff} = ${ans}`,
      ]
    );
  }

  // 22 perfect-square trinomial factorization
  for (let i = 1; i <= 22; i++) {
    const a = (i % 4) + 1;
    const b = (i % 7) + 2;
    const sign = i % 2 === 0 ? '+' : '−';
    const xTerm = a === 1 ? 'x²' : `${a * a}x²`;
    const aLabel = a === 1 ? 'x' : `${a}x`;
    const mid = 2 * a * b;
    const factorInner = `${aLabel} ${sign} ${b}`;
    const wrongSign = sign === '+' ? '−' : '+';
    push(
      'تجزی',
      'Factorization',
      `تجزی کریں: ${xTerm} ${sign} ${mid}x + ${b * b}۔`,
      `Factorize: ${xTerm} ${sign} ${mid}x + ${b * b}.`,
      `(${factorInner})²`,
      `(${factorInner})²`,
      [
        `(${aLabel} ${wrongSign} ${b})²`,
        `(${aLabel} + ${b})(${aLabel} − ${b})`,
        `(${aLabel} ${sign} ${b * b})²`,
      ],
      [
        `(${aLabel} ${wrongSign} ${b})²`,
        `(${aLabel} + ${b})(${aLabel} − ${b})`,
        `(${aLabel} ${sign} ${b * b})²`,
      ],
      `یہ جملہ (A ${sign} B)² کی صورت میں ہے جہاں A = ${aLabel} اور B = ${b}، اس لیے (${factorInner})²۔`,
      `This matches (A ${sign} B)² with A = ${aLabel} and B = ${b}, giving (${factorInner})².`,
      [
        `پہلے اور آخری رکن کو مکمل مربع کی شکل میں لکھیں:\n(${aLabel})² ${sign} 2(${aLabel})(${b}) + (${b})²`,
        `یہ جملہ کلیہ A² ${sign} 2AB + B² = (A ${sign} B)² کے عین مطابق ہے جہاں A = ${aLabel} اور B = ${b} ہے۔`,
        `پس مطلوبہ تجزی:\n(${factorInner})²`,
      ],
      [
        `Rewrite the first and last terms as squares:\n(${aLabel})² ${sign} 2(${aLabel})(${b}) + (${b})²`,
        `This matches A² ${sign} 2AB + B² = (A ${sign} B)² with A = ${aLabel} and B = ${b}.`,
        `Factorized form:\n(${factorInner})²`,
      ]
    );
  }

  return list;
}

function createAlgebraHard(): MCQQuestion[] {
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
        id: `alg-h-${idx}`,
        chapterId: 'algebra',
        difficulty: 'hard',
        seed: idx * 17 + 9,
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
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    'اگر x + 1/x = 5 ہو تو x² + 1/x² کی قیمت معلوم کریں۔',
    'If x + 1/x = 5, find the value of x² + 1/x².',
    '23',
    '23',
    ['25', '27', '21'],
    ['25', '27', '21'],
    'دونوں طرف مربع لینے پر: x² + 2 + 1/x² = 25 ⇐ x² + 1/x² = 25 − 2 = 23۔',
    'Squaring both sides gives x² + 2 + 1/x² = 25, so x² + 1/x² = 25 − 2 = 23.',
    [
      'دی گئی مساوات کے دونوں طرف مربع لیں:\n(x + 1/x)² = 5²',
      'کلیہ (a + b)² = a² + 2ab + b² کھولیں:\nx² + 2(x)(1/x) + 1/x² = 25 ⇐ x² + 2 + 1/x² = 25',
      'دائیں طرف 2 تفریق کریں:\nx² + 1/x² = 25 − 2 = 23',
    ],
    [
      'Square both sides of the given equation:\n(x + 1/x)² = 5²',
      'Expand using (a + b)² = a² + 2ab + b²:\nx² + 2(x)(1/x) + 1/x² = 25 => x² + 2 + 1/x² = 25',
      'Subtract 2 from both sides:\nx² + 1/x² = 25 − 2 = 23',
    ]
  );
  push(
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    'اگر x − 1/x = 4 ہو تو x² + 1/x² کی قیمت معلوم کریں۔',
    'If x − 1/x = 4, find the value of x² + 1/x².',
    '18',
    '18',
    ['14', '16', '20'],
    ['14', '16', '20'],
    'دونوں طرف مربع لینے پر: x² − 2 + 1/x² = 16 ⇐ x² + 1/x² = 16 + 2 = 18۔',
    'Squaring both sides gives x² − 2 + 1/x² = 16, so x² + 1/x² = 16 + 2 = 18.',
    [
      'دی گئی مساوات کے دونوں طرف مربع لیں:\n(x − 1/x)² = 4²',
      'کلیہ (a − b)² = a² − 2ab + b² کھولیں:\nx² − 2(x)(1/x) + 1/x² = 16 ⇐ x² − 2 + 1/x² = 16',
      'دونوں طرف 2 جمع کریں:\nx² + 1/x² = 16 + 2 = 18',
    ],
    [
      'Square both sides of the equation:\n(x − 1/x)² = 4²',
      'Expand using (a − b)² = a² − 2ab + b²:\nx² − 2(x)(1/x) + 1/x² = 16 => x² − 2 + 1/x² = 16',
      'Add 2 to both sides:\nx² + 1/x² = 16 + 2 = 18',
    ]
  );
  push(
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    'اگر a + b = 9 اور ab = 14 ہو تو a² + b² کی قیمت معلوم کریں۔',
    'If a + b = 9 and ab = 14, find the value of a² + b².',
    '53',
    '53',
    ['81', '67', '49'],
    ['81', '67', '49'],
    'a² + b² = (a + b)² − 2ab = 9² − 2(14) = 81 − 28 = 53۔',
    'a² + b² = (a + b)² − 2ab = 9² − 2(14) = 81 − 28 = 53.',
    [
      'مربع کا کلیہ لکھیں:\n(a + b)² = a² + b² + 2ab ⇐ a² + b² = (a + b)² − 2ab',
      'دی گئی قیمتیں a + b = 9 اور ab = 14 درج کریں:\na² + b² = 9² − 2(14)',
      'حساب مکمل کریں:\n81 − 28 = 53',
    ],
    [
      'Use the identity:\n(a + b)² = a² + b² + 2ab => a² + b² = (a + b)² − 2ab',
      'Substitute a + b = 9 and ab = 14:\na² + b² = 9² − 2(14)',
      'Simplify:\n81 − 28 = 53',
    ]
  );
  push(
    'بنیادی الجبری کلیات',
    'Algebraic Identities',
    'اگر a − b = 6 اور a² + b² = 52 ہو تو ab کی قیمت کیا ہوگی؟',
    'If a − b = 6 and a² + b² = 52, what is the value of ab?',
    '8',
    '8',
    ['16', '12', '4'],
    ['16', '12', '4'],
    '(a − b)² = a² + b² − 2ab ⇐ 36 = 52 − 2ab ⇐ 2ab = 16 ⇐ ab = 8۔',
    '(a − b)² = a² + b² − 2ab gives 36 = 52 − 2ab, so 2ab = 16 and ab = 8.',
    [
      'کلیہ لکھیں:\n(a − b)² = a² + b² − 2ab',
      'معلوم قیمتیں درج کریں:\n6² = 52 − 2ab ⇐ 36 = 52 − 2ab',
      '2ab کو الگ کر کے حل کریں:\n2ab = 52 − 36 = 16 ⇐ ab = 16 ÷ 2 = 8',
    ],
    [
      'Write the identity:\n(a − b)² = a² + b² − 2ab',
      'Substitute the known values:\n6² = 52 − 2ab => 36 = 52 − 2ab',
      'Solve for ab:\n2ab = 52 − 36 = 16 => ab = 16 ÷ 2 = 8',
    ]
  );
  push(
    'عبارتی سوالات',
    'Word Problems',
    'ایک ماں کی عمر اپنی بیٹی کی عمر سے 3 گنا ہے۔ 12 سال بعد اس کی عمر بیٹی کی عمر سے دوگنا ہو جائے گی۔ بیٹی کی موجودہ عمر معلوم کریں۔',
    'A mother is 3 times as old as her daughter. After 12 years, she will be twice as old as her daughter. Find the daughter’s present age.',
    '12 سال',
    '12 years',
    ['10 سال', '14 سال', '16 سال'],
    ['10 years', '14 years', '16 years'],
    '3x + 12 = 2(x + 12) ⇐ 3x + 12 = 2x + 24 ⇐ x = 12 سال۔',
    '3x + 12 = 2(x + 12) gives 3x + 12 = 2x + 24, so x = 12 years.',
    [
      'فرض کریں بیٹی کی موجودہ عمر = x سال، تو ماں کی موجودہ عمر = 3x سال۔\n12 سال بعد عمریں: بیٹی = x + 12 اور ماں = 3x + 12',
      'شرط کے مطابق مساوات بنائیں:\n3x + 12 = 2(x + 12)',
      'بریکٹ کھول کر x معلوم کریں:\n3x + 12 = 2x + 24 ⇐ 3x − 2x = 24 − 12 ⇐ x = 12 سال',
    ],
    [
      'Let the daughter’s present age = x years, so the mother’s age = 3x years.\nIn 12 years: daughter = x + 12, mother = 3x + 12.',
      'Set up the equation:\n3x + 12 = 2(x + 12)',
      'Expand and solve for x:\n3x + 12 = 2x + 24 => 3x − 2x = 24 − 12 => x = 12 years',
    ]
  );
  push(
    'عبارتی سوالات',
    'Word Problems',
    'دو ہندسی عدد کے ہندسوں کا فرق 3 ہے۔ اگر ہندسوں کی جگہ بدل کر حاصل ہونے والے عدد کو اصل عدد میں جمع کریں تو 99 ملتا ہے۔ ممکنہ چھوٹا عدد معلوم کریں۔',
    'The digits of a two-digit number differ by 3. If the digits are reversed and added to the original number, the sum is 99. Find the smaller possible number.',
    '36',
    '36',
    ['25', '47', '63'],
    ['25', '47', '63'],
    '10a + b + 10b + a = 11(a + b) = 99 ⇐ a + b = 9۔ اور |a − b| = 3 سے ہندسے 3 اور 6 ہیں، چنانچہ چھوٹا عدد 36 ہے۔',
    '10a + b + 10b + a = 11(a + b) = 99 gives a + b = 9. With |a − b| = 3, the digits are 3 and 6, so the smaller number is 36.',
    [
      'ہندسے a اور b فرض کریں۔ اصل عدد 10a + b اور الٹا عدد 10b + a ہوگا۔\nمجموعہ: (10a + b) + (10b + a) = 11(a + b) = 99 ⇐ a + b = 9',
      'ہندسوں کا فرق 3 دیا گیا ہے، پس |a − b| = 3۔\nدونوں مساواتیں حل کرنے پر: (a + b) + (a − b) = 9 + 3 = 12 ⇐ 2a = 12 ⇐ بڑا ہندسہ = 6 اور چھوٹا ہندسہ = 3',
      'ہندسوں 3 اور 6 سے بننے والے دو اعداد 36 اور 63 ہیں، ان میں چھوٹا عدد 36 ہے۔',
    ],
    [
      'Let the digits be a and b. Original number = 10a + b, reversed = 10b + a.\nSum: (10a + b) + (10b + a) = 11(a + b) = 99 => a + b = 9',
      'Since the digits differ by 3, |a − b| = 3.\nSolving (a + b) + (a − b) = 9 + 3 = 12 gives 2a = 12, so the digits are 6 and 3.',
      'The two possible numbers are 36 and 63; the smaller one is 36.',
    ]
  );
  push(
    'تجزی',
    'Factorization',
    'مکمل تجزی کریں: x⁴ − 81۔',
    'Factorize completely: x⁴ − 81.',
    '(x² + 9)(x + 3)(x − 3)',
    '(x² + 9)(x + 3)(x − 3)',
    ['(x² − 9)²', '(x² + 9)(x² + 9)', '(x + 3)³(x − 3)'],
    ['(x² − 9)²', '(x² + 9)(x² + 9)', '(x + 3)³(x − 3)'],
    'x⁴ − 81 = (x² + 9)(x² − 9) = (x² + 9)(x + 3)(x − 3)۔',
    'x⁴ − 81 = (x² + 9)(x² − 9) = (x² + 9)(x + 3)(x − 3).',
    [
      'پہلے مربعوں کے فرق کا کلیہ لگانے کے لیے شکل بنائیں:\nx⁴ − 81 = (x²)² − 9² = (x² + 9)(x² − 9)',
      'دوسرے جزو (x² − 9) پر دوبارہ a² − b² = (a + b)(a − b) لگائیں:\nx² − 9 = x² − 3² = (x + 3)(x − 3)',
      'مکمل تجزی:\n(x² + 9)(x + 3)(x − 3)',
    ],
    [
      'Apply the difference of squares first:\nx⁴ − 81 = (x²)² − 9² = (x² + 9)(x² − 9)',
      'Factor (x² − 9) further using a² − b² = (a + b)(a − b):\nx² − 9 = x² − 3² = (x + 3)(x − 3)',
      'Complete factorization:\n(x² + 9)(x + 3)(x − 3)',
    ]
  );
  push(
    'تجزی',
    'Factorization',
    '(y² + 7y + 10) کو (y + 5) پر تقسیم کریں۔',
    'Divide (y² + 7y + 10) by (y + 5).',
    'y + 2',
    'y + 2',
    ['y + 5', 'y − 2', 'y + 7'],
    ['y + 5', 'y − 2', 'y + 7'],
    'y² + 7y + 10 = (y + 5)(y + 2)۔ اسے (y + 5) پر تقسیم کرنے سے y + 2 بچتا ہے۔',
    'y² + 7y + 10 = (y + 5)(y + 2). Dividing by (y + 5) leaves y + 2.',
    [
      'شمار کنندہ y² + 7y + 10 کی درمیانی رکن توڑ کر تجزی کریں:\ny² + 5y + 2y + 10 = y(y + 5) + 2(y + 5) = (y + 5)(y + 2)',
      'تقسیم کی صورت میں لکھیں:\n[(y + 5)(y + 2)] ÷ (y + 5)',
      'مشترک جزو (y + 5) کاٹنے پر حاصل جواب:\ny + 2',
    ],
    [
      'Factorize the numerator by splitting the middle term:\ny² + 5y + 2y + 10 = y(y + 5) + 2(y + 5) = (y + 5)(y + 2)',
      'Set up the division:\n[(y + 5)(y + 2)] ÷ (y + 5)',
      'Cancel the common factor (y + 5):\ny + 2',
    ]
  );
  push(
    'خطی مساوات',
    'Linear Equations',
    't کے لیے حل کریں: (3t − 2)/4 − (2t + 3)/3 = 2/3 − t۔',
    'Solve for t: (3t − 2)/4 − (2t + 3)/3 = 2/3 − t.',
    '2',
    '2',
    ['1', '3', '-2'],
    ['1', '3', '-2'],
    '12 سے ضرب دینے پر: 3(3t−2) − 4(2t+3) = 8 − 12t ⇐ t − 18 = 8 − 12t ⇐ 13t = 26 ⇐ t = 2۔',
    'Multiplying by 12 gives 3(3t − 2) − 4(2t + 3) = 8 − 12t, so t − 18 = 8 − 12t, 13t = 26, and t = 2.',
    [
      'مخارج 4 اور 3 کے ذواضعافِ اقل 12 سے پوری مساوات کو ضرب دیں:\n3(3t − 2) − 4(2t + 3) = 4(2) − 12t',
      'بریکٹ کھول کر مختصر کریں:\n9t − 6 − 8t − 12 = 8 − 12t ⇐ t − 18 = 8 − 12t',
      't والے ارکان یکجا کریں:\nt + 12t = 8 + 18 ⇐ 13t = 26 ⇐ t = 26 ÷ 13 = 2',
    ],
    [
      'Multiply both sides by the LCM of 4 and 3, which is 12:\n3(3t − 2) − 4(2t + 3) = 4(2) − 12t',
      'Expand and simplify:\n9t − 6 − 8t − 12 = 8 − 12t => t − 18 = 8 − 12t',
      'Collect t terms:\nt + 12t = 8 + 18 => 13t = 26 => t = 26 ÷ 13 = 2',
    ]
  );
  push(
    'تجزی',
    'Factorization',
    'تجزی کریں: 25a² − 4b² + 28bc − 49c²۔',
    'Factorize: 25a² − 4b² + 28bc − 49c².',
    '(5a + 2b − 7c)(5a − 2b + 7c)',
    '(5a + 2b − 7c)(5a − 2b + 7c)',
    ['(5a − 2b − 7c)²', '(5a + 2b + 7c)(5a − 2b − 7c)', '(5a + 7c)(5a − 2b)'],
    ['(5a − 2b − 7c)²', '(5a + 2b + 7c)(5a − 2b − 7c)', '(5a + 7c)(5a − 2b)'],
    '25a² − (4b² − 28bc + 49c²) = (5a)² − (2b − 7c)² = (5a + 2b − 7c)(5a − 2b + 7c)۔',
    '25a² − (4b² − 28bc + 49c²) = (5a)² − (2b − 7c)² = (5a + 2b − 7c)(5a − 2b + 7c).',
    [
      'آخری تین ارکان سے منفی علامت مشترک لے کر کامل مربع بنائیں:\n25a² − (4b² − 28bc + 49c²) = (5a)² − (2b − 7c)²',
      'دو مربعوں کے فرق کا کلیہ A² − B² = (A + B)(A − B) لگائیں (جہاں A = 5a، B = 2b − 7c):',
      'علامتیں کھول کر لکھیں:\n(5a + 2b − 7c)(5a − 2b + 7c)',
    ],
    [
      'Factor out −1 from the last three terms to form a perfect square:\n25a² − (4b² − 28bc + 49c²) = (5a)² − (2b − 7c)²',
      'Apply A² − B² = (A + B)(A − B) with A = 5a and B = 2b − 7c:',
      'Remove the inner brackets:\n(5a + 2b − 7c)(5a − 2b + 7c)',
    ]
  );
  push(
    'عبارتی سوالات',
    'Word Problems',
    'ایک ناطق عدد کا مخرج اس کے شمار کنندہ سے 4 زیادہ ہے۔ اگر دونوں میں سے 1 تفریق کیا جائے تو کسر 1/2 بن جاتی ہے۔ اصل کسر معلوم کریں۔',
    'The denominator of a rational number is 4 more than its numerator. If 1 is subtracted from both, the fraction becomes 1/2. Find the original fraction.',
    '5/9',
    '5/9',
    ['3/7', '4/8', '7/11'],
    ['3/7', '4/8', '7/11'],
    '(x − 1)/(x + 3) = 1/2 ⇐ 2x − 2 = x + 3 ⇐ x = 5، چنانچہ اصل کسر 5/9 ہے۔',
    '(x − 1)/(x + 3) = 1/2 gives 2x − 2 = x + 3, so x = 5 and the original fraction is 5/9.',
    [
      'شمار کنندہ x اور مخرج x + 4 فرض کریں۔ دونوں سے 1 تفریق کرنے پر:\n(x − 1) / (x + 4 − 1) = 1/2 ⇐ (x − 1)/(x + 3) = 1/2',
      'چلیپائی ضرب کریں:\n2(x − 1) = 1(x + 3) ⇐ 2x − 2 = x + 3',
      'x نکال کر اصل کسر لکھیں:\nx = 3 + 2 = 5\nاصل کسر = 5 / (5 + 4) = 5/9',
    ],
    [
      'Let numerator = x and denominator = x + 4. Subtracting 1 from both:\n(x − 1) / (x + 4 − 1) = 1/2 => (x − 1)/(x + 3) = 1/2',
      'Cross-multiply:\n2(x − 1) = 1(x + 3) => 2x − 2 = x + 3',
      'Solve for x and write the fraction:\nx = 5 => Original fraction = 5 / (5 + 4) = 5/9',
    ]
  );
  push(
    'الجبری جملے',
    'Algebraic Expressions',
    'جب x² + 5x + 8 کو x + 2 پر تقسیم کیا جائے تو باقی کیا بچے گا؟',
    'What is the remainder when x² + 5x + 8 is divided by x + 2?',
    '2',
    '2',
    ['4', '0', '6'],
    ['4', '0', '6'],
    'x² + 5x + 8 = (x + 2)(x + 3) + 2، اس لیے باقی 2 بچے گا۔',
    'x² + 5x + 8 = (x + 2)(x + 3) + 2, so the remainder is 2.',
    [
      'تقسیمِ کثیر رقمی یا مسئلہ باقی استعمال کریں: مقسوم علیہ x + 2 کو 0 کے برابر رکھیں تو x = -2۔',
      'جملے x² + 5x + 8 میں x = -2 درج کریں:\n(-2)² + 5(-2) + 8',
      'حساب مکمل کریں:\n4 − 10 + 8 = 2\n(تصدیق: (x + 2)(x + 3) + 2 = x² + 5x + 6 + 2)',
    ],
    [
      'Using the remainder theorem, set the divisor x + 2 = 0 to get x = -2.',
      'Substitute x = -2 into x² + 5x + 8:\n(-2)² + 5(-2) + 8',
      'Simplify:\n4 − 10 + 8 = 2\n(Check: (x + 2)(x + 3) + 2 = x² + 5x + 8)',
    ]
  );

  // 22 splitting middle term factorizations
  const splitPairs: Array<[number, number]> = [
    [2, 5], [3, 4], [2, 7], [3, 8], [4, 5], [5, 6], [2, 9], [3, 7],
    [4, 7], [5, 8], [6, 7], [-2, 5], [-3, 7], [-4, 9], [-2, 9], [-5, 8],
    [-3, -4], [-2, -7], [-5, -6], [-4, -8], [3, -8], [4, -9],
  ];
  for (const [p, q] of splitPairs) {
    const b = p + q;
    const c = p * q;
    const bStr = b === 0 ? '' : b > 0 ? ` + ${b}x` : ` − ${-b}x`;
    const cStr = c > 0 ? ` + ${c}` : ` − ${-c}`;
    const pTerm = p > 0 ? `+ ${p}x` : `− ${-p}x`;
    const qTerm = q > 0 ? `+ ${q}x` : `− ${-q}x`;
    const fmtFactor = (n: number) => (n > 0 ? `(x + ${n})` : `(x − ${-n})`);
    const correct = `${fmtFactor(p)}${fmtFactor(q)}`;
    push(
      'تجزی',
      'Factorization',
      `درمیانی رکن کو توڑ کر تجزی کریں: x²${bStr}${cStr}۔`,
      `Factorize by splitting the middle term: x²${bStr}${cStr}.`,
      correct,
      correct,
      [
        `${fmtFactor(-p)}${fmtFactor(-q)}`,
        `${fmtFactor(p + 1)}${fmtFactor(q - 1)}`,
        `${fmtFactor(-p)}${fmtFactor(q)}`,
      ],
      [
        `${fmtFactor(-p)}${fmtFactor(-q)}`,
        `${fmtFactor(p + 1)}${fmtFactor(q - 1)}`,
        `${fmtFactor(-p)}${fmtFactor(q)}`,
      ],
      `ایسے دو اعداد جن کا مجموعہ ${b} اور حاصلِ ضرب ${c} ہو وہ ${p} اور ${q} ہیں۔ لہٰذا اجزائے ضربی ${correct} ہیں۔`,
      `Two numbers whose sum is ${b} and product is ${c} are ${p} and ${q}. Thus the factors are ${correct}.`,
      [
        `ایسے دو اعداد تلاش کریں جن کا مجموعہ ${b} اور حاصلِ ضرب ${c} ہو:\nوہ دو اعداد ${p} اور ${q} ہیں۔`,
        `درمیانی رکن کو توڑ کر لکھیں:\nx² ${pTerm} ${qTerm}${cStr}`,
        `پہلے دو اور آخری دو ارکان سے مشترک لے کر اجزائے ضربی لکھیں:\nx${fmtFactor(p)} ${q > 0 ? `+ ${q}` : `− ${-q}`}${fmtFactor(p)} = ${correct}`,
      ],
      [
        `Find two numbers whose sum is ${b} and product is ${c}:\nThe numbers are ${p} and ${q}.`,
        `Split the middle term:\nx² ${pTerm} ${qTerm}${cStr}`,
        `Factor by grouping:\nx${fmtFactor(p)} ${q > 0 ? `+ ${q}` : `− ${-q}`}${fmtFactor(p)} = ${correct}`,
      ]
    );
  }

  // 22 reciprocal square identity evaluations
  for (let i = 1; i <= 22; i++) {
    const k = i + 2;
    if (i % 2 === 0) {
      const ans = k * k - 2;
      push(
        'بنیادی الجبری کلیات',
        'Algebraic Identities',
        `اگر x + 1/x = ${k} ہو تو x² + 1/x² کی قیمت معلوم کریں۔`,
        `If x + 1/x = ${k}, find the value of x² + 1/x².`,
        `${ans}`,
        `${ans}`,
        [`${k * k}`, `${k * k + 2}`, `${k * 2}`],
        [`${k * k}`, `${k * k + 2}`, `${k * 2}`],
        `(x + 1/x)² = x² + 1/x² + 2 ⇐ x² + 1/x² = ${k}² − 2 = ${ans}۔`,
        `(x + 1/x)² = x² + 1/x² + 2 implies x² + 1/x² = ${k}² − 2 = ${ans}.`,
        [
          `مساوات x + 1/x = ${k} کے دونوں طرف مربع لیں:\n(x + 1/x)² = ${k}²`,
          `کلیہ کھولیں:\nx² + 2 + 1/x² = ${k * k}`,
          `دائیں طرف 2 تفریق کریں:\nx² + 1/x² = ${k * k} − 2 = ${ans}`,
        ],
        [
          `Square both sides of x + 1/x = ${k}:\n(x + 1/x)² = ${k}²`,
          `Expand:\nx² + 2 + 1/x² = ${k * k}`,
          `Subtract 2:\nx² + 1/x² = ${k * k} − 2 = ${ans}`,
        ]
      );
    } else {
      const ans = k * k + 2;
      push(
        'بنیادی الجبری کلیات',
        'Algebraic Identities',
        `اگر x − 1/x = ${k} ہو تو x² + 1/x² کی قیمت معلوم کریں۔`,
        `If x − 1/x = ${k}, find the value of x² + 1/x².`,
        `${ans}`,
        `${ans}`,
        [`${k * k}`, `${k * k - 2}`, `${k * 2 + 2}`],
        [`${k * k}`, `${k * k - 2}`, `${k * 2 + 2}`],
        `(x − 1/x)² = x² + 1/x² − 2 ⇐ x² + 1/x² = ${k}² + 2 = ${ans}۔`,
        `(x − 1/x)² = x² + 1/x² − 2 implies x² + 1/x² = ${k}² + 2 = ${ans}.`,
        [
          `مساوات x − 1/x = ${k} کے دونوں طرف مربع لیں:\n(x − 1/x)² = ${k}²`,
          `کلیہ کھولیں:\nx² − 2 + 1/x² = ${k * k}`,
          `دونوں طرف 2 جمع کریں:\nx² + 1/x² = ${k * k} + 2 = ${ans}`,
        ],
        [
          `Square both sides of x − 1/x = ${k}:\n(x − 1/x)² = ${k}²`,
          `Expand:\nx² − 2 + 1/x² = ${k * k}`,
          `Add 2 to both sides:\nx² + 1/x² = ${k * k} + 2 = ${ans}`,
        ]
      );
    }
  }

  // 22 fractional linear equations
  const fracEqSeeds: Array<[number, number, number, number, number]> = [
    [1, 2, 2, 3, 2], [2, 1, 2, 3, 4], [4, 2, 2, 3, 6], [1, 7, 2, 3, 3],
    [3, 3, 2, 3, 5], [5, 0, 2, 3, 7], [2, 6, 2, 3, 8], [0, 5, 2, 3, 5],
    [1, 3, 3, 4, 2], [2, 2, 3, 4, 3], [5, 1, 3, 4, 4], [0, 4, 3, 4, 5],
    [4, 0, 3, 4, 6], [3, 5, 3, 4, 7], [1, 6, 2, 5, 3], [3, 2, 2, 5, 4],
    [2, 4, 2, 5, 5], [5, 1, 2, 5, 6], [4, 3, 2, 5, 7], [0, 7, 2, 5, 8],
    [6, 2, 3, 5, 4], [1, 5, 3, 5, 6],
  ];
  for (const [a, b, d1, d2, x] of fracEqSeeds) {
    const lcm = d1 * d2;
    const sumNum = (x + a) * d2 + (x + b) * d1;
    const rhs = sumNum % lcm === 0 ? `${sumNum / lcm}` : `${sumNum}/${lcm}`;
    const constSum = d2 * a + d1 * b;
    const coeffSum = d1 + d2;
    push(
      'خطی مساوات',
      'Linear Equations',
      `x کے لیے حل کریں: (x + ${a})/${d1} + (x + ${b})/${d2} = ${rhs}۔`,
      `Solve for x: (x + ${a})/${d1} + (x + ${b})/${d2} = ${rhs}.`,
      `${x}`,
      `${x}`,
      [`${x + 1}`, `${Math.max(1, x - 1)}`, `${x + 3}`],
      [`${x + 1}`, `${Math.max(1, x - 1)}`, `${x + 3}`],
      `پوری مساوات کو ${lcm} سے ضرب دیں: ${d2}(x + ${a}) + ${d1}(x + ${b}) = ${sumNum} ⇐ ${coeffSum}x = ${sumNum - constSum} ⇐ x = ${x}۔`,
      `Multiply by ${lcm}: ${d2}(x + ${a}) + ${d1}(x + ${b}) = ${sumNum}, so ${coeffSum}x = ${sumNum - constSum} and x = ${x}.`,
      [
        `مخارج ${d1} اور ${d2} ختم کرنے کے لیے پوری مساوات کو ${lcm} سے ضرب دیں:\n${d2}(x + ${a}) + ${d1}(x + ${b}) = ${sumNum}`,
        `بریکٹیں کھول کر مشابہ ارکان جمع کریں:\n${coeffSum}x + ${constSum} = ${sumNum}`,
        `${constSum} تفریق کر کے ${coeffSum} پر تقسیم کریں:\n${coeffSum}x = ${sumNum - constSum} ⇐ x = ${x}`,
      ],
      [
        `Multiply through by the LCM ${lcm} to clear denominators:\n${d2}(x + ${a}) + ${d1}(x + ${b}) = ${sumNum}`,
        `Expand and combine like terms:\n${coeffSum}x + ${constSum} = ${sumNum}`,
        `Subtract ${constSum} and divide by ${coeffSum}:\n${coeffSum}x = ${sumNum - constSum} => x = ${x}`,
      ]
    );
  }

  // 22 age and consecutive-multiples word problems
  for (let i = 1; i <= 22; i++) {
    const x = i + 4;
    if (i <= 11) {
      const k = (i % 4) + 2;
      const first = k * x;
      const sum = first + (first + k) + (first + 2 * k);
      push(
        'عبارتی سوالات',
        'Word Problems',
        `عدد ${k} کے تین مسلسل اضعاف کا مجموعہ ${sum} ہے۔ ان میں سب سے بڑا مضاعف معلوم کریں۔`,
        `The sum of three consecutive multiples of ${k} is ${sum}. Find the largest multiple.`,
        `${first + 2 * k}`,
        `${first + 2 * k}`,
        [`${first}`, `${first + k}`, `${first + 3 * k}`],
        [`${first}`, `${first + k}`, `${first + 3 * k}`],
        `فرض کریں اضعاف n، n+${k}، n+${2 * k} ہیں۔ مجموعہ = 3n + ${3 * k} = ${sum} ⇐ n = ${first}، پس سب سے بڑا ${first + 2 * k} ہے۔`,
        `Let the multiples be n, n + ${k}, and n + ${2 * k}. Then 3n + ${3 * k} = ${sum}, so n = ${first} and the largest is ${first + 2 * k}.`,
        [
          `تین مسلسل اضعاف n، n + ${k} اور n + ${2 * k} فرض کریں:\nn + (n + ${k}) + (n + ${2 * k}) = ${sum}`,
          `مساوات مختصر کریں:\n3n + ${3 * k} = ${sum} ⇐ 3n = ${sum - 3 * k} ⇐ n = ${first}`,
          `سب سے بڑا مضاعف معلوم کریں:\n${first} + ${2 * k} = ${first + 2 * k}`,
        ],
        [
          `Let the three consecutive multiples be n, n + ${k}, and n + ${2 * k}:\nn + (n + ${k}) + (n + ${2 * k}) = ${sum}`,
          `Simplify and solve for n:\n3n + ${3 * k} = ${sum} => 3n = ${sum - 3 * k} => n = ${first}`,
          `Find the largest multiple:\n${first} + ${2 * k} = ${first + 2 * k}`,
        ]
      );
    } else {
      const son = i - 3;
      const m = (i % 3) + 3;
      const yrs = (i % 5) + 4;
      const sumAfter = son + m * son + 2 * yrs;
      push(
        'عبارتی سوالات',
        'Word Problems',
        `ایک والد کی عمر اپنے بیٹے کی عمر سے ${m} گنا ہے۔ ${yrs} سال بعد دونوں کی عمروں کا مجموعہ ${sumAfter} سال ہوگا۔ بیٹے کی موجودہ عمر معلوم کریں۔`,
        `A father is ${m} times as old as his son. After ${yrs} years, the sum of their ages will be ${sumAfter} years. Find the son’s present age.`,
        `${son} سال`,
        `${son} years`,
        [`${son + 2} سال`, `${son - 1} سال`, `${son * m} سال`],
        [`${son + 2} years`, `${son - 1} years`, `${son * m} years`],
        `موجودہ عمریں: x اور ${m}x۔ ${yrs} سال بعد: (x + ${yrs}) + (${m}x + ${yrs}) = ${sumAfter} ⇐ ${m + 1}x = ${sumAfter - 2 * yrs} ⇐ x = ${son} سال۔`,
        `Present ages: x and ${m}x. After ${yrs} years: (x + ${yrs}) + (${m}x + ${yrs}) = ${sumAfter}, giving ${m + 1}x = ${sumAfter - 2 * yrs}, so x = ${son} years.`,
        [
          `بیٹے کی موجودہ عمر x اور والد کی عمر ${m}x فرض کریں۔\n${yrs} سال بعد مجموعہ:\n(x + ${yrs}) + (${m}x + ${yrs}) = ${sumAfter}`,
          `مشابہ ارکان جمع کریں:\n${m + 1}x + ${2 * yrs} = ${sumAfter} ⇐ ${m + 1}x = ${sumAfter - 2 * yrs}`,
          `${m + 1} پر تقسیم کریں:\nx = ${sumAfter - 2 * yrs} ÷ ${m + 1} = ${son} سال`,
        ],
        [
          `Let the son’s age = x and father’s age = ${m}x.\nAfter ${yrs} years:\n(x + ${yrs}) + (${m}x + ${yrs}) = ${sumAfter}`,
          `Combine like terms:\n${m + 1}x + ${2 * yrs} = ${sumAfter} => ${m + 1}x = ${sumAfter - 2 * yrs}`,
          `Divide by ${m + 1}:\nx = ${sumAfter - 2 * yrs} ÷ ${m + 1} = ${son} years`,
        ]
      );
    }
  }

  return list;
}

export const ALGEBRA_QUESTIONS: MCQQuestion[] = [
  ...createAlgebraEasy(),
  ...createAlgebraMedium(),
  ...createAlgebraHard(),
];
