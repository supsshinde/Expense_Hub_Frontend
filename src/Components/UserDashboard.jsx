import React from 'react';
import '../styles/UserDashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">💰 MyWallet</div>
        <ul className="menu">
          <li className="active">Dashboard</li>
          <li>Transactions History</li>
          <li>New Transaction</li>
          <li>Expenses</li>
          <li>Budget</li>
          <li>Settings</li>
          <li className="logout text-danger">Log out</li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="header">
          <h1>Dashboard</h1>
          <select className="month-select">
            <option>April 2024</option>
          </select>
          <div className="user-info">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="user-avatar"
            />
            <div>
              <div className="user-name">John Doe</div>
              <div className="user-email">xofaxip603@giratex.com</div>
            </div>
          </div>
        </div>

        <div className="summary-cards">
          <div className="card income">Rs. 15000 <span>Income</span></div>
          <div className="card expense">Rs. 8540 <span>Expense</span></div>
          <div className="card cash">Rs. 6460 <span>Cash in hand</span></div>
          <div className="card transactions">15 <span>No of transactions</span></div>
        </div>

        <div className="charts">
          <div className="chart-placeholder">[ Pie Chart Placeholder ]</div>
          <div className="chart-placeholder">[ Budget Chart Placeholder ]</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
