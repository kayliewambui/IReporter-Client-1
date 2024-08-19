import React from 'react';
import '../../../styling/usercss/UserDashboard.css';
import UserSidebar from '../components/UserSidebar';
import UserHeader from '../components/UserHeader';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <UserSidebar />
      <div className="user-main-content">
        <UserHeader />
        <h1>Dashboard</h1>
        <p>Your Step by Step Guide to Reporting Corruption</p>
        <div className="dashboard-cards">
          <div className="dashboard-card speak-up">
            <h3>SPEAK UP</h3>
            <p>Document the issue using our friendly app. Add photos, videos, or location data to strengthen your report.</p>
          </div>
          <div className="dashboard-card stay-safe">
            <h3>STAY SAFE</h3>
            <p>Rest easy knowing your report is encrypted and your identity is protected. We prioritize your safety and privacy.</p>
          </div>
          <div className="dashboard-card see-change">
            <h3>SEE CHANGE</h3>
            <p>Track your report’s progress and witness its impact. Be part of the solution as authorities take action.</p>
          </div>
        </div>
        <div className="report-now">
        <Link to="/report" >
        REPORT NOW
        </Link>
        </div>
        <div className="need-help">Need help?</div>
      </div>
    </div>
  );
};

export default UserDashboard;
