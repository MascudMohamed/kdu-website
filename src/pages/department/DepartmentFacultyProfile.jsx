import { Navigate } from 'react-router-dom';

/** Individual department faculty profiles redirect to the central directory. */
export default function DepartmentFacultyProfile() {
  return <Navigate to="/academics/faculty" replace />;
}
