import { Link } from 'react-router-dom';
import SectionBadge from '../common/SectionBadge';
import Breadcrumb from '../common/Breadcrumb';
import Button from '../common/Button';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/EngagementPageShell.css';

export default function EngagementPageShell({
  pageTitle,
  eyebrow,
  lead,
  breadcrumbs,
  children,
  related = [],
}) {
  const crumbs = breadcrumbs || [
    { label: 'Home', path: '/' },
    { label: 'Engagement', path: '/engagement' },
    { label: pageTitle },
  ];

  return (
    <div className="engagement-page-shell">
      <header className="engagement-page-shell__header">
        <div className="container">
          <Breadcrumb items={crumbs} />
          {eyebrow && <span className="engagement-page-shell__eyebrow">{eyebrow}</span>}
          <h1>{pageTitle}</h1>
          {lead && <p className="engagement-page-shell__lead">{lead}</p>}
        </div>
      </header>
      <div className="engagement-page-shell__body">
        <div className="container">
          {children}
          {related.length > 0 && (
            <aside className="engagement-page-shell__related" aria-label="Related engagement areas">
              <h2>Continue exploring</h2>
              <ul>
                {related.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="dept-link-arrow">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

export function EngagementStats({ stats }) {
  if (!stats?.length) return null;
  return (
    <div className="engagement-stats" role="list">
      {stats.map((stat) => (
        <div key={stat.label} className="engagement-stats__item" role="listitem">
          <span className="engagement-stats__value">{stat.value}</span>
          <span className="engagement-stats__label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export function EngagementInitiatives({ initiatives }) {
  if (!initiatives?.length) return null;
  return (
    <div className="engagement-initiatives">
      {initiatives.map((item, i) => (
        <article key={item.title} className="engagement-initiatives__card">
          <SectionBadge title={item.title} index={i} className="engagement-initiatives__icon" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function EngagementSpotlight({ spotlight }) {
  if (!spotlight) return null;
  return (
    <aside className="engagement-spotlight">
      <div className="engagement-spotlight__content">
        <h2>{spotlight.title}</h2>
        <p>{spotlight.content}</p>
        {spotlight.externalLink && (
          <a href={spotlight.externalLink} className="dept-link-arrow" target="_blank" rel="noopener noreferrer">
            {spotlight.linkLabel}
          </a>
        )}
        {spotlight.link && !spotlight.externalLink && (
          <Link to={spotlight.link} className="dept-link-arrow">{spotlight.linkLabel}</Link>
        )}
      </div>
      {spotlight.image && (
        <div className="engagement-spotlight__visual">
          <img src={spotlight.image} alt="" loading="lazy" />
        </div>
      )}
    </aside>
  );
}

export function EngagementCta({ cta }) {
  if (!cta) return null;
  return (
    <div className="engagement-cta">
      <h2>{cta.title}</h2>
      <p>{cta.description}</p>
      {cta.buttonHref ? (
        <Button href={cta.buttonHref} variant="primary" size="lg">{cta.buttonLabel}</Button>
      ) : (
        <Button to={cta.buttonPath} variant="primary" size="lg">{cta.buttonLabel}</Button>
      )}
    </div>
  );
}
