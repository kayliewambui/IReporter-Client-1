import React from 'react';

import { Provider } from 'react-redux';
import store from '../../AdminDashboard/store';
import Sidebar from '../../AdminDashboard/components/AdminSidebar';



import AdminDashboard from '../../AdminDashboard/components/AdminDashboard';


function Admin() {
  return (
    <Provider store={store}>
      
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px' }}>
            <AdminDashboard />
            
           
            
          </div>
        </div>
    </Provider>
  );
}

export default Admin;
