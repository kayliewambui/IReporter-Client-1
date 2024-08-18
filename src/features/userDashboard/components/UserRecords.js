import React from 'react';
import '../../userDashboard/components/UserRecords.css';

const UserRecords = () => {
  // Placeholder records
  const records = [
    { id: 1, title: 'Corruption Report 1', status: 'Pending' },
    { id: 2, title: 'Corruption Report 2', status: 'Resolved' },
  ];

  return (
    <div className="user-records">
      <h2>Past Records</h2>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            <span>{record.title}</span>
            <span className={`status ${record.status.toLowerCase()}`}>{record.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRecords;
