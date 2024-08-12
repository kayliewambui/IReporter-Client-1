import React from 'react';
import CountUp from 'react-countup';
import styles from './AppMetrics.module.css';

const StatisticItem = ({ end, suffix, description }) => (
  <div className={styles.statisticItem}>
    <CountUp end={end} suffix={suffix} duration={2.5} className={styles.counter} />
    <p className={styles.description}>{description}</p>
  </div>
);

const AppMetrics = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Together, We're Making a Difference</h2>
      
      <div className={styles.statisticsGrid}>
        <StatisticItem end={1000} suffix="+" description="Voices raised against corruption" />
        <StatisticItem end={10000} suffix="+" description="Citizens committed to change" />
        <StatisticItem end={500} suffix="+" description="Real-world impacts achieved" />
        <StatisticItem end={1000} suffix="+" description="Spreading accountability nationwide" />
        <StatisticItem end={100} suffix="+" description="Partnering for action" />
      </div>

      <div className={styles.additionalMetrics}>
        <div className={styles.metric}>
          <h3>Growth Metric</h3>
          <p><CountUp end={300} suffix="%" duration={2.5} /> increase in resolved cases over the last year</p>
        </div>
        <div className={styles.metric}>
          <h3>User Trust Rating</h3>
          <p><CountUp end={4.8} decimals={1} duration={2.5} />/5 stars from 10,000+ user reviews</p>
        </div>
      </div>

      <p className={styles.impactStatement}>
        Every report brings us closer to a more transparent society. Your voice matters.
      </p>
    </div>
  );
};

export default AppMetrics;