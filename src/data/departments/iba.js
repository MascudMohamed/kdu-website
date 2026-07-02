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
  duration: '4 Years',
  language: 'English (100%)',
  description:
    'Nurturing globally competent business professionals and entrepreneurs. A four-year, English-medium program preparing leaders for enterprises from small businesses to multinational organizations.',
  bannerImage: IMG.business,
  cardImage: IMG.business,
  cardDescription:
    'Integrated specializations in management, accounting and finance, marketing, information systems, and globalization—shaping the frontiers of global entrepreneurship and international business operations.',

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
      'Our undergraduate degree in International Business Administration is designed to nurture entrepreneurs and professionals ready to lead small to multinational enterprises, drive communities for change, and become global business citizens.',
      'Whether you have a passion for marketing and human resource management, or you want to build a professional career in accounting and finance integrated with information systems, the IBA program offers harmonized specializations embedding practical knowledge and skills.',
      'We uphold commitment and dedication to your ultimate success—preparing graduates to turn business challenges into opportunities and embrace cultural and institutional diversity.',
    ],
    mission:
      'To nurture globally competent business professionals and entrepreneurs who lead enterprises, drive community change, and practice responsible global business citizenship.',
    objectives: [
      'Nurture globally competent business professionals and entrepreneurs',
      'Prepare students to lead enterprises from small businesses to multinational organizations',
      'Develop professionals who can drive community change and practice global business citizenship',
      'Deliver harmonized specializations that combine theory with practical business skills',
    ],
  },

  overview: {
    philosophy:
      'The IBA program combines practical knowledge and skills across management, finance, marketing, analytics, and globalization. Students develop the competencies needed to lead in domestic and international business contexts and to address entrepreneurship professionally across diverse cultures and institutions.',
    outcomes: [
      'Lead and manage business operations in domestic and international contexts',
      'Apply entrepreneurial thinking to business challenges',
      'Work across culturally and institutionally diverse environments',
      'Perform effectively in finance, marketing, management, analytics, and technology-related business roles',
      'Turn business challenges into opportunities immediately after graduation',
      'Contribute to strategic business units across accounting, marketing, logistics, HR, and public services',
    ],
    pathways: [
      'Management and Entrepreneurship',
      'Accounting and Finance',
      'Marketing',
      'Information Systems and Data Analytics',
      'Globalization and Creative Convergence',
      'Liberal Arts Education',
    ],
  },

  curriculumHighlights: [
    {
      year: 1,
      title: 'Management and Entrepreneurship',
      summary: 'Vocational and Short Courses, Principles of Business, Human Resource Management, Organizational Behavior, Creativity and Innovation Management, Entrepreneurship, Business Negotiation and Conflict Management, Operations Management, Corporate Social Responsibility, and Project Management.',
    },
    {
      year: 2,
      title: 'Accounting and Finance',
      summary: 'Business Mathematics, Principles of Accounting, Principles of Finance, Microeconomics, Macroeconomics, Financial Management, Financial Accounting, and Managerial Accounting.',
    },
    {
      year: 3,
      title: 'Marketing',
      summary: 'Principles of Marketing, Consumer Behavior, Brand Management, International Marketing, Services Marketing, and Digital Marketing.',
    },
    {
      year: 4,
      title: 'Information Systems and Data Analytics',
      summary: 'Computer Applications, Statistics, Business Information Management, Coding for Business, Decision Support Systems, and Applied Quantitative Methods.',
    },
    {
      year: 5,
      title: 'Globalization and Creative Convergence',
      summary: 'Global Leadership, Business Communication, International Trade and Investment, International Business Law, Global Strategic Management, Global Supply Chain Management, and Creative Convergence Project.',
    },
    {
      year: 6,
      title: 'Liberal Arts Education',
      summary: 'Personality Development and Social Skills, Multicultural Studies, Understanding Korean Culture, English Correspondence, Communication in Korean, Oral Communication, Research Methodology, Workplace Culture and Ethics, Career Training and Workshops, and Seminars on Startup Business Practices.',
    },
  ],

  whyChoose: [
    { title: 'Fully English-medium instruction', description: 'The entire program is delivered in English for global business readiness.' },
    { title: 'Integrated specializations', description: 'Management, finance, marketing, analytics, and globalization within one harmonized degree.' },
    { title: 'Entrepreneurship and international operations', description: 'Practical focus on global entrepreneurship and international business operations.' },
    { title: 'Commitment to student success', description: 'Direct pathways to employment across a wide range of business functions after graduation.' },
  ],

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
      title: 'Management and Entrepreneurship',
      description: 'Human resource management, organizational behavior, innovation, entrepreneurship, operations, corporate social responsibility, and project management.',
      faculty: ['Prof. Dr. Robert Williams', 'Ms. Jennifer Liu'],
    },
    {
      title: 'Accounting and Finance',
      description: 'Financial and managerial accounting, microeconomics, macroeconomics, financial management, and business mathematics.',
      faculty: ['Dr. Carlos Mendez'],
    },
    {
      title: 'Marketing',
      description: 'Consumer behavior, brand management, international marketing, services marketing, and digital marketing.',
      faculty: ['Dr. Lisa Tanaka'],
    },
    {
      title: 'Information Systems and Data Analytics',
      description: 'Business information management, coding for business, decision support systems, and applied quantitative methods.',
      faculty: ['Dr. Lisa Tanaka'],
    },
    {
      title: 'Globalization and Creative Convergence',
      description: 'International trade and investment, global strategic management, supply chain management, and creative convergence projects.',
      faculty: ['Prof. Dr. Robert Williams', 'Dr. Carlos Mendez'],
    },
    {
      title: 'Liberal Arts Education',
      description: 'Multicultural studies, Korean culture and communication, research methodology, workplace ethics, and career development.',
      faculty: ['Dr. Lisa Tanaka'],
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
    { title: 'Accounting and Finance', description: 'Perform financial analysis, reporting, and management in strategic business units.', icon: '💰' },
    { title: 'Data Analytics', description: 'Apply quantitative methods and information systems to support business decisions.', icon: '📊' },
    { title: 'Marketing', description: 'Develop and execute marketing strategies across domestic and international markets.', icon: '📣' },
    { title: 'Distribution and Logistics', description: 'Manage supply chains, distribution networks, and global logistics operations.', icon: '🚚' },
    { title: 'Retail Management and Sales', description: 'Lead retail operations and sales teams in competitive consumer markets.', icon: '🛒' },
    { title: 'Investment and Risk Management', description: 'Evaluate investments and manage financial risk for organizations.', icon: '📈' },
    { title: 'Personnel Management and Public Relations', description: 'Lead human resources, employee development, and organizational communications.', icon: '👥' },
    { title: 'Business Communications and Law', description: 'Navigate business law, negotiations, and professional communications.', icon: '⚖️' },
    { title: 'Information Technologies', description: 'Apply technology solutions within business and enterprise environments.', icon: '💻' },
    { title: 'Public Services', description: 'Contribute to public-sector and community-oriented business and administration roles.', icon: '🏛️' },
  ],

  contact: {
    address: 'Department of International Business, Building C, Floor 2, KDU Global Campus, 123 University Avenue',
    phone: '+1 (555) 200-1000',
    email: 'iba@kduglobal.edu',
    hours: 'Monday – Friday, 9:00 AM – 5:00 PM',
  },
};
