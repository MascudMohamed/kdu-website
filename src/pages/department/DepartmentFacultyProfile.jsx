import { Navigate, useParams } from 'react-router-dom';
import { internationalFacultyProfilePath } from '../../data/internationalFaculty';

/** Department faculty profile URLs redirect to the central international faculty profile. */
export default function DepartmentFacultyProfile() {
  const { profileSlug } = useParams();

  if (profileSlug) {
    return <Navigate to={internationalFacultyProfilePath(profileSlug)} replace />;
  }

  return <Navigate to="/academics/faculty" replace />;
}
