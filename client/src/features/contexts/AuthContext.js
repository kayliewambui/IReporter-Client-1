import React, { createContext, useState, useEffect } from 'react';

const API_URL = 'https://ireporter-server-hb42.onrender.com'; 

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      verifyToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/verify-token`, {
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
      } else {
        throw new Error('Token invalid');
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem('token', data.token);
        return data.user;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem('token', data.token);
        return data.user;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const checkUserExists = async (email) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/check-user?email=${email}`);
      if (response.ok) {
        const data = await response.json();
        return data.exists;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to check user existence');
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      throw error;
    }
  };

  const isAdmin = () => {
    return user && user.isAdmin;
  };

  const sendVerificationEmail = async () => {
    try {
      if (!user) {
        throw new Error('No user logged in');
      }
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/api/auth/send-verification-email`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email: user.email })
      });
      if (response.ok) {
        return await response.json();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send verification email');
      }
    } catch (error) {
      console.error('Failed to send verification email:', error);
      throw error;
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    checkUserExists,
    isAdmin,
    sendVerificationEmail,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};