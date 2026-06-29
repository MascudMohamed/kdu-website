import { Link, Navigate, useOutletContext } from 'react-router-dom';
import { getDepartmentProjects } from '../../data/departments';
import DeptPageShell from '../../components/department/DeptPageShell';
import { deptPath } from '../../data/departments/navigation';
import '../../styles/pages/DepartmentProjects.css';

export default function DepartmentProjectsIndex() {
  const { department } = useOutletContext();
  const projects = getDepartmentProjects(department.slug);
  const base = deptPath(department.slug);

  if (!projects.length) {
    return <Navigate to={department.path} replace />;
  }

  return (
    <DeptPageShell
      department={department}
      pageTitle="Student Projects"
      eyebrow="Showcase"
      lead="Capstone and team projects demonstrating the technical depth and professional readiness of Smart Computing students."
      related={[
        { label: 'Capstone overview', path: `${base}/capstone` },
        { label: 'AI pathway', path: `${base}/pathways/artificial-intelligence` },
        { label: 'Faculty directory', path: `${base}/faculty` },
      ]}
    >
      <div className="dept-projects-grid">
        {projects.map((project) => (
          <article key={project.slug} className="dept-project-card">
            <Link to={`${base}/projects/${project.slug}`} className="dept-project-card__image">
              <img src={project.image} alt="" loading="lazy" />
            </Link>
            <div className="dept-project-card__body">
              <span className="dept-project-card__meta">{project.pathway} · Year {project.year}</span>
              <h3>
                <Link to={`${base}/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.summary}</p>
              <div className="dept-project-card__tech">
                {project.technologies.slice(0, 4).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </DeptPageShell>
  );
}
