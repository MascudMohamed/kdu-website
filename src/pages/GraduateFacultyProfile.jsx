import { Link, Navigate, useParams } from 'react-router-dom';
import graduateData from '../data/academics/graduateData';
import { useGraduateFacultyProfile } from '../hooks/useGraduateFacultyProfile';
import '../styles/pages/FacultyProfile.css';

export default function GraduateFacultyProfile() {
  const { profileSlug } = useParams();
  const staticMatch = graduateData.faculty?.find(
    (f) => f.profileSlug === profileSlug || f.id === profileSlug
  );
  const { faculty, loading } = useGraduateFacultyProfile(profileSlug, staticMatch);

  if (loading) {
    return (
      <div className="faculty-profile">
        <div className="container" style={{ padding: '3rem 0' }}>
          <p>Loading profile…</p>
        </div>
      </div>
    );
  }

  if (!faculty) {
    return <Navigate to="/academics/graduate/faculty" replace />;
  }

  const socials = [
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'scholar', label: 'Google Scholar' },
    { key: 'researchgate', label: 'ResearchGate' },
    { key: 'website', label: 'Website' },
  ].filter((s) => faculty[s.key]);

  return (
    <div className="faculty-profile">
      <section className="faculty-profile__hero">
        <div className="container">
          <nav className="faculty-profile__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/academics">Academics</Link>
            <span>/</span>
            <Link to="/academics/graduate">Graduate</Link>
            <span>/</span>
            <Link to="/academics/graduate/faculty">Faculty</Link>
            <span>/</span>
            <span aria-current="page">{faculty.name}</span>
          </nav>
          <div className="faculty-profile__header">
            {faculty.photo && <img src={faculty.photo} alt="" />}
            <div>
              <h1>{faculty.name}</h1>
              <p className="faculty-profile__position">{faculty.position}</p>
              {faculty.rank && <p className="faculty-profile__rank">{faculty.rank}</p>}
              {faculty.email && (
                <a href={`mailto:${faculty.email}`} className="faculty-profile__email">
                  {faculty.email}
                </a>
              )}
              <div className="faculty-profile__socials">
                {socials.map((s) => (
                  <a key={s.key} href={faculty[s.key]} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faculty-profile__grid">
          <div className="faculty-profile__main">
            {faculty.biography && (
              <div className="faculty-profile__block">
                <h2>Biography</h2>
                <p>{faculty.biography}</p>
              </div>
            )}
            {faculty.specialization && (
              <div className="faculty-profile__block">
                <h2>Specialization</h2>
                <p>{faculty.specialization}</p>
              </div>
            )}
            {faculty.researchInterests && (
              <div className="faculty-profile__block">
                <h2>Research interests</h2>
                <p>{faculty.researchInterests}</p>
              </div>
            )}
          </div>
          <aside className="faculty-profile__aside">
            {faculty.office && (
              <div className="faculty-profile__block">
                <h2>Office</h2>
                <p>{faculty.office}</p>
              </div>
            )}
            <Link to="/academics/graduate/faculty" className="dept-link-arrow">
              Back to graduate faculty
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
