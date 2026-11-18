import { Difficulty, Language } from '../types/math';

export function getOptionLabels(lang: Language): readonly [string, string, string, string] {
  return lang === 'en' ? (['A', 'B', 'C', 'D'] as const) : (['ا', 'ب', 'ج', 'د'] as const);
}

export function getDifficultyLabel(difficulty: Difficulty, lang: Language): string {
  if (lang === 'en') {
    if (difficulty === 'easy') return 'Easy';
    if (difficulty === 'medium') return 'Medium';
    return 'Hard';
  }
  if (difficulty === 'easy') return 'آسان';
  if (difficulty === 'medium') return 'درمیانی';
  return 'مشکل';
}

export function getPerformanceStatusForLang(percentage: number, lang: Language): string {
  if (lang === 'en') {
    if (percentage >= 90) return 'Outstanding Mastery';
    if (percentage >= 75) return 'Excellent Performance';
    if (percentage >= 60) return 'Good Effort';
    if (percentage >= 40) return 'Needs More Practice';
    return 'Keep Practicing';
  }
  if (percentage >= 90) return 'شاندار مہارت';
  if (percentage >= 75) return 'بہترین کارکردگی';
  if (percentage >= 60) return 'اچھی کوشش';
  if (percentage >= 40) return 'مزید مشق کی ضرورت';
  return 'مشق جاری رکھیں';
}

export const UI_TEXT = {
  ur: {
    appTitle: 'جماعت ہشتم ریاضی ایم سی کیو ماسٹر',
    classHeading: 'جماعت ہشتم ریاضی',
    footerChapters:
      'اعداد اور عملیات · الجبرا · پیمائش · جیومیٹری · شماریات اور احتمال',
    nav: {
      dashboard: 'ڈیش بورڈ',
      practice: 'مشق',
      test: 'امتحان',
      history: 'سابقہ نتائج',
      historyShort: 'نتائج',
      primaryNavAria: 'بنیادی نیویگیشن',
      mobileNavAria: 'موبائل نیویگیشن',
    },
    header: {
      languageAria: 'زبان منتخب کریں',
      urduLabel: 'اردو',
      englishLabel: 'English',
      lightMode: 'روشن موڈ',
      darkMode: 'تاریک موڈ',
      switchToLightAria: 'روشن موڈ منتخب کریں',
      switchToDarkAria: 'تاریک موڈ منتخب کریں',
    },
    dashboard: {
      heroSubtitle:
        'جماعت ہشتم ریاضی کے پانچوں ابواب میں مہارت حاصل کریں — تصدیق شدہ سوالات، مرحلہ وار اردو وضاحت اور بغیر وقت کی قید کے مشق و امتحان کے ساتھ۔',
      completedTests: 'مکمل امتحانات',
      bestScore: 'بہترین نتیجہ',
      practicedQuestions: 'مشق شدہ سوالات',
      step1Heading: '1. باب منتخب کریں',
      step1Sub: '5 نصابی ابواب · 1,500+ تصدیق شدہ سوالات',
      chapterPrefix: 'باب',
      questionsWord: 'سوالات',
      selectedBadge: 'منتخب شدہ',
      step2Heading: '2. مشکل کی سطح منتخب کریں',
      difficulties: {
        easy: {
          button: 'آسان سوالات',
          description: 'بنیادی ریاضیاتی تصورات، تعریفیں اور سادہ حسابی سوالات۔',
        },
        medium: {
          button: 'درمیانے سوالات',
          description: 'درمیانے درجے کے تصوراتی اور دو مرحلوں والے حسابی مسائل۔',
        },
        hard: {
          button: 'مشکل سوالات',
          description: 'جماعت ہشتم کے مشکل، منطقی اور کثیر مرحلوں والے ریاضی سوالات۔',
        },
      },
      step3Heading: '3. سوالات کی تعداد منتخب کریں',
      maxLimitNote: (chapterName: string, diffLabel: string, available: number) =>
        `زیادہ سے زیادہ 100 سوالات · ${chapterName} (${diffLabel}) میں ${available} سوالات دستیاب`,
      startPractice: 'مشق شروع کریں',
      startTest: 'امتحان شروع کریں',
      selectedChapterLabel: (num: number) => `منتخب باب · باب ${num}`,
      includedTopics: 'جماعت ہشتم کے شامل موضوعات',
      aiHeading: 'اے آئی کی مدد سے مزید سوالات بنائیں',
      aiDescription: (chapterName: string) =>
        `باب ${chapterName} کے لیے 5 نئے اور تصدیق شدہ اردو سوالات تیار کریں اور اپنے مقامی سوال بینک میں محفوظ کریں۔`,
      aiGenerating: 'نئے اردو سوالات تیار ہو رہے ہیں...',
      aiButton: '5 نئے اے آئی سوالات بنائیں',
      lastTest: (chapterName: string, pct: number) =>
        `آخری امتحان: ${chapterName} (${pct}%)`,
      viewHistory: 'سابقہ نتائج دیکھیں',
    },
    practice: {
      badge: 'مشق کا موڈ · فوری جواب اور وضاحت',
      chapterTitle: (num: number, name: string) => `باب ${num}: ${name}`,
      dashboardBtn: 'ڈیش بورڈ',
      newSetBtn: 'نیا سیٹ',
      chapterLabel: 'باب',
      difficultyLabel: 'مشکل کی سطح',
      countLabel: 'سوالات کی تعداد',
      questionProgress: (curr: number, total: number) => `سوال ${curr} از ${total}`,
      aiTag: 'اے آئی سوال',
      selectedOption: (label: string) => `منتخب کردہ آپشن: ${label}`,
      noAnswerYet: 'ابھی جواب منتخب نہیں کیا گیا',
      scoreLabel: (correct: number, answered: number) =>
        `اسکور: ${correct}/${answered}`,
      optionsAria: 'جواب کے آپشنز',
      correctOptionTag: 'درست جواب',
      yourChoiceTag: 'آپ کا انتخاب',
      correctBanner: 'شاباش! آپ کا جواب بالکل درست ہے۔',
      wrongBanner: 'آپ کا جواب غلط ہے۔',
      shortExplanation: 'مختصر وضاحت:',
      showSteps: 'مکمل مرحلہ وار حل دیکھیں',
      hideSteps: 'مرحلہ وار حل چھپائیں',
      correctAnswerLabel: 'صحیح جواب:',
      optionPrefix: 'آپشن',
      prevQuestion: 'پچھلا سوال',
      nextQuestion: 'اگلا سوال',
      addAiLoading: 'اے آئی سوالات شامل ہو رہے ہیں...',
      addAiBtn: '5 نئے اے آئی سوالات شامل کریں',
    },
    test: {
      badge: 'امتحانی موڈ · بغیر وقت کی قید · اپنی رفتار سے مکمل کریں',
      chapterTitle: (num: number, name: string) => `باب ${num}: ${name}`,
      dashboardBtn: 'ڈیش بورڈ',
      submitTestBtn: 'امتحان جمع کروائیں',
      chapterLabel: 'باب',
      difficultyLabel: 'مشکل کی سطح',
      countLabel: 'سوالات کی تعداد',
      questionProgress: (curr: number, total: number) => `سوال ${curr} از ${total}`,
      selectedOption: (label: string) => `منتخب کردہ آپشن: ${label}`,
      notAnsweredYet: 'ابھی جواب منتخب نہیں کیا گیا',
      optionsAria: 'امتحان کے جوابات',
      prevQuestion: 'پچھلا سوال',
      clearChoice: 'انتخاب صاف کریں',
      nextQuestion: 'اگلا سوال',
      navigatorTitle: 'سوالات کا نقشہ',
      solvedOf: (solved: number, total: number) => `${solved}/${total} حل شدہ`,
      answeredCount: (n: number) => `حل شدہ (${n})`,
      unansweredCount: (n: number) => `غیر حل شدہ (${n})`,
      navItemAria: (idx: number, answered: boolean) =>
        `سوال ${idx}، ${answered ? 'حل شدہ' : 'غیر حل شدہ'}`,
      confirmTitle: 'کیا آپ امتحان جمع کروانا چاہتے ہیں؟',
      confirmBody:
        'امتحان جمع کروانے کے بعد آپ کے نمبروں کا حساب لگایا جائے گا اور آپ ہر سوال کا درست جواب اور وضاحت دیکھ سکیں گے۔',
      totalQuestionsLabel: 'کل سوالات',
      solvedLabel: 'حل شدہ',
      unsolvedLabel: 'غیر حل شدہ',
      unansweredWarning: (n: number) =>
        `آپ کے ${n} سوالات ابھی حل نہیں ہوئے۔ آپ واپس جا کر انہیں حل کر سکتے ہیں یا ابھی جمع کروا سکتے ہیں۔`,
      reviewAnswersBtn: 'جوابات پر نظرِ ثانی کریں',
      confirmSubmitBtn: 'تصدیق اور جمع کروائیں',
    },
    result: {
      subHeader: (chapterName: string, diffLabel: string) =>
        `امتحانی نتیجہ · ${chapterName} · ${diffLabel} سطح`,
      title: 'امتحان کی کارکردگی کا خلاصہ',
      totalQuestions: 'کل سوالات',
      correctAnswers: 'درست جوابات',
      incorrectAnswers: 'غلط جوابات',
      unansweredQuestions: 'غیر حل شدہ سوالات',
      totalMarks: 'کل نمبر',
      obtainedMarks: 'حاصل کردہ نمبر',
      percentage: 'فیصد',
      performanceStatus: 'کارکردگی کی کیفیت',
      retakeTest: 'نیا امتحان دیں',
      practiceChapter: (chapterName: string) => `${chapterName} کی مشق کریں`,
      backDashboard: 'ڈیش بورڈ پر واپس جائیں',
      reviewHeading: 'سوال کا آسان اردو میں حل اور تفصیلی جائزہ',
      filterAll: (n: number) => `تمام (${n})`,
      filterCorrect: (n: number) => `درست (${n})`,
      filterIncorrect: (n: number) => `غلط (${n})`,
      filterUnanswered: (n: number) => `غیر حل شدہ (${n})`,
      questionHeader: (num: number, topic: string) => `سوال ${num} · ${topic}`,
      badgeCorrect: 'شاباش! آپ کا جواب بالکل درست ہے۔',
      badgeUnanswered: 'غیر حل شدہ',
      badgeIncorrect: 'آپ کا جواب غلط ہے۔',
      rightAnswerTag: 'درست جواب',
      yourAnswerTag: 'آپ کا جواب',
      studentSelectedLabel: 'طالب علم کا منتخب کردہ جواب:',
      notSelected: 'منتخب نہیں کیا گیا',
      correctAnswerLabel: 'درست جواب:',
      stepByStepHeading: 'سوال کا آسان اردو میں حل — مرحلہ وار وضاحت:',
      noQuestionsInFilter: 'اس زمرے میں کوئی سوال موجود نہیں ہے۔',
    },
    solution: {
      heading: 'حل:',
      teacherBadge: 'ریاضی کے استاد کی مرحلہ وار وضاحت',
      aiTeacherBadge: 'اے آئی استادِ ریاضی (تصدیق شدہ حل)',
      questionLabel: 'سوال:',
      stepLabel: (num: number) => `مرحلہ ${num}:`,
      step1Title: 'مرحلہ 1: سوال کو سمجھیں',
      step2Title: 'مرحلہ 2: طریقہ سمجھیں',
      step3Title: 'مرحلہ 3: حساب کریں',
      step4Title: 'مرحلہ 4: جواب نکالیں',
      step5Title: 'مرحلہ 5: تصدیق کریں',
      finalAnswerTitle: 'حتمی جواب:',
      correctAnswerLabel: 'صحیح جواب:',
      optionPrefix: 'آپشن',
      mistakeHeading: 'غلطی کی نشاندہی اور اصلاح',
      selectedWrongLabel: 'آپ کا منتخب کردہ جواب:',
      whyWrongLabel: 'یہ جواب غلط کیوں ہے:',
      whereMistakeLabel: 'غلطی کہاں ہوئی:',
      similarTipTitle: 'اسی طرح کا سوال کیسے حل کریں:',
      askAiBtn: 'اے آئی استادِ ریاضی سے ذاتی وضاحت حاصل کریں',
      refreshAiBtn: 'اے آئی استاد کی وضاحت دوبارہ حاصل کریں',
      aiLoading: 'استادِ ریاضی سوال حل کر کے مرحلہ وار وضاحت تیار کر رہے ہیں...',
      aiVerifiedLabel: 'جواب کی ریاضیاتی تصدیق مکمل',
    },
    history: {
      subBadge: 'براؤزر میں مقامی طور پر محفوظ · لاگ ان کی ضرورت نہیں',
      title: 'آپ کی پیش رفت اور سابقہ امتحانی نتائج',
      dashboardBtn: 'ڈیش بورڈ',
      chapterProgressTitle: 'ابواب کے لحاظ سے مشق کی پیش رفت',
      totalPracticed: (attempted: number, accText: string) =>
        `کل مشق شدہ سوالات: ${attempted} · درستگی: ${accText}`,
      chapterPrefix: 'باب',
      correctOutOf: (correct: number, attempted: number) =>
        `${attempted} میں سے ${correct} درست`,
      completedTestsTitle: (n: number) => `مکمل شدہ امتحانات (${n})`,
      clearHistoryBtn: 'ریکارڈ صاف کریں',
      emptyMessage:
        'آپ نے ابھی تک کوئی امتحان مکمل نہیں کیا۔ اپنے محفوظ نتائج دیکھنے کے لیے ڈیش بورڈ سے امتحان شروع کریں۔',
      testMeta: (diffLabel: string, totalQ: number, dateStr: string) =>
        `${diffLabel} سطح · ${totalQ} سوالات · ${dateStr}`,
      confirmClearTitle: 'کیا آپ محفوظ امتحانی ریکارڈ حذف کرنا چاہتے ہیں؟',
      confirmClearBody:
        'اس سے آپ کے اس براؤزر میں محفوظ شدہ تمام سابقہ امتحانی نتائج مستقل طور پر حذف ہو جائیں گے۔',
      cancelBtn: 'منسوخ کریں',
      confirmBtn: 'سب صاف کریں',
    },
    ai: {
      fallbackUnavailable:
        'اے آئی سروس اس وقت دستیاب نہیں ہے۔ تصدیق شدہ بلٹ ان سوال بینک تیار ہے۔',
      addedMessage: (added: number) =>
        `آپ کے سوال بینک میں ${added} نئے تصدیق شدہ اے آئی سوالات شامل کر دیے گئے ہیں۔`,
      alreadyExists:
        'تیار کردہ تمام سوالات پہلے سے موجود تھے؛ بلٹ ان سوال بینک دستیاب ہے۔',
      networkError:
        'اے آئی سروس سے رابطہ نہیں ہو سکا۔ تصدیق شدہ بلٹ ان سوال بینک کے ساتھ بلا تعطل جاری رکھا جا رہا ہے۔',
    },
  },
  en: {
    appTitle: 'Class 8 Mathematics MCQ Master',
    classHeading: 'Class 8 Mathematics',
    footerChapters:
      'Numbers and Operations · Algebra · Measurement · Geometry · Statistics and Probability',
    nav: {
      dashboard: 'Dashboard',
      practice: 'Practice',
      test: 'Test',
      history: 'History',
      historyShort: 'Results',
      primaryNavAria: 'Primary Navigation',
      mobileNavAria: 'Mobile Navigation',
    },
    header: {
      languageAria: 'Select Language',
      urduLabel: 'اردو',
      englishLabel: 'English',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      switchToLightAria: 'Switch to Light Mode',
      switchToDarkAria: 'Switch to Dark Mode',
    },
    dashboard: {
      heroSubtitle:
        'Master all five Class 8 Mathematics chapters with verified MCQs, clear step-by-step solutions, and untimed practice and test modes.',
      completedTests: 'Completed Tests',
      bestScore: 'Best Score',
      practicedQuestions: 'Practiced MCQs',
      step1Heading: '1. Select a Chapter',
      step1Sub: '5 Syllabus Chapters · 1,500+ Verified Questions',
      chapterPrefix: 'Chapter',
      questionsWord: 'Questions',
      selectedBadge: 'Selected',
      step2Heading: '2. Select Difficulty Level',
      difficulties: {
        easy: {
          button: 'Easy MCQs',
          description: 'Basic mathematical concepts, definitions, and simple calculations.',
        },
        medium: {
          button: 'Medium MCQs',
          description: 'Intermediate concept-based and two-step mathematical problems.',
        },
        hard: {
          button: 'Hard MCQs',
          description: 'Challenging, multi-step, and logical Class 8 mathematics problems.',
        },
      },
      step3Heading: '3. Select Number of Questions',
      maxLimitNote: (chapterName: string, diffLabel: string, available: number) =>
        `Maximum 100 questions · ${available} available in ${chapterName} (${diffLabel})`,
      startPractice: 'Start Practice',
      startTest: 'Start Test',
      selectedChapterLabel: (num: number) => `Selected Chapter · Chapter ${num}`,
      includedTopics: 'Included Class 8 Topics',
      aiHeading: 'Generate More Questions with AI',
      aiDescription: (chapterName: string) =>
        `Generate 5 new verified questions for ${chapterName} and save them to your local question bank.`,
      aiGenerating: 'Generating new questions...',
      aiButton: 'Generate 5 New AI MCQs',
      lastTest: (chapterName: string, pct: number) =>
        `Last Test: ${chapterName} (${pct}%)`,
      viewHistory: 'View History',
    },
    practice: {
      badge: 'Practice Mode · Instant Answer & Explanation',
      chapterTitle: (num: number, name: string) => `Chapter ${num}: ${name}`,
      dashboardBtn: 'Dashboard',
      newSetBtn: 'New Set',
      chapterLabel: 'Chapter',
      difficultyLabel: 'Difficulty Level',
      countLabel: 'Number of Questions',
      questionProgress: (curr: number, total: number) =>
        `Question ${curr} of ${total}`,
      aiTag: 'AI Question',
      selectedOption: (label: string) => `Selected Option: ${label}`,
      noAnswerYet: 'No answer selected yet',
      scoreLabel: (correct: number, answered: number) =>
        `Score: ${correct}/${answered}`,
      optionsAria: 'Answer Options',
      correctOptionTag: 'Correct Answer',
      yourChoiceTag: 'Your Choice',
      correctBanner: 'Well done! Your answer is completely correct.',
      wrongBanner: 'Your answer is incorrect.',
      shortExplanation: 'Short Explanation:',
      showSteps: 'Show Step-by-Step Solution',
      hideSteps: 'Hide Step-by-Step Solution',
      correctAnswerLabel: 'Correct Answer:',
      optionPrefix: 'Option',
      prevQuestion: 'Previous Question',
      nextQuestion: 'Next Question',
      addAiLoading: 'Adding AI Questions...',
      addAiBtn: 'Add 5 New AI Questions',
    },
    test: {
      badge: 'Test Mode · Untimed · Complete at Your Own Pace',
      chapterTitle: (num: number, name: string) => `Chapter ${num}: ${name}`,
      dashboardBtn: 'Dashboard',
      submitTestBtn: 'Submit Test',
      chapterLabel: 'Chapter',
      difficultyLabel: 'Difficulty Level',
      countLabel: 'Number of Questions',
      questionProgress: (curr: number, total: number) =>
        `Question ${curr} of ${total}`,
      selectedOption: (label: string) => `Selected Option: ${label}`,
      notAnsweredYet: 'Not answered yet',
      optionsAria: 'Test Answer Options',
      prevQuestion: 'Previous Question',
      clearChoice: 'Clear Choice',
      nextQuestion: 'Next Question',
      navigatorTitle: 'Question Navigator',
      solvedOf: (solved: number, total: number) => `${solved}/${total} Answered`,
      answeredCount: (n: number) => `Answered (${n})`,
      unansweredCount: (n: number) => `Unanswered (${n})`,
      navItemAria: (idx: number, answered: boolean) =>
        `Question ${idx}, ${answered ? 'answered' : 'unanswered'}`,
      confirmTitle: 'Submit Your Test?',
      confirmBody:
        'After submitting, your test will be scored and you will see the correct answer and complete step-by-step solution for every question.',
      totalQuestionsLabel: 'Total Questions',
      solvedLabel: 'Answered',
      unsolvedLabel: 'Unanswered',
      unansweredWarning: (n: number) =>
        `You still have ${n} unanswered question${n === 1 ? '' : 's'}. You can go back to answer them or submit now.`,
      reviewAnswersBtn: 'Review Answers',
      confirmSubmitBtn: 'Confirm & Submit',
    },
    result: {
      subHeader: (chapterName: string, diffLabel: string) =>
        `Test Result · ${chapterName} · ${diffLabel} Level`,
      title: 'Test Performance Summary',
      totalQuestions: 'Total Questions',
      correctAnswers: 'Correct Answers',
      incorrectAnswers: 'Incorrect Answers',
      unansweredQuestions: 'Unanswered Questions',
      totalMarks: 'Total Marks',
      obtainedMarks: 'Obtained Marks',
      percentage: 'Percentage',
      performanceStatus: 'Performance Status',
      retakeTest: 'Take New Test',
      practiceChapter: (chapterName: string) => `Practice ${chapterName}`,
      backDashboard: 'Back to Dashboard',
      reviewHeading: 'Step-by-Step Solutions & Detailed Review',
      filterAll: (n: number) => `All (${n})`,
      filterCorrect: (n: number) => `Correct (${n})`,
      filterIncorrect: (n: number) => `Incorrect (${n})`,
      filterUnanswered: (n: number) => `Unanswered (${n})`,
      questionHeader: (num: number, topic: string) => `Question ${num} · ${topic}`,
      badgeCorrect: 'Well done! Your answer is completely correct.',
      badgeUnanswered: 'Unanswered',
      badgeIncorrect: 'Your answer is incorrect.',
      rightAnswerTag: 'Correct Answer',
      yourAnswerTag: 'Your Answer',
      studentSelectedLabel: "Student's Selected Answer:",
      notSelected: 'Not Selected',
      correctAnswerLabel: 'Correct Answer:',
      stepByStepHeading: 'Step-by-Step Solution:',
      noQuestionsInFilter: 'No questions found in this category.',
    },
    solution: {
      heading: 'Solution:',
      teacherBadge: 'Step-by-Step Math Teacher Guide',
      aiTeacherBadge: 'AI Math Teacher (Verified Solution)',
      questionLabel: 'Question:',
      stepLabel: (num: number) => `Step ${num}:`,
      step1Title: 'Step 1: Understand the Question',
      step2Title: 'Step 2: Understand the Method',
      step3Title: 'Step 3: Perform the Calculations',
      step4Title: 'Step 4: Obtain the Answer',
      step5Title: 'Step 5: Verify the Answer',
      finalAnswerTitle: 'Final Answer:',
      correctAnswerLabel: 'Correct Answer:',
      optionPrefix: 'Option',
      mistakeHeading: 'Mistake Analysis & Guidance',
      selectedWrongLabel: 'Your Selected Answer:',
      whyWrongLabel: 'Why This Is Incorrect:',
      whereMistakeLabel: 'Where the Mistake Happened:',
      similarTipTitle: 'How to Solve a Similar Question:',
      askAiBtn: 'Get Personalized AI Math Teacher Explanation',
      refreshAiBtn: 'Regenerate AI Teacher Explanation',
      aiLoading: 'Your Math Teacher is solving and verifying every step...',
      aiVerifiedLabel: 'Mathematically Verified',
    },
    history: {
      subBadge: 'Saved Locally in Browser · No Login Required',
      title: 'Your Progress & Past Test Results',
      dashboardBtn: 'Dashboard',
      chapterProgressTitle: 'Practice Progress by Chapter',
      totalPracticed: (attempted: number, accText: string) =>
        `Total Practiced: ${attempted} · Accuracy: ${accText}`,
      chapterPrefix: 'Chapter',
      correctOutOf: (correct: number, attempted: number) =>
        `${correct} of ${attempted} correct`,
      completedTestsTitle: (n: number) => `Completed Tests (${n})`,
      clearHistoryBtn: 'Clear History',
      emptyMessage:
        'You have not completed any tests yet. Start a test from the dashboard to see your saved results here.',
      testMeta: (diffLabel: string, totalQ: number, dateStr: string) =>
        `${diffLabel} Level · ${totalQ} Questions · ${dateStr}`,
      confirmClearTitle: 'Clear Saved Test History?',
      confirmClearBody:
        'This will permanently remove all saved past test results from this browser.',
      cancelBtn: 'Cancel',
      confirmBtn: 'Clear All',
    },
    ai: {
      fallbackUnavailable:
        'AI service is currently unavailable. Continuing with the verified built-in question bank.',
      addedMessage: (added: number) =>
        `Added ${added} new verified AI question${added === 1 ? '' : 's'} to your question bank.`,
      alreadyExists:
        'All generated questions already exist; the built-in question bank is ready.',
      networkError:
        'Could not reach AI service. Continuing smoothly with the verified built-in question bank.',
    },
  },
} as const;
