import React, { useState, useEffect } from "react";
import axios from "axios";
import BudgetTable from "./BudgetTable";
import "../styles/Budget.css"; // Make sure to import your CSS file

const BudgetDashboard = () => {
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    fetchBudgetTotal();
    fetchExpenseTotal();
  }, []);

  const fetchBudgetTotal = async () => {
    try {
      const res = await axios.get("http://localhost:8080/user/viewBudgets");
      const total = res.data.reduce((acc, b) => acc + b.budgetAmount, 0);
      setTotalBudget(total);
    } catch (err) {
      console.error("Error fetching budgets", err);
    }
  };

  const fetchExpenseTotal = async () => {
    try {
      const res = await axios.get("http://localhost:8080/user/viewExpense");
      const total = res.data.reduce((acc, exp) => acc + exp.eprice, 0);
      setTotalExpense(total);
    } catch (err) {
      console.error("Error fetching expenses", err);
    }
  };

  return (
    <div className="budget-summary">
      <h2>Manage Budget</h2>

      <div className="budget-info">
        <span className={totalExpense <= totalBudget ? "under-budget" : "over-budget"}>
          <strong>Total Budget:</strong> ₹{totalBudget}
        </span>
        <span className={totalExpense <= totalBudget ? "under-budget" : "over-budget"}>
          <strong>Total Expenses:</strong> ₹{totalExpense}
        </span>
      </div>

      {totalExpense > totalBudget && (
        <div className="warning-message">
          ⚠ Expense amount is greater than your budget!
        </div>
      )}

      <BudgetTable />
    </div>
  );
};

export default BudgetDashboard;
