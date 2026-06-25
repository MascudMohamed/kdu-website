import { motion } from 'framer-motion';
import '../../styles/components/ResearchCard.css';

export default function ResearchCard({ title, description, faculty }) {
  return (
    <motion.article
      className="research-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="research-card__title">{title}</h3>
      <p className="research-card__description">{description}</p>
      {faculty?.length > 0 && (
        <div className="research-card__faculty">
          <span className="research-card__faculty-label">Related Faculty</span>
          <div className="research-card__faculty-list">
            {faculty.map((name, i) => (
              <span key={i} className="research-card__faculty-name">{name}</span>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
}
