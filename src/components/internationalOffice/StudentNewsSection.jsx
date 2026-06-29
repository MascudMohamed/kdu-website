import { STUDENT_NEWS } from "../../data/internationalOffice";

export default function StudentNewsSection() {
  return (
    <section id="news" className="office-section">

      <h2>International Student News</h2>

      <div className="office-grid">

        {STUDENT_NEWS.map((news) => (

          <article
            key={news.title}
            className="office-card"
          >

            <span className="news-date">
              {news.date}
            </span>

            <h3>{news.title}</h3>

            <p>{news.description}</p>

          </article>

        ))}

      </div>

    </section>
  );
}