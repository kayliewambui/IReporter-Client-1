// components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../../styling/commons/Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>📡</span> IReporter
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${styles.navContent} ${isMenuOpen ? styles.active : ''}`}>
        <ul className={styles.mainNav}>
          <li><Link to="/" className={location.pathname === '/' ? styles.active : ''}>HOME</Link></li>
          <li><Link to="/how-it-works" className={location.pathname === '/how-it-works' ? styles.active : ''}>HOW IT WORKS</Link></li>
          <li><Link to="/impact" className={location.pathname === '/impact' ? styles.active : ''}>IMPACT</Link></li>
          <li><Link to="/data-security" className={location.pathname === '/data-security' ? styles.active : ''}>DATA SECURITY</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>ABOUT</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>CONTACT</Link></li>
        </ul>
        <div className={styles.userActions}>
          <Link to="/login">
            <button className={styles.loginButton}>LOG IN</button>
          </Link>
          <Link to="/signup">
            <button className={styles.signupButton}>SIGN UP</button>
          </Link>
          <Link to="/login">
            <button className={styles.reportNowButton}>REPORT NOW</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;