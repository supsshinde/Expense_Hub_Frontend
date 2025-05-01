import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ViewExpense.css';

const ViewExpense = () => {
  // Mock data (replace this with actual data from API or props)
  const expenses = [
    { id: 1, title: 'Groceries', amount: 1200 },
    { id: 2, title: 'Rent', amount: 5000 },
    { id: 3, title: 'Internet', amount: 700 },
  ];

  return (
    <div className="view-expense-container">
      <div className="view-expense-header">
        <h2>All Expenses</h2>
        <Link to="/user/dashboard/add-expense" className="btn-add-expense">
          + Add Expense
        </Link>
      </div>

      <div className="expense-list">
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <span className="expense-title">{expense.title}</span>
              <span className="expense-amount">Rs. {expense.amount}</span>
            </div>
          ))
        ) : (
          <p>No expenses found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewExpense;
