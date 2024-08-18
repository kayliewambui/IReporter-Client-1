import React from 'react';
import styles from '../../../styling/home/CTASection.module.css';

const CTASection = () => {
  return (
    <section className={styles.finalCTASection}>
      <div className={styles.container}>
        <p className={styles.empowermentMessage}>
          You have the power to make a difference! Whether you're ready to report or want to learn more, we're here to support you every step of the way.
        </p>
        
        <div className={styles.ctaButtons}>
          <button className={styles.primaryCTA}>
            REPORT NOW
            <span className={styles.ctaSubtext}>Take the first step towards change</span>
          </button>
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.blogSection}>
            <h3>Blog</h3>
            <p>
            Stay informed and inspired with our upcoming blog featuring thought-provoking articles on the fight against corruption. From investigative pieces to personal stories by whistle-blowers, we'll bring you powerful narratives of courage and change.
            </p>
            <p className={styles.meaningfulChange}>Meaningful Change. One Story at a Time. Coming Soon!</p>
            {/* <a href="#read-more" className={styles.readMore}>Read More</a> */}
          </div>

          <div className={styles.joinMovementSection}>
            <h3>Join the Movement: Report Today</h3>
            <p>
              Corruption thrives in the shadows. Seen or Suspect Something? ACT ON IT!
            </p>
            <button className={styles.secondaryCTA}>
              Learn More
              <span className={styles.ctaSubtext}>Discover how IReporter works</span>
            </button>
          </div>
        </div>
        
        <p className={styles.trustReinforcement}>
          Safe • Secure • Impactful
        </p>
        
        <p className={styles.accessibilityNote}>
          Need assistance? Contact our support team 24/7
        </p>
      </div>
    </section>
  );
};

export default CTASection;