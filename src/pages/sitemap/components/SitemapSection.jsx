import { Link } from "react-router-dom";
import styles from "./SitemapSection.module.css";

export default function SitemapSection({ 
  item, 
  level, 
  isExpanded, 
  onToggle 
}) {
  const hasChildren = item.children && item.children.length > 0;
  const isExternal = item.external || false;
  
  function getSectionMarker(title) {
    return (title?.trim()[0] || 'P').toUpperCase();
  }

  const marker = getSectionMarker(item.title);

  const renderLink = () => {
    if (isExternal) {
      return (
        <a 
          href={item.path} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.sectionLink}
        >
          {item.title}
          <span className={styles.externalIcon}>↗</span>
        </a>
      );
    }
    return (
      <Link to={item.path} className={styles.sectionLink}>
        {item.title}
      </Link>
    );
  };

  return (
    <div className={`${styles.sitemapSection} ${styles[`level-${level}`]}`}>
      <div 
        className={`${styles.sectionHeader} ${hasChildren ? styles.hasChildren : ''} ${isExpanded ? styles.expanded : ''}`}
        onClick={hasChildren ? onToggle : undefined}
      >
        <div className={styles.sectionInfo}>
          <span className={styles.sectionIcon}>{marker}</span>
          <span className={styles.sectionTitle}>
            {renderLink()}
          </span>
          {hasChildren && (
            <span className={styles.childCount}>
              {item.children.length}
            </span>
          )}
        </div>
        {hasChildren && (
          <button 
            className={`${styles.toggleButton} ${isExpanded ? styles.expanded : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
