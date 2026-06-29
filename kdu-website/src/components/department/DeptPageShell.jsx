import { Link } from 'react-router-dom';
import Breadcrumb from '../common/Breadcrumb';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptPageShell.css';

export default function DeptPageShell({
  department,
  pageTitle,
  eyebrow,
  lead,
  breadcrumbs,
  children,
  related = [],
}) {
  const crumbs = breadcrumbs || [
    { label: 'Home', path: '/' },
    { label: 'Academics', path: '/academics' },
    { label: department.shortTitle || department.title, path: department.path },
    { label: pageTitle },
  ];

  return (
    <div className="dept-page-shell">
      <header className="dept-page-shell__header">
        <div className="container">
          <Breadcrumb items={crumbs} />
          {eyebrow && <span className="dept-page-shell__eyebrow">{eyebrow}</span>}
          <h1>{pageTitle}</h1>
          {lead && <p className="dept-page-shell__lead">{lead}</p>}
        </div>
      </header>
      <div className="dept-page-shell__body">
        <div className="container">
          {children}
          {related.length > 0 && (
            <aside className="dept-page-shell__related" aria-label="Related pages">
              <h2>Continue exploring</h2>
              <ul>
                {related.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="dept-link-arrow">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
