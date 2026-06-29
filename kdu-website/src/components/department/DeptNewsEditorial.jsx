import { Link } from 'react-router-dom';
import DeptSectionHeader from './DeptSectionHeader';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptNewsEditorial.css';

export default function DeptNewsEditorial({ news, events }) {
  if (!news?.length && !events?.length) return null;

  const [featured, ...supporting] = news || [];

  return (
    <section className="dept-section dept-news" id="news">
      <div className="container">
        <DeptSectionHeader
          eyebrow="Latest"
          title="News & events"
          lead="Updates from the department, our students, and the wider university community."
        />

        {featured && (
          <article className="dept-news__featured">
            <Link to={featured.link || '/news-events'} className="dept-news__featured-image">
              <img src={featured.image} alt="" loading="lazy" />
            </Link>
            <div className="dept-news__featured-body">
              <span className="dept-news__meta">
                {featured.category} · {featured.date}
              </span>
              <h3>
                <Link to={featured.link || '/news-events'}>{featured.title}</Link>
              </h3>
              <p>{featured.summary}</p>
              <Link to={featured.link || '/news-events'} className="dept-link-arrow">
                Read article
              </Link>
            </div>
          </article>
        )}

        {supporting.length > 0 && (
          <ul className="dept-news__supporting">
            {supporting.map((item) => (
              <li key={item.id || item.title}>
                <span className="dept-news__meta">{item.date}</span>
                <h4>
                  <Link to={item.link || '/news-events'}>{item.title}</Link>
                </h4>
                <p>{item.summary}</p>
              </li>
            ))}
          </ul>
        )}

        {events?.length > 0 && (
          <div className="dept-news__events">
            <h3 className="dept-news__events-title">Upcoming events</h3>
            <ul className="dept-news__events-list">
              {events.slice(0, 3).map((event) => (
                <li key={event.title}>
                  <time dateTime={event.date}>{event.date}</time>
                  <div>
                    <strong>{event.title}</strong>
                    <span>{event.venue} · {event.type}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
