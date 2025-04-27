// export default BudgetTable;
import React, { useEffect, useState } from "react";
import axios from "axios";
import BudgetForm from "./BudgetForm";
import "../styles/Budget.css";
import "../styles/BudgetTable.css"

const BudgetTable = () => {
  const [budgets, setBudgets] = useState([]);
  const [editingBudget, setEditingBudget] = useState(null);

  const fetchBudgets = async () => {
    const res = await axios.get("http://localhost:8080/user/viewBudgets");
    setBudgets(res.data);
  };

  const handleDelete = async (bid) => {
    await axios.delete(`http://localhost:8080/user/deletebudetById/${bid}`);
    fetchBudgets();
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
        />
      </div>

      <div className="budget-table-container">
        <h3>Budget Records</h3>
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
      </div>
    </div>
  );
};

export default BudgetTable;

