// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DepartmentLayout from "../layouts/DepartmentLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Admissions from "../pages/Admissions";
import Academics from "../pages/Academics";
import GraduatePrograms from "../pages/GraduatePrograms";
import InternationalStudents from "../pages/InternationalStudents";
import NewsEvents from "../pages/NewsEvents";
import Contact from "../pages/Contact";
import FacultyProfileRedirect from "../pages/FacultyProfileRedirect";
import LegacyDepartmentRedirect from "../pages/LegacyDepartmentRedirect";
import DepartmentSpoke from "../pages/department/DepartmentSpoke";
import DepartmentFacultyDirectory from "../pages/department/DepartmentFacultyDirectory";
import DepartmentFacultyProfile from "../pages/department/DepartmentFacultyProfile";
import DepartmentProjectsIndex from "../pages/department/DepartmentProjectsIndex";
import DepartmentProjectDetail from "../pages/department/DepartmentProjectDetail";
import DepartmentHub from "../pages/department/DepartmentHub";
import ErrorPage from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    // Pages wrapped inside the Main Layout (Shows Navbar & Footer)
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "admissions", element: <Admissions /> },
      { path: "academics", element: <Academics /> },
      { path: "academics/graduate", element: <GraduatePrograms /> },
      { path: "academics/:slug", element: <LegacyDepartmentRedirect /> },
      {
        path: "academics/undergraduate/:slug",
        element: <DepartmentLayout />,
        children: [
          { index: true, element: <DepartmentHub /> },
          { path: "faculty", element: <DepartmentFacultyDirectory /> },
          {
            path: "faculty/:profileSlug",
            element: <DepartmentFacultyProfile />,
          },
          { path: "projects", element: <DepartmentProjectsIndex /> },
          {
            path: "projects/:projectSlug",
            element: <DepartmentProjectDetail />,
          },
          { path: "*", element: <DepartmentSpoke /> },
        ],
      },
      {
        path: "faculty/:slug",
        element: <FacultyProfileRedirect />,
      },
      { path: "international-students", element: <InternationalStudents /> },
      { path: "news-events", element: <NewsEvents /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    //  Independent Root Routes (NO Navbar, NO Footer)
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
