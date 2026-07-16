// src/data/sitemapData.js

import {
  UNDERGRADUATE_DEPARTMENTS,
} from "./departments";

import { navigation as researchNavigation } from "./research";

import { ENGAGEMENT_PAGES } from "./engagement/pages";
/*
|--------------------------------------------------------------------------
| Dynamic Undergraduate Departments
|--------------------------------------------------------------------------
*/

const undergraduateChildren = UNDERGRADUATE_DEPARTMENTS.map((dept) => ({
  title: dept.title,
  path: `/academics/undergraduate/${dept.slug}`,
}));

/*
|--------------------------------------------------------------------------
| Dynamic Research Pages
|--------------------------------------------------------------------------
*/

const researchChildren = researchNavigation.map((page) => ({
  title: page.label,
  path: `/research/${page.id}`,
}));

/*
|--------------------------------------------------------------------------
| Dynamic Engagement Pages
|--------------------------------------------------------------------------
*/

const engagementChildren = Object.values(ENGAGEMENT_PAGES).map((page) => ({
  title: page.title,
  path: `/engagement/${page.slug}`,
}));

/*
|--------------------------------------------------------------------------
| Main Sitemap Tree
|--------------------------------------------------------------------------
*/

export const sitemapTree = [
  {
    title: "Home",
    path: "/",

    children: [
      {
        title: "About",
        path: "/about",
      },

      {
        title: "Admissions",
        path: "/admissions",
      },

      {
        title: "Academics",
        path: "/academics",

        children: [
          {
            title: "Undergraduate",

            path: "/academics",

            children: undergraduateChildren,
          },

          {
            title: "Graduate",

            path: "/academics/graduate",
          },
        ],
      },

      {
        title: "Research",

        path: "/research",

        children: researchChildren,
      },

      {
        title: "Engagement",

        path: "/engagement",

        children: engagementChildren,
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
    ],
  },
];