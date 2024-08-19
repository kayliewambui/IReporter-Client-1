import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../../../styling/usercss/UserHeader.css';

const UserHeader = () => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const token = sessionStorage.getItem('access_token'); 
        const response = await fetch('https://ireporter-server-hb42.onrender.com/api/auth/users', { 
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserId(data.id); 
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
          <Avatar alt='profile pic' src="/static/images/avatar/1.jpg" />
          <Box sx={{ marginLeft: '10px' }}>
            <Typography variant="body1">User ID: {userId}</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserHeader;
