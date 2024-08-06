// components/Navbar.js
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>📡</span> IReporter
      </div>
      <ul className={styles.mainNav}>
        <li><a href="#home">HOME</a></li>
        <li><a href="#how-it-works">HOW IT WORKS</a></li>
        <li><a href="#impact">IMPACT</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#about">ABOUT</a></li>
      </ul>
      <div className={styles.userActions}>
        <button className={styles.loginButton}>LOG IN</button>
        <button className={styles.signupButton}>SIGN UP</button>
        <button className={styles.reportNowButton}>REPORT NOW</button>
      </div>
    </nav>
  );
};

export default Navbar;