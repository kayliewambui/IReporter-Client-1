
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '@changey/react-leaflet-markercluster/dist/styles.min.css';
import  {AuthProvider} from './features/contexts/AuthContext';
import  {useAuth}  from './features/hooks/useAuth';

// Common components
import Footer from './features/common/components/Footer';

// Page components

import Home from './features/pages/components/Home';
import ReportModalPage from './features/pages/components/ReportModalPage';
// import HowItWorksPage from './features/pages/components/HowItWorksPage';
// import Impact from './features/pages/components/Impact';
// import DataSecurity from './features/pages/components/DataSecurity';
import Login from './features/auth/components/Login';
import Signup from './features/auth/components/Signup';
// import About from './features/pages/components/About';
// import Contact from './features/pages/components/Contact';
// import FAQPage from './features/pages/components/FAQPage';
// import PrivacyPolicyPage from './features/pages/components/PrivacyPolicyPage';



// Protected route component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>; // Or loading spinner
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/report" element={<ReportModalPage />} /> {/* Add this new route */}
              {/* Example of a protected route */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    {/* <Dashboard /> */}
                  </ProtectedRoute>
                } 
              />
            
              {/* <Route path="/how-it-works" element={<HowItWorksPage />} /> */}
              {/* <Route path="/impact" element={<Impact />} /> */}
              {/* <Route path="/data-security" element={<DataSecurity />} /> */}
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* <Route path="/faq" element={<FAQPage />} /> */}
              {/* <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> */}
              {/* Catch-all route for 404 */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;