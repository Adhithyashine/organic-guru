// admin/src/pages/Login/Login.jsx
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // React Router for redirection

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://your-backend-url/api/admin/login', {
                email,
                password
            });
            
            if (response.data.success) {
                // Save the token to localStorage or state and navigate to the admin dashboard
                localStorage.setItem('adminToken', response.data.token);
                navigate('/admin');  // Redirect to the admin dashboard
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
