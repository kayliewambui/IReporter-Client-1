// components/Hero.js
import React from 'react';
import styles from './Hero.module.css';
import Navbar from '../../common/components/Navbar';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.aiBadge}>Safe • Secure • Impactful</div>
          <h1 className={styles.title}>
            Speak Up.<br />
            Stay Safe.<br />
            See Change.
          </h1>
          <p className={styles.subtitle}>
            Witness Injustice? Your Report Can Change Lives.
          </p>
          <p className={styles.description}>
            Take a bold stand against corruption, bribery, fraud
            or any injustice today.
          </p>
          <button className={styles.ctaButton}>REPORT NOW</button>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.reportVisualization}>
            {/* visualization component for later to be added */}
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span>100%</span>
              <span>Anonymous</span>
            </div>
            <div className={styles.statCard}>
              <span>10,000+</span>
              <span>Reports Resolved</span>
            </div>
            <div className={styles.statCard}>
              <span>24/7</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



