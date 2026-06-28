import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PRIMARY_NAV_LINKS, NAV_LINKS } from '../../constants/navigation';
import Logo from '../common/Logo';
import Button from '../common/Button';
import AcademicsMegaMenu from './AcademicsMegaMenu';
import '../../styles/components/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    if (megaOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [megaOpen]);

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
              {PRIMARY_NAV_LINKS.map((link) => (
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
                        onClick={() => setMegaOpen(!megaOpen)}
                        onMouseEnter={() => setMegaOpen(true)}
                      >
                        {link.label}
                        <span className="navbar__chevron" aria-hidden="true">▾</span>
                      </button>
                      <AnimatePresence>
                        {megaOpen && (
                          <div onMouseLeave={() => setMegaOpen(false)}>
                            <AcademicsMegaMenu onNavigate={() => setMegaOpen(false)} />
                          </div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <Button to="/admissions" variant="primary" size="sm" className="navbar__cta">
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
                {NAV_LINKS.slice(0, 7).map((link) => (
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
                {NAV_LINKS.slice(7, 10).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="navbar__mobile-group">Graduate</p>
              <ul className="navbar__mobile-links">
                <li>
                  <Link to="/academics/graduate" className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                    Graduate Programs
                  </Link>
                </li>
              </ul>
            </nav>
            <Button to="/admissions" variant="primary" size="lg" onClick={() => setIsOpen(false)}>
              Open application form
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}