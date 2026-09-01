import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  INTERNATIONAL_FACULTY,
  internationalFacultyProfilePath,
  mapStaticInternationalFacultyList,
  splitFacultyRole,
} from '../data/internationalFaculty';
import { useInternationalFaculty } from '../hooks/useInternationalFaculty';
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
  const staticFaculty = useMemo(
    () => mapStaticInternationalFacultyList(INTERNATIONAL_FACULTY),
    [],
  );
  const { faculty } = useInternationalFaculty(staticFaculty);

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
            {faculty.map((member) => {
              const { position: officeTitle, rank: academicRank } = splitFacultyRole(
                member.position,
                member.rank,
              );

              return (
              <li key={member.profileSlug || member.id || member.name} className="intl-faculty__item">
                <Link
                  to={internationalFacultyProfilePath(member.profileSlug)}
                  className="intl-faculty__card"
                >
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
                    {officeTitle && (
                      <p className="intl-faculty__role">{officeTitle}</p>
                    )}
                    {academicRank && (
                      <p className="intl-faculty__rank">{academicRank}</p>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="intl-faculty__email"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {member.email}
                      </a>
                    )}
                    <span className="intl-faculty__view">View profile</span>
                    {member.specialization && (
                      <p className="intl-faculty__spec">{member.specialization}</p>
                    )}
                  </div>
                </Link>
              </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
