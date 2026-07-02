// src/routes/router.jsx

import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DepartmentLayout from "../layouts/DepartmentLayout";

import EngagementLayout from "../layouts/EngagementLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Admissions from "../pages/Admissions";
import Academics from "../pages/Academics";
import GraduatePrograms from "../pages/GraduatePrograms";
import InternationalOffice from "../pages/InternationalOffice";
import InternationalStudents from "../pages/InternationalStudents";
import NewsEvents from "../pages/NewsEvents";
import Contact from "../pages/Contact";

import FacultyProfileRedirect from "../pages/FacultyProfileRedirect";
import LegacyDepartmentRedirect from "../pages/LegacyDepartmentRedirect";

import DepartmentHub from "../pages/department/DepartmentHub";
import DepartmentSpoke from "../pages/department/DepartmentSpoke";
import DepartmentFacultyDirectory from "../pages/department/DepartmentFacultyDirectory";
import DepartmentFacultyProfile from "../pages/department/DepartmentFacultyProfile";
import DepartmentProjectsIndex from "../pages/department/DepartmentProjectsIndex";
import DepartmentProjectDetail from "../pages/department/DepartmentProjectDetail";

import EngagementHub from "../pages/engagement/EngagementHub";
import EngagementSpoke from "../pages/engagement/EngagementSpoke";

import ResearchLayout from "../layouts/ResearchLayout";
import ResearchHub from "../pages/research/ResearchHub";
import ResearchSpoke from "../pages/research/ResearchSpoke";

import ErrorPage from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    element: <MainLayout />,

    children: [
      // ===========================
      // HOME
      // ===========================
      {
        index: true,
        element: <Home />,
      },

      // ===========================
      // MAIN PAGES
      // ===========================
      {
        path: "about",
        element: <About />,
      },

      {
        path: "admissions",
        element: <Admissions />,
      },

      {
        path: "academics",
        element: <Academics />,
      },

      {
        path: "academics/graduate",
        element: <GraduatePrograms />,
      },

      // ===========================
      // INTERNATIONAL OFFICE
      // ===========================
      {
        path: "international-office",
        element: <InternationalOffice />,
      },

      {
        path: "international-students",
        element: <InternationalStudents />,
      },

      {
        path: "news-events",
        element: <NewsEvents />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      // ===========================
      // RESEARCH
      // ===========================
      {
    path: "/research",

    element: <ResearchLayout />,

    children: [

        {

            index: true,

            element: <ResearchHub />,

        },

        {

            path: ":page",

            element: <ResearchSpoke />,

        },

    ],

},

      // ===========================
      // ENGAGEMENT
      // ===========================
      {
        path: "engagement",
        element: <EngagementLayout />,
        children: [
          {
            index: true,
            element: <EngagementHub />,
          },
          {
            path: ":pageSlug",
            element: <EngagementSpoke />,
          },
        ],
      },

      // ===========================
      // LEGACY REDIRECT
      // ===========================
      {
        path: "academics/:slug",
        element: <LegacyDepartmentRedirect />,
      },

      // ===========================
      // DEPARTMENT ROUTES
      // ===========================
      {
        path: "academics/undergraduate/:slug",
        element: <DepartmentLayout />,

        children: [
          {
            index: true,
            element: <DepartmentHub />,
          },

          {
            path: "faculty",
            element: <DepartmentFacultyDirectory />,
          },

          {
            path: "faculty/:profileSlug",
            element: <DepartmentFacultyProfile />,
          },

          {
            path: "projects",
            element: <DepartmentProjectsIndex />,
          },

          {
            path: "projects/:projectSlug",
            element: <DepartmentProjectDetail />,
          },

          {
            path: "*",
            element: <DepartmentSpoke />,
          },
        ],
      },

      // ===========================
      // FACULTY PROFILE
      // ===========================
      {
        path: "faculty/:slug",
        element: <FacultyProfileRedirect />,
      },

      // ===========================
      // 404
      // ===========================
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },

  // Catch anything outside MainLayout
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;