import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './SitemapLink.module.css';

const SitemapLink = ({ link }) => {
  const location = useLocation();
  const isActive = location.pathname === link.path;

  return (
    <Link 
      to={link.path} 
      className={`${styles.link} ${isActive ? styles.active : ''}`}
    >
      <span className={styles.linkIcon}>•</span>
      {link.title}
    </Link>
  );
};

export default SitemapLink;