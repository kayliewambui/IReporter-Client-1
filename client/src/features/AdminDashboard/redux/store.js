import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slices/dashboardSlice';
import redflagsReducer from './slices/redflagsSlice';
import interventionsReducer from './slices/interventionsSlice';
import resolvedCasesReducer from './slices/resolvedCasesSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    redflags: redflagsReducer,
    interventions: interventionsReducer,
    resolvedCases: resolvedCasesReducer,
  },
});
