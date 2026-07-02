import { RESEARCH_NEWS } from "../../data/research";

export default function ResearchNews() {
  return (
    <section
      id="news"
      className="research-section"
    >

      <div className="research-section__header">

        <span className="research-section__eyebrow">
          LATEST UPDATES
        </span>

        <h2>
          Research News
        </h2>

        <p>
          Stay informed about the latest research achievements,
          grants, conferences, international collaborations and
          academic breakthroughs at Kyungdong University.
          This section is designed to be updated through the
          administration dashboard.
        </p>

      </div>

      <div className="research-grid">

        {RESEARCH_NEWS.map((news) => (

          <article
            key={news.title}
            className="research-card"
          >

            <span className="research-date">
              {news.date}
            </span>

            <h3>
              {news.title}
            </h3>

            <p>
              {news.description}
            </p>

            <button
              type="button"
              className="research-outline-btn"
            >
              Read More
            </button>

          </article>

        ))}

      </div>

    </section>
  );
}