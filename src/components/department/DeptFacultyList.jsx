import { Link } from 'react-router-dom';
import DeptSectionHeader from './DeptSectionHeader';
import { deptPath } from '../../data/departments/navigation';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptFacultyList.css';

export default function DeptFacultyList({ faculty, departmentSlug, embedded = false }) {
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
          </div>
          {member.profileSlug && departmentSlug && (
            <Link to={deptPath(departmentSlug, `faculty/${member.profileSlug}`)} className="dept-faculty__link">
              View profile
            </Link>
          )}
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
          title="Faculty excellence"
          lead="Distinguished educators and researchers committed to academic rigour and student success."
        />
        {list}
      </div>
    </section>
  );
}
