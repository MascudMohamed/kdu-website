import { APPLICATION_FORM_URL } from '../../constants/links';

const graduateData = {
  shortTitle: 'Graduate School',
  title: 'Graduate Courses',
  schoolName: 'K-Global Graduate School of Business and Technology Convergence',

  hero: {
    title: 'Graduate Courses',
    degree: 'K-Global Graduate School of Business and Technology Convergence',
    description:
      'Interdisciplinary master’s programmes in AI & Data Science, International Business, and Hospitality & Tourism — fully taught in English, with scholarships covering up to 100% of tuition.',
    image: '/images/Hero-1.png',
    quickFacts: {
      Language: '100% English',
      Duration: '2 – 2.5 years',
      Credits: '30 credits',
      Scholarships: 'Up to 100% tuition',
    },
    buttons: [
      { label: 'Apply Now', href: APPLICATION_FORM_URL, variant: 'primary' },
      { label: 'View programmes', href: '#programmes', variant: 'white' },
    ],
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Academics', path: '/academics' },
      { label: 'Graduate', path: '/academics/graduate' },
      { label: 'Graduate Courses' },
    ],
  },

  nav: [
    { label: 'Overview', path: '' },
    { label: 'Programmes', hash: '#programmes' },
    { label: 'Curriculum', hash: '#curriculum' },
    { label: 'Faculty', path: 'faculty' },
    { label: 'Scholarships', hash: '#scholarships' },
    { label: 'Admissions', hash: '#admissions' },
  ],

  dean: {
    name: 'Dean of Graduate School',
    position: 'K-Global Graduate School of Business and Technology Convergence',
    image: '/images/president.png',
    title: "Dean's Message",
    message: `The K-Global Graduate School of Business and Technology Convergence is committed to preparing innovative professionals capable of leading industries shaped by artificial intelligence, digital transformation, business innovation, and global hospitality.

Our graduate programmes emphasise interdisciplinary education, applied research, international collaboration, and project-based learning. Students learn from distinguished faculty while engaging with real-world challenges that prepare them for leadership positions in academia, industry, and entrepreneurship.

We warmly welcome talented students from around the world to become part of our diverse academic community.`,
  },

  overview: {
    title: 'K-Global Graduate School of Business and Technology Convergence',
    image: '/images/learning-spaces.png',
    intro:
      'K-Global Graduate School of Business and Technology Convergence (K-Global GSBTC) offers the following graduate degree programmes for international and domestic students:',
    programmesList: [
      'Master of Engineering in Artificial Intelligence and Data Science',
      'Master of Arts in International Business Administration',
      'Master of Arts in International Hospitality and Tourism Management',
    ],
    body: [
      'The curricula offer interdisciplinary convergence-tailored learning and are designed to meet the industry demands for professionals in the fields of business, computing technologies, and global hospitality.',
      'In addition to all the support and care services offered by KDU Global, including part-time job placement, international students at K-Global GSBTC are provided extensive scholarships covering up to 100% of their tuition expenses both upon admission and during their studies.',
      'All classes are fully delivered in English through innovative, practice-oriented, project and problem-based learning methods. K-Global GSBTC also closely collaborates with prominent graduate schools in Australia, USA, Canada, Europe, and Asia in terms of study abroad, exchange, and dual degree opportunities for students.',
    ],
    features: [
      {
        title: '100% English Instruction',
        description: 'All graduate courses are delivered entirely in English.',
      },
      {
        title: 'Practice-oriented learning',
        description: 'Project and problem-based methods aligned with industry needs.',
      },
      {
        title: 'Global partnerships',
        description: 'Study abroad, exchange, and dual-degree opportunities worldwide.',
      },
      {
        title: 'Up to 100% scholarships',
        description: 'Extensive tuition support for international students.',
      },
    ],
  },

  statistics: [
    { value: '100%', label: 'English Instruction', description: 'All graduate courses are delivered entirely in English.' },
    { value: '3', label: 'Graduate Programmes', description: 'Interdisciplinary master’s degree programmes.' },
    { value: '2 Years', label: 'Research Track', description: 'Four semesters for the research-based master’s.' },
    { value: '100%', label: 'Scholarship ceiling', description: 'Scholarships covering up to full tuition are available.' },
    { value: '15', label: 'Weeks per Semester', description: 'Each semester consists of fifteen instructional weeks.' },
    { value: '1', label: 'Class Day Weekly', description: 'Designed for working professionals and international students.' },
    { value: '30', label: 'Credits Required', description: 'Graduation requires successful completion of 30 credits.' },
    { value: 'Global', label: 'Partnership Network', description: 'Exchange and collaboration with universities worldwide.' },
  ],

  programs: [
    {
      id: 'ai-data-science',
      title: 'Artificial Intelligence and Data Science',
      degree: 'Master of Engineering',
      duration: '2 – 2.5 Years',
      language: 'English',
      image: '/images/research.png',
      description:
        'Develop advanced expertise in artificial intelligence, machine learning, computer vision, and data science through research-driven, industry-aligned education.',
      highlights: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Mining'],
    },
    {
      id: 'business',
      title: 'International Business Administration',
      degree: 'Master of Arts',
      duration: '2 – 2.5 Years',
      language: 'English',
      image: '/images/global-network.png',
      description:
        'Prepare for leadership roles in international business through innovation, entrepreneurship, finance, and digital transformation.',
      highlights: ['Business Strategy', 'Entrepreneurship', 'International Finance', 'Business Analytics'],
    },
    {
      id: 'hospitality',
      title: 'International Hospitality and Tourism Management',
      degree: 'Master of Arts',
      duration: '2 – 2.5 Years',
      language: 'English',
      image: '/images/studentlife.png',
      description:
        'Build expertise in hospitality leadership, tourism innovation, destination management, and sustainable service operations.',
      highlights: ['Hospitality Management', 'Tourism Strategy', 'Project Management', 'Leadership'],
    },
  ],

  careers: {
    title: 'Career Opportunities',
    lead:
      'Our graduates are nurtured with a unique blend of skills that unlock a wide range of career opportunities at the forefront of emerging technologies, business and hospitality industries.',
    note:
      'K-Global GSBTC students are guaranteed professional career placement services upon successful graduation.',
    roles: [
      'Machine Learning Engineer',
      'AI Scientist',
      'Business Analyst',
      'Technology Consultant',
      'Product Manager',
      'Data Scientist / Analyst',
      'Chief Technology Officer (CTO)',
      'Digital Transformation Manager',
      'Entrepreneur',
      'Operations Manager',
      'Marketing Technologist',
      'Financial Technology Specialist',
      'Front Office Manager',
      'Convention Services Management',
      'Catering Manager',
      'Innovation Manager',
    ],
  },

  courseOutline: {
    duration: [
      { label: 'Research Track', value: '4 semesters (2 years)' },
      { label: 'Coursework Track', value: '5 semesters (2.5 years)' },
      { label: 'Medium of Instruction', value: 'English (100%)' },
    ],
    graduationRequirements: [
      {
        programme: 'Artificial Intelligence and Data Science',
        core: '9 credits',
        major: '12 credits',
        convergence: '9 credits',
        total: '30 credits',
      },
      {
        programme: 'International Business Administration',
        core: '9 credits',
        major: '12 credits',
        convergence: '9 credits',
        total: '30 credits',
      },
      {
        programme: 'International Hospitality and Tourism Management',
        core: '9 credits',
        major: '12 credits',
        convergence: '9 credits',
        total: '30 credits',
      },
    ],
    classroomLoading: [
      { label: 'Number of Weeks', value: '15 Weeks / Semester' },
      { label: 'Number of Courses', value: '2 Courses / Semester' },
      { label: 'Classroom Hours', value: '6 Hours / Week' },
      { label: 'Class Days', value: '1 Day / Week' },
    ],
  },

  curriculum: {
    core: [
      'Introduction to Business & Technology Convergence',
      'Probability & Statistics',
      'Applied Research Methodology',
      'Programming',
    ],
    majors: {
      ai: {
        title: 'Artificial Intelligence and Data Science',
        courses: [
          'Neural Networks',
          'Machine Learning',
          'Deep Learning',
          'Database Management Systems',
          'Data Science',
          'Data Mining',
          'Seminar in AI Practices',
          'Seminar in Data Science Practices',
        ],
      },
      business: {
        title: 'International Business Administration',
        courses: [
          'International Business Strategy',
          'Digital Business Applications',
          'Innovations & Entrepreneurship',
          'International Economics & Finance',
          'Data Analytics',
          'Seminar in Business and Technology Practices',
        ],
      },
      hospitality: {
        title: 'International Hospitality and Tourism Management',
        courses: [
          'Strategic Management in Tourism and Hospitality',
          'Global Trends in Food Service',
          'Project Management in Tourism and Hospitality',
          'Applied Human Resource Management',
          'Global Dynamics in Tourism and Hospitality',
          'New Ventures Formulation in Business',
          'Seminar in Hospitality Practices',
        ],
      },
    },
    convergence: [
      'Advanced Computer Vision',
      'AI in Healthcare',
      'Natural Language Processing',
      'Reinforcement Learning',
      'Big Data Analytics and Visualization',
      'Internet of Things (IoT)',
      'Project Management',
      'Business Intelligence',
      'SNS & Media Communications',
      'Special Topics on Business & Technology',
      'Innovative Marketing for Sustainable Destinations',
      'Venue Operations and Management',
      'Hospitality Supply Chain Management',
      'Transformational Leadership in Hospitality',
      'Lifestyle and Wellness Management',
      'Professional Seminar in Tourism and Hospitality',
      'Research Project 1',
      'Research Project 2',
    ],
  },

  faculty: [
    {
      id: 'grad-1',
      name: 'Prof. Dr. Elena Rostova',
      position: 'Professor · AI & Data Science',
      rank: 'Professors',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      specialization: 'Machine Learning & Neural Networks',
      researchInterests: 'Deep learning, computer vision, applied AI systems',
      email: 'e.rostova@kduglobal.edu',
      office: 'Graduate School, Faculty Office',
    },
    {
      id: 'grad-2',
      name: 'Prof. Dr. Robert Williams',
      position: 'Professor · International Business',
      rank: 'Professors',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      specialization: 'International Strategy & Digital Business',
      researchInterests: 'Global strategy, entrepreneurship, digital transformation',
      email: 'r.williams@kduglobal.edu',
      office: 'Graduate School, Faculty Office',
    },
    {
      id: 'grad-3',
      name: 'Dr. Amélie de Montaigne',
      position: 'Associate Professor · Hospitality & Tourism',
      rank: 'Associate Professors',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      specialization: 'Hospitality Leadership & Destination Management',
      researchInterests: 'Sustainable tourism, service innovation, venue operations',
      email: 'a.montaigne@kduglobal.edu',
      office: 'Graduate School, Faculty Office',
    },
    {
      id: 'grad-4',
      name: 'Dr. Jun-Ho Choi',
      position: 'Assistant Professor · Data Science',
      rank: 'Assistant Professors',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      specialization: 'Data Mining & Big Data Analytics',
      researchInterests: 'Data visualisation, IoT analytics, research methodology',
      email: 'j.choi@kduglobal.edu',
      office: 'Graduate School, Faculty Office',
    },
  ],

  scholarships: {
    title: 'Graduate Scholarships',
    coverage: 'Up to 100% Tuition Coverage',
    description:
      'International students at K-Global GSBTC are provided extensive scholarships covering up to 100% of their tuition expenses both upon admission and during their studies.',
    benefits: [
      'Admission Scholarships',
      'Continuing Academic Scholarships',
      'International Student Support',
      'Merit-based Awards',
    ],
  },

  applicationProcess: [
    'Submit Online Application',
    'Upload Required Documents',
    'Application Review',
    'Admission Decision',
    'Visa Preparation',
    'Enrollment',
  ],

  contact: {
    office: 'Graduate Admissions Office',
    email: 'info@kduniv.ac.kr',
    phone: '+82-33-639-0000',
    address: '46 Bongpo 4-gil, Goseong-gun, Gangwon-do 24764, Republic of Korea',
  },
};

export default graduateData;
