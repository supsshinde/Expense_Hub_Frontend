import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AddExpense.css';

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic goes here
    console.log(formData);
  };

  return (
    <div className="add-expense-container">
      <div className="add-expense-header">
        <h2>Add Expense</h2>
        <Link to="/user/dashboard/view-expense" className="btn-view-expense">
          View Expenses
        </Link>
      </div>

      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit-expense">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
