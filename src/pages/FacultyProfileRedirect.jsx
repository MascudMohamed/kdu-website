import { Navigate } from 'react-router-dom';

/** Legacy faculty profile URLs redirect to the central International Faculty directory. */
export default function FacultyProfileRedirect() {
  return <Navigate to="/academics/faculty" replace />;
}
