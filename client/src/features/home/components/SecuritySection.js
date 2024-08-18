
import React from 'react';
import { MdPrivacyTip, MdLock, MdShield, MdVerifiedUser, MdCheckCircle } from 'react-icons/md';
import styles from './SecuritySection.module.css'

import badge1 from '../../../assets/images/kdpa.jpg';
import badge2 from '../../../assets/images/gdpr.jpg';
import badge3 from '../../../assets/images/securityaudit.png';


const SecuritySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Your Security is Our Priority</h2>
        <p className={styles.subtitle}>
          IReporter with confidence. We've got you covered. Reporter is designed with your safety and privacy in mind.
        </p>

        <div className={styles.featuresGrid}>
          <div className={styles.featureColumn}>
            <SecurityFeature
              icon={<MdPrivacyTip size={24} />}
              title="Anonymity Assured"
              description="Your identity remains protected. Report without fear of exposure."
            />
            <SecurityFeature
              icon={<MdVerifiedUser size={24} />}
              title="Verified Authority Access"
              description="Only vetted officials can access report details, ensuring proper handling."
            />
          </div>
          <div className={styles.featureColumn}>
            <SecurityFeature
              icon={<MdLock size={24} />}
              title="End-to-End Encryption"
              description="Your data is encrypted from the moment you submit until it reaches the authorities."
            />
            <SecurityFeature
              icon={<MdCheckCircle size={24} />}
              title="Industry-Leading Compliance"
              description="We adhere to the strictest data protection regulations, including the Kenya Data Protection Act, GDPR, to safeguard your information."
            />
          </div>
          <div className={styles.featureColumn}>
            <SecurityFeature
              icon={<MdShield size={24} />}
              title="Secure Data Handling"
              description="We follow strict data protection protocols to safeguard your information."
            />
          </div>
        </div>

        <div className={styles.trustBadgesContainer}>
          <h3 className={styles.title}>Certified Security & Compliance</h3>
          <p className={styles.subtitle}>
            Your information is protected by industry-leading security standards and compliance certifications.
          </p>

           <div className={styles.trustBadges}>
            <TrustBadge image={badge1} label="ISO 27001 Certified" />
            <TrustBadge image={badge2} label="GDPR Compliant" />
            <TrustBadge image={badge3} label="Regular Security Audits" />
          </div>


        </div>

        <p className={styles.reassurance}>
          We understand the risks you take in speaking up. That's why we've implemented state-of-the-art security measures to protect your identity and data. Your courage deserves our utmost commitment to your safety.
        </p>
      </div>
    </section>
  );
};

const SecurityFeature = ({ icon, title, description }) => (
  <div className={styles.feature}>
    <div className={styles.featureIcon}>
      {icon}
    </div>
    <div className={styles.featureContent}>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const TrustBadge = ({ image, label }) => (
  <div className={styles.trustBadge}>
    <img src={image} alt={label} className={styles.trustBadgeImage} />
    <span>{label}</span>
  </div>
);

export default SecuritySection;