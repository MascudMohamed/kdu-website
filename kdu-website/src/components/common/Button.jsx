import { Link } from 'react-router-dom';
import '../../styles/components/Button.css';

const VARIANTS = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  outline: 'btn--outline',
  ghost: 'btn--ghost',
  white: 'btn--white',
};

const SIZES = {
  sm: 'btn--sm',
  md: 'btn--md',
  lg: 'btn--lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `btn ${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
