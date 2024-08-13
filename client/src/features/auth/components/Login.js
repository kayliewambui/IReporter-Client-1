import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
// Make sure API_URL is imported or defined somewhere in your project
// import { API_URL } from 'path_to_your_config_file';
import './Login.css'

const Login = () => {
    // const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // Add message state

    const handleLogin = async () => {
        try {
          const response = await axios.post(`https://ireporter-server-hb42.onrender.com/api/auth/login`, { email, password }); // Fix string interpolation
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          setMessage(response.data.message);
        } catch (error) {
          setMessage(error.response?.data?.message || 'An error occurred');
        }
      };
    
    const handleForgotPassword = () => {
        // Implement forgot password logic
    };

    return (
        <div className="auth-container">
            <div className={auth-form}>
                <div className="form-content">
                    <div className="login-form">
                        <h2>Login</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin}>Login</button>
                        <a href="#" onClick={handleForgotPassword} className="forgot-password">Forgot Password?</a>
                        {message && <p className="message">{message}</p>}
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Login;