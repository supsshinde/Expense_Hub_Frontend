import React, { useState } from 'react';
import deskImage from '../assets/Analysis.jpg';
import { Link } from "react-router-dom";
import UserServices from '../Services/UserServices';

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
      .catch((err) => setMsg("Error occurred while saving user"));
  };

  return (
    <div className="signup-container">
      <div className="form-section">
        <h2>Sign up</h2>
        <form>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Enter username" name="uname" value={user.uname} onChange={uniHandler} />
          </div>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Your Email" name="email" value={user.email} onChange={uniHandler} />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={uniHandler} />
          </div>
          <div className="input-group">
            <i className="fas fa-phone"></i>
            <input type="number" placeholder="Your mobile no" name="mobile" value={user.mobile} onChange={uniHandler} />
          </div>
          <div className="input-group">
            <i className="fas fa-city"></i>
            <input type="text" placeholder="Your city" name="city" value={user.city} onChange={uniHandler} />
          </div>
          <div className="input-group">
            <i className="fas fa-map-pin"></i>
            <input type="number" placeholder="Enter pincode" name="pincode" value={user.pincode} onChange={uniHandler} />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree all statements in <span>Terms of service</span>
            </label>
          </div>
          <button type="submit" className="register-btn" onClick={saveUser}>Register</button>
        </form>
        {msg && <p>{msg}</p>}
      </div>

      <div className="image-section">
        <img src={deskImage} alt="Desk setup" />
        <Link to="/LoginUser">Already registered? Login Here</Link>
      </div>
    </div>
  );
};

export default UserRegister;
