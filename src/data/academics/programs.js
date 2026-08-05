/**
 * Academic programme catalogues for KDU Global Campus.
 * Undergraduate Courses = bachelor degrees.
 * K-Global Education Centre = language pathways & specialised training.
 */

export const UNDERGRADUATE_COURSES = [
  {
    slug: 'smart-computing',
    title: 'Bachelor of Smart Computing',
    shortTitle: 'Smart Computing',
    degree: 'Bachelor of Science',
    duration: '4 Years',
    language: 'English',
    description:
      'Master AI, cybersecurity, and cloud technologies through an industry-aligned curriculum designed for the global digital economy.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80',
    path: '/academics/undergraduate/smart-computing',
  },
  {
    slug: 'artificial-intelligence',
    title: 'Bachelor of Artificial Intelligence',
    shortTitle: 'Artificial Intelligence',
    degree: 'Bachelor of Science',
    duration: '4 Years',
    language: 'English',
    description:
      'Dive deep into neural networks, deep learning, computer vision, and intelligent systems for the modern economy.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80',
    path: '/academics/undergraduate/artificial-intelligence',
  },
  {
    slug: 'international-business-administration',
    title: 'International Business Administration',
    shortTitle: 'IBA',
    degree: 'Bachelor of Business Administration',
    duration: '4 Years',
    language: 'English',
    description:
      'Develop global business leadership, strategic thinking, and cross-cultural competencies for international commerce.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80',
    path: '/academics/undergraduate/international-business-administration',
  },
  {
    slug: 'international-hotel-management',
    title: 'International Hotel Management',
    shortTitle: 'IHM',
    degree: 'Bachelor of Science',
    duration: '4 Years',
    language: 'English',
    description:
      'Prepare for global hospitality leadership through applied learning in hotel operations, tourism, and guest experience.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80',
    path: '/academics/undergraduate/international-hotel-management',
  },
];

/** @deprecated Prefer UNDERGRADUATE_COURSES — kept for existing imports */
export const UNDERGRADUATE_PROGRAMS = UNDERGRADUATE_COURSES;

export const GRADUATE_OVERVIEW = {
  path: '/academics/graduate',
  title: 'Graduate Courses',
  description:
    'K-Global Graduate School of Business and Technology Convergence — master’s programmes in AI, business, and hospitality.',
};

export const EDUCATION_CENTRE_PROGRAMMES = [
  {
    slug: 'english-for-academic-purposes',
    title: 'English for Academic Purposes',
    shortTitle: 'EAP',
    category: 'Language Pathway',
    duration: '1–2 Years',
    language: 'English',
    description:
      'Build advanced academic English proficiency and communication skills for success in degree-level study.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80',
    path: '/academics/undergraduate/english-for-academic-purposes',
  },
  {
    slug: 'korean-for-academic-purposes',
    title: 'Korean for Academic Purposes',
    shortTitle: 'KAP',
    category: 'Language Pathway',
    duration: '1–2 Years',
    language: 'Korean',
    description:
      'Build academic Korean proficiency for success in degree-level study and life in Korea.',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=900&q=80',
    path: '/academics/undergraduate/korean-for-academic-purposes',
  },
  {
    slug: 'ai-training',
    title: 'AI Training',
    shortTitle: 'AI Training',
    category: 'Specialised Training',
    duration: 'Short / modular',
    language: 'English',
    description:
      'Practical artificial intelligence training for students and professionals — from fundamentals to applied projects.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    path: '/academics/education-centre/ai-training',
  },
  {
    slug: 'k-beauty',
    title: 'K-Beauty',
    shortTitle: 'K-Beauty',
    category: 'Specialised Training',
    duration: 'Short / modular',
    language: 'English',
    description:
      'Explore Korean beauty innovation, product culture, and industry practice through applied training at KDU Global.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80',
    path: '/academics/education-centre/k-beauty',
  },
  {
    slug: 'golf-training',
    title: 'Golf Training',
    shortTitle: 'Golf Training',
    category: 'Specialised Training',
    duration: 'Short / modular',
    language: 'English',
    description:
      'Professional golf training combining technique, fitness, and sport management in Korea’s golf education environment.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=900&q=80',
    path: '/academics/education-centre/golf-training',
  },
];

export const EDUCATION_CENTRE_OVERVIEW = {
  path: '/academics/education-centre',
  title: 'K-Global Education Centre',
  description:
    'Language pathways and specialised training programmes that prepare learners for academic success and professional growth.',
};

export function getEducationCentreProgramme(slug) {
  return EDUCATION_CENTRE_PROGRAMMES.find((p) => p.slug === slug) || null;
}
