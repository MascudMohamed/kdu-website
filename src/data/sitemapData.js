// src/data/sitemapData.js

import { UNDERGRADUATE_DEPARTMENTS } from "./departments";
import { navigation as researchNavigation } from "./research";
import { ENGAGEMENT_NAV } from "./engagement/pages";

/* ---------------------------------------
 * Undergraduate Departments
 * -------------------------------------*/

const departmentChildren = UNDERGRADUATE_DEPARTMENTS.map((dept) => ({
  id: dept.slug,
  title: dept.title,
  path: `/academics/undergraduate/${dept.slug}`,
}));

/* ---------------------------------------
 * Research
 * -------------------------------------*/

const researchChildren = researchNavigation.map((item) => ({
  id: item.id,
  title: item.label,
  path: `/research/${item.id}`,
}));

/* ---------------------------------------
 * Engagement
 * -------------------------------------*/

const engagementChildren = ENGAGEMENT_NAV.map((item) => ({
  id: item.path,
  title: item.label,
  path: item.externalUrl
    ? item.externalUrl
    : `/engagement/${item.path}`,
  external: !!item.externalUrl,
}));

/* ---------------------------------------
 * Main Sitemap
 * -------------------------------------*/

export const sitemapData = [
  {
    id: "home",
    title: "Home",
    icon: "🏠",
    path: "/",
  },

  {
    id: "about",
    title: "About",
    icon: "🏛️",
    path: "/about",
  },

  {
    id: "admissions",
    title: "Admissions",
    icon: "🎓",
    path: "/admissions",
  },

  {
    id: "academics",
    title: "Academics",
    icon: "📘",
    path: "/academics",

    children: [
      {
        id: "graduate",
        title: "Graduate Programs",
        path: "/academics/graduate",
      },

      {
        id: "undergraduate",
        title: "Undergraduate Departments",
        path: "/academics",

        children: departmentChildren,
      },
    ],
  },

  {
    id: "research",
    title: "Research",
    icon: "🔬",
    path: "/research",

    children: researchChildren,
  },

  {
    id: "engagement",
    title: "Engagement",
    icon: "🤝",
    path: "/engagement",

    children: engagementChildren,
  },

  {
    id: "international-office",
    title: "International Office",
    icon: "🌏",
    path: "/international-office",
  },

  {
    id: "international-students",
    title: "International Students",
    icon: "🌍",
    path: "/international-students",
  },
    {
    id: "news-events",
    title: "News & Events",
    icon: "📰",
    path: "/news-events",
  },

  {
    id: "contact",
    title: "Contact",
    icon: "📞",
    path: "/contact",
  },
];

/* ---------------------------------------
 * Quick Links
 * -------------------------------------*/

export const quickLinks = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "Admissions",
    path: "/admissions",
  },

  {
    title: "Graduate Programs",
    path: "/academics/graduate",
  },

  {
    title: "Research",
    path: "/research",
  },

  {
    title: "Engagement",
    path: "/engagement",
  },

  {
    title: "International Office",
    path: "/international-office",
  },

  {
    title: "International Students",
    path: "/international-students",
  },

  {
    title: "News & Events",
    path: "/news-events",
  },

  {
    title: "Contact",
    path: "/contact",
  },
];

/* ---------------------------------------
 * Search Helper
 * -------------------------------------*/

export function flattenSitemap(items = sitemapData) {
  const result = [];

  function walk(nodes) {
    nodes.forEach((node) => {
      result.push({
        id: node.id,
        title: node.title,
        path: node.path,
        external: node.external || false,
      });

      if (node.children) {
        walk(node.children);
      }
    });
  }

  walk(items);

  return result;
}

export default sitemapData;