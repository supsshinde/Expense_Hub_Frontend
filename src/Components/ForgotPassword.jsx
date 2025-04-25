import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/user/forgotPassword", {
      email,
      newPassword
    })
    .then((res) => {
      setMessage(res.data);
    })
    .catch((err) => {
      setMessage(err.response?.data || "Error occurred.");
    });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Forgot Password</h3>
      <form onSubmit={handleReset}>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group mt-3">
          <label>New Password</label>
          <input type="password" className="form-control" value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-4">Reset Password</button>
        {message && <div className="alert alert-info mt-3 text-center">{message}</div>}
      </form>
    </div>
  );
};

export default ForgotPassword;
