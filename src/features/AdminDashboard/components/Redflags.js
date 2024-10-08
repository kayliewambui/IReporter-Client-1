import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import '../../../styling/admincss/Redflags.css';

const Redflags = () => {
  const [redflags, setRedflags] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRedflags = async () => {
      try {
        const token = sessionStorage.getItem('access_token');

        const response = await axios.get('https://ireporter-server-hb42.onrender.com/api/records/red-flags', {
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

  const handleStatusChange = async (publicId, newStatus) => {
    try {
      const token = sessionStorage.getItem('access_token');
      await axios.patch(
        `https://ireporter-server-hb42.onrender.com/api/records/${publicId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the local state to reflect the status change
      setRedflags((prevRedflags) =>
        prevRedflags.map((redflag) =>
          redflag.publicId === publicId ? { ...redflag, status: newStatus } : redflag
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Red Flags</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Public ID</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Images</TableCell>
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
                <TableRow key={redflag.publicId}>
                  <TableCell>{redflag.publicId}</TableCell>
                  <TableCell>{redflag.description}</TableCell>
                  <TableCell>
                    {redflag.images.map((image, index) => (
                      <img key={index} src={image} alt='record_image' style={{ maxWidth: '100px', marginRight: '10px' }} />
                    ))}
                  </TableCell>
                  <TableCell>{redflag.location}</TableCell>
                  <TableCell>
                    <Select
                      value={redflag.status}
                      onChange={(e) => handleStatusChange(redflag.publicId, e.target.value)}
                    >
                      <MenuItem value="Under Investigation">Under Investigation</MenuItem>
                      <MenuItem value="Resolved">Resolved</MenuItem>
                      <MenuItem value="Rejected">Rejected</MenuItem>
                    </Select>
                  </TableCell>
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
