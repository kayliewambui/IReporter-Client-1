// src/Components/Interventions/Interventions.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

const Interventions = () => {
  const [interventions, setInterventions] = useState([]);

  useEffect(() => {
    const fetchInterventions = async () => {
      try {
        const response = await axios.get('https://ireporter-server-hb42.onrender.com/api/records?type=intervention');
        setInterventions(response.data);
      } catch (error) {
        console.error('Error fetching interventions:', error);
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
              <TableCell>Image/Video</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {interventions.map((intervention) => (
              <TableRow key={intervention.id}>
                <TableCell>{intervention.publicId}</TableCell>
                <TableCell>{intervention.description}</TableCell>
                <TableCell>{intervention.media}</TableCell>
                <TableCell>{intervention.location}</TableCell>
                <TableCell>{intervention.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Interventions;
