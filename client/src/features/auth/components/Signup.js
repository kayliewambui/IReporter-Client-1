import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [workerId, setWorkerId] = useState('');
  const [showWorkerId, setShowWorkerId] = useState(false);  
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);  
  const navigate = useNavigate();

  useEffect(() => {
    if (email.endsWith('@ireporter.com')) {
      setShowWorkerId(true);
    } else {
      setShowWorkerId(false);
    }
  }, [email]);

  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
  
    const requestBody = {
      email,
      password,
    };
  
    if (workerId) {
      requestBody.worker_id = workerId;
    }
  
    setIsLoading(true);  
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        alert('Signup successful! Redirecting to login page.');
        navigate('/login');
      } else {
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.message || 'An error occurred'}`);
      }
    } catch (error) {
      alert('Signup failed: An unexpected error occurred.');
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form signup">
        <div className="form-content">
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {showWorkerId && (
            <input
              type="text"
              placeholder="Worker ID"
              value={workerId}
              onChange={(e) => setWorkerId(e.target.value)}
            />
          )}
          <button onClick={handleRegister} disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register'}
          </button>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
