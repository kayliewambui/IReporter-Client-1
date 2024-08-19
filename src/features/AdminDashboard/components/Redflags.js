import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';
import '../../../styling/admincss/Redflags.css';

const Redflags = () => {
  const [redflags, setRedflags] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRedflags = async () => {
      try {
        const token = sessionStorage.getItem('access_token');

        const response = await axios.get('https://ireporter-server-hb42.onrender.com/api/records/interventions', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.length === 0) {
          setError(true); // No records found
        } else {
          setRedflags(response.data);
        }
      } catch (error) {
        console.error('Error fetching redflags:', error);
        setError(true);
      }
    };

    fetchRedflags();
  }, []);

  return (
    <div>
      <Typography variant="h4">Redflags</Typography>
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
              redflags.map((redflag) => (
                <TableRow key={redflag.id}>
                  <TableCell>{redflag.publicId}</TableCell>
                  <TableCell>{redflag.description}</TableCell>
                  <TableCell>{redflag.media}</TableCell>
                  <TableCell>{redflag.location}</TableCell>
                  <TableCell>{redflag.status}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Redflags;
