import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import DeptHeroV2 from '../../components/department/DeptHeroV2';
import DeptWhyProgram from '../../components/department/DeptWhyProgram';
import DeptNewsEditorial from '../../components/department/DeptNewsEditorial';
import DeptAdmissionsCTA from '../../components/department/DeptAdmissionsCTA';
import DeptContact from '../../components/department/DeptContact';
import { deptPath, getHubExploreSections } from '../../data/departments/navigation';
import { getDepartmentPageContent, getDepartmentProjects } from '../../data/departments';
import '../../styles/pages/DepartmentHub.css';

function ExploreSection({ title, description, links }) {
  if (!links.length) return null;
  return (
    <section className="dept-explore-section">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <ul className="dept-explore-section__links">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>
              <span className="dept-explore-section__label">{link.label}</span>
              {link.desc && <span className="dept-explore-section__desc">{link.desc}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function DepartmentHub() {
  const { department } = useOutletContext();
  const { slug } = department;
  const base = deptPath(slug);
  const projects = getDepartmentProjects(slug);
  const featuredProject = projects[0];

  const sections = getHubExploreSections(slug);

  const outcomesPath =
    getDepartmentPageContent(slug, 'employment') ? 'employment'
    : getDepartmentPageContent(slug, 'careers') ? 'careers'
    : null;

  return (
    <div className="department-hub">
      <DeptHeroV2 department={department} />
      <DeptWhyProgram items={department.whyChoose} philosophy={department.overview?.philosophy} />

      {featuredProject && (
        <section className="dept-hub-featured">
          <div className="container">
            <span className="dept-hub-featured__eyebrow">Featured student project</span>
            <div className="dept-hub-featured__inner">
              <img src={featuredProject.image} alt="" />
              <div>
                <h2>{featuredProject.title}</h2>
                <p>{featuredProject.summary}</p>
                <Link to={`${base}/projects/${featuredProject.slug}`} className="dept-link-arrow">
                  View project
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="dept-hub-explore section">
        <div className="container">
          <header className="dept-hub-explore__header">
            <h2>Explore {department.shortTitle || department.title}</h2>
            <p>Navigate the programme ecosystem — each page goes deeper on one aspect of your academic journey.</p>
          </header>
          <div className="dept-hub-explore__grid">
            {sections.map((section) => (
              <ExploreSection key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className="dept-hub-quick section section--alt">
        <div className="container dept-hub-quick__links">
          <Link to={`${base}/faculty`}>Faculty directory →</Link>
          <Link to={`${base}/admissions`}>Admissions →</Link>
          <Link to={`${base}/faq`}>FAQ →</Link>
          {outcomesPath && (
            <Link to={`${base}/${outcomesPath}`}>
              {outcomesPath === 'employment' ? 'Graduate employment' : 'Career outcomes'} →
            </Link>
          )}
        </div>
      </section>

      <DeptNewsEditorial news={department.news?.slice(0, 3)} events={department.events?.slice(0, 2)} />
      <DeptAdmissionsCTA admissions={department.admissions} programTitle={department.title} />
      <DeptContact contact={department.contact} programTitle={department.title} />
    </div>
  );
}
