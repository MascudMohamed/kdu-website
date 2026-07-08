import { Link } from "react-router-dom";
import { PUBLIC_EVENTS } from "../../data/internationalOffice";

export default function PublicEventsSection() {
  const { lead, stats, categories, highlights, events } = PUBLIC_EVENTS;

  return (
    <section id="public-events" className="office-section office-section--public-events">
      <h2>Public Events</h2>
      <p className="office-section__lead">{lead}</p>

      <div className="office-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="office-stats__item">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="office-grid">
        {highlights.map((item) => (
          <div key={item.title} className="office-card">
            <span className="office-card__icon" aria-hidden="true">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <h3 className="office-subheading">Event categories</h3>
      <ul className="office-list">
        {categories.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="office-subheading">Upcoming highlights</h3>
      <ul className="office-events-list">
        {events.map((event) => (
          <li key={event.title} className="office-events-list__item">
            <span className="office-events-list__type">{event.type}</span>
            <div>
              <strong>{event.title}</strong>
              <p>{event.date} · {event.venue}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="office-section__foot">
        <Link to="/news-events" className="office-link">
          View all news &amp; events →
        </Link>
      </p>
    </section>
  );
}
