import { MCQQuestion } from '../../types/math';
import { buildBilingualMCQ } from '../mathUtils';

function createGeometryEasy(): MCQQuestion[] {
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
        id: `geo-e-${idx}`,
        chapterId: 'geometry',
        difficulty: 'easy',
        seed: idx * 7 + 5,
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

  // 15 conceptual easy questions
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'کسی بھی چوکور شکل کے تمام اندرونی زاویوں کا مجموعہ کتنا ہوتا ہے؟',
    'What is the sum of all interior angles of any quadrilateral?',
    '360°',
    '360°',
    ['180°', '540°', '270°'],
    ['180°', '540°', '270°'],
    'چوکور شکل دو مثلثوں میں تقسیم ہوتی ہے، اس لیے اس کے اندرونی زاویوں کا مجموعہ 2 × 180° = 360° ہوتا ہے۔',
    'A quadrilateral splits into 2 triangles, so the sum of its interior angles is 2 × 180° = 360°.',
    [
      'کثیر الاضلاع کے اندرونی زاویوں کے مجموعے کا کلیہ لکھیں:\nمجموعہ = (n − 2) × 180°',
      'چوکور شکل میں اضلاع کی تعداد n = 4 ہوتی ہے:\n(4 − 2) × 180° = 2 × 180°',
      'ضرب مکمل کریں:\n360°',
    ],
    [
      'Write the interior angle sum formula for an n-gon:\nSum = (n − 2) × 180°',
      'For a quadrilateral, n = 4:\n(4 − 2) × 180° = 2 × 180°',
      'Multiply:\n360°',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'کسی بھی محدب کثیر الاضلاع کے تمام بیرونی زاویوں کا مجموعہ کتنا ہوتا ہے؟',
    'What is the sum of all exterior angles of any convex polygon?',
    '360°',
    '360°',
    ['180°', '540°', 'اضلاع کی تعداد پر منحصر ہے'],
    ['180°', '540°', 'Depends on the number of sides'],
    'اضلاع کی تعداد چاہے جتنی بھی ہو، کسی بھی محدب کثیر الاضلاع کے بیرونی زاویوں کا مجموعہ ہمیشہ 360° ہوتا ہے۔',
    'Regardless of the number of sides, the sum of exterior angles of any convex polygon is always 360°.',
    [
      'محدب کثیر الاضلاع کے بیرونی زاویوں کی خاصیت یاد رکھیں:',
      'جب ہم کثیر الاضلاع کے تمام کناروں کے گرد ایک مکمل چکر لگاتے ہیں تو کل موڑ 360° کے برابر ہوتا ہے۔',
      'چنانچہ اضلاع کی تعداد کچھ بھی ہو، تمام بیرونی زاویوں کا مجموعہ ہمیشہ 360° ہوتا ہے۔',
    ],
    [
      'Recall the exterior angle property of convex polygons:',
      'Turning around all vertices of any closed convex polygon makes one complete rotation of 360°.',
      'Thus, the sum of exterior angles is always 360°.',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'متوازی الاضلاع کے آمنے سامنے کے (مخالف) زاویے ہمیشہ ہوتے ہیں:',
    'Opposite angles of a parallelogram are always:',
    'برابر',
    'Equal',
    ['تکمیلی (مجموعہ 90°)', 'سپلیمنٹری (مجموعہ 180°)', '90°'],
    ['Complementary (sum 90°)', 'Supplementary (sum 180°)', '90°'],
    'متوازی الاضلاع کے مخالف زاویے برابر ہوتے ہیں جبکہ متصلہ زاویوں کا مجموعہ 180° ہوتا ہے۔',
    'Opposite angles of a parallelogram are equal, while adjacent angles sum to 180°.',
    [
      'متوازی الاضلاع کے مخالف اضلاع آپس میں متوازی ہوتے ہیں۔',
      'متوازی خطوط اور قاطع خط کی خاصیت کے تحت آمنے سامنے واقع زاویوں کی پیمائش ہمیشہ یکساں ہوتی ہے۔',
      'اس لیے متوازی الاضلاع کے مخالف زاویے ہمیشہ برابر ہوتے ہیں۔',
    ],
    [
      'Opposite sides of a parallelogram are parallel.',
      'Using parallel line properties, opposite angles always have equal measure.',
      'Therefore, opposite angles of a parallelogram are always equal.',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'کون سی چوکور شکل کے تمام اضلاع برابر ہوتے ہیں اور وتر ایک دوسرے کو 90° پر تنصیف کرتے ہیں؟',
    'Which quadrilateral has all sides equal and diagonals bisecting each other at 90°?',
    'معین',
    'Rhombus',
    ['مستطیل', 'ذوزنقہ', 'متوازی الاضلاع'],
    ['Rectangle', 'Trapezium', 'Parallelogram'],
    'معین کے چاروں اضلاع برابر ہوتے ہیں اور اس کے وتر ایک دوسرے کو قائمہ زاویے (90°) پر تنصیف کرتے ہیں۔',
    'A rhombus has four equal sides and its diagonals bisect each other perpendicularly at 90°.',
    [
      'دی گئی خصوصیات کا جائزہ لیں:\n1. تمام چار اضلاع لمبائی میں برابر ہوں۔\n2. وتر ایک دوسرے کو 90° پر نصف کریں۔',
      'مستطیل اور متوازی الاضلاع کے تمام اضلاع ضروری نہیں کہ برابر ہوں، اور ذوزنقہ میں صرف ایک جوڑا متوازی ہوتا ہے۔',
      'معین وہ چوکور شکل ہے جس کے چاروں اضلاع برابر اور وتر 90° پر عمودی تنصیف کرتے ہیں۔',
    ],
    [
      'Check the given properties:\n1. All four sides are equal in length.\n2. Diagonals bisect each other at 90°.',
      'A rectangle or general parallelogram need not have all sides equal, and a trapezium only has one parallel pair.',
      'A rhombus satisfies both conditions.',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'کون سی چوکور شکل میں مخالف اضلاع کا صرف ایک جوڑا متوازی ہوتا ہے؟',
    'Which quadrilateral has only one pair of parallel opposite sides?',
    'ذوزنقہ',
    'Trapezium',
    ['متوازی الاضلاع', 'پتنگ نما', 'معین'],
    ['Parallelogram', 'Kite', 'Rhombus'],
    'تعریف کے مطابق ذوزنقہ ایک ایسی چوکور شکل ہے جس میں اضلاع کا صرف ایک جوڑا متوازی ہوتا ہے۔',
    'By definition, a trapezium has exactly one pair of parallel opposite sides.',
    [
      'مختلف چوکور اشکال کی خصوصیات دیکھیں:\nمتوازی الاضلاع اور معین میں مخالف اضلاع کے دونوں جوڑے متوازی ہوتے ہیں۔',
      'پتنگ نما میں کوئی متوازی جوڑا ضروری نہیں ہوتا۔',
      'ذوزنقہ کی تعریف ہی یہی ہے کہ اس میں مخالف اضلاع کا صرف ایک جوڑا متوازی ہوتا ہے۔',
    ],
    [
      'Compare quadrilaterals:\nParallelograms and rhombuses have two pairs of parallel sides.',
      'A kite need not have any parallel sides.',
      'A trapezium is defined by having only one pair of parallel sides.',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'مستطیل کے وتر ہمیشہ ہوتے ہیں:',
    'The diagonals of a rectangle are always:',
    'برابر اور ایک دوسرے کی تنصیف کرتے ہیں',
    'Equal and bisect each other',
    ['صرف عمود ہوتے ہیں', 'غیر مساوی ہوتے ہیں', 'متوازی ہوتے ہیں'],
    ['Only perpendicular', 'Unequal', 'Parallel'],
    'مستطیل کے دونوں وتر لمبائی میں برابر ہوتے ہیں اور ایک دوسرے کی تنصیف کرتے ہیں۔',
    'The diagonals of a rectangle are equal in length and bisect each other.',
    [
      'مستطیل ایک خاص قسم کا متوازی الاضلاع ہے جس کے تمام زاویے 90° ہوتے ہیں۔',
      'متوازی الاضلاع ہونے کی وجہ سے اس کے وتر ایک دوسرے کی تنصیف کرتے ہیں۔',
      'تمام زاویے 90° ہونے کی وجہ سے دونوں وتروں کی لمبائیاں بھی برابر ہوتی ہیں۔',
    ],
    [
      'A rectangle is a parallelogram with all angles equal to 90°.',
      'Because it is a parallelogram, its diagonals bisect each other.',
      'Because all angles are 90°, both diagonals have equal length.',
    ]
  );
  push(
    'یولر کا کلیہ',
    'Euler’s Formula',
    'کثیر السطوح مجسم کے رخوں (F)، راسوں (V) اور کناروں (E) کے درمیان یولر کا کلیہ کیا ہے؟',
    'What is Euler’s formula relating faces (F), vertices (V), and edges (E) of a polyhedron?',
    'F + V − E = 2',
    'F + V − E = 2',
    ['F + E − V = 2', 'F + V + E = 2', 'V + E − F = 2'],
    ['F + E − V = 2', 'F + V + E = 2', 'V + E − F = 2'],
    'یولر کا کلیہ F + V − E = 2 ہے۔',
    'Euler’s formula is F + V − E = 2.',
    [
      'کسی بھی محدب کثیر السطوح مجسم (مثلاً مکعب: F=6, V=8, E=12) پر جانچ کریں:',
      'رخوں اور راسوں کو جمع کر کے کنارے تفریق کریں:\nF + V − E = 6 + 8 − 12 = 14 − 12 = 2',
      'پس یولر کا کلیہ F + V − E = 2 ہے۔',
    ],
    [
      'Verify with a cube (F = 6, V = 8, E = 12):',
      'Add faces and vertices, then subtract edges:\nF + V − E = 6 + 8 − 12 = 14 − 12 = 2',
      'Thus, Euler’s formula is F + V − E = 2.',
    ]
  );
  push(
    'یولر کا کلیہ',
    'Euler’s Formula',
    'ایک مثلثی منشور (پرزم) کے کتنے کنارے ہوتے ہیں؟',
    'How many edges does a triangular prism have?',
    '9',
    '9',
    ['6', '5', '12'],
    ['6', '5', '12'],
    'مثلثی منشور کے 2 مثلثی قاعدے (3 + 3 کنارے) اور 3 اطرافی کنارے ہوتے ہیں، کل 9 کنارے۔',
    'A triangular prism has 2 triangular bases (3 + 3 edges) and 3 lateral edges, making 9 edges in total.',
    [
      'مثلثی منشور میں دو یکساں مثلثی قاعدے ہوتے ہیں:\nقاعدوں کے کنارے = 3 + 3 = 6',
      'دونوں قاعدوں کے کونوں کو ملانے والے عمودی/اطرافی کنارے = 3',
      'کل کناروں کی تعداد = 6 + 3 = 9',
    ],
    [
      'A triangular prism has two triangular bases:\nBase edges = 3 + 3 = 6',
      'There are 3 lateral edges connecting corresponding vertices.',
      'Total edges = 6 + 3 = 9',
    ]
  );
  push(
    'متوازی خطوط',
    'Parallel Lines',
    'جب دو متوازی خطوط کو ایک قاطع خط کاٹے تو متبادل اندرونی زاویے ہوتے ہیں:',
    'When a transversal cuts two parallel lines, alternate interior angles are:',
    'برابر',
    'Equal',
    ['مجموعہ 180°', 'مجموعہ 90°', 'قائمہ زاویے'],
    ['Sum to 180°', 'Sum to 90°', 'Right angles'],
    'متوازی خطوط پر قاطع خط کے بننے والے متبادل اندرونی زاویے ہمیشہ برابر ہوتے ہیں۔',
    'Alternate interior angles formed by a transversal intersecting parallel lines are always equal.',
    [
      'جب ایک قاطع خط دو متوازی خطوط کو قطع کرتا ہے تو Z جیسی شکل میں بننے والے زاویے متبادل اندرونی زاویے کہلاتے ہیں۔',
      'متوازی خطوط کے مسلمے کے مطابق متبادل اندرونی زاویوں کا ہر جوڑا پیمائش میں مساوی ہوتا ہے۔',
      'پس متبادل اندرونی زاویے برابر ہوتے ہیں۔',
    ],
    [
      'When a transversal intersects two parallel lines, the angles forming a Z-shape are alternate interior angles.',
      'By the parallel lines property, each pair of alternate interior angles has equal measure.',
      'Therefore, they are equal.',
    ]
  );
  push(
    'متوازی خطوط',
    'Parallel Lines',
    'جب دو متوازی خطوط کو ایک قاطع خط کاٹے تو ایک ہی طرف کے اندرونی زاویوں کا مجموعہ کتنا ہوتا ہے؟',
    'When a transversal intersects two parallel lines, what is the sum of interior angles on the same side?',
    '180°',
    '180°',
    ['90°', '360°', '270°'],
    ['90°', '360°', '270°'],
    'قاطع خط کے ایک ہی طرف واقع اندرونی زاویوں کا مجموعہ 180° ہوتا ہے۔',
    'Interior angles on the same side of the transversal are supplementary, summing to 180°.',
    [
      'قاطع خط کے ایک ہی طرف دونوں متوازی خطوط کے اندر بننے والے زاویے متحدہ اندرونی زاویے کہلاتے ہیں۔',
      'یہ دونوں زاویے ایک دوسرے کے سپلیمنٹری ہوتے ہیں۔',
      'اس لیے ان کا مجموعہ ہمیشہ 180° ہوتا ہے۔',
    ],
    [
      'Interior angles on the same side of a transversal between parallel lines are co-interior angles.',
      'Co-interior angles are supplementary.',
      'Therefore, their sum is always 180°.',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    '6 برابر اضلاع اور 6 برابر زاویوں والی منتظم کثیر الاضلاع کا نام کیا ہے؟',
    'What is a regular polygon with 6 equal sides and 6 equal angles called?',
    'منتظم مسدس',
    'Regular hexagon',
    ['منتظم مخمس', 'منتظم مسبع', 'منتظم مثمن'],
    ['Regular pentagon', 'Regular heptagon', 'Regular octagon'],
    '6 اضلاع والی کثیر الاضلاع شکل کو مسدس کہتے ہیں۔',
    'A 6-sided polygon is called a hexagon, so with equal sides and angles it is a regular hexagon.',
    [
      'اضلاع کے لحاظ سے کثیر الاضلاع کے اردو نام دیکھیں:\n5 اضلاع = مخمس، 6 اضلاع = مسدس، 7 اضلاع = مسبع، 8 اضلاع = مثمن',
      'جب تمام اضلاع اور تمام زاویے برابر ہوں تو اسے "منتظم" کہا جاتا ہے۔',
      'پس 6 برابر اضلاع والی شکل منتظم مسدس کہلاتی ہے۔',
    ],
    [
      'Recall polygon names:\n5 sides = pentagon, 6 sides = hexagon, 7 sides = heptagon, 8 sides = octagon',
      'When all sides and angles are equal, it is called "regular".',
      'Thus, a 6-sided regular polygon is a regular hexagon.',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'مربع ایک خاص قسم کی مستطیل ہے کیونکہ:',
    'A square is a special type of rectangle because:',
    'اس کے تمام زاویے 90° اور مخالف اضلاع برابر ہوتے ہیں',
    'All its angles are 90° and opposite sides are equal',
    ['اس کے وتر غیر مساوی ہوتے ہیں', 'اس کے صرف 2 اضلاع برابر ہوتے ہیں', 'اس کے بیرونی زاویوں کا مجموعہ 180° ہے'],
    ['Its diagonals are unequal', 'Only 2 of its sides are equal', 'Sum of its exterior angles is 180°'],
    'مربع میں مستطیل کی تمام خصوصیات (چاروں زاویے 90° اور برابر وتر) موجود ہوتی ہیں اور چاروں اضلاع بھی برابر ہوتے ہیں۔',
    'A square satisfies every property of a rectangle (all 90° angles, equal opposite sides) plus all four sides are equal.',
    [
      'مستطیل کی تعریف کے لیے ضروری شرائط:\nتمام چاروں زاویے 90° ہوں اور آمنے سامنے کے (مخالف) اضلاع برابر ہوں۔',
      'مربع میں چاروں اضلاع برابر ہونے کی وجہ سے مخالف اضلاع خودبخود برابر ہوتے ہیں اور ہر زاویہ 90° ہوتا ہے۔',
      'اس لیے ہر مربع مستطیل کی تعریف پر پورا اترتا ہے۔',
    ],
    [
      'A rectangle requires all angles to be 90° and opposite sides to be equal.',
      'In a square, all angles are 90° and having all 4 sides equal automatically makes opposite sides equal.',
      'Hence, every square is a rectangle.',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'چوکور شکل میں کتنے وتر ہوتے ہیں؟',
    'How many diagonals does a quadrilateral have?',
    '2',
    '2',
    ['4', '1', '3'],
    ['4', '1', '3'],
    'کلیہ n(n−3)/2 میں n = 4 رکھنے پر 4(1)/2 = 2 وتر حاصل ہوتے ہیں۔',
    'Using n(n − 3)/2 with n = 4 gives 4(1)/2 = 2 diagonals.',
    [
      'کثیر الاضلاع میں وتروں کی تعداد کا کلیہ لکھیں:\nوتروں کی تعداد = n(n − 3) ÷ 2',
      'چوکور شکل کے لیے n = 4 درج کریں:\n4(4 − 3) ÷ 2 = (4 × 1) ÷ 2',
      'تقسیم کریں:\n4 ÷ 2 = 2 وتر',
    ],
    [
      'Write the diagonal formula:\nDiagonals = n(n − 3) ÷ 2',
      'Substitute n = 4:\n4(4 − 3) ÷ 2 = (4 × 1) ÷ 2',
      'Divide:\n4 ÷ 2 = 2 diagonals',
    ]
  );
  push(
    'مسئلہ فیثاغورث',
    'Pythagoras Theorem',
    'قائمہ الزاویہ مثلث میں کون سا ضلع ہمیشہ سب سے لمبا ہوتا ہے؟',
    'Which side of a right-angled triangle is always the longest?',
    'وتر',
    'Hypotenuse',
    ['قاعدہ', 'عمود', 'وسطانیہ'],
    ['Base', 'Perpendicular', 'Median'],
    'وتر 90° کے زاویے کے سامنے ہوتا ہے اور ہمیشہ سب سے لمبا ضلع ہوتا ہے۔',
    'The hypotenuse is opposite the 90° angle and is always the longest side.',
    [
      'مثلث میں سب سے بڑے زاویے کے سامنے والا ضلع سب سے لمبا ہوتا ہے۔',
      'قائمہ الزاویہ مثلث میں سب سے بڑا زاویہ 90° ہوتا ہے۔',
      '90° کے سامنے والے ضلع کو وتر کہتے ہیں، جو ہمیشہ سب سے لمبا ہوتا ہے۔',
    ],
    [
      'In any triangle, the side opposite the largest angle is the longest.',
      'In a right triangle, the largest angle is 90°.',
      'The side opposite 90° is called the hypotenuse, which is always the longest side.',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'مساوی الاضلاع مثلث کے ہر اندرونی زاویے کی پیمائش کتنی ہوتی ہے؟',
    'What is the measure of each interior angle of an equilateral triangle?',
    '60°',
    '60°',
    ['90°', '45°', '120°'],
    ['90°', '45°', '120°'],
    '180° ÷ 3 = 60°۔',
    '180° ÷ 3 = 60°.',
    [
      'کسی بھی مثلث کے تینوں اندرونی زاویوں کا مجموعہ 180° ہوتا ہے۔',
      'مساوی الاضلاع مثلث کے تینوں زاویے آپس میں برابر ہوتے ہیں۔',
      'ہر زاویے کی پیمائش = 180° ÷ 3 = 60°',
    ],
    [
      'The sum of interior angles of any triangle is 180°.',
      'In an equilateral triangle, all 3 angles are equal.',
      'Each angle = 180° ÷ 3 = 60°',
    ]
  );

  // 20 fourth angle of a quadrilateral
  for (let i = 1; i <= 20; i++) {
    const a1 = 55 + i * 2;
    const a2 = 75 + (i % 6) * 5;
    const a3 = 95 + (i % 5) * 4;
    const sum3 = a1 + a2 + a3;
    const a4 = 360 - sum3;
    push(
      'کثیر الاضلاع اور زاویے',
      'Polygons and Angles',
      `ایک چوکور شکل کے تین زاویے ${a1}°، ${a2}° اور ${a3}° ہیں۔ چوتھے زاویے کی پیمائش معلوم کریں۔`,
      `Three angles of a quadrilateral are ${a1}°, ${a2}°, and ${a3}°. Find the fourth angle.`,
      `${a4}°`,
      `${a4}°`,
      [`${180 - (a1 + a2) > 0 ? 180 - a1 : a4 + 20}°`, `${a4 + 15}°`, `${Math.max(10, a4 - 15)}°`],
      [`${180 - (a1 + a2) > 0 ? 180 - a1 : a4 + 20}°`, `${a4 + 15}°`, `${Math.max(10, a4 - 15)}°`],
      `چوکور شکل کے زاویوں کا مجموعہ = 360°۔ چوتھا زاویہ = 360° − (${a1}° + ${a2}° + ${a3}°) = ${a4}°۔`,
      `Sum of angles in a quadrilateral = 360°. Fourth angle = 360° − (${a1}° + ${a2}° + ${a3}°) = ${a4}°.`,
      [
        `چوکور شکل کے چاروں زاویوں کا مجموعہ 360° ہوتا ہے۔ پہلے دیے گئے تین زاویوں کو جمع کریں:\n${a1}° + ${a2}° + ${a3}° = ${sum3}°`,
        `چوتھا زاویہ معلوم کرنے کے لیے مجموعہ 360° میں سے ${sum3}° تفریق کریں:\n360° − ${sum3}°`,
        `تفریق مکمل کریں:\n${a4}°`,
      ],
      [
        `The sum of the four angles of a quadrilateral is 360°. Add the three given angles:\n${a1}° + ${a2}° + ${a3}° = ${sum3}°`,
        `Subtract ${sum3}° from 360°:\n360° − ${sum3}°`,
        `Result:\n${a4}°`,
      ]
    );
  }

  // 20 sum of interior angles of an n-gon
  for (let n = 3; n <= 22; n++) {
    const sum = (n - 2) * 180;
    push(
      'کثیر الاضلاع اور زاویے',
      'Polygons and Angles',
      `${n} اضلاع والی محدب کثیر الاضلاع کے تمام اندرونی زاویوں کا مجموعہ معلوم کریں۔`,
      `Find the sum of all interior angles of a convex polygon with ${n} sides.`,
      `${sum}°`,
      `${sum}°`,
      [`${n * 180}°`, `${(n - 1) * 180}°`, `${360}°`],
      [`${n * 180}°`, `${(n - 1) * 180}°`, `${360}°`],
      `اندرونی زاویوں کا مجموعہ = (n − 2) × 180° = (${n} − 2) × 180° = ${sum}°۔`,
      `Sum of interior angles = (n − 2) × 180° = (${n} − 2) × 180° = ${sum}°.`,
      [
        `محدب کثیر الاضلاع کے اندرونی زاویوں کے مجموعے کا کلیہ لکھیں:\nمجموعہ = (n − 2) × 180°`,
        `اضلاع کی تعداد n = ${n} درج کریں:\n(${n} − 2) × 180° = ${n - 2} × 180°`,
        `ضرب مکمل کریں:\n${sum}°`,
      ],
      [
        `Write the interior angle sum formula:\nSum = (n − 2) × 180°`,
        `Substitute n = ${n}:\n(${n} − 2) × 180° = ${n - 2} × 180°`,
        `Multiply:\n${sum}°`,
      ]
    );
  }

  // 20 adjacent angles of a parallelogram
  for (let i = 1; i <= 20; i++) {
    const ang = 42 + i * 4;
    const adj = 180 - ang;
    push(
      'متوازی الاضلاع اور معین',
      'Parallelograms and Rhombus',
      `ایک متوازی الاضلاع کا ایک زاویہ ${ang}° ہے۔ اس کے متصلہ زاویے کی پیمائش کتنی ہوگی؟`,
      `One angle of a parallelogram is ${ang}°. Find the measure of its adjacent angle.`,
      `${adj}°`,
      `${adj}°`,
      [`${ang}°`, `${90 - Math.min(89, ang)}°`, `${360 - ang}°`],
      [`${ang}°`, `${90 - Math.min(89, ang)}°`, `${360 - ang}°`],
      `متوازی الاضلاع کے متصلہ زاویوں کا مجموعہ 180° ہوتا ہے: 180° − ${ang}° = ${adj}°۔`,
      `Adjacent angles of a parallelogram add up to 180°: 180° − ${ang}° = ${adj}°.`,
      [
        `متوازی الاضلاع کے دو متصلہ زاویوں کا مجموعہ 180° ہوتا ہے:\nمتصلہ زاویہ + ${ang}° = 180°`,
        `180° میں سے ${ang}° تفریق کریں:\n180° − ${ang}°`,
        `تفریق مکمل کریں:\n${adj}°`,
      ],
      [
        `Adjacent angles of a parallelogram sum to 180°:\nAdjacent angle + ${ang}° = 180°`,
        `Subtract ${ang}° from 180°:\n180° − ${ang}°`,
        `Result:\n${adj}°`,
      ]
    );
  }

  // 15 Euler's formula
  const solids: Array<[number, number, number]> = [
    [6, 8, 12], [5, 5, 8], [4, 4, 6], [5, 6, 9], [7, 10, 15],
    [8, 12, 18], [6, 6, 10], [8, 6, 12], [10, 16, 24], [7, 7, 12],
    [9, 9, 16], [12, 20, 30], [20, 12, 30], [11, 11, 20], [10, 12, 20],
  ];
  for (let i = 0; i < solids.length; i++) {
    const [f, v, e] = solids[i];
    if (i < 5) {
      push(
        'یولر کا کلیہ',
        'Euler’s Formula',
        `ایک کثیر السطوح مجسم کے ${f} رخ اور ${v} راس ہیں۔ اس کے کتنے کنارے ہوں گے؟`,
        `A polyhedron has ${f} faces and ${v} vertices. How many edges does it have?`,
        `${e}`,
        `${e}`,
        [`${e + 2}`, `${e - 2}`, `${f + v}`],
        [`${e + 2}`, `${e - 2}`, `${f + v}`],
        `یولر کے کلیے F + V − E = 2 سے: ${f} + ${v} − E = 2 ⇐ E = ${f + v} − 2 = ${e}۔`,
        `By Euler’s formula F + V − E = 2: ${f} + ${v} − E = 2 => E = ${f + v} − 2 = ${e}.`,
        [
          `یولر کا کلیہ لکھیں:\nF + V − E = 2`,
          `رخ F = ${f} اور راس V = ${v} درج کریں:\n${f} + ${v} − E = 2 ⇐ ${f + v} − E = 2`,
          `E معلوم کریں:\nE = ${f + v} − 2 = ${e}`,
        ],
        [
          `Write Euler’s formula:\nF + V − E = 2`,
          `Substitute F = ${f} and V = ${v}:\n${f} + ${v} − E = 2 => ${f + v} − E = 2`,
          `Solve for E:\nE = ${f + v} − 2 = ${e}`,
        ]
      );
    } else if (i < 10) {
      push(
        'یولر کا کلیہ',
        'Euler’s Formula',
        `ایک کثیر السطوح مجسم کے ${v} راس اور ${e} کنارے ہیں۔ اس کے کتنے رخ ہوں گے؟`,
        `A polyhedron has ${v} vertices and ${e} edges. How many faces does it have?`,
        `${f}`,
        `${f}`,
        [`${f + 2}`, `${Math.max(2, f - 2)}`, `${e - v}`],
        [`${f + 2}`, `${Math.max(2, f - 2)}`, `${e - v}`],
        `F + V − E = 2 ⇐ F = E − V + 2 = ${e} − ${v} + 2 = ${f}۔`,
        `F + V − E = 2 => F = E − V + 2 = ${e} − ${v} + 2 = ${f}.`,
        [
          `یولر کا کلیہ لکھیں:\nF + V − E = 2`,
          `راس V = ${v} اور کنارے E = ${e} درج کریں:\nF + ${v} − ${e} = 2`,
          `F معلوم کریں:\nF = ${e} − ${v} + 2 = ${f}`,
        ],
        [
          `Write Euler’s formula:\nF + V − E = 2`,
          `Substitute V = ${v} and E = ${e}:\nF + ${v} − ${e} = 2`,
          `Solve for F:\nF = ${e} − ${v} + 2 = ${f}`,
        ]
      );
    } else {
      push(
        'یولر کا کلیہ',
        'Euler’s Formula',
        `ایک کثیر السطوح مجسم کے ${f} رخ اور ${e} کنارے ہیں۔ اس کے کتنے راس ہوں گے؟`,
        `A polyhedron has ${f} faces and ${e} edges. How many vertices does it have?`,
        `${v}`,
        `${v}`,
        [`${v + 2}`, `${Math.max(2, v - 2)}`, `${e - f}`],
        [`${v + 2}`, `${Math.max(2, v - 2)}`, `${e - f}`],
        `F + V − E = 2 ⇐ V = E − F + 2 = ${e} − ${f} + 2 = ${v}۔`,
        `F + V − E = 2 => V = E − F + 2 = ${e} − ${f} + 2 = ${v}.`,
        [
          `یولر کا کلیہ لکھیں:\nF + V − E = 2`,
          `رخ F = ${f} اور کنارے E = ${e} درج کریں:\n${f} + V − ${e} = 2`,
          `V معلوم کریں:\nV = ${e} − ${f} + 2 = ${v}`,
        ],
        [
          `Write Euler’s formula:\nF + V − E = 2`,
          `Substitute F = ${f} and E = ${e}:\n${f} + V − ${e} = 2`,
          `Solve for V:\nV = ${e} − ${f} + 2 = ${v}`,
        ]
      );
    }
  }

  // 10 parallel lines & transversal
  for (let i = 1; i <= 10; i++) {
    const a = 48 + i * 6;
    if (i <= 5) {
      push(
        'متوازی خطوط',
        'Parallel Lines',
        `دو متوازی خطوط کو ایک قاطع خط کاٹتا ہے۔ اگر ایک متناظر زاویہ ${a}° ہو تو دوسرے متوازی خط پر اس کا متناظر زاویہ کتنا ہوگا؟`,
        `A transversal cuts two parallel lines. If one corresponding angle is ${a}°, what is its corresponding angle on the other line?`,
        `${a}°`,
        `${a}°`,
        [`${180 - a}°`, `${90}°`, `${360 - a}°`],
        [`${180 - a}°`, `${90}°`, `${360 - a}°`],
        `متوازی خطوط پر بننے والے متناظر زاویے برابر ہوتے ہیں، لہٰذا وہ بھی ${a}° ہوگا۔`,
        `Corresponding angles on parallel lines are equal, so it is also ${a}°.`,
        [
          `متوازی خطوط کی خاصیت لکھیں:\nجب دو متوازی خطوط کو قاطع خط قطع کرے تو متناظر زاویے آپس میں برابر ہوتے ہیں۔`,
          `پہلا متناظر زاویہ ${a}° دیا گیا ہے۔`,
          `اس لیے دوسرا متناظر زاویہ بھی ${a}° ہوگا۔`,
        ],
        [
          `Recall the parallel lines property:\nCorresponding angles formed by a transversal with parallel lines are equal.`,
          `One corresponding angle is ${a}°.`,
          `Therefore, the other corresponding angle is also ${a}°.`,
        ]
      );
    } else {
      const co = 180 - a;
      push(
        'متوازی خطوط',
        'Parallel Lines',
        `دو متوازی خطوط کو ایک قاطع خط کاٹتا ہے۔ اگر قاطع خط کے ایک ہی طرف واقع ایک اندرونی زاویہ ${a}° ہو تو دوسرا اندرونی زاویہ معلوم کریں۔`,
        `A transversal cuts two parallel lines. If one interior angle on the same side of the transversal is ${a}°, find the other co-interior angle.`,
        `${co}°`,
        `${co}°`,
        [`${a}°`, `${Math.abs(90 - a)}°`, `${360 - a}°`],
        [`${a}°`, `${Math.abs(90 - a)}°`, `${360 - a}°`],
        `ایک ہی طرف کے اندرونی زاویوں کا مجموعہ 180° ہوتا ہے: 180° − ${a}° = ${co}°۔`,
        `Co-interior angles sum to 180°: 180° − ${a}° = ${co}°.`,
        [
          `متوازی خطوط پر قاطع خط کے ایک ہی طرف واقع اندرونی زاویوں کا مجموعہ 180° ہوتا ہے۔`,
          `180° میں سے دیا گیا زاویہ ${a}° تفریق کریں:\n180° − ${a}°`,
          `تفریق مکمل کریں:\n${co}°`,
        ],
        [
          `Interior angles on the same side of a transversal sum to 180°.`,
          `Subtract ${a}° from 180°:\n180° − ${a}°`,
          `Result:\n${co}°`,
        ]
      );
    }
  }

  return list;
}

function createGeometryMedium(): MCQQuestion[] {
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
        id: `geo-m-${idx}`,
        chapterId: 'geometry',
        difficulty: 'medium',
        seed: idx * 11 + 6,
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
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'اگر کسی منتظم کثیر الاضلاع کا ہر بیرونی زاویہ 24° ہو تو اس کے کتنے اضلاع ہوں گے؟',
    'How many sides does a regular polygon have if each exterior angle is 24°?',
    '15',
    '15',
    ['12', '18', '16'],
    ['12', '18', '16'],
    'اضلاع کی تعداد = 360° ÷ بیرونی زاویہ = 360° ÷ 24° = 15۔',
    'Number of sides = 360° ÷ exterior angle = 360° ÷ 24° = 15.',
    [
      'منتظم کثیر الاضلاع میں اضلاع کی تعداد کا کلیہ لکھیں:\nاضلاع کی تعداد = 360° ÷ ہر بیرونی زاویہ',
      'ہر بیرونی زاویہ = 24° درج کریں:\n360° ÷ 24°',
      'تقسیم مکمل کریں:\n15 اضلاع',
    ],
    [
      'Write the formula for sides of a regular polygon:\nSides = 360° ÷ Exterior angle',
      'Substitute exterior angle = 24°:\n360° ÷ 24°',
      'Divide:\n15 sides',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'اگر کسی منتظم کثیر الاضلاع کا ہر اندرونی زاویہ 165° ہو تو اس کے کتنے اضلاع ہوں گے؟',
    'How many sides does a regular polygon have if each interior angle is 165°?',
    '24',
    '24',
    ['20', '18', '15'],
    ['20', '18', '15'],
    'بیرونی زاویہ = 180° − 165° = 15°۔ اضلاع کی تعداد = 360° ÷ 15° = 24۔',
    'Exterior angle = 180° − 165° = 15°. Number of sides = 360° ÷ 15° = 24.',
    [
      'پہلے ہر بیرونی زاویہ نکالیں (اندرونی + بیرونی = 180°):\nبیرونی زاویہ = 180° − 165° = 15°',
      'اب اضلاع کی تعداد کا کلیہ لگائیں:\nاضلاع = 360° ÷ بیرونی زاویہ = 360° ÷ 15°',
      'تقسیم مکمل کریں:\n24 اضلاع',
    ],
    [
      'First find each exterior angle (interior + exterior = 180°):\nExterior angle = 180° − 165° = 15°',
      'Divide 360° by the exterior angle:\n360° ÷ 15°',
      'Result:\n24 sides',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'کسی منتظم کثیر الاضلاع کا کم سے کم ممکنہ اندرونی زاویہ کتنا ہو سکتا ہے؟',
    'What is the minimum interior angle possible for a regular polygon?',
    '60°',
    '60°',
    ['30°', '45°', '90°'],
    ['30°', '45°', '90°'],
    'کم سے کم اضلاع والی منتظم کثیر الاضلاع مساوی الاضلاع مثلث (3 اضلاع) ہے جس کا ہر اندرونی زاویہ 60° ہوتا ہے۔',
    'The regular polygon with the fewest sides is an equilateral triangle (3 sides), whose interior angle is 60°.',
    [
      'کم سے کم اضلاع والی کثیر الاضلاع شکل مثلث (3 اضلاع) ہوتی ہے؛ 2 اضلاع سے بند شکل نہیں بن سکتی۔',
      'منتظم مثلث یعنی مساوی الاضلاع مثلث کا ہر اندرونی زاویہ:\n180° ÷ 3 = 60°',
      'اضلاع بڑھنے سے اندرونی زاویہ بڑھتا ہے، اس لیے کم سے کم ممکنہ اندرونی زاویہ 60° ہے۔',
    ],
    [
      'A polygon requires at least 3 sides (an equilateral triangle).',
      'Each interior angle of an equilateral triangle is:\n180° ÷ 3 = 60°',
      'Adding more sides increases the interior angle, so 60° is the minimum possible.',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'کسی منتظم کثیر الاضلاع کا زیادہ سے زیادہ ممکنہ بیرونی زاویہ کتنا ہو سکتا ہے؟',
    'What is the maximum exterior angle possible for a regular polygon?',
    '120°',
    '120°',
    ['90°', '180°', '60°'],
    ['90°', '180°', '60°'],
    'چونکہ کم سے کم اندرونی زاویہ 60° ہے، لہٰذا زیادہ سے زیادہ بیرونی زاویہ 180° − 60° = 120° ہوگا۔',
    'Since the minimum interior angle is 60°, the maximum exterior angle is 180° − 60° = 120°.',
    [
      'سب سے چھوٹی منتظم کثیر الاضلاع مساوی الاضلاع مثلث (n = 3) ہے جس کا اندرونی زاویہ کم سے کم یعنی 60° ہوتا ہے۔',
      'چونکہ بیرونی زاویہ = 180° − اندرونی زاویہ (یا 360° ÷ n)۔',
      'زیادہ سے زیادہ بیرونی زاویہ = 360° ÷ 3 = 120° (یا 180° − 60° = 120°)',
    ],
    [
      'The smallest regular polygon is an equilateral triangle (n = 3) with minimum interior angle 60°.',
      'Exterior angle = 180° − interior angle (or 360° ÷ n).',
      'Maximum exterior angle = 360° ÷ 3 = 120°',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'ایک متوازی الاضلاع کے دو متصلہ زاویے 3 : 2 کی نسبت میں ہیں۔ بڑے زاویے کی پیمائش معلوم کریں۔',
    'Two adjacent angles of a parallelogram are in the ratio 3 : 2. Find the measure of the larger angle.',
    '108°',
    '108°',
    ['72°', '120°', '96°'],
    ['72°', '120°', '96°'],
    '3x + 2x = 180° ⇐ 5x = 180° ⇐ x = 36°۔ بڑا زاویہ = 3 × 36° = 108°۔',
    '3x + 2x = 180° => 5x = 180° => x = 36°. Larger angle = 3 × 36° = 108°.',
    [
      'متصلہ زاویے 3x اور 2x فرض کریں۔ ان کا مجموعہ 180° ہوتا ہے:\n3x + 2x = 180° ⇐ 5x = 180°',
      '5 سے تقسیم کر کے x معلوم کریں:\nx = 180° ÷ 5 = 36°',
      'بڑا زاویہ (3x) معلوم کریں:\n3 × 36° = 108°',
    ],
    [
      'Let the adjacent angles be 3x and 2x; they add up to 180°:\n3x + 2x = 180° => 5x = 180°',
      'Divide by 5:\nx = 180° ÷ 5 = 36°',
      'Find the larger angle (3x):\n3 × 36° = 108°',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'مستطیل ABCD کے وتر AC اور BD نقطہ O پر قطع کرتے ہیں۔ اگر OA = 3x + 1 اور OB = 2x + 4 ہو تو x کی قیمت معلوم کریں۔',
    'In rectangle ABCD, diagonals AC and BD intersect at O. If OA = 3x + 1 and OB = 2x + 4, find x.',
    '3',
    '3',
    ['2', '4', '5'],
    ['2', '4', '5'],
    'مستطیل کے وتر برابر اور ایک دوسرے کی تنصیف کرتے ہیں، پس OA = OB ⇐ 3x + 1 = 2x + 4 ⇐ x = 3۔',
    'Diagonals of a rectangle are equal and bisect each other, so OA = OB => 3x + 1 = 2x + 4 => x = 3.',
    [
      'مستطیل کے دونوں وتر برابر ہوتے ہیں (AC = BD) اور نقطہ O پر تنصیف کرتے ہیں:\nاس لیے ان کے نصف حصے بھی برابر ہوں گے: OA = OB',
      'دی گئی قیمتیں برابر رکھیں:\n3x + 1 = 2x + 4',
      'x کے لیے حل کریں:\n3x − 2x = 4 − 1 ⇐ x = 3',
    ],
    [
      'In a rectangle, diagonals are equal (AC = BD) and bisect each other at O:\nSo their halves are equal: OA = OB',
      'Set the expressions equal:\n3x + 1 = 2x + 4',
      'Solve for x:\n3x − 2x = 4 − 1 => x = 3',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'ایک متوازی الاضلاع کا احاطہ 150 سینٹی میٹر ہے۔ اس کا ایک ضلع دوسرے ضلع سے 25 سینٹی میٹر بڑا ہے۔ بڑے ضلع کی لمبائی معلوم کریں۔',
    'The perimeter of a parallelogram is 150 cm. One side is 25 cm longer than the other. Find the length of the longer side.',
    '50 سینٹی میٹر',
    '50 cm',
    ['25 سینٹی میٹر', '75 سینٹی میٹر', '45 سینٹی میٹر'],
    ['25 cm', '75 cm', '45 cm'],
    '2(x + x + 25) = 150 ⇐ 2x + 25 = 75 ⇐ x = 25 سینٹی میٹر۔ بڑا ضلع = 25 + 25 = 50 سینٹی میٹر۔',
    '2(x + x + 25) = 150 => 2x + 25 = 75 => x = 25 cm. Longer side = 25 + 25 = 50 cm.',
    [
      'چھوٹا ضلع x اور بڑا ضلع x + 25 فرض کریں۔ احاطے کا کلیہ لگائیں:\n2(x + x + 25) = 150',
      'دونوں طرف 2 سے تقسیم کر کے حل کریں:\n2x + 25 = 75 ⇐ 2x = 50 ⇐ x = 25 سینٹی میٹر',
      'بڑے ضلع کی لمبائی نکالیں:\n25 + 25 = 50 سینٹی میٹر',
    ],
    [
      'Let the shorter side = x and longer side = x + 25:\n2(x + x + 25) = 150',
      'Divide by 2 and solve:\n2x + 25 = 75 => 2x = 50 => x = 25 cm',
      'Find the longer side:\n25 + 25 = 50 cm',
    ]
  );
  push(
    'مسئلہ فیثاغورث',
    'Pythagoras Theorem',
    '13 میٹر لمبی ایک سیڑھی زمین سے 12 میٹر اونچی کھڑکی تک پہنچتی ہے۔ سیڑھی کا نچلا سرا دیوار سے کتنے فاصلے پر ہے؟',
    'A 13 m ladder reaches a window 12 m above the ground. How far is the foot of the ladder from the wall?',
    '5 میٹر',
    '5 m',
    ['7 میٹر', '6 میٹر', '8 میٹر'],
    ['7 m', '6 m', '8 m'],
    'مسئلہ فیثاغورث کے مطابق: فاصلہ = √(13² − 12²) = √(169 − 144) = √25 = 5 میٹر۔',
    'By Pythagoras theorem: distance = √(13² − 12²) = √(169 − 144) = √25 = 5 m.',
    [
      'دیوار، زمین اور سیڑھی مل کر قائمہ مثلث بناتے ہیں جہاں وتر = 13 میٹر اور عمود = 12 میٹر ہے۔',
      'مسئلہ فیثاغورث لگائیں (وتر² = قاعدہ² + عمود²):\nقاعدہ² = 13² − 12² = 169 − 144 = 25',
      'جذر المربع لیں:\nقاعدہ = √25 = 5 میٹر',
    ],
    [
      'The wall, ground, and ladder form a right triangle with hypotenuse = 13 m and height = 12 m.',
      'Apply Pythagoras theorem (hypotenuse² = base² + height²):\nbase² = 13² − 12² = 169 − 144 = 25',
      'Take the square root:\nbase = √25 = 5 m',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'ایک معین کے وتر 12 سینٹی میٹر اور 16 سینٹی میٹر ہیں۔ اس کے ہر ضلع کی لمبائی معلوم کریں۔',
    'The diagonals of a rhombus are 12 cm and 16 cm. Find the length of each side.',
    '10 سینٹی میٹر',
    '10 cm',
    ['14 سینٹی میٹر', '20 سینٹی میٹر', '8 سینٹی میٹر'],
    ['14 cm', '20 cm', '8 cm'],
    'نصف وتر 6 سینٹی میٹر اور 8 سینٹی میٹر ہیں جو 90° پر ملتے ہیں۔ ضلع = √(6² + 8²) = √100 = 10 سینٹی میٹر۔',
    'Half-diagonals are 6 cm and 8 cm meeting at 90°. Side = √(6² + 8²) = √100 = 10 cm.',
    [
      'معین کے وتر ایک دوسرے کو 90° پر نصف کرتے ہیں، اس لیے دونوں وتروں کے نصف نکالیں:\n12 ÷ 2 = 6 سینٹی میٹر اور 16 ÷ 2 = 8 سینٹی میٹر',
      '90° کے مثلث میں ضلع وتر ہوتا ہے۔ مسئلہ فیثاغورث لگائیں:\nضلع² = 6² + 8² = 36 + 64 = 100',
      'جذر المربع لیں:\nضلع = √100 = 10 سینٹی میٹر',
    ],
    [
      'Diagonals of a rhombus bisect at 90°, so half-diagonals are:\n12 ÷ 2 = 6 cm and 16 ÷ 2 = 8 cm',
      'Each side is the hypotenuse of a right triangle:\nside² = 6² + 8² = 36 + 64 = 100',
      'Take the square root:\nside = √100 = 10 cm',
    ]
  );
  push(
    'تماثل',
    'Congruence',
    'درج ذیل میں سے کون سا معیار دو مثلثوں کے متماثل ہونے کو ثابت نہیں کر سکتا؟',
    'Which of the following criteria does NOT prove that two triangles are congruent?',
    'زاویہ-زاویہ-زاویہ',
    'AAA (Angle-Angle-Angle)',
    ['ضلع-ضلع-ضلع', 'ضلع-زاویہ-ضلع', 'وتر-ضلع-قائمہ'],
    ['SSS', 'SAS', 'RHS'],
    'زاویہ-زاویہ-زاویہ صرف مشابہت کو ظاہر کرتا ہے، تماثل کو نہیں کیونکہ اضلاع کی لمبائیاں مختلف ہو سکتی ہیں۔',
    'AAA shows only similarity, not congruence, because triangles can have equal angles yet different side lengths.',
    [
      'دو مثلثوں کے متماثل ہونے کے لیے کم از کم ایک ضلع کی لمبائی کا برابر ہونا ضروری ہوتا ہے۔',
      'ضلع-ضلع-ضلع، ضلع-زاویہ-ضلع اور وتر-ضلع-قائمہ تینوں تماثل کے درست اصول ہیں۔',
      'زاویہ-زاویہ-زاویہ صرف یہ بتاتا ہے کہ شکل یکساں (مشابہ) ہے، جسامت مختلف ہو سکتی ہے، اس لیے یہ تماثل ثابت نہیں کرتا۔',
    ],
    [
      'For congruence, at least one corresponding side must be equal.',
      'SSS, SAS, and RHS are all valid congruence rules.',
      'AAA only guarantees similarity (same shape), not same size, so it cannot prove congruence.',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'ایک منتظم مسدس میں کتنے وتر ہوتے ہیں؟',
    'How many diagonals does a regular hexagon have?',
    '9',
    '9',
    ['6', '12', '8'],
    ['6', '12', '8'],
    'وتروں کی تعداد = n(n−3)/2 = 6(6−3)/2 = 9۔',
    'Diagonals = n(n − 3)/2 = 6(6 − 3)/2 = 9.',
    [
      'وتروں کی تعداد کا کلیہ لکھیں:\nوتروں کی تعداد = n(n − 3) ÷ 2',
      'مسدس کے لیے n = 6 درج کریں:\n6(6 − 3) ÷ 2 = (6 × 3) ÷ 2',
      'حساب مکمل کریں:\n18 ÷ 2 = 9 وتر',
    ],
    [
      'Write the diagonal formula:\nDiagonals = n(n − 3) ÷ 2',
      'Substitute n = 6 for a hexagon:\n6(6 − 3) ÷ 2 = (6 × 3) ÷ 2',
      'Divide:\n18 ÷ 2 = 9 diagonals',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'کیا ایسی منتظم کثیر الاضلاع ممکن ہے جس کا ہر بیرونی زاویہ 50° ہو؟',
    'Is it possible to have a regular polygon whose exterior angle is 50°?',
    'نہیں، کیونکہ 50 عدد 360 کو پورا تقسیم نہیں کرتا',
    'No, because 50 does not divide 360 evenly',
    ['جی ہاں، 7 اضلاع کے ساتھ', 'جی ہاں، 8 اضلاع کے ساتھ', 'جی ہاں، 6 اضلاع کے ساتھ'],
    ['Yes, with 7 sides', 'Yes, with 8 sides', 'Yes, with 6 sides'],
    '360 ÷ 50 = 7.2، جو اضلاع کا مکمل صحیح عدد نہیں ہے۔',
    '360 ÷ 50 = 7.2, which is not a whole number of sides.',
    [
      'منتظم کثیر الاضلاع میں اضلاع کی تعداد کا کلیہ لکھیں:\nاضلاع کی تعداد = 360° ÷ بیرونی زاویہ',
      'بیرونی زاویہ = 50° درج کر کے تقسیم کریں:\n360 ÷ 50 = 7.2',
      'چونکہ اضلاع کی تعداد اعشاریہ میں نہیں ہو سکتی (اور 50 عدد 360 کو پورا تقسیم نہیں کرتا)، اس لیے ایسی شکل ممکن نہیں۔',
    ],
    [
      'Number of sides = 360° ÷ exterior angle',
      'Substitute 50°:\n360 ÷ 50 = 7.2',
      'Since the number of sides must be an integer and 50 does not divide 360, such a regular polygon is impossible.',
    ]
  );

  // 22 sides from exterior/interior angle
  const extAngles = [10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120, 9, 8, 6, 5, 4, 3, 2, 1];
  for (let i = 0; i < 22; i++) {
    const ext = extAngles[i];
    const sides = 360 / ext;
    if (i < 11) {
      push(
        'کثیر الاضلاع اور زاویے',
        'Polygons and Angles',
        `کسی منتظم کثیر الاضلاع کا ہر بیرونی زاویہ ${ext}° ہے۔ اس کے اضلاع کی تعداد معلوم کریں۔`,
        `Each exterior angle of a regular polygon is ${ext}°. Find its number of sides.`,
        `${sides}`,
        `${sides}`,
        [`${sides + 2}`, `${Math.max(3, sides - 2)}`, `${180 / ext === Math.floor(180 / ext) ? 180 / ext : sides + 4}`],
        [`${sides + 2}`, `${Math.max(3, sides - 2)}`, `${180 / ext === Math.floor(180 / ext) ? 180 / ext : sides + 4}`],
        `اضلاع کی تعداد = 360° ÷ ${ext}° = ${sides}۔`,
        `Number of sides = 360° ÷ ${ext}° = ${sides}.`,
        [
          `منتظم کثیر الاضلاع کے بیرونی زاویوں کا مجموعہ 360° ہوتا ہے۔ کلیہ لکھیں:\nاضلاع کی تعداد = 360° ÷ بیرونی زاویہ`,
          `دی گئی قیمت درج کریں:\n360° ÷ ${ext}°`,
          `تقسیم مکمل کریں:\n${sides} اضلاع`,
        ],
        [
          `The sum of exterior angles is 360°:\nSides = 360° ÷ Exterior angle`,
          `Substitute ${ext}°:\n360° ÷ ${ext}°`,
          `Divide:\n${sides} sides`,
        ]
      );
    } else {
      const interior = 180 - ext;
      push(
        'کثیر الاضلاع اور زاویے',
        'Polygons and Angles',
        `کسی منتظم کثیر الاضلاع کا ہر اندرونی زاویہ ${interior}° ہے۔ اس کے اضلاع کی تعداد معلوم کریں۔`,
        `Each interior angle of a regular polygon is ${interior}°. Find its number of sides.`,
        `${sides}`,
        `${sides}`,
        [`${sides + 3}`, `${Math.max(3, sides - 1)}`, `${sides * 2}`],
        [`${sides + 3}`, `${Math.max(3, sides - 1)}`, `${sides * 2}`],
        `بیرونی زاویہ = 180° − ${interior}° = ${ext}°۔ اضلاع کی تعداد = 360° ÷ ${ext}° = ${sides}۔`,
        `Exterior angle = 180° − ${interior}° = ${ext}°. Number of sides = 360° ÷ ${ext}° = ${sides}.`,
        [
          `پہلے بیرونی زاویہ نکالیں (اندرونی + بیرونی = 180°):\nبیرونی زاویہ = 180° − ${interior}° = ${ext}°`,
          `اب اضلاع کی تعداد کا کلیہ لگائیں:\nاضلاع کی تعداد = 360° ÷ ${ext}°`,
          `تقسیم مکمل کریں:\n${sides} اضلاع`,
        ],
        [
          `First find the exterior angle:\nExterior angle = 180° − ${interior}° = ${ext}°`,
          `Divide 360° by ${ext}°:\nSides = 360° ÷ ${ext}°`,
          `Divide:\n${sides} sides`,
        ]
      );
    }
  }

  // 22 ratios of angles of a quadrilateral
  const ratios: Array<[number, number, number, number]> = [
    [1, 2, 3, 4], [2, 3, 5, 8], [1, 3, 4, 4], [2, 3, 4, 6], [1, 2, 4, 5],
    [3, 4, 5, 6], [1, 2, 2, 4], [2, 2, 3, 5], [1, 3, 5, 6], [2, 4, 5, 7],
    [1, 4, 5, 8],
  ];
  for (let i = 0; i < ratios.length; i++) {
    const [r1, r2, r3, r4] = ratios[i];
    const sumR = r1 + r2 + r3 + r4;
    const unit = 360 / sumR;
    const largest = r4 * unit;
    const smallest = r1 * unit;
    push(
      'کثیر الاضلاع اور زاویے',
      'Polygons and Angles',
      `ایک چوکور شکل کے زاویے ${r1} : ${r2} : ${r3} : ${r4} کی نسبت میں ہیں۔ سب سے بڑے زاویے کی پیمائش معلوم کریں۔`,
      `The angles of a quadrilateral are in the ratio ${r1} : ${r2} : ${r3} : ${r4}. Find the measure of the largest angle.`,
      `${largest}°`,
      `${largest}°`,
      [`${smallest}°`, `${r3 * unit}°`, `${largest + 12}°`],
      [`${smallest}°`, `${r3 * unit}°`, `${largest + 12}°`],
      `نسبت کے حصوں کا مجموعہ = ${sumR}۔ ایک حصہ = 360° ÷ ${sumR} = ${unit}°۔ سب سے بڑا زاویہ = ${r4} × ${unit}° = ${largest}°۔`,
      `Sum of ratio parts = ${sumR}. One part = 360° ÷ ${sumR} = ${unit}°. Largest angle = ${r4} × ${unit}° = ${largest}°.`,
      [
        `نسبت کے تمام حصوں کو جمع کریں اور 360° کے برابر رکھیں:\n(${r1} + ${r2} + ${r3} + ${r4})x = 360° ⇐ ${sumR}x = 360°`,
        `ایک حصہ (x) معلوم کریں:\nx = 360° ÷ ${sumR} = ${unit}°`,
        `سب سے بڑا زاویہ (${r4} حصے) نکالیں:\n${r4} × ${unit}° = ${largest}°`,
      ],
      [
        `Sum the ratio parts and set equal to 360°:\n(${r1} + ${r2} + ${r3} + ${r4})x = 360° => ${sumR}x = 360°`,
        `Find one part (x):\nx = 360° ÷ ${sumR} = ${unit}°`,
        `Find the largest angle (${r4} parts):\n${r4} × ${unit}° = ${largest}°`,
      ]
    );
    push(
      'کثیر الاضلاع اور زاویے',
      'Polygons and Angles',
      `ایک چوکور شکل کے چاروں زاویے ${r1} : ${r2} : ${r3} : ${r4} کی نسبت میں ہیں۔ سب سے چھوٹا زاویہ معلوم کریں۔`,
      `The four angles of a quadrilateral are in the ratio ${r1} : ${r2} : ${r3} : ${r4}. Find the smallest angle.`,
      `${smallest}°`,
      `${smallest}°`,
      [`${largest}°`, `${r2 * unit}°`, `${smallest + 10}°`],
      [`${largest}°`, `${r2 * unit}°`, `${smallest + 10}°`],
      `ہر حصہ = 360° ÷ ${sumR} = ${unit}°۔ سب سے چھوٹا زاویہ = ${r1} × ${unit}° = ${smallest}°۔`,
      `Each part = 360° ÷ ${sumR} = ${unit}°. Smallest angle = ${r1} × ${unit}° = ${smallest}°.`,
      [
        `نسبت کے تمام حصوں کا مجموعہ نکال کر 360° کے برابر رکھیں:\n(${r1} + ${r2} + ${r3} + ${r4})x = 360° ⇐ ${sumR}x = 360°`,
        `ایک حصہ (x) معلوم کریں:\nx = 360° ÷ ${sumR} = ${unit}°`,
        `سب سے چھوٹا زاویہ (${r1} حصہ) نکالیں:\n${r1} × ${unit}° = ${smallest}°`,
      ],
      [
        `Sum the ratio parts and set equal to 360°:\n(${r1} + ${r2} + ${r3} + ${r4})x = 360° => ${sumR}x = 360°`,
        `Find one part (x):\nx = 360° ÷ ${sumR} = ${unit}°`,
        `Find the smallest angle (${r1} part):\n${r1} × ${unit}° = ${smallest}°`,
      ]
    );
  }

  // 22 Pythagoras theorem
  const triplets: Array<[number, number, number]> = [
    [3, 4, 5], [6, 8, 10], [9, 12, 15], [12, 16, 20], [15, 20, 25],
    [5, 12, 13], [10, 24, 26], [8, 15, 17], [7, 24, 25], [9, 40, 41],
    [11, 60, 61], [12, 35, 37], [20, 21, 29], [16, 30, 34], [18, 24, 30],
    [21, 28, 35], [15, 36, 39], [24, 32, 40], [27, 36, 45], [30, 40, 50],
    [14, 48, 50], [16, 63, 65],
  ];
  for (let i = 0; i < triplets.length; i++) {
    const [a, b, c] = triplets[i];
    if (i < 11) {
      push(
        'مسئلہ فیثاغورث',
        'Pythagoras Theorem',
        `ایک مستطیل کی لمبائی ${b} سینٹی میٹر اور چوڑائی ${a} سینٹی میٹر ہے۔ اس کے وتر کی لمبائی معلوم کریں۔`,
        `A rectangle has length ${b} cm and breadth ${a} cm. Find the length of its diagonal.`,
        `${c} سینٹی میٹر`,
        `${c} cm`,
        [`${a + b} سینٹی میٹر`, `${c + 2} سینٹی میٹر`, `${Math.max(1, c - 2)} سینٹی میٹر`],
        [`${a + b} cm`, `${c + 2} cm`, `${Math.max(1, c - 2)} cm`],
        `وتر = √(${a}² + ${b}²) = √(${a * a + b * b}) = ${c} سینٹی میٹر۔`,
        `Diagonal = √(${a}² + ${b}²) = √(${a * a + b * b}) = ${c} cm.`,
        [
          `مستطیل کا وتر ایک قائمہ الزاویہ مثلث بناتا ہے؛ مسئلہ فیثاغورث لکھیں:\nوتر² = چوڑائی² + لمبائی²`,
          `قیمتیں درج کر کے مربع جمع کریں:\n${a}² + ${b}² = ${a * a} + ${b * b} = ${a * a + b * b}`,
          `جذر المربع لیں:\nوتر = √${a * a + b * b} = ${c} سینٹی میٹر`,
        ],
        [
          `The diagonal forms a right triangle with length and breadth:\ndiagonal² = breadth² + length²`,
          `Substitute and sum the squares:\n${a}² + ${b}² = ${a * a} + ${b * b} = ${a * a + b * b}`,
          `Take the square root:\ndiagonal = √${a * a + b * b} = ${c} cm`,
        ]
      );
    } else {
      push(
        'مسئلہ فیثاغورث',
        'Pythagoras Theorem',
        `ایک قائمہ الزاویہ مثلث کا وتر ${c} سینٹی میٹر اور ایک ضلع ${a} سینٹی میٹر ہے۔ دوسرے ضلع کی لمبائی معلوم کریں۔`,
        `The hypotenuse of a right triangle is ${c} cm and one side is ${a} cm. Find the length of the other side.`,
        `${b} سینٹی میٹر`,
        `${b} cm`,
        [`${c - a} سینٹی میٹر`, `${b + 3} سینٹی میٹر`, `${a} سینٹی میٹر`],
        [`${c - a} cm`, `${b + 3} cm`, `${a} cm`],
        `دوسرا ضلع = √(${c}² − ${a}²) = √(${c * c - a * a}) = ${b} سینٹی میٹر۔`,
        `Other side = √(${c}² − ${a}²) = √(${c * c - a * a}) = ${b} cm.`,
        [
          `مسئلہ فیثاغورث لکھیں:\nدوسرا ضلع² = وتر² − پہلا ضلع²`,
          `قیمتیں درج کر کے مربع تفریق کریں:\n${c}² − ${a}² = ${c * c} − ${a * a} = ${c * c - a * a}`,
          `جذر المربع لیں:\nدوسرا ضلع = √${c * c - a * a} = ${b} سینٹی میٹر`,
        ],
        [
          `Apply Pythagoras theorem:\nother side² = hypotenuse² − first side²`,
          `Subtract the squares:\n${c}² − ${a}² = ${c * c} − ${a * a} = ${c * c - a * a}`,
          `Take the square root:\nother side = √${c * c - a * a} = ${b} cm`,
        ]
      );
    }
  }

  // 22 diagonals in an n-gon
  for (let n = 5; n <= 26; n++) {
    const diag = (n * (n - 3)) / 2;
    push(
      'کثیر الاضلاع اور زاویے',
      'Polygons and Angles',
      `${n} اضلاع والی محدب کثیر الاضلاع میں کتنے وتر ہوتے ہیں؟`,
      `How many diagonals does a convex polygon with ${n} sides have?`,
      `${diag}`,
      `${diag}`,
      [`${n * (n - 3)}`, `${diag + n}`, `${Math.max(1, diag - 2)}`],
      [`${n * (n - 3)}`, `${diag + n}`, `${Math.max(1, diag - 2)}`],
      `وتر = n(n − 3)/2 = ${n}(${n - 3})/2 = ${diag}۔`,
      `Diagonals = n(n − 3)/2 = ${n}(${n - 3})/2 = ${diag}.`,
      [
        `کثیر الاضلاع کے وتروں کی تعداد کا کلیہ لکھیں:\nوتروں کی تعداد = n(n − 3) ÷ 2`,
        `اضلاع کی تعداد n = ${n} درج کریں:\n${n}(${n} − 3) ÷ 2 = (${n} × ${n - 3}) ÷ 2`,
        `${n * (n - 3)} ÷ 2 = ${diag} وتر`,
      ],
      [
        `Write the diagonal formula:\nDiagonals = n(n − 3) ÷ 2`,
        `Substitute n = ${n}:\n${n}(${n} − 3) ÷ 2 = (${n} × ${n - 3}) ÷ 2`,
        `${n * (n - 3)} ÷ 2 = ${diag} diagonals`,
      ]
    );
  }

  return list;
}

function createGeometryHard(): MCQQuestion[] {
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
        id: `geo-h-${idx}`,
        chapterId: 'geometry',
        difficulty: 'hard',
        seed: idx * 17 + 7,
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
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'ایک منتظم کثیر الاضلاع میں ہر اندرونی زاویہ اپنے بیرونی زاویے کا 5 گنا ہے۔ اس کے اضلاع کی تعداد کتنی ہوگی؟',
    'In a regular polygon, each interior angle is 5 times its exterior angle. How many sides does it have?',
    '12',
    '12',
    ['10', '15', '8'],
    ['10', '15', '8'],
    'اندرونی + بیرونی = 180° ⇐ 5x + x = 180° ⇐ بیرونی زاویہ x = 30°۔ اضلاع = 360° ÷ 30° = 12۔',
    'Interior + Exterior = 180° => 5x + x = 180° => exterior angle x = 30°. Sides = 360° ÷ 30° = 12.',
    [
      'فرض کریں بیرونی زاویہ = x، تو اندرونی زاویہ = 5x۔\nاندرونی + بیرونی = 180° ⇐ 5x + x = 180°',
      '6x = 180° ⇐ x = 180° ÷ 6 = 30° (بیرونی زاویہ)',
      'اضلاع کی تعداد نکالیں:\n360° ÷ 30° = 12 اضلاع',
    ],
    [
      'Let exterior angle = x, so interior angle = 5x.\n5x + x = 180°',
      '6x = 180° => x = 30° (exterior angle)',
      'Find number of sides:\n360° ÷ 30° = 12 sides',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'ایک منتظم کثیر الاضلاع کے اندرونی زاویے اور بیرونی زاویے کی نسبت 7 : 2 ہے۔ اضلاع کی تعداد معلوم کریں۔',
    'The interior and exterior angles of a regular polygon are in the ratio 7 : 2. Find the number of sides.',
    '9',
    '9',
    ['7', '10', '12'],
    ['7', '10', '12'],
    '7k + 2k = 180° ⇐ k = 20°، لہٰذا بیرونی زاویہ = 40°۔ اضلاع کی تعداد = 360° ÷ 40° = 9۔',
    '7k + 2k = 180° => k = 20°, so exterior angle = 40°. Number of sides = 360° ÷ 40° = 9.',
    [
      'نسبت کے مطابق اندرونی زاویہ 7k اور بیرونی زاویہ 2k فرض کریں:\n7k + 2k = 180° ⇐ 9k = 180° ⇐ k = 20°',
      'بیرونی زاویہ معلوم کریں:\n2k = 2 × 20° = 40°',
      'اضلاع کی تعداد معلوم کریں:\n360° ÷ 40° = 9 اضلاع',
    ],
    [
      'Let interior = 7k and exterior = 2k:\n7k + 2k = 180° => 9k = 180° => k = 20°',
      'Find the exterior angle:\n2k = 2 × 20° = 40°',
      'Find the number of sides:\n360° ÷ 40° = 9 sides',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'ایک متوازی الاضلاع کے دو متصلہ زاویے (3x − 4)° اور (3x + 16)° ہیں۔ x کی قیمت معلوم کریں۔',
    'Two adjacent angles of a parallelogram are (3x − 4)° and (3x + 16)°. Find x.',
    '28',
    '28',
    ['30', '26', '32'],
    ['30', '26', '32'],
    '(3x − 4) + (3x + 16) = 180 ⇐ 6x + 12 = 180 ⇐ 6x = 168 ⇐ x = 28۔',
    '(3x − 4) + (3x + 16) = 180 => 6x + 12 = 180 => 6x = 168 => x = 28.',
    [
      'متوازی الاضلاع کے متصلہ زاویوں کا مجموعہ 180° ہوتا ہے:\n(3x − 4) + (3x + 16) = 180',
      'مشابہ ارکان جمع کریں:\n6x + 12 = 180 ⇐ 6x = 180 − 12 = 168',
      '6 پر تقسیم کریں:\nx = 168 ÷ 6 = 28',
    ],
    [
      'Adjacent angles of a parallelogram sum to 180°:\n(3x − 4) + (3x + 16) = 180',
      'Combine like terms:\n6x + 12 = 180 => 6x = 168',
      'Divide by 6:\nx = 168 ÷ 6 = 28',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'متوازی الاضلاع PQRS میں ∠P = (2x + 10)° اور اس کا مخالف زاویہ ∠R = (3x − 20)° ہے۔ ∠P معلوم کریں۔',
    'In parallelogram PQRS, ∠P = (2x + 10)° and its opposite angle ∠R = (3x − 20)°. Find ∠P.',
    '70°',
    '70°',
    ['60°', '110°', '80°'],
    ['60°', '110°', '80°'],
    'مخالف زاویے برابر ہوتے ہیں: 2x + 10 = 3x − 20 ⇐ x = 30۔ چنانچہ ∠P = 2(30) + 10 = 70°۔',
    'Opposite angles are equal: 2x + 10 = 3x − 20 => x = 30. Thus ∠P = 2(30) + 10 = 70°.',
    [
      'متوازی الاضلاع کے مخالف زاویے برابر ہوتے ہیں (∠P = ∠R):\n2x + 10 = 3x − 20',
      'x کے لیے حل کریں:\n10 + 20 = 3x − 2x ⇐ x = 30',
      '∠P میں x = 30 درج کریں:\n∠P = 2(30) + 10 = 60 + 10 = 70°',
    ],
    [
      'Opposite angles of a parallelogram are equal (∠P = ∠R):\n2x + 10 = 3x − 20',
      'Solve for x:\n10 + 20 = 3x − 2x => x = 30',
      'Substitute x = 30 into ∠P:\n∠P = 2(30) + 10 = 70°',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'اگر کسی کثیر الاضلاع میں 35 وتر ہوں تو اس کے اضلاع کی تعداد کتنی ہوگی؟',
    'If a polygon has 35 diagonals, how many sides does it have?',
    '10',
    '10',
    ['9', '12', '8'],
    ['9', '12', '8'],
    'n(n − 3)/2 = 35 ⇐ n(n − 3) = 70 = 10 × 7 ⇐ n = 10۔',
    'n(n − 3)/2 = 35 => n(n − 3) = 70 = 10 × 7 => n = 10.',
    [
      'وتروں کی تعداد کا کلیہ 35 کے برابر رکھیں:\nn(n − 3) ÷ 2 = 35',
      'دونوں طرف 2 سے ضرب دیں:\nn(n − 3) = 70',
      '70 کے دو ایسے عوامل دیکھیں جن کا فرق 3 ہو:\n10 × 7 = 70 ⇐ n = 10 اضلاع',
    ],
    [
      'Set the diagonal formula equal to 35:\nn(n − 3) ÷ 2 = 35',
      'Multiply both sides by 2:\nn(n − 3) = 70',
      'Find two factors of 70 differing by 3:\n10 × 7 = 70 => n = 10 sides',
    ]
  );
  push(
    'متوازی خطوط',
    'Parallel Lines',
    'جب دو متوازی خطوط کو ایک قاطع خط کاٹے اور ایک طرف کے دو اندرونی زاویوں کی نسبت 4 : 5 ہو تو ان دونوں زاویوں کا فرق کتنا ہوگا؟',
    'When a transversal cuts two parallel lines, two co-interior angles are in the ratio 4 : 5. What is their difference?',
    '20°',
    '20°',
    ['80°', '100°', '40°'],
    ['80°', '100°', '40°'],
    '4x + 5x = 180° ⇐ x = 20°۔ زاویے 80° اور 100° ہیں، فرق = 20°۔',
    '4x + 5x = 180° => x = 20°. The angles are 80° and 100°, so difference = 20°.',
    [
      'ایک ہی طرف کے اندرونی زاویے 4x اور 5x فرض کریں (مجموعہ = 180°):\n4x + 5x = 180° ⇐ 9x = 180° ⇐ x = 20°',
      'دونوں زاویوں کی قیمتیں نکالیں:\nپہلا زاویہ = 4 × 20° = 80° اور دوسرا زاویہ = 5 × 20° = 100°',
      'دونوں زاویوں کا فرق معلوم کریں:\n100° − 80° = 20°',
    ],
    [
      'Let the co-interior angles be 4x and 5x (sum = 180°):\n4x + 5x = 180° => 9x = 180° => x = 20°',
      'Calculate both angles:\n4 × 20° = 80° and 5 × 20° = 100°',
      'Find the difference:\n100° − 80° = 20°',
    ]
  );
  push(
    'مسئلہ فیثاغورث',
    'Pythagoras Theorem',
    'ایک آدمی مشرق کی طرف 15 میٹر اور پھر شمال کی طرف 8 میٹر چلتا ہے۔ وہ اپنے ابتدائی نقطے سے کتنے فاصلے پر ہے؟',
    'A man walks 15 m east and then 8 m north. How far is he from his starting point?',
    '17 میٹر',
    '17 m',
    ['23 میٹر', '19 میٹر', '13 میٹر'],
    ['23 m', '19 m', '13 m'],
    'سیدھا فاصلہ = √(15² + 8²) = √(225 + 64) = √289 = 17 میٹر۔',
    'Direct distance = √(15² + 8²) = √(225 + 64) = √289 = 17 m.',
    [
      'مشرق اور شمال کے درمیان 90° کا زاویہ بنتا ہے، اس لیے سیدھا فاصلہ قائمہ مثلث کا وتر ہوگا:\nفاصلہ² = 15² + 8²',
      'مربع نکال کر جمع کریں:\n225 + 64 = 289',
      'جذر المربع لیں:\n√289 = 17 میٹر',
    ],
    [
      'East and north form a 90° angle, so the direct distance is the hypotenuse:\ndistance² = 15² + 8²',
      'Square and add:\n225 + 64 = 289',
      'Take the square root:\n√289 = 17 m',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    'ایک مخمس (پانچ اضلاع والی شکل) کے بیرونی زاویے x°، (x+10)°، (x+20)°، (x+30)° اور (x+40)° ہیں۔ اس مخمس کا سب سے بڑا اندرونی زاویہ معلوم کریں۔',
    'The exterior angles of a pentagon are x°, (x+10)°, (x+20)°, (x+30)°, and (x+40)°. Find its largest interior angle.',
    '128°',
    '128°',
    ['52°', '108°', '118°'],
    ['52°', '108°', '118°'],
    'بیرونی زاویوں کا مجموعہ: 5x + 100 = 360 ⇐ x = 52°۔ سب سے چھوٹا بیرونی زاویہ 52° ہے، چنانچہ سب سے بڑا اندرونی زاویہ = 180° − 52° = 128°۔',
    'Sum of exterior angles: 5x + 100 = 360 => x = 52°. Smallest exterior angle is 52°, so largest interior angle = 180° − 52° = 128°.',
    [
      'تمام بیرونی زاویوں کا مجموعہ 360° ہوتا ہے:\nx + (x + 10) + (x + 20) + (x + 30) + (x + 40) = 360',
      'مساوات حل کر کے سب سے چھوٹا بیرونی زاویہ x نکالیں:\n5x + 100 = 360 ⇐ 5x = 260 ⇐ x = 52°',
      'سب سے بڑا اندرونی زاویہ سب سے چھوٹے بیرونی زاویے کے ساتھ بنتا ہے:\n180° − 52° = 128°',
    ],
    [
      'The sum of exterior angles is 360°:\nx + (x + 10) + (x + 20) + (x + 30) + (x + 40) = 360',
      'Solve for the smallest exterior angle x:\n5x + 100 = 360 => 5x = 260 => x = 52°',
      'The largest interior angle is supplementary to the smallest exterior angle:\n180° − 52° = 128°',
    ]
  );
  push(
    'متوازی الاضلاع اور معین',
    'Parallelograms and Rhombus',
    'ایک معین ABCD میں ∠ACB = 40° ہے۔ ∠ADB کی پیمائش معلوم کریں۔',
    'In rhombus ABCD, ∠ACB = 40°. Find the measure of ∠ADB.',
    '50°',
    '50°',
    ['40°', '80°', '90°'],
    ['40°', '80°', '90°'],
    'معین کے وتر نقطہ O پر 90° پر قطع کرتے ہیں۔ مثلث BOC میں ∠OBC = 180° − 90° − 40° = 50°۔ چونکہ AD ∥ BC، متبادل زاویہ ∠ADB = ∠OBC = 50°۔',
    'Diagonals of a rhombus intersect at O at 90°. In △BOC, ∠OBC = 180° − 90° − 40° = 50°. Since AD ∥ BC, alternate angle ∠ADB = ∠OBC = 50°.',
    [
      'معین کے وتر AC اور BD نقطہ O پر 90° کا زاویہ بناتے ہیں، اس لیے ∠BOC = 90° اور ∠OCB = 40°۔',
      'مثلث BOC کے زاویوں کے مجموعے (180°) سے ∠OBC نکالیں:\n∠OBC = 180° − (90° + 40°) = 50°',
      'چونکہ AD اور BC متوازی ہیں اور BD قاطع خط ہے، متبادل اندرونی زاویے برابر ہوں گے:\n∠ADB = ∠DBC = ∠OBC = 50°',
    ],
    [
      'Diagonals AC and BD meet at O at 90°, so ∠BOC = 90° and ∠OCB = 40°.',
      'In △BOC:\n∠OBC = 180° − (90° + 40°) = 50°',
      'Since AD ∥ BC with transversal BD, alternate interior angles are equal:\n∠ADB = ∠DBC = ∠OBC = 50°',
    ]
  );
  push(
    'کثیر الاضلاع اور زاویے',
    'Polygons and Angles',
    '10 اضلاع والی منتظم کثیر الاضلاع کے ہر اندرونی زاویے کی پیمائش کتنی ہوتی ہے؟',
    'What is the measure of each interior angle of a regular 10-sided polygon?',
    '144°',
    '144°',
    ['135°', '150°', '140°'],
    ['135°', '150°', '140°'],
    'بیرونی زاویہ = 360° ÷ 10 = 36°۔ اندرونی زاویہ = 180° − 36° = 144°۔',
    'Exterior angle = 360° ÷ 10 = 36°. Interior angle = 180° − 36° = 144°.',
    [
      'پہلے منتظم شکل کا ہر بیرونی زاویہ معلوم کریں:\nبیرونی زاویہ = 360° ÷ 10 = 36°',
      'اندرونی اور بیرونی زاویے کا مجموعہ 180° ہوتا ہے:\nاندرونی زاویہ = 180° − 36°',
      'تفریق مکمل کریں:\n144°',
    ],
    [
      'First find each exterior angle:\nExterior angle = 360° ÷ 10 = 36°',
      'Interior and exterior angles add up to 180°:\nInterior angle = 180° − 36°',
      'Subtract:\n144°',
    ]
  );
  push(
    'یولر کا کلیہ',
    'Euler’s Formula',
    'اگر کسی کثیر السطوح مجسم کے x رخ، (x + 2) راس اور 18 کنارے ہوں تو رخوں کی تعداد معلوم کریں۔',
    'A polyhedron has x faces, (x + 2) vertices, and 18 edges. Find the number of faces.',
    '9',
    '9',
    ['8', '10', '11'],
    ['8', '10', '11'],
    'x + (x + 2) − 18 = 2 ⇐ 2x − 16 = 2 ⇐ 2x = 18 ⇐ x = 9 رخ۔',
    'x + (x + 2) − 18 = 2 => 2x − 16 = 2 => 2x = 18 => x = 9 faces.',
    [
      'یولر کے کلیے F + V − E = 2 میں F = x، V = x + 2 اور E = 18 درج کریں:\nx + (x + 2) − 18 = 2',
      'مساوات مختصر کریں:\n2x − 16 = 2 ⇐ 2x = 18',
      '2 پر تقسیم کر کے رخوں کی تعداد نکالیں:\nx = 18 ÷ 2 = 9 رخ',
    ],
    [
      'Substitute F = x, V = x + 2, and E = 18 into Euler’s formula F + V − E = 2:\nx + (x + 2) − 18 = 2',
      'Simplify:\n2x − 16 = 2 => 2x = 18',
      'Divide by 2:\nx = 18 ÷ 2 = 9 faces',
    ]
  );
  push(
    'تماثل',
    'Congruence',
    'ایک منفرد چوکور شکل بنانے کے لیے کم از کم کتنی آزاد پیمائشیں درکار ہوتی ہیں؟',
    'How many minimum independent measurements are required to construct a unique quadrilateral?',
    '5',
    '5',
    ['4', '3', '6'],
    ['4', '3', '6'],
    'منفرد چوکور شکل کی تعمیر کے لیے 5 آزاد پیمائشیں درکار ہوتی ہیں (مثلاً 4 اضلاع اور 1 وتر، یا 3 اضلاع اور 2 درمیانی زاویے)۔',
    '5 independent measurements are required to construct a unique quadrilateral (e.g., 4 sides and 1 diagonal, or 3 sides and 2 included angles).',
    [
      'چوکور شکل دو مثلثوں سے مل کر بنتی ہے جن میں ایک مشترک ضلع (وتر) ہوتا ہے۔',
      'پہلی مثلث کے لیے 3 پیمائشیں اور دوسری مثلث کے لیے مزید 2 آزاد پیمائشیں درکار ہوتی ہیں۔',
      'اس لیے منفرد چوکور شکل بنانے کے لیے کم از کم 5 آزاد پیمائشیں درکار ہوتی ہیں۔',
    ],
    [
      'A quadrilateral is formed by two triangles sharing a common side (a diagonal).',
      'The first triangle needs 3 measurements and the second needs 2 additional independent measurements.',
      'Hence, at least 5 independent measurements are needed.',
    ]
  );

  // 22 algebraic angles of a parallelogram
  for (let i = 1; i <= 22; i++) {
    const x = 12 + i;
    if (i <= 11) {
      const a = 3;
      const c = 2;
      const b = i * 2;
      const d = b + x;
      const angle = a * x + b;
      push(
        'متوازی الاضلاع اور معین',
        'Parallelograms and Rhombus',
        `متوازی الاضلاع کے دو مخالف زاویے (${a}x + ${b})° اور (${c}x + ${d})° ہیں۔ ان میں سے ہر زاویے کی پیمائش معلوم کریں۔`,
        `Two opposite angles of a parallelogram are (${a}x + ${b})° and (${c}x + ${d})°. Find the measure of each angle.`,
        `${angle}°`,
        `${angle}°`,
        [`${x}°`, `${180 - angle}°`, `${angle + 10}°`],
        [`${x}°`, `${180 - angle}°`, `${angle + 10}°`],
        `مخالف زاویے برابر ہوتے ہیں: ${a}x + ${b} = ${c}x + ${d} ⇐ x = ${x}۔ زاویہ = ${a}(${x}) + ${b} = ${angle}°۔`,
        `Opposite angles are equal: ${a}x + ${b} = ${c}x + ${d} => x = ${x}. Angle = ${a}(${x}) + ${b} = ${angle}°.`,
        [
          `متوازی الاضلاع کے مخالف زاویے برابر ہوتے ہیں، اس لیے دونوں جملوں کو برابر رکھیں:\n${a}x + ${b} = ${c}x + ${d}`,
          `مساوات حل کر کے x معلوم کریں:\n${a}x − ${c}x = ${d} − ${b} ⇐ x = ${x}`,
          `x = ${x} درج کر کے زاویے کی پیمائش نکالیں:\n${a}(${x}) + ${b} = ${a * x} + ${b} = ${angle}°`,
        ],
        [
          `Opposite angles of a parallelogram are equal:\n${a}x + ${b} = ${c}x + ${d}`,
          `Solve for x:\n${a}x − ${c}x = ${d} − ${b} => x = ${x}`,
          `Substitute x = ${x}:\n${a}(${x}) + ${b} = ${a * x} + ${b} = ${angle}°`,
        ]
      );
    } else {
      const k = (i - 10) * 3;
      const m1 = 2;
      const m2 = 4;
      const adjX = 180 / (m1 + m2);
      const ang1 = m1 * adjX + k;
      const ang2 = m2 * adjX - k;
      const smaller = Math.min(ang1, ang2);
      push(
        'متوازی الاضلاع اور معین',
        'Parallelograms and Rhombus',
        `متوازی الاضلاع کے دو متصلہ زاویے (${m1}x + ${k})° اور (${m2}x − ${k})° ہیں۔ دونوں میں سے چھوٹا زاویہ معلوم کریں۔`,
        `Two adjacent angles of a parallelogram are (${m1}x + ${k})° and (${m2}x − ${k})°. Find the smaller angle.`,
        `${smaller}°`,
        `${smaller}°`,
        [`${Math.max(ang1, ang2)}°`, `${adjX}°`, `${smaller + 12}°`],
        [`${Math.max(ang1, ang2)}°`, `${adjX}°`, `${smaller + 12}°`],
        `متصلہ زاویوں کا مجموعہ 180° ہے: ${m1 + m2}x = 180 ⇐ x = ${adjX}۔ زاویے ${ang1}° اور ${ang2}° ہیں، پس چھوٹا زاویہ ${smaller}° ہے۔`,
        `Adjacent angles add up to 180°: ${m1 + m2}x = 180 => x = ${adjX}. The angles are ${ang1}° and ${ang2}°, so the smaller is ${smaller}°.`,
        [
          `متوازی الاضلاع کے متصلہ زاویوں کا مجموعہ 180° ہوتا ہے:\n(${m1}x + ${k}) + (${m2}x − ${k}) = 180`,
          `مختصر کر کے x نکالیں (+${k} اور −${k} کٹ جاتے ہیں):\n${m1 + m2}x = 180 ⇐ x = 180 ÷ ${m1 + m2} = ${adjX}`,
          `دونوں زاویے نکال کر چھوٹا زاویہ چنیں:\n${m1}(${adjX}) + ${k} = ${ang1}° اور ${m2}(${adjX}) − ${k} = ${ang2}°\nچھوٹا زاویہ = ${smaller}°`,
        ],
        [
          `Adjacent angles sum to 180°:\n(${m1}x + ${k}) + (${m2}x − ${k}) = 180`,
          `Simplify (+${k} and −${k} cancel):\n${m1 + m2}x = 180 => x = 180 ÷ ${m1 + m2} = ${adjX}`,
          `Evaluate both angles and pick the smaller:\n${m1}(${adjX}) + ${k} = ${ang1}° and ${m2}(${adjX}) − ${k} = ${ang2}°\nSmaller = ${smaller}°`,
        ]
      );
    }
  }

  // 22 ratio of interior to exterior angle in regular polygon
  const ratioSides = [
    [1, 1, 4], [2, 1, 6], [3, 1, 8], [7, 2, 9], [4, 1, 10], [5, 1, 12],
    [13, 2, 15], [7, 1, 16], [8, 1, 18], [9, 1, 20], [11, 1, 24],
    [17, 3, 20], [13, 5, 18], [11, 4, 15], [6, 1, 14], [5, 3, 8],
    [19, 1, 40], [14, 1, 30], [17, 1, 36], [23, 1, 48], [29, 1, 60], [35, 1, 72],
  ];
  for (let i = 0; i < ratioSides.length; i++) {
    const [intR, extR, sides] = ratioSides[i];
    const ext = (180 * extR) / (intR + extR);
    const interior = 180 - ext;
    if (i < 11) {
      push(
        'کثیر الاضلاع اور زاویے',
        'Polygons and Angles',
        `ایک منتظم کثیر الاضلاع کے اندرونی زاویے اور بیرونی زاویے کی نسبت ${intR} : ${extR} ہے۔ اس کے اضلاع کی تعداد معلوم کریں۔`,
        `The interior and exterior angles of a regular polygon are in the ratio ${intR} : ${extR}. Find the number of sides.`,
        `${sides}`,
        `${sides}`,
        [`${sides + 2}`, `${Math.max(3, sides - 2)}`, `${intR + extR}`],
        [`${sides + 2}`, `${Math.max(3, sides - 2)}`, `${intR + extR}`],
        `بیرونی زاویہ = (${extR}/${intR + extR}) × 180° = ${ext}°۔ اضلاع = 360° ÷ ${ext}° = ${sides}۔`,
        `Exterior angle = (${extR}/${intR + extR}) × 180° = ${ext}°. Sides = 360° ÷ ${ext}° = ${sides}.`,
        [
          `اندرونی اور بیرونی زاویوں کا مجموعہ 180° ہوتا ہے، پس نسبت کے حصے جمع کریں:\n(${intR} + ${extR})k = 180° ⇐ ${intR + extR}k = 180° ⇐ k = ${180 / (intR + extR)}°`,
          `بیرونی زاویہ معلوم کریں:\n${extR} × ${180 / (intR + extR)}° = ${ext}°`,
          `اضلاع کی تعداد معلوم کریں:\n360° ÷ ${ext}° = ${sides}`,
        ],
        [
          `Interior and exterior angles sum to 180°:\n(${intR} + ${extR})k = 180° => ${intR + extR}k = 180° => k = ${180 / (intR + extR)}°`,
          `Find the exterior angle:\n${extR} × ${180 / (intR + extR)}° = ${ext}°`,
          `Find the number of sides:\n360° ÷ ${ext}° = ${sides}`,
        ]
      );
    } else {
      push(
        'کثیر الاضلاع اور زاویے',
        'Polygons and Angles',
        `${sides} اضلاع والی منتظم کثیر الاضلاع کے ہر اندرونی زاویے کی پیمائش کتنی ہوگی؟`,
        `What is the measure of each interior angle of a regular ${sides}-sided polygon?`,
        `${interior}°`,
        `${interior}°`,
        [`${ext}°`, `${interior - 10}°`, `${interior + 6}°`],
        [`${ext}°`, `${interior - 10}°`, `${interior + 6}°`],
        `بیرونی زاویہ = 360° ÷ ${sides} = ${ext}°۔ اندرونی زاویہ = 180° − ${ext}° = ${interior}°۔`,
        `Exterior angle = 360° ÷ ${sides} = ${ext}°. Interior angle = 180° − ${ext}° = ${interior}°.`,
        [
          `پہلے منتظم شکل کا ہر بیرونی زاویہ معلوم کریں:\nبیرونی زاویہ = 360° ÷ ${sides} = ${ext}°`,
          `اندرونی زاویے کا کلیہ لگائیں:\nاندرونی زاویہ = 180° − بیرونی زاویہ = 180° − ${ext}°`,
          `تفریق مکمل کریں:\n${interior}°`,
        ],
        [
          `First find each exterior angle:\nExterior angle = 360° ÷ ${sides} = ${ext}°`,
          `Subtract from 180°:\nInterior angle = 180° − ${ext}°`,
          `Result:\n${interior}°`,
        ]
      );
    }
  }

  // 22 number of sides from sum of interior angles
  for (let n = 5; n <= 26; n++) {
    const sum = (n - 2) * 180;
    push(
      'کثیر الاضلاع اور زاویے',
      'Polygons and Angles',
      `ایک محدب کثیر الاضلاع کے اندرونی زاویوں کا مجموعہ ${sum}° ہے۔ اس کثیر الاضلاع کے اضلاع کی تعداد معلوم کریں۔`,
      `The sum of the interior angles of a convex polygon is ${sum}°. Find the number of sides.`,
      `${n}`,
      `${n}`,
      [`${n - 2}`, `${n + 2}`, `${n - 1}`],
      [`${n - 2}`, `${n + 2}`, `${n - 1}`],
      `(n − 2) × 180° = ${sum}° ⇐ n − 2 = ${n - 2} ⇐ n = ${n}۔`,
      `(n − 2) × 180° = ${sum}° => n − 2 = ${n - 2} => n = ${n}.`,
      [
        `اندرونی زاویوں کے مجموعے کا کلیہ ${sum}° کے برابر رکھیں:\n(n − 2) × 180° = ${sum}°`,
        `دونوں طرف 180° سے تقسیم کریں:\nn − 2 = ${sum} ÷ 180 = ${n - 2}`,
        `دونوں طرف 2 جمع کریں:\nn = ${n - 2} + 2 = ${n} اضلاع`,
      ],
      [
        `Set the interior angle sum formula equal to ${sum}°:\n(n − 2) × 180° = ${sum}°`,
        `Divide both sides by 180°:\nn − 2 = ${sum} ÷ 180 = ${n - 2}`,
        `Add 2 to both sides:\nn = ${n - 2} + 2 = ${n} sides`,
      ]
    );
  }

  // 22 algebraic angles of a quadrilateral
  for (let i = 1; i <= 22; i++) {
    const d = 2 * i;
    const x = 90 - 3 * i;
    const largest = x + 3 * d;
    push(
      'کثیر الاضلاع اور زاویے',
      'Polygons and Angles',
      `ایک چوکور شکل کے چاروں زاویے x°، (x+${d})°، (x+${2 * d})° اور (x+${3 * d})° ہیں۔ سب سے بڑا زاویہ معلوم کریں۔`,
      `The four angles of a quadrilateral are x°, (x+${d})°, (x+${2 * d})°, and (x+${3 * d})°. Find the largest angle.`,
      `${largest}°`,
      `${largest}°`,
      [`${x}°`, `${x + 2 * d}°`, `${x + 4 * d}°`],
      [`${x}°`, `${x + 2 * d}°`, `${x + 4 * d}°`],
      `4x + ${6 * d} = 360 ⇐ 4x = ${360 - 6 * d} ⇐ x = ${x}°۔ سب سے بڑا زاویہ = ${x} + ${3 * d} = ${largest}°۔`,
      `4x + ${6 * d} = 360 => 4x = ${360 - 6 * d} => x = ${x}°. Largest angle = ${x} + ${3 * d} = ${largest}°.`,
      [
        `چوکور شکل کے چاروں زاویوں کا مجموعہ 360° کے برابر رکھیں:\nx + (x + ${d}) + (x + ${2 * d}) + (x + ${3 * d}) = 360`,
        `مساوات حل کر کے x معلوم کریں:\n4x + ${6 * d} = 360 ⇐ 4x = ${360 - 6 * d} ⇐ x = ${x}°`,
        `سب سے بڑا زاویہ (x + ${3 * d})° نکالیں:\n${x}° + ${3 * d}° = ${largest}°`,
      ],
      [
        `Set the sum of all four angles equal to 360°:\nx + (x + ${d}) + (x + ${2 * d}) + (x + ${3 * d}) = 360`,
        `Solve for x:\n4x + ${6 * d} = 360 => 4x = ${360 - 6 * d} => x = ${x}°`,
        `Find the largest angle (x + ${3 * d})°:\n${x}° + ${3 * d}° = ${largest}°`,
      ]
    );
  }

  return list;
}

export const GEOMETRY_QUESTIONS: MCQQuestion[] = [
  ...createGeometryEasy(),
  ...createGeometryMedium(),
  ...createGeometryHard(),
];
