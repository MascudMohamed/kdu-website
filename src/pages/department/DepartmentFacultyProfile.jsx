import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom';
import { getFacultyBySlug } from '../../data/departments';
import Button from '../../components/common/Button';
import { deptPath } from '../../data/departments/navigation';
import { useFacultyProfile } from '../../hooks/useFacultyProfile';
import '../../styles/pages/FacultyProfile.css';

export default function DepartmentFacultyProfile() {
  const { department } = useOutletContext();
  const { profileSlug } = useParams();
  const staticFaculty = getFacultyBySlug(profileSlug, department.slug);
  const { faculty, loading } = useFacultyProfile(department.slug, profileSlug, staticFaculty);

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
    return <Navigate to={deptPath(department.slug, 'faculty')} replace />;
  }

  const socials = [
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'scholar', label: 'Google Scholar' },
    { key: 'researchgate', label: 'ResearchGate' },
    { key: 'website', label: 'Website' },
  ].filter((s) => faculty[s.key]);

  const base = deptPath(department.slug);

  return (
    <div className="faculty-profile">
      <section className="faculty-profile__hero">
        <div className="container">
          <nav className="faculty-profile__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/academics">Academics</Link><span>/</span>
            <Link to={base}>{department.shortTitle || department.title}</Link><span>/</span>
            <Link to={`${base}/faculty`}>Faculty</Link><span>/</span>
            <span aria-current="page">{faculty.name}</span>
          </nav>
          <div className="faculty-profile__header">
            <img src={faculty.photo} alt="" />
            <div>
              <h1>{faculty.name}</h1>
              <p className="faculty-profile__position">{faculty.position}</p>
              <p className="faculty-profile__rank">{faculty.rank}</p>
              {faculty.languages?.length > 0 && (
                <p className="faculty-profile__languages">Languages: {faculty.languages.join(', ')}</p>
              )}
              {faculty.email && (
                <a href={`mailto:${faculty.email}`} className="faculty-profile__email">{faculty.email}</a>
              )}
              <div className="faculty-profile__socials">
                {socials.map((s) => (
                  <a key={s.key} href={faculty[s.key]} target="_blank" rel="noopener noreferrer">{s.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faculty-profile__grid">
          <div className="faculty-profile__main">
            <div className="faculty-profile__block">
              <h2>Biography</h2>
              <p>{faculty.biography}</p>
            </div>
            {faculty.teachingPhilosophy && (
              <div className="faculty-profile__block">
                <h2>Teaching Philosophy</h2>
                <p>{faculty.teachingPhilosophy}</p>
              </div>
            )}
            <div className="faculty-profile__block">
              <h2>Education</h2>
              <ul>{faculty.education.map((e) => <li key={e}>{e}</li>)}</ul>
            </div>
            {faculty.professionalExperience?.length > 0 && (
              <div className="faculty-profile__block">
                <h2>Professional Experience</h2>
                <ul>{faculty.professionalExperience.map((e) => <li key={e}>{e}</li>)}</ul>
              </div>
            )}
            <div className="faculty-profile__block">
              <h2>Research Interests</h2>
              <p>{faculty.researchInterests}</p>
            </div>
            <div className="faculty-profile__block">
              <h2>Publications</h2>
              <ul>{faculty.publications.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
            {faculty.currentProjects?.length > 0 && (
              <div className="faculty-profile__block">
                <h2>Current Projects</h2>
                <ul>{faculty.currentProjects.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            )}
            {faculty.awards?.length > 0 && (
              <div className="faculty-profile__block">
                <h2>Awards</h2>
                <ul>{faculty.awards.map((a) => <li key={a}>{a}</li>)}</ul>
              </div>
            )}
            <div className="faculty-profile__block">
              <h2>Courses Taught</h2>
              <ul>{faculty.coursesTaught.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
          <aside className="faculty-profile__sidebar">
            <div className="faculty-profile__card">
              <h3>Contact</h3>
              {faculty.phone && <p><strong>Phone:</strong> {faculty.phone}</p>}
              {faculty.office && <p><strong>Office:</strong> {faculty.office}</p>}
              <p><strong>Office Hours:</strong> {faculty.officeHours}</p>
              <Button to="/contact" variant="primary" size="sm">Send Inquiry</Button>
            </div>
            {faculty.specialization && (
              <div className="faculty-profile__card">
                <h3>Specialization</h3>
                <p>{faculty.specialization}</p>
              </div>
            )}
            <div className="faculty-profile__card faculty-profile__card--links">
              <h3>Explore</h3>
              <Link to={base}>Department overview</Link>
              <Link to={`${base}/faculty`}>All faculty</Link>
              {department.slug === 'smart-computing' && (
                <Link to={`${base}/projects`}>Student projects</Link>
              )}
              <Link to={`${base}/admissions`}>Admissions</Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
