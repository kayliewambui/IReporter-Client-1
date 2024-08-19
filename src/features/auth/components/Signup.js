import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../../styling/loggins/Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [workerId, setWorkerId] = useState('');
  const [showWorkerId, setShowWorkerId] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setShowWorkerId(email.endsWith('@ireporter.com'));
  }, [email]);

  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    if (!agreeTerms) {
      setMessage('Please agree to the terms of service and privacy policy');
      return;
    }
  
    const requestBody = {
      email,
      password,
      name,
    };
  
    if (showWorkerId && workerId) {
      requestBody.worker_id = workerId;
    }
  
    try {
      const response = await fetch('https://ireporter-server-hb42.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        setMessage('Signup successful! Please check your email to verify your account.');
        setTimeout(() => navigate('/'), 3000);
      } else {
        const errorData = await response.json();
        setMessage(`Signup failed: ${errorData.message || 'An error occurred'}`);
      }
    } catch (error) {
      setMessage('Signup failed: An unexpected error occurred.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-column">
        <div className="signup-form-container">
          <div className="logo-container">
            <span className="logo-icon">📡</span>
            <span className="logo-text">IReporter</span>
          </div>
          <h2 className="signup-title">Create your account</h2>

          <form onSubmit={handleRegister} className="signup-form">
          
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {showWorkerId && (
              <div className="form-group">
                <label htmlFor="workerId">Worker ID</label>
                <input
                  id="workerId"
                  type="text"
                  value={workerId}
                  onChange={(e) => setWorkerId(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="form-group checkbox">
              <input
                id="agreeTerms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
              />
              <label htmlFor="agreeTerms">
                I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="submit-button">Create Account</button>
          </form>

          {message && <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</p>}

          <p className="login-link">
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </div>
      </div>
      <div className="info-column">
        <div className="info-content">
          <h2 className="info-title">Join the Fight Against Corruption</h2>
          <p className="info-description">
            IReporter gives you the power to make a difference. Sign up to start reporting issues and tracking positive changes in your community.
          </p>
          <ul className="info-list">
            <li className="info-list-item">
              <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Anonymous reporting</span>
            </li>
            <li className="info-list-item">
              <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Secure data encryption</span>
            </li>
            <li className="info-list-item">
              <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Real-time updates on report status</span>
            </li>
            <li className="info-list-item">
              <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Community impact tracking</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;