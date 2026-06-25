import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../styles/components/WelcomeSection.css';

export default function WelcomeSection({ chair }) {
  return (
    <section className="section welcome-section" id="welcome">
      <div className="container">
        <SectionTitle
          subtitle="Welcome"
          title={`Message from ${chair.title}`}
          align="left"
        />
        <div className="welcome-section__grid">
          <motion.div
            className="welcome-section__portrait"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={chair.photo} alt={chair.name} loading="lazy" />
            <div className="welcome-section__info">
              <strong>{chair.name}</strong>
              <span>{chair.position}</span>
            </div>
          </motion.div>
          <motion.div
            className="welcome-section__content"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="welcome-section__message">
              {chair.message.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="welcome-section__mission">
              <h3>Mission Statement</h3>
              <p>{chair.mission}</p>
            </div>
            {chair.objectives && (
              <div className="welcome-section__objectives">
                <h3>Objectives</h3>
                <ul>
                  {chair.objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
