import { Link } from "react-router-dom";
import { KDU_CAMPUSES } from "../../constants/campuses";
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
          <span className="mega-menu__featured-label">Other campuses</span>
          <h4>Kyungdong University Campuses</h4>
          <p>
            Global Campus (English) is this site. Medical and Metropol campuses
            use the Korean university portal.
          </p>
          <ul className="mega-menu__campus-list">
            {KDU_CAMPUSES.map((campus) => (
              <li key={campus.id}>
                {campus.external ? (
                  <a
                    href={campus.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                  >
                    {campus.shortName} · {campus.medium}
                  </a>
                ) : (
                  <Link to="/academics#campuses" onClick={handleClick}>
                    {campus.shortName} · {campus.medium}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/academics#campuses"
            className="mega-menu__featured-btn"
            onClick={handleClick}
          >
            View all campuses
          </Link>
        </div>
      </div>
    </div>
  );
}
