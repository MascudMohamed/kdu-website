import { Navigate, useParams } from 'react-router-dom';
import { getFacultyBySlug } from '../data/departments';
import { deptPath } from '../data/departments/navigation';
import FacultyProfile from './FacultyProfile';

export default function FacultyProfileRedirect() {
  const { slug } = useParams();
  const faculty = getFacultyBySlug(slug);

  if (faculty?.departmentSlug) {
    return <Navigate to={deptPath(faculty.departmentSlug, `faculty/${slug}`)} replace />;
  }

  return <FacultyProfile />;
}
