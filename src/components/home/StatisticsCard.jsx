import { motion } from 'framer-motion';
import '../../styles/components/StatisticsCard.css';

export default function StatisticsCard({ value, label, suffix = '' }) {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="stat-card__value">
        {value}
        {suffix && <span className="stat-card__suffix">{suffix}</span>}
      </span>
      <span className="stat-card__label">{label}</span>
    </motion.div>
  );
}
