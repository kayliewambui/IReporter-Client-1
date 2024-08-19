
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import styles from '../../../styling/home/AppMetrics.module.css';


const StatisticItem = ({ end, suffix, description, key }) => (
  <div className={styles.statisticItem}>
    <CountUp 
      end={end} 
      suffix={suffix} 
      duration={2.5} 
      className={styles.counter}
      key={key}
    />
    <p className={styles.description}>{description}</p>
  </div>
);

const AppMetrics = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1);
    }, 10000); // animate after 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Together, We're Making a Difference</h2>
      
      <div className={styles.statisticsGrid}>
        <StatisticItem
          end={1000}
          suffix="+"
          description="Voices raised against corruption"
          key={`stat1-${key}`}
        />
        <StatisticItem
          end={10000}
          suffix="+"
          description="Citizens committed to change"
          key={`stat2-${key}`}
        />
        <StatisticItem
          end={500}
          suffix="+"
          description="Real-world impacts achieved"
          key={`stat3-${key}`}
        />
        <StatisticItem
          end={1000}
          suffix="+"
          description="Spreading accountability nationwide"
          key={`stat4-${key}`}
        />
        <StatisticItem
          end={100}
          suffix="+"
          description="Partnering for action"
          key={`stat5-${key}`}
        />
      </div>

      <div className={styles.additionalMetrics}>
        <div className={styles.metric}>
          <h3>Growth Metric</h3>
          <p>
            <CountUp 
              end={300} 
              suffix="%" 
              duration={2.5}
              key={`metric1-${key}`}
            /> increase in resolved cases over the last year
          </p>
        </div>
        <div className={styles.metric}>
          <h3>User Trust Rating</h3>
          <p>
            <CountUp 
              end={4.8} 
              decimals={1} 
              duration={2.5}
              key={`metric2-${key}`}
            />/5 stars from 10,000+ user reviews
          </p>
        </div>
      </div>

      <p className={styles.impactStatement}>
        Every report brings us closer to a more transparent society. Your voice matters.
      </p>
    </div>
  );
};

export default AppMetrics;