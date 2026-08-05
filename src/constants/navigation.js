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
    {
      label: 'Graduate Faculty',
      path: '/academics/graduate/faculty',
      description: 'Faculty of the Graduate School',
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
      label: 'International Office',
      path: '/international-office',
      description: 'Visa, accommodation & student support',
    },
    {
      label: 'International Students',
      path: '/international-students',
      description: 'Guide for international students at KDU Global',
    },
  ],
};

export const PRIMARY_NAV_LINKS = [
  { label: 'HOME', path: '/', megaMenu: false },
  { label: 'ACADEMICS', path: '/academics', megaMenu: 'academics' },
  { label: 'STUDENT SERVICES', path: '/international-office', megaMenu: 'student-services' },
  { label: 'ADMISSIONS', path: '/admissions', megaMenu: false },
  { label: 'ENGAGEMENT', path: '/engagement', megaMenu: 'engagement' },
  { label: 'ABOUT US', path: '/about', megaMenu: 'about' },
  { label: 'NEWS & EVENTS', path: '/news-events', megaMenu: false },
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
