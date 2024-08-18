import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '@changey/react-leaflet-markercluster/dist/styles.min.css';
import { AuthProvider } from './features/contexts/AuthContext';
import { useAuth } from './features/hooks/useAuth';


// Common components
import Footer from './features/common/components/Footer';

// Page components
import Home from './features/pages/components/Home';
import ReportModalPage from './features/pages/components/ReportModalPage';
import Login from './features/auth/components/Login';
import Signup from './features/auth/components/Signup';
import Forgotpassword from './features/auth/components/Forgotpassword';
import User from './features/pages/components/User';
import Admin from './features/pages/components/Admin';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>; // Or loading spinner
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!user) {
    return <Navigate to="/user-dashboard" replace />;
  }

  if (!user) {
    return <Navigate to="/admin-dashboard" replace />;
  }
  
  return children;
}

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
              <Route path="/forgotpassword" element={<Forgotpassword />} />
              <Route path="/report" element={<ReportModalPage />} />
              {/* protected route */}
              <Route 
                path="/user-dashboard" 
                element={
                  <ProtectedRoute>
                    {/* <Dashboard /> */}
                    <User />
                    <Admin />
                  </ProtectedRoute>
                } 
              />
              {/* Add other routes here */}
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
