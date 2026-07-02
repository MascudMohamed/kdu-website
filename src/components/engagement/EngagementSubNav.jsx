import { Link, useLocation } from 'react-router-dom';
import { ENGAGEMENT_BASE, ENGAGEMENT_NAV } from '../../data/engagement';
import '../../styles/components/EngagementSubNav.css';

function isActive(location, path) {
  if (!path) {
    return location.pathname === ENGAGEMENT_BASE || location.pathname === `${ENGAGEMENT_BASE}/`;
  }
  const full = `${ENGAGEMENT_BASE}/${path}`;
  return location.pathname === full;
}

export default function EngagementSubNav() {
  const location = useLocation();

  return (
    <nav className="engagement-subnav" aria-label="Engagement navigation">
      <div className="container engagement-subnav__inner">
        <Link to={ENGAGEMENT_BASE} className="engagement-subnav__brand">
          Engagement
        </Link>
        <ul className="engagement-subnav__list">
          {ENGAGEMENT_NAV.map((item) => {
            const active = isActive(location, item.path);
            return (
              <li key={item.path} className="engagement-subnav__item">
                <Link
                  to={`${ENGAGEMENT_BASE}/${item.path}`}
                  className={`engagement-subnav__link ${active ? 'engagement-subnav__link--active' : ''}`}
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
