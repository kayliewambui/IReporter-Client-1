// src/components/AdminDashboard/Redflags.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

const Redflags = () => {
  const [redflags, setRedflags] = useState([]);

  useEffect(() => {
    const fetchRedflags = async () => {
      try {
        const response = await axios.get('https://ireporter-server-hb42.onrender.com/api/records?type=redflag');
        setRedflags(response.data);
      } catch (error) {
        console.error('Error fetching redflags:', error);
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
              <TableCell>Image/Video</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {redflags.map((redflag) => (
              <TableRow key={redflag.id}>
                <TableCell>{redflag.publicId}</TableCell>
                <TableCell>{redflag.description}</TableCell>
                <TableCell>{redflag.media}</TableCell>
                <TableCell>{redflag.location}</TableCell>
                <TableCell>{redflag.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Redflags;
