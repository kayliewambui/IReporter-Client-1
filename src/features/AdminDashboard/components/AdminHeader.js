// src/components/AdminDashboard/AdminHeader.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, IconButton, MenuItem, Select, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { fetchUser } from '../../AdminDashboard/actions/userActions';
import userImage from '../../AdminDashboard/assets/userImage.png';
import '../../../styling/admincss/Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <header className="header">
      <div className="header-left">
        <Typography variant="body1" component="label" htmlFor="sort">
          Sort:
        </Typography>
        <Select
          id="sort"
          defaultValue="last-week"
          variant="outlined"
          size="small"
          style={{ marginLeft: '10px' }}
        >
          <MenuItem value="last-week">Last week</MenuItem>
          <MenuItem value="last-month">Last month</MenuItem>
          <MenuItem value="last-year">Last year</MenuItem>
        </Select>
      </div>
      <div className="header-right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <div className="user-info">
          <Avatar alt={user.workId} src={userImage} />
          <div className="user-details">
            {loading ? (
              <Typography variant="body1" className="user-name">
                Loading...
              </Typography>
            ) : error ? (
              <Typography variant="body1" className="user-name">
                Error
              </Typography>
            ) : (
              <>
                <Typography variant="body1" className="user-name">
                  {user.workId}
                </Typography>
                <Typography variant="body2" className="user-email">
                  {user.email}
                </Typography>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
