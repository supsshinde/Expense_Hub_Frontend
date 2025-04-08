import React from 'react';
import deskImage from '../assets/Analysis.jpg'; // Save your image as 'desk.png' in assets folder
import { Link } from "react-router-dom";
const UserRegister = () => {
  return (
    <div className="signup-container">
      <div className="form-section">
        <h2>Sign up</h2>
        <form>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Enter username" />
          </div>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input type="number" placeholder="Your mobile no" />
          </div>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Your city" />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="number" placeholder="enter pincode" />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree all statements in <span>Terms of service</span>
            </label>
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>

      <div className="image-section">
        <img src={deskImage} alt="Desk setup" />
        <Link to="/LoginUser">Already registered ? Login Here</Link>
      </div>
    </div>
  );
};

export default UserRegister;