import { Link } from "react-router-dom";
import { STUDENT_SERVICES_MEGA_MENU } from "../../constants/navigation";
import "../../styles/components/AcademicsMegaMenu.css";

export default function StudentServicesMegaMenu({ onNavigate }) {
  const handleClick = () => onNavigate?.();

  return (
    <div
      className="mega-menu mega-menu--student-services"
      role="region"
      aria-label="Student services menu"
    >
      <div className="mega-menu__top mega-menu__top--single">
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Student Services</h3>
          <ul className="mega-menu__list">
            {STUDENT_SERVICES_MEGA_MENU.links.map((item) => (
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
            to="/international-office"
            className="mega-menu__office-card"
            onClick={handleClick}
            style={{ marginTop: "1rem" }}
          >
            <span className="mega-menu__office-icon" aria-hidden="true">
              🌍
            </span>
            <h4>International Office</h4>
            <p>
              Supporting international students through admissions, visa guidance,
              public events, accommodation and campus life.
            </p>
            <span className="mega-menu__office-btn">
              Visit International Office →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
