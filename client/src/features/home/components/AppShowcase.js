import React from 'react';
import styles from './AppShowcase.module.css';
// import iReporterImage from '../assets/images/ireporter.png'; // 

const  AppShowcase = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Report Anytime, Anywhere!</h2>
      <p className={styles.subtitle}>Your powerful tool for change, right in your pocket.</p>
      
      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          {/* <img src={iReporterImage} alt="iReporter App" className={styles.appImage} /> */}
          <div className={styles.exploreBanner}>
            <h3>EXPLORE IREPORTER NOW</h3>
            <p>Your powerful tool for change, right in your pocket</p>
          </div>
          <p className={styles.websiteUrl}>iReporter.com</p>
        </div>
        
        <div className={styles.featureSection}>
          <div className={styles.feature}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h4>Quick Reporting</h4>
              <p>File detailed reports with photographic evidence in minutes with our user-friendly interface.</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h4>Secure Messaging</h4>
              <p>Communicate safely and anonymously with authorities through end-to-end encrypted channels.</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h4>Real-time Updates</h4>
              <p>Stay informed with live updates on your report's progress.</p>
            </div>
          </div>
          <button className={styles.downloadButton}>
            Download iReporter Now
          </button>
          <p className={styles.downloads}>Over 100,000+ downloads and counting</p>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;