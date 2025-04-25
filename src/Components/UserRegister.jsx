import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UserServices from '../Services/UserServices';
import "../styles/Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import deskImage from '../assets/deskImage.jpg'; // Update with correct path

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
    <div className="signup-container">
      <div className="image-section">
        <img src={deskImage} alt="Desk setup" />
        <p>
          Already registered? <Link to="/LoginUser">Login Here</Link>
        </p>
      </div>

      <div className="form-section">
        <h2>Sign up</h2>
        <form onSubmit={saveUser}>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Enter username" name="uname" value={user.uname} onChange={uniHandler} required />
          </div>

          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Your Email" name="email" value={user.email} onChange={uniHandler} required />
          </div>

          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={uniHandler} required />
          </div>

          <div className="input-group">
            <i className="fas fa-phone"></i>
            <input type="number" placeholder="Your mobile no" name="mobile" value={user.mobile} onChange={uniHandler} required />
          </div>

          <div className="input-group">
            <i className="fas fa-city"></i>
            <input type="text" placeholder="Your city" name="city" value={user.city} onChange={uniHandler} required />
          </div>

          <div className="input-group">
            <i className="fas fa-map-pin"></i>
            <input type="number" placeholder="Enter pincode" name="pincode" value={user.pincode} onChange={uniHandler} required />
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label" htmlFor="terms">
              I agree to all statements in <span className="text-primary">Terms of service</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
        </form>

        {msg && <p className="mt-3 text-success text-center fw-semibold">{msg}</p>}

        <p className="text-center mt-3">
          Already registered? <Link to="/LoginUser" className="text-decoration-none text-primary fw-bold">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
