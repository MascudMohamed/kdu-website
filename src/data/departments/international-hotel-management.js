const IMG = {
  ihmBanner: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', // Luxury Hotel Exterior
  culinaryLab: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80', // Commercial Kitchen Kitchen
  revenueMatrix: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80', // Analytics Dashboard / Strategy
  resortOps: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80', // Global Resort Lounge
  portraitChair: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', // Professional Female Faculty
  studentAlum: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', // Graduate in hospitality setting
  eventExpo: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', // International MICE Convention
  wineTesting: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80', // Enology Lab
};

export default {
  slug: 'international-hotel-management',
  title: 'Bachelor of International Hotel Management',
  shortTitle: 'Hotel Management',
  description:
    'A world-class global hospitality degree combining luxury service architectures, culinary arts execution, global resort operations, and real estate asset yield maximization frameworks.',
  bannerImage: IMG.ihmBanner,
  cardImage: IMG.ihmBanner,
  cardDescription:
    'Master the global luxury service economy — engineer corporate resort workflows, culinary operational systems, cross-cultural experience designs, and complex property revenue models.',

  breadcrumbs: [
    { label: 'Home', path: '/' },
    { label: 'Academics', path: '/academics' },
    { label: 'Bachelor of International Hotel Management' },
  ],

  chair: {
    title: 'the Department Chair',
    name: 'Prof. Dr. Amélie de Montaigne',
    position: 'Chair, Department of International Hotel Management',
    photo: IMG.portraitChair,
    message: [
      'Welcome to the Department of International Hotel Management at KDU Global Campus. The modern luxury and tourism industry has evolved far beyond traditional front-desk hospitality; it is now an integrated matrix of global experiences, technology logistics, and real estate asset management.',
      'Our program delivers a comprehensive, operational approach. We place our students directly inside mock luxury suites, commercial culinary automation centers, and data-driven revenue management war rooms to prepare them for global corporate leadership roles.',
      'If you have the ambition to guide multinational resort chains, manage high-yield hospitality real estate portfolios, and curate exceptional international guest experiences, our faculty is ready to accelerate your career.',
    ],
    mission:
      'To deliver world-class operational and analytical frameworks in corporate hospitality management while training elite industry executives to engineer sustainable global guest experiences.',
    objectives: [
      'Provide a complete operational overview of luxury guest relations, culinary safety matrices, and sommelier science',
      'Train students in quantitative dynamic revenue algorithms, corporate distribution platforms, and global procurement systems',
      'Maintain strategic corporate integration channels with international premium hotel groups for instant internship placement',
      'Imbue all levels of strategic resort development with localized regulatory mastery and green architectural design standards',
    ],
  },

  overview: {
    philosophy:
      'Hospitality cannot be mastered through standard passive theory. Our candidates manage live banqueting operations, design actual wine lists based on terroir chemical analytics, and optimize yield strategies across property management systems. We bridge physical service excellence with microeconomic asset metrics.',
    outcomes: [
      'Coordinate and oversee complete multi-departmental corporate hotel operations from front-of-house to logistics pipelines',
      'Formulate and deploy dynamic variable room rate systems to maximize property Revenue Per Available Room (RevPAR)',
      'Engineer commercial kitchen menu matrices following strict international safety standards',
      'Design corporate cross-cultural guest experiential workflows across luxury, business, and cruise sectors',
      'Formulate complex commercial real estate feasibility models for resort land development investment rounds',
      'Optimize multi-channel marketing campaigns across global distribution systems (GDS) and meta-search engines',
    ],
    pathways: [
      'Luxury Resort Operations & Guest Experience',
      'Hospitality Real Estate Finance & Asset Yields',
      'Culinary Arts Administration & Restaurant Systems',
      'MICE (Meetings, Incentives, Conferences, Exhibitions) Planning',
      'Global Tourism Logistics & Eco-Sustainability Policy',
      'Corporate Hospitality Executive Track (MBA/PhD Pathway)',
    ],
  },

  admissions: {
    eligibility: [
      'High school diploma with premium evaluation credits in human geography, business, or economics',
      'Minimum GPA of 2.50 on a 4.0 scale (competitive intake capacity limits)',
      'Demonstrated interpersonal aptitude and behavioral ethics evaluated via a video interview screening',
      'Transfer candidates subject to comprehensive operational and culinary practical assessment reviews',
    ],
    language: [
      'IELTS 6.0 or TOEFL iBT 78 (standard threshold for international customer and corporate communication)',
      'Advanced cross-cultural professional vocabulary assessment during orientation phase',
      'A third language elective (Korean, Mandarin, or French) mandatory within the first year tracking',
    ],
    documents: [
      'Completed online admissions application',
      'Official secondary school graduation and course transcript records',
      'Copy of passport biographical verification view',
      'Professional goals essay focusing on global customer trends or luxury operations (500 words)',
      'Two letters of recommendation from academic advisors or professional service managers',
      'Optional hospitality portfolio or hospitality internship project summary dossier',
    ],
    tuition: {
      amount: '$3,950 per semester',
      note: 'Culinary raw materials, commercial uniform provisions, and sommelier testing access fees included. International resort internship training fellowships open to selected high-achieving applicants.',
    },
    timeline: [
      { date: 'October 1', event: 'Global programmatic admission window opens' },
      { date: 'February 15', event: 'Priority placement and hospitality grant evaluation review' },
      { date: 'June 1', event: 'Final systemic entry application cutoff' },
      { date: 'August 25', event: 'Corporate uniform measurement, kitchen safety licensing, and system sync' },
    ],
  },

  curriculum: [
    {
      year: 1,
      semesters: [
        {
          name: 'Semester 1 — Hospitality Foundations',
          majorCourses: [
            { code: 'IHM101', name: 'Introduction to the Global Tourism Economy', credits: 3 },
            { code: 'IHM102', name: 'Front Office Operations & PMS Software', credits: 4 },
            { code: 'IHM103', name: 'Principles of Professional Housekeeping Operations', credits: 3 },
            { code: 'ENG101', name: 'Academic English I', credits: 3 },
          ],
          electives: [
            { code: 'IHM110', name: 'Cross-Cultural Etiquette & Gastronomy Philosophy', credits: 2 },
          ],
        },
        {
          name: 'Semester 2 — Culinary Operations',
          majorCourses: [
            { code: 'IHM104', name: 'Commercial Kitchen Engineering & Food Science', credits: 4 },
            { code: 'IHM105', name: 'Sanitation, Safety, and HACCP Verification', credits: 3 },
            { code: 'IHM106', name: 'Beverage Systems Management & Enology', credits: 3 },
            { code: 'ENG102', name: 'Academic English II', credits: 3 },
          ],
          electives: [
            { code: 'GEN108', name: 'History of Luxury Fashion and Architecture', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 2,
      semesters: [
        {
          name: 'Semester 1 — Commercial Food and Beverage',
          majorCourses: [
            { code: 'IHM201', name: 'Advanced Culinary Arts & Restaurant Practicum', credits: 4 },
            { code: 'IHM202', name: 'Food & Beverage Cost Controls and Sourcing', credits: 3 },
            { code: 'IHM203', name: 'Hospitality Marketing & Brand Engineering', credits: 3 },
            { code: 'MAT108', name: 'Business Statistics for Service Industries', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2 — Service Analytics',
          majorCourses: [
            { code: 'IHM204', name: 'Hospitality Accounting & Profit/Loss Matrices', credits: 4 },
            { code: 'IHM205', name: 'Human Resource Design for Multicultural Staffing', credits: 3 },
            { code: 'IHM206', name: 'Consumer Behavior Analytics in Tourism', credits: 3 },
            { code: 'CSC112', name: 'Data Management & Excel Analytics', credits: 3 },
          ],
          electives: [
            { code: 'IHM250', name: 'Cruise Line Management Foundations', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 3,
      semesters: [
        {
          name: 'Semester 1 — Advanced Management & MICE',
          majorCourses: [
            { code: 'IHM301', name: 'Revenue Management & Dynamic Yield Pricing', credits: 4 },
            { code: 'IHM302', name: 'MICE Exhibition and Corporate Event Production', credits: 3 },
            { code: 'IHM303', name: 'Luxury Concierge Operations & VIP Systems', credits: 3 },
            { code: 'IHM304', name: 'Global Supply Chain and Procurement Logistics', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2 — Corporate Operational Immersion',
          majorCourses: [
            { code: 'IHM305', name: 'Global Industry Residency & Corporate Internship', credits: 12 },
          ],
          electives: [],
        },
      ],
    },
    {
      year: 4,
      semesters: [
        {
          name: 'Semester 1 — Asset Engineering',
          majorCourses: [
            { code: 'IHM401', name: 'Hospitality Real Estate Investment & Feasibility', credits: 4 },
            { code: 'IHM402', name: 'Eco-Tourism Design & Sustainable Facilities Engineering', credits: 3 },
            { code: 'IHM403', name: 'Strategic Corporate Management Capstone I', credits: 3 },
            { code: 'RES402', name: 'Applied Business Research Methodologies', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2 — Leadership Convergence',
          majorCourses: [
            { code: 'IHM404', name: 'Strategic Corporate Management Capstone II', credits: 6 },
            { code: 'IHM405', name: 'Franchise Licensing and Hospitality Contract Law', credits: 3 },
            { code: 'IHM406', name: 'Crisis Management & Public Relations in Tourism', credits: 3 },
          ],
          electives: [
            { code: 'IHM412', name: 'Boutique Hotel Innovation & Entrepreneurship', credits: 3 },
            { code: 'IHM415', name: 'Casino Resort Operations & Gaming Economics', credits: 3 },
          ],
        },
      ],
    },
  ],

  faculty: [
    {
      id: 'ihm-1',
      name: 'Prof. Dr. Amélie de Montaigne',
      position: 'Department Chair',
      rank: 'Professors',
      photo: IMG.portraitChair,
      specialization: 'Luxury Brand Strategy & Revenue Per Available Room (RevPAR) Metrics',
      researchInterests: 'Algorithmic dynamic room pricing optimization, modern luxury service psychological frameworks, global distribution channel shifts',
      biography: 'Prof. de Montaigne earned her doctorate at the École Hôtelière de Lausanne (EHL) and directed worldwide premium asset analytics for elite French hospitality chains before stepping in to lead the IHM program at KDU Global.',
      email: 'a.montaigne@kduglobal.edu',
      phone: '+1 (555) 240-4001',
      office: 'Building H, Prestige Wing 201',
      linkedin: '#',
      scholar: '#',
      researchgate: '#',
    },
    {
      id: 'ihm-2',
      name: 'Chef Executive Dr. Thomas Keller-Sato',
      position: 'Associate Professor',
      rank: 'Associate Professors',
      photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80', // Professional Chef
      specialization: 'Culinary Production Systems & Kitchen Safety Protocols',
      researchInterests: 'Large-scale culinary waste minimizations, molecular gastronomy nutritional matrices, automated HACCP control tracking systems',
      biography: 'Dr. Keller-Sato holds an advanced doctorate in Food Science alongside a master title from Tokyo Gastronomy Academies. He has led Michelin-starred operations throughout Europe and Asia for over 15 years.',
      email: 't.kellersato@kduglobal.edu',
      phone: '+1 (555) 240-4002',
      office: 'Building H, Culinary Annex Lab 102',
      linkedin: '#',
    },
    {
      id: 'ihm-3',
      name: 'Dr. David Sterling',
      position: 'Assistant Professor',
      rank: 'Assistant Professors',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', // Executive Portrait
      specialization: 'Real Estate Portfolio Investment & Franchise Law',
      researchInterests: 'Resort land feasibility valuations, debt-to-equity restructuring under seasonal demand compression, sustainable resort construction ROI paths',
      biography: 'Dr. Sterling joins our faculty from Cornell University\'s School of Hotel Administration. He specialized in cross-border property joint ventures for real estate funds based out of Singapore and New York.',
      email: 'd.sterling@kduglobal.edu',
      phone: '+1 (555) 240-4003',
      office: 'Building H, Prestige Wing 204',
      linkedin: '#',
      scholar: '#',
    },
  ],

  researchAreas: [
    {
      title: 'Automated Room Pricing Yield Systems',
      description: 'Designing real-time statistical algorithms that adjust room configurations and price points based on seasonal aviation booking patterns.',
      faculty: ['Prof. Dr. Amélie de Montaigne'],
    },
    {
      title: 'Sustainable Supply Metrics for Premium Sourcing',
      description: 'Evaluating zero-waste closed-loop systems inside commercial kitchens to remove modern environmental overhead across multi-national resorts.',
      faculty: ['Chef Executive Dr. Thomas Keller-Sato'],
    },
    {
      title: 'Resort Asset Longevity & Investment ROI',
      description: 'Developing quantitative modeling tools to evaluate initial infrastructural investments against multi-decade environmental changes.',
      faculty: ['Dr. David Sterling'],
    },
  ],

  news: [
    {
      id: 'ihm-n1',
      image: IMG.culinaryLab,
      date: 'June 10, 2026',
      category: 'Infrastructure',
      title: 'KDU Opens Commercial Culinary Lab Facility',
      summary: 'The Department of International Hotel Management has officially activated its commercial mock-up development kitchen, hosting individual plating workstations and automated temperature logs.',
      link: '#',
    },
    {
      id: 'ihm-n2',
      image: IMG.wineTesting,
      date: 'May 12, 2026',
      category: 'Research',
      title: 'Innovative Terroir Analytical Matrix Unveiled',
      summary: 'Prof. de Montaigne\'s research group has published a paper tracking chemical balance consistencies across different organic wine producers to assist corporate sommelier teams.',
      link: '#',
    },
  ],

  events: [
    {
      banner: IMG.eventExpo,
      title: 'Global Luxury Service Summit 2026',
      date: 'October 15, 2026',
      venue: 'Main Grand Ballroom, Wing H',
      description: 'An international hospitality convention at KDU where general managers of leading luxury properties present upcoming structural service methodologies.',
      type: 'Conference',
    },
    {
      banner: IMG.resortOps,
      title: 'Dynamic Revenue Strategy Competition',
      date: 'September 5, 2026',
      venue: 'Hospitality Analytics Lab Suite 203',
      description: 'A 24-hour simulation hackathon where students build pricing plans across simulated market crashes to secure luxury real estate margins.',
      type: 'Competition',
    },
  ],

  testimonials: [
    {
      photo: IMG.studentAlum,
      name: 'Sophia Laurent',
      role: 'Director of Corporate Revenue at Ritz-Luxury Resorts Group',
      program: 'BIHM Alumna, Class of 2024',
      quote: 'The data metrics emphasis in this program completely reshaped my perspective. We did not simply focus on customer facing operations; we computed actual franchise investment loops and managed room distribution systems manually. That financial background got me an executive track promotion right away.',
    },
  ],

  careers: [
    { title: 'Global Resort General Manager', description: 'Oversee absolute multi-department operational systems, labor logistics, and brand compliance parameters across international luxury sites.', icon: '🏨' },
    { title: 'Hospitality Revenue Director', description: 'Analyze predictive algorithm streams to structurally configure dynamic pricing strategies and distribute room inventory.', icon: '📊' },
    { title: 'Food & Beverage Operating Officer', description: 'Manage commercial kitchen supply chains, menu engineering financial ratios, and global safety alignments.', icon: '🍽️' },
    { title: 'MICE Production Director', description: 'Design corporate layout workflows, vendor contracts, and international logistics operations for global conventions.', icon: '🌐' },
  ],

  contact: {
    address: 'Department of International Hotel Management, Building H, Floor 2, KDU Global Campus, 123 University Avenue',
    phone: '+1 (555) 240-4000',
    email: 'ihm@kduglobal.edu',
    hours: 'Monday – Friday, 9:00 AM – 5:00 PM',
  },
};