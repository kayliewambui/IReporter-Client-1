import React from 'react';
import styles from './AppShowcase.module.css';
import iReporterImage from '../../../assets/images/IreporterMockup.png';

const AppShowcase = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Report Anytime, Anywhere!</h2>
      <p className={styles.mainSubtitle}>Your powerful tool for change, right in your pocket.</p>
      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          <img src={iReporterImage} alt="iReporter App" className={styles.appImage} />
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
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;