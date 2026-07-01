import { PUBLICATIONS } from "../../data/research";

export default function PublicationsSection() {
  return (
    <section
      id="publications"
      className="research-section"
    >

      <div className="research-section__header">

        <span className="research-section__eyebrow">
          PUBLICATIONS
        </span>

        <h2>
          Research Publications
        </h2>

        <p>
          Browse recent scholarly publications produced by
          Kyungdong University researchers. This section is
          connected to placeholder data and is intended to be
          managed from the backend in the future.
        </p>

      </div>

      <div className="research-grid">

        {PUBLICATIONS.map((publication) => (

          <article
            key={publication.title}
            className="research-card"
          >

            <span className="research-badge">
              {publication.year}
            </span>

            <h3>
              {publication.title}
            </h3>

            <p>
              <strong>Journal</strong>
              <br />
              {publication.journal}
            </p>

            <button
              type="button"
              className="research-outline-btn"
            >
              View Publication
            </button>

          </article>

        ))}

      </div>

    </section>
  );
}