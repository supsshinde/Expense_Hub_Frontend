
import React, { useState } from "react";
import google from "../assets/google.png";


const UserLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Login Successful!");
  };

  return (
    <div className="login-background">
    <div className="form-container" style={{ marginTop: "10px " }}>
      <div className="reg-form" style={{ height: "430px "}}>
        <h1 className="header-text text-dark text-weight-bold p-2 fs-2 ">Login</h1>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input type="email" id="username" name="username" className="form-control" placeholder="Enter Email" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="form-control" placeholder="Enter Password" required onChange={handleChange} />
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
          


          {message && <h3 className="message">{message}</h3>}
        </form>
      </div>
    </div>
    </div>
  );
};

export default UserLogin;
