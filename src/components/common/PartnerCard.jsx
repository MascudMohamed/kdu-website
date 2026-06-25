import { motion } from 'framer-motion';
import '../../styles/components/PartnerCard.css';

export default function PartnerCard({ logo, name, country, description }) {
  return (
    <motion.div
      className="partner-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="partner-card__logo">
        <img src={logo} alt={`${name} logo`} loading="lazy" />
      </div>
      <h4 className="partner-card__name">{name}</h4>
      <span className="partner-card__country">{country}</span>
      {description && <p className="partner-card__description">{description}</p>}
    </motion.div>
  );
}
