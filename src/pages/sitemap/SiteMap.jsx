// src/pages/sitemap/SiteMap.jsx

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  sitemapData,
  quickLinks,
} from "../../data/sitemapData";

import SitemapSection from "./components/SitemapSection";

import styles from "./SiteMap.module.css";

export default function SiteMap() {
  const [search, setSearch] = useState("");

  const [expanded, setExpanded] = useState(() => {
    const state = {};

    sitemapData.forEach((section) => {
      state[section.id] = true;
    });

    return state;
  });

  const toggleSection = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const state = {};

    sitemapData.forEach((section) => {
      state[section.id] = true;
    });

    setExpanded(state);
  };

  const collapseAll = () => {
    const state = {};

    sitemapData.forEach((section) => {
      state[section.id] = false;
    });

    setExpanded(state);
  };

  const filteredSections = useMemo(() => {
    if (!search.trim()) return sitemapData;

    const keyword = search.toLowerCase();

    const filterChildren = (children = []) =>
      children.reduce((acc, child) => {
        const titleMatch = child.title
          .toLowerCase()
          .includes(keyword);

        const nested =
          child.children?.length
            ? filterChildren(child.children)
            : [];

        if (titleMatch || nested.length) {
          acc.push({
            ...child,
            children: nested.length
              ? nested
              : child.children,
          });
        }

        return acc;
      }, []);

    return sitemapData.reduce((acc, section) => {
      const sectionMatch = section.title
        .toLowerCase()
        .includes(keyword);

      const children = filterChildren(
        section.children || []
      );

      if (sectionMatch || children.length) {
        acc.push({
          ...section,
          children,
        });
      }

      return acc;
    }, []);
  }, [search]);

  const totalPages = useMemo(() => {
    const countPages = (items) =>
      items.reduce((count, item) => {
        return (
          count +
          1 +
          (item.children
            ? countPages(item.children)
            : 0)
        );
      }, 0);

    return countPages(filteredSections);
  }, [filteredSections]);

  return (
    <main className={styles.page}>
      <div className="container">

        {/* Breadcrumb */}

        <nav className={styles.breadcrumb}>
          <Link to="/">Home</Link>

          <span>/</span>

          <span>Sitemap</span>
        </nav>

        {/* Hero */}

        <header className={styles.hero}>
          <h1>Sitemap</h1>

          <p>
            Browse every major section of the
            Kyungdong University website from
            one place. Use the search below to
            quickly find departments,
            research, engagement pages and
            university services.
          </p>
        </header>

        {/* Search */}

        <section className={styles.toolbar}>

          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>
              🔍
            </span>

            <input
              type="search"
              placeholder="Search pages..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
              >
                ✕
              </button>
            )}
          </div>

          <div className={styles.toolbarRight}>

            <span className={styles.counter}>
              {totalPages} pages
            </span>

            <button
              type="button"
              onClick={expandAll}
            >
              Expand All
            </button>

            <button
              type="button"
              onClick={collapseAll}
            >
              Collapse All
            </button>

          </div>

        </section>

        {/* Sitemap */}

        <section className={styles.grid}>
          {filteredSections.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>No pages found</h3>

              <p>
                No pages matched "<strong>{search}</strong>".
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className={styles.resetButton}
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredSections.map((section) => (
              <SitemapSection
                key={section.id}
                section={section}
                isExpanded={expanded[section.id]}
                onToggle={() =>
                  toggleSection(section.id)
                }
                search={search}
              />
            ))
          )}
        </section>

        {/* Quick Links */}

        <section className={styles.quickLinksSection}>

          <div className={styles.sectionHeading}>
            <h2>Quick Links</h2>

            <p>
              Frequently visited pages across the
              university website.
            </p>
          </div>

          <div className={styles.quickLinksGrid}>

            {quickLinks.map((link) =>

              link.external ? (
                <a
                  key={link.title}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quickLink}
                >
                  <span>{link.title}</span>

                  <span>↗</span>
                </a>
              ) : (
                <Link
                  key={link.title}
                  to={link.path}
                  className={styles.quickLink}
                >
                  <span>{link.title}</span>

                  <span>→</span>
                </Link>
              )

            )}

          </div>

        </section>

        {/* Statistics */}

        <section className={styles.stats}>

          <div className={styles.statCard}>
            <h3>{sitemapData.length}</h3>

            <p>Main Sections</p>
          </div>

          <div className={styles.statCard}>
            <h3>{totalPages}</h3>

            <p>Total Pages</p>
          </div>

          <div className={styles.statCard}>
            <h3>
              {
                sitemapData.reduce(
                  (count, item) =>
                    count +
                    (item.children?.length || 0),
                  0
                )
              }
            </h3>

            <p>Navigation Items</p>
          </div>

        </section>

        {/* Help */}

        <section className={styles.helpSection}>

          <div className={styles.helpCard}>

            <div className={styles.helpIcon}>
              💬
            </div>

            <div className={styles.helpContent}>

              <h2>
                Can't find what you're looking
                for?
              </h2>

              <p>
                If you still can't locate the
                information you need, our team
                will be happy to help.
              </p>

              <div className={styles.helpActions}>

                <Link
                  to="/contact"
                  className={styles.primaryButton}
                >
                  Contact Us
                </Link>

                <Link
                  to="/international-office"
                  className={styles.secondaryButton}
                >
                  International Office
                </Link>

              </div>

            </div>

          </div>

        </section>
      </div>
    </main>
  );
}