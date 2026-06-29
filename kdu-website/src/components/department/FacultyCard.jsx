import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/components/FacultyCard.css';

const SOCIAL_ICONS = {
  website: { label: 'Website', icon: '🌐' },
  linkedin: { label: 'LinkedIn', icon: 'in' },
  facebook: { label: 'Facebook', icon: 'f' },
  researchgate: { label: 'ResearchGate', icon: 'RG' },
  scholar: { label: 'Google Scholar', icon: 'GS' },
};

export default function FacultyCard({ faculty }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className="faculty-card"
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="faculty-card__header">
        <img src={faculty.photo} alt={faculty.name} className="faculty-card__photo" loading="lazy" />
        <div className="faculty-card__info">
          <h3 className="faculty-card__name">{faculty.name}</h3>
          <span className="faculty-card__position">{faculty.position}</span>
          <span className="faculty-card__rank">{faculty.rank}</span>
        </div>
      </div>

      <div className="faculty-card__details">
        {faculty.specialization && (
          <p className="faculty-card__specialization">
            <strong>Specialization:</strong> {faculty.specialization}
          </p>
        )}
        {faculty.researchInterests && (
          <p className="faculty-card__research">
            <strong>Research:</strong> {faculty.researchInterests}
          </p>
        )}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="faculty-card__expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {faculty.biography && <p className="faculty-card__bio">{faculty.biography}</p>}
            <div className="faculty-card__contact">
              {faculty.email && (
                <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
              )}
              {faculty.phone && <span>{faculty.phone}</span>}
              {faculty.office && <span>Office: {faculty.office}</span>}
            </div>
            <div className="faculty-card__social">
              {Object.entries(SOCIAL_ICONS).map(([key, { label }]) =>
                faculty[key] ? (
                  <a key={key} href={faculty[key]} target="_blank" rel="noopener noreferrer" aria-label={`${faculty.name} on ${label}`}>
                    {label}
                  </a>
                ) : null
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="faculty-card__toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? 'Show Less' : 'View Profile'}
      </button>
    </motion.article>
  );
}
