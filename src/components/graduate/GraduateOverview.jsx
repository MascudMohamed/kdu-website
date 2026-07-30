import { motion } from 'framer-motion';
import '../../styles/components/graduate/GraduateOverview.css';

export default function GraduateOverview({ overview }) {
  if (!overview) return null;

  return (
    <section className="graduate-overview section" id="overview" aria-labelledby="graduate-overview-title">
      <div className="container graduate-overview__grid">
        <motion.div
          className="graduate-overview__media"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={overview.image} alt="" loading="lazy" />
        </motion.div>

        <motion.div
          className="graduate-overview__content"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="graduate-overview__eyebrow">Graduate School</p>
          <h2 id="graduate-overview-title">{overview.title}</h2>
          <p>{overview.intro}</p>

          {overview.programmesList?.length > 0 && (
            <ul className="graduate-overview__degrees">
              {overview.programmesList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {overview.body?.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}

          {overview.features?.length > 0 && (
            <div className="graduate-overview__features">
              {overview.features.map((feature) => (
                <div key={feature.title} className="graduate-overview__feature">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
