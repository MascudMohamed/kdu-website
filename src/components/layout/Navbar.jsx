import { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PRIMARY_NAV_LINKS, NAV_LINKS, ACADEMICS_MEGA_MENU } from '../../constants/navigation';
import { APPLICATION_FORM_URL } from '../../constants/links';
import { useCmsModule } from '../../context/CmsContentContext';
import Logo from '../common/Logo';
import Button from '../common/Button';
import AcademicsMegaMenu from './AcademicsMegaMenu';
import '../../styles/components/Navbar.css';

export default function Navbar() {
  const { module: navCms } = useCmsModule('navigation');
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef(null);
  const megaCloseTimer = useRef(null);

  const openMega = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    megaCloseTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const closeMega = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
    setMegaOpen(false);
  };

  const primaryLinks = useMemo(() => {
    const cmsItems = navCms?.items?.filter((item) => item.label && item.path);
    if (!cmsItems?.length) return PRIMARY_NAV_LINKS;
    return cmsItems.map((item) => ({
      label: item.label.toUpperCase(),
      path: item.path,
      megaMenu: item.path === '/academics' ? 'academics' : false,
    }));
  }, [navCms]);

  const mobileLinks = useMemo(() => {
    const cmsItems = navCms?.items?.filter((item) => item.label && item.path);
    if (!cmsItems?.length) return NAV_LINKS.slice(0, 7);
    return cmsItems.map((item) => ({ label: item.label, path: item.path }));
  }, [navCms]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    closeMega();
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        closeMega();
      }
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
        {/* LEFT SECTION - Logo */}
        <div className="navbar__section navbar__section--left">
          <Logo variant="light" />
        </div>

        {/* RIGHT SECTION - Navigation + Actions */}
        <div className="navbar__section navbar__section--right">
          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="navbar__links">
              {primaryLinks.map((link) => (
                <li
                  key={link.path}
                  className={link.megaMenu === 'academics' ? 'navbar__item--mega' : ''}
                  ref={link.megaMenu === 'academics' ? megaRef : null}
                >
                  {link.megaMenu === 'academics' ? (
                    <>
                      <button
                        type="button"
                        className={`navbar__link navbar__link--mega ${megaOpen ? 'navbar__link--active' : ''}`}
                        aria-expanded={megaOpen}
                        aria-haspopup="true"
                        onClick={() => (megaOpen ? closeMega() : openMega())}
                        onMouseEnter={openMega}
                        onMouseLeave={scheduleCloseMega}
                        onFocus={openMega}
                      >
                        {link.label}
                        <span className="navbar__chevron" aria-hidden="true">▾</span>
                      </button>
                      <AnimatePresence>
                        {megaOpen && (
                          <motion.div
                            className="navbar__mega-shell"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            onMouseEnter={openMega}
                            onMouseLeave={scheduleCloseMega}
                          >
                            <AcademicsMegaMenu onNavigate={closeMega} />
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
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <Button href={APPLICATION_FORM_URL} variant="primary" size="sm" className="navbar__cta">
              Open application form
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
                  <li key={link.path}>
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
              <p className="navbar__mobile-group">Undergraduate</p>
              <ul className="navbar__mobile-links">
                {ACADEMICS_MEGA_MENU.undergraduate.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="navbar__mobile-group">Graduate &amp; International</p>
              <ul className="navbar__mobile-links">
                {ACADEMICS_MEGA_MENU.graduate.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/international-office" className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                    International Office
                  </Link>
                </li>
              </ul>
            </nav>
            <Button href={APPLICATION_FORM_URL} variant="primary" size="lg" onClick={() => setIsOpen(false)}>
              Open application form
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}