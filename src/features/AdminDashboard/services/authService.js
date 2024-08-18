// src/services/authService.js

import { v4 as uuidv4 } from 'uuid';

// Mock function to simulate user signup
export const signupUser = (userData) => {
  const publicID = uuidv4(); // Generate UUID
  const newUser = {
    ...userData,
    publicID,
  };

  // Simulate storing the user in a database
  // In a real application, you would make an API call here
  localStorage.setItem('user', JSON.stringify(newUser));
  return newUser;
};
