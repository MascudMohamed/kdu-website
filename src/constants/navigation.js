import {
  UNDERGRADUATE_COURSES,
  GRADUATE_OVERVIEW,
  EDUCATION_CENTRE_PROGRAMMES,
  EDUCATION_CENTRE_OVERVIEW,
} from '../data/academics/programs';
import { CDC_WEBSITE_URL } from '../data/engagement';

export const ACADEMICS_MEGA_MENU = {
  undergraduate: UNDERGRADUATE_COURSES.map((p) => ({
    label: p.shortTitle,
    path: p.path,
    description: p.degree,
  })),

  graduate: [
    {
      label: 'Graduate Courses',
      path: GRADUATE_OVERVIEW.path,
      description: 'K-Global GSBTC master’s programmes',
    },
  ],

  educationCentre: EDUCATION_CENTRE_PROGRAMMES.map((p) => ({
    label: p.title,
    path: p.path,
    description: p.category,
  })),

  educationCentreOverview: EDUCATION_CENTRE_OVERVIEW,
};

export const ABOUT_DROPDOWN = [
  {
    label: 'About KDU Global',
    path: '/about',
    description: 'Mission, vision, and campus overview',
  },
  {
    label: 'History',
    path: '/about#history',
    description: 'Our institutional journey',
  },
  {
    label: 'President’s Message',
    path: '/about#president',
    description: 'Leadership welcome',
  },
  {
    label: 'University Identity',
    path: '/about#identity',
    description: 'Values, brand, and character',
  },
  {
    label: 'International Faculty',
    path: '/academics/faculty',
    description: 'Faculty of KDU Global',
  },
  {
    label: 'Contact Us',
    path: '/contact',
    description: 'Reach Global Campus',
  },
];

export const ENGAGEMENT_DROPDOWN = [
  {
    label: 'Academic Collaboration',
    path: '/engagement/academic-collaboration',
    description: 'University partnerships and joint programmes',
  },
  {
    label: 'Industry Partnership',
    path: '/engagement/industry-partnerships',
    description: 'Employers, internships, and applied learning',
  },
  {
    label: 'Research Centre',
    path: '/engagement/research-centre',
    description: 'Research identity and collaboration',
  },
  {
    label: 'Career Development Centre',
    path: '/engagement/cdc',
    href: CDC_WEBSITE_URL,
    description: 'Careers, employability, and internships',
  },
  {
    label: 'Community Engagement',
    path: '/engagement/community-engagement',
    description: 'Service learning and local impact',
  },
  {
    label: 'Alumni Relations',
    path: '/engagement/alumni-relations',
    description: 'Lifelong graduate network',
  },
];

export const STUDENT_SERVICES_MEGA_MENU = {
  links: [
    {
      label: 'Student Services Centre',
      path: '/international-office#services',
      description: '25+ services including part-time jobs & counselling',
    },
    {
      label: 'Part-time Job Support',
      path: '/international-office#services',
      description: 'Placement, immigration docs & eligibility',
    },
    {
      label: 'International Students',
      path: '/international-students',
      description: 'Guide for international students at KDU Global',
    },
  ],
};

export const ADMISSIONS_MEGA_MENU = {
  links: [
    {
      label: "Admission Guidelines",
      path: "/admissions#guidelines",
      description: "Eligibility, requirements & admission policies",
    },
    {
      label: "Application Process",
      path: "/admissions#process",
      description: "Step-by-step application procedure",
    },
    {
      label: "Documents Required",
      path: "/admissions#documents",
      description: "Documents needed for your application",
    },
    {
      label: "Scholarships and Fees",
      path: "/admissions#scholarships",
      description: "Tuition, living costs, and scholarship pathways",
    },
  ],
};

export const PRIMARY_NAV_LINKS = [
  { label: 'HOME', i18nKey: 'navbar.home', path: '/', megaMenu: false },
  { label: 'ACADEMICS', i18nKey: 'navbar.academics', path: '/academics', megaMenu: 'academics' },
  { label: 'STUDENT SERVICES', i18nKey: 'navbar.studentServices', path: '/international-office', megaMenu: 'student-services' },
  { label: 'ADMISSIONS', i18nKey: 'navbar.admissions', path: '/admissions', megaMenu: 'admissions' },
  { label: 'ENGAGEMENT', i18nKey: 'navbar.engagement', path: '/engagement', megaMenu: 'engagement' },
  { label: 'ABOUT US', i18nKey: 'navbar.about', path: '/about', megaMenu: 'about' },
  { label: 'NEWS & EVENTS', i18nKey: 'navbar.newsEvents', path: '/news-events', megaMenu: false },
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Student Services', path: '/international-office' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Engagement', path: '/engagement' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Contact', path: '/contact' },
  ...UNDERGRADUATE_COURSES.map((p) => ({ label: p.title, path: p.path })),
  { label: 'Graduate Courses', path: '/academics/graduate' },
  { label: 'K-Global Education Centre', path: '/academics/education-centre' },
];

export const FACULTY_FILTERS = [
  'All',
  'Professors',
  'Associate Professors',
  'Assistant Professors',
  'Lecturers',
];
