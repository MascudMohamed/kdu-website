import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import '../../styles/components/AdmissionRequirements.css';

export default function AdmissionRequirements({ requirements }) {
  const sections = [
    { key: 'eligibility', title: 'Eligibility', items: requirements.eligibility },
    { key: 'language', title: 'Language Requirements', items: requirements.language },
    { key: 'documents', title: 'Required Documents', items: requirements.documents },
  ];

  return (
    <section className="section admission-req" id="admissions">
      <div className="container">
        <SectionTitle
          subtitle="Admissions"
          title="Admission Requirements"
          description="Review the requirements and timeline to begin your application journey."
        />
        <div className="admission-req__grid">
          {sections.map((section, index) => (
            <motion.div
              key={section.key}
              className="admission-req__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="admission-req__extras">
          {requirements.tuition && (
            <motion.div
              className="admission-req__tuition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Tuition Information</h3>
              <p className="admission-req__tuition-amount">{requirements.tuition.amount}</p>
              <p>{requirements.tuition.note}</p>
            </motion.div>
          )}
          {requirements.timeline && (
            <motion.div
              className="admission-req__timeline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Application Timeline</h3>
              <div className="admission-req__timeline-list">
                {requirements.timeline.map((item, i) => (
                  <div key={i} className="admission-req__timeline-item">
                    <span className="admission-req__timeline-date">{item.date}</span>
                    <span className="admission-req__timeline-event">{item.event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div className="admission-req__cta">
          <Button to="/admissions" variant="primary" size="lg">
            Start Your Application
          </Button>
        </div>
      </div>
    </section>
  );
}
