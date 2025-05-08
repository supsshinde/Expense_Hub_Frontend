import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/admin/adminLogin", null, {
        params: {
          username: formData.username,
          password: formData.password
        }
      });

      if (response.data === true) {
        navigate("/adminDashboard");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
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
