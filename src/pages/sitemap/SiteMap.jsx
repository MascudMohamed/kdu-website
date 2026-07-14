import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sitemapData, quickLinks } from '../../data/sitemapData';
import SitemapSection from './components/SitemapSection';
import styles from './SiteMap.module.css';

const SiteMap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState(
    sitemapData.reduce((acc, section) => ({ ...acc, [section.id]: true }), {})
  );

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Filter sections based on search
  const filterSections = (sections, term) => {
    if (!term.trim()) return sections;
    
    return sections.reduce((acc, section) => {
      const matchesSection = section.title.toLowerCase().includes(term.toLowerCase());
      const matchingChildren = section.children?.filter(child => 
        child.title.toLowerCase().includes(term.toLowerCase()) ||
        (child.children?.some(grandchild => 
          grandchild.title.toLowerCase().includes(term.toLowerCase())
        ))
      );

      if (matchesSection || matchingChildren?.length > 0) {
        acc.push({
          ...section,
          children: matchingChildren || section.children
        });
      }
      return acc;
    }, []);
  };

  const filteredData = filterSections(sitemapData, searchTerm);

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.active}>Sitemap</span>
        </div>
        <h1 className={styles.pageTitle}>Sitemap</h1>
        <p className={styles.pageDescription}>
          Find everything you need at Kyungdong University. Browse our complete site structure below.
        </p>
      </div>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          {searchTerm && (
            <button 
              className={styles.clearBtn}
              onClick={() => setSearchTerm('')}
            >
              ✕
            </button>
          )}
        </div>
        <span className={styles.searchCount}>
          {filteredData.reduce((acc, section) => acc + (section.children?.length || 0), 0)} pages found
        </span>
      </div>

      {/* Sitemap Grid */}
      <div className={styles.sitemapGrid}>
        {filteredData.map((section) => (
          <SitemapSection
            key={section.id}
            section={section}
            isExpanded={expandedSections[section.id]}
            onToggle={() => toggleSection(section.id)}
            searchTerm={searchTerm}
          />
        ))}
      </div>

      {/* Quick Links Footer */}
      <div className={styles.quickLinksContainer}>
        <h3 className={styles.quickLinksTitle}>📌 Quick Links</h3>
        <div className={styles.quickLinksGrid}>
          {quickLinks.map((link, index) => (
            link.external ? (
              <a
                key={index}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quickLink}
              >
                {link.title}
                <span className={styles.externalIcon}>↗</span>
              </a>
            ) : (
              <Link key={index} to={link.path} className={styles.quickLink}>
                {link.title}
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className={styles.helpSection}>
        <div className={styles.helpContent}>
          <span className={styles.helpIcon}>💬</span>
          <div>
            <h4>Can't find what you're looking for?</h4>
            <p>Visit our <Link to="/contact" className={styles.helpLink}>Contact Page</Link> or use the search bar above.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;