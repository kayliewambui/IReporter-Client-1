import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styling/loggins/Signup.css';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [workerId, setWorkerId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

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
  
    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/renewpassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        alert('Signup successful! Redirecting to login page.');
        navigate('/');
      } else {
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.message || 'An error occurred'}`);
      }
    } catch (error) {
      alert('Signup failed: An unexpected error occurred.');
    }
  };

  
  return (
    <div className="auth-container">
      <div className="auth-form signup">
        <div className="form-content">
          <h2>Forgot password</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder=" Enter New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Worker ID (optional)"
            value={workerId}
            onChange={(e) => setWorkerId(e.target.value)}
          />
          <button onClick={handleRegister}>Reset password</button>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;