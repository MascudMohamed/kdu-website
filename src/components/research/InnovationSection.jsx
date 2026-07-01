import { INNOVATIONS } from "../../data/research";

export default function InnovationSection() {
  return (
    <section
      id="innovation"
      className="research-section"
    >

      <div className="research-section__header">

        <span className="research-section__eyebrow">
          COLLABORATION
        </span>

        <h2>
          Innovation & Partnerships
        </h2>

        <p>
          Kyungdong University collaborates with industry,
          government organizations and international partners
          to transform research into practical solutions.
          The information displayed here is placeholder
          content for future CMS integration.
        </p>

      </div>

      <div className="research-grid">

        {INNOVATIONS.map((item) => (

          <div
            key={item.title}
            className="research-card"
          >

            <div className="research-icon">
              🤝
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>

            <button
              type="button"
              className="research-outline-btn"
            >
              Learn More
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}