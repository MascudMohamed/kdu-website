import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import DeptHeroV2 from '../../components/department/DeptHeroV2';
import DeptWhyProgram from '../../components/department/DeptWhyProgram';
import DeptNewsEditorial from '../../components/department/DeptNewsEditorial';
import DeptAdmissionsCTA from '../../components/department/DeptAdmissionsCTA';
import DeptContact from '../../components/department/DeptContact';
import { deptPath } from '../../data/departments/navigation';
import { getDepartmentProjects } from '../../data/departments';
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

  const exploreByDept = {
    'smart-computing': [
      {
        title: 'Academic programme',
        description: 'Understand the degree, how you learn, and your semester-by-semester progression.',
        links: [
          { label: 'Programme overview', path: `${base}/programme`, desc: 'Degree structure and graduate attributes' },
          { label: 'Learning experience', path: `${base}/learning-experience`, desc: 'Studios, labs, and project-based learning' },
          { label: 'Curriculum', path: `${base}/curriculum`, desc: 'Interactive semester roadmap' },
        ],
      },
      {
        title: 'Specialization pathways',
        description: 'Choose your direction from year three.',
        links: [
          { label: 'Software Engineering', path: `${base}/pathways/software-engineering` },
          { label: 'Artificial Intelligence', path: `${base}/pathways/artificial-intelligence` },
          { label: 'Cybersecurity', path: `${base}/pathways/cybersecurity` },
          { label: 'Data Science', path: `${base}/pathways/data-science` },
          { label: 'Cloud Computing', path: `${base}/pathways/cloud-computing` },
        ],
      },
      {
        title: 'Research & industry',
        links: [
          { label: 'Research overview', path: `${base}/research` },
          { label: 'AI Research Lab', path: `${base}/research/ai-lab` },
          { label: 'Student projects', path: `${base}/projects` },
          { label: 'Internships', path: `${base}/internships` },
          { label: 'Graduate employment', path: `${base}/employment` },
        ],
      },
    ],
    'international-business-administration': [
      {
        title: 'Academic programme',
        links: [
          { label: 'Programme overview', path: `${base}/programme` },
          { label: 'Global curriculum', path: `${base}/curriculum` },
          { label: 'Career outcomes', path: `${base}/careers` },
        ],
      },
      {
        title: 'Specializations',
        links: [
          { label: 'International Trade', path: `${base}/international-trade` },
          { label: 'Marketing', path: `${base}/marketing` },
          { label: 'Entrepreneurship', path: `${base}/entrepreneurship` },
          { label: 'Finance', path: `${base}/finance` },
          { label: 'Supply Chain', path: `${base}/supply-chain` },
        ],
      },
      {
        title: 'Global & applied learning',
        links: [
          { label: 'Exchange programme', path: `${base}/exchange` },
          { label: 'Consulting projects', path: `${base}/consulting` },
          { label: 'Corporate partnerships', path: `${base}/partnerships` },
          { label: 'Alumni stories', path: `${base}/alumni` },
        ],
      },
    ],
    'english-for-academic-purposes': [
      {
        title: 'Your pathway',
        links: [
          { label: 'Learning levels', path: `${base}/levels` },
          { label: 'Placement process', path: `${base}/placement` },
          { label: 'Completion requirements', path: `${base}/completion` },
          { label: 'Degree pathways', path: `${base}/pathways` },
        ],
      },
      {
        title: 'Core skills',
        links: [
          { label: 'Academic Writing', path: `${base}/academic-writing` },
          { label: 'Academic Speaking', path: `${base}/academic-speaking` },
          { label: 'Listening', path: `${base}/listening` },
          { label: 'Reading', path: `${base}/reading` },
        ],
      },
      {
        title: 'Support & community',
        links: [
          { label: 'Student support', path: `${base}/student-support` },
          { label: 'University preparation', path: `${base}/university-preparation` },
          { label: 'Korean university life', path: `${base}/korean-university-life` },
          { label: 'Learning resources', path: `${base}/resources` },
        ],
      },
    ],
  };

  const sections = exploreByDept[slug] || [];

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
          {slug !== 'english-for-academic-purposes' && (
            <Link to={`${base}/${slug === 'smart-computing' ? 'employment' : 'careers'}`}>
              {slug === 'smart-computing' ? 'Graduate employment' : 'Career outcomes'} →
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
