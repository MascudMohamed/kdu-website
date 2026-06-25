import { motion } from 'framer-motion';
import '../../styles/components/ResearchAreaCardV2.css';

export default function ResearchAreaCardV2({ area }) {
  return (
    <motion.article
      className="research-v2"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3>{area.title}</h3>
      <p className="research-v2__desc">{area.description}</p>
      {area.faculty?.length > 0 && (
        <div className="research-v2__section">
          <span className="research-v2__label">Faculty</span>
          <div className="research-v2__tags">
            {area.faculty.map((name) => (
              <span key={name} className="research-v2__tag">{name}</span>
            ))}
          </div>
        </div>
      )}
      {area.projects?.length > 0 && (
        <div className="research-v2__section">
          <span className="research-v2__label">Projects</span>
          <ul>{area.projects.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      )}
      {area.publications?.length > 0 && (
        <div className="research-v2__section">
          <span className="research-v2__label">Publications</span>
          <ul>{area.publications.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      )}
    </motion.article>
  );
}
