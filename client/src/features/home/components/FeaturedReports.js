import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaWater, FaRoad } from 'react-icons/fa';
import styles from './FeaturedReports.module.css';

const FeaturedReports = () => {
  const reports = [
    {
      title: 'Education Funds Recovered',
      icon: <FaGraduationCap />,
      image: '/path/to/education-image.png',
      description: '10 million recovered and redirected. School renovation completed in 3 months',
      link: '/impact/education'
    },
    {
      title: 'Clean Water Access Restored',
      icon: <FaWater />,
      image: '/path/to/water-image.png',
      description: 'Project revived. Clean water now reaches 5,000 residents.',
      link: '/impact/water'
    },
    {
      title: 'Road Safety Improved',
      icon: <FaRoad />,
      image: '/path/to/road-image.png',
      description: 'Roads rebuilt to proper standards. Traffic accidents decreased by 60%.',
      link: '/impact/roads'
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Amplifying Voices, Driving Change</h2>
      <p className={styles.subtitle}>
        Corruption undermines trust, erodes economic progress, and hinders social development. See how your reports are transforming communities.
      </p>
      
      <div className={styles.grid}>
        {reports.map((report, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={report.image} alt={report.title} className={styles.image} />
              <div className={styles.iconOverlay}>
                {report.icon}
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{report.title}</h3>
              <p className={styles.cardDescription}>{report.description}</p>
              <Link to={report.link} className={styles.learnMoreButton}>
                <span>Learn more</span>
                <div className={styles.arrowCircle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <p className={styles.footer}>
        Every report you submit has the potential to create stories like these. Your voice matters.
      </p>
    </div>
  );
};

export default FeaturedReports;