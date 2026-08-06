import { Navigate } from 'react-router-dom';

/** Department faculty directories redirect to the central International Faculty page. */
export default function DepartmentFacultyDirectory() {
  return <Navigate to="/academics/faculty" replace />;
}
