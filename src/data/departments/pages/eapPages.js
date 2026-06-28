const related = (slug, links) =>
  links.map(({ label, path }) => ({ label, path: `/academics/undergraduate/${slug}/${path}` }));

const base = 'english-for-academic-purposes';

export default {
  levels: {
    type: 'editorial',
    title: 'Learning Levels',
    eyebrow: 'EAP Programme',
    lead: 'EAP places students at the appropriate level based on placement assessment — ensuring instruction matches your current proficiency and goals.',
    sections: [
      {
        title: 'Level structure',
        list: [
          'Foundation — build core grammar, vocabulary, and study skills',
          'Intermediate — develop academic reading and structured writing',
          'Upper Intermediate — seminar participation and essay development',
          'Advanced — research writing and degree-level communication',
        ],
      },
      {
        title: 'Duration',
        content: 'Each level typically requires one semester of full-time study. Progression depends on demonstrated competency, not time alone.',
      },
    ],
    related: related(base, [
      { label: 'Placement process', path: 'placement' },
      { label: 'Completion requirements', path: 'completion' },
      { label: 'Admissions', path: 'admissions' },
    ]),
  },

  placement: {
    type: 'editorial',
    title: 'Placement Process',
    eyebrow: 'Getting Started',
    lead: 'All new EAP students complete a placement assessment to determine the most appropriate starting level.',
    sections: [
      {
        title: 'Assessment components',
        list: ['Written composition', 'Reading comprehension', 'Listening assessment', 'Structured interview'],
      },
      {
        title: 'After placement',
        content: 'An academic advisor reviews your results, recommends a level, and outlines your expected pathway to degree programme entry.',
      },
    ],
    related: related(base, [
      { label: 'Learning levels', path: 'levels' },
      { label: 'FAQ', path: 'faq' },
      { label: 'Admissions', path: 'admissions' },
    ]),
  },

  completion: {
    type: 'editorial',
    title: 'Completion Requirements',
    eyebrow: 'Progression',
    lead: 'Students complete EAP when they demonstrate the English proficiency required for their target degree programme.',
    sections: [
      {
        title: 'Requirements',
        list: [
          'Successful completion of Advanced level coursework',
          'Minimum portfolio score across writing and speaking',
          'IELTS 6.0 equivalent or internal exit assessment',
          'Academic advisor approval for degree transition',
        ],
      },
    ],
    related: related(base, [
      { label: 'Degree pathways', path: 'pathways' },
      { label: 'University preparation', path: 'university-preparation' },
      { label: 'Levels', path: 'levels' },
    ]),
  },

  'academic-writing': {
    type: 'pathway',
    title: 'Academic Writing',
    eyebrow: 'Core Skill',
    lead: 'Develop the ability to write clear, well-structured academic essays, reports, and research papers.',
    focus: ['Essay structure', 'Argumentation', 'Citation & referencing', 'Research writing'],
    careers: [],
    courses: ['Academic Writing I–IV', 'Research Paper Writing', 'Discipline-specific Writing'],
    related: related(base, [
      { label: 'Reading skills', path: 'reading' },
      { label: 'Learning resources', path: 'resources' },
      { label: 'Faculty', path: 'faculty' },
    ]),
  },

  'academic-speaking': {
    type: 'pathway',
    title: 'Academic Speaking',
    eyebrow: 'Core Skill',
    lead: 'Build confidence in seminars, presentations, and academic discussions expected at university level.',
    focus: ['Seminar participation', 'Presentations', 'Pronunciation', 'Academic discourse'],
    courses: ['Academic Speaking I–IV', 'Presentation Skills', 'Debate & Discussion'],
    related: related(base, [
      { label: 'Listening skills', path: 'listening' },
      { label: 'Student activities', path: 'activities' },
      { label: 'Levels', path: 'levels' },
    ]),
  },

  listening: {
    type: 'pathway',
    title: 'Listening Skills',
    eyebrow: 'Core Skill',
    lead: 'Train your ear for academic lectures, discussions, and multimedia content used in university classrooms.',
    focus: ['Lecture comprehension', 'Note-taking', 'Accent exposure', 'Academic vocabulary in context'],
    courses: ['Academic Listening I–IV', 'Lecture Skills', 'Media Literacy for Academics'],
    related: related(base, [
      { label: 'Academic speaking', path: 'academic-speaking' },
      { label: 'Resources', path: 'resources' },
    ]),
  },

  reading: {
    type: 'pathway',
    title: 'Reading Skills',
    eyebrow: 'Core Skill',
    lead: 'Read academic texts critically — identifying arguments, evaluating evidence, and synthesizing multiple sources.',
    focus: ['Critical reading', 'Speed & comprehension', 'Vocabulary in context', 'Source synthesis'],
    courses: ['Academic Reading I–IV', 'Critical Analysis', 'Research Reading Strategies'],
    related: related(base, [
      { label: 'Academic writing', path: 'academic-writing' },
      { label: 'University preparation', path: 'university-preparation' },
    ]),
  },

  'university-preparation': {
    type: 'editorial',
    title: 'University Preparation',
    eyebrow: 'Pathway to Degree Study',
    lead: 'Beyond language skills, EAP prepares you for the academic culture, expectations, and self-directed learning of university life.',
    sections: [
      {
        title: 'What you will learn',
        list: [
          'Time management and study planning',
          'Academic integrity and referencing',
          'Working with faculty and advisors',
          'Using library and research databases',
          'Group work and peer collaboration',
        ],
      },
    ],
    related: related(base, [
      { label: 'Degree pathways', path: 'pathways' },
      { label: 'Korean university life', path: 'korean-university-life' },
      { label: 'Student support', path: 'student-support' },
    ]),
  },

  'korean-university-life': {
    type: 'editorial',
    title: 'Korean University Life',
    eyebrow: 'Cultural Preparation',
    lead: 'Practical guidance for international students adapting to academic and social life at a Korean university campus.',
    sections: [
      {
        title: 'Topics covered',
        list: [
          'Campus facilities and student services',
          'Cultural norms in Korean classrooms',
          'Building social connections',
          'Health, housing, and daily life essentials',
          'Navigating administrative processes',
        ],
      },
    ],
    related: related(base, [
      { label: 'Student support', path: 'student-support' },
      { label: 'Student activities', path: 'activities' },
      { label: 'International students', path: '/international-students' },
    ]),
  },

  'student-support': {
    type: 'editorial',
    title: 'Student Support',
    eyebrow: 'We are here to help',
    lead: 'EAP provides dedicated advising, tutoring, and wellbeing support so you never navigate university preparation alone.',
    sections: [
      {
        title: 'Support services',
        list: [
          'Academic advising and level progression planning',
          'One-on-one writing and speaking tutoring',
          'Peer mentoring programme',
          'Wellbeing and counselling referrals',
          'Visa and administrative guidance (referral)',
        ],
      },
    ],
    related: related(base, [
      { label: 'Placement', path: 'placement' },
      { label: 'Resources', path: 'resources' },
      { label: 'Contact admissions', path: 'admissions' },
    ]),
  },

  activities: {
    type: 'editorial',
    title: 'Student Activities',
    eyebrow: 'Community',
    lead: 'Language learning extends beyond the classroom through clubs, conversation partners, and cultural events.',
    sections: [
      {
        title: 'Activities',
        list: [
          'English conversation club',
          'International culture nights',
          'Debate and public speaking society',
          'Writing workshop series',
          'Buddy programme with degree students',
        ],
      },
    ],
    related: related(base, [
      { label: 'Academic speaking', path: 'academic-speaking' },
      { label: 'Korean university life', path: 'korean-university-life' },
    ]),
  },

  resources: {
    type: 'editorial',
    title: 'Learning Resources',
    eyebrow: 'Self-Study',
    lead: 'Access curated materials, practice exercises, and digital tools to accelerate your progress between classes.',
    sections: [
      {
        title: 'Resource types',
        list: [
          'Digital grammar and vocabulary modules',
          'Academic writing templates and exemplars',
          'Listening practice archives',
          'Referencing style guides (APA, MLA)',
          'Recommended reading lists by level',
        ],
      },
    ],
    related: related(base, [
      { label: 'Academic writing', path: 'academic-writing' },
      { label: 'Levels', path: 'levels' },
    ]),
  },

  pathways: {
    type: 'editorial',
    title: 'Degree Pathways',
    eyebrow: 'What comes next',
    lead: 'Upon completing EAP, students transition into KDU Global undergraduate programmes with the English proficiency required to succeed.',
    sections: [
      {
        title: 'Available pathways',
        list: [
          'Bachelor of Smart Computing',
          'International Business Administration (BBA)',
          'Additional programmes as announced',
        ],
      },
      {
        title: 'Transition support',
        content: 'Academic advisors coordinate your move from EAP to your degree department, including orientation and course registration.',
      },
    ],
    related: [
      { label: 'Smart Computing', path: '/academics/undergraduate/smart-computing' },
      { label: 'International Business Administration', path: '/academics/undergraduate/international-business-administration' },
      { label: 'Completion requirements', path: `/academics/undergraduate/${base}/completion` },
    ],
  },

  scholarships: {
    type: 'editorial',
    title: 'Scholarships',
    eyebrow: 'Financial Support',
    lead: 'EAP applicants may qualify for pathway scholarships based on academic merit and need.',
    sections: [
      {
        title: 'Available awards',
        list: ['EAP Excellence Scholarship', 'International Student Support Grant', 'Progression Scholarship (upon degree entry)'],
      },
    ],
    related: related(base, [{ label: 'Admissions', path: 'admissions' }]),
  },

  admissions: {
    type: 'admissions',
    title: 'Admissions',
    eyebrow: 'Apply',
    lead: 'EAP welcomes students at all proficiency levels. No prior IELTS score is required — we assess your level upon arrival.',
  },

  faq: { type: 'faq' },
};
