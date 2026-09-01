import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { BRAND } from '../../constants/brand';
import { KDU_CAMPUSES, KDU_KOREAN_PORTAL_URL } from '../../constants/campuses';
import { APPLICATION_FORM_URL } from '../../constants/links';
import Logo from '../common/Logo';
import { useCmsModule } from '../../context/CmsContentContext';
import { CDC_WEBSITE_URL } from '../../data/engagement';
import { UNDERGRADUATE_COURSES } from '../../data/academics/programs';
import { KDU_SOCIAL_LINKS } from '../../constants/social';
import '../../styles/components/Footer.css';

const FOOTER_COLUMNS = {
  'About KDU': [
    { label: 'About KDU Global', path: '/about' },
    { label: 'History', path: '/about', hash: 'history' },
    { label: "President’s Message", path: '/about', hash: 'president' },
    { label: 'University Identity', path: '/about', hash: 'identity' },
    { label: 'Contact Us', path: '/contact' },
  ],
  Campuses: [
    ...KDU_CAMPUSES.map((c) =>
      c.external
        ? { label: c.shortName, href: c.href }
        : { label: `${c.shortName} (this site)`, path: c.href }
    ),
    { label: 'Korean university portal', href: KDU_KOREAN_PORTAL_URL },
  ],
  Academics: [
    ...UNDERGRADUATE_COURSES.map((p) => ({ label: p.shortTitle, path: p.path })),
    { label: 'Graduate Courses', path: '/academics/graduate' },
    { label: 'K-Global Education Centre', path: '/academics/education-centre' },
    { label: 'All Academics', path: '/academics' },
  ],
  Admissions: [
    { label: 'How to Apply', path: '/admissions' },
    { label: 'Requirements', path: '/admissions' },
    { label: 'Tuition & Scholarships', path: '/admissions' },
    { label: 'Open Application', href: APPLICATION_FORM_URL },
  ],
  Engagement: [
    { label: 'Overview', path: '/engagement' },
    { label: 'Academic Collaboration', path: '/engagement/academic-collaboration' },
    { label: 'Industry Partnership', path: '/engagement/industry-partnerships' },
    { label: 'Research Centre', path: '/engagement/research-centre' },
    { label: 'Career Development Centre', href: CDC_WEBSITE_URL, newTab: false },
    { label: 'Community Engagement', path: '/engagement/community-engagement' },
    { label: 'Alumni Relations', path: '/engagement/alumni-relations' },
  ],
  'Quick Links': [
    { label: 'Library', path: '#' },
    { label: 'Academic Calendar', path: '#' },
    { label: 'News', path: '/news-events' },
    { label: 'Student Portal', path: '#' },
  ],
};

const SOCIAL_ICONS = {
  Facebook: FaFacebookF,
  YouTube: FaYoutube,
};

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
              {KDU_SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label];
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    {Icon ? <Icon className="footer__social-svg" aria-hidden="true" /> : s.label}
                  </a>
                );
              })}
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
