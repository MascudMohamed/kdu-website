import { useEffect, useState } from "react";
import { RESEARCH_NAV } from "../../data/research";

export default function ResearchSubNav() {

  const [active, setActive] = useState("areas");

  useEffect(() => {

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }

        });

      },

      {
        threshold: 0.35,
      }

    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();

  }, []);

  return (

    <nav className="research-subnav">

      <div className="research-subnav__container">

        {

          RESEARCH_NAV.map(item => (

            <a
              key={item.id}
              href={`#${item.id}`}
              className={`research-subnav__link ${
                active === item.id ? "active" : ""
              }`}
            >

              {item.label}

            </a>

          ))

        }

      </div>

    </nav>

  );

}