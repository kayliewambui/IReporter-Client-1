// src/components/UserDashboard/UserHeader.js
import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../../../styling/usercss/UserHeader.css';

const UserHeader = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
          <Avatar alt="Kaylie Wambui" src="/static/images/avatar/1.jpg" />
          <Box sx={{ marginLeft: '10px' }}>
            <Typography variant="body1">Public ID: 12345</Typography>
            <Typography variant="body2">kaylie.wambui@ireporter.com</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserHeader;
