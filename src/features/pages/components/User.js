// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../UserDashboard/store/store';
import UserDashboard from '../../UserDashboard/components/UserDashboard';
import UserRecords from '../../UserDashboard/components/UserRecords';
import UserNotifications from '../../UserDashboard/components/UserNotifications';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/records" element={<UserRecords />} />
          <Route path="/notifications" element={<UserNotifications />} />
          <Route path="/settings" element={<UserDashboard />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default User;