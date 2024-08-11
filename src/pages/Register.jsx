import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9001/api/users/register', formData)
      .then(response => {
        setMessage('User registered successfully!');
        setFormData({ username: '', email: '', password: '' });
      })
      .catch(error => {
        if (error.response && error.response.status === 409) {
          setMessage('Email already exists!');
        } else {
          setMessage('An error occurred. Please try again.');
        }
      });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username"
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Register;
