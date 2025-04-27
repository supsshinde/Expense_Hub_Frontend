import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UserServices from '../Services/UserServices';
import "../styles/Login.css"; 

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
    <div className="login-container">
      <form className="login-form" onSubmit={saveUser}>
        <div className="avatar">
          <i className="fa fa-user-plus"></i> {/* Different icon for register */}
        </div>
        <h2>Create Account</h2>

        <div className="input-group">
          <i className="fa fa-user icon"></i>
          <input
            type="text"
            placeholder="Username"
            name="uname"
            value={user.uname}
            onChange={uniHandler}
            required
          />
        </div>

        <div className="input-group">
          <i className="fa fa-envelope icon"></i>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={uniHandler}
            required
          />
        </div>

        <div className="input-group">
          <i className="fa fa-lock icon"></i>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={uniHandler}
            required
          />
        </div>

        <div className="input-group">
          <i className="fa fa-phone icon"></i>
          <input
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            value={user.mobile}
            onChange={uniHandler}
            required
          />
        </div>

        <div className="input-group">
          <i className="fa fa-city icon"></i>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={user.city}
            onChange={uniHandler}
            required
          />
        </div>

        <div className="input-group">
          <i className="fa fa-map-pin icon"></i>
          <input
            type="text"
            placeholder="Pincode"
            name="pincode"
            value={user.pincode}
            onChange={uniHandler}
            required
          />
        </div>

        <button type="submit" className="login-button">Register</button>

        {msg && <p className="text-success text-center mt-3 fw-semibold">{msg}</p>}

        <div className="register">
          <p>Already have an account? <Link to="/LoginUser">Login Here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
