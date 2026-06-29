import { useParams, Navigate } from 'react-router-dom';
import { getDepartmentBySlug, LEGACY_SLUG_REDIRECTS } from '../data/departments';
import DepartmentPage from './DepartmentPage';

export default function DepartmentRoute() {
  const { slug } = useParams();
  const department = getDepartmentBySlug(slug);

  if (!department && LEGACY_SLUG_REDIRECTS[slug]) {
    return <Navigate to={`/academics/undergraduate/${LEGACY_SLUG_REDIRECTS[slug]}`} replace />;
  }

  if (!department) {
    return <Navigate to="/academics" replace />;
  }

  return <DepartmentPage department={department} />;
}
