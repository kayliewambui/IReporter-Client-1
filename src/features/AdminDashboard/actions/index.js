import { FETCH_REDFLAGS, FETCH_INTERVENTIONS } from './types';

export const fetchRedflags = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://ireporter-server-hb42.onrender.com/records');
      const data = await response.json();
      const redflags = data.filter(record => record.category === 'redflag');
      dispatch({ type: FETCH_REDFLAGS, payload: redflags });
    } catch (error) {
      console.error('Error fetching redflags:', error);
    }
  };
};

export const fetchInterventions = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://ireporter-server-hb42.onrender.com/records');
      const data = await response.json();
      const interventions = data.filter(record => record.category === 'intervention');
      dispatch({ type: FETCH_INTERVENTIONS, payload: interventions });
    } catch (error) {
      console.error('Error fetching interventions:', error);
    }
  };
};
