import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../../../styling/usercss/UserHeader.css';


const UserHeader = () => {
 // Get the public_id from sessionStorage
 const publicId = sessionStorage.getItem('public_id') || '';


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
           <Typography variant="body1">Public ID: {publicId}</Typography>
         </Box>
       </Box>
     </Toolbar>
   </AppBar>
 );
};


export default UserHeader;
