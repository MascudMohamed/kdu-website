import { RESEARCH_CENTERS } from "../../data/research";

export default function ResearchCenters() {
  return (
    <section
      id="centers"
      className="research-section"
    >

      <div className="research-section__header">

        <span className="research-section__eyebrow">
          INSTITUTES
        </span>

        <h2>
          Research Institutes & Centres
        </h2>

        <p>
          Dedicated research institutes provide an environment
          for collaboration between faculty, students,
          government agencies and industrial partners.
          Content displayed here can later be managed
          through the CMS.
        </p>

      </div>

      <div className="research-grid">

        {RESEARCH_CENTERS.map((center) => (

          <div
            key={center.name}
            className="research-card"
          >

            <span className="research-badge">
              Research Institute
            </span>

            <h3>
              {center.name}
            </h3>

            <p>
              {center.description}
            </p>

            <button
              className="research-outline-btn"
              type="button"
            >
              View Institute
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}