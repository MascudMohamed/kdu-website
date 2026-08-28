import { Navigate } from 'react-router-dom';

/** Graduate faculty directory is centralized under International Faculty. */
export default function GraduateFacultyDirectory() {
  return <Navigate to="/academics/faculty" replace />;
}
