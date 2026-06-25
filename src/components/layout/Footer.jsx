import { Link } from 'react-router-dom';
import { BRAND } from '../../constants/brand';
import Logo from '../common/Logo';
import { UNDERGRADUATE_PROGRAMS } from '../../data/academics/programs';
import '../../styles/components/Footer.css';

const FOOTER_COLUMNS = {
  'About KDU': [
    { label: 'Introduction', path: '/about' },
    { label: 'Campus Life', path: '/about' },
    { label: 'International Students', path: '/international-students' },
    { label: 'Contact', path: '/contact' },
  ],
  Academics: [
    ...UNDERGRADUATE_PROGRAMS.map((p) => ({ label: p.shortTitle, path: p.path })),
    { label: 'Graduate Programs', path: '/academics/graduate' },
    { label: 'All Programs', path: '/academics' },
  ],
  Admissions: [
    { label: 'How to Apply', path: '/admissions' },
    { label: 'Requirements', path: '/admissions' },
    { label: 'Tuition & Scholarships', path: '/admissions' },
    { label: 'Open Application', path: '/admissions' },
  ],
  'Quick Links': [
    { label: 'Library', path: '#' },
    { label: 'Academic Calendar', path: '#' },
    { label: 'News', path: '/news-events' },
    { label: 'Student Portal', path: '#' },
  ],
};

const SOCIAL = [
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo variant="light" linked />
            <p className="footer__description">
              {BRAND.campus} — preparing global leaders through academic excellence,
              innovation, and international collaboration.
            </p>
            <div className="footer__social" aria-label="Social media">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <span className="footer__social-icon" aria-hidden="true">
                    {s.label[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_COLUMNS).map(([title, links]) => (
            <div key={title} className="footer__column">
              <h4>{title}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} {BRAND.universityName}. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Use</Link>
            <Link to="#">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
