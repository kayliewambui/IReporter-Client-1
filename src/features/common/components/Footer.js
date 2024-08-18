

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from '../../../styling/commons/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}></span>
            <h2 className={styles.logoText}>REPORTER</h2>
          </div>
          <p className={styles.slogan}>Safe • Secure • Impactful</p>
        </div>

        <div className={styles.linksSection}>
          <h3>Quick Links</h3>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/data-security">Data Security</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </div>

        <div className={styles.resourcesSection}>
          <h3>Resources</h3>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h3>Contact Us</h3>
          <p><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> info@ireporter.com</p>
          <p><FontAwesomeIcon icon={faPhone} className={styles.icon} /> (123) 456-7890</p>
        </div>

        <div className={styles.connectSection}>
          <h3>Let's Connect</h3>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
                <span>X</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;