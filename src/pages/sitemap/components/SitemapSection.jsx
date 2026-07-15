// src/pages/sitemap/components/SitemapSection.jsx

import { Link } from "react-router-dom";
import SitemapLink from "./SitemapLink";
import styles from "./SitemapSection.module.css";

export default function SitemapSection({
  section,
  isExpanded,
  onToggle,
}) {
  const hasChildren =
    Array.isArray(section.children) &&
    section.children.length > 0;

  const renderChildren = (items, level = 0) => {
    return (
      <ul
        className={
          level === 0
            ? styles.children
            : styles.nestedChildren
        }
      >
        {items.map((item) => (
          <li key={item.id}>
            {item.children?.length ? (
              <div className={styles.nestedSection}>
                <div className={styles.nestedHeader}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.nestedTitle}
                    >
                      {item.title}
                      <span className={styles.external}>
                        ↗
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={styles.nestedTitle}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>

                {renderChildren(
                  item.children,
                  level + 1
                )}
              </div>
            ) : (
              <SitemapLink item={item} />
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <article className={styles.section}>
      <header
        className={styles.header}
        onClick={hasChildren ? onToggle : undefined}
      >
        <div className={styles.left}>
          <span className={styles.icon}>
            {section.icon || "📄"}
          </span>

          {section.external ? (
            <a
              href={section.path}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.title}
            >
              {section.title}
            </a>
          ) : (
            <Link
              to={section.path}
              className={styles.title}
            >
              {section.title}
            </Link>
          )}
        </div>

        {hasChildren && (
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={isExpanded}
            aria-label={
              isExpanded
                ? "Collapse section"
                : "Expand section"
            }
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          >
            <span
              className={`${styles.arrow} ${
                isExpanded
                  ? styles.expanded
                  : ""
              }`}
            >
              ▾
            </span>
          </button>
        )}
      </header>

      {hasChildren && isExpanded && (
        <div className={styles.content}>
          {renderChildren(section.children)}
        </div>
      )}
    </article>
  );
}