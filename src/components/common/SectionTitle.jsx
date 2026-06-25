import { motion } from 'framer-motion';
import '../../styles/components/SectionTitle.css';

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  return (
    <motion.div
      className={`section-title section-title--${align} ${light ? 'section-title--light' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
      <h2 className="section-title__title">{title}</h2>
      {description && <p className="section-title__description">{description}</p>}
    </motion.div>
  );
}
