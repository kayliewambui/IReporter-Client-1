import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';
import '../../../styling/admincss/Interventions.css';

const Interventions = () => {
  const [interventions, setInterventions] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchInterventions = async () => {
      try {
        // Get the JWT token from sessionStorage
        const token = sessionStorage.getItem('access_token');

        const response = await axios.get('https://ireporter-server-hb42.onrender.com/api/records/interventions', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.length === 0) {
          setError(true); // No records found
        } else {
          setInterventions(response.data);
        }
      } catch (error) {
        console.error('Error fetching interventions:', error);
        setError(true);
      }
    };

    fetchInterventions();
  }, []);

  return (
    <div>
      <Typography variant="h4">Interventions</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Public ID</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Media</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {error ? (
              <TableRow>
                <TableCell colSpan={5} align="center">No records found</TableCell>
              </TableRow>
            ) : (
              interventions.map((intervention) => (
                <TableRow key={intervention.public_id}>
                  <TableCell>{intervention.public_id}</TableCell>
                  <TableCell>{intervention.description}</TableCell>
                  <TableCell>
                    {intervention.images && intervention.images.map((image, index) => (
                      <img key={index} src={image} alt={`Intervention ${index}`} className="intervention-media" />
                    ))}
                    {intervention.videos && intervention.videos.map((video, index) => (
                      <video key={index} src={video} controls className="intervention-media"></video>
                    ))}
                  </TableCell>
                  <TableCell>{intervention.location}</TableCell>
                  <TableCell>{intervention.status}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Interventions;
