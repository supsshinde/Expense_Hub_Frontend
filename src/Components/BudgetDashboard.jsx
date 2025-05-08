import React, { useEffect, useState } from "react";
import BudgetForm from "./BudgetForm";
import axios from "axios";
import "../styles/Budget.css";

const BudgetDashboard = () => {
  const [budgets, setBudgets] = useState([]);
  const [editingBudget, setEditingBudget] = useState(null);
  const [summary, setSummary] = useState({ totalBudget: 0, totalExpense: 0, message: "" });

  const uid = localStorage.getItem("uid");

  const fetchBudgets = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/user/viewBudgetsByUid/${uid}`);
      setBudgets(res.data);
    } catch (err) {
      console.error("Error fetching budgets:", err);
    }
  };

  const fetchBudgetSummary = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/user/budget-expense-summary/${uid}`);
      setSummary(res.data);
    } catch (err) {
      console.error("Error fetching budget summary:", err);
    }
  };

  const handleDelete = async (bid) => {
    try {
      await axios.delete(`http://localhost:8080/user/deleteBudgetById/${bid}`);
      fetchBudgets();
      fetchBudgetSummary(); // update summary after deletion
    } catch (err) {
      console.error("Error deleting budget:", err);
    }
  };

  useEffect(() => {
    fetchBudgets();
    fetchBudgetSummary();
  }, []);

  return (
    <div className="budget-dashboard">
      <h2>Budget Dashboard</h2>

      <div className="budget-summary">
        <p><strong>Total Budget:</strong> ₹{summary.totalBudget}</p>
        <p><strong>Total Expense:</strong> ₹{summary.totalExpense}</p>
        <p><strong>Status:</strong> {summary.message}</p>
      </div>

      <BudgetForm
        uid={uid}
        fetchBudgets={fetchBudgets}
        editingBudget={editingBudget}
        setEditingBudget={setEditingBudget}
      />

      <table className="budget-table">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Amount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((b, index) => (
            <tr key={b.bid}>
              <td>{index + 1}</td>
              <td>₹{b.budgetAmount}</td>
              <td>{new Date(b.startDate).toLocaleDateString()}</td>
              <td>{new Date(b.endDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => setEditingBudget(b)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(b.bid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetDashboard;
