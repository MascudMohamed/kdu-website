import { Link } from 'react-router-dom';
import { BRAND } from '../../constants/brand';
import logoSrc from '../../assets/kdu-logo.svg';
import '../../styles/components/Logo.css';

export default function Logo({ variant = 'light', linked = true }) {
  const content = (
    <>
      <img src={logoSrc} alt="" className="logo__crest" width="52" height="65" />
      <span className={`logo__text logo__text--${variant}`}>
        <strong className="logo__university">{BRAND.universityName}</strong>
        <small className="logo__sub">{BRAND.tagline}</small>
      </span>
    </>
  );

  if (linked) {
    return (
      <Link to="/" className="logo" aria-label={`${BRAND.universityName} — ${BRAND.name} home`}>
        {content}
      </Link>
    );
  }

  return <div className="logo">{content}</div>;
}
