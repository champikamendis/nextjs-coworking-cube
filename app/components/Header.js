// components/Header.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#">
          <img src="/images/co-working.png" alt="Coworking Cube Logo" />
        </a>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/location">Location</Link></li>
          <li><Link href="/plans">Coworking Plans</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
