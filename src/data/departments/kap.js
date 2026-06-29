const IMG = {
  language: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
  classroom: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
  portrait: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  student: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
  event: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  books: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
};

export default {
  slug: 'korean-for-academic-purposes',
  title: 'Korean for Academic Purposes',
  shortTitle: 'KAP',
  description:
    'Master academic Korean communication skills essential for success in Korean-medium higher education and professional environments.',
  bannerImage: IMG.language,
  cardImage: IMG.language,
  cardDescription:
    'Develop advanced academic Korean proficiency for university study, research, and professional communication in Korea.',

  breadcrumbs: [
    { label: 'Home', path: '/' },
    { label: 'Academics', path: '/academics' },
    { label: 'Korean for Academic Purposes' },
  ],

  chair: {
    title: 'the Program Coordinator',
    name: 'Dr. Kim Min-ju',  // ✅ Korean name
    position: 'Coordinator, Korean for Academic Purposes',
    photo: IMG.portrait,
    message: [
      'Welcome to the Korean for Academic Purposes program at KDU Global. Language is the gateway to academic success, and our program is designed to equip you with the Korean proficiency and academic skills needed to excel in a Korean university environment.',
      'Whether you are preparing for degree-level study, enhancing your research writing capabilities, or developing professional communication skills, our experienced faculty provide personalized instruction tailored to your goals and proficiency level.',
      'Our immersive approach combines classroom instruction with real academic tasks — from writing research papers to delivering presentations — ensuring you graduate with confidence in your Korean language abilities.',
    ],
    mission:
      'To empower international students with advanced Korean language proficiency and academic skills for success in Korean higher education and global professional contexts.',
    objectives: [
      'Develop advanced reading, writing, listening, and speaking skills for Korean academic contexts',
      'Prepare students for university-level coursework and research in Korean',
      'Build critical thinking and academic discourse competencies in Korean',
      'Foster cultural adaptation and confidence in Korean-medium environments',
    ],
  },

  overview: {
    philosophy:
      'We believe language learning is most effective when embedded in authentic academic contexts. Students engage with real university materials, participate in seminar discussions, and produce academic writing that meets Korean academic standards.',
    outcomes: [
      'Write clear, well-structured academic essays and research papers in Korean',
      'Deliver effective academic presentations and participate in Korean seminars',
      'Comprehend and critically analyze academic texts across Korean disciplines',
      'Apply appropriate academic vocabulary and register in written and spoken Korean',
      'Use research and citation skills following Korean academic conventions',
      'Achieve TOPIK Level 4+ for Korean university degree program entry',
    ],
    pathways: [
      'Korean University Degree Program Preparation',
      'Academic Research Writing in Korean',
      'Professional Korean Communication',
      'Korean Language Teaching (KFL - Korean as a Foreign Language)',
      'Graduate Studies Preparation in Korea',
    ],
  },

  admissions: {
    eligibility: [
      'High school diploma or equivalent',
      'Basic Korean proficiency (TOPIK Level 2 or equivalent)',
      'Commitment to intensive Korean language study',
      'Placement test required for level assignment',
    ],
    language: [
      'No minimum Korean requirement for entry — placement test determines level',
      'All instruction conducted in Korean',
      'Support available in English and other languages for administrative matters',
    ],
    documents: [
      'Completed application form',
      'Copy of passport or national ID',
      'Previous Korean test scores (if available)',
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
            { code: 'KAP101', name: 'Academic Korean Reading & Vocabulary', credits: 4 },
            { code: 'KAP102', name: 'Academic Korean Writing Fundamentals', credits: 4 },
            { code: 'KAP103', name: 'Korean Listening & Note-Taking', credits: 3 },
            { code: 'KAP104', name: 'Korean Speaking & Pronunciation', credits: 3 },
          ],
          electives: [
            { code: 'KAP110', name: 'Korean Study Skills & University Culture', credits: 2 },
          ],
        },
        {
          name: 'Semester 2 — Intermediate',
          majorCourses: [
            { code: 'KAP201', name: 'Academic Korean Essay Writing', credits: 4 },
            { code: 'KAP202', name: 'Critical Korean Reading & Analysis', credits: 3 },
            { code: 'KAP203', name: 'Academic Korean Presentation Skills', credits: 3 },
            { code: 'KAP204', name: 'Korean Grammar for Academic Contexts', credits: 3 },
          ],
          electives: [
            { code: 'KAP210', name: 'TOPIK Preparation', credits: 2 },
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
            { code: 'KAP301', name: 'Korean Research Writing & Methodology', credits: 4 },
            { code: 'KAP302', name: 'Korean Academic Discourse & Seminar Skills', credits: 3 },
            { code: 'KAP303', name: 'Discipline-Specific Korean', credits: 3 },
            { code: 'KAP304', name: 'Advanced Korean Listening & Lecture Comprehension', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2 — Pre-University',
          majorCourses: [
            { code: 'KAP401', name: 'Korean Capstone Research Project', credits: 4 },
            { code: 'KAP402', name: 'Professional Korean Communication', credits: 3 },
            { code: 'KAP403', name: 'Academic Korean Portfolio Development', credits: 3 },
            { code: 'KAP404', name: 'Korean University Transition Seminar', credits: 2 },
          ],
          electives: [
            { code: 'KAP410', name: 'TOPIK Intensive Prep', credits: 2 },
          ],
        },
      ],
    },
  ],

  faculty: [
    {
      id: 'kap-1',
      name: 'Dr. Kim Min-ju',  // ✅ Korean name
      position: 'Program Coordinator',
      rank: 'Professors',
      photo: IMG.portrait,
      specialization: 'Korean Applied Linguistics & Academic Writing',
      researchInterests: 'Second language writing in Korean, academic discourse analysis, Korean language assessment',
      biography: 'Dr. Kim has over 15 years of experience in Korean language education across Asia and North America. She holds a PhD in Korean Applied Linguistics from Seoul National University.',
      email: 'm.kim@kduglobal.edu',
      phone: '+82 (2) 1234-1001',
      office: 'Building D, Room 101',
      linkedin: '#',
      scholar: '#',
    },
    {
      id: 'kap-2',
      name: 'Dr. Park Ji-hoon',  // ✅ Korean name
      position: 'Senior Lecturer',
      rank: 'Lecturers',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      specialization: 'Korean Speaking & Presentation Skills',
      researchInterests: 'Oral proficiency assessment, Korean pronunciation pedagogy, debate education',
      biography: 'Dr. Park is a certified TOPIK examiner and has trained hundreds of international students for Korean proficiency exams. He leads the speaking and presentation curriculum.',
      email: 'j.park@kduglobal.edu',
      phone: '+82 (2) 1234-1002',
      office: 'Building D, Room 103',
      linkedin: '#',
    },
    {
      id: 'kap-3',
      name: 'Ms. Lee Soo-jin',  // ✅ Korean name
      position: 'Lecturer',
      rank: 'Lecturers',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      specialization: 'Korean Reading Comprehension & Critical Analysis',
      researchInterests: 'Extensive Korean reading programs, vocabulary acquisition, content-based instruction',
      biography: 'Ms. Lee specializes in developing Korean reading programs that accelerate vocabulary growth and reading fluency for academic contexts.',
      email: 's.lee@kduglobal.edu',
      phone: '+82 (2) 1234-1003',
      office: 'Building D, Room 105',
      linkedin: '#',
    },
    {
      id: 'kap-4',
      name: 'Dr. Choi Young-ho',  // ✅ Korean name
      position: 'Associate Professor',
      rank: 'Associate Professors',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      specialization: 'Korean Research Writing & Academic Publishing',
      researchInterests: 'Scholarly Korean writing pedagogy, citation practices, interdisciplinary Korean communication',
      biography: 'Dr. Choi has published extensively on Korean academic writing instruction and mentors students in producing publication-quality research papers.',
      email: 'y.choi@kduglobal.edu',
      phone: '+82 (2) 1234-1004',
      office: 'Building D, Room 107',
      linkedin: '#',
      researchgate: '#',
    },
  ],

  researchAreas: [
    {
      title: 'Korean Academic Writing Pedagogy',
      description: 'Investigating effective methods for teaching academic Korean writing to non-native speakers across disciplines.',
      faculty: ['Dr. Kim Min-ju', 'Dr. Choi Young-ho'],
    },
    {
      title: 'Korean Language Assessment',
      description: 'Developing and validating assessment tools for measuring academic Korean proficiency and learning outcomes.',
      faculty: ['Dr. Park Ji-hoon', 'Dr. Kim Min-ju'],
    },
    {
      title: 'Content-Based Korean Instruction',
      description: 'Exploring integrated approaches that combine Korean language learning with subject-matter content for accelerated acquisition.',
      faculty: ['Ms. Lee Soo-jin'],
    },
    {
      title: 'Intercultural Communication in Korean',
      description: 'Studying how cultural factors influence Korean academic communication and developing strategies for cross-cultural competence.',
      faculty: ['Dr. Kim Min-ju', 'Dr. Park Ji-hoon'],
    },
  ],

  news: [
    {
      id: 'kap-n1',
      image: IMG.books,
      date: 'June 8, 2026',
      category: 'Achievement',
      title: 'KAP Students Achieve Record TOPIK Scores',
      summary: '92% of graduating KAP students achieved TOPIK Level 4 or above, exceeding the national average for pathway programs.',
      link: '#',
    },
    {
      id: 'kap-n2',
      image: IMG.classroom,
      date: 'May 18, 2026',
      category: 'Program',
      title: 'New Korean Digital Language Lab Opens',
      summary: 'State-of-the-art Korean language lab with AI-powered pronunciation feedback and interactive learning modules now available to all KAP students.',
      link: '#',
    },
    {
      id: 'kap-n3',
      image: IMG.language,
      date: 'April 25, 2026',
      category: 'Event',
      title: 'International Korean Speech Competition',
      summary: 'KAP students showcased their presentation skills at the annual Korean speech competition, with winners advancing to the regional finals.',
      link: '#',
    },
  ],

  events: [
    {
      banner: IMG.event,
      title: 'Korean Academic Writing Workshop Series',
      date: 'July 15, 2026',
      venue: 'Korean Language Center, Building D',
      description: 'Weekly workshops covering Korean essay structure, argumentation, citation styles, and research paper formatting.',
      type: 'Workshop',
    },
    {
      banner: IMG.classroom,
      title: 'Korean Speaking Club',
      date: 'Every Wednesday',
      venue: 'Korean Conversation Lounge, Building D',
      description: 'Informal Korean speaking practice sessions with native speakers and advanced students. Open to all proficiency levels.',
      type: 'Seminar',
    },
    {
      banner: IMG.books,
      title: 'TOPIK Mock Examination',
      date: 'August 1, 2026',
      venue: 'Testing Center, Building D',
      description: 'Full-length TOPIK practice test with detailed feedback session. Free for all KAP students.',
      type: 'Workshop',
    },
  ],

  testimonials: [
    {
      photo: IMG.student,
      name: 'Lin Wei',
      role: 'BSc Smart Computing Student',
      program: 'KAP Graduate, 2025',
      quote: 'The KAP program transformed my Korean skills. When I started, I could barely write a paragraph in Korean. Now I confidently write research papers and present my projects in Korean.',
    },
    {
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      name: 'Fatima Al-Hassan',
      role: 'IBA Student',
      program: 'KAP Graduate, 2024',
      quote: 'The personalized attention and structured progression in KAP gave me the foundation I needed. I went from TOPIK Level 2 to Level 5 in just one year.',
    },
  ],

  careers: [
    { title: 'Korean Academic Instructor', description: 'Teach Korean for academic purposes at universities and language institutions worldwide.', icon: '📚' },
    { title: 'Korean Language Specialist', description: 'Provide Korean language support and editing services for academic and professional publications.', icon: '✍️' },
    { title: 'Korean Curriculum Developer', description: 'Design Korean language programs and materials for educational institutions.', icon: '📋' },
    { title: 'International Student Advisor (Korea)', description: 'Support international students in adapting to Korean-medium academic environments.', icon: '🌐' },
    { title: 'Korean Translator & Interpreter', description: 'Facilitate communication in Korean in academic, business, and diplomatic contexts.', icon: '🗣️' },
  ],

  contact: {
    address: 'Korean Language Center, Building D, Floor 1, KDU Global Campus, 123 University Avenue, Seoul, Korea',
    phone: '+82 (2) 1234-1000',
    email: 'kap@kduglobal.edu',
    hours: 'Monday – Friday, 8:30 AM – 6:00 PM KST',
  },
};