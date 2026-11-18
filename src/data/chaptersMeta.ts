import { ChapterId, ChapterInfo, Language, QuestionCount } from '../types/math';

export const CHAPTERS: ChapterInfo[] = [
  {
    id: 'numbers',
    number: 1,
    name: 'اعداد اور عملیات',
    shortDescription:
      'ناطق اعداد اور ان کی خصوصیات، قوت نما اور طاقتیں، مربع اور مکعب جزر، فیصد اور تناسب راست و معکوس۔',
    keyTopics: [
      'ناطق اعداد',
      'مربع اور مکعب جزر',
      'قوت نما اور طاقتیں',
      'تناسب راست و معکوس',
      'فیصد اور سود',
    ],
    en: {
      name: 'Numbers and Operations',
      shortDescription:
        'Rational numbers and properties, exponents and powers, square & cube roots, percentages, and direct & inverse proportion.',
      keyTopics: [
        'Rational Numbers',
        'Squares and Cube Roots',
        'Exponents and Powers',
        'Direct and Inverse Proportion',
        'Percentages and Interest',
      ],
    },
  },
  {
    id: 'algebra',
    number: 2,
    name: 'الجبرا',
    shortDescription:
      'الجبری جملے، کثیر رقمی، بنیادی کلیات، تجزی اور یک متغیری خطی مساوات اور عبارتی سوالات۔',
    keyTopics: [
      'خطی مساوات',
      'الجبری جملے',
      'بنیادی الجبری کلیات',
      'تجزی',
      'عبارتی سوالات',
    ],
    en: {
      name: 'Algebra',
      shortDescription:
        'Algebraic expressions, polynomials, algebraic identities, factorization, and linear equations in one variable.',
      keyTopics: [
        'Linear Equations',
        'Algebraic Expressions',
        'Algebraic Identities',
        'Factorization',
        'Word Problems',
      ],
    },
  },
  {
    id: 'measurement',
    number: 3,
    name: 'پیمائش',
    shortDescription:
      'ذوزنقہ، معین اور کثیر الاضلاع کا رقبہ؛ مکعب، مکعب نما اور اسطوانہ کا سطحی رقبہ اور حجم۔',
    keyTopics: [
      'چوکور اشکال کا رقبہ',
      'مکعب اور مکعب نما',
      'قائمہ دائروی اسطوانہ',
      'اکائیوں کی تبدیلی',
      'سطحی رقبہ اور حجم',
    ],
    en: {
      name: 'Measurement',
      shortDescription:
        'Area of trapezium, rhombus and polygons; surface area and volume of cube, cuboid, and right circular cylinder.',
      keyTopics: [
        'Area of Quadrilaterals',
        'Cube and Cuboid',
        'Right Circular Cylinder',
        'Unit Conversions',
        'Surface Area and Volume',
      ],
    },
  },
  {
    id: 'geometry',
    number: 4,
    name: 'جیومیٹری',
    shortDescription:
      'چوکور اشکال کی خصوصیات، منتظم کثیر الاضلاع، متوازی خطوط، مسئلہ فیثاغورث، تماثل اور یولر کا کلیہ۔',
    keyTopics: [
      'کثیر الاضلاع اور زاویے',
      'متوازی الاضلاع اور معین',
      'متوازی خطوط',
      'مسئلہ فیثاغورث',
      'یولر کا کلیہ',
    ],
    en: {
      name: 'Geometry',
      shortDescription:
        'Properties of quadrilaterals, regular polygons, parallel lines, Pythagoras theorem, congruence, and Euler’s formula.',
      keyTopics: [
        'Polygons and Angles',
        'Parallelograms and Rhombus',
        'Parallel Lines',
        'Pythagoras Theorem',
        'Euler’s Formula',
      ],
    },
  },
  {
    id: 'statistics',
    number: 5,
    name: 'شماریات اور احتمال',
    shortDescription:
      'مواد کی ترتیب، گروہی تعدد، دائروی گراف، اوسط، وسطانیہ، عادہ، وسعت اور بنیادی احتمال۔',
    keyTopics: [
      'اوسط، وسطانیہ اور عادہ',
      'تعدد اور جماعتی وقفے',
      'دائروی گراف اور ستونی گراف',
      'سادہ واقعے کا احتمال',
      'مکمل واقعات',
    ],
    en: {
      name: 'Statistics and Probability',
      shortDescription:
        'Data organization, grouped frequency, pie charts, mean, median, mode, range, and basic probability.',
      keyTopics: [
        'Mean, Median and Mode',
        'Frequency and Class Intervals',
        'Pie Charts and Histograms',
        'Probability of Simple Events',
        'Complementary Events',
      ],
    },
  },
];

export const QUESTION_COUNTS: QuestionCount[] = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
];

export function getChapterById(id: string): ChapterInfo {
  return CHAPTERS.find((c) => c.id === id) ?? CHAPTERS[0];
}

export function getLocalizedChapter(id: ChapterId | string, lang: Language) {
  const ch = getChapterById(id);
  if (lang === 'en') {
    return {
      id: ch.id,
      number: ch.number,
      name: ch.en.name,
      shortDescription: ch.en.shortDescription,
      keyTopics: ch.en.keyTopics,
    };
  }
  return {
    id: ch.id,
    number: ch.number,
    name: ch.name,
    shortDescription: ch.shortDescription,
    keyTopics: ch.keyTopics,
  };
}
