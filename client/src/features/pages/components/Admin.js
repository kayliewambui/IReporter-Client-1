import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../AdminDashboard/store';
import Sidebar from '../../AdminDashboard/components/AdminSidebar';
import Dashboard from '../../AdminDashboard/components/AdminDashboard';
import Redflags from '../../AdminDashboard/components/Redflags';
import Interventions from '../../AdminDashboard/components/Interventions';
import GeoLocation from '../../AdminDashboard/components/GeoLocation';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/redflags" element={<Redflags />} />
              <Route path="/interventions" element={<Interventions />} />
              <Route path="/geo-location" element={<GeoLocation />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default Admin;
