import { Link } from 'react-router-dom';
import DeptSectionHeader from '../department/DeptSectionHeader';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptFacultyList.css';

export default function GraduateFaculty({ faculty, embedded = false }) {
  if (!faculty?.length) return null;

  const list = (
    <ul className="dept-faculty__list">
      {faculty.map((member) => (
        <li key={member.id} className="dept-faculty__item">
          <img
            src={member.photo}
            alt=""
            className="dept-faculty__photo"
            loading="lazy"
            width="120"
            height="150"
          />
          <div className="dept-faculty__info">
            <h3>{member.name}</h3>
            <p className="dept-faculty__title">{member.position}</p>
            {member.specialization && (
              <p className="dept-faculty__spec">{member.specialization}</p>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`} className="dept-faculty__email">
                {member.email}
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );

  if (embedded) return list;

  return (
    <section className="dept-section dept-section--alt dept-faculty" id="faculty">
      <div className="container">
        <DeptSectionHeader
          eyebrow="Our People"
          title="Graduate faculty"
          lead="Distinguished educators and researchers across AI, business, and hospitality — supporting interdisciplinary master’s study at K-Global GSBTC."
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
