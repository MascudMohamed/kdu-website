import { Navigate, useParams } from 'react-router-dom';
import { getDepartmentBySlug, LEGACY_SLUG_REDIRECTS } from '../data/departments';

export default function LegacyDepartmentRedirect() {
  const { slug } = useParams();
  const resolved = LEGACY_SLUG_REDIRECTS[slug] || slug;
  if (getDepartmentBySlug(resolved)) {
    return <Navigate to={`/academics/undergraduate/${resolved}`} replace />;
  }
  return <Navigate to="/academics" replace />;
}
