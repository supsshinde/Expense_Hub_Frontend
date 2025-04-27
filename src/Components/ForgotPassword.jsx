import React, { useState } from "react";
import "../styles/Login.css"; // ✅ Reusing your Login styles
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/user/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, newPassword })
    })
    .then(res => res.text())
    .then(data => setMessage(data))
    .catch(err => setMessage("Error occurred."));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleReset}>
        <div className="avatar">
          <i className="fa fa-lock"></i>
        </div>
        <h2>Reset Password</h2>

        <div className="input-group">
          <i className="fa fa-envelope icon"></i>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <i className="fa fa-key icon"></i>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">Reset Password</button>

        {message && <div className="alert alert-info mt-3">{message}</div>}

        <div className="register mt-4">
          <p>Remember your password? <Link to="/LoginUser">Login Here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
