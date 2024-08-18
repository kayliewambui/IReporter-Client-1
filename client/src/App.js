

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '@changey/react-leaflet-markercluster/dist/styles.min.css';


// Common components
import Footer from './features/common/components/Footer';

// Page components

import Home from './features/pages/components/Home';
// import HowItWorksPage from './features/pages/components/HowItWorksPage';
// import Impact from './features/pages/components/Impact';
// import DataSecurity from './features/pages/components/DataSecurity';
// import Login from './features/pages/components/Login';
// import Signup from './features/pages/components/Signup';
// import About from './features/pages/components/About';
// import Contact from './features/pages/components/Contact';
// import FAQPage from './features/pages/components/FAQPage';
// import PrivacyPolicyPage from './features/pages/components/PrivacyPolicyPage';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/data-security" element={<DataSecurity />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;