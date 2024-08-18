import React from 'react';
import Hero from '../../home/components/Hero';
import HowItWorksSection from '../../home/components/HowItWorksSection';
import FeaturedReports from '../../home/components/FeaturedReports';
import ReportsMapSection from '../../home/components/ReportsMapSection';
import SecuritySection from '../../home/components/SecuritySection';
import FAQ from '../../home/components/FAQ';
import AppShowcase from '../../home/components/AppShowcase';
import AppMetrics from '../../home/components/AppMetrics';
import CTASection from '../../home/components/CTASection';

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorksSection />
      <FeaturedReports />
      <SecuritySection />
        <ReportsMapSection />
      <AppShowcase />
      <AppMetrics />
      <FAQ />
      <CTASection/>
    </div>
  );
};

export default Home;