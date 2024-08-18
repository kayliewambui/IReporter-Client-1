import React, { useRef, useLayoutEffect } from 'react';
import CountUp from 'react-countup';
import styles from '../../../styling/home/AppMetrics.module.css';

const StatisticItem = React.forwardRef(({ end, suffix, description }, ref) => (
  <div className={styles.statisticItem}>
    <CountUp end={end} suffix={suffix} duration={2.5} className={styles.counter} ref={ref} />
    <p className={styles.description}>{description}</p>
  </div>
));

const AppMetrics = () => {
  const counterElements = useRef([]);

  useLayoutEffect(() => {
    // Start the counter animations
    counterElements.current.forEach((counterElement) => {
      const countUpInstance = CountUp.factory(counterElement);
      countUpInstance.start();
    });
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Together, We're Making a Difference</h2>
      
      <div className={styles.statisticsGrid}>
        <StatisticItem
          end={1000}
          suffix="+"
          description="Voices raised against corruption"
          ref={(el) => (counterElements.current[0] = el)}
        />
        <StatisticItem
          end={10000}
          suffix="+"
          description="Citizens committed to change"
          ref={(el) => (counterElements.current[1] = el)}
        />
        <StatisticItem
          end={500}
          suffix="+"
          description="Real-world impacts achieved"
          ref={(el) => (counterElements.current[2] = el)}
        />
        <StatisticItem
          end={1000}
          suffix="+"
          description="Spreading accountability nationwide"
          ref={(el) => (counterElements.current[3] = el)}
        />
        <StatisticItem
          end={100}
          suffix="+"
          description="Partnering for action"
          ref={(el) => (counterElements.current[4] = el)}
        />
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