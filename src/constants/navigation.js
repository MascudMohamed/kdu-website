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

  internationalOffice: [
    {
      label: "International Office",
      path: "/international-office",
      description: "Services, Visa, Exchange & Student Support",
    },
  ],

  graduate: [
    {
      label: "Graduate Programs",
      path: GRADUATE_OVERVIEW.path,
      description: "Master's & Doctoral — Announced Soon",
    },
  ],
};

export const PRIMARY_NAV_LINKS = [
  { label: "HOME", path: "/", megaMenu: false },
  { label: "EDUCATION", path: "/academics", megaMenu: "academics" },
  { label: "RESEARCH", path: "/research", megaMenu: "research" },
  { label: "Admissions", path: "/admissions", megaMenu: false },
  { label: "ENGAGEMENT", path: "/engagement", megaMenu: false },
  { label: "ABOUT US", path: "/about", megaMenu: false },
  { label: "News & Events", path: "/news-events", megaMenu: false },
];

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Engagement", path: "/engagement" },

  // NEW
  { label: "International Office", path: "/international-office" },

  { label: "International Students", path: "/international-students" },
  { label: "News & Events", path: "/news-events" },
  { label: "Contact", path: "/contact" },

  ...UNDERGRADUATE_PROGRAMS.map((p) => ({
    label: p.title,
    path: p.path,
  })),

  { label: "Graduate Programs", path: "/academics/graduate" },
];

export const FACULTY_FILTERS = [
  "All",
  "Professors",
  "Associate Professors",
  "Assistant Professors",
  "Lecturers",
];