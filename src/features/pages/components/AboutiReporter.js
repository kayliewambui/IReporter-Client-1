import React from 'react';
import styles from '../../../styling/page/AboutiReporter.module.css';

const AboutiReporter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About iReporter</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.sectionDescription}>
          iReporter's mission is to empower citizens to report corruption and issues requiring government intervention, thereby promoting transparency, accountability, and good governance across Africa.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Vision</h2>
        <p className={styles.sectionDescription}>
          Our vision is a Kenya where every citizen's voice is heard, and where governments are responsive, accountable, and free from corruption. We believe that by providing a platform for civic engagement, we can contribute to building a better future for all Africans.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What is iReporter?</h2>
        <p className={styles.sectionDescription}>
          iReporter is a powerful web application that enables any citizen to report corruption and issues that need government intervention. With iReporter, you can:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Easily file reports on corruption and problems that require government action</li>
          <li className={styles.listItem}>Provide key details and attach photos or videos as evidence</li>
          <li className={styles.listItem}>Specify the exact location of the incident</li>
          <li className={styles.listItem}>Track the status of your reports as they are reviewed and acted upon</li>
          <li className={styles.listItem}>Get real-time notifications when the status of your report changes</li>
          <li className={styles.listItem}>Manage all your reports from a convenient user dashboard</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Use iReporter?</h2>
        <p className={styles.sectionDescription}>
          By using iReporter, you become a proactive citizen who contributes to the fight against corruption and the improvement of governance in your community. Your reports help draw attention to issues, prompt action from authorities, and drive positive change.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Join the iReporter Community</h2>
        <p className={styles.sectionDescription}>
          We believe that by working together, citizens and government can solve problems, fight corruption, and build stronger communities. Join the iReporter community today and be part of the solution. Together, we can create a better future for all Africans.
        </p>
      </section>
    </div>
  );
};

export default AboutiReporter;
