import React from 'react';
import '../../../styling/usercss/UserNotifications.css';

const UserNotifications = () => {
  const notifications = [
    'Your report has been reviewed.',
    'New message from admin.',
  ];

  return (
    <div className="user-notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserNotifications;
