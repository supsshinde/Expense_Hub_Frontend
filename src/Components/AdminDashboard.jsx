import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { FaUserAlt, FaTh, FaChartPie, FaSignOutAlt } from "react-icons/fa";
import "../styles/Admindashboard.css";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const AdminDashboard = () => {
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboardMain = location.pathname === "/adminDashboard";

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [catRes, userRes] = await Promise.all([
          fetch("http://localhost:8080/admin/countCategory"),
          fetch("http://localhost:8080/admin/countUsers"),
        ]);

        const [catData, userData] = await Promise.all([
          catRes.json(),
          userRes.json(),
        ]);

        setTotalCategories(catData);
        setTotalUsers(userData);
      } catch (error) {
        console.error("Fetching counts error:", error);
      }
    };

    fetchCounts();
  }, []);

  const handleLogout = () => {
    navigate("/Home");
  };

  const chartData = {
    labels: ["Total Categories", "Total Users"],
    datasets: [
      {
        data: [totalCategories, totalUsers],
        backgroundColor: ["#3498db", "#2ecc71"],
        borderColor: ["#2980b9", "#27ae60"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">AdminHub</h2>
        <nav className="sidebar-nav">
          <div className="menu">
            <button className="menu-item" onClick={() => navigate("/adminDashboard")}>
              <FaChartPie /> &nbsp; Dashboard
            </button>
          </div>
          <div className="menu">
            <button className="menu-item" onClick={() => navigate("view-category")}>
              <FaTh /> &nbsp; Categories
            </button>
          </div>
          <div className="menu">
            <button className="menu-item" onClick={() => navigate("all-users")}>
              <FaUserAlt /> &nbsp; Users
            </button>
          </div>
          <div className="menu">
            <button className="menu-item logout-btn text-danger" onClick={handleLogout}>
              <FaSignOutAlt /> &nbsp; Logout
            </button>
          </div>
        </nav>
      </aside>

      <main className="dashboard-content">
      <header className="dashboard-header">
      <h3>Welcome, Admin!</h3>
      <div className="profile-section">
        <span className="profile-name">Admin</span>
        <div className="profile-avatar">
          <FaUserAlt size={24} /> {/* Default icon for profile */}
        </div>
      </div>
     </header>


        <div className="dashboard-main">
          {isDashboardMain && (
            <>

              <div className="stats-section">
                <div className="stats-grid">
                  {[
                    {
                      id: 1,
                      title: "Total Categories",
                      value: totalCategories,
                      description: "Categories currently active in the system.",
                      icon: <FaTh size={32} />,
                      actionLabel: "+ Add Category",
                      actionPath: "add-category",
                    },
                    {
                      id: 2,
                      title: "Total Users",
                      value: totalUsers,
                      description: "Users registered on the platform.",
                      icon: <FaUserAlt size={32} />,
                      actionLabel: "View Users",
                      actionPath: "all-users",
                    },
                  ].map((stat) => (
                    <div key={stat.id} className="stats-card animate">
                      <div className="stats-icon">{stat.icon}</div>
                      <h3 className="stats-title">{stat.title}</h3>
                      <p className="stats-value">{stat.value}</p>
                      <p className="stats-description">{stat.description}</p>
                      {stat.actionLabel && (
                        <button
                          className="stats-action-btn"
                          onClick={() => navigate(stat.actionPath)}
                        >
                          {stat.actionLabel}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="dashboard-charts">
                <div className="chart-container pie-chart">
                  <Pie data={chartData} options={chartOptions} />
                </div>
              </div>
            </>
          )}

          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
