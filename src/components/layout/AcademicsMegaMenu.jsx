import { Link } from "react-router-dom";
import { ACADEMICS_MEGA_MENU } from "../../constants/navigation";
import "../../styles/components/AcademicsMegaMenu.css";

export default function AcademicsMegaMenu({ onNavigate }) {
  const handleClick = () => onNavigate?.();

  return (
    <div
      className="mega-menu"
      role="region"
      aria-label="Academics programs menu"
    >
      <div className="mega-menu__top">
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Undergraduate Programs</h3>
          <ul className="mega-menu__list">
            {ACADEMICS_MEGA_MENU.undergraduate.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="mega-menu__link"
                  onClick={handleClick}
                >
                  <span className="mega-menu__link-title">{item.label}</span>
                  <span className="mega-menu__link-desc">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/academics#undergraduate"
            className="mega-menu__view-all"
            onClick={handleClick}
          >
            View all undergraduate programs →
          </Link>
        </div>

        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Graduate Programs</h3>
          <ul className="mega-menu__list">
            {ACADEMICS_MEGA_MENU.graduate.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="mega-menu__link"
                  onClick={handleClick}
                >
                  <span className="mega-menu__link-title">{item.label}</span>
                  <span className="mega-menu__link-desc">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mega-menu__promo">
            <p>
              Advanced degrees for research, leadership and professional excellence.
            </p>
            <Link
              to="/academics/graduate"
              className="mega-menu__promo-link"
              onClick={handleClick}
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Research</h3>
          <ul className="mega-menu__list">
            {ACADEMICS_MEGA_MENU.research.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="mega-menu__link"
                  onClick={handleClick}
                >
                  <span className="mega-menu__link-title">{item.label}</span>
                  <span className="mega-menu__link-desc">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/research"
            className="mega-menu__view-all"
            onClick={handleClick}
          >
            Explore research →
          </Link>
        </div>
      </div>

      <div className="mega-menu__bottom">
        <div className="mega-menu__featured-content">
          <span className="mega-menu__featured-label">Academic Excellence</span>
          <h4>World-Class Programs for Global Leaders</h4>
          <p>
            Discover undergraduate, graduate, and research pathways designed for
            international success.
          </p>
          <Link
            to="/academics"
            className="mega-menu__featured-btn"
            onClick={handleClick}
          >
            Explore Academics
          </Link>
        </div>
      </div>
    </div>
  );
}
