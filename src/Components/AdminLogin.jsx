import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login validation logic
    if (formData.username && formData.password) {
      console.log("Login data:", formData);
      // Navigate to AdminDashboard
      navigate("/adminDashboard");
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="avatar">
          <i className="fa fa-user"></i>
        </div>
        <h2>Sign In</h2>

        <div className="input-group">
          <i className="fa fa-user icon"></i>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <i className="fa fa-lock icon"></i>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
