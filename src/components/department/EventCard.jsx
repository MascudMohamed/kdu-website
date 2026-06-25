import { motion } from 'framer-motion';
import '../../styles/components/EventCard.css';

export default function EventCard({ banner, title, date, venue, description, type }) {
  return (
    <motion.article
      className="event-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="event-card__banner">
        <img src={banner} alt="" loading="lazy" />
        {type && <span className="event-card__type">{type}</span>}
      </div>
      <div className="event-card__body">
        <time className="event-card__date" dateTime={date}>{date}</time>
        <h3 className="event-card__title">{title}</h3>
        <span className="event-card__venue">{venue}</span>
        <p className="event-card__description">{description}</p>
      </div>
    </motion.article>
  );
}
