export const INTENTS = [
  {
    id: 'hero',
    target: '#hero',
    type: 'scroll',
    keywords: {
      en: ['home', 'top', 'start', 'hero', 'go to home'],
      ar: ['الرئيسية', 'البداية', 'الأعلى', 'اذهب للرئيسية']
    },
    response: {
      en: 'Going back to the top.',
      ar: 'الرجوع إلى الأعلى.'
    }
  },
  {
    id: 'universities',
    target: '#universities',
    type: 'scroll',
    keywords: {
      en: ['universities', 'colleges', 'schools', 'institutions', 'search', 'find university'],
      ar: ['الجامعات', 'الكليات', 'المدارس', 'المؤسسات', 'بحث', 'ابحث عن جامعة']
    },
    response: {
      en: 'Exploring our partner universities.',
      ar: 'استكشاف الجامعات الشريكة لنا.'
    }
  },
  {
    id: 'footer',
    target: '#footer',
    type: 'scroll',
    keywords: {
      en: ['address', 'footer', 'location', 'contact info', 'where are you'],
      ar: ['العنوان', 'الموقع', 'معلومات الاتصال', 'اين انتم']
    },
    response: {
      en: 'Taking you to our contact information.',
      ar: 'نقلك إلى معلومات الاتصال الخاصة بنا.'
    }
  },
  {
    id: 'language',
    type: 'action',
    action: 'toggleLanguage',
    keywords: {
      en: ['language', 'change language', 'arabic', 'english', 'switch language'],
      ar: ['اللغة', 'تغيير اللغة', 'العربية', 'الإنجليزية', 'تبديل اللغة']
    },
    response: {
      en: 'Switching language for you.',
      ar: 'تغيير اللغة لك.'
    }
  },
  {
    id: 'ecosystem',
    target: '#ecosystem',
    type: 'scroll',
    keywords: {
      en: ['ecosystem', 'network', 'partners'],
      ar: ['النظام', 'الشركاء', 'الشبكة']
    },
    response: {
      en: 'Showing our ecosystem.',
      ar: 'عرض نظامنا البيئي.'
    }
  },
  {
    id: 'process',
    target: '#process',
    type: 'scroll',
    keywords: {
      en: ['process', 'how it works', 'steps'],
      ar: ['كيف يعمل', 'العملية', 'الخطوات']
    },
    response: {
      en: 'Here is how it works.',
      ar: 'إليك كيفية العمل.'
    }
  },
  {
    id: 'for-parents',
    target: '#for-parents',
    type: 'scroll',
    keywords: {
      en: ['parents', 'family', 'families'],
      ar: ['الآباء', 'أولياء الأمور', 'العائلة']
    },
    response: {
      en: 'Information for parents.',
      ar: 'معلومات لأولياء الأمور.'
    }
  },
  {
    id: 'download-app',
    target: '#download-app',
    type: 'scroll',
    keywords: {
      en: ['app', 'download', 'mobile'],
      ar: ['التطبيق', 'تحميل', 'جوال']
    },
    response: {
      en: 'Taking you to the app download section.',
      ar: 'نقلك إلى قسم تحميل التطبيق.'
    }
  },
  {
    id: 'universities',
    target: '#universities',
    type: 'scroll',
    keywords: {
      en: ['universities', 'colleges', 'schools', 'institutions'],
      ar: ['الجامعات', 'الكليات', 'المدارس', 'المؤسسات']
    },
    response: {
      en: 'Exploring our partner universities.',
      ar: 'استكشاف الجامعات الشريكة لنا.'
    }
  },
  {
    id: 'testimonials',
    target: '#testimonials',
    type: 'scroll',
    keywords: {
      en: ['testimonials', 'reviews', 'stories'],
      ar: ['تجارب', 'آراء', 'قصص النجاح']
    },
    response: {
      en: 'What our students say.',
      ar: 'ما يقوله طلابنا.'
    }
  },
  {
    id: 'faq',
    target: '#faq',
    type: 'scroll',
    keywords: {
      en: ['faq', 'questions', 'help'],
      ar: ['الأسئلة الشائعة', 'مساعدة', 'استفسارات']
    },
    response: {
      en: 'Commonly asked questions.',
      ar: 'الأسئلة الشائعة.'
    }
  },
  {
    id: 'closing',
    target: '#cta',
    type: 'scroll',
    keywords: {
      en: ['contact', 'get started', 'apply'],
      ar: ['تواصل', 'ابدأ', 'تقديم']
    },
    response: {
      en: 'Ready to get started? Contact us here.',
      ar: 'هل أنت جاهز للبدء؟ تواصل معنا هنا.'
    }
  },
  {
    id: 'about',
    target: '/siu/about',
    type: 'route',
    keywords: {
      en: ['about', 'story', 'who we are'],
      ar: ['من نحن', 'قصتنا', 'عن الشركة']
    },
    response: {
      en: 'Opening the About page.',
      ar: 'فتح صفحة "من نحن".'
    }
  }
];
