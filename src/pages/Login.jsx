import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the login is for admin
    if (email === 'admin@gmail.com' && password === 'asd') {
      setMessage('Admin login successful!');
      navigate('/Admin');
      return;
    }

    try {
      const response = await axios.post('http://localhost:9001/api/users/login', {
        email,
        password
      });
      if (response.status === 200) {
        setMessage('Login successful!');
        navigate('/home'); // Redirect to the user's homepage or desired page
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Invalid credentials!');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
      <Link to="/home" className="home-link">Go to Home</Link>
    </div>
  );
};

export default Login;
