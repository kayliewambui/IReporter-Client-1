

// HowiReporterWorks.js
import React from 'react';
import styles from '../../../styling/page/HowiReporterWorks.module.css';

const HowiReporterWorks = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How iReporter Works</h1>
      <p className={styles.description}>
        iReporter is designed to be user-friendly and intuitive, making it easy for any citizen to report corruption or issues that need government intervention. Here's a step-by-step guide on how to use iReporter:
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Create an Account</h2>
        <p className={styles.sectionDescription}>
          To get started, sign up for a free iReporter account. Simply provide your name, email address, and create a secure password. You'll receive a confirmation email to verify your account.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. File a Report</h2>
        <p className={styles.sectionDescription}>
          Once you're logged in, you can file a report by following these steps:
        </p>
        <ol className={styles.list}>
          <li className={styles.listItem}>
            <h3 className={styles.itemTitle}>Select the type of report</h3>
            <p className={styles.itemDescription}>
              - "Red Flag" for incidents related to corruption
              - "Intervention" for issues that require government action, such as infrastructure problems
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.itemTitle}>Provide details</h3>
            <p className={styles.itemDescription}>
              Provide a title and detailed description of the incident or issue, specify the location by entering the latitude and longitude coordinates, and attach any relevant photos or videos to support your report.
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.itemTitle}>Review and submit</h3>
            <p className={styles.itemDescription}>
              Review your report and submit it.
            </p>
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Track Your Reports</h2>
        <p className={styles.sectionDescription}>
          After submitting your report, you can track its status from your user dashboard. There are three possible status updates:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h3 className={styles.itemTitle}>"Under Investigation"</h3>
            <p className={styles.itemDescription}>
              The report is being reviewed and investigated by the relevant authorities.
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.itemTitle}>"Resolved"</h3>
            <p className={styles.itemDescription}>
              The issue has been addressed or the case has been closed.
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.itemTitle}>"Rejected"</h3>
            <p className={styles.itemDescription}>
              The report has been determined to be a false claim or lacks sufficient evidence.
            </p>
          </li>
        </ul>
        <p className={styles.sectionDescription}>
          You'll receive real-time email notifications whenever the status of your report changes, so you can stay informed about the progress.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Edit or Delete Reports</h2>
        <p className={styles.sectionDescription}>
          If your report hasn't been marked as "Under Investigation", "Resolved", or "Rejected", you have the option to edit or delete it from your user dashboard. This allows you to make corrections or provide additional information as needed.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Engage with the iReporter Community</h2>
        <p className={styles.sectionDescription}>
          iReporter is not just a reporting tool, but also a community of engaged citizens working towards transparency and accountability. Engage with other users, share your experiences, and learn about the impact of collective action.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Security and Privacy</h2>
        <p className={styles.sectionDescription}>
          We take the security and privacy of your information seriously. iReporter implements industry-standard security measures to protect your data, and we never share your personal information with third parties without your explicit consent. For more details, please review our Privacy Policy.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Get Started</h2>
        <p className={styles.sectionDescription}>
          Ready to make a difference? Sign up for iReporter today and start reporting issues that matter to you and your community. Together, we can promote transparency, fight corruption, and drive positive change across Africa.
        </p>
      </section>
    </div>
  );
};

export default HowiReporterWorks;





