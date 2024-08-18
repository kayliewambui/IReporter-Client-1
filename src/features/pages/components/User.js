// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../userDashboard/store/store';
import UserDashboard from '../../userDashboard/components/UserDashboard';
import UserRecords from '../../userDashboard/components/UserRecords';
import UserNotifications from '../../userDashboard/components/UserNotifications';

function User() {
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