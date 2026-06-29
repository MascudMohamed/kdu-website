import { Link, useLocation } from 'react-router-dom';
import { getDepartmentNav, deptPath } from '../../data/departments/navigation';
import '../../styles/components/DepartmentSubNav.css';

function isNavItemActive(location, item, basePath) {
  if (item.hash) {
    const onHub = location.pathname === basePath || location.pathname === `${basePath}/`;
    return onHub && location.hash === item.hash;
  }
  if (!item.path) {
    const onHub = location.pathname === basePath || location.pathname === `${basePath}/`;
    return onHub && !location.hash;
  }
  const full = `${basePath}/${item.path}`;
  return location.pathname === full || location.pathname.startsWith(`${full}/`);
}

function navItemTo(item, basePath) {
  if (item.hash) {
    return { pathname: basePath, hash: item.hash };
  }
  return item.path ? `${basePath}/${item.path}` : basePath;
}

export default function DepartmentSubNav({ department }) {
  const { slug, shortTitle, title } = department;
  const location = useLocation();
  const basePath = deptPath(slug);
  const nav = getDepartmentNav(slug);

  return (
    <nav className="dept-subnav" aria-label={`${shortTitle || title} navigation`}>
      <div className="container dept-subnav__inner">
        <Link to={basePath} className="dept-subnav__brand">
          {shortTitle || title}
        </Link>
        <ul className="dept-subnav__list">
          {nav.map((item) => {
            const active = isNavItemActive(location, item, basePath);
            return (
              <li key={item.label} className="dept-subnav__item">
                <Link
                  to={navItemTo(item, basePath)}
                  className={`dept-subnav__link ${active ? 'dept-subnav__link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
