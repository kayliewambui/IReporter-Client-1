// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: 'Kaylie',
  records: [],
  notifications: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRecords: (state, action) => {
      state.records = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const { setRecords, setNotifications } = userSlice.actions;

export default userSlice.reducer;
