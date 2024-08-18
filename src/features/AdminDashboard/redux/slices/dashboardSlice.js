import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    redflags: 564,
    interventions: 346,
    resolvedCases: 112,
  },
  reducers: {
    // Reducers go here
  },
});

export const { } = dashboardSlice.actions;
export default dashboardSlice.reducer;
