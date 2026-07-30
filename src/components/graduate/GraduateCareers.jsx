import { motion } from 'framer-motion';
import '../../styles/components/graduate/GraduateCareers.css';

export default function GraduateCareers({ careers }) {
  if (!careers) return null;

  return (
    <section className="graduate-careers section section--alt" id="careers" aria-labelledby="careers-title">
      <div className="container">
        <motion.header
          className="graduate-section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Outcomes</span>
          <h2 id="careers-title">{careers.title}</h2>
          <p>{careers.lead}</p>
        </motion.header>

        <ul className="graduate-careers__list">
          {careers.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>

        {careers.note && <p className="graduate-careers__note">{careers.note}</p>}
      </div>
    </section>
  );
}
