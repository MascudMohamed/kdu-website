const IMG = {
  business: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80',
  meeting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
  portrait: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  student: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  event: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  finance: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
};

export default {
  slug: 'international-business-administration',
  title: 'International Business Administration',
  shortTitle: 'IBA',
  description:
    'Develop global business acumen and leadership skills through a comprehensive program designed for the interconnected world economy.',
  bannerImage: IMG.business,
  cardImage: IMG.business,
  cardDescription:
    'Build a global career in business with a curriculum spanning international trade, finance, marketing, and strategic management.',

  breadcrumbs: [
    { label: 'Home', path: '/' },
    { label: 'Academics', path: '/academics' },
    { label: 'International Business Administration' },
  ],

  chair: {
    title: 'the Program Director',
    name: 'Prof. Dr. Robert Williams',
    position: 'Director, International Business Administration',
    photo: IMG.portrait,
    message: [
      'Welcome to the International Business Administration program at KDU Global. In today\'s interconnected world, business leaders must navigate diverse cultures, complex markets, and rapid change with confidence and strategic vision.',
      'Our program combines rigorous academic theory with practical case studies drawn from real international business scenarios. Students engage with multinational corporations, participate in global business simulations, and develop the cross-cultural competencies essential for success.',
      'Whether your ambition is to lead a multinational enterprise, launch your own venture, or drive innovation in international trade, KDU Global provides the foundation and network to achieve your goals.',
    ],
    mission:
      'To develop ethical, innovative, and culturally intelligent business leaders who drive sustainable growth in the global marketplace.',
    objectives: [
      'Provide comprehensive education in international business theory and practice',
      'Develop cross-cultural communication and negotiation skills',
      'Foster entrepreneurial thinking and innovation',
      'Build connections with global business networks and industry partners',
    ],
  },

  overview: {
    philosophy:
      'We believe business education must be experiential and globally oriented. Our students learn through case studies from multinational corporations, international exchange programs, and consulting projects with real businesses.',
    outcomes: [
      'Analyze global market trends and develop international business strategies',
      'Apply financial management principles in multicultural business contexts',
      'Lead diverse teams and manage cross-cultural business relationships',
      'Evaluate international trade policies and their business implications',
      'Develop and implement marketing strategies for global markets',
      'Demonstrate ethical leadership in international business operations',
    ],
    pathways: [
      'International Trade & Commerce',
      'Global Marketing & Brand Management',
      'Financial Management & Investment',
      'Entrepreneurship & Innovation',
      'Supply Chain & Operations Management',
      'Graduate Business Studies (MBA)',
    ],
  },

  admissions: {
    eligibility: [
      'High school diploma or equivalent',
      'Minimum GPA of 2.5 on a 4.0 scale',
      'Strong communication skills and interest in global business',
      'Transfer students welcome with credit evaluation',
    ],
    language: [
      'IELTS 6.0 or TOEFL iBT 80 (for non-native English speakers)',
      'Business English proficiency assessed during orientation',
      'Additional language skills are an advantage but not required',
    ],
    documents: [
      'Completed application form',
      'Official academic transcripts',
      'Copy of passport or national ID',
      'Personal statement (500 words)',
      'Two letters of recommendation',
      'Resume/CV (optional)',
    ],
    tuition: {
      amount: '$4,000 per semester',
      note: 'International business scholarships and need-based financial aid available. Early applicants receive priority consideration.',
    },
    timeline: [
      { date: 'October 1', event: 'Application opens for Fall semester' },
      { date: 'February 28', event: 'Early decision deadline' },
      { date: 'May 30', event: 'Final application deadline' },
      { date: 'August 20', event: 'International Business Orientation Week' },
    ],
  },

  curriculum: [
    {
      year: 1,
      semesters: [
        {
          name: 'Semester 1',
          majorCourses: [
            { code: 'IBA101', name: 'Introduction to Business', credits: 3 },
            { code: 'IBA102', name: 'Microeconomics', credits: 3 },
            { code: 'ACC101', name: 'Financial Accounting', credits: 3 },
            { code: 'ENG101', name: 'Academic English I', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2',
          majorCourses: [
            { code: 'IBA201', name: 'Macroeconomics', credits: 3 },
            { code: 'IBA202', name: 'Business Statistics', credits: 3 },
            { code: 'IBA203', name: 'Principles of Marketing', credits: 3 },
            { code: 'ENG102', name: 'Academic English II', credits: 3 },
          ],
          electives: [
            { code: 'GEN201', name: 'Cross-Cultural Communication', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 2,
      semesters: [
        {
          name: 'Semester 1',
          majorCourses: [
            { code: 'IBA301', name: 'International Business Environment', credits: 3 },
            { code: 'IBA302', name: 'Managerial Accounting', credits: 3 },
            { code: 'IBA303', name: 'Organizational Behavior', credits: 3 },
            { code: 'IBA304', name: 'Business Law', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2',
          majorCourses: [
            { code: 'IBA401', name: 'International Trade & Finance', credits: 3 },
            { code: 'IBA402', name: 'Operations Management', credits: 3 },
            { code: 'IBA403', name: 'Digital Marketing', credits: 3 },
            { code: 'IBA404', name: 'Business Ethics', credits: 3 },
          ],
          electives: [
            { code: 'IBA410', name: 'Introduction to Entrepreneurship', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 3,
      semesters: [
        {
          name: 'Semester 1',
          majorCourses: [
            { code: 'IBA501', name: 'Global Strategic Management', credits: 3 },
            { code: 'IBA502', name: 'International Marketing', credits: 3 },
            { code: 'IBA503', name: 'Corporate Finance', credits: 3 },
            { code: 'IBA504', name: 'Supply Chain Management', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2',
          majorCourses: [
            { code: 'IBA601', name: 'International Business Negotiation', credits: 3 },
            { code: 'IBA602', name: 'Emerging Markets Analysis', credits: 3 },
            { code: 'IBA603', name: 'Business Consulting Project', credits: 6 },
          ],
          electives: [
            { code: 'IBA610', name: 'E-Commerce & Digital Business', credits: 3 },
          ],
        },
      ],
    },
    {
      year: 4,
      semesters: [
        {
          name: 'Semester 1',
          majorCourses: [
            { code: 'IBA701', name: 'International Business Strategy', credits: 3 },
            { code: 'IBA702', name: 'Leadership & Change Management', credits: 3 },
            { code: 'IBA703', name: 'Capstone Project I', credits: 3 },
            { code: 'IBA704', name: 'Research Methods in Business', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2',
          majorCourses: [
            { code: 'IBA801', name: 'Capstone Project II', credits: 6 },
            { code: 'IBA802', name: 'Global Business Internship', credits: 6 },
          ],
          electives: [
            { code: 'IBA810', name: 'Sustainable Business Practices', credits: 3 },
            { code: 'IBA811', name: 'Innovation & Technology Management', credits: 3 },
          ],
        },
      ],
    },
  ],

  faculty: [
    {
      id: 'iba-1',
      name: 'Prof. Dr. Robert Williams',
      position: 'Program Director',
      rank: 'Professors',
      photo: IMG.portrait,
      specialization: 'International Strategy & Global Management',
      researchInterests: 'Multinational corporate strategy, emerging markets, cross-border M&A',
      biography: 'Prof. Williams has advised Fortune 500 companies on international expansion and published extensively on global business strategy. He holds an MBA from Wharton and a PhD from LSE.',
      email: 'r.williams@kduglobal.edu',
      phone: '+1 (555) 200-1001',
      office: 'Building C, Room 201',
      linkedin: '#',
      website: '#',
    },
    {
      id: 'iba-2',
      name: 'Dr. Lisa Tanaka',
      position: 'Associate Professor',
      rank: 'Associate Professors',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      specialization: 'International Marketing & Brand Management',
      researchInterests: 'Global branding, consumer behavior, digital marketing analytics',
      biography: 'Dr. Tanaka previously led marketing teams for global consumer brands in Asia-Pacific. Her research bridges academic theory with practical marketing innovation.',
      email: 'l.tanaka@kduglobal.edu',
      phone: '+1 (555) 200-1002',
      office: 'Building C, Room 205',
      linkedin: '#',
    },
    {
      id: 'iba-3',
      name: 'Dr. Carlos Mendez',
      position: 'Assistant Professor',
      rank: 'Assistant Professors',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      specialization: 'International Finance & Trade',
      researchInterests: 'Foreign exchange markets, trade policy, financial risk management',
      biography: 'Dr. Mendez worked as a financial analyst for international investment banks before joining academia. He brings real-world financial expertise to the classroom.',
      email: 'c.mendez@kduglobal.edu',
      phone: '+1 (555) 200-1003',
      office: 'Building C, Room 208',
      linkedin: '#',
      scholar: '#',
    },
    {
      id: 'iba-4',
      name: 'Ms. Jennifer Liu',
      position: 'Senior Lecturer',
      rank: 'Lecturers',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      specialization: 'Entrepreneurship & Innovation',
      researchInterests: 'Startup ecosystems, venture capital, social entrepreneurship',
      biography: 'Ms. Liu founded two successful startups and now mentors student entrepreneurs. She leads the university\'s business incubator program.',
      email: 'j.liu@kduglobal.edu',
      phone: '+1 (555) 200-1004',
      office: 'Building C, Room 110',
      linkedin: '#',
      website: '#',
    },
  ],

  researchAreas: [
    {
      title: 'Global Strategy',
      description: 'Examining how multinational corporations formulate and implement strategies across diverse international markets.',
      faculty: ['Prof. Dr. Robert Williams'],
    },
    {
      title: 'International Trade',
      description: 'Analyzing trade policies, agreements, and their impact on global business operations and economic development.',
      faculty: ['Dr. Carlos Mendez'],
    },
    {
      title: 'Cross-Cultural Management',
      description: 'Understanding how cultural differences influence business practices, negotiations, and organizational behavior.',
      faculty: ['Prof. Dr. Robert Williams', 'Dr. Lisa Tanaka'],
    },
    {
      title: 'Digital Business Transformation',
      description: 'Exploring how digital technologies are reshaping international business models and competitive landscapes.',
      faculty: ['Dr. Lisa Tanaka', 'Ms. Jennifer Liu'],
    },
  ],

  news: [
    {
      id: 'iba-n1',
      image: IMG.finance,
      date: 'June 5, 2026',
      category: 'Partnership',
      title: 'IBA Program Partners with Global Consulting Firm',
      summary: 'Students will participate in live consulting projects with one of the world\'s leading management consulting firms.',
      link: '#',
    },
    {
      id: 'iba-n2',
      image: IMG.meeting,
      date: 'May 20, 2026',
      category: 'Event',
      title: 'International Business Case Competition Winners Announced',
      summary: 'IBA students took top honors at the regional business case competition, impressing judges with innovative market entry strategies.',
      link: '#',
    },
    {
      id: 'iba-n3',
      image: IMG.business,
      date: 'April 30, 2026',
      category: 'Achievement',
      title: 'Exchange Program Expands to Five New Countries',
      summary: 'IBA students can now study abroad at partner universities in Europe, Asia, and the Americas.',
      link: '#',
    },
  ],

  events: [
    {
      banner: IMG.event,
      title: 'Global Business Leadership Forum',
      date: 'October 10, 2026',
      venue: 'Conference Center, Building C',
      description: 'Annual forum bringing together business leaders, alumni, and students to discuss trends shaping international commerce.',
      type: 'Conference',
    },
    {
      banner: IMG.meeting,
      title: 'Entrepreneurship Workshop Series',
      date: 'July 25, 2026',
      venue: 'Business Incubator, Building C',
      description: 'Multi-session workshop covering business plan development, pitching to investors, and startup legal fundamentals.',
      type: 'Workshop',
    },
    {
      banner: IMG.finance,
      title: 'International Trade Simulation',
      date: 'August 12, 2026',
      venue: 'Simulation Lab, Room C301',
      description: 'Competitive simulation where student teams negotiate trade agreements and manage multinational operations.',
      type: 'Competition',
    },
  ],

  testimonials: [
    {
      photo: IMG.student,
      name: 'Yuki Nakamura',
      role: 'Marketing Manager, Global Brands Inc.',
      program: 'IBA, Class of 2024',
      quote: 'The international exposure and case-study approach at KDU Global prepared me to work seamlessly across cultures. My internship through the program led directly to my current role.',
    },
    {
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      name: 'Thomas Berg',
      role: 'Founder, Nordic Trade Solutions',
      program: 'IBA, Class of 2023',
      quote: 'The entrepreneurship courses and business incubator gave me the confidence and skills to launch my own international trading company. KDU Global was the catalyst for my career.',
    },
  ],

  careers: [
    { title: 'Business Analyst', description: 'Analyze business processes and recommend data-driven improvements for organizational growth.', icon: '📈' },
    { title: 'Marketing Manager', description: 'Develop and execute marketing strategies for products and services in global markets.', icon: '📣' },
    { title: 'International Trade Specialist', description: 'Manage import/export operations and navigate international trade regulations.', icon: '🌍' },
    { title: 'Financial Analyst', description: 'Evaluate financial data and market trends to guide investment and business decisions.', icon: '💰' },
    { title: 'Management Consultant', description: 'Advise organizations on strategy, operations, and organizational improvement.', icon: '🎯' },
  ],

  contact: {
    address: 'Department of International Business, Building C, Floor 2, KDU Global Campus, 123 University Avenue',
    phone: '+1 (555) 200-1000',
    email: 'iba@kduglobal.edu',
    hours: 'Monday – Friday, 9:00 AM – 5:00 PM',
  },
};
