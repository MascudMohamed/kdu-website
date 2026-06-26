import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Admissions from '../pages/Admissions';
import Academics from '../pages/Academics';
import GraduatePrograms from '../pages/GraduatePrograms';
import InternationalStudents from '../pages/InternationalStudents';
import NewsEvents from '../pages/NewsEvents';
import Contact from '../pages/Contact';
import DepartmentRoute from '../pages/DepartmentRoute';
import FacultyProfile from '../pages/FacultyProfile';
import ErrorPage from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'admissions', element: <Admissions /> },
      { path: 'academics', element: <Academics /> },
      { path: 'academics/graduate', element: <GraduatePrograms /> },
      { path: 'academics/undergraduate/:slug', element: <DepartmentRoute /> },
      { path: 'academics/:slug', element: <DepartmentRoute /> },
      { path: 'faculty/:slug', element: <FacultyProfile /> },
      { path: 'international-students', element: <InternationalStudents /> },
      { path: 'news-events', element: <NewsEvents /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

export default router;
