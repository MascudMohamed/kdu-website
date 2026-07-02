import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Admissions from '../pages/Admissions';
import Academics from '../pages/Academics';
import InternationalStudents from '../pages/InternationalStudents';
import NewsEvents from '../pages/NewsEvents';
import Contact from '../pages/Contact';
import DepartmentRoute from '../pages/DepartmentRoute';
import NotFound from '../pages/NotFound/NotFound'; // 1. IMPORT YOUR NEW PAGE HERE

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="academics" element={<Academics />} />
        <Route path="academics/:slug" element={<DepartmentRoute />} />
        <Route path="international-students" element={<InternationalStudents />} />
        <Route path="news-events" element={<NewsEvents />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/research" element={<ResearchLayout />}>
        <Route index element={<ResearchHub />} />
        <Route path=":page" element={<ResearchSpoke />} />
        </Route>
        
        {/* 2. SWAP OUT <Home /> FOR YOUR <NotFound /> COMPONENT */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}