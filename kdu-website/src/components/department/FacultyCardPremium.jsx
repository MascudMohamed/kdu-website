import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/components/FacultyCardPremium.css';

export default function FacultyCardPremium({ faculty }) {
  return (
    <motion.article
      className="faculty-premium"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img src={faculty.photo} alt={faculty.name} className="faculty-premium__photo" loading="lazy" />
      <div className="faculty-premium__body">
        <h3>{faculty.name}</h3>
        <span className="faculty-premium__position">{faculty.position}</span>
        {faculty.specialization && (
          <p className="faculty-premium__spec"><strong>Specialization:</strong> {faculty.specialization}</p>
        )}
        {faculty.researchInterests && (
          <p className="faculty-premium__research"><strong>Research:</strong> {faculty.researchInterests}</p>
        )}
        {faculty.biography && (
          <p className="faculty-premium__bio">{faculty.biography.slice(0, 140)}…</p>
        )}
        <div className="faculty-premium__links">
          {faculty.email && <a href={`mailto:${faculty.email}`}>Email</a>}
          {faculty.office && <span>Office: {faculty.office}</span>}
        </div>
        {faculty.profileSlug && (
          <Link to={`/faculty/${faculty.profileSlug}`} className="faculty-premium__profile-btn">
            View Full Profile
          </Link>
        )}
      </div>
    </motion.article>
  );
}
