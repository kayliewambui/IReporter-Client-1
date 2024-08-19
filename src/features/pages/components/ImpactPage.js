// ImpactPage.js
import React from 'react';
import styles from '../../../styling/page/ImpactPage.module.css';
import schoolImage from '../../../assets/images/school.png';
import roadImage from '../../../assets/images/road.jpg';
import waterImage from '../../../assets/images/water.jpg';

const ImpactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Impact</h1>
      <p className={styles.introduction}>
        At iReporter, we're dedicated to amplifying the voices of citizens and driving meaningful change in our communities. Take a look at some of the real-world impacts our platform has achieved:
      </p>

      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <img src={schoolImage} alt="Education Funds Recovered" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Education Funds Recovered</h2>
          <p className={styles.sectionDescription}>
            Through citizen reporting on iReporter, we were able to recover 10 million dollars that were misappropriated from school budgets. This funding has been redirected to complete much-needed school renovations within just 3 months.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <img src={waterImage} alt="Clean Water Access Restored" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Clean Water Access Restored</h2>
          <p className={styles.sectionDescription}>
            Our users reported issues with the local water infrastructure, which led to a project being revived to restore clean water access to over 5,000 residents who previously lacked this basic necessity.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <img src={roadImage} alt="Road Safety Improved" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Road Safety Improved</h2>
          <p className={styles.sectionDescription}>
            Dangerous road conditions identified through iReporter led to a major infrastructure project that rebuilt roads to proper standards. As a result, traffic accidents in the affected area have decreased by 60%.
          </p>
        </div>
      </section>

      <p className={styles.conclusion}>
        These are just a few examples of how your voice, when amplified through iReporter, can drive transformative change. By continuing to report issues in your community, you become an agent of progress, holding leaders accountable and improving the lives of your fellow citizens.
      </p>

      <button className={styles.callToAction}>Join Us Today</button>
    </div>
  );
};

export default ImpactPage;