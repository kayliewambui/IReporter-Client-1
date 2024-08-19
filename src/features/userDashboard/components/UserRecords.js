import React, { useEffect, useState } from 'react';
import '../../../styling/usercss/UserRecords.css';


const UserRecords = () => {
 const [records, setRecords] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState('');


 useEffect(() => {
   const fetchRecords = async () => {
     const accessToken = sessionStorage.getItem('access_token');


     try {
       const response = await fetch('https://ireporter-server-hb42.onrender.com/api/records', {
         method: 'GET',
         headers: {
           'Authorization': `Bearer ${accessToken}`,
           'Content-Type': 'application/json',
         },
       });


       if (response.ok) {
         const data = await response.json();
         setRecords(data);
       } else {
         const errorData = await response.json();
         setError(errorData.message || 'Failed to fetch records');
       }
     } catch (err) {
       setError('An error occurred while fetching records.');
     } finally {
       setLoading(false);
     }
   };


   fetchRecords();
 }, []);


 return (
   <div className="user-records">
     <h2>Past Records</h2>
     {loading && <p className="loading-message">Loading records...</p>}
     {error && <p className="form-error">{error}</p>}
     {records.length > 0 ? (
       <ul>
         {records.map((record) => (
           <li key={record.public_id}>
             <span>{record.description}</span>
             <span className={`status ${record.status.toLowerCase()}`}>{record.status}</span>
           </li>
         ))}
       </ul>
     ) : (
       !loading && <p>No records found.</p>
     )}
   </div>
 );
};


export default UserRecords;



