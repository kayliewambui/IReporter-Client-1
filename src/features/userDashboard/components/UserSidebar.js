// src/components/UserDashboard/UserSidebar.js
import React from 'react';
import '../../../styling/usercss/UserSidebar.css';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


const UserSidebar = () => {
  return (
    <div className="user-sidebar">
      <Typography variant="h6" className="sidebar-title">
        IReporter
      </Typography>
      <List>
        <Link to="/" className="link">
          <ListItem button>
            <ListItemIcon className="icon">
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/records" className="link">
          <ListItem button>
            <ListItemIcon className="icon">
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Past Records" />
          </ListItem>
        </Link>
        <Link to="/notifications" className="link">
          <ListItem button>
            <ListItemIcon className="icon">
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
        </Link>
        <Link to="/settings" className="link">
          <ListItem button>
            <ListItemIcon className="icon">
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
        <Link to="/logout" className="link">
          <ListItem button>
            <ListItemIcon className="icon">
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default UserSidebar;
