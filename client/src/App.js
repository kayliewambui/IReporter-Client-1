import React from 'react';
import Hero from './features/common/components/Hero';
import HowItWorks from './features/home/components/HowItWorks';


function App() {
  return (
    <div className="App">
      <Hero />
      <HowItWorks /> 
      {/*
      <FeaturedReports />
      <Map/>
      <SecuritySection/>
      <FAQs/>
      <AppCredibility/>
      <Compliance/>
      <CTA/>
      <Footer/> */}

    </div>
  );
}

export default App;