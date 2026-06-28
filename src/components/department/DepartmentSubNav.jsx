import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDepartmentNav, deptPath } from '../../data/departments/navigation';
import '../../styles/components/DepartmentSubNav.css';

function isActive(currentPath, itemPath, basePath) {
  const full = itemPath ? `${basePath}/${itemPath}` : basePath;
  if (!itemPath) return currentPath === basePath || currentPath === `${basePath}/`;
  return currentPath === full || currentPath.startsWith(`${full}/`);
}

export default function DepartmentSubNav({ department }) {
  const { slug, shortTitle, title } = department;
  const location = useLocation();
  const basePath = deptPath(slug);
  const nav = getDepartmentNav(slug);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="dept-subnav" aria-label={`${shortTitle || title} navigation`}>
      <div className="container dept-subnav__inner">
        <Link to={basePath} className="dept-subnav__brand">
          {shortTitle || title}
        </Link>
        <ul className="dept-subnav__list">
          {nav.map((item) => {
            if (item.children) {
              const active = item.children.some((c) => isActive(location.pathname, c.path, basePath))
                || isActive(location.pathname, item.path, basePath);
              return (
                <li
                  key={item.label}
                  className="dept-subnav__item dept-subnav__item--dropdown"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={`dept-subnav__link ${active ? 'dept-subnav__link--active' : ''}`}
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label} ▾
                  </button>
                  {openDropdown === item.label && (
                    <ul className="dept-subnav__dropdown">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path ? `${basePath}/${child.path}` : basePath}
                            className={isActive(location.pathname, child.path, basePath) ? 'active' : ''}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            const href = item.path ? `${basePath}/${item.path}` : basePath;
            const active = isActive(location.pathname, item.path, basePath);
            return (
              <li key={item.label} className="dept-subnav__item">
                <Link to={href} className={`dept-subnav__link ${active ? 'dept-subnav__link--active' : ''}`}>
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
