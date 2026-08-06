import { motion } from 'framer-motion';
import { INTERNATIONAL_FACULTY } from '../data/internationalFaculty';
import '../styles/pages/InternationalFaculty.css';

function initialsFromName(name) {
  const parts = String(name)
    .split(',')[0]
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return '—';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export default function InternationalFaculty() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="page-header__eyebrow">Introduction · Faculty and Staff</p>
            <h1>International Faculty</h1>
            <p>
              Meet the international faculty of Kyungdong University Global — scholars and educators
              across undergraduate programmes, graduate studies, and the K-Global Education Centre.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section intl-faculty">
        <div className="container">
          <ul className="intl-faculty__list">
            {INTERNATIONAL_FACULTY.map((member) => (
              <li key={member.name} className="intl-faculty__item">
                <div className="intl-faculty__photo" aria-hidden={!member.photo}>
                  {member.photo ? (
                    <img src={member.photo} alt="" loading="lazy" />
                  ) : (
                    <span className="intl-faculty__photo-placeholder">
                      <span className="intl-faculty__photo-initials">
                        {initialsFromName(member.name)}
                      </span>
                      <span className="intl-faculty__photo-hint">Photo</span>
                    </span>
                  )}
                </div>
                <div className="intl-faculty__body">
                  <h2>{member.name}</h2>
                  <p className="intl-faculty__role">{member.role}</p>
                  <p className="intl-faculty__creds">{member.credentials}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
