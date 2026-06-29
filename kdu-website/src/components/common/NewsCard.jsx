import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/NewsCard.css';

export default function NewsCard({ image, date, category, title, summary, link }) {
  return (
    <motion.article
      className="news-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to={link || '#'} className="news-card__image-link">
        <img src={image} alt="" className="news-card__image" loading="lazy" />
      </Link>
      <div className="news-card__body">
        <div className="news-card__meta">
          <time dateTime={date}>{date}</time>
          <span className="news-card__category">{category}</span>
        </div>
        <h3 className="news-card__title">
          <Link to={link || '#'}>{title}</Link>
        </h3>
        <p className="news-card__summary">{summary}</p>
        <Link to={link || '#'} className="news-card__read-more">
          Read More &rarr;
        </Link>
      </div>
    </motion.article>
  );
}
