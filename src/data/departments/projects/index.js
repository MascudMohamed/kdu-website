export const SMART_COMPUTING_PROJECTS = [
  {
    slug: 'smart-campus-navigator',
    title: 'Smart Campus Navigator',
    summary: 'An AI-powered mobile app helping international students navigate campus facilities, events, and services in real time.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80',
    pathway: 'Artificial Intelligence',
    year: 4,
    technologies: ['Flutter', 'Python', 'TensorFlow Lite', 'Firebase'],
    supervisor: 'Dr. Sarah Mitchell',
    supervisorSlug: 'sarah-mitchell',
    team: ['Alex Chen', 'Maria Lopez', 'Kenji Tanaka'],
    outcomes: [
      'Deployed multilingual NLP intent classification',
      'Integrated real-time campus map API',
      'Achieved 92% user satisfaction in pilot testing',
    ],
    github: 'https://github.com/kdu-global/smart-campus-navigator',
    demo: '#',
    description: 'Built as a year-four capstone, the Smart Campus Navigator uses on-device machine learning to understand student queries and surface relevant campus resources — from library hours to visa office appointments.',
  },
  {
    slug: 'securecloud-monitor',
    title: 'SecureCloud Monitor',
    summary: 'A cloud-native security dashboard detecting anomalies across distributed microservices in real time.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&q=80',
    pathway: 'Cybersecurity',
    year: 4,
    technologies: ['AWS', 'Kubernetes', 'Python', 'Grafana', 'Elasticsearch'],
    supervisor: 'Dr. Ahmed Hassan',
    supervisorSlug: 'ahmed-hassan',
    team: ['Priya Sharma', 'David Kim'],
    outcomes: [
      'Implemented SIEM-style log aggregation pipeline',
      'Reduced false-positive alerts by 40% using ML filtering',
      'Presented at KDU Cybersecurity Symposium',
    ],
    github: 'https://github.com/kdu-global/securecloud-monitor',
    demo: '#',
    description: 'This capstone project addresses the challenge of monitoring security events across containerized workloads, combining cloud infrastructure expertise with applied threat detection.',
  },
  {
    slug: 'predictive-enrollment-analytics',
    title: 'Predictive Enrollment Analytics',
    summary: 'A data science platform forecasting programme enrollment trends to support academic planning decisions.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    pathway: 'Data Science',
    year: 3,
    technologies: ['Python', 'Pandas', 'scikit-learn', 'React', 'PostgreSQL'],
    supervisor: 'Prof. Dr. Maria Santos',
    supervisorSlug: 'maria-santos',
    team: ['Fatima Al-Hassan', 'Yuki Nakamura', 'Thomas Berg'],
    outcomes: [
      'Built ETL pipeline for historical enrollment data',
      'Developed ensemble forecasting model with 88% accuracy',
      'Delivered executive dashboard for department planning',
    ],
    github: 'https://github.com/kdu-global/enrollment-analytics',
    demo: '#',
    description: 'An industry-sponsored team project demonstrating how data science can inform strategic decisions in higher education administration.',
  },
];

export function getProject(deptSlug, projectSlug) {
  if (deptSlug !== 'smart-computing') return null;
  return SMART_COMPUTING_PROJECTS.find((p) => p.slug === projectSlug) || null;
}

export function getProjects(deptSlug) {
  if (deptSlug !== 'smart-computing') return [];
  return SMART_COMPUTING_PROJECTS;
}
