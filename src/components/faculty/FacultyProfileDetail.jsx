import { Link } from 'react-router-dom';
import Button from '../common/Button';
import '../../styles/pages/FacultyProfile.css';
import '../../styles/pages/InternationalFaculty.css';

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

function formatAward(award) {
  if (typeof award === 'string') return award;
  return [award.title, award.award_year].filter(Boolean).join(' — ');
}

/**
 * Full faculty profile layout — matches CMS / faculty_profiles database fields.
 */
export default function FacultyProfileDetail({ faculty, breadcrumbs = [], backLink }) {
  if (!faculty) return null;

  const socials = [
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'scholar', label: 'Google Scholar' },
    { key: 'researchgate', label: 'ResearchGate' },
    { key: 'website', label: 'Website' },
  ].filter((s) => faculty[s.key]);

  const hasContact = faculty.email || faculty.phone || faculty.office || faculty.officeHours;
  const hasSidebar = hasContact || faculty.languages?.length || faculty.cv || backLink;

  return (
    <div className="faculty-profile">
      <section className="faculty-profile__hero">
        <div className="container">
          {breadcrumbs.length > 0 && (
            <nav className="faculty-profile__breadcrumb" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <span key={`${crumb.label}-${index}`} style={{ display: 'contents' }}>
                  {index > 0 && <span>/</span>}
                  {crumb.path ? (
                    <Link to={crumb.path}>{crumb.label}</Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <div className="faculty-profile__header">
            {faculty.photo ? (
              <img src={faculty.photo} alt="" />
            ) : (
              <div className="intl-faculty__photo intl-faculty__photo--profile" aria-hidden="true">
                <span className="intl-faculty__photo-placeholder">
                  <span className="intl-faculty__photo-initials">
                    {initialsFromName(faculty.name)}
                  </span>
                </span>
              </div>
            )}
            <div>
              <h1>{faculty.name}</h1>
              {faculty.position && (
                <p className="faculty-profile__position">{faculty.position}</p>
              )}
              {faculty.rank && <p className="faculty-profile__rank">{faculty.rank}</p>}
              {faculty.languages?.length > 0 && (
                <p className="faculty-profile__languages">
                  Languages: {faculty.languages.join(', ')}
                </p>
              )}
              {faculty.email && (
                <a href={`mailto:${faculty.email}`} className="faculty-profile__email">
                  {faculty.email}
                </a>
              )}
              {socials.length > 0 && (
                <div className="faculty-profile__socials">
                  {socials.map((s) => (
                    <a
                      key={s.key}
                      href={faculty[s.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container faculty-profile__grid${hasSidebar ? '' : ' faculty-profile__grid--single'}`}>
          <div className="faculty-profile__main">
            {faculty.biography && (
              <div className="faculty-profile__block">
                <h2>Biography</h2>
                <p>{faculty.biography}</p>
              </div>
            )}
            {faculty.teachingPhilosophy && (
              <div className="faculty-profile__block">
                <h2>Teaching philosophy</h2>
                <p>{faculty.teachingPhilosophy}</p>
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
            {faculty.education?.length > 0 && (
              <div className="faculty-profile__block">
                <h2>Education</h2>
                <ul>
                  {faculty.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {faculty.professionalExperience?.length > 0 && (
              <div className="faculty-profile__block">
                <h2>Professional experience</h2>
                <ul>
                  {faculty.professionalExperience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {faculty.publications?.length > 0 && (
              <div className="faculty-profile__block">
                <h2>Publications</h2>
                <ul>
                  {faculty.publications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {faculty.awards?.length > 0 && (
              <div className="faculty-profile__block">
                <h2>Awards</h2>
                <ul>
                  {faculty.awards.map((item) => (
                    <li key={formatAward(item)}>{formatAward(item)}</li>
                  ))}
                </ul>
              </div>
            )}
            {faculty.coursesTaught?.length > 0 && (
              <div className="faculty-profile__block">
                <h2>Courses taught</h2>
                <ul>
                  {faculty.coursesTaught.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {faculty.currentProjects?.length > 0 && (
              <div className="faculty-profile__block">
                <h2>Current projects</h2>
                <ul>
                  {faculty.currentProjects.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {hasSidebar && (
            <aside className="faculty-profile__sidebar">
              {hasContact && (
                <div className="faculty-profile__card">
                  <h3>Contact</h3>
                  {faculty.email && (
                    <p>
                      <strong>Email:</strong>{' '}
                      <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
                    </p>
                  )}
                  {faculty.phone && (
                    <p>
                      <strong>Phone:</strong> {faculty.phone}
                    </p>
                  )}
                  {faculty.office && (
                    <p>
                      <strong>Office:</strong> {faculty.office}
                    </p>
                  )}
                  {faculty.officeHours && (
                    <p>
                      <strong>Office hours:</strong> {faculty.officeHours}
                    </p>
                  )}
                  <Button to="/contact" variant="primary" size="sm">
                    Send inquiry
                  </Button>
                </div>
              )}
              {faculty.cv && (
                <div className="faculty-profile__card faculty-profile__card--links">
                  <h3>Documents</h3>
                  <a href={faculty.cv} target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
                </div>
              )}
              {backLink && (
                <Link to={backLink.path} className="dept-link-arrow">
                  {backLink.label}
                </Link>
              )}
            </aside>
          )}
        </div>
      </section>
    </div>
  );
}
