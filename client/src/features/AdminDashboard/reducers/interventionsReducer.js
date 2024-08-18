// src/reducers/interventionsReducer.js

import { FETCH_INTERVENTIONS } from '../actions/types';

const initialState = {
  interventions: [],
};

const interventionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INTERVENTIONS:
      return {
        ...state,
        interventions: action.payload,
      };
    default:
      return state;
  }
};

export default interventionsReducer;
