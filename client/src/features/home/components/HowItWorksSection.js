import React from 'react';
import styles from './HowItWorksSection.module.css';

const Step = ({ emoji, title, description }) => (
  <div className={styles.step}>
    <div className={styles.iconContainer}>
      <div className={styles.icon}>{emoji}</div>
    </div>
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepDescription}>{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Your Step-by-Step Guide to
          <span className={styles.highlight}> Reporting Corruption</span>
        </h2>
        <p className={styles.intro}>
          Corruption affects us all, but together, we can make a difference.<br /><br />
          iReporter empowers you to take a stand for transparency and accountability in just three simple steps.<br /><br />
          Your voice matters. Join the fight for a fairer society and report corruption today!
        </p>
        <div className={styles.stepsContainer}>
          <Step 
            emoji="📱"
            title="Speak Up"
            description="Document the issue using our user-friendly app. Add photos, videos, or location data to strengthen your report."
          />
          <Step 
            emoji="🛡️"
            title="Stay Safe"
            description="Rest easy knowing your report is encrypted and your identity is protected. We prioritize your safety and privacy."
          />
          <Step 
            emoji="📈"
            title="See Change"
            description="Track your report's progress and witness its impact. Be part of the solution as authorities take action."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;