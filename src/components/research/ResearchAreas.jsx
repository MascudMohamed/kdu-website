import { RESEARCH_AREAS } from "../../data/research";

export default function ResearchAreas() {
  return (
    <section
      id="areas"
      className="research-section"
    >
      <div className="research-section__header">

        <span className="research-section__eyebrow">
          RESEARCH
        </span>

        <h2>
          Research Areas
        </h2>

        <p>
          Kyungdong University promotes interdisciplinary research
          across emerging technologies, healthcare, business,
          engineering and environmental sustainability.
          This section serves as a placeholder and can be
          fully managed from the backend.
        </p>

      </div>

      <div className="research-grid">

        {RESEARCH_AREAS.map((area) => (

          <div
            key={area.title}
            className="research-card"
          >

            <div className="research-icon">
              {area.icon}
            </div>

            <h3>
              {area.title}
            </h3>

            <p>
              {area.description}
            </p>

            <button
              className="research-outline-btn"
              type="button"
            >
              Learn More
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}