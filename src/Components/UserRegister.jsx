// import React, { useState } from 'react';
// import deskImage from '../assets/Analysis.jpg';
// import { Link } from "react-router-dom";
// import UserServices from '../Services/UserServices';
// import "../styles/Register.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// const UserRegister = () => {
//   const [user, setUser] = useState({
//     uname: "",
//     email: "",
//     password: "",
//     mobile: "",
//     city: "",
//     pincode: ""
//   });

//   const [msg, setMsg] = useState("");

//   const uniHandler = (e) => {
//     setUser(prevData => ({
//       ...prevData,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const saveUser = (e) => {
//     e.preventDefault();
//     UserServices.createUser(user)
//       .then((res) => setMsg(res.data))
//       .catch((err) => setMsg("Error occurred while saving user"));
//   };

//   return (
//     <div className="signup-container">
//       <div className="form-section">
//         <h2>Sign up</h2>
//         <form>
//           <div className="input-group">
//             <i className="fas fa-user"></i>
//             <input type="text" placeholder="Enter username" name="uname" value={user.uname} onChange={uniHandler} />
//           </div>
//           <div className="input-group">
//             <i className="fas fa-envelope"></i>
//             <input type="email" placeholder="Your Email" name="email" value={user.email} onChange={uniHandler} />
//           </div>
//           <div className="input-group">
//             <i className="fas fa-lock"></i>
//             <input type="password" placeholder="Password" name="password" value={user.password} onChange={uniHandler} />
//           </div>
//           <div className="input-group">
//             <i className="fas fa-phone"></i>
//             <input type="number" placeholder="Your mobile no" name="mobile" value={user.mobile} onChange={uniHandler} />
//           </div>
//           <div className="input-group">
//             <i className="fas fa-city"></i>
//             <input type="text" placeholder="Your city" name="city" value={user.city} onChange={uniHandler} />
//           </div>
//           <div className="input-group">
//             <i className="fas fa-map-pin"></i>
//             <input type="number" placeholder="Enter pincode" name="pincode" value={user.pincode} onChange={uniHandler} />
//           </div>
//           <div className="checkbox-group">
//             <input type="checkbox" id="terms" />
//             <label htmlFor="terms">
//               I agree all statements in <span>Terms of service</span>
//             </label>
//           </div>
//           <button type="submit" className="register-btn" onClick={saveUser}>Register</button>
//         </form>
//         {msg && <p>{msg}</p>}
//       </div>

//       <div className="image-section">
//         <img src={deskImage} alt="Desk setup" />
//         <Link to="/LoginUser">Already registered? Login Here</Link>
//       </div>
//     </div>
//   );
// };

// export default UserRegister;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UserServices from '../Services/UserServices';
import "../styles/Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light pt-5 mt-5">
      <div className="col-lg-6 col-md-8 col-sm-10 bg-light text-dark rounded-4  shadow-lg ">
        <h2 className="text-center text-primary mb-4 pt-4">Create Account</h2>
        
        <form onSubmit={saveUser}>
          <div className="form-group mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" placeholder="Enter username" name="uname" value={user.uname} onChange={uniHandler} required />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your Email" name="email" value={user.email} onChange={uniHandler} required />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password" value={user.password} onChange={uniHandler} required />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Mobile Number</label>
            <input type="number" className="form-control" placeholder="Your mobile no" name="mobile" value={user.mobile} onChange={uniHandler} required />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">City</label>
            <input type="text" className="form-control" placeholder="Your city" name="city" value={user.city} onChange={uniHandler} required />
          </div>

          <div className="form-group mb-4">
            <label className="form-label">Pincode</label>
            <input type="number" className="form-control" placeholder="Enter pincode" name="pincode" value={user.pincode} onChange={uniHandler} required />
          </div>

          <div className="form-check mb-4">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label" htmlFor="terms">
              I agree to all statements in <span className="text-primary">Terms of service</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

        {msg && <p className="mt-3 text-center text-success fw-semibold">{msg}</p>}

        <p className="text-center mt-3">
          Already registered? <Link to="/LoginUser" className="text-decoration-none text-primary fw-bold">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
