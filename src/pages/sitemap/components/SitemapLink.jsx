// src/pages/sitemap/components/SitemapLink.jsx

import { Link, useLocation } from "react-router-dom";
import styles from "./SitemapLink.module.css";

export default function SitemapLink({ item }) {
  const location = useLocation();

  const isActive =
    !item.external &&
    (location.pathname === item.path ||
      location.pathname.startsWith(`${item.path}/`));

  if (item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span className={styles.bullet}>•</span>

        <span className={styles.text}>
          {item.title}
        </span>

        <span className={styles.external}>
          ↗
        </span>
      </a>
    );
  }

  return (
    <Link
      to={item.path}
      className={`${styles.link} ${
        isActive ? styles.active : ""
      }`}
    >
      <span className={styles.bullet}>
        •
      </span>

      <span className={styles.text}>
        {item.title}
      </span>
    </Link>
  );
}