import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styling/loggins/Login.css';
// import { useAuth } from '../../hooks/useAuth';
// import BASE_URL from '../../../config/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [workerId, setWorkerId] = useState('');
  const [showWorkerId, setShowWorkerId] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (email.endsWith('@ireporter.com')) {
      setShowWorkerId(true);
    } else {
      setShowWorkerId(false);
      setWorkerId('');
    }
  }, [email]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://ireporter-server-hb42.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, worker_id: workerId }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess('Logged in successfully!');

        // Store tokens and public_id in sessionStorage
        sessionStorage.setItem('access_token', data.access_token);
        sessionStorage.setItem('refresh_token', data.refresh_token);
        sessionStorage.setItem('public_id', data.public_id);

        // Redirect based on user role
        if (workerId) {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred during login. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-content">
            <h2>Login</h2>
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
            {showWorkerId && (
              <input
                type="text"
                placeholder="Worker ID"
                value={workerId}
                onChange={(e) => setWorkerId(e.target.value)}
                required
              />
            )}
            <button type="submit" disabled={loading}>
              Login
            </button>
          </div>
        </form>

        {loading && <p className="loading-message">Logging in...</p>}
        {error && <p className="form-error">{error}</p>}
        {success && <p className="form-success">{success}</p>}
        <a href="/forgot-password" className="forgot-password">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default Login;
