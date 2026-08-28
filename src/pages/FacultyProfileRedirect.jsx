import { Navigate, useParams } from 'react-router-dom';
import {
  getInternationalFacultyBySlug,
  internationalFacultyProfilePath,
} from '../data/internationalFaculty';

/** Legacy `/faculty/:slug` URLs redirect to the international faculty profile. */
export default function FacultyProfileRedirect() {
  const { slug } = useParams();
  const faculty = getInternationalFacultyBySlug(slug);

  if (faculty) {
    return <Navigate to={internationalFacultyProfilePath(faculty.profileSlug)} replace />;
  }

  return <Navigate to="/academics/faculty" replace />;
}
