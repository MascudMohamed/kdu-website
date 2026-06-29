import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom';
import { getDepartmentProject } from '../../data/departments';
import DeptPageShell from '../../components/department/DeptPageShell';
import { deptPath } from '../../data/departments/navigation';
import '../../styles/pages/DepartmentProjects.css';

export default function DepartmentProjectDetail() {
  const { department } = useOutletContext();
  const { projectSlug } = useParams();
  const project = getDepartmentProject(department.slug, projectSlug);
  const base = deptPath(department.slug);

  if (!project) {
    return <Navigate to={`${base}/projects`} replace />;
  }

  return (
    <DeptPageShell
      department={department}
      pageTitle={project.title}
      eyebrow={`${project.pathway} · Year ${project.year}`}
      lead={project.summary}
      related={[
        { label: 'All projects', path: `${base}/projects` },
        { label: 'Supervisor profile', path: `${base}/faculty/${project.supervisorSlug}` },
        { label: 'Technology stack', path: `${base}/technology-stack` },
      ]}
    >
      <div className="dept-project-detail">
        <img src={project.image} alt="" className="dept-project-detail__hero" />
        <div className="dept-project-detail__content">
          <p className="dept-prose">{project.description}</p>

          <div className="dept-project-detail__block">
            <h3>Technologies used</h3>
            <ul className="dept-project-detail__tech">
              {project.technologies.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>

          <div className="dept-project-detail__block">
            <h3>Learning outcomes</h3>
            <ul>{project.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
          </div>

          <div className="dept-project-detail__meta">
            <p><strong>Supervisor:</strong>{' '}
              <Link to={`${base}/faculty/${project.supervisorSlug}`}>{project.supervisor}</Link>
            </p>
            <p><strong>Team:</strong> {project.team.join(', ')}</p>
          </div>

          <div className="dept-project-detail__links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="dept-link-arrow">
              View on GitHub
            </a>
            {project.demo && project.demo !== '#' && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="dept-link-arrow">
                Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </DeptPageShell>
  );
}
