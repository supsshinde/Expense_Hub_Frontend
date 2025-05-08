import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const LoginPage = () => {
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
  
    if (!formData.username || !formData.password) {
      alert("Please enter both username and password");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
  
        // Optionally store user ID in local storage or context
        localStorage.setItem("uid", data.uid);
  
        navigate("/user/dashboard"); // Redirect on success
      } else {
        const errorText = await response.text();
        alert(errorText || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while logging in. Please try again.");
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

        <div className="register">
          <p>Don't have an account? <Link to="/UserRegister">Register Here</Link></p>
        </div>

        <div className="forgot-password">
          <Link to="/resetPassword" className="mt-3">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
