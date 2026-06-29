import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { APPLICATION_FORM_URL } from '../../constants/links';
import '../../styles/components/AdmissionIconCards.css';

const ICONS = {
  eligibility: '📋',
  language: '🌐',
  documents: '📄',
  tuition: '💰',
  scholarships: '🏆',
  timeline: '📅',
};

export default function AdmissionIconCards({ requirements }) {
  const cards = [
    { key: 'eligibility', title: 'Eligibility Requirements', items: requirements.eligibility },
    { key: 'language', title: 'Language Requirements', items: requirements.language },
    { key: 'documents', title: 'Required Documents', items: requirements.documents },
    { key: 'tuition', title: 'Tuition Information', tuition: requirements.tuition },
    { key: 'scholarships', title: 'Scholarships', items: requirements.scholarships },
    { key: 'timeline', title: 'Application Timeline', timeline: requirements.timeline },
  ].filter((c) => c.items?.length || c.tuition || c.timeline?.length);

  return (
    <section className="section admission-icons" id="admissions">
      <div className="container">
        <SectionTitle
          subtitle="Admissions"
          title="Admission Requirements"
          description="Everything you need to begin your application journey."
        />
        <div className="admission-icons__grid">
          {cards.map((card, i) => (
            <motion.div
              key={card.key}
              className="admission-icons__card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="admission-icons__icon" aria-hidden="true">{ICONS[card.key]}</span>
              <h3>{card.title}</h3>
              {card.tuition && (
                <>
                  <p className="admission-icons__amount">{card.tuition.amount}</p>
                  <p>{card.tuition.note}</p>
                </>
              )}
              {card.timeline && (
                <ul className="admission-icons__timeline">
                  {card.timeline.map((t, j) => (
                    <li key={j}>
                      <strong>{t.date}</strong> — {t.event}
                    </li>
                  ))}
                </ul>
              )}
              {card.items && (
                <ul>
                  {card.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
        <div className="admission-icons__cta">
          <Button href={APPLICATION_FORM_URL} variant="primary" size="lg">Apply Now</Button>
        </div>
      </div>
    </section>
  );
}
