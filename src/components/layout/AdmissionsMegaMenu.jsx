import { Link } from "react-router-dom";
import { ADMISSIONS_MEGA_MENU } from "../../constants/navigation";
import "../../styles/components/AdmissionsMegaMenu.css";

export default function AdmissionsMegaMenu({ onNavigate }) {
  const handleClick = () => onNavigate?.();

  return (
    <div
      className="mega-menu mega-menu--admissions"
      role="region"
      aria-label="Admissions menu"
    >
      <div className="mega-menu__top mega-menu__top--single">
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Admissions</h3>

          <ul className="mega-menu__list">
            {ADMISSIONS_MEGA_MENU.links.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="mega-menu__link"
                  onClick={handleClick}
                >
                  <span className="mega-menu__link-title">
                    {item.label}
                  </span>

                  <span className="mega-menu__link-desc">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/admissions"
            className="mega-menu__office-card"
            onClick={handleClick}
            style={{ marginTop: "1rem" }}
          >
            <span className="mega-menu__office-icon" aria-hidden="true">A</span>

            <h4>Admissions</h4>

            <p>
              Learn about admission guidelines, application procedures,
              required documents and downloadable forms.
            </p>

            <span className="mega-menu__office-btn">
              Visit Admissions →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}