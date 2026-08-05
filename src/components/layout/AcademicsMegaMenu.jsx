import { Link } from 'react-router-dom';
import { ACADEMICS_MEGA_MENU } from '../../constants/navigation';
import '../../styles/components/AcademicsMegaMenu.css';

export default function AcademicsMegaMenu({ onNavigate }) {
  const handleClick = () => onNavigate?.();

  return (
    <div className="mega-menu mega-menu--academics" role="region" aria-label="Academics menu">
      <div className="mega-menu__top mega-menu__top--three">
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Undergraduate Courses</h3>
          <ul className="mega-menu__list">
            {ACADEMICS_MEGA_MENU.undergraduate.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="mega-menu__link" onClick={handleClick}>
                  <span className="mega-menu__link-title">{item.label}</span>
                  <span className="mega-menu__link-desc">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/academics#undergraduate" className="mega-menu__view-all" onClick={handleClick}>
            All undergraduate courses →
          </Link>
        </div>

        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Graduate</h3>
          <ul className="mega-menu__list">
            {ACADEMICS_MEGA_MENU.graduate.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="mega-menu__link" onClick={handleClick}>
                  <span className="mega-menu__link-title">{item.label}</span>
                  <span className="mega-menu__link-desc">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mega-menu__promo">
            <p>Master’s study at K-Global Graduate School of Business and Technology Convergence.</p>
            <Link to="/academics/graduate" className="mega-menu__promo-link" onClick={handleClick}>
              Explore graduate →
            </Link>
          </div>
        </div>

        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">K-Global Education Centre</h3>
          <ul className="mega-menu__list">
            {ACADEMICS_MEGA_MENU.educationCentre.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="mega-menu__link" onClick={handleClick}>
                  <span className="mega-menu__link-title">{item.label}</span>
                  <span className="mega-menu__link-desc">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={ACADEMICS_MEGA_MENU.educationCentreOverview.path}
            className="mega-menu__view-all"
            onClick={handleClick}
          >
            Education Centre overview →
          </Link>
        </div>
      </div>

      <div className="mega-menu__bottom mega-menu__bottom--compact">
        <div className="mega-menu__featured-content mega-menu__featured-content--row">
          <div>
            <span className="mega-menu__featured-label">Academics at KDU Global</span>
            <h4>Degree pathways · Graduate study · Language &amp; specialised training</h4>
          </div>
          <Link to="/academics" className="mega-menu__featured-btn" onClick={handleClick}>
            Academics hub
          </Link>
        </div>
      </div>
    </div>
  );
}
