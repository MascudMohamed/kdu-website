import { Link } from 'react-router-dom';
import { KDU_CAMPUSES, KDU_KOREAN_PORTAL_URL } from '../../constants/campuses';
import '../../styles/components/CampusLinks.css';

/**
 * Links to Global, Medical, and Metropol campuses — same structure as
 * the official KDU undergraduate campuses page.
 */
export default function CampusLinks({
  title = 'Our Campuses',
  subtitle = 'Kyungdong University',
  lead = 'Explore all Kyungdong University campuses. This website is for the Global Campus (English medium). Medical and Metropol campuses are Korean medium.',
  showPortalLink = true,
}) {
  return (
    <div className="campus-links">
      {(subtitle || title || lead) && (
        <header className="campus-links__header">
          {subtitle && <p className="campus-links__eyebrow">{subtitle}</p>}
          {title && <h2 className="campus-links__title">{title}</h2>}
          {lead && <p className="campus-links__lead">{lead}</p>}
        </header>
      )}

      <ul className="campus-links__grid">
        {KDU_CAMPUSES.map((campus) => {
          const content = (
            <>
              <span className="campus-links__medium">{campus.medium}</span>
              <h3 className="campus-links__name">{campus.name}</h3>
              <p className="campus-links__location">{campus.location}</p>
              <p className="campus-links__desc">{campus.description}</p>
              {campus.current ? (
                <span className="campus-links__cta">You are here</span>
              ) : (
                <span className="campus-links__cta">Visit campus site →</span>
              )}
            </>
          );

          return (
            <li key={campus.id}>
              {campus.external ? (
                <a
                  className={`campus-links__card${campus.current ? ' is-current' : ''}`}
                  href={campus.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <Link
                  className={`campus-links__card${campus.current ? ' is-current' : ''}`}
                  to={campus.href}
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      {showPortalLink && (
        <p className="campus-links__portal">
          Korean university portal:{' '}
          <a href={KDU_KOREAN_PORTAL_URL} target="_blank" rel="noopener noreferrer">
            kduniv.ac.kr
          </a>
        </p>
      )}
    </div>
  );
}
