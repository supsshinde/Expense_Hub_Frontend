import React, { useState } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import "../styles/dashboard.css";
import {
  FaWallet,
  FaHistory,
  FaPlusCircle,
  FaSave,
  FaChartPie,
  FaCog,
  FaSignOutAlt,
  FaRegUserCircle,
} from "react-icons/fa";

const Dashboard = () => {
  const [showExpenseMenu, setShowExpenseMenu] = useState(false);
  const [showBudgetMenu, setShowBudgetMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => navigate("/LoginUser");

  // Dummy data for stats
  const stats = [
    { label: "Income", value: "15 000", color: "green", icon: <FaWallet /> },
    { label: "Expense", value: "8 540", color: "crimson", icon: <FaChartPie /> },
    { label: "Cash in hand", value: "6 460", color: "royalblue", icon: <FaWallet /> },
    { label: "No of transactions", value: "15", color: "deeppink", icon: <FaHistory /> },
  ];

  // Determine if at dashboard root (no child route)
  const isDashboardRoot = location.pathname === "/dashboard" || location.pathname === "/";

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">MyWallet</h2>
        <nav className="sidebar-nav">
          <Link to="" className="menu-item">
            <FaWallet className="me-2" /> Dashboard
          </Link>

          {/* Expense menu */}
          <div className="menu">
            <div
              className="menu-item clickable"
              onClick={() => setShowExpenseMenu(!showExpenseMenu)}
            >
              <FaPlusCircle className="me-2" /> Expense
            </div>
            {showExpenseMenu && (
              <ul className="submenu">
                <li>
                  <Link
                    to="add-expense"
                    onClick={() => setShowExpenseMenu(false)}
                  >
                    Add Expense
                  </Link>
                </li>
                <li>
                  <Link
                    to="view-expense"
                    onClick={() => setShowExpenseMenu(false)}
                  >
                    View Expense
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Budget menu */}
          <div className="menu">
            <div
              className="menu-item clickable"
              onClick={() => setShowBudgetMenu(!showBudgetMenu)}
            >
              <FaChartPie className="me-2" /> Budget
            </div>
            {showBudgetMenu && (
              <ul className="submenu">
                <li>
                  <Link
                    to="add-budget"
                    onClick={() => setShowBudgetMenu(false)}
                  >
                    Add Budget
                  </Link>
                </li>
                <li>
                  <Link
                    to="view-budget"
                    onClick={() => setShowBudgetMenu(false)}
                  >
                    View Budget
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Settings menu */}
          <div className="menu">
            <div
              className="menu-item clickable"
              onClick={() => setShowSettingsMenu(!showSettingsMenu)}
            >
              <FaCog className="me-2" /> Settings
            </div>
            {showSettingsMenu && (
              <ul className="submenu">
               
                <li>
                  <Link
                    to="view-profile"
                    onClick={() => setShowSettingsMenu(false)}
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="edit-profile"
                    onClick={() => setShowSettingsMenu(false)}
                  >
                    Edit Profile
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="menu-item clickable logout-btn" onClick={handleLogout}>
            <FaSignOutAlt className="me-2" /> Log out
          </div>
        </nav>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <div className="header-left">
            <h3>Dashboard</h3>
            <select className="month-select">
              <option>April 2024</option>
              <option>May 2024</option>
            </select>
          </div>
          <div className="header-right">
            <FaRegUserCircle size={32} className="me-2 text-light" />
            <span className="text-light">John Doe</span>
          </div>
        </header>

        <div className="dashboard-main-content">
          {isDashboardRoot && (
            <>
              {/* Stats cards */}
              <div className="stats-row">
                {stats.map((s, i) => (
                  <div key={i} className="stat-card" style={{ borderTop: `4px solid ${s.color}` }}>
                    <div className="stat-icon" style={{ color: s.color }}>{s.icon}</div>
                    <div className="stat-info">
                      <div className="stat-value">Rs. {s.value}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="charts-row">
                <div className="chart-card">
                  <div className="chart-header">Expense Breakdown</div>
                  <div className="chart-body" />
                </div>
                <div className="chart-card">
                  <div className="chart-header d-flex justify-content-between align-items-center">
                    <span>Budget: 10 000</span>
                    <button className="btn-edit">Edit</button>
                  </div>
                  <div className="chart-body" />
                  <div className="chart-footer">Remaining: 1 460</div>
                </div>
              </div>
            </>
          )}

          {/* Render nested route */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
