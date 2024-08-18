// src/components/AdminDashboard/AdminDashboard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Dialog, DialogTitle, DialogContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Header from '../../AdminDashboard/components/AdminHeader';
import './AdminDashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

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

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className="dashboard">
      <Header /> {/* Include your existing Header */}
      
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
                <TableCell>Public ID</TableCell> {/* Changed 'Name' to 'Public ID' */}
                <TableCell>Category</TableCell> {/* Updated as per your request */}
                <TableCell>Image/Video</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>12345</TableCell> {/* Example Public ID */}
                <TableCell>Red Flag</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Ngong Road</TableCell>
                <TableCell>Resolved</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>23456</TableCell>
                <TableCell>Intervention</TableCell>
                <TableCell>Video</TableCell>
                <TableCell>Moi Avenue</TableCell>
                <TableCell>Under Investigation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>34567</TableCell>
                <TableCell>Red Flag</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Kilimani</TableCell>
                <TableCell>Rejected</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
