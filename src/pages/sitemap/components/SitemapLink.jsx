import { Link, useLocation } from "react-router-dom";
import styles from "./SitemapLink.module.css";

export default function SitemapLink({ item, level = 0 }) {
  const location = useLocation();
  
  const isActive = !item.external && 
    location.pathname === item.path;

  const isExternal = item.external || false;

  if (isExternal) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.sitemapLink} ${styles.external} ${isActive ? styles.active : ''}`}
      >
        <span className={styles.linkIndicator}>•</span>
        <span className={styles.linkText}>{item.title}</span>
        <span className={styles.externalBadge}>↗</span>
      </a>
    );
  }

  return (
    <Link
      to={item.path}
      className={`${styles.sitemapLink} ${isActive ? styles.active : ''}`}
    >
      <span className={styles.linkIndicator}>•</span>
      <span className={styles.linkText}>{item.title}</span>
      {item.description && (
        <span className={styles.linkDescription}>{item.description}</span>
      )}
    </Link>
  );
}