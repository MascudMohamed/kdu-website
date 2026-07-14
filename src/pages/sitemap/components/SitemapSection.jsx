import React from 'react';
import { Link } from 'react-router-dom';
import SitemapLink from './SitemapLink';
import styles from './SitemapSection.module.css';

const SitemapSection = ({ section, isExpanded, onToggle, searchTerm }) => {
  const hasChildren = section.children && section.children.length > 0;
  const hasMatchingChildren = searchTerm && hasChildren && 
    section.children.some(child => 
      child.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (child.children?.some(gc => gc.title.toLowerCase().includes(searchTerm.toLowerCase())))
    );

  return (
    <div className={`${styles.section} ${searchTerm && !hasMatchingChildren && !section.title.toLowerCase().includes(searchTerm.toLowerCase()) ? styles.hidden : ''}`}>
      <div className={styles.sectionHeader} onClick={onToggle}>
        <div className={styles.sectionTitleWrapper}>
          <span className={styles.sectionIcon}>{section.icon || '📄'}</span>
          <Link to={section.path} className={styles.sectionTitle}>
            {section.title}
          </Link>
        </div>
        {hasChildren && (
          <button className={styles.toggleBtn} aria-label={isExpanded ? 'Collapse section' : 'Expand section'}>
            <span className={`${styles.toggleIcon} ${isExpanded ? styles.expanded : ''}`}>▶</span>
          </button>
        )}
      </div>

      {hasChildren && isExpanded && (
        <ul className={styles.childrenList}>
          {section.children.map((child) => (
            <li key={child.id} className={styles.childItem}>
              {child.children ? (
                <div className={styles.nestedSection}>
                  <div className={styles.nestedHeader}>
                    <Link to={child.path} className={styles.nestedTitle}>
                      {child.title}
                    </Link>
                  </div>
                  <ul className={styles.nestedList}>
                    {child.children.map((grandchild) => (
                      <li key={grandchild.id} className={styles.nestedItem}>
                        <SitemapLink link={grandchild} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <SitemapLink link={child} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SitemapSection;