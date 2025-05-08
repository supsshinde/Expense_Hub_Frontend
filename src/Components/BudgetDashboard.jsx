import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BudgetDashboard.css';

const BudgetDashboard = () => {
  const [budgets, setBudgets] = useState([]);

  const uid = localStorage.getItem("uid");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    fetch(`http://localhost:8080/api/budgets/user/${userId}`)
      .then((res) => res.json())
      .then((data) => setBudgets(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="budget-dashboard-container">
      <div className="budget-header">
        <h2>Your Budgets</h2>
        <Link to="/user/dashboard/add-budget" className="btn-add-budget">
          Add Budget
        </Link>
      </div>

      {budgets.length === 0 ? (
        <p>No budgets found.</p>
      ) : (
        <table className="budget-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount (Rs.)</th>
              <th>Month</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget) => (
              <tr key={budget.id}>
                <td>{budget.category}</td>
                <td>{budget.amount}</td>
                <td>{budget.month}</td>
                <td>
                  <Link to={`/user/dashboard/edit-budget/${budget.id}`} className="btn-edit">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BudgetDashboard;
