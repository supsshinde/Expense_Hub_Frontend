import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/BudgetForm.css";
const BudgetForm = ({ fetchBudgets, editingBudget, setEditingBudget }) => {
  const [budgetAmount, setBudgetAmount] = useState("");
  const [endDate, setEndDate] = useState("");

  const uid = 1; // Replace with logged-in user's uid

  useEffect(() => {
    if (editingBudget) {
      setBudgetAmount(editingBudget.budgetAmount);
      setEndDate(editingBudget.endDate);
    }
  }, [editingBudget]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      uid: uid,
      budgetAmount: parseFloat(budgetAmount),
      endDate: endDate,
    };

    try {
      if (editingBudget) {
        // Update
        await axios.put("http://localhost:8080/user/updateBudgetById", {
          ...payload,
          bid: editingBudget.bid,
          startDate: editingBudget.startDate, // send original startDate
        });
        setEditingBudget(null);
      } else {
        // Add
        await axios.post("http://localhost:8080/user/addBudget", payload);
      }
      setBudgetAmount("");
      setEndDate("");
      fetchBudgets();
    } catch (err) {
      console.error("Error adding/updating budget", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editingBudget ? "Update Budget" : "Add Budget"}</h3>
      <input
        type="number"
        placeholder="Budget Amount"
        value={budgetAmount}
        onChange={(e) => setBudgetAmount(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <button type="submit">{editingBudget ? "Update" : "Add"}</button>
    </form>
  );
};

export default BudgetForm;
