import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserServices from "../Services/UserServices";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you're calling a common method for login
    let promise = UserServices.loginUser(formData); // Or separate admin API if available

    promise
      .then((res) => {
        setMessage(res.data);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data);
        } else {
          setMessage("Server error. Please try again.");
        }
      });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center mt-5" style={{ minHeight: "100vh", backgroundColor: "#f4f7fb"}}>
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "450px"}}>
        <h1 className="text-center text-primary mb-4">User Login</h1>

        <form onSubmit={handleSubmit}  style={{ width: "400px", height:"330px"}}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Email</label>
            <input
              type="email"
              id="username"
              name="username"
              className="form-control"
              placeholder="Enter Email"
              required
              onChange={handleChange}
              value={formData.username}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              required
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-4">Login</button>

         
        </form>

        {message && <h3 className="text-center mt-3 text-danger">{message}</h3>}
      </div>
    </div>
  );
};

export default AdminLogin;
