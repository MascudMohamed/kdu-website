import { motion } from 'framer-motion';
import '../../styles/components/CareerCard.css';

export default function CareerCard({ title, description, icon }) {
  return (
    <motion.div
      className="career-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="career-card__icon" aria-hidden="true">{icon || '💼'}</span>
      <h3 className="career-card__title">{title}</h3>
      {description && <p className="career-card__description">{description}</p>}
    </motion.div>
  );
}
