// // src/Components/UserDashboard.jsx
// import React from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import ExpensePieChart from './ExpensePiechart';
// import BudgetPieChart from "./BudgetPiechart";
// import '../styles/UserDashboard.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faTachometerAlt,
//   faHistory,
//   faCreditCard,
//   faChartPie,
//   faCogs,
//   faSignOutAlt
// } from '@fortawesome/free-solid-svg-icons';

// const Dashboard = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const showDefaultDashboard = currentPath === '/user/dashboard';
//   const isActive = (path) => currentPath === path;

//   // Dummy values
//   const totalIncome = 15000;
//   const totalSpent = 8540;
//   const totalBudget = 10000;
//   const transactionCount = 15;

//   const expenseData = [
//     { name: 'Food', amount: 3500 },
//     { name: 'Rent', amount: 4000 },
//     { name: 'Utilities', amount: 1040 },
//   ];

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <div className="logo">💰 MyWallet</div>
//         <ul className="menu">
//           <li className={isActive('/user/dashboard') ? 'active' : ''}>
//             <Link to="/user/dashboard">
//               <FontAwesomeIcon icon={faTachometerAlt} /> <span>Dashboard</span>
//             </Link>
//           </li>
//           <li className={isActive('/user/dashboard/view-expense') ? 'active' : ''}>
//             <Link to="/user/dashboard/view-expense">
//               <FontAwesomeIcon icon={faHistory} /> <span>Transactions History</span>
//             </Link>
//           </li>
//           <li className={isActive('/user/dashboard/view-expense') ? 'active' : ''}>
//             <Link to="/user/dashboard/add-expense">
//               <FontAwesomeIcon icon={faCreditCard} /> <span>Expenses</span>
//             </Link>
//           </li>
//           <li className={isActive('/user/dashboard/view-budget') ? 'active' : ''}>
//             <Link to="/user/dashboard/budget">
//               <FontAwesomeIcon icon={faChartPie} /> <span>Budget</span>
//             </Link>
//           </li>
//           <li className={isActive('/user/dashboard/view-profile') ? 'active' : ''}>
//             <Link to="/user/dashboard/view-profile">
//               <FontAwesomeIcon icon={faCogs} /> <span>Settings</span>
//             </Link>
//           </li>
//           <li className="logout text-danger">
//             <FontAwesomeIcon icon={faSignOutAlt} /> <span>Log out</span>
//           </li>
//         </ul>

//       </aside>

//       <main className="main-content">
//         <div className="header">
//           <div className="header-left">
//             <h1>📊 Dashboard</h1>
//           </div>
//           <div className="user-info">
//             <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
//             <div className="user-details">
//               <div className="user-name">John Doe</div>
//               <div className="user-email">xofaxip603@giratex.com</div>
//             </div>
//           </div>
//         </div>

//         {showDefaultDashboard ? (
//           <>
//             <div className="summary-cards">
//               <div className="card income">
//                 <i className="fas fa-wallet"></i>
//                 <div>Income</div>
//                 <span>${totalIncome}</span>
//               </div>
//               <div className="card expense">
//                 <i className="fas fa-credit-card"></i>
//                 <div>Expense</div>
//                 <span>${totalSpent}</span>
//               </div>
//               <div className="card cash">
//                 <i className="fas fa-cash-register"></i>
//                 <div>Cash</div>
//                 <span>${totalIncome - totalSpent}</span>
//               </div>
//               <div className="card transactions">
//                 <i className="fas fa-exchange-alt"></i>
//                 <div>Transactions</div>
//                 <span>{transactionCount}</span>
//               </div>
//             </div>

//             <div className="charts">
//               <ExpensePieChart data={expenseData} />
//               <BudgetPieChart totalSpent={totalSpent} totalBudget={totalBudget} />
//             </div>
//           </>
//         ) : (
//           <div className="nested-content">
//             <Outlet />
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import ExpensePieChart from './ExpensePiechart';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import BudgetPieChart from "./BudgetPiechart";
import '../styles/UserDashboard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faHistory,
  faCreditCard,
  faChartPie,
  faCogs,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const showDefaultDashboard = currentPath === '/user/dashboard';
  const isActive = (path) => currentPath === path;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const uid = localStorage.getItem('uid');
    if (uid) {
      fetch(`http://localhost:8080/user/viewProfile/${uid}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error("Failed to fetch user profile:", err));
    }
  }, []);

  // Dummy values
  const totalIncome = 15000;
  const totalSpent = 8540;
  const totalBudget = 10000;
  const transactionCount = 15;

  const expenseData = [
    { name: 'Food', amount: 3500 },
    { name: 'Rent', amount: 4000 },
    { name: 'Utilities', amount: 1040 },
  ];

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.clear(); // or remove specific items like localStorage.removeItem('uid');
  navigate('/'); // Redirect to home page
};

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">💰 MyWallet</div>
        <ul className="menu">
          <li className={isActive('/user/dashboard') ? 'active' : ''}>
            <Link to="/user/dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} /> <span>Dashboard</span>
            </Link>
          </li>
          <li className={isActive('/user/dashboard/view-expense') ? 'active' : ''}>
            <Link to="/user/dashboard/view-expense">
              <FontAwesomeIcon icon={faHistory} /> <span>Transactions History</span>
            </Link>
          </li>
          <li className={isActive('/user/dashboard/add-expense') ? 'active' : ''}>
            <Link to="/user/dashboard/add-expense">
              <FontAwesomeIcon icon={faCreditCard} /> <span>Expenses</span>
            </Link>
          </li>
          <li className={isActive('/user/dashboard/budget') ? 'active' : ''}>
            <Link to="/user/dashboard/budget">
              <FontAwesomeIcon icon={faChartPie} /> <span>Budget</span>
            </Link>
          </li>
          <li className={isActive('/user/dashboard/view-profile') ? 'active' : ''}>
            <Link to="/user/dashboard/view-profile">
              <FontAwesomeIcon icon={faCogs} /> <span>Settings</span>
            </Link>
          </li>
          <li className="logout text-danger" onClick={handleLogout} style={{ cursor: 'pointer' }}>
  <FontAwesomeIcon icon={faSignOutAlt} /> <span>Log out</span>
</li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="header">
          <div className="header-left">
            <h1>📊 Welcome {user ? user.uname : 'Loading...'} </h1>
          </div>
          <div className="user-info">
            <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
            <div className="user-details">
              <div className="user-name">{user ? user.uname : 'Loading...'}</div>
              <div className="user-email">{user ? user.email : ''}</div>
            </div>
          </div>
        </div>

        {showDefaultDashboard ? (
          <>
            <div className="summary-cards">
              <div className="card income">
                <i className="fas fa-wallet"></i>
                <div>Income</div>
                <span>${totalIncome}</span>
              </div>
              <div className="card expense">
                <i className="fas fa-credit-card"></i>
                <div>Expense</div>
                <span>${totalSpent}</span>
              </div>
              <div className="card cash">
                <i className="fas fa-cash-register"></i>
                <div>Cash</div>
                <span>${totalIncome - totalSpent}</span>
              </div>
              <div className="card transactions">
                <i className="fas fa-exchange-alt"></i>
                <div>Transactions</div>
                <span>{transactionCount}</span>
              </div>
            </div>

            <div className="charts">
              <ExpensePieChart data={expenseData} />
              <BudgetPieChart totalSpent={totalSpent} totalBudget={totalBudget} />
            </div>
          </>
        ) : (
          <div className="nested-content">
            <Outlet />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
