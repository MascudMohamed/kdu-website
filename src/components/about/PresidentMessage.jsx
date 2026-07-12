import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { PRESIDENT } from '../../data/president';
import '../../styles/pages/About.css';

export default function PresidentMessage({ subtitle, showLeadershipHeading = false }) {
  return (
    <section className="section">
      <div className="container">
        <div className="about-welcome__grid">
          <motion.div
            className="about-welcome__portrait"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={PRESIDENT.image} alt={PRESIDENT.imageAlt} loading="lazy" />
            <div className="about-welcome__portrait-meta">
              <strong>{PRESIDENT.name}</strong>
              <span>{PRESIDENT.title}</span>
            </div>
            <p className="about-welcome__portrait-intro">{PRESIDENT.portraitIntro}</p>
            <p className="about-welcome__portrait-note">{PRESIDENT.portraitNote}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              subtitle={subtitle ?? PRESIDENT.sectionSubtitle}
              title={PRESIDENT.sectionTitle}
              align="left"
            />
            <blockquote className="president-message__quote">
              <p>&ldquo;{PRESIDENT.quote}&rdquo;</p>
              <cite>{PRESIDENT.name}</cite>
            </blockquote>
            {showLeadershipHeading && (
              <h3 className="president-message__heading">{PRESIDENT.leadershipHeading}</h3>
            )}
            <div className="about-welcome__message">
              {PRESIDENT.message.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
