import { MCQQuestion } from '../../types/math';
import { buildBilingualMCQ } from '../mathUtils';

function createMeasurementEasy(): MCQQuestion[] {
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
        id: `mea-e-${idx}`,
        chapterId: 'measurement',
        difficulty: 'easy',
        seed: idx * 7 + 1,
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
    'چوکور اشکال کا رقبہ',
    'Area of Quadrilaterals',
    'ذوزنقہ جس کے متوازی اضلاع a اور b ہوں اور عمودی بلندی h ہو، اس کے رقبے کا کلیہ کیا ہے؟',
    'What is the formula for the area of a trapezium with parallel sides a and b and height h?',
    '½ × (a + b) × h',
    '½ × (a + b) × h',
    ['(a + b) × h', '½ × a × b × h', '2 × (a + b) × h'],
    ['(a + b) × h', '½ × a × b × h', '2 × (a + b) × h'],
    'ذوزنقہ کا رقبہ متوازی اضلاع کے مجموعے کے نصف اور عمودی بلندی کے حاصلِ ضرب کے برابر ہوتا ہے۔',
    'The area of a trapezium equals half the sum of its parallel sides multiplied by the height.',
    [
      'ذوزنقہ کے دو متوازی اضلاع a اور b ہیں اور ان کے درمیان عمودی فاصلہ (بلندی) h ہے۔',
      'ذوزنقہ کو وتر کے ذریعے دو مثلثوں میں تقسیم کریں جن کے قاعدے a اور b اور بلندی h ہو:\nرقبہ = (½ × a × h) + (½ × b × h)',
      'مشترک عوامل ½ اور h نکالنے پر کلیہ حاصل ہوتا ہے:\nرقبہ = ½ × (a + b) × h',
    ],
    [
      'A trapezium has parallel sides a and b separated by perpendicular height h.',
      'Splitting it along a diagonal forms two triangles with bases a and b and height h:\nArea = (½ × a × h) + (½ × b × h)',
      'Factor out ½ and h:\nArea = ½ × (a + b) × h',
    ]
  );
  push(
    'چوکور اشکال کا رقبہ',
    'Area of Quadrilaterals',
    'معین جس کے وتر d₁ اور d₂ ہوں، اس کے رقبے کا کلیہ کیا ہے؟',
    'What is the area of a rhombus with diagonals d₁ and d₂?',
    '½ × d₁ × d₂',
    '½ × d₁ × d₂',
    ['d₁ × d₂', '2 × d₁ × d₂', '½ × (d₁ + d₂)'],
    ['d₁ × d₂', '2 × d₁ × d₂', '½ × (d₁ + d₂)'],
    'معین کے وتر ایک دوسرے کو 90° پر تنصیف کرتے ہیں، اس لیے رقبہ = ½ × d₁ × d₂۔',
    'The diagonals of a rhombus bisect each other at 90°, so Area = ½ × d₁ × d₂.',
    [
      'معین کے دونوں وتر d₁ اور d₂ ایک دوسرے کو قائمہ زاویے (90°) پر تنصیف کرتے ہیں۔',
      'معین دو برابر مثلثوں میں تقسیم ہوتا ہے جن میں سے ہر ایک کا قاعدہ d₁ اور بلندی ½d₂ ہے:\nایک مثلث کا رقبہ = ½ × d₁ × (½d₂) = ¼ × d₁ × d₂',
      'دونوں مثلثوں کا مجموعی رقبہ:\n2 × (¼ × d₁ × d₂) = ½ × d₁ × d₂',
    ],
    [
      'The diagonals d₁ and d₂ of a rhombus bisect each other at 90°.',
      'They divide the rhombus into two equal triangles, each with base d₁ and height ½d₂:\nArea of one triangle = ½ × d₁ × (½d₂) = ¼ × d₁ × d₂',
      'Total area of both triangles:\n2 × (¼ × d₁ × d₂) = ½ × d₁ × d₂',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    'مکعب کی کتنی مربع نما سطحیں (رخ) ہوتی ہیں؟',
    'How many square faces does a cube have?',
    '6',
    '6',
    ['4', '8', '12'],
    ['4', '8', '12'],
    'ایک مکعب 6 یکساں مربع نما سطحوں سے مل کر بنتا ہے۔',
    'A cube is made up of 6 identical square faces.',
    [
      'مکعب ایک سہ ابعادی (3D) مجسم شکل ہے جس کی لمبائی، چوڑائی اور اونچائی برابر ہوتی ہے۔',
      'اس کے اوپر اور نیچے 2 مربع رخ اور چاروں اطراف میں 4 مربع رخ ہوتے ہیں۔',
      'کل سطحوں (رخوں) کی تعداد = 2 + 4 = 6',
    ],
    [
      'A cube is a 3D solid with equal length, breadth, and height.',
      'It has 2 square faces at the top and bottom, and 4 square faces on the sides.',
      'Total faces = 2 + 4 = 6',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    'ضلع a والے مکعب کا کل سطحی رقبہ کیا ہوتا ہے؟',
    'What is the total surface area of a cube with side a?',
    '6a²',
    '6a²',
    ['4a²', 'a³', '12a'],
    ['4a²', 'a³', '12a'],
    'ہر سطح کا رقبہ a² ہے اور کل 6 سطحیں ہیں، پس کل سطحی رقبہ = 6a²۔',
    'Each face has area a², and there are 6 faces, so total surface area = 6a².',
    [
      'مکعب کی ہر سطح ایک مربع ہے جس کا ضلع a ہے:\nایک سطح کا رقبہ = a × a = a²',
      'مکعب کی کل 6 یکساں سطحیں ہوتی ہیں۔',
      'کل سطحی رقبہ = 6 × a² = 6a²',
    ],
    [
      'Each face of a cube is a square of side a:\nArea of one face = a × a = a²',
      'A cube has 6 identical square faces.',
      'Total surface area = 6 × a² = 6a²',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    'ضلع a والے مکعب کا اطرافی سطحی رقبہ کیا ہوتا ہے؟',
    'What is the lateral surface area of a cube with side a?',
    '4a²',
    '4a²',
    ['6a²', 'a³', '2a²'],
    ['6a²', 'a³', '2a²'],
    'اطرافی سطحی رقبے میں صرف 4 اطراف کی دیواریں شامل ہوتی ہیں، اس لیے یہ 4a² ہوتا ہے۔',
    'Lateral surface area includes only the 4 side faces, so it equals 4a².',
    [
      'اطرافی سطحی رقبے میں اوپر اور نیچے والی سطحوں کو چھوڑ کر صرف 4 اطرافی مربع سطحیں گنی جاتی ہیں۔',
      'ہر مربع سطح کا رقبہ = a²',
      'لہٰذا اطرافی سطحی رقبہ = 4 × a² = 4a²',
    ],
    [
      'Lateral surface area counts only the 4 vertical faces (excluding top and bottom).',
      'Area of each square face = a²',
      'Lateral surface area = 4 × a² = 4a²',
    ]
  );
  push(
    'قائمہ دائروی اسطوانہ',
    'Right Circular Cylinder',
    'رداس r اور بلندی h والے اسطوانے کا خم دار سطحی رقبہ کیا ہوتا ہے؟',
    'What is the curved surface area of a cylinder of radius r and height h?',
    '2πrh',
    '2πrh',
    ['πr²h', '2πr(r + h)', 'πrh'],
    ['πr²h', '2πr(r + h)', 'πrh'],
    'خم دار سطح کو کھولنے سے 2πr لمبائی اور h چوڑائی کا مستطیل بنتا ہے، پس خم دار سطحی رقبہ = 2πrh۔',
    'Unrolling the curved surface gives a rectangle of length 2πr and height h, so CSA = 2πrh.',
    [
      'اسطوانے کی خم دار سطح کو سیدھا کھولنے پر ایک مستطیل بنتا ہے۔',
      'اس مستطیل کی لمبائی دائرے کے محیط (2πr) اور چوڑائی اسطوانے کی بلندی (h) کے برابر ہوتی ہے۔',
      'مستطیل کا رقبہ = لمبائی × چوڑائی = 2πr × h = 2πrh',
    ],
    [
      'Unrolling the curved surface of a cylinder forms a rectangle.',
      'Its length equals the base circumference (2πr) and its width equals the height (h).',
      'Area of rectangle = 2πr × h = 2πrh',
    ]
  );
  push(
    'قائمہ دائروی اسطوانہ',
    'Right Circular Cylinder',
    'قاعدہ رداس r اور بلندی h والے اسطوانے کا حجم کیا ہوتا ہے؟',
    'What is the volume of a cylinder with base radius r and height h?',
    'πr²h',
    'πr²h',
    ['2πrh', '⅓πr²h', '2πr²h'],
    ['2πrh', '⅓πr²h', '2πr²h'],
    'اسطوانے کا حجم = قاعدے کا رقبہ × بلندی = πr² × h۔',
    'Volume of a cylinder = base area × height = πr² × h.',
    [
      'حجم کا بنیادی کلیہ لکھیں:\nحجم = قاعدے کا رقبہ × بلندی',
      'اسطوانے کا قاعدہ ایک دائرہ ہے جس کا رقبہ = πr²',
      'بلندی h سے ضرب دینے پر:\nحجم = πr² × h = πr²h',
    ],
    [
      'Write the basic volume formula:\nVolume = Base Area × Height',
      'The base is a circle with area = πr².',
      'Multiply by height h:\nVolume = πr² × h = πr²h',
    ]
  );
  push(
    'اکائیوں کی تبدیلی',
    'Unit Conversions',
    '1 مکعب میٹر میں کتنے لیٹر ہوتے ہیں؟',
    'How many liters are there in 1 m³?',
    '1000 لیٹر',
    '1000 liters',
    ['100 لیٹر', '10 لیٹر', '10000 لیٹر'],
    ['100 liters', '10 liters', '10000 liters'],
    '1 مکعب میٹر = 1,000,000 مکعب سینٹی میٹر اور 1 لیٹر = 1000 مکعب سینٹی میٹر، اس لیے 1 مکعب میٹر = 1000 لیٹر۔',
    '1 m³ = 1,000,000 cm³ and 1 liter = 1000 cm³, so 1 m³ = 1000 liters.',
    [
      '1 میٹر = 100 سینٹی میٹر ہوتا ہے، اس لیے 1 مکعب میٹر:\n100 × 100 × 100 = 1,000,000 مکعب سینٹی میٹر',
      'چونکہ 1 لیٹر = 1000 مکعب سینٹی میٹر ہوتا ہے۔',
      '1,000,000 کو 1000 پر تقسیم کریں:\n1,000,000 ÷ 1000 = 1000 لیٹر',
    ],
    [
      'Since 1 m = 100 cm:\n1 m³ = 100 × 100 × 100 = 1,000,000 cm³',
      'Also, 1 liter = 1000 cm³.',
      'Divide by 1000:\n1,000,000 ÷ 1000 = 1000 liters',
    ]
  );
  push(
    'اکائیوں کی تبدیلی',
    'Unit Conversions',
    '1 مربع میٹر میں کتنے مربع سینٹی میٹر ہوتے ہیں؟',
    'How many cm² are there in 1 m²?',
    '10000 مربع سینٹی میٹر',
    '10000 cm²',
    ['100 مربع سینٹی میٹر', '1000 مربع سینٹی میٹر', '100000 مربع سینٹی میٹر'],
    ['100 cm²', '1000 cm²', '100000 cm²'],
    'چونکہ 1 میٹر = 100 سینٹی میٹر، لہٰذا 1 مربع میٹر = 100 × 100 = 10000 مربع سینٹی میٹر۔',
    'Since 1 m = 100 cm, 1 m² = 100 × 100 = 10000 cm².',
    [
      'لمبائی کی اکائی کی تبدیلی لکھیں:\n1 میٹر = 100 سینٹی میٹر',
      'مربع رقبہ نکالنے کے لیے دونوں طرف مربع لیں:\n1 مربع میٹر = 1 میٹر × 1 میٹر = 100 سینٹی میٹر × 100 سینٹی میٹر',
      'ضرب دیں:\n100 × 100 = 10000 مربع سینٹی میٹر',
    ],
    [
      'Start with length conversion:\n1 m = 100 cm',
      'Multiply for area:\n1 m² = 1 m × 1 m = 100 cm × 100 cm',
      'Multiply:\n100 × 100 = 10000 cm²',
    ]
  );
  push(
    'اکائیوں کی تبدیلی',
    'Unit Conversions',
    '1 ہیکٹر کتنے مربع میٹر کے برابر ہوتا ہے؟',
    '1 hectare is equal to how many m²?',
    '10000 مربع میٹر',
    '10000 m²',
    ['1000 مربع میٹر', '100 مربع میٹر', '100000 مربع میٹر'],
    ['1000 m²', '100 m²', '100000 m²'],
    '1 ہیکٹر 100 میٹر × 100 میٹر کے مربع کا رقبہ ہوتا ہے جو 10000 مربع میٹر ہے۔',
    '1 hectare is the area of a 100 m × 100 m square, which is 10000 m².',
    [
      'تعریف کے مطابق 1 ہیکٹر 100 میٹر ضلع والے مربع کا رقبہ ہوتا ہے۔',
      'مربع کے رقبے کا کلیہ لگائیں:\nرقبہ = ضلع × ضلع = 100 میٹر × 100 میٹر',
      'ضرب دیں:\n10000 مربع میٹر',
    ],
    [
      'By definition, 1 hectare is the area of a square of side 100 m.',
      'Apply the square area formula:\nArea = 100 m × 100 m',
      'Multiply:\n10000 m²',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    'لمبائی l، چوڑائی b اور بلندی h والے مکعب نما کا حجم کیا ہوتا ہے؟',
    'What is the volume of a cuboid with length l, breadth b, and height h?',
    'l × b × h',
    'l × b × h',
    ['2(lb + bh + hl)', '2(l + b)h', 'l + b + h'],
    ['2(lb + bh + hl)', '2(l + b)h', 'l + b + h'],
    'مکعب نما کا حجم = لمبائی × چوڑائی × بلندی۔',
    'Volume of a cuboid = length × breadth × height = l × b × h.',
    [
      'مکعب نما کا قاعدہ ایک مستطیل ہے جس کا رقبہ = l × b',
      'حجم = قاعدے کا رقبہ × بلندی',
      'لہٰذا حجم = (l × b) × h = l × b × h',
    ],
    [
      'The base of a cuboid is a rectangle with area l × b.',
      'Volume = base area × height',
      'Therefore, volume = (l × b) × h = l × b × h',
    ]
  );
  push(
    'چوکور اشکال کا رقبہ',
    'Area of Quadrilaterals',
    'ایک متوازی الاضلاع کا قاعدہ 12 سینٹی میٹر اور بلندی 7 سینٹی میٹر ہے۔ اس کا رقبہ معلوم کریں۔',
    'Find the area of a parallelogram with base 12 cm and height 7 cm.',
    '84 مربع سینٹی میٹر',
    '84 cm²',
    ['42 مربع سینٹی میٹر', '38 مربع سینٹی میٹر', '19 مربع سینٹی میٹر'],
    ['42 cm²', '38 cm²', '19 cm²'],
    'متوازی الاضلاع کا رقبہ = قاعدہ × بلندی = 12 × 7 = 84 مربع سینٹی میٹر۔',
    'Area of parallelogram = base × height = 12 × 7 = 84 cm².',
    [
      'متوازی الاضلاع کے رقبے کا کلیہ لکھیں:\nرقبہ = قاعدہ × بلندی',
      'معلوم قیمتیں (قاعدہ = 12 سینٹی میٹر، بلندی = 7 سینٹی میٹر) درج کریں:\nرقبہ = 12 × 7',
      'ضرب دیں:\n84 مربع سینٹی میٹر',
    ],
    [
      'Write the area formula for a parallelogram:\nArea = base × height',
      'Substitute base = 12 cm and height = 7 cm:\nArea = 12 × 7',
      'Multiply:\n84 cm²',
    ]
  );
  push(
    'چوکور اشکال کا رقبہ',
    'Area of Quadrilaterals',
    'ایک مربع کا رقبہ 64 مربع سینٹی میٹر ہے۔ اس کا احاطہ معلوم کریں۔',
    'The area of a square is 64 cm². Find its perimeter.',
    '32 سینٹی میٹر',
    '32 cm',
    ['16 سینٹی میٹر', '24 سینٹی میٹر', '64 سینٹی میٹر'],
    ['16 cm', '24 cm', '64 cm'],
    'ضلع = √64 = 8 سینٹی میٹر۔ احاطہ = 4 × 8 = 32 سینٹی میٹر۔',
    'Side = √64 = 8 cm. Perimeter = 4 × 8 = 32 cm.',
    [
      'پہلے مربع کے رقبے کے کلیے سے ضلع معلوم کریں:\nضلع² = 64 ⇐ ضلع = √64 = 8 سینٹی میٹر',
      'اب مربع کے احاطے کا کلیہ لگائیں:\nاحاطہ = 4 × ضلع',
      'ضرب دیں:\n4 × 8 = 32 سینٹی میٹر',
    ],
    [
      'First find the side length from area:\nside² = 64 => side = √64 = 8 cm',
      'Use the perimeter formula for a square:\nPerimeter = 4 × side',
      'Multiply:\n4 × 8 = 32 cm',
    ]
  );
  push(
    'چوکور اشکال کا رقبہ',
    'Area of Quadrilaterals',
    'ایک مثلث کا قاعدہ 14 سینٹی میٹر اور بلندی 9 سینٹی میٹر ہے۔ اس کا رقبہ معلوم کریں۔',
    'Find the area of a triangle with base 14 cm and height 9 cm.',
    '63 مربع سینٹی میٹر',
    '63 cm²',
    ['126 مربع سینٹی میٹر', '23 مربع سینٹی میٹر', '46 مربع سینٹی میٹر'],
    ['126 cm²', '23 cm²', '46 cm²'],
    'رقبہ = ½ × قاعدہ × بلندی = ½ × 14 × 9 = 63 مربع سینٹی میٹر۔',
    'Area = ½ × base × height = ½ × 14 × 9 = 63 cm².',
    [
      'مثلث کے رقبے کا کلیہ لکھیں:\nرقبہ = ½ × قاعدہ × بلندی',
      'قاعدہ = 14 اور بلندی = 9 درج کریں:\n½ × 14 × 9',
      '14 ÷ 2 = 7، پھر 7 × 9 = 63 مربع سینٹی میٹر',
    ],
    [
      'Write the area formula for a triangle:\nArea = ½ × base × height',
      'Substitute base = 14 and height = 9:\n½ × 14 × 9',
      '14 ÷ 2 = 7, then 7 × 9 = 63 cm²',
    ]
  );
  push(
    'اکائیوں کی تبدیلی',
    'Unit Conversions',
    '5.4 لیٹر کو مکعب سینٹی میٹر میں تبدیل کریں۔',
    'Convert 5.4 liters into cm³.',
    '5400 مکعب سینٹی میٹر',
    '5400 cm³',
    ['540 مکعب سینٹی میٹر', '54 مکعب سینٹی میٹر', '54000 مکعب سینٹی میٹر'],
    ['540 cm³', '54 cm³', '54000 cm³'],
    '1 لیٹر = 1000 مکعب سینٹی میٹر، لہٰذا 5.4 × 1000 = 5400 مکعب سینٹی میٹر۔',
    '1 liter = 1000 cm³, so 5.4 × 1000 = 5400 cm³.',
    [
      'تبدیلی کا پیمانہ لکھیں:\n1 لیٹر = 1000 مکعب سینٹی میٹر',
      '5.4 لیٹر کو 1000 سے ضرب دیں:\n5.4 × 1000',
      'اعشاریہ تین درجے دائیں منتقل کرنے پر:\n5400 مکعب سینٹی میٹر',
    ],
    [
      'Use the conversion factor:\n1 liter = 1000 cm³',
      'Multiply 5.4 by 1000:\n5.4 × 1000',
      'Shift the decimal three places right:\n5400 cm³',
    ]
  );

  // 20 volume & surface area of cube
  for (let i = 1; i <= 20; i++) {
    const s = (i % 10) + 2;
    if (i <= 10) {
      const vol = s * s * s;
      push(
        'مکعب اور مکعب نما',
        'Cube and Cuboid',
        `اس مکعب کا حجم معلوم کریں جس کے کنارے کی لمبائی ${s} سینٹی میٹر ہو۔`,
        `Find the volume of a cube of edge length ${s} cm.`,
        `${vol} مکعب سینٹی میٹر`,
        `${vol} cm³`,
        [`${6 * s * s} مکعب سینٹی میٹر`, `${4 * s * s} مکعب سینٹی میٹر`, `${s * s} مکعب سینٹی میٹر`],
        [`${6 * s * s} cm³`, `${4 * s * s} cm³`, `${s * s} cm³`],
        `حجم = ضلع³ = ${s}³ = ${vol} مکعب سینٹی میٹر۔`,
        `Volume = side³ = ${s}³ = ${vol} cm³.`,
        [
          `مکعب کے حجم کا کلیہ لکھیں:\nحجم = ضلع × ضلع × ضلع = a³`,
          `ضلع a = ${s} سینٹی میٹر درج کریں:\n${s} × ${s} × ${s}`,
          `پہلے ${s} × ${s} = ${s * s}، پھر ${s * s} × ${s} = ${vol} مکعب سینٹی میٹر`,
        ],
        [
          `Write the cube volume formula:\nVolume = a³ = a × a × a`,
          `Substitute a = ${s} cm:\n${s} × ${s} × ${s}`,
          `First ${s} × ${s} = ${s * s}, then ${s * s} × ${s} = ${vol} cm³`,
        ]
      );
    } else {
      const tsa = 6 * s * s;
      push(
        'مکعب اور مکعب نما',
        'Cube and Cuboid',
        `ضلع ${s} سینٹی میٹر والے مکعب کا کل سطحی رقبہ معلوم کریں۔`,
        `Find the total surface area of a cube of side ${s} cm.`,
        `${tsa} مربع سینٹی میٹر`,
        `${tsa} cm²`,
        [`${4 * s * s} مربع سینٹی میٹر`, `${s * s * s} مربع سینٹی میٹر`, `${6 * s} مربع سینٹی میٹر`],
        [`${4 * s * s} cm²`, `${s * s * s} cm²`, `${6 * s} cm²`],
        `کل سطحی رقبہ = 6 × ضلع² = 6 × ${s}² = ${tsa} مربع سینٹی میٹر۔`,
        `Total surface area = 6 × side² = 6 × ${s}² = ${tsa} cm².`,
        [
          `مکعب کے کل سطحی رقبے کا کلیہ لکھیں:\nکل سطحی رقبہ = 6 × ضلع²`,
          `ضلع = ${s} درج کریں:\n6 × (${s})² = 6 × ${s * s}`,
          `ضرب مکمل کریں:\n${tsa} مربع سینٹی میٹر`,
        ],
        [
          `Write the formula for total surface area of a cube:\nTSA = 6 × side²`,
          `Substitute side = ${s}:\n6 × (${s})² = 6 × ${s * s}`,
          `Multiply:\n${tsa} cm²`,
        ]
      );
    }
  }

  // 25 volume & TSA of cuboid
  for (let i = 1; i <= 25; i++) {
    const l = (i % 6) + 5;
    const b = (i % 4) + 3;
    const h = (i % 5) + 2;
    if (i <= 13) {
      const vol = l * b * h;
      push(
        'مکعب اور مکعب نما',
        'Cube and Cuboid',
        `مکعب نما جس کی پیمائش ${l} سینٹی میٹر × ${b} سینٹی میٹر × ${h} سینٹی میٹر ہے، اس کا حجم معلوم کریں۔`,
        `Find the volume of a cuboid measuring ${l} cm × ${b} cm × ${h} cm.`,
        `${vol} مکعب سینٹی میٹر`,
        `${vol} cm³`,
        [`${2 * (l * b + b * h + h * l)} مکعب سینٹی میٹر`, `${l + b + h} مکعب سینٹی میٹر`, `${vol + l} مکعب سینٹی میٹر`],
        [`${2 * (l * b + b * h + h * l)} cm³`, `${l + b + h} cm³`, `${vol + l} cm³`],
        `حجم = l × b × h = ${l} × ${b} × ${h} = ${vol} مکعب سینٹی میٹر۔`,
        `Volume = l × b × h = ${l} × ${b} × ${h} = ${vol} cm³.`,
        [
          `مکعب نما کے حجم کا کلیہ لکھیں:\nحجم = لمبائی × چوڑائی × بلندی`,
          `دی گئی پیمائشیں درج کریں:\n${l} × ${b} × ${h}`,
          `${l} × ${b} = ${l * b}، اب ${l * b} × ${h} = ${vol} مکعب سینٹی میٹر`,
        ],
        [
          `Write the cuboid volume formula:\nVolume = length × breadth × height`,
          `Substitute the dimensions:\n${l} × ${b} × ${h}`,
          `${l} × ${b} = ${l * b}, then ${l * b} × ${h} = ${vol} cm³`,
        ]
      );
    } else {
      const lb = l * b;
      const bh = b * h;
      const hl = h * l;
      const sumFaces = lb + bh + hl;
      const tsa = 2 * sumFaces;
      push(
        'مکعب اور مکعب نما',
        'Cube and Cuboid',
        `لمبائی ${l} سینٹی میٹر، چوڑائی ${b} سینٹی میٹر اور بلندی ${h} سینٹی میٹر والے مکعب نما کا کل سطحی رقبہ معلوم کریں۔`,
        `Find the total surface area of a cuboid of length ${l} cm, breadth ${b} cm, and height ${h} cm.`,
        `${tsa} مربع سینٹی میٹر`,
        `${tsa} cm²`,
        [`${l * b * h} مربع سینٹی میٹر`, `${sumFaces} مربع سینٹی میٹر`, `${2 * (l + b) * h} مربع سینٹی میٹر`],
        [`${l * b * h} cm²`, `${sumFaces} cm²`, `${2 * (l + b) * h} cm²`],
        `کل سطحی رقبہ = 2(lb + bh + hl) = 2(${lb} + ${bh} + ${hl}) = ${tsa} مربع سینٹی میٹر۔`,
        `TSA = 2(lb + bh + hl) = 2(${lb} + ${bh} + ${hl}) = ${tsa} cm².`,
        [
          `مکعب نما کے کل سطحی رقبے کا کلیہ لکھیں:\nکل سطحی رقبہ = 2(lb + bh + hl)`,
          `قیمتیں درج کر کے ضرب حل کریں:\n2(${l}×${b} + ${b}×${h} + ${h}×${l}) = 2(${lb} + ${bh} + ${hl})`,
          `بریکٹ جمع کر کے 2 سے ضرب دیں:\n2 × ${sumFaces} = ${tsa} مربع سینٹی میٹر`,
        ],
        [
          `Write the total surface area formula for a cuboid:\nTSA = 2(lb + bh + hl)`,
          `Substitute and multiply:\n2(${l}×${b} + ${b}×${h} + ${h}×${l}) = 2(${lb} + ${bh} + ${hl})`,
          `Add inside the bracket and multiply by 2:\n2 × ${sumFaces} = ${tsa} cm²`,
        ]
      );
    }
  }

  // 20 area of rhombus
  for (let i = 1; i <= 20; i++) {
    const d1 = 4 + i * 2;
    const d2 = 5 + (i % 7) * 2;
    const prod = d1 * d2;
    const area = prod / 2;
    push(
      'چوکور اشکال کا رقبہ',
      'Area of Quadrilaterals',
      `اس معین کا رقبہ معلوم کریں جس کے وتر ${d1} سینٹی میٹر اور ${d2} سینٹی میٹر ہوں۔`,
      `Find the area of a rhombus whose diagonals are ${d1} cm and ${d2} cm.`,
      `${area} مربع سینٹی میٹر`,
      `${area} cm²`,
      [`${prod} مربع سینٹی میٹر`, `${d1 + d2} مربع سینٹی میٹر`, `${area + d1} مربع سینٹی میٹر`],
      [`${prod} cm²`, `${d1 + d2} cm²`, `${area + d1} cm²`],
      `معین کا رقبہ = ½ × d₁ × d₂ = ½ × ${d1} × ${d2} = ${area} مربع سینٹی میٹر۔`,
      `Area of rhombus = ½ × d₁ × d₂ = ½ × ${d1} × ${d2} = ${area} cm².`,
      [
        `معین کے رقبے کا کلیہ لکھیں:\nرقبہ = ½ × d₁ × d₂`,
        `دونوں وتروں کی لمبائیاں درج کریں:\n½ × ${d1} × ${d2}`,
        `${d1} × ${d2} = ${prod}، اب ${prod} ÷ 2 = ${area} مربع سینٹی میٹر`,
      ],
      [
        `Write the rhombus area formula:\nArea = ½ × d₁ × d₂`,
        `Substitute the diagonals:\n½ × ${d1} × ${d2}`,
        `${d1} × ${d2} = ${prod}, then ${prod} ÷ 2 = ${area} cm²`,
      ]
    );
  }

  // 20 area of trapezium
  for (let i = 1; i <= 20; i++) {
    const a = 6 + i;
    const b = 10 + i;
    const h = (i % 6) + 4;
    const sumAB = a + b;
    const area = (sumAB * h) / 2;
    push(
      'چوکور اشکال کا رقبہ',
      'Area of Quadrilaterals',
      `ایک ذوزنقہ کے متوازی اضلاع ${a} سینٹی میٹر اور ${b} سینٹی میٹر ہیں اور ان کے درمیان عمودی فاصلہ ${h} سینٹی میٹر ہے۔ اس کا رقبہ معلوم کریں۔`,
      `The parallel sides of a trapezium are ${a} cm and ${b} cm, and the distance between them is ${h} cm. Find its area.`,
      `${area} مربع سینٹی میٹر`,
      `${area} cm²`,
      [`${sumAB * h} مربع سینٹی میٹر`, `${a * b} مربع سینٹی میٹر`, `${area + h} مربع سینٹی میٹر`],
      [`${sumAB * h} cm²`, `${a * b} cm²`, `${area + h} cm²`],
      `رقبہ = ½ × (${a} + ${b}) × ${h} = ½ × ${sumAB} × ${h} = ${area} مربع سینٹی میٹر۔`,
      `Area = ½ × (${a} + ${b}) × ${h} = ½ × ${sumAB} × ${h} = ${area} cm².`,
      [
        `ذوزنقہ کے رقبے کا کلیہ لکھیں:\nرقبہ = ½ × (a + b) × h`,
        `متوازی اضلاع اور بلندی درج کریں:\n½ × (${a} + ${b}) × ${h} = ½ × ${sumAB} × ${h}`,
        `${sumAB} × ${h} = ${sumAB * h}، اب 2 پر تقسیم کریں:\n${sumAB * h} ÷ 2 = ${area} مربع سینٹی میٹر`,
      ],
      [
        `Write the trapezium area formula:\nArea = ½ × (a + b) × h`,
        `Substitute the values:\n½ × (${a} + ${b}) × ${h} = ½ × ${sumAB} × ${h}`,
        `${sumAB} × ${h} = ${sumAB * h}, then divide by 2:\n${sumAB * h} ÷ 2 = ${area} cm²`,
      ]
    );
  }

  return list;
}

function createMeasurementMedium(): MCQQuestion[] {
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
        id: `mea-m-${idx}`,
        chapterId: 'measurement',
        difficulty: 'medium',
        seed: idx * 11 + 3,
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
    'قائمہ دائروی اسطوانہ',
    'Right Circular Cylinder',
    'ایک بند اسطوانہ نما ٹینکی کا رداس 7 میٹر اور بلندی 3 میٹر ہے۔ اسے بنانے کے لیے کتنی دھاتی چادر درکار ہوگی؟ (π = 22/7 استعمال کریں)',
    'A closed cylindrical tank has radius 7 m and height 3 m. How much metal sheet is needed to make it? (Use π = 22/7)',
    '440 مربع میٹر',
    '440 m²',
    ['132 مربع میٹر', '308 مربع میٹر', '462 مربع میٹر'],
    ['132 m²', '308 m²', '462 m²'],
    'کل سطحی رقبہ = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 3) = 44 × 10 = 440 مربع میٹر۔',
    'Total surface area = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 3) = 44 × 10 = 440 m².',
    [
      'بند اسطوانے کے کل سطحی رقبے کا کلیہ لکھیں:\nکل سطحی رقبہ = 2πr(r + h)',
      'قیمتیں r = 7، h = 3 اور π = 22/7 درج کریں:\n2 × (22/7) × 7 × (7 + 3)',
      '7 سے 7 کٹ جاتا ہے: 2 × 22 × 10 = 44 × 10 = 440 مربع میٹر',
    ],
    [
      'Write the TSA formula for a closed cylinder:\nTSA = 2πr(r + h)',
      'Substitute r = 7, h = 3, and π = 22/7:\n2 × (22/7) × 7 × (7 + 3)',
      'Cancel 7: 2 × 22 × 10 = 44 × 10 = 440 m²',
    ]
  );
  push(
    'قائمہ دائروی اسطوانہ',
    'Right Circular Cylinder',
    'اگر ایک اسطوانے کے قاعدے کا رداس یکساں رکھتے ہوئے اس کی بلندی دوگنا کر دی جائے تو اس کا حجم ہو جائے گا:',
    'If the radius of a cylinder stays the same and its height is doubled, its volume becomes:',
    '2 گنا',
    '2 times',
    ['4 گنا', '8 گنا', 'نصف'],
    ['4 times', '8 times', 'Half'],
    'حجم V = πr²h۔ بلندی h کو دوگنا کرنے سے πr²(2h) = 2V ہو جاتا ہے۔',
    'Volume V = πr²h. Doubling h gives πr²(2h) = 2V.',
    [
      'اسطوانے کے اصل حجم کا کلیہ لکھیں:\nV = πr²h',
      'بلندی h کی جگہ 2h درج کریں:\nنیا حجم = πr²(2h) = 2(πr²h)',
      'چونکہ πr²h = V ہے، اس لیے نیا حجم = 2V یعنی 2 گنا ہو جائے گا۔',
    ],
    [
      'Write the original volume:\nV = πr²h',
      'Replace h with 2h:\nNew Volume = πr²(2h) = 2(πr²h)',
      'Since πr²h = V, the new volume is 2V (2 times).',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    'اگر مکعب کے ہر کنارے کی لمبائی دوگنا کر دی جائے تو اس کا حجم کتنے گنا بڑھ جائے گا؟',
    'If each edge of a cube is doubled, how many times does its volume increase?',
    '8 گنا',
    '8 times',
    ['2 گنا', '4 گنا', '6 گنا'],
    ['2 times', '4 times', '6 times'],
    'نیا حجم = (2a)³ = 8a³، جو اصل حجم کا 8 گنا ہے۔',
    'New volume = (2a)³ = 8a³, which is 8 times the original volume.',
    [
      'فرض کریں مکعب کا اصل کنارہ a ہے، تو اصل حجم = a³',
      'کنارہ دوگنا (2a) کرنے پر نیا حجم:\n(2a)³ = 2a × 2a × 2a = 8a³',
      'چونکہ 8a³ = 8 × a³ ہے، اس لیے حجم 8 گنا بڑھ جائے گا۔',
    ],
    [
      'Let the original edge be a, so original volume = a³.',
      'Doubling the edge gives 2a:\nNew volume = (2a)³ = 2a × 2a × 2a = 8a³',
      'Since 8a³ = 8 × a³, the volume increases 8 times.',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    'اگر مکعب کے ہر کنارے کی لمبائی دوگنا کر دی جائے تو اس کا کل سطحی رقبہ کتنے گنا بڑھ جائے گا؟',
    'If each edge of a cube is doubled, how many times does its total surface area increase?',
    '4 گنا',
    '4 times',
    ['2 گنا', '8 گنا', '6 گنا'],
    ['2 times', '8 times', '6 times'],
    'نیا کل سطحی رقبہ = 6(2a)² = 24a² = 4 × (6a²)، چنانچہ یہ 4 گنا بڑھ جاتا ہے۔',
    'New TSA = 6(2a)² = 24a² = 4 × (6a²), so it increases 4 times.',
    [
      'فرض کریں مکعب کا اصل کنارہ a ہے، تو اصل کل سطحی رقبہ = 6a²',
      'کنارہ دوگنا (2a) کرنے پر نیا کل سطحی رقبہ:\n6 × (2a)² = 6 × 4a² = 24a²',
      'موازنہ کریں: 24a² = 4 × (6a²)، اس لیے کل سطحی رقبہ 4 گنا بڑھ جائے گا۔',
    ],
    [
      'Let the original edge be a, so original TSA = 6a².',
      'Doubling the edge to 2a:\nNew TSA = 6 × (2a)² = 6 × 4a² = 24a²',
      'Compare: 24a² = 4 × (6a²), so the TSA increases 4 times.',
    ]
  );
  push(
    'چوکور اشکال کا رقبہ',
    'Area of Quadrilaterals',
    'ایک ذوزنقہ کا رقبہ 34 مربع سینٹی میٹر اور بلندی 4 سینٹی میٹر ہے۔ اگر ایک متوازی ضلع 10 سینٹی میٹر ہو تو دوسرا متوازی ضلع معلوم کریں۔',
    'The area of a trapezium is 34 cm² and its height is 4 cm. If one parallel side is 10 cm, find the other parallel side.',
    '7 سینٹی میٹر',
    '7 cm',
    ['8 سینٹی میٹر', '6 سینٹی میٹر', '17 سینٹی میٹر'],
    ['8 cm', '6 cm', '17 cm'],
    '34 = ½ × (10 + b) × 4 ⇐ 34 = 2(10 + b) ⇐ 10 + b = 17 ⇐ b = 7 سینٹی میٹر۔',
    '34 = ½ × (10 + b) × 4 => 34 = 2(10 + b) => 10 + b = 17 => b = 7 cm.',
    [
      'ذوزنقہ کے رقبے کا کلیہ لکھیں:\nرقبہ = ½ × (a + b) × h',
      'معلوم قیمتیں درج کریں (رقبہ = 34، a = 10، h = 4):\n34 = ½ × (10 + b) × 4 ⇐ 34 = 2(10 + b)',
      '2 پر تقسیم کر کے b نکالیں:\n10 + b = 34 ÷ 2 = 17 ⇐ b = 17 − 10 = 7 سینٹی میٹر',
    ],
    [
      'Write the trapezium area formula:\nArea = ½ × (a + b) × h',
      'Substitute Area = 34, a = 10, h = 4:\n34 = ½ × (10 + b) × 4 => 34 = 2(10 + b)',
      'Divide by 2 and solve:\n10 + b = 17 => b = 17 − 10 = 7 cm',
    ]
  );
  push(
    'چوکور اشکال کا رقبہ',
    'Area of Quadrilaterals',
    'ایک معین کا رقبہ 240 مربع سینٹی میٹر ہے اور اس کا ایک وتر 16 سینٹی میٹر ہے۔ دوسرا وتر معلوم کریں۔',
    'The area of a rhombus is 240 cm² and one of its diagonals is 16 cm. Find the other diagonal.',
    '30 سینٹی میٹر',
    '30 cm',
    ['15 سینٹی میٹر', '20 سینٹی میٹر', '32 سینٹی میٹر'],
    ['15 cm', '20 cm', '32 cm'],
    '240 = ½ × 16 × d₂ ⇐ 240 = 8d₂ ⇐ d₂ = 30 سینٹی میٹر۔',
    '240 = ½ × 16 × d₂ => 240 = 8d₂ => d₂ = 30 cm.',
    [
      'معین کے رقبے کا کلیہ لکھیں:\nرقبہ = ½ × d₁ × d₂',
      'رقبہ = 240 اور d₁ = 16 درج کریں:\n240 = ½ × 16 × d₂ ⇐ 240 = 8d₂',
      '8 سے تقسیم کریں:\nd₂ = 240 ÷ 8 = 30 سینٹی میٹر',
    ],
    [
      'Write the rhombus area formula:\nArea = ½ × d₁ × d₂',
      'Substitute Area = 240 and d₁ = 16:\n240 = ½ × 16 × d₂ => 240 = 8d₂',
      'Divide by 8:\nd₂ = 240 ÷ 8 = 30 cm',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    'ایک مکعب نما کے قاعدے کا رقبہ 180 مربع سینٹی میٹر اور حجم 900 مکعب سینٹی میٹر ہے۔ اس کی بلندی معلوم کریں۔',
    'A cuboid has base area 180 cm² and volume 900 cm³. Find its height.',
    '5 سینٹی میٹر',
    '5 cm',
    ['4 سینٹی میٹر', '6 سینٹی میٹر', '10 سینٹی میٹر'],
    ['4 cm', '6 cm', '10 cm'],
    'حجم = قاعدے کا رقبہ × بلندی ⇐ 900 = 180 × h ⇐ h = 5 سینٹی میٹر۔',
    'Volume = base area × height => 900 = 180 × h => h = 5 cm.',
    [
      'حجم کا کلیہ لکھیں:\nحجم = قاعدے کا رقبہ × بلندی',
      'معلوم قیمتیں درج کریں:\n900 = 180 × h',
      '180 سے تقسیم کریں:\nh = 900 ÷ 180 = 5 سینٹی میٹر',
    ],
    [
      'Write the volume formula:\nVolume = Base Area × Height',
      'Substitute the given values:\n900 = 180 × h',
      'Divide by 180:\nh = 900 ÷ 180 = 5 cm',
    ]
  );
  push(
    'اکائیوں کی تبدیلی',
    'Unit Conversions',
    'دودھ کا ایک اسطوانہ نما ٹینک جس کا رداس 1.5 میٹر اور لمبائی 7 میٹر ہے، اس میں کتنے لیٹر دودھ آ سکتا ہے؟ (π = 22/7 استعمال کریں)',
    'A cylindrical milk tank has radius 1.5 m and length 7 m. How many liters of milk can it hold? (Use π = 22/7)',
    '49500 لیٹر',
    '49500 liters',
    ['49.5 لیٹر', '4950 لیٹر', '495000 لیٹر'],
    ['49.5 liters', '4950 liters', '495000 liters'],
    'حجم = (22/7) × 1.5 × 1.5 × 7 = 49.5 مکعب میٹر۔ چونکہ 1 مکعب میٹر = 1000 لیٹر، گنجائش = 49500 لیٹر۔',
    'Volume = (22/7) × 1.5 × 1.5 × 7 = 49.5 m³. Since 1 m³ = 1000 liters, capacity = 49500 liters.',
    [
      'پہلے اسطوانے کا حجم مکعب میٹر میں نکالیں:\nحجم = πr²h = (22/7) × 1.5 × 1.5 × 7',
      '7 سے 7 کٹنے پر:\n22 × 2.25 = 49.5 مکعب میٹر',
      'لیٹر میں تبدیل کرنے کے لیے 1000 سے ضرب دیں (1 مکعب میٹر = 1000 لیٹر):\n49.5 × 1000 = 49500 لیٹر',
    ],
    [
      'First find the volume in m³:\nVolume = πr²h = (22/7) × 1.5 × 1.5 × 7',
      'Cancel 7:\n22 × 2.25 = 49.5 m³',
      'Convert to liters (1 m³ = 1000 liters):\n49.5 × 1000 = 49500 liters',
    ]
  );
  push(
    'چوکور اشکال کا رقبہ',
    'Area of Quadrilaterals',
    'ایک چوکور شکل کا رقبہ معلوم کریں جس کے وتر کی لمبائی 24 سینٹی میٹر ہے اور مخالف راسوں سے اس پر گرائے گئے عمود 8 سینٹی میٹر اور 13 سینٹی میٹر ہیں۔',
    'Find the area of a quadrilateral whose diagonal is 24 cm and the perpendiculars dropped on it from opposite vertices are 8 cm and 13 cm.',
    '252 مربع سینٹی میٹر',
    '252 cm²',
    ['504 مربع سینٹی میٹر', '126 مربع سینٹی میٹر', '240 مربع سینٹی میٹر'],
    ['504 cm²', '126 cm²', '240 cm²'],
    'رقبہ = ½ × d × (h₁ + h₂) = ½ × 24 × (8 + 13) = 12 × 21 = 252 مربع سینٹی میٹر۔',
    'Area = ½ × d × (h₁ + h₂) = ½ × 24 × (8 + 13) = 12 × 21 = 252 cm².',
    [
      'عام چوکور شکل کے رقبے کا کلیہ لکھیں:\nرقبہ = ½ × وتر × (پہلا عمود + دوسرا عمود)',
      'قیمتیں (d = 24، h₁ = 8، h₂ = 13) درج کریں:\n½ × 24 × (8 + 13)',
      '24 ÷ 2 = 12 اور 8 + 13 = 21:\n12 × 21 = 252 مربع سینٹی میٹر',
    ],
    [
      'Write the area formula for a general quadrilateral:\nArea = ½ × d × (h₁ + h₂)',
      'Substitute d = 24, h₁ = 8, h₂ = 13:\n½ × 24 × (8 + 13)',
      '24 ÷ 2 = 12 and 8 + 13 = 21:\n12 × 21 = 252 cm²',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    'ایک کمرہ 10 میٹر لمبا، 8 میٹر چوڑا اور 4 میٹر اونچا ہے۔ اس کی چاروں دیواروں کا رقبہ معلوم کریں۔',
    'A room is 10 m long, 8 m wide, and 4 m high. Find the area of its four walls.',
    '144 مربع میٹر',
    '144 m²',
    ['320 مربع میٹر', '160 مربع میٹر', '304 مربع میٹر'],
    ['320 m²', '160 m²', '304 m²'],
    'چار دیواروں کا رقبہ = 2(l + b) × h = 2(10 + 8) × 4 = 36 × 4 = 144 مربع میٹر۔',
    'Area of four walls = 2(l + b) × h = 2(10 + 8) × 4 = 36 × 4 = 144 m².',
    [
      'کمرے کی چاروں دیواروں (اطرافی سطحی رقبے) کا کلیہ لکھیں:\nرقبہ = 2(لمبائی + چوڑائی) × اونچائی',
      'دی گئی قیمتیں درج کریں:\n2(10 + 8) × 4 = 2(18) × 4',
      'ضرب مکمل کریں:\n36 × 4 = 144 مربع میٹر',
    ],
    [
      'Write the formula for the lateral surface area (four walls):\nArea = 2(l + b) × h',
      'Substitute the dimensions:\n2(10 + 8) × 4 = 2(18) × 4',
      'Multiply:\n36 × 4 = 144 m²',
    ]
  );
  push(
    'قائمہ دائروی اسطوانہ',
    'Right Circular Cylinder',
    '14 سینٹی میٹر بلندی والے اسطوانے کا خم دار سطحی رقبہ 88 مربع سینٹی میٹر ہے۔ اس کے قاعدے کا قطر معلوم کریں۔ (π = 22/7 استعمال کریں)',
    'The curved surface area of a cylinder of height 14 cm is 88 cm². Find the diameter of its base. (Use π = 22/7)',
    '2 سینٹی میٹر',
    '2 cm',
    ['1 سینٹی میٹر', '4 سینٹی میٹر', '7 سینٹی میٹر'],
    ['1 cm', '4 cm', '7 cm'],
    '2 × (22/7) × r × 14 = 88 ⇐ 88r = 88 ⇐ r = 1 سینٹی میٹر، لہٰذا قطر = 2 سینٹی میٹر۔',
    '2 × (22/7) × r × 14 = 88 => 88r = 88 => r = 1 cm, so diameter = 2 cm.',
    [
      'خم دار سطحی رقبے کا کلیہ لکھیں:\n2πrh = 88 ⇐ 2 × (22/7) × r × 14 = 88',
      'بائیں طرف حل کریں (14 ÷ 7 = 2):\n2 × 22 × 2 × r = 88 ⇐ 88r = 88 ⇐ r = 1 سینٹی میٹر',
      'قطر رداس کا دوگنا ہوتا ہے:\nقطر = 2r = 2 × 1 = 2 سینٹی میٹر',
    ],
    [
      'Use the CSA formula:\n2πrh = 88 => 2 × (22/7) × r × 14 = 88',
      'Simplify (14 ÷ 7 = 2):\n88r = 88 => r = 1 cm',
      'Diameter is twice the radius:\nDiameter = 2r = 2 × 1 = 2 cm',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    '12 سینٹی میٹر × 8 سینٹی میٹر × 6 سینٹی میٹر پیمائش کے مکعب نما ڈبے میں 2 سینٹی میٹر ضلع والے کتنے چھوٹے مکعب رکھے جا سکتے ہیں؟',
    'How many small cubes of side 2 cm can fit inside a cuboid box of dimensions 12 cm × 8 cm × 6 cm?',
    '72',
    '72',
    ['36', '144', '48'],
    ['36', '144', '48'],
    'مکعبوں کی تعداد = (12 × 8 × 6) ÷ (2 × 2 × 2) = 576 ÷ 8 = 72۔',
    'Number of cubes = (12 × 8 × 6) ÷ (2 × 2 × 2) = 576 ÷ 8 = 72.',
    [
      'بڑے مکعب نما ڈبے کا حجم نکالیں:\n12 × 8 × 6 = 576 مکعب سینٹی میٹر',
      'ایک چھوٹے مکعب کا حجم نکالیں:\n2 × 2 × 2 = 8 مکعب سینٹی میٹر',
      'بڑے حجم کو چھوٹے حجم پر تقسیم کریں:\n576 ÷ 8 = 72 مکعب',
    ],
    [
      'Find the volume of the cuboid box:\n12 × 8 × 6 = 576 cm³',
      'Find the volume of one small cube:\n2 × 2 × 2 = 8 cm³',
      'Divide box volume by cube volume:\n576 ÷ 8 = 72 cubes',
    ]
  );

  // 22 CSA & TSA of cylinder
  const cylR = [7, 14, 21, 7, 14, 7, 21, 14, 7, 28, 7, 14, 21, 7, 14, 7, 21, 14, 7, 28, 7, 14];
  const cylH = [5, 6, 4, 8, 10, 12, 5, 8, 15, 5, 9, 11, 7, 14, 15, 20, 10, 12, 16, 8, 25, 18];
  for (let i = 0; i < 22; i++) {
    const r = cylR[i];
    const h = cylH[i];
    const rDiv7 = r / 7;
    if (i < 11) {
      const csa = 2 * (22 / 7) * r * h;
      push(
        'قائمہ دائروی اسطوانہ',
        'Right Circular Cylinder',
        `رداس ${r} سینٹی میٹر اور بلندی ${h} سینٹی میٹر والے قائمہ دائروی اسطوانے کا خم دار سطحی رقبہ معلوم کریں۔ (π = 22/7 استعمال کریں)`,
        `Find the curved surface area of a right circular cylinder with radius ${r} cm and height ${h} cm. (Use π = 22/7)`,
        `${csa} مربع سینٹی میٹر`,
        `${csa} cm²`,
        [`${csa / 2} مربع سینٹی میٹر`, `${csa + 2 * (22 / 7) * r * r} مربع سینٹی میٹر`, `${csa + 44} مربع سینٹی میٹر`],
        [`${csa / 2} cm²`, `${csa + 2 * (22 / 7) * r * r} cm²`, `${csa + 44} cm²`],
        `خم دار سطحی رقبہ = 2πrh = 2 × (22/7) × ${r} × ${h} = ${csa} مربع سینٹی میٹر۔`,
        `CSA = 2πrh = 2 × (22/7) × ${r} × ${h} = ${csa} cm².`,
        [
          `خم دار سطحی رقبے کا کلیہ لکھیں:\nخم دار سطحی رقبہ = 2πrh`,
          `قیمتیں r = ${r}، h = ${h} اور π = 22/7 درج کریں:\n2 × (22/7) × ${r} × ${h}`,
          `${r} ÷ 7 = ${rDiv7}، پس 2 × 22 × ${rDiv7} × ${h} = ${csa} مربع سینٹی میٹر`,
        ],
        [
          `Write the CSA formula:\nCSA = 2πrh`,
          `Substitute r = ${r}, h = ${h}, and π = 22/7:\n2 × (22/7) × ${r} × ${h}`,
          `Since ${r} ÷ 7 = ${rDiv7}, 2 × 22 × ${rDiv7} × ${h} = ${csa} cm²`,
        ]
      );
    } else {
      const tsa = 2 * (22 / 7) * r * (r + h);
      push(
        'قائمہ دائروی اسطوانہ',
        'Right Circular Cylinder',
        `رداس ${r} سینٹی میٹر اور بلندی ${h} سینٹی میٹر والے بند اسطوانے کا کل سطحی رقبہ معلوم کریں۔ (π = 22/7 استعمال کریں)`,
        `Find the total surface area of a closed cylinder with radius ${r} cm and height ${h} cm. (Use π = 22/7)`,
        `${tsa} مربع سینٹی میٹر`,
        `${tsa} cm²`,
        [`${2 * (22 / 7) * r * h} مربع سینٹی میٹر`, `${tsa - 44} مربع سینٹی میٹر`, `${(22 / 7) * r * r * h} مربع سینٹی میٹر`],
        [`${2 * (22 / 7) * r * h} cm²`, `${tsa - 44} cm²`, `${(22 / 7) * r * r * h} cm²`],
        `کل سطحی رقبہ = 2πr(r + h) = 2 × (22/7) × ${r} × (${r} + ${h}) = ${tsa} مربع سینٹی میٹر۔`,
        `TSA = 2πr(r + h) = 2 × (22/7) × ${r} × (${r} + ${h}) = ${tsa} cm².`,
        [
          `بند اسطوانے کے کل سطحی رقبے کا کلیہ لکھیں:\nکل سطحی رقبہ = 2πr(r + h)`,
          `قیمتیں r = ${r}، h = ${h} اور π = 22/7 درج کریں:\n2 × (22/7) × ${r} × (${r} + ${h}) = 44 × ${rDiv7} × ${r + h}`,
          `ضرب مکمل کریں:\n${44 * rDiv7} × ${r + h} = ${tsa} مربع سینٹی میٹر`,
        ],
        [
          `Write the TSA formula for a closed cylinder:\nTSA = 2πr(r + h)`,
          `Substitute r = ${r}, h = ${h}, and π = 22/7:\n2 × (22/7) × ${r} × (${r} + ${h}) = 44 × ${rDiv7} × ${r + h}`,
          `Multiply:\n${44 * rDiv7} × ${r + h} = ${tsa} cm²`,
        ]
      );
    }
  }

  // 22 volume of cylinder
  for (let i = 0; i < 22; i++) {
    const r = i % 3 === 0 ? 7 : i % 3 === 1 ? 14 : 21;
    const h = 3 + i;
    const vol = (22 / 7) * r * r * h;
    const rDiv7 = r / 7;
    push(
      'قائمہ دائروی اسطوانہ',
      'Right Circular Cylinder',
      `قاعدہ رداس ${r} سینٹی میٹر اور بلندی ${h} سینٹی میٹر والے اسطوانے کا حجم معلوم کریں۔ (π = 22/7 استعمال کریں)`,
      `Find the volume of a cylinder with base radius ${r} cm and height ${h} cm. (Use π = 22/7)`,
      `${vol} مکعب سینٹی میٹر`,
      `${vol} cm³`,
      [`${2 * (22 / 7) * r * h} مکعب سینٹی میٹر`, `${vol / 2} مکعب سینٹی میٹر`, `${vol + 154} مکعب سینٹی میٹر`],
      [`${2 * (22 / 7) * r * h} cm³`, `${vol / 2} cm³`, `${vol + 154} cm³`],
      `حجم = πr²h = (22/7) × ${r}² × ${h} = ${vol} مکعب سینٹی میٹر۔`,
      `Volume = πr²h = (22/7) × ${r}² × ${h} = ${vol} cm³.`,
      [
        `اسطوانے کے حجم کا کلیہ لکھیں:\nحجم = πr²h`,
        `قیمتیں r = ${r}، h = ${h} اور π = 22/7 درج کریں:\n(22/7) × ${r} × ${r} × ${h}`,
        `${r} ÷ 7 = ${rDiv7}، پس 22 × ${rDiv7} × ${r} × ${h} = ${vol} مکعب سینٹی میٹر`,
      ],
      [
        `Write the cylinder volume formula:\nVolume = πr²h`,
        `Substitute r = ${r}, h = ${h}, and π = 22/7:\n(22/7) × ${r} × ${r} × ${h}`,
        `Since ${r} ÷ 7 = ${rDiv7}, 22 × ${rDiv7} × ${r} × ${h} = ${vol} cm³`,
      ]
    );
  }

  // 22 inverse trapezium & rhombus questions
  for (let i = 1; i <= 22; i++) {
    if (i <= 11) {
      const a = 8 + i;
      const b = 12 + i;
      const h = 4 + (i % 5);
      const area = ((a + b) * h) / 2;
      const sumAB = a + b;
      push(
        'چوکور اشکال کا رقبہ',
        'Area of Quadrilaterals',
        `ایک ذوزنقہ کا رقبہ ${area} مربع سینٹی میٹر ہے اور اس کے متوازی اضلاع ${a} سینٹی میٹر اور ${b} سینٹی میٹر ہیں۔ اس کی بلندی معلوم کریں۔`,
        `The area of a trapezium is ${area} cm² and its parallel sides are ${a} cm and ${b} cm. Find its height.`,
        `${h} سینٹی میٹر`,
        `${h} cm`,
        [`${h * 2} سینٹی میٹر`, `${h + 2} سینٹی میٹر`, `${Math.max(1, h - 1)} سینٹی میٹر`],
        [`${h * 2} cm`, `${h + 2} cm`, `${Math.max(1, h - 1)} cm`],
        `رقبہ = ½(a + b)h ⇐ ${area} = ½(${sumAB})h ⇐ h = ${2 * area} ÷ ${sumAB} = ${h} سینٹی میٹر۔`,
        `Area = ½(a + b)h => ${area} = ½(${sumAB})h => h = ${2 * area} ÷ ${sumAB} = ${h} cm.`,
        [
          `ذوزنقہ کے رقبے کا کلیہ لکھیں:\nرقبہ = ½ × (a + b) × h`,
          `قیمتیں درج کریں:\n${area} = ½ × (${a} + ${b}) × h ⇐ ${area} = ½ × ${sumAB} × h`,
          `دونوں طرف 2 سے ضرب دے کر ${sumAB} پر تقسیم کریں:\n${2 * area} = ${sumAB}h ⇐ h = ${2 * area} ÷ ${sumAB} = ${h} سینٹی میٹر`,
        ],
        [
          `Write the trapezium area formula:\nArea = ½ × (a + b) × h`,
          `Substitute the values:\n${area} = ½ × (${a} + ${b}) × h => ${area} = ½ × ${sumAB} × h`,
          `Multiply by 2 and divide by ${sumAB}:\n${2 * area} = ${sumAB}h => h = ${2 * area} ÷ ${sumAB} = ${h} cm`,
        ]
      );
    } else {
      const d1 = 6 + (i - 11) * 2;
      const d2 = 8 + (i % 6) * 2;
      const area = (d1 * d2) / 2;
      push(
        'چوکور اشکال کا رقبہ',
        'Area of Quadrilaterals',
        `ایک معین کا رقبہ ${area} مربع سینٹی میٹر ہے اور اس کا ایک وتر ${d1} سینٹی میٹر ہے۔ دوسرے وتر کی لمبائی کیا ہوگی؟`,
        `The area of a rhombus is ${area} cm² and one diagonal is ${d1} cm. What is the length of the other diagonal?`,
        `${d2} سینٹی میٹر`,
        `${d2} cm`,
        [`${d2 / 2} سینٹی میٹر`, `${d2 + 4} سینٹی میٹر`, `${d1} سینٹی میٹر`],
        [`${d2 / 2} cm`, `${d2 + 4} cm`, `${d1} cm`],
        `رقبہ = ½ × d₁ × d₂ ⇐ ${area} = ½ × ${d1} × d₂ ⇐ d₂ = ${d2} سینٹی میٹر۔`,
        `Area = ½ × d₁ × d₂ => ${area} = ½ × ${d1} × d₂ => d₂ = ${d2} cm.`,
        [
          `معین کے رقبے کا کلیہ لکھیں:\nرقبہ = ½ × d₁ × d₂`,
          `رقبہ = ${area} اور d₁ = ${d1} درج کریں:\n${area} = ½ × ${d1} × d₂ ⇐ ${area} = ${d1 / 2}d₂`,
          `${d1 / 2} پر تقسیم کریں:\nd₂ = ${area} ÷ ${d1 / 2} = ${d2} سینٹی میٹر`,
        ],
        [
          `Write the rhombus area formula:\nArea = ½ × d₁ × d₂`,
          `Substitute Area = ${area} and d₁ = ${d1}:\n${area} = ½ × ${d1} × d₂ => ${area} = ${d1 / 2}d₂`,
          `Divide by ${d1 / 2}:\nd₂ = ${area} ÷ ${d1 / 2} = ${d2} cm`,
        ]
      );
    }
  }

  // 22 cuboid LSA & cube side from TSA
  for (let i = 1; i <= 22; i++) {
    if (i <= 11) {
      const l = 6 + i;
      const b = 4 + (i % 5);
      const h = 3 + (i % 4);
      const lsa = 2 * (l + b) * h;
      push(
        'مکعب اور مکعب نما',
        'Cube and Cuboid',
        `لمبائی ${l} میٹر، چوڑائی ${b} میٹر اور بلندی ${h} میٹر والے مکعب نما کا اطرافی سطحی رقبہ معلوم کریں۔`,
        `Find the lateral surface area of a cuboid with length ${l} m, breadth ${b} m, and height ${h} m.`,
        `${lsa} مربع میٹر`,
        `${lsa} m²`,
        [`${2 * (l * b + b * h + h * l)} مربع میٹر`, `${l * b * h} مربع میٹر`, `${lsa / 2} مربع میٹر`],
        [`${2 * (l * b + b * h + h * l)} m²`, `${l * b * h} m²`, `${lsa / 2} m²`],
        `اطرافی سطحی رقبہ = 2(l + b) × h = 2(${l} + ${b}) × ${h} = ${lsa} مربع میٹر۔`,
        `LSA = 2(l + b) × h = 2(${l} + ${b}) × ${h} = ${lsa} m².`,
        [
          `مکعب نما کے اطرافی سطحی رقبے کا کلیہ لکھیں:\nاطرافی سطحی رقبہ = 2(l + b) × h`,
          `قیمتیں درج کریں:\n2(${l} + ${b}) × ${h} = 2(${l + b}) × ${h}`,
          `ضرب مکمل کریں:\n${2 * (l + b)} × ${h} = ${lsa} مربع میٹر`,
        ],
        [
          `Write the cuboid LSA formula:\nLSA = 2(l + b) × h`,
          `Substitute the values:\n2(${l} + ${b}) × ${h} = 2(${l + b}) × ${h}`,
          `Multiply:\n${2 * (l + b)} × ${h} = ${lsa} m²`,
        ]
      );
    } else {
      const side = i - 9;
      const tsa = 6 * side * side;
      push(
        'مکعب اور مکعب نما',
        'Cube and Cuboid',
        `اس مکعب کے ضلع کی لمبائی معلوم کریں جس کا کل سطحی رقبہ ${tsa} مربع سینٹی میٹر ہو۔`,
        `Find the side length of a cube whose total surface area is ${tsa} cm².`,
        `${side} سینٹی میٹر`,
        `${side} cm`,
        [`${side + 2} سینٹی میٹر`, `${side * 2} سینٹی میٹر`, `${Math.max(1, side - 1)} سینٹی میٹر`],
        [`${side + 2} cm`, `${side * 2} cm`, `${Math.max(1, side - 1)} cm`],
        `6a² = ${tsa} ⇐ a² = ${side * side} ⇐ a = ${side} سینٹی میٹر۔`,
        `6a² = ${tsa} => a² = ${side * side} => a = ${side} cm.`,
        [
          `مکعب کے کل سطحی رقبے کا کلیہ لکھیں:\n6a² = ${tsa}`,
          `دونوں طرف 6 سے تقسیم کریں:\na² = ${tsa} ÷ 6 = ${side * side}`,
          `دونوں طرف جذر المربع لیں:\na = √${side * side} = ${side} سینٹی میٹر`,
        ],
        [
          `Use the TSA formula for a cube:\n6a² = ${tsa}`,
          `Divide both sides by 6:\na² = ${tsa} ÷ 6 = ${side * side}`,
          `Take the square root:\na = √${side * side} = ${side} cm`,
        ]
      );
    }
  }

  return list;
}

function createMeasurementHard(): MCQQuestion[] {
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
        id: `mea-h-${idx}`,
        chapterId: 'measurement',
        difficulty: 'hard',
        seed: idx * 13 + 11,
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
    'قائمہ دائروی اسطوانہ',
    'Right Circular Cylinder',
    'ایک روڈ رولر سڑک کو ہموار کرنے کے لیے 750 مکمل چکر لگاتا ہے۔ اگر اس کا قطر 84 سینٹی میٹر اور لمبائی 1 میٹر ہو تو سڑک کا رقبہ معلوم کریں۔ (π = 22/7 استعمال کریں)',
    'A road roller makes 750 complete revolutions to level a road. If its diameter is 84 cm and length is 1 m, find the area of the road. (Use π = 22/7)',
    '1980 مربع میٹر',
    '1980 m²',
    ['198 مربع میٹر', '3960 مربع میٹر', '990 مربع میٹر'],
    ['198 m²', '3960 m²', '990 m²'],
    'r = 0.42 میٹر، h = 1 میٹر۔ خم دار سطحی رقبہ = 2 × (22/7) × 0.42 × 1 = 2.64 مربع میٹر۔ رقبہ = 750 × 2.64 = 1980 مربع میٹر۔',
    'r = 0.42 m, h = 1 m. CSA = 2 × (22/7) × 0.42 × 1 = 2.64 m². Road area = 750 × 2.64 = 1980 m².',
    [
      'پہلے رداس کو میٹر میں بدلیں:\nرداس r = 84 ÷ 2 = 42 سینٹی میٹر = 0.42 میٹر، لمبائی h = 1 میٹر',
      '1 چکر میں طے شدہ رقبہ (اسطوانے کا خم دار سطحی رقبہ) معلوم کریں:\n2πrh = 2 × (22/7) × 0.42 × 1 = 44 × 0.06 = 2.64 مربع میٹر',
      '750 چکروں میں طے شدہ کل رقبہ:\n750 × 2.64 = 1980 مربع میٹر',
    ],
    [
      'Convert the radius into meters:\nr = 84 ÷ 2 = 42 cm = 0.42 m, length h = 1 m',
      'Find the area covered in 1 revolution (CSA):\n2πrh = 2 × (22/7) × 0.42 × 1 = 44 × 0.06 = 2.64 m²',
      'Multiply by 750 revolutions:\n750 × 2.64 = 1980 m²',
    ]
  );
  push(
    'قائمہ دائروی اسطوانہ',
    'Right Circular Cylinder',
    'اگر کسی اسطوانے کا رداس دوگنا کر دیا جائے اور اس کی بلندی نصف کر دی جائے تو اس کے حجم پر کیا اثر پڑے گا؟',
    'If the radius of a cylinder is doubled and its height is halved, what happens to its volume?',
    'یہ دوگنا ہو جائے گا',
    'It doubles',
    ['یہ یکساں رہے گا', 'یہ 4 گنا ہو جائے گا', 'یہ نصف ہو جائے گا'],
    ['It remains the same', 'It becomes 4 times', 'It halves'],
    'نیا حجم = π(2r)²(h/2) = 2πr²h، جو اصل حجم سے دوگنا ہے۔',
    'New volume = π(2r)²(h/2) = 2πr²h, which is double the original volume.',
    [
      'اسطوانے کا اصل حجم لکھیں:\nV = πr²h',
      'نیا رداس 2r اور نئی بلندی h/2 کلیے میں درج کریں:\nنیا حجم = π(2r)² × (h/2) = π(4r²) × (h/2)',
      'مختصر کریں (4 ÷ 2 = 2):\nنیا حجم = 2πr²h = 2V، یعنی دوگنا ہو جائے گا۔',
    ],
    [
      'Write the original volume:\nV = πr²h',
      'Substitute radius 2r and height h/2:\nNew Volume = π(2r)² × (h/2) = π(4r²) × (h/2)',
      'Simplify (4 ÷ 2 = 2):\nNew Volume = 2πr²h = 2V (it doubles).',
    ]
  );
  push(
    'قائمہ دائروی اسطوانہ',
    'Right Circular Cylinder',
    'دو اسطوانوں کے رداس کی نسبت 2 : 3 اور بلندیوں کی نسبت 5 : 3 ہے۔ ان کے حجموں کی نسبت معلوم کریں۔',
    'Two cylinders have radii in the ratio 2 : 3 and heights in the ratio 5 : 3. Find the ratio of their volumes.',
    '20 : 27',
    '20 : 27',
    ['10 : 9', '4 : 9', '15 : 18'],
    ['10 : 9', '4 : 9', '15 : 18'],
    'V₁/V₂ = (r₁/r₂)² × (h₁/h₂) = (2/3)² × (5/3) = (4/9) × (5/3) = 20 : 27۔',
    'V₁/V₂ = (r₁/r₂)² × (h₁/h₂) = (2/3)² × (5/3) = (4/9) × (5/3) = 20 : 27.',
    [
      'دونوں اسطوانوں کے حجموں کی نسبت کا کلیہ لکھیں:\nV₁ / V₂ = (πr₁²h₁) / (πr₂²h₂) = (r₁ / r₂)² × (h₁ / h₂)',
      'رداس کی نسبت (2/3) اور بلندی کی نسبت (5/3) درج کریں:\n(2/3)² × (5/3) = (4/9) × (5/3)',
      'کسروں کو ضرب دیں:\n(4 × 5) / (9 × 3) = 20/27 یعنی 20 : 27',
    ],
    [
      'Write the ratio of their volumes:\nV₁ / V₂ = (πr₁²h₁) / (πr₂²h₂) = (r₁ / r₂)² × (h₁ / h₂)',
      'Substitute r₁/r₂ = 2/3 and h₁/h₂ = 5/3:\n(2/3)² × (5/3) = (4/9) × (5/3)',
      'Multiply:\n(4 × 5) / (9 × 3) = 20/27, or 20 : 27',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    '44 سینٹی میٹر × 18 سینٹی میٹر کے ایک مستطیل کاغذ کو اس کی لمبائی کے رخ موڑ کر اسطوانہ بنایا گیا ہے۔ اسطوانے کا رداس معلوم کریں۔ (π = 22/7 استعمال کریں)',
    'A rectangular sheet of paper 44 cm × 18 cm is rolled along its length to form a cylinder. Find the radius of the cylinder. (Use π = 22/7)',
    '7 سینٹی میٹر',
    '7 cm',
    ['14 سینٹی میٹر', '3.5 سینٹی میٹر', '22 سینٹی میٹر'],
    ['14 cm', '3.5 cm', '22 cm'],
    'محیط 2πr = 44 ⇐ 2 × (22/7) × r = 44 ⇐ r = 7 سینٹی میٹر۔',
    'Circumference 2πr = 44 => 2 × (22/7) × r = 44 => r = 7 cm.',
    [
      'لمبائی کے رخ موڑنے پر کاغذ کی لمبائی اسطوانے کے قاعدے کا محیط بن جاتی ہے:\nمحیط (2πr) = 44 سینٹی میٹر',
      'π = 22/7 درج کریں:\n2 × (22/7) × r = 44 ⇐ (44/7) × r = 44',
      'r معلوم کریں:\nr = (44 × 7) ÷ 44 = 7 سینٹی میٹر',
    ],
    [
      'Rolling along the length makes 44 cm the circumference of the base:\n2πr = 44 cm',
      'Substitute π = 22/7:\n2 × (22/7) × r = 44 => (44/7) × r = 44',
      'Solve for r:\nr = (44 × 7) ÷ 44 = 7 cm',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    'ایک مکعب نما حوض میں 60 لیٹر فی منٹ کی رفتار سے پانی بھر رہا ہے۔ اگر حوض کا حجم 108 مکعب میٹر ہو تو اسے بھرنے میں کتنے گھنٹے لگیں گے؟',
    'Water is pouring into a cuboidal reservoir at 60 liters per minute. If its volume is 108 m³, how many hours will it take to fill?',
    '30 گھنٹے',
    '30 hours',
    ['18 گھنٹے', '45 گھنٹے', '20 گھنٹے'],
    ['18 hours', '45 hours', '20 hours'],
    '108 مکعب میٹر = 108000 لیٹر۔ وقت = 108000 ÷ (60 × 60) = 108000 ÷ 3600 = 30 گھنٹے۔',
    '108 m³ = 108000 liters. Time = 108000 ÷ (60 × 60) = 108000 ÷ 3600 = 30 hours.',
    [
      'حجم کو لیٹر میں تبدیل کریں (1 مکعب میٹر = 1000 لیٹر):\n108 × 1000 = 108,000 لیٹر',
      '1 گھنٹے (60 منٹ) میں بھرنے والے پانی کی مقدار:\n60 لیٹر/منٹ × 60 منٹ = 3600 لیٹر فی گھنٹہ',
      'کل وقت نکالیں:\n108,000 ÷ 3600 = 30 گھنٹے',
    ],
    [
      'Convert volume to liters (1 m³ = 1000 liters):\n108 × 1000 = 108,000 liters',
      'Find water filled in 1 hour (60 minutes):\n60 × 60 = 3600 liters/hour',
      'Divide to find total hours:\n108,000 ÷ 3600 = 30 hours',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    '3 سینٹی میٹر، 4 سینٹی میٹر اور 5 سینٹی میٹر اضلاع والے تین دھاتی مکعبوں کو پگھلا کر ایک بڑا مکعب بنایا گیا ہے۔ نئے مکعب کا ضلع معلوم کریں۔',
    'Three metallic cubes of edges 3 cm, 4 cm, and 5 cm are melted to form a single large cube. Find the edge of the new cube.',
    '6 سینٹی میٹر',
    '6 cm',
    ['12 سینٹی میٹر', '7 سینٹی میٹر', '8 سینٹی میٹر'],
    ['12 cm', '7 cm', '8 cm'],
    'کل حجم = 3³ + 4³ + 5³ = 27 + 64 + 125 = 216 مکعب سینٹی میٹر۔ ضلع = ∛216 = 6 سینٹی میٹر۔',
    'Total volume = 3³ + 4³ + 5³ = 27 + 64 + 125 = 216 cm³. Edge = ∛216 = 6 cm.',
    [
      'تینوں مکعبوں کے الگ الگ حجم جمع کر کے بڑے مکعب کا حجم معلوم کریں:\n3³ + 4³ + 5³ = 27 + 64 + 125 = 216 مکعب سینٹی میٹر',
      'بڑے مکعب کا ضلع a فرض کریں:\na³ = 216',
      'جذر المکعب لیں:\na = ∛216 = 6 سینٹی میٹر',
    ],
    [
      'Add the volumes of the three cubes:\n3³ + 4³ + 5³ = 27 + 64 + 125 = 216 cm³',
      'Let the edge of the new cube be a:\na³ = 216',
      'Take the cube root:\na = ∛216 = 6 cm',
    ]
  );
  push(
    'چوکور اشکال کا رقبہ',
    'Area of Quadrilaterals',
    'ایک ذوزنقہ کے متوازی اضلاع 20 سینٹی میٹر اور 10 سینٹی میٹر ہیں جبکہ دونوں غیر متوازی اضلاع برابر اور 13 سینٹی میٹر لمبے ہیں۔ ذوزنقہ کا رقبہ معلوم کریں۔',
    'The parallel sides of a trapezium are 20 cm and 10 cm, and both non-parallel sides are 13 cm each. Find the area of the trapezium.',
    '180 مربع سینٹی میٹر',
    '180 cm²',
    ['195 مربع سینٹی میٹر', '150 مربع سینٹی میٹر', '210 مربع سینٹی میٹر'],
    ['195 cm²', '150 cm²', '210 cm²'],
    'عمود گرانے سے قائمہ مثلث بنتی ہے جس کا قاعدہ (20−10)/2 = 5 سینٹی میٹر اور وتر 13 سینٹی میٹر ہے، لہٰذا بلندی h = √(13² − 5²) = 12 سینٹی میٹر۔ رقبہ = ½(20+10)×12 = 180 مربع سینٹی میٹر۔',
    'Dropping perpendiculars gives right triangles with base (20 − 10)/2 = 5 cm and hypotenuse 13 cm, so h = √(13² − 5²) = 12 cm. Area = ½(20 + 10) × 12 = 180 cm².',
    [
      'مساوی الساقین ذوزنقہ کے چھوٹے ضلع سے بڑے ضلع پر دو عمود گرا کر دونوں طرف قائمہ مثلثیں بنائیں:\nہر مثلث کا قاعدہ = (20 − 10) ÷ 2 = 5 سینٹی میٹر اور وتر = 13 سینٹی میٹر',
      'مسئلہ فیثاغورث سے بلندی h معلوم کریں:\nh = √(13² − 5²) = √(169 − 25) = √144 = 12 سینٹی میٹر',
      'ذوزنقہ کے رقبے کے کلیے سے حل کریں:\nرقبہ = ½ × (20 + 10) × 12 = ½ × 30 × 12 = 180 مربع سینٹی میٹر',
    ],
    [
      'Drop perpendiculars from the shorter base to the longer base to form two right triangles:\nBase of each triangle = (20 − 10) ÷ 2 = 5 cm, hypotenuse = 13 cm',
      'Find height h using Pythagoras theorem:\nh = √(13² − 5²) = √(169 − 25) = √144 = 12 cm',
      'Calculate area of the trapezium:\nArea = ½ × (20 + 10) × 12 = ½ × 30 × 12 = 180 cm²',
    ]
  );
  push(
    'چوکور اشکال کا رقبہ',
    'Area of Quadrilaterals',
    'ایک معین کا احاطہ 52 سینٹی میٹر اور ایک وتر 10 سینٹی میٹر ہے۔ معین کا رقبہ معلوم کریں۔',
    'The perimeter of a rhombus is 52 cm and one diagonal is 10 cm. Find the area of the rhombus.',
    '120 مربع سینٹی میٹر',
    '120 cm²',
    ['60 مربع سینٹی میٹر', '240 مربع سینٹی میٹر', '130 مربع سینٹی میٹر'],
    ['60 cm²', '240 cm²', '130 cm²'],
    'ضلع = 52/4 = 13 سینٹی میٹر۔ معلوم وتر کا نصف = 5 سینٹی میٹر، پس دوسرے وتر کا نصف = √(13²−5²) = 12 سینٹی میٹر ⇐ d₂ = 24 سینٹی میٹر۔ رقبہ = ½ × 10 × 24 = 120 مربع سینٹی میٹر۔',
    'Side = 52/4 = 13 cm. Half of given diagonal = 5 cm, so half of other diagonal = √(13² − 5²) = 12 cm => d₂ = 24 cm. Area = ½ × 10 × 24 = 120 cm².',
    [
      'پہلے معین کا ضلع اور معلوم وتر کا نصف نکالیں:\nضلع = 52 ÷ 4 = 13 سینٹی میٹر، نصف وتر = 10 ÷ 2 = 5 سینٹی میٹر',
      'وتر 90° پر تنصیف کرتے ہیں، اس لیے مسئلہ فیثاغورث سے دوسرے وتر کا نصف نکالیں:\n√(13² − 5²) = √(169 − 25) = √144 = 12 سینٹی میٹر ⇐ دوسرا وتر d₂ = 2 × 12 = 24 سینٹی میٹر',
      'معین کا رقبہ معلوم کریں:\nرقبہ = ½ × 10 × 24 = 120 مربع سینٹی میٹر',
    ],
    [
      'Find the side length and half of the given diagonal:\nSide = 52 ÷ 4 = 13 cm, half-diagonal = 10 ÷ 2 = 5 cm',
      'Diagonals bisect at 90°, so by Pythagoras theorem:\nOther half-diagonal = √(13² − 5²) = √144 = 12 cm => d₂ = 24 cm',
      'Find the area:\nArea = ½ × 10 × 24 = 120 cm²',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    'ایک مکعب نما کی پیمائشیں 1 : 2 : 3 کی نسبت میں ہیں اور اس کا کل سطحی رقبہ 88 مربع سینٹی میٹر ہے۔ اس کا حجم معلوم کریں۔',
    'The dimensions of a cuboid are in the ratio 1 : 2 : 3 and its total surface area is 88 cm². Find its volume.',
    '48 مکعب سینٹی میٹر',
    '48 cm³',
    ['24 مکعب سینٹی میٹر', '96 مکعب سینٹی میٹر', '64 مکعب سینٹی میٹر'],
    ['24 cm³', '96 cm³', '64 cm³'],
    'اضلاع x، 2x، 3x فرض کریں۔ کل سطحی رقبہ = 2(2x² + 6x² + 3x²) = 22x² = 88 ⇐ x² = 4 ⇐ x = 2۔ اضلاع 2، 4، 6 سینٹی میٹر ہیں؛ حجم = 48 مکعب سینٹی میٹر۔',
    'Let dimensions be x, 2x, 3x. TSA = 2(2x² + 6x² + 3x²) = 22x² = 88 => x² = 4 => x = 2. Sides are 2, 4, 6 cm; volume = 48 cm³.',
    [
      'مکعب نما کے اضلاع x، 2x اور 3x فرض کر کے کل سطحی رقبے کا کلیہ لگائیں:\n2(x·2x + 2x·3x + 3x·x) = 88',
      'مساوات حل کر کے x معلوم کریں:\n2(2x² + 6x² + 3x²) = 88 ⇐ 22x² = 88 ⇐ x² = 4 ⇐ x = 2',
      'اضلاع 2، 4 اور 6 سینٹی میٹر ہوئے۔ حجم معلوم کریں:\n2 × 4 × 6 = 48 مکعب سینٹی میٹر',
    ],
    [
      'Let the dimensions be x, 2x, and 3x:\n2(x·2x + 2x·3x + 3x·x) = 88',
      'Solve for x:\n2(11x²) = 88 => 22x² = 88 => x² = 4 => x = 2',
      'Dimensions are 2, 4, and 6 cm. Volume:\n2 × 4 × 6 = 48 cm³',
    ]
  );
  push(
    'قائمہ دائروی اسطوانہ',
    'Right Circular Cylinder',
    'ایک اسطوانے کے خم دار سطحی رقبے اور کل سطحی رقبے کی نسبت 1 : 2 ہے۔ اگر کل سطحی رقبہ 616 مربع سینٹی میٹر ہو تو اس کا رداس معلوم کریں۔ (π = 22/7 استعمال کریں)',
    'The ratio of the curved surface area to total surface area of a cylinder is 1 : 2. If the TSA is 616 cm², find its radius. (Use π = 22/7)',
    '7 سینٹی میٹر',
    '7 cm',
    ['14 سینٹی میٹر', '3.5 سینٹی میٹر', '10.5 سینٹی میٹر'],
    ['14 cm', '3.5 cm', '10.5 cm'],
    'نسبت h/(r+h) = 1/2 سے h = r ملتا ہے۔ کل سطحی رقبہ = 2πr(2r) = 4πr² = 616 ⇐ r² = 49 ⇐ r = 7 سینٹی میٹر۔',
    'From h/(r + h) = 1/2, we get h = r. TSA = 2πr(2r) = 4πr² = 616 => r² = 49 => r = 7 cm.',
    [
      'دونوں رقبوں کی نسبت لکھیں:\n2πrh / 2πr(r + h) = 1/2 ⇐ h / (r + h) = 1/2 ⇐ 2h = r + h ⇐ h = r',
      'کل سطحی رقبے میں h = r درج کریں:\n2πr(r + r) = 4πr² = 616',
      'π = 22/7 رکھ کر r نکالیں:\n4 × (22/7) × r² = 616 ⇐ r² = (616 × 7) ÷ 88 = 49 ⇐ r = √49 = 7 سینٹی میٹر',
    ],
    [
      'Use the given ratio:\n2πrh / 2πr(r + h) = 1/2 => h / (r + h) = 1/2 => 2h = r + h => h = r',
      'Substitute h = r into TSA:\n2πr(r + r) = 4πr² = 616',
      'Substitute π = 22/7:\n4 × (22/7) × r² = 616 => r² = (616 × 7) ÷ 88 = 49 => r = 7 cm',
    ]
  );
  push(
    'مکعب اور مکعب نما',
    'Cube and Cuboid',
    '4 میٹر × 3 میٹر قاعدے والے مکعب نما ٹینک میں 2 میٹر بلندی تک پانی موجود ہے۔ پانی کی سطح کو 3.5 میٹر تک بلند کرنے کے لیے کتنے مکعب میٹر مزید پانی ڈالنا ہوگا؟',
    'A cuboidal tank with base 4 m × 3 m contains water to a height of 2 m. How many m³ more water must be added to raise the level to 3.5 m?',
    '18 مکعب میٹر',
    '18 m³',
    ['24 مکعب میٹر', '42 مکعب میٹر', '12 مکعب میٹر'],
    ['24 m³', '42 m³', '12 m³'],
    'بلندی میں اضافہ = 3.5 − 2 = 1.5 میٹر۔ اضافی پانی کا حجم = 4 × 3 × 1.5 = 18 مکعب میٹر۔',
    'Increase in height = 3.5 − 2 = 1.5 m. Additional water volume = 4 × 3 × 1.5 = 18 m³.',
    [
      'پانی کی بلندی میں مطلوبہ اضافہ معلوم کریں:\n3.5 − 2 = 1.5 میٹر',
      'اضافی پانی کا حجم معلوم کرنے کا کلیہ لکھیں:\nحجم = لمبائی × چوڑائی × اضافی بلندی',
      'قیمتیں درج کر کے ضرب دیں:\n4 × 3 × 1.5 = 12 × 1.5 = 18 مکعب میٹر',
    ],
    [
      'Find the required rise in water level:\n3.5 − 2 = 1.5 m',
      'Volume of additional water:\nVolume = length × breadth × rise in height',
      'Multiply:\n4 × 3 × 1.5 = 18 m³',
    ]
  );
  push(
    'اکائیوں کی تبدیلی',
    'Unit Conversions',
    '10 میٹر لمبی، 2.4 میٹر اونچی اور 40 سینٹی میٹر موٹی دیوار بنانے کے لیے 25 سینٹی میٹر × 12 سینٹی میٹر × 8 سینٹی میٹر پیمائش کی کتنی اینٹیں درکار ہوں گی؟',
    'How many bricks measuring 25 cm × 12 cm × 8 cm are needed to build a wall 10 m long, 2.4 m high, and 40 cm thick?',
    '4000',
    '4000',
    ['2400', '4800', '3200'],
    ['2400', '4800', '3200'],
    'دیوار کا حجم = 1000 × 240 × 40 مکعب سینٹی میٹر؛ ایک اینٹ = 25 × 12 × 8 = 2400 مکعب سینٹی میٹر۔ اینٹیں = 9,600,000 ÷ 2400 = 4000۔',
    'Wall volume = 1000 × 240 × 40 cm³; one brick = 25 × 12 × 8 = 2400 cm³. Bricks = 9,600,000 ÷ 2400 = 4000.',
    [
      'دیوار کی تمام پیمائشیں سینٹی میٹر میں تبدیل کریں:\nلمبائی = 1000 سینٹی میٹر، اونچائی = 240 سینٹی میٹر، موٹائی = 40 سینٹی میٹر\nدیوار کا حجم = 1000 × 240 × 40 = 9,600,000 مکعب سینٹی میٹر',
      'ایک اینٹ کا حجم معلوم کریں:\n25 × 12 × 8 = 2400 مکعب سینٹی میٹر',
      'اینٹوں کی تعداد معلوم کرنے کے لیے تقسیم کریں:\n9,600,000 ÷ 2400 = 4000 اینٹیں',
    ],
    [
      'Convert all wall dimensions into cm:\n1000 cm × 240 cm × 40 cm => Wall volume = 9,600,000 cm³',
      'Find the volume of one brick:\n25 × 12 × 8 = 2400 cm³',
      'Divide wall volume by brick volume:\n9,600,000 ÷ 2400 = 4000 bricks',
    ]
  );

  // 22 whitewashing & painting cost questions
  for (let i = 1; i <= 22; i++) {
    if (i <= 11) {
      const l = 6 + i;
      const b = 4 + (i % 5);
      const h = 3 + (i % 3);
      const rate = 10 + (i % 4) * 5;
      const walls = 2 * (l + b) * h;
      const ceiling = l * b;
      const area = walls + ceiling;
      const cost = area * rate;
      push(
        'مکعب اور مکعب نما',
        'Cube and Cuboid',
        `${l} میٹر لمبے، ${b} میٹر چوڑے اور ${h} میٹر اونچے کمرے کی چاروں دیواروں اور چھت پر ${rate} روپے فی مربع میٹر کے حساب سے سفیدی کرانے کی کل لاگت معلوم کریں۔`,
        `Find the cost of whitewashing the four walls and ceiling of a room ${l} m × ${b} m × ${h} m at Rs. ${rate} per m².`,
        `${cost} روپے`,
        `Rs. ${cost}`,
        [`${walls * rate} روپے`, `${cost + ceiling} روپے`, `${2 * (l * b + b * h + h * l) * rate} روپے`],
        [`Rs. ${walls * rate}`, `Rs. ${cost + ceiling}`, `Rs. ${2 * (l * b + b * h + h * l) * rate}`],
        `رقبہ = 2(${l} + ${b})×${h} + ${l}×${b} = ${area} مربع میٹر۔ لاگت = ${area} × ${rate} = ${cost} روپے۔`,
        `Area = 2(${l} + ${b})×${h} + ${l}×${b} = ${area} m². Cost = ${area} × ${rate} = Rs. ${cost}.`,
        [
          `پہلے چاروں دیواروں کا رقبہ نکالیں:\n2(l + b)h = 2(${l} + ${b}) × ${h} = ${walls} مربع میٹر`,
          `چھت کا رقبہ شامل کر کے کل سفیدی والا رقبہ نکالیں:\nچھت = ${l} × ${b} = ${ceiling}، کل رقبہ = ${walls} + ${ceiling} = ${area} مربع میٹر`,
          `فی مربع میٹر شرح (${rate} روپے) سے ضرب دیں:\nلاگت = ${area} × ${rate} = ${cost} روپے`,
        ],
        [
          `Find the area of the four walls:\n2(l + b)h = 2(${l} + ${b}) × ${h} = ${walls} m²`,
          `Add the ceiling area:\nCeiling = ${l} × ${b} = ${ceiling}, Total Area = ${walls} + ${ceiling} = ${area} m²`,
          `Multiply by the rate Rs. ${rate}/m²:\nCost = ${area} × ${rate} = Rs. ${cost}`,
        ]
      );
    } else {
      const r = i % 2 === 0 ? 7 : 14;
      const h = 4 + (i - 11);
      const rate = 5 + (i % 3) * 5;
      const csa = 2 * (22 / 7) * r * h;
      const cost = csa * rate;
      push(
        'قائمہ دائروی اسطوانہ',
        'Right Circular Cylinder',
        `رداس ${r} میٹر اور بلندی ${h} میٹر والے اسطوانہ نما ستون کی خم دار سطح پر ${rate} روپے فی مربع میٹر کے حساب سے رنگ کرانے کی لاگت معلوم کریں۔ (π = 22/7 استعمال کریں)`,
        `Find the cost of painting the curved surface of a cylindrical pillar of radius ${r} m and height ${h} m at Rs. ${rate} per m². (Use π = 22/7)`,
        `${cost} روپے`,
        `Rs. ${cost}`,
        [`${(csa / 2) * rate} روپے`, `${(csa + 2 * (22 / 7) * r * r) * rate} روپے`, `${cost + 220} روپے`],
        [`Rs. ${(csa / 2) * rate}`, `Rs. ${(csa + 2 * (22 / 7) * r * r) * rate}`, `Rs. ${cost + 220}`],
        `خم دار سطحی رقبہ = 2 × (22/7) × ${r} × ${h} = ${csa} مربع میٹر۔ لاگت = ${csa} × ${rate} = ${cost} روپے۔`,
        `CSA = 2 × (22/7) × ${r} × ${h} = ${csa} m². Cost = ${csa} × ${rate} = Rs. ${cost}.`,
        [
          `ستون کا خم دار سطحی رقبہ معلوم کریں:\n2πrh = 2 × (22/7) × ${r} × ${h} = ${csa} مربع میٹر`,
          `کل لاگت کا کلیہ لگائیں:\nلاگت = رقبہ × فی مربع میٹر شرح`,
          `ضرب مکمل کریں:\n${csa} × ${rate} = ${cost} روپے`,
        ],
        [
          `Find the curved surface area of the pillar:\n2πrh = 2 × (22/7) × ${r} × ${h} = ${csa} m²`,
          `Write the cost formula:\nCost = Area × Rate per m²`,
          `Multiply:\n${csa} × ${rate} = Rs. ${cost}`,
        ]
      );
    }
  }

  // 22 height or radius from cylinder volume
  for (let i = 1; i <= 22; i++) {
    const r = i % 3 === 0 ? 7 : i % 3 === 1 ? 14 : 21;
    const h = 4 + i;
    const baseArea = (22 / 7) * r * r;
    const vol = baseArea * h;
    if (i <= 12) {
      push(
        'قائمہ دائروی اسطوانہ',
        'Right Circular Cylinder',
        `ایک اسطوانے کا حجم ${vol} مکعب سینٹی میٹر اور قاعدے کا رداس ${r} سینٹی میٹر ہے۔ اس کی بلندی معلوم کریں۔ (π = 22/7 استعمال کریں)`,
        `The volume of a cylinder is ${vol} cm³ and its base radius is ${r} cm. Find its height. (Use π = 22/7)`,
        `${h} سینٹی میٹر`,
        `${h} cm`,
        [`${h + 3} سینٹی میٹر`, `${h * 2} سینٹی میٹر`, `${Math.max(1, h - 2)} سینٹی میٹر`],
        [`${h + 3} cm`, `${h * 2} cm`, `${Math.max(1, h - 2)} cm`],
        `حجم = πr²h ⇐ ${vol} = (22/7) × ${r}² × h ⇐ h = ${h} سینٹی میٹر۔`,
        `Volume = πr²h => ${vol} = (22/7) × ${r}² × h => h = ${h} cm.`,
        [
          `اسطوانے کے حجم کا کلیہ لکھیں:\nحجم = πr²h`,
          `معلوم قیمتیں درج کریں:\n${vol} = (22/7) × ${r}² × h ⇐ ${vol} = ${baseArea} × h`,
          `${baseArea} پر تقسیم کر کے h معلوم کریں:\nh = ${vol} ÷ ${baseArea} = ${h} سینٹی میٹر`,
        ],
        [
          `Write the cylinder volume formula:\nVolume = πr²h`,
          `Substitute the values:\n${vol} = (22/7) × ${r}² × h => ${vol} = ${baseArea} × h`,
          `Divide by ${baseArea}:\nh = ${vol} ÷ ${baseArea} = ${h} cm`,
        ]
      );
    } else {
      const coeff = (22 / 7) * h;
      push(
        'قائمہ دائروی اسطوانہ',
        'Right Circular Cylinder',
        `ایک اسطوانے کا حجم ${vol} مکعب سینٹی میٹر اور بلندی ${h} سینٹی میٹر ہے۔ اس کے قاعدے کا رداس معلوم کریں۔ (π = 22/7 استعمال کریں)`,
        `The volume of a cylinder is ${vol} cm³ and its height is ${h} cm. Find the radius of its base. (Use π = 22/7)`,
        `${r} سینٹی میٹر`,
        `${r} cm`,
        [`${r * 2} سینٹی میٹر`, `${r + 7} سینٹی میٹر`, `${Math.max(1, r - 3)} سینٹی میٹر`],
        [`${r * 2} cm`, `${r + 7} cm`, `${Math.max(1, r - 3)} cm`],
        `πr²h = ${vol} ⇐ (22/7) × r² × ${h} = ${vol} ⇐ r² = ${r * r} ⇐ r = ${r} سینٹی میٹر۔`,
        `πr²h = ${vol} => (22/7) × r² × ${h} = ${vol} => r² = ${r * r} => r = ${r} cm.`,
        [
          `اسطوانے کے حجم کا کلیہ لکھیں:\nπr²h = ${vol}`,
          `قیمتیں درج کر کے r² الگ کریں:\n(22/7) × r² × ${h} = ${vol} ⇐ r² = (${vol} × 7) ÷ (22 × ${h})`,
          `تقسیم مکمل کر کے جذر المربع لیں:\nr² = ${Math.round(vol / coeff)} = ${r * r} ⇐ r = √${r * r} = ${r} سینٹی میٹر`,
        ],
        [
          `Write the cylinder volume equation:\nπr²h = ${vol}`,
          `Isolate r²:\n(22/7) × r² × ${h} = ${vol} => r² = (${vol} × 7) ÷ (22 × ${h})`,
          `Take the square root:\nr² = ${Math.round(vol / coeff)} = ${r * r} => r = √${r * r} = ${r} cm`,
        ]
      );
    }
  }

  // 22 melting a cuboid into small cubes
  for (let i = 1; i <= 22; i++) {
    const s = (i % 4) + 2;
    const nx = i + 1;
    const ny = (i % 5) + 2;
    const nz = ((i + 1) % 3) + 2;
    const count = nx * ny * nz;
    const L = s * nx;
    const B = s * ny;
    const H = s * nz;
    const bigVol = L * B * H;
    const smallVol = s * s * s;
    push(
      'مکعب اور مکعب نما',
      'Cube and Cuboid',
      `${L} سینٹی میٹر × ${B} سینٹی میٹر × ${H} سینٹی میٹر پیمائش کے ایک ٹھوس دھاتی مکعب نما کو پگھلا کر ${s} سینٹی میٹر کنارے والے چھوٹے مکعب بنائے جاتے ہیں۔ کتنے چھوٹے مکعب بنیں گے؟`,
      `A solid metal cuboid measuring ${L} cm × ${B} cm × ${H} cm is melted to cast small cubes of edge ${s} cm. How many small cubes are formed?`,
      `${count}`,
      `${count}`,
      [`${count * 2}`, `${Math.max(2, Math.floor(count / 2))}`, `${count + nx}`],
      [`${count * 2}`, `${Math.max(2, Math.floor(count / 2))}`, `${count + nx}`],
      `مکعبوں کی تعداد = (${L} × ${B} × ${H}) ÷ (${s}³) = ${nx} × ${ny} × ${nz} = ${count}۔`,
      `Number of cubes = (${L} × ${B} × ${H}) ÷ (${s}³) = ${nx} × ${ny} × ${nz} = ${count}.`,
      [
        `مکعب نما اور ایک چھوٹے مکعب کا حجم نکالیں:\nمکعب نما کا حجم = ${L} × ${B} × ${H} = ${bigVol} مکعب سینٹی میٹر\nایک چھوٹے مکعب کا حجم = ${s}³ = ${smallVol} مکعب سینٹی میٹر`,
        `تعداد معلوم کرنے کے لیے بڑے حجم کو چھوٹے حجم پر تقسیم کریں:\n${bigVol} ÷ ${smallVol}`,
        `تقسیم مکمل کریں:\n${count} چھوٹے مکعب`,
      ],
      [
        `Find the volume of the cuboid and one small cube:\nCuboid volume = ${L} × ${B} × ${H} = ${bigVol} cm³\nCube volume = ${s}³ = ${smallVol} cm³`,
        `Divide the larger volume by the smaller volume:\n${bigVol} ÷ ${smallVol}`,
        `Result:\n${count} small cubes`,
      ]
    );
  }

  // 22 rolling rectangular sheet into a cylinder
  for (let i = 1; i <= 22; i++) {
    const r = i % 2 === 0 ? 7 : 14;
    const h = 10 + i;
    const circ = 2 * (22 / 7) * r;
    const vol = (22 / 7) * r * r * h;
    push(
      'قائمہ دائروی اسطوانہ',
      'Right Circular Cylinder',
      `${circ} سینٹی میٹر چوڑائی اور ${h} سینٹی میٹر بلندی والے مستطیل کاغذ کو چوڑائی کے رخ موڑ کر اسطوانہ بنایا گیا ہے۔ بننے والے اسطوانے کا حجم معلوم کریں۔ (π = 22/7 استعمال کریں)`,
      `A rectangular sheet of width ${circ} cm and height ${h} cm is rolled along its width to form a cylinder. Find the volume of the cylinder. (Use π = 22/7)`,
      `${vol} مکعب سینٹی میٹر`,
      `${vol} cm³`,
      [`${vol / 2} مکعب سینٹی میٹر`, `${circ * h} مکعب سینٹی میٹر`, `${vol + 154} مکعب سینٹی میٹر`],
      [`${vol / 2} cm³`, `${circ * h} cm³`, `${vol + 154} cm³`],
      `2πr = ${circ} ⇐ r = ${r} سینٹی میٹر۔ حجم = (22/7) × ${r}² × ${h} = ${vol} مکعب سینٹی میٹر۔`,
      `2πr = ${circ} => r = ${r} cm. Volume = (22/7) × ${r}² × ${h} = ${vol} cm³.`,
      [
        `موڑنے پر چوڑائی اسطوانے کے قاعدے کا محیط بن جاتی ہے، پس رداس نکالیں:\n2πr = ${circ} ⇐ 2 × (22/7) × r = ${circ} ⇐ r = ${r} سینٹی میٹر`,
        `اسطوانے کے حجم کا کلیہ لکھیں:\nحجم = πr²h`,
        `r = ${r} اور h = ${h} درج کر کے حل کریں:\n(22/7) × ${r} × ${r} × ${h} = ${vol} مکعب سینٹی میٹر`,
      ],
      [
        `The width becomes the circumference of the circular base:\n2πr = ${circ} => 2 × (22/7) × r = ${circ} => r = ${r} cm`,
        `Write the volume formula:\nVolume = πr²h`,
        `Substitute r = ${r} and h = ${h}:\n(22/7) × ${r} × ${r} × ${h} = ${vol} cm³`,
      ]
    );
  }

  return list;
}

export const MEASUREMENT_QUESTIONS: MCQQuestion[] = [
  ...createMeasurementEasy(),
  ...createMeasurementMedium(),
  ...createMeasurementHard(),
];
