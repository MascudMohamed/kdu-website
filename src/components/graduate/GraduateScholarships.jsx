import { motion } from 'framer-motion';
import '../../styles/components/graduate/GraduateScholarships.css';

const BENEFITS = [
  {
    title: 'Scholarships up to 100%',
    description:
      'International students may receive scholarships covering up to 100% of tuition upon admission and throughout their studies.',
  },
  {
    title: 'Part-time job support',
    description:
      'KDU Global assists students with part-time employment opportunities while studying in Korea.',
  },
  {
    title: 'Career placement',
    description:
      'Graduate students receive professional career guidance and employment support upon successful graduation.',
  },
  {
    title: 'Global opportunities',
    description:
      'Exchange, study abroad, research collaboration, and dual-degree opportunities with partner universities worldwide.',
  },
];

export default function GraduateScholarships({ scholarships }) {
  return (
    <section className="graduate-scholarships section" id="scholarships" aria-labelledby="scholarships-title">
      <div className="container">
        <motion.div
          className="graduate-section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Student Benefits</span>
          <h2 id="scholarships-title">{scholarships?.title || 'Scholarships & Student Support'}</h2>
          <p>
            {scholarships?.description ||
              'KDU Global provides financial assistance, academic support, international services, and career development throughout graduate studies.'}
          </p>
          {scholarships?.coverage && (
            <p className="graduate-scholarships__coverage">{scholarships.coverage}</p>
          )}
        </motion.div>

        <div className="graduate-benefits-grid">
          {BENEFITS.map((item, index) => (
            <motion.div
              key={item.title}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
