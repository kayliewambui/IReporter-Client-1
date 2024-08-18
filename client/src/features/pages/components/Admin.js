import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import Redflags from './Components/Redflags/Redflags';
import Interventions from './Components/Interventions/Interventions';
import GeoLocation from './Components/GeoLocation/GeoLocation';


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
