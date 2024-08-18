import React from 'react';

import { Provider } from 'react-redux';
import store from '../../AdminDashboard/store';
import Sidebar from '../../AdminDashboard/components/AdminSidebar';
import Redflags from '../../AdminDashboard/components/Redflags';
import Interventions from '../../AdminDashboard/components/Interventions';
import GeoLocation from '../../AdminDashboard/components/GeoLocation';
import AdminDashboard from '../../AdminDashboard/components/AdminDashboard';


function Admin() {
  return (
    <Provider store={store}>
      
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px' }}>
            <AdminDashboard />
            <Redflags />
            <Interventions />
            <GeoLocation />
          </div>
        </div>
    </Provider>
  );
}

export default Admin;
