import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import SectionTitle from '../../components/common/SectionTitle';
import EngagementCard from '../../components/engagement/EngagementCard';
import { ENGAGEMENT_HUB, ENGAGEMENT_AREAS } from '../../data/engagement/pages';
import '../../styles/pages/Engagement.css';

export default function EngagementHub() {
  const { eyebrow, title, lead, pillars, cta } = ENGAGEMENT_HUB;

  return (
    <div className="engagement-page">
      <section className="engagement-hero">
        <div className="engagement-hero__bg" />
        <div className="container engagement-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="engagement-hero__eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{lead}</p>
            <div className="engagement-hero__actions">
              <Button to="/engagement/community-engagement" variant="primary" size="lg">
                Community Engagement
              </Button>
              <Button to="/engagement/public-events" variant="white" size="lg">
                Public Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Our approach"
            title="Connecting campus and world"
            description="Engagement at KDU Global spans five interconnected areas — each designed to extend learning, strengthen partnerships, and create lasting impact."
          />
          <div className="engagement-pillars">
            {pillars.map((pillar, i) => (
              <motion.article
                key={pillar.title}
                className="engagement-pillars__item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="areas">
        <div className="container">
          <SectionTitle
            subtitle="Explore"
            title="Engagement areas"
            description="Select an area below to learn more. All content can be updated as official programmes and partnerships are confirmed."
          />
          <div className="engagement-areas__grid">
            {ENGAGEMENT_AREAS.map((area, i) => (
              <EngagementCard key={area.slug} area={area} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section engagement-hub-cta">
        <div className="container">
          <div className="engagement-hub-cta__box">
            <h2>{cta.title}</h2>
            <p>{cta.description}</p>
            <div className="engagement-hub-cta__links">
              <Button to={cta.primaryPath} variant="primary" size="lg">{cta.primaryLabel}</Button>
              <Link to={cta.secondaryPath} className="engagement-hub-cta__link">{cta.secondaryLabel} →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
