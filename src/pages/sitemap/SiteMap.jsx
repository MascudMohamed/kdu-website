import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { sitemapTree } from "../../data/sitemapData";
import SiteMapTree from "../../components/sitemap/SiteMapTree";
import styles from "./SiteMap.module.css";

export default function SiteMap() {
  const [search, setSearch] = useState("");
  const [expandedSections, setExpandedSections] = useState(new Set());

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  // Filter tree recursively
  function filterNode(node, keyword) {
    if (!keyword) return node;

    const text = keyword.toLowerCase();
    const titleMatch = node.title.toLowerCase().includes(text);
    const children = (node.children || [])
      .map((child) => filterNode(child, keyword))
      .filter(Boolean);

    if (titleMatch || children.length > 0) {
      return { ...node, children };
    }
    return null;
  }

  const filteredTree = useMemo(() => {
    if (!search.trim()) return sitemapTree;
    return sitemapTree
      .map((node) => filterNode(node, search))
      .filter(Boolean);
  }, [search]);

  // Count total pages
  const countPages = (nodes) => {
    let count = 0;
    const traverse = (node) => {
      count++;
      if (node.children) {
        node.children.forEach(traverse);
      }
    };
    nodes.forEach(traverse);
    return count;
  };

  const totalPages = useMemo(() => countPages(sitemapTree), []);

  return (
    <section className={styles.sitemapPage}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav className={styles.sitemapBreadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className={styles.separator}>›</span>
          <span className={styles.current}>Sitemap</span>
        </nav>

        {/* Hero Section */}
        <header className={styles.sitemapHeader}>
          <h1>Site Map</h1>
          <p className={styles.subtitle}>
            Explore every section of the university website in one place
          </p>
          <div className={styles.stats}>
            <span className={styles.statItem}>
              <span className={styles.statNumber}>{totalPages}</span>
              <span className={styles.statLabel}>Pages</span>
            </span>
            <span className={styles.statDivider}>|</span>
            <span className={styles.statItem}>
              <span className={styles.statNumber}>{sitemapTree.length}</span>
              <span className={styles.statLabel}>Main Sections</span>
            </span>
          </div>
        </header>

        {/* Search */}
        <div className={styles.sitemapSearch}>
          <div className={styles.searchWrapper}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search pages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            {search && (
              <button 
                className={styles.clearSearch}
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          {search && (
            <p className={styles.searchResults}>
              Found {filteredTree.reduce((acc, node) => {
                let count = 0;
                const traverse = (n) => {
                  count++;
                  if (n.children) n.children.forEach(traverse);
                };
                traverse(node);
                return acc + count;
              }, 0)} matching pages
            </p>
          )}
        </div>

        {/* Tree */}
        <SiteMapTree 
          data={filteredTree} 
          expandedSections={expandedSections}
          onToggleSection={toggleSection}
        />

        {/* Footer */}
        <div className={styles.sitemapFooter}>
          <div className={styles.footerCard}>
            <div className={styles.footerIcon}>🎯</div>
            <h3>Need Help Finding Something?</h3>
            <p>
              Can't locate what you're looking for? Our team is here to assist you.
            </p>
            <Link className={styles.contactButton} to="/contact">
              <span>Contact Us</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}