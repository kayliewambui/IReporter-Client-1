// src/reducers/redflagsReducer.js

import { FETCH_REDFLAGS } from '../actions/types';

const initialState = {
  redflags: [],
};

const redflagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REDFLAGS:
      return {
        ...state,
        redflags: action.payload,
      };
    default:
      return state;
  }
};

export default redflagsReducer;
