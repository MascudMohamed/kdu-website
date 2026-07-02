import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../data/research";
import "../../styles/components/ResearchSubNav.css";

const RESEARCH_BASE = "/research";

function isActive(location, id) {
  if (!id) {
    return (
      location.pathname === RESEARCH_BASE ||
      location.pathname === `${RESEARCH_BASE}/`
    );
  }

  return location.pathname === `${RESEARCH_BASE}/${id}`;
}

export default function ResearchSubNav() {
  const location = useLocation();

  return (
    <nav
      className="research-subnav"
      aria-label="Research navigation"
    >
      <div className="container research-subnav__inner">

        <Link
          to={RESEARCH_BASE}
          className="research-subnav__brand"
        >
          Research
        </Link>

        <ul className="research-subnav__list">

          {navigation.map((item) => {

            const active = isActive(location, item.id);

            return (

              <li
                key={item.id}
                className="research-subnav__item"
              >

                <Link
                  to={
                    item.id
                      ? `${RESEARCH_BASE}/${item.id}`
                      : RESEARCH_BASE
                  }
                  className={`research-subnav__link ${
                    active
                      ? "research-subnav__link--active"
                      : ""
                  }`}
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