import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../styles/components/ProgramOverview.css';

export default function ProgramOverview({ philosophy, outcomes, pathways }) {
  return (
    <section className="section section--alt program-overview" id="overview">
      <div className="container">
        <SectionTitle
          subtitle="Program"
          title="Program Overview"
          description="Discover the educational foundation that prepares you for a successful global career."
        />
        <div className="program-overview__grid">
          <motion.div
            className="program-overview__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Educational Philosophy</h3>
            <p>{philosophy}</p>
          </motion.div>
          <motion.div
            className="program-overview__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3>Learning Outcomes</h3>
            <ul>
              {outcomes.map((outcome, i) => (
                <li key={i}>{outcome}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="program-overview__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Career Pathways</h3>
            <ul>
              {pathways.map((path, i) => (
                <li key={i}>{path}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
