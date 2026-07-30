import {
  UNDERGRADUATE_PROGRAMS,
  GRADUATE_OVERVIEW,
} from "../data/academics/programs";

export const ACADEMICS_MEGA_MENU = {
  undergraduate: UNDERGRADUATE_PROGRAMS.map((p) => ({
    label: p.title,
    path: p.path,
    description: p.shortTitle,
  })),

  graduate: [
    {
      label: "Graduate Courses",
      path: GRADUATE_OVERVIEW.path,
      description: "K-Global GSBTC master's programmes",
    },
    {
      label: "Graduate Faculty",
      path: "/academics/graduate/faculty",
      description: "Faculty of the Graduate School",
    },
  ],

  research: [
    {
      label: "Research Hub",
      path: "/research",
      description: "Innovation, centres & collaboration",
    },
    {
      label: "Research Areas",
      path: "/research/areas",
      description: "Key research themes",
    },
    {
      label: "Publications",
      path: "/research/publications",
      description: "Latest research publications",
    },
    {
      label: "Innovation & Partnerships",
      path: "/research/innovation",
      description: "Industry and global partners",
    },
  ],
};

export const STUDENT_SERVICES_MEGA_MENU = {
  links: [
    {
      label: "International Office",
      path: "/international-office",
      description: "Visa, exchange, accommodation & student support",
    },
    {
      label: "International Students",
      path: "/international-students",
      description: "Guide for international students at KDU Global",
    },
  ],
};

export const PRIMARY_NAV_LINKS = [
  {
    label: "HOME",
    path: "/",
    megaMenu: false,
  },
  {
    label: "EDUCATION",
    path: "/academics",
    megaMenu: "academics",
  },
  {
    label: "STUDENT SERVICES",
    path: "/international-office",
    megaMenu: "student-services",
  },
  {
    label: "ADMISSIONS",
    path: "/admissions",
    megaMenu: false,
  },
  {
    label: "ENGAGEMENT",
    path: "/engagement",
    megaMenu: false,
  },
  {
    label: "ABOUT US",
    path: "/about",
    megaMenu: false,
  },
  {
    label: "NEWS & EVENTS",
    path: "/news-events",
    megaMenu: false,
  },
];

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Student Services", path: "/international-office" },
  { label: "Admissions", path: "/admissions" },
  { label: "Engagement", path: "/engagement" },
  { label: "News & Events", path: "/news-events" },
  { label: "Research", path: "/research" },
  { label: "International Office", path: "/international-office" },
  { label: "International Students", path: "/international-students" },
  { label: "Contact", path: "/contact" },
  ...UNDERGRADUATE_PROGRAMS.map((p) => ({
    label: p.title,
    path: p.path,
  })),
  {
    label: "Graduate Programs",
    path: "/academics/graduate",
  },
];

export const FACULTY_FILTERS = [
  "All",
  "Professors",
  "Associate Professors",
  "Assistant Professors",
  "Lecturers",
];
