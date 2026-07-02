import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import '../../styles/components/EngagementCard.css';

export default function EngagementCard({ area, index = 0 }) {
  return (
    <motion.article
      className="engagement-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <Link to={area.path} className="engagement-card__image-wrap">
        <img src={area.image} alt="" loading="lazy" />
      </Link>
      <div className="engagement-card__body">
        <h3 className="engagement-card__title">
          <Link to={area.path}>{area.title}</Link>
        </h3>
        <p className="engagement-card__desc">{area.description}</p>
        <Button to={area.path} variant="outline" size="sm">
          Explore
        </Button>
      </div>
    </motion.article>
  );
}
