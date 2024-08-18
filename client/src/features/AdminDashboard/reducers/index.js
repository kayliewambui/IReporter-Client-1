// src/reducers/index.js

import { combineReducers } from 'redux';
import redflagsReducer from './redflagsReducer';
import interventionsReducer from './interventionsReducer';

const rootReducer = combineReducers({
  redflags: redflagsReducer,
  interventions: interventionsReducer,
});

export default rootReducer;
