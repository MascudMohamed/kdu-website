import { Link } from 'react-router-dom';
import { BRAND } from '../../constants/brand';
import { APPLICATION_FORM_URL } from '../../constants/links';
import Logo from '../common/Logo';
import { useCmsModule } from '../../context/CmsContentContext';
import { CDC_WEBSITE_URL } from '../../data/engagement';
import { UNDERGRADUATE_PROGRAMS } from '../../data/academics/programs';
import '../../styles/components/Footer.css';

const FOOTER_COLUMNS = {
  'About KDU': [
    { label: 'Introduction', path: '/about' },
    { label: 'Campus Life', path: '/about' },
    { label: 'International Students', path: '/international-students' },
    { label: 'International Office', path: '/international-office' },
    { label: 'Public Events', path: '/international-office', hash: 'public-events' },
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
    { label: 'Open Application', href: APPLICATION_FORM_URL },
  ],
  Engagement: [
    { label: 'Overview', path: '/engagement' },
    { label: 'Community Engagement', path: '/engagement/community-engagement' },
    { label: 'Career Development Center', href: CDC_WEBSITE_URL, newTab: false },
    { label: 'Industry Partnerships', path: '/engagement/industry-partnerships' },
    { label: 'Exchange Programs', path: '/engagement/exchange-programs' },
    { label: 'Alumni Relations', path: '/engagement/alumni-relations' },
    { label: 'Student Clubs', path: '/engagement/clubs' },
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
  const { module: cms } = useCmsModule('footer');
  const year = new Date().getFullYear();
  const tagline = cms?.tagline
    || `${BRAND.campus} — preparing global leaders through academic excellence, innovation, and international collaboration.`;
  const copyright = cms?.copyright || `© ${year} ${BRAND.universityName}. All rights reserved.`;
  const cmsLinks = cms?.links?.filter((l) => l.label && l.url) ?? [];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo variant="light" linked />
            <p className="footer__description">{tagline}</p>
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
                    {link.href ? (
                      <a
                        href={link.href}
                        {...(link.newTab === false
                          ? {}
                          : { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.hash ? `${link.path}#${link.hash}` : link.path}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>{copyright}</p>
          <div className="footer__legal">
            {cmsLinks.length > 0 ? (
              cmsLinks.map((link) => (
                link.url.startsWith('http') ? (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} to={link.url}>{link.label}</Link>
                )
              ))
            ) : (
              <>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms of Use</Link>
                <Link to="#">Accessibility</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
