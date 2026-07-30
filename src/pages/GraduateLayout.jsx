import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import graduateData from '../data/academics/graduateData';
import '../styles/components/DepartmentSubNav.css';
import '../styles/pages/GraduateSchool.css';

const BASE = '/academics/graduate';

function isActive(location, item) {
  if (item.hash) {
    const onHub = location.pathname === BASE || location.pathname === `${BASE}/`;
    return onHub && location.hash === item.hash;
  }
  if (!item.path) {
    const onHub = location.pathname === BASE || location.pathname === `${BASE}/`;
    return onHub && !location.hash;
  }
  const full = `${BASE}/${item.path}`;
  return location.pathname === full || location.pathname.startsWith(`${full}/`);
}

function itemTo(item) {
  if (item.hash) return { pathname: BASE, hash: item.hash.slice(1) };
  return item.path ? `${BASE}/${item.path}` : BASE;
}

export default function GraduateLayout() {
  const location = useLocation();
  const nav = graduateData.nav;

  return (
    <div className="graduate-layout">
      <nav className="dept-subnav" aria-label="Graduate School navigation">
        <div className="container dept-subnav__inner">
          <Link to={BASE} className="dept-subnav__brand">
            {graduateData.shortTitle}
          </Link>
          <ul className="dept-subnav__list">
            {nav.map((item) => (
              <li key={item.label} className="dept-subnav__item">
                <Link
                  to={itemTo(item)}
                  className={`dept-subnav__link ${isActive(location, item) ? 'dept-subnav__link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
