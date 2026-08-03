import { Link } from 'react-router-dom';
import DeptSectionHeader from '../department/DeptSectionHeader';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptFacultyList.css';

export default function GraduateFaculty({ faculty, embedded = false }) {
  if (!faculty?.length) return null;

  const list = (
    <ul className="dept-faculty__list">
      {faculty.map((member) => {
        const profileHref = member.profileSlug
          ? `/academics/graduate/faculty/${member.profileSlug}`
          : null;

        const name = profileHref ? (
          <Link to={profileHref}>{member.name}</Link>
        ) : (
          member.name
        );

        return (
          <li key={member.id || member.profileSlug || member.name} className="dept-faculty__item">
            {member.photo ? (
              <img
                src={member.photo}
                alt=""
                className="dept-faculty__photo"
                loading="lazy"
                width="120"
                height="150"
              />
            ) : (
              <div className="dept-faculty__photo dept-faculty__photo--empty" aria-hidden="true" />
            )}
            <div className="dept-faculty__info">
              <h3>{name}</h3>
              <p className="dept-faculty__title">{member.position}</p>
              {member.specialization && (
                <p className="dept-faculty__spec">{member.specialization}</p>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`} className="dept-faculty__email">
                  {member.email}
                </a>
              )}
              {profileHref && (
                <Link to={profileHref} className="dept-link-arrow">
                  View profile
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );

  if (embedded) return list;

  return (
    <section className="dept-section dept-section--alt dept-faculty" id="faculty">
      <div className="container">
        <DeptSectionHeader
          eyebrow="Our People"
          title="Graduate faculty"
          lead="Faculty teaching across K-Global GSBTC programmes — AI & Data Science, International Business, and Hospitality & Tourism. One CMS profile can appear here and on undergraduate department pages."
        />
        {list}
        <div className="graduate-faculty__more">
          <Link to="/academics/graduate/faculty" className="dept-link-arrow">
            View full faculty directory
          </Link>
        </div>
      </div>
    </section>
  );
}
