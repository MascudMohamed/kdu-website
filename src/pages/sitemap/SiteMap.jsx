import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { sitemapTree } from "../../data/sitemapData";

import SiteMapTree from "../../components/sitemap/SiteMapTree";

import "../../styles/pages/SiteMap.css";

export default function SiteMap() {
  const [search, setSearch] = useState("");

  // -----------------------------
  // Filter Tree Recursively
  // -----------------------------
  function filterNode(node, keyword) {
    if (!keyword) return node;

    const text = keyword.toLowerCase();

    const titleMatch = node.title.toLowerCase().includes(text);

    const children = (node.children || [])
      .map((child) => filterNode(child, keyword))
      .filter(Boolean);

    if (titleMatch || children.length > 0) {
      return {
        ...node,
        children,
      };
    }

    return null;
  }

  const filteredTree = useMemo(() => {
    if (!search.trim()) return sitemapTree;

    return sitemapTree
      .map((node) => filterNode(node, search))
      .filter(Boolean);
  }, [search]);

  return (
    <section className="sitemap-page">

      <div className="container">

        {/* Breadcrumb */}

        <nav className="sitemap-breadcrumb">

          <Link to="/">Home</Link>

          <span>/</span>

          <span>Sitemap</span>

        </nav>

        {/* Hero */}

        <header className="sitemap-header">

          <h1>Sitemap</h1>

          <p>
            Browse every major section of the Kyungdong University
            website from one place.
          </p>

        </header>

        {/* Search */}

        <div className="sitemap-search">

          <input
            type="text"
            placeholder="Search pages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Tree */}

        <SiteMapTree data={filteredTree} />

        {/* Footer */}

        <div className="sitemap-footer">

          <div className="sitemap-footer-card">

            <h3>Need Assistance?</h3>

            <p>
              Can't find what you're looking for?
              Visit our Contact page and we'll help you.
            </p>

            <Link
              className="contact-button"
              to="/contact"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}