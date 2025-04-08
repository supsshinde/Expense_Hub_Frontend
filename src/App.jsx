import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Features from "./Components/Features";
import About from "./Components/About";
import Home from "./Components/Home";
import Reports from "./Components/Reports";
import Profile from "./Components/Profile";
import LoginUser from "./Components/LoginUser";
import UserRegister from "./Components/UserRegister"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">XpenseHub</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <NavLink className="nav-link" to="/home"><b>Home</b></NavLink>
            </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/features"><b>Features</b></NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/about"><b>About</b></NavLink>
          </li>


              {/* Reports Dropdown */}
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="reportsDropdown" role="button" data-bs-toggle="dropdown">
                  <b>Reports</b>
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/reports/daily">Daily</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/reports/weekly">Weekly</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/reports/monthly">Monthly</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/reports/yearly">Yearly</NavLink></li>
                </ul>
              </li>

              {/* Profile Dropdown */}
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="profileDropdown" role="button" data-bs-toggle="dropdown">
                  <b>Profile</b>
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/profile/admin">Admin</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/profile/user">User</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5 pt-5">
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/daily" element={<Reports />} />
          <Route path="/reports/weekly" element={<Reports />} />
          <Route path="/reports/monthly" element={<Reports />} />
          <Route path="/reports/yearly" element={<Reports />} />
          <Route path="/profile/admin" element={<Profile />} />
          <Route path="/profile/user" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/UserRegister" element={<UserRegister />} />
          <Route path="/LoginUser" element={<LoginUser />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
