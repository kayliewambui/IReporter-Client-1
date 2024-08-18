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
// const ProtectedRoute = ({ children, role }) => {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return <div>Loading...</div>; // Or a loading spinner
//   }

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (role === 'admin' && user.role !== 'admin') {
//     return <Navigate to="/admin-dashboard" replace />;
//   }

//   if (role === 'user' && user.role !== 'user') {
//     return <Navigate to="/userdashboard" replace />;
//   }

//   return children;
// }

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
              <Route path="/user" element={<User />} />
              <Route path="/admin" element={<Admin />} />
              
              {/* Protected routes */}
              {/* <Route
                path="/user"
                element={
                  <ProtectedRoute role="user">
                    <User />
                  </ProtectedRoute>
                }
              /> */}
              {/* <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute role="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              /> */}
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
