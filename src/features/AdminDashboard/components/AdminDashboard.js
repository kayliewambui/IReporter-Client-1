import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Dialog, DialogTitle, DialogContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../../../styling/admincss/AdminDashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [recentMessages, setRecentMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Issues',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const fetchRecentMessages = async () => {
      try {
        const token = sessionStorage.getItem('access_token');

        // Fetching the main records 
        const response = await axios.get('https://ireporter-server-hb42.onrender.com/api/records', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const records = response.data;

        // Fetching associated image/video URLs for each record
        const enhancedRecords = await Promise.all(
          records.map(async (record) => {
            let mediaUrl = '';
            if (record.mediaType === 'image') {
              const imageResponse = await axios.get(`https://ireporter-server-hb42.onrender.com/api/images/${record.id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              mediaUrl = imageResponse.data.url;
            } else if (record.mediaType === 'video') {
              const videoResponse = await axios.get(`https://ireporter-server-hb42.onrender.com/api/videos/${record.id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              mediaUrl = videoResponse.data.url;
            }

            return { ...record, mediaUrl };
          })
        );

        setRecentMessages(enhancedRecords);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recent messages:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchRecentMessages();
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className="dashboard">
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={4}>
          <Card onClick={() => handleCardClick('Redflags')}>
            <CardContent>
              <Typography variant="h5">Redflags</Typography>
              <Typography variant="h6">564</Typography>
              <Bar data={barData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card onClick={() => handleCardClick('Interventions')}>
            <CardContent>
              <Typography variant="h5">Interventions</Typography>
              <Typography variant="h6">346</Typography>
              <Bar data={barData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card onClick={() => handleCardClick('Resolved Cases')}>
            <CardContent>
              <Typography variant="h5">Resolved Cases</Typography>
              <Typography variant="h6">112</Typography>
              <Bar data={barData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>{selectedCard}</DialogTitle>
        <DialogContent>
          <Bar data={barData} />
        </DialogContent>
      </Dialog>

      <div className="recent-messages">
        <Typography variant="h5">Recent Messages</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Public ID</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Image/Video</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">Loading...</TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">Failed to load messages</TableCell>
                </TableRow>
              ) : recentMessages.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">No messages found</TableCell>
                </TableRow>
              ) : (
                recentMessages.map((message) => (
                  <TableRow key={message.publicId}>
                    <TableCell>{message.publicId}</TableCell>
                    <TableCell>{message.category}</TableCell>
                    <TableCell>
                      {message.mediaType === 'image' ? (
                        <img src={message.mediaUrl} alt="record_image" style={{ maxWidth: '100px', marginRight: '10px' }} />
                      ) : (
                        <video src={message.mediaUrl} controls style={{ maxWidth: '100px', marginRight: '10px' }} />
                      )}
                    </TableCell>
                    <TableCell>{message.location}</TableCell>
                    <TableCell>{message.status}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
