import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UserServices from '../Services/UserServices';
import "../styles/Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserRegister = () => {
  const [user, setUser] = useState({
    uname: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
    pincode: ""
  });

  const [msg, setMsg] = useState("");

  const uniHandler = (e) => {
    setUser(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const saveUser = (e) => {
    e.preventDefault();
    UserServices.createUser(user)
      .then((res) => setMsg(res.data))
      .catch(() => setMsg("Error occurred while saving user"));
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100" style={{ background: '#f0f4ff' }}>
      <div className="col-md-6 col-lg-5 bg-white p-5 rounded shadow">
        <h2 className="text-center mb-4 mt-5 text-primary">Create Account</h2>
        <form onSubmit={saveUser}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" name="uname" value={user.uname} onChange={uniHandler} placeholder="Enter username" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={user.email} onChange={uniHandler} placeholder="Enter email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={user.password} onChange={uniHandler} placeholder="Enter password" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input type="number" className="form-control" name="mobile" value={user.mobile} onChange={uniHandler} placeholder="Enter mobile number" required />
          </div>

          <div className="mb-3">
            <label className="form-label">City</label>
            <input type="text" className="form-control" name="city" value={user.city} onChange={uniHandler} placeholder="Enter city" required />
          </div>

          <div className="mb-4">
            <label className="form-label">Pincode</label>
            <input type="number" className="form-control" name="pincode" value={user.pincode} onChange={uniHandler} placeholder="Enter pincode" required />
          </div>

          <div className="form-check mb-4">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label" htmlFor="terms">
              I agree to all statements in <span className="text-primary">Terms of service</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>

          {msg && <p className="text-success text-center mt-3 fw-semibold">{msg}</p>}
        </form>

        <p className="text-center mt-4">
          Already registered? <Link to="/LoginUser" className="text-decoration-none fw-bold text-primary">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
