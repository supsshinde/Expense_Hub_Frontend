


// import React, { useState } from "react";
// import { useNavigate, Link, Outlet } from "react-router-dom";
// import "../index.css";

// const Dashboard = () => {
//   const [showExpenseMenu, setShowExpenseMenu] = useState(false);
//   const [showBudgetMenu, setShowBudgetMenu] = useState(false);
//   const navigate = useNavigate();

//   const toggleExpenseMenu = () => setShowExpenseMenu(!showExpenseMenu);
//   const toggleBudgetMenu = () => setShowBudgetMenu(!showBudgetMenu);

//   const handleLogout = () => {
//     navigate("/LoginUser");
//   };

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <h2 className="sidebar-title">XpenseHub</h2>
//         <nav className="menu">
//           <div className="menu-item" onClick={toggleExpenseMenu}>
//             Expense ▸
//             {showExpenseMenu && (
//               <ul className="submenu">
//                 <li><Link to="add-expense">Add Expense</Link></li>
//                 <li><Link to="view-expense">View Expense</Link></li>
//               </ul>
//             )}
//           </div>
//           <div className="menu-item" onClick={toggleBudgetMenu}>
//             Budget ▸
//             {showBudgetMenu && (
//               <ul className="submenu">
//                 <li><Link to="add-budget">Add Budget</Link></li>
//                 <li><Link to="view-budget">View Budget</Link></li>
//               </ul>
//             )}
//           </div>
//         </nav>
//       </aside>

//       <main className="dashboard-content">
//         <div className="dashboard-header">
//           <span>Welcome to Your Expense Dashboard</span>
//           <button className="logout-btn-header" onClick={handleLogout}>Logout</button>
//         </div>

//         <div className="dashboard-main-content">
//           {/* Here goes nested content like AddExpense, ViewExpense */}
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState } from "react";
// import { useNavigate, Link, Outlet } from "react-router-dom";
// import "../styles/dashboard.css"
// import "../index.css";

// const Dashboard = () => {
//   const [showExpenseMenu, setShowExpenseMenu] = useState(false);
//   const [showBudgetMenu, setShowBudgetMenu] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/LoginUser");
//   };

//   return (
//     <div className="dashboard-container" style={{ display: "flex", height: "100vh" }}>
//       <aside className="sidebar" style={{ width: "250px", background: "#333", color: "#fff", padding: "20px" }}>
//         <h2>XpenseHub</h2>
//         <nav>
//           <div>
//             <button onClick={() => setShowExpenseMenu(!showExpenseMenu)} style={{ color: "white", background: "none", border: "none" }}>
//               Expense ▸
//             </button>
//             {showExpenseMenu && (
//               <ul>
//                 <li><Link to="add-expense" style={{ color: "white" }}>Add Expense</Link></li>
//                 <li><Link to="view-expense" style={{ color: "white" }}>View Expense</Link></li>
//               </ul>
//             )}
//           </div>
//           <div>
//             <button onClick={() => setShowBudgetMenu(!showBudgetMenu)} style={{ color: "white", background: "none", border: "none" }}>
//               Budget ▸
//             </button>
//             {showBudgetMenu && (
//               <ul>
//                 <li><Link to="add-budget" style={{ color: "white" }}>Add Budget</Link></li>
//                 <li><Link to="view-budget" style={{ color: "white" }}>View Budget</Link></li>
//               </ul>
//             )}
//           </div>
//         </nav>
//       </aside>

//       <main style={{ flexGrow: 1, padding: "20px" }}>
//         <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
//           <h3>Welcome to Your Dashboard</h3>
//           <button onClick={handleLogout} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px" }}>
//             Logout
//           </button>
//         </header>
//         <div className="dashboard-main-content">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "../styles/dashboard.css";
// import "../index.css";

const Dashboard = () => {
  const [showExpenseMenu, setShowExpenseMenu] = useState(false);
  const [showBudgetMenu, setShowBudgetMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false); // ✅ New state for Profile menu

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/LoginUser");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">XpenseHub</h2>
        <nav className="sidebar-nav">
          {/* Expense Menu */}
          <div className="menu">
            <button className="menu-item" onClick={() => setShowExpenseMenu(!showExpenseMenu)}>
              Expense ▸
            </button>
            {showExpenseMenu && (
              <ul className="submenu">
                <li><Link to="add-expense">Add Expense</Link></li>
                <li><Link to="view-expense">View Expense</Link></li>
              </ul>
            )}
          </div>

          {/* Budget Menu */}
          <div className="menu">
            <button className="menu-item" onClick={() => setShowBudgetMenu(!showBudgetMenu)}>
              Budget ▸
            </button>
            {showBudgetMenu && (
              <ul className="submenu">
                <li><Link to="add-budget">Add Budget</Link></li>
                <li><Link to="view-budget">View Budget</Link></li>
              </ul>
            )}
          </div>

          {/* ✅ Profile Menu */}
          <div className="menu">
            <button className="menu-item" onClick={() => setShowProfileMenu(!showProfileMenu)}>
              Profile ▸
            </button>
            {showProfileMenu && (
              <ul className="submenu">
                <li><Link to="view-profile">View Profile</Link></li>
                <li><Link to="edit-profile">Edit Profile</Link></li>
              </ul>
            )}
          </div>
        </nav>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h3>Welcome to Your Dashboard</h3>
          <button className="logout-btn-header" onClick={handleLogout}>
            Logout
          </button>
        </header>
        <div className="dashboard-main-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
