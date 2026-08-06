import { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PRIMARY_NAV_LINKS,
  NAV_LINKS,
  ACADEMICS_MEGA_MENU,
  ABOUT_DROPDOWN,
  ENGAGEMENT_DROPDOWN,
  STUDENT_SERVICES_MEGA_MENU,
  ADMISSIONS_MEGA_MENU,
} from '../../constants/navigation';
import { APPLICATION_FORM_URL } from '../../constants/links';
import { useCmsModule } from '../../context/CmsContentContext';
import Logo from '../common/Logo';
import Button from '../common/Button';
import AcademicsMegaMenu from './AcademicsMegaMenu';
import StudentServicesMegaMenu from './StudentServicesMegaMenu';
import AdmissionsMegaMenu from './AdmissionsMegaMenu';
import NavDropdown from './NavDropdown';
import LanguageSwitcher from './LanguageSwitcher';
import '../../styles/components/Navbar.css';

function resolveMegaMenu(path, label = '') {
  if (path === '/academics' || /academic/i.test(label)) return 'academics';
  if (path === '/about' || /about/i.test(label)) return 'about';
  if (path === '/engagement' || /engagement/i.test(label)) return 'engagement';
  if (
    path === '/international-office'
    || path === '/student-services'
    || /student\s*service/i.test(label)
  ) {
    return 'student-services';
  }
  if (path === '/admissions' || /admission/i.test(label)) return 'admissions';
  return false;
}

function MegaPanel({ type, onNavigate }) {
  if (type === 'academics') return <AcademicsMegaMenu onNavigate={onNavigate} />;
  if (type === 'student-services') return <StudentServicesMegaMenu onNavigate={onNavigate} />;
  if (type === 'admissions') return <AdmissionsMegaMenu onNavigate={onNavigate} />;
  if (type === 'about') {
    return (
      <NavDropdown
        title="About Us"
        items={ABOUT_DROPDOWN}
        onNavigate={onNavigate}
        ariaLabel="About Us menu"
      />
    );
  }
  if (type === 'engagement') {
    return (
      <NavDropdown
        title="Engagement"
        items={ENGAGEMENT_DROPDOWN}
        onNavigate={onNavigate}
        ariaLabel="Engagement menu"
      />
    );
  }
  return null;
}

export default function Navbar() {
  const { module: navCms } = useCmsModule('navigation');
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(null);
  const megaRef = useRef(null);
  const megaCloseTimer = useRef(null);

  const openMega = (type) => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
    setMegaOpen(type);
  };

  const scheduleCloseMega = () => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    megaCloseTimer.current = setTimeout(() => setMegaOpen(null), 150);
  };

  const closeMega = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
    setMegaOpen(null);
  };

  const primaryLinks = useMemo(() => {
    const cmsItems = navCms?.items?.filter((item) => item.label && item.path);
    if (!cmsItems?.length) return PRIMARY_NAV_LINKS;
    return cmsItems.map((item) => {
      let label = item.label.trim();
      if (/^education$/i.test(label)) label = 'Academics';
      return {
        label: label.toUpperCase(),
        path: item.path,
        megaMenu: resolveMegaMenu(item.path, label),
      };
    });
  }, [navCms]);

  const mobileLinks = useMemo(() => {
    const cmsItems = navCms?.items?.filter((item) => item.label && item.path);
    if (!cmsItems?.length) return NAV_LINKS.slice(0, 8);
    return cmsItems.map((item) => ({ label: item.label, path: item.path }));
  }, [navCms]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    closeMega();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) closeMega();
    };
    if (megaOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [megaOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMega();
    };
    if (megaOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [megaOpen]);

  useEffect(() => () => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__section navbar__section--left">
          <Logo variant="light" compact />
        </div>

        <div className="navbar__section navbar__section--right">
          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="navbar__links">
              {primaryLinks.map((link) => {
                const isMega = Boolean(link.megaMenu);
                const isThisMegaOpen = megaOpen === link.megaMenu;
                const isCompact =
                  link.megaMenu === 'about'
                  || link.megaMenu === 'engagement'
                  || link.megaMenu === 'admissions'
                  || link.megaMenu === 'student-services';

                return (
                  <li
                    key={`${link.label}-${link.path}`}
                    className={isMega ? 'navbar__item--mega' : ''}
                    ref={isThisMegaOpen ? megaRef : null}
                  >
                    {isMega ? (
                      <>
                        <button
                          type="button"
                          className={`navbar__link navbar__link--mega ${isThisMegaOpen ? 'navbar__link--active' : ''}`}
                          aria-expanded={isThisMegaOpen}
                          aria-haspopup="true"
                          onClick={() => (isThisMegaOpen ? closeMega() : openMega(link.megaMenu))}
                          onMouseEnter={() => openMega(link.megaMenu)}
                          onMouseLeave={scheduleCloseMega}
                          onFocus={() => openMega(link.megaMenu)}
                        >
                          {link.label}
                          <span className="navbar__chevron" aria-hidden="true">▾</span>
                        </button>
                        <AnimatePresence>
                          {isThisMegaOpen && (
                            <motion.div
                              className={`navbar__mega-shell${isCompact ? ' navbar__mega-shell--compact' : ''}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              onMouseEnter={() => openMega(link.megaMenu)}
                              onMouseLeave={scheduleCloseMega}
                            >
                              <MegaPanel type={link.megaMenu} onNavigate={closeMega} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                        }
                        onMouseEnter={closeMega}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="navbar__actions">
            <LanguageSwitcher />
            <Button href={APPLICATION_FORM_URL} variant="primary" size="sm" className="navbar__cta">
              Apply now
            </Button>
            <button
              className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="navbar__mobile"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label="Mobile navigation">
              <p className="navbar__mobile-group">Main</p>
              <ul className="navbar__mobile-links">
                {mobileLinks.map((link) => (
                  <li key={`${link.label}-${link.path}`}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                      }
                      onClick={() => setIsOpen(false)}
                      end={link.path === '/'}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <p className="navbar__mobile-group">Undergraduate Courses</p>
              <ul className="navbar__mobile-links">
                {ACADEMICS_MEGA_MENU.undergraduate.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="navbar__mobile-group">Graduate</p>
              <ul className="navbar__mobile-links">
                {ACADEMICS_MEGA_MENU.graduate.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="navbar__mobile-group">K-Global Education Centre</p>
              <ul className="navbar__mobile-links">
                {ACADEMICS_MEGA_MENU.educationCentre.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="navbar__mobile-group">Admissions</p>
              <ul className="navbar__mobile-links">
                {ADMISSIONS_MEGA_MENU.links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="navbar__mobile-group">About Us</p>
              <ul className="navbar__mobile-links">
                {ABOUT_DROPDOWN.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="navbar__mobile-group">Engagement</p>
              <ul className="navbar__mobile-links">
                {ENGAGEMENT_DROPDOWN.map((link) => (
                  <li key={link.href || link.path}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="navbar__mobile-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.path} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <p className="navbar__mobile-group">Student Services</p>
              <ul className="navbar__mobile-links">
                {STUDENT_SERVICES_MEGA_MENU.links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button href={APPLICATION_FORM_URL} variant="primary" size="lg" onClick={() => setIsOpen(false)}>
              Apply now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
