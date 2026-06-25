import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../styles/components/WhyChoose.css';

export default function WhyChoose({ items }) {
  return (
    <section className="section section--alt why-choose" id="why-choose">
      <div className="container">
        <SectionTitle
          subtitle="Distinctive Strengths"
          title="Why Choose This Program?"
          description="Discover what sets our program apart on the global stage."
        />
        <div className="why-choose__grid">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="why-choose__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <span className="why-choose__icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
