
import React, { useState } from "react";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";

import UserServices from "../Services/UserServices";
import "../styles/Login.css";

const UserLogin = () => {
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
  
    UserServices.loginUser(formData)
      .then((res) => {
        const { uid, message } = res.data;
        localStorage.setItem("uid", uid);
        console.log("Logged in UID:", uid);
  
        setMessage(message);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message || "Login failed.");
        } else {
          setMessage("Server error. Please try again.");
        }
      });
  };
  

  

  return (
    <div className="login-background pt-5 mt-5">
    <div className="form-container" style={{ marginTop: "10px " }}>
      <div className="reg-form" style={{ height: "500px "}}>
        <h1 className="header-text text-dark text-weight-bold p-2 fs-2 ">Login</h1>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input type="email" id="username" name="username" className="form-control" placeholder="Enter Email" required onChange={handleChange} value={formData.username} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="form-control" placeholder="Enter Password" required onChange={handleChange}  value={formData.password} />
          </div>

          <button type="submit" className="custom-btn">Login</button>

          <div className="d-flex justify-content-between p-3 0 0 0" style={{marginTop: '20px'}}>
            <div style={{width: "40%"}}>
            <a href="/ResetPassword" className="text-primary">Forgot Password?</a>
            </div>

            {/* <div className="text-center mt-3 ml-3">or</div> */}

            <div style={{width: "60%"}}>
            <img src={google} alt="Google logo" style={{ width: "20px", marginRight: "2%" }}/>
            <a href="">Login with Google</a>
          
            </div>
            
          </div>
          


          {message && <h3 className="text-center mt-3">{message}</h3>}
        </form>
      </div>
    </div>
    </div>
  );
};

export default UserLogin;
