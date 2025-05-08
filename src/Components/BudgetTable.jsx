// export default BudgetTable;
import React, { useEffect, useState } from "react";
import axios from "axios";
import BudgetForm from "./BudgetForm";
import "../styles/Budget.css";
import "../styles/BudgetTable.css";

const BudgetTable = ({ uid }) => {
  const [budgets, setBudgets] = useState([]);
  const [editingBudget, setEditingBudget] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBudgets = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`http://localhost:8080/user/viewBudgetsByUid/${uid}`);
      setBudgets(res.data);
    } catch (err) {
      console.error("Error fetching budgets", err);
      setError("Something went wrong while fetching budgets.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (bid) => {
    try {
      await axios.delete(`http://localhost:8080/user/deletebudetById/${bid}`);
      fetchBudgets();
    } catch (err) {
      console.error("Error deleting budget", err);
      setError("Failed to delete budget.");
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  return (
    <div className="budget-wrapper">
      <div className="budget-form-wrapper">
        <BudgetForm
          fetchBudgets={fetchBudgets}
          editingBudget={editingBudget}
          setEditingBudget={setEditingBudget}
          uid={uid}
        />
      </div>

      <div className="budget-table-container">
        <h3>Budget Records</h3>

        {loading ? (
          <div className="spinner"></div>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : budgets.length === 0 ? (
          <p>No budgets found.</p>
        ) : (
          <table className="budget-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Amount (₹)</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {budgets.map((b, index) => (
                <tr key={b.bid}>
                  <td>{index + 1}</td>
                  <td>{b.budgetAmount}</td>
                  <td>{b.startDate}</td>
                  <td>{b.endDate}</td>
                  <td>
                    <button className="edit-button" onClick={() => setEditingBudget(b)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="delete-button" onClick={() => handleDelete(b.bid)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BudgetTable;
