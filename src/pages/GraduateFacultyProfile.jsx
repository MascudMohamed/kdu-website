import { Navigate, useParams } from 'react-router-dom';
import { internationalFacultyProfilePath } from '../data/internationalFaculty';

/** Graduate faculty profiles are centralized under International Faculty. */
export default function GraduateFacultyProfile() {
  const { profileSlug } = useParams();

  if (profileSlug) {
    return <Navigate to={internationalFacultyProfilePath(profileSlug)} replace />;
  }

  return <Navigate to="/academics/faculty" replace />;
}
