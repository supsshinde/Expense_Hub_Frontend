// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Home from "./Components/Home";
import Features from "./Components/Features";
import Services from "./Components/Services";
import About from "./Components/About";
import LoginUser from "./Components/LoginUser";
import UserRegister from "./Components/UserRegister";
import ForgotPassword from "./Components/ForgotPassword";
import AdminDashboard from "./Components/AdminDashboard";
import AddCategory from "./Components/AddCategory";
import ViewCategory from "./Components/ViewCategory";
import AllUsers from "./Components/AllUsers";
import UserDashboard from "./Components/UserDashboard";
import BudgetDashboard from "./Components/BudgetDashboard";
import AddExpense from "./Components/AddExpense";
import ViewExpense from "./Components/ViewExpense";
import UpdateExpense from "./Components/UpdateExpense";
import ViewProfile from "./Components/ViewProfile";
import EditProfile from "./Components/EditProfile";
import AdminLogin from "./Components/AdminLogin";

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

const App = () => {
  const location = useLocation();

  const hideNav =
    location.pathname.includes("/user/dashboard") ||
    location.pathname.includes("/adminDashboard");

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {!hideNav && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <NavLink className="navbar-brand fw-bold" to="/">
              XpenseHub
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/features">Features</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/userRegister">User</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/adminLogin">Admin</NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      )}

      <div className="container-fluid p-0 mt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/loginUser" element={<LoginUser />} />
          <Route path="/resetPassword" element={<ForgotPassword />} />

          <Route path="/adminDashboard" element={<AdminDashboard />}>
            <Route path="add-category" element={<AddCategory />} />
            <Route path="view-category" element={<ViewCategory />} />
            <Route path="all-users" element={<AllUsers />} />
          </Route>

          <Route path="/user/dashboard" element={<UserDashboard />}>
            <Route path="add-expense" element={<AddExpense />} />
            <Route path="view-expense" element={<ViewExpense />} />
            <Route path="update-expense/:eid" element={<UpdateExpense />} />
            {/* <Route path="add-budget" element={<BudgetDashboard />} /> */}
            <Route path="view-budget" element={<BudgetDashboard />} />
            <Route path="view-profile" element={<ViewProfile />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>

          <Route path="adminLogin" element={<AdminLogin />} />

         </Routes>
      </div>
    </>
  );
};

export default AppWrapper;
