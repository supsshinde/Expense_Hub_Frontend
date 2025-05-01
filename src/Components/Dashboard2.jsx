// import React, { useState } from "react";
// import { useNavigate, Link, Outlet } from "react-router-dom";



// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//  const Dashboard2 = () => {
//   const [showExpenseMenu, setShowExpenseMenu] = useState(false);
//   const [showBudgetMenu, setShowBudgetMenu] = useState(false);
//   const [showProfileMenu, setShowProfileMenu] = useState(false); // ✅ New state for Profile menu

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/LoginUser");
//   };

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <h2 className="sidebar-title">XpenseHub</h2>
//         <nav className="sidebar-nav">
//           {/* Expense Menu */}
//           <div className="menu">
//             <button className="menu-item" onClick={() => setShowExpenseMenu(!showExpenseMenu)}>
//               Expense ▸
//             </button>
//             {showExpenseMenu && (
//               <ul className="submenu">
//                 <li><Link to="add-expense">Add Expense</Link></li>
//                 <li><Link to="view-expense">View Expense</Link></li>
//               </ul>
//             )}
//           </div>

//           {/* Budget Menu */}
//           <div className="menu">
//             <button className="menu-item" onClick={() => setShowBudgetMenu(!showBudgetMenu)}>
//               Budget ▸
//             </button>
//             {showBudgetMenu && (
//               <ul className="submenu">
//                 <li><Link to="add-budget">Add Budget</Link></li>
//                 <li><Link to="view-budget">View Budget</Link></li>
//               </ul>
//             )}
//           </div>

//           {/* ✅ Profile Menu */}
//           <div className="menu">
//             <button className="menu-item" onClick={() => setShowProfileMenu(!showProfileMenu)}>
//               Profile ▸
//             </button>
//             {showProfileMenu && (
//               <ul className="submenu">
//                 <li><Link to="view-profile">View Profile</Link></li>
//                 <li><Link to="edit-profile">Edit Profile</Link></li>
//               </ul>
//             )}
//           </div>
//         </nav>
//       </aside>

//       <main className="dashboard-content">
//         <header className="dashboard-header">
//           <h3>Welcome to Your Dashboard</h3>
//           <button className="logout-btn-header" onClick={handleLogout}>
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

// export default Dashboard2;
