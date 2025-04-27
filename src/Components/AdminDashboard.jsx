// export default AdminDashboard;
import React, { useState, useEffect } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ExpenseCharts from "./ExpenseCharts";
import "../styles/dashboard.css";

const AdminDashboard = () => {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0); // You can implement this too
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalBudgets, setTotalBudgets] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboardMain = location.pathname === "/admin-dashboard";

  useEffect(() => {
    // Fetch category count
    fetch("http://localhost:8080/admin/countCategory")
      .then(response => response.json())
      .then(data => setTotalCategories(data))
      .catch(error => console.error("Category count error:", error));
  // Fetch expense count
fetch("http://localhost:8080/admin/countExpenses")
.then(response => response.json())
.then(data => setTotalExpenses(data))
.catch(error => console.error("Expense count error:", error));



// Fetch budget count
fetch("http://localhost:8080/admin/countBudgets")
.then(response => response.json())
.then(data => setTotalBudgets(data))
.catch(error => console.error("Budget count error:", error));

    // Fetch user count
    fetch("http://localhost:8080/admin/countUsers")
      .then(response => response.json())
      .then(data => setTotalUsers(data))
      .catch(error => console.error("User count error:", error));
  }, []);
  
  const handleLogout = () => {
    navigate("/Home");
  };
  
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">AdminHub</h2>
        <nav className="sidebar-nav">

          <div className="menu">
            <button className="menu-item" onClick={() => setShowCategoryMenu(!showCategoryMenu)}>
              Category ▸
            </button>
            {showCategoryMenu && (
              <ul className="submenu">
                <li><Link to="add-category">Add Category</Link></li>
                <li><Link to="view-category">View Category</Link></li>
              </ul>
            )}
          </div>

          <div className="menu">
            <button className="menu-item" onClick={() => setShowUserMenu(!showUserMenu)}>
              Manage Users ▸
            </button>
            {showUserMenu && (
              <ul className="submenu">
                <li><Link to="all-users">All Users</Link></li>
                <li><Link to="add-admin">Add Admin</Link></li>
              </ul>
            )}
          </div>

          {/* Dashboard Menu */}
          <div className="menu">
            <button className="menu-item" onClick={() => navigate("/admin-dashboard")}>
              Dashboard ▸
            </button>
          </div>

        </nav>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h3>Welcome to Admin Dashboard</h3>
          <button className="logout-btn-header" onClick={handleLogout}>
            Logout
          </button>
        </header>

        <div className="dashboard-main-content">
          {isDashboardMain && (
            <div className="stats-cards">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Categories</h5>
                <p className="card-text">{totalCategories}</p>
              </div>
            </div>
          
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text">{totalUsers}</p>
              </div>
            </div>
          
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Expenses</h5>
                <p className="card-text">{totalExpenses}</p>
              </div>
            </div>
          
           
          
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Budgets</h5>
                <p className="card-text">{totalBudgets}</p>
              </div>
            </div>
          </div>
        //   <ExpenseChart />
          
          
          )}

          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
