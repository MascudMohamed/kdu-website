import { Link, Outlet, useParams, Navigate } from 'react-router-dom';
import { getDepartmentBySlug, LEGACY_SLUG_REDIRECTS } from '../data/departments';
import DepartmentSubNav from '../components/department/DepartmentSubNav';
import '../styles/layouts/DepartmentLayout.css';

export default function DepartmentLayout() {
  const { slug } = useParams();
  const department = getDepartmentBySlug(slug);

  if (!department && LEGACY_SLUG_REDIRECTS[slug]) {
    return <Navigate to={`/academics/undergraduate/${LEGACY_SLUG_REDIRECTS[slug]}`} replace />;
  }

  if (!department) {
    return <Navigate to="/academics" replace />;
  }

  return (
    <div className="department-layout">
      <DepartmentSubNav department={department} />
      <Outlet context={{ department }} />
    </div>
  );
}
