// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../userDashboard/store/store';
import UserDashboard from '../../userDashboard/components/UserDashboard';
import UserRecords from '../../userDashboard/components/UserRecords';
import UserNotifications from '../../userDashboard/components/UserNotifications';

function User() {
  return (
    <Provider store={store}>
      <div>
        <UserDashboard />
        <UserRecords />
        <UserNotifications />
      </div>
    </Provider>
  );
}

export default User;