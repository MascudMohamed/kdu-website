import { Link } from 'react-router-dom';
import '../../styles/components/NavDropdown.css';

/**
 * Compact university-style dropdown for About / Engagement.
 * Items may use `path` (internal) or `href` (external).
 */
export default function NavDropdown({ title, items, onNavigate, ariaLabel }) {
  const handleClick = () => onNavigate?.();

  return (
    <div className="nav-dropdown" role="region" aria-label={ariaLabel || title}>
      <p className="nav-dropdown__eyebrow">{title}</p>
      <ul className="nav-dropdown__list">
        {items.map((item) => (
          <li key={item.path || item.href || item.label}>
            {item.href ? (
              <a
                href={item.href}
                className="nav-dropdown__link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
              >
                <span className="nav-dropdown__link-title">{item.label}</span>
                {item.description && (
                  <span className="nav-dropdown__link-desc">{item.description}</span>
                )}
              </a>
            ) : (
              <Link to={item.path} className="nav-dropdown__link" onClick={handleClick}>
                <span className="nav-dropdown__link-title">{item.label}</span>
                {item.description && (
                  <span className="nav-dropdown__link-desc">{item.description}</span>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
