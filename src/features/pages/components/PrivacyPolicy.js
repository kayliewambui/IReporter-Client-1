import React from 'react';
import styles from '../../../styling/page/PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>iReporter Privacy Policy</h2>
      <p className={styles.introduction}>
        At iReporter, we are committed to protecting the privacy and security of our users. This Privacy Policy explains how we collect, use, and safeguard your information when you use our web application. By using iReporter, you consent to the practices described in this policy.
      </p>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Information We Collect</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4 className={styles.itemTitle}>Personal Information</h4>
            <p className={styles.itemDescription}>
              When you create an account, we collect your name, email address, and other contact information you provide.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.itemTitle}>Incident Reports</h4>
            <p className={styles.itemDescription}>
              When you file a report, we collect the information you provide, including the title, description, location, photos, and videos related to the incident.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.itemTitle}>Location Data</h4>
            <p className={styles.itemDescription}>
              If you choose to provide location information for an incident report, we collect the latitude and longitude coordinates.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.itemTitle}>Usage Information</h4>
            <p className={styles.itemDescription}>
              We may collect information about how you use iReporter, such as your actions on the site, pages viewed, and the dates and times of your visits.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>How We Use Your Information</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4 className={styles.itemTitle}>Provide and Improve the Service</h4>
            <p className={styles.itemDescription}>
              We use your information to deliver iReporter's features, process your reports, communicate with you about your reports, and improve the application.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.itemTitle}>Communication</h4>
            <p className={styles.itemDescription}>
              We use your email address to send you notifications about the status of your reports and other important updates.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.itemTitle}>Legal Compliance</h4>
            <p className={styles.itemDescription}>
              We may use or disclose your information as required by law, such as to comply with a subpoena or similar legal process.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Data Protection Act (Kenya) 2019</h3>
        <p className={styles.sectionDescription}>
          All data collected by iReporter is governed under the Data Protection Act (Kenya) 2019. This means that we adhere to the principles of data protection outlined in the Act, which include:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.itemDescription}>
              Processing of personal data must be lawful, fair and transparent.
            </p>
          </li>
          <li className={styles.listItem}>
            <p className={styles.itemDescription}>
              Personal data must be collected for explicit, specified and legitimate purposes and not processed in a manner incompatible with those purposes.
            </p>
          </li>
          <li className={styles.listItem}>
            <p className={styles.itemDescription}>
              Personal data must be adequate, relevant, and limited to what is necessary for the purposes for which it is processed.
            </p>
          </li>
          <li className={styles.listItem}>
            <p className={styles.itemDescription}>
              Personal data must be accurate and kept up to date.
            </p>
          </li>
          <li className={styles.listItem}>
            <p className={styles.itemDescription}>
              Personal data must be kept for no longer than is necessary for the purposes for which it is processed.
            </p>
          </li>
          <li className={styles.listItem}>
            <p className={styles.itemDescription}>
              Personal data must be processed in a manner that ensures appropriate security of the personal data.
            </p>
          </li>
        </ul>
        <p className={styles.sectionDescription}>
          As per the Act, you have the right to access, rectify, erase, and restrict the processing of your personal data. If you wish to exercise any of these rights, please contact us using the information provided below.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Information Sharing</h3>
        <p className={styles.sectionDescription}>
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4 className={styles.itemTitle}>Authorities and the Public</h4>
            <p className={styles.itemDescription}>
              The incident reports you file, including the details and supporting evidence, will be shared with the relevant authorities and may be made publicly accessible to promote transparency and accountability.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.itemTitle}>Service Providers</h4>
            <p className={styles.itemDescription}>
              We may share your information with trusted third parties who assist us in operating iReporter, conducting our business, or providing services to you, as long as they agree to keep this information confidential.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Data Security</h3>
        <p className={styles.sectionDescription}>
          We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Your Choices</h3>
        <p className={styles.sectionDescription}>
          You may update, correct, or delete your account information at any time by logging into your account. You may also contact us to request access to, correct, or delete any personal information you have provided to us.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Changes to This Policy</h3>
        <p className={styles.sectionDescription}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of the policy.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Contact Us</h3>
        <p className={styles.sectionDescription}>
          If you have any questions about this Privacy Policy, please contact us at privacy@ireporter.org.
        </p>
      </section>

      <p className={styles.consent}>
        By using iReporter, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use iReporter.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
