import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../styles/components/ChairMessage.css';

export default function ChairMessage({ chair }) {
  return (
    <section className="section chair-message" id="welcome">
      <div className="container">
        <SectionTitle subtitle="Leadership" title={`Message from ${chair.title}`} align="left" />
        <div className="chair-message__grid">
          <motion.div
            className="chair-message__portrait"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={chair.photo} alt={chair.name} loading="lazy" />
            <div className="chair-message__identity">
              <strong>{chair.name}</strong>
              <span>{chair.position}</span>
            </div>
          </motion.div>
          <motion.div
            className="chair-message__content"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="chair-message__body">
              {chair.message.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="chair-message__blocks">
              {chair.mission && (
                <div className="chair-message__block">
                  <h3>Mission</h3>
                  <p>{chair.mission}</p>
                </div>
              )}
              {chair.vision && (
                <div className="chair-message__block">
                  <h3>Vision</h3>
                  <p>{chair.vision}</p>
                </div>
              )}
            </div>
            {chair.objectives?.length > 0 && (
              <div className="chair-message__objectives">
                <h3>Department Objectives</h3>
                <ul>
                  {chair.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                </ul>
              </div>
            )}
            <div className="chair-message__signature">
              <span>{chair.name}</span>
              <small>{chair.position}</small>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
