const IMG = {
  language: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
  classroom: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
  portrait: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  student: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
  event: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  books: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
};

export default {
  slug: 'english-for-academic-purposes',
  title: 'English for Academic Purposes',
  shortTitle: 'EAP',
  description:
    'Master academic English communication skills essential for success in international higher education and professional environments.',
  bannerImage: IMG.language,
  cardImage: IMG.language,
  cardDescription:
    'Develop advanced academic English proficiency for university study, research, and professional communication.',

  breadcrumbs: [
    { label: 'Home', path: '/' },
    { label: 'Academics', path: '/academics' },
    { label: 'English for Academic Purposes' },
  ],

  chair: {
    title: 'the Program Coordinator',
    name: 'Dr. Catherine Morrison',
    position: 'Coordinator, English for Academic Purposes',
    photo: IMG.portrait,
    message: [
      'Welcome to the English for Academic Purposes program at KDU Global. Language is the gateway to academic success, and our program is designed to equip you with the English proficiency and academic skills needed to excel in an international university environment.',
      'Whether you are preparing for degree-level study, enhancing your research writing capabilities, or developing professional communication skills, our experienced faculty provide personalized instruction tailored to your goals and proficiency level.',
      'Our immersive approach combines classroom instruction with real academic tasks — from writing research papers to delivering presentations — ensuring you graduate with confidence in your English language abilities.',
    ],
    mission:
      'To empower international students with advanced English language proficiency and academic skills for success in higher education and global professional contexts.',
    objectives: [
      'Develop advanced reading, writing, listening, and speaking skills for academic contexts',
      'Prepare students for university-level coursework and research',
      'Build critical thinking and academic discourse competencies',
      'Foster cultural adaptation and confidence in English-medium environments',
    ],
  },

  overview: {
    philosophy:
      'We believe language learning is most effective when embedded in authentic academic contexts. Students engage with real university materials, participate in seminar discussions, and produce academic writing that meets international standards.',
    outcomes: [
      'Write clear, well-structured academic essays and research papers',
      'Deliver effective academic presentations and participate in seminars',
      'Comprehend and critically analyze academic texts across disciplines',
      'Apply appropriate academic vocabulary and register in written and spoken communication',
      'Use research and citation skills following international academic conventions',
      'Achieve IELTS 6.5+ or equivalent for university degree program entry',
    ],
    pathways: [
      'University Degree Program Preparation',
      'Academic Research Writing',
      'Professional English Communication',
      'English Language Teaching (TESOL pathway)',
      'Graduate Studies Preparation',
    ],
  },

  admissions: {
    eligibility: [
      'High school diploma or equivalent',
      'Basic English proficiency (IELTS 4.5 or equivalent)',
      'Commitment to intensive language study',
      'Placement test required for level assignment',
    ],
    language: [
      'No minimum English requirement for entry — placement test determines level',
      'All instruction conducted in English',
      'Support available in multiple languages for administrative matters',
    ],
    documents: [
      'Completed application form',
      'Copy of passport or national ID',
      'Previous English test scores (if available)',
      'Personal learning goals statement',
      'Academic transcripts (for pathway students)',
    ],
    tuition: {
      amount: '$4,000 per semester',
      note: 'Intensive pathway packages available. Scholarships for students progressing to degree programs at KDU Global.',
    },
    timeline: [
      { date: 'Rolling', event: 'Applications accepted year-round' },
      { date: 'January / May / September', event: 'Program start dates (three intakes per year)' },
      { date: '2 weeks before start', event: 'Placement testing and orientation' },
    ],
  },

  curriculum: [
    {
      year: 1,
      semesters: [
        {
          name: 'Semester 1 — Foundation',
          majorCourses: [
            { code: 'EAP101', name: 'Academic Reading & Vocabulary', credits: 4 },
            { code: 'EAP102', name: 'Academic Writing Fundamentals', credits: 4 },
            { code: 'EAP103', name: 'Listening & Note-Taking', credits: 3 },
            { code: 'EAP104', name: 'Speaking & Pronunciation', credits: 3 },
          ],
          electives: [
            { code: 'EAP110', name: 'Study Skills & University Culture', credits: 2 },
          ],
        },
        {
          name: 'Semester 2 — Intermediate',
          majorCourses: [
            { code: 'EAP201', name: 'Academic Essay Writing', credits: 4 },
            { code: 'EAP202', name: 'Critical Reading & Analysis', credits: 3 },
            { code: 'EAP203', name: 'Academic Presentation Skills', credits: 3 },
            { code: 'EAP204', name: 'Grammar for Academic Contexts', credits: 3 },
          ],
          electives: [
            { code: 'EAP210', name: 'IELTS Preparation', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 2,
      semesters: [
        {
          name: 'Semester 1 — Advanced',
          majorCourses: [
            { code: 'EAP301', name: 'Research Writing & Methodology', credits: 4 },
            { code: 'EAP302', name: 'Academic Discourse & Seminar Skills', credits: 3 },
            { code: 'EAP303', name: 'Discipline-Specific English', credits: 3 },
            { code: 'EAP304', name: 'Advanced Listening & Lecture Comprehension', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2 — Pre-University',
          majorCourses: [
            { code: 'EAP401', name: 'Capstone Research Project', credits: 4 },
            { code: 'EAP402', name: 'Professional Communication', credits: 3 },
            { code: 'EAP403', name: 'Academic Portfolio Development', credits: 3 },
            { code: 'EAP404', name: 'University Transition Seminar', credits: 2 },
          ],
          electives: [
            { code: 'EAP410', name: 'TOEFL/IELTS Intensive Prep', credits: 2 },
          ],
        },
      ],
    },
  ],

  faculty: [
    {
      id: 'eap-1',
      name: 'Dr. Catherine Morrison',
      position: 'Program Coordinator',
      rank: 'Professors',
      photo: IMG.portrait,
      specialization: 'Applied Linguistics & Academic Writing',
      researchInterests: 'Second language writing, academic discourse analysis, assessment',
      biography: 'Dr. Morrison has over 15 years of experience in English language education across Europe and Asia. She holds a PhD in Applied Linguistics from the University of Edinburgh.',
      email: 'c.morrison@kduglobal.edu',
      phone: '+1 (555) 300-1001',
      office: 'Building D, Room 101',
      linkedin: '#',
      scholar: '#',
    },
    {
      id: 'eap-2',
      name: 'Mr. Andrew Foster',
      position: 'Senior Lecturer',
      rank: 'Lecturers',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      specialization: 'Academic Speaking & Presentation Skills',
      researchInterests: 'Oral proficiency assessment, pronunciation pedagogy, debate education',
      biography: 'Mr. Foster is a certified IELTS examiner and has trained thousands of students for English proficiency exams. He leads the speaking and presentation curriculum.',
      email: 'a.foster@kduglobal.edu',
      phone: '+1 (555) 300-1002',
      office: 'Building D, Room 103',
      linkedin: '#',
    },
    {
      id: 'eap-3',
      name: 'Ms. Priya Sharma',
      position: 'Lecturer',
      rank: 'Lecturers',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      specialization: 'Reading Comprehension & Critical Analysis',
      researchInterests: 'Extensive reading programs, vocabulary acquisition, content-based instruction',
      biography: 'Ms. Sharma specializes in developing reading programs that accelerate vocabulary growth and reading fluency for academic contexts.',
      email: 'p.sharma@kduglobal.edu',
      phone: '+1 (555) 300-1003',
      office: 'Building D, Room 105',
      linkedin: '#',
    },
    {
      id: 'eap-4',
      name: 'Dr. Hans Weber',
      position: 'Associate Professor',
      rank: 'Associate Professors',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      specialization: 'Research Writing & Academic Publishing',
      researchInterests: 'Scholarly writing pedagogy, citation practices, interdisciplinary communication',
      biography: 'Dr. Weber has published extensively on academic writing instruction and mentors students in producing publication-quality research papers.',
      email: 'h.weber@kduglobal.edu',
      phone: '+1 (555) 300-1004',
      office: 'Building D, Room 107',
      linkedin: '#',
      researchgate: '#',
    },
  ],

  researchAreas: [
    {
      title: 'Academic Writing Pedagogy',
      description: 'Investigating effective methods for teaching academic writing to non-native English speakers across disciplines.',
      faculty: ['Dr. Catherine Morrison', 'Dr. Hans Weber'],
    },
    {
      title: 'Language Assessment',
      description: 'Developing and validating assessment tools for measuring academic English proficiency and learning outcomes.',
      faculty: ['Mr. Andrew Foster', 'Dr. Catherine Morrison'],
    },
    {
      title: 'Content-Based Instruction',
      description: 'Exploring integrated approaches that combine language learning with subject-matter content for accelerated acquisition.',
      faculty: ['Ms. Priya Sharma'],
    },
    {
      title: 'Intercultural Communication',
      description: 'Studying how cultural factors influence academic communication and developing strategies for cross-cultural competence.',
      faculty: ['Dr. Catherine Morrison', 'Mr. Andrew Foster'],
    },
  ],

  news: [
    {
      id: 'eap-n1',
      image: IMG.books,
      date: 'June 8, 2026',
      category: 'Achievement',
      title: 'EAP Students Achieve Record IELTS Scores',
      summary: '92% of graduating EAP students achieved IELTS 6.5 or above, exceeding the national average for pathway programs.',
      link: '#',
    },
    {
      id: 'eap-n2',
      image: IMG.classroom,
      date: 'May 18, 2026',
      category: 'Program',
      title: 'New Digital Language Lab Opens',
      summary: 'State-of-the-art language lab with AI-powered pronunciation feedback and interactive learning modules now available to all EAP students.',
      link: '#',
    },
    {
      id: 'eap-n3',
      image: IMG.language,
      date: 'April 25, 2026',
      category: 'Event',
      title: 'International English Speech Competition',
      summary: 'EAP students showcased their presentation skills at the annual speech competition, with winners advancing to the regional finals.',
      link: '#',
    },
  ],

  events: [
    {
      banner: IMG.event,
      title: 'Academic Writing Workshop Series',
      date: 'July 15, 2026',
      venue: 'Language Center, Building D',
      description: 'Weekly workshops covering essay structure, argumentation, citation styles, and research paper formatting.',
      type: 'Workshop',
    },
    {
      banner: IMG.classroom,
      title: 'English Speaking Club',
      date: 'Every Wednesday',
      venue: 'Conversation Lounge, Building D',
      description: 'Informal speaking practice sessions with native speakers and advanced students. Open to all proficiency levels.',
      type: 'Seminar',
    },
    {
      banner: IMG.books,
      title: 'IELTS Mock Examination',
      date: 'August 1, 2026',
      venue: 'Testing Center, Building D',
      description: 'Full-length IELTS practice test with detailed feedback session. Free for all EAP students.',
      type: 'Workshop',
    },
  ],

  testimonials: [
    {
      photo: IMG.student,
      name: 'Lin Wei',
      role: 'BSc Smart Computing Student',
      program: 'EAP Graduate, 2025',
      quote: 'The EAP program transformed my English skills. When I started, I could barely write a paragraph. Now I confidently write research papers and present my projects in English.',
    },
    {
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      name: 'Fatima Al-Hassan',
      role: 'IBA Student',
      program: 'EAP Graduate, 2024',
      quote: 'The personalized attention and structured progression in EAP gave me the foundation I needed. I went from IELTS 5.0 to 7.0 in just one year.',
    },
  ],

  careers: [
    { title: 'Academic English Instructor', description: 'Teach English for academic purposes at universities and language institutions worldwide.', icon: '📚' },
    { title: 'Language Specialist', description: 'Provide language support and editing services for academic and professional publications.', icon: '✍️' },
    { title: 'Curriculum Developer', description: 'Design English language programs and materials for educational institutions.', icon: '📋' },
    { title: 'International Student Advisor', description: 'Support international students in adapting to English-medium academic environments.', icon: '🌐' },
    { title: 'Translator & Interpreter', description: 'Facilitate communication across languages in academic, business, and diplomatic contexts.', icon: '🗣️' },
  ],

  contact: {
    address: 'English Language Center, Building D, Floor 1, KDU Global Campus, 123 University Avenue',
    phone: '+1 (555) 300-1000',
    email: 'eap@kduglobal.edu',
    hours: 'Monday – Friday, 8:30 AM – 6:00 PM',
  },
};
