import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/viewExpense.css";
import { useNavigate } from "react-router-dom";
function ViewExpense() {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    axios
      .get("http://localhost:8080/user/viewExpense")
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });
  };

  const handleDelete = (eid) => {
    const confirm = window.confirm("Are you sure you want to delete this expense?");
    if (confirm) {
      axios
      .delete(`http://localhost:8080/user/deleteById/${eid}`)

        .then((response) => {
          alert(response.data);
          fetchExpenses(); // refresh list after delete
        })
        .catch((error) => {
          console.error("Error deleting expense:", error);
          alert("Failed to delete expense");
        });
    }
  };

  const handleUpdate = (eid) => {
    navigate(`/dashboard/update-expense/${eid}`);
  };
  

  return (
    <div className="view-expense-container">
      <h2>All Expenses</h2>
      <table className="expense-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Description</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.eid}>
              <td>{exp.eid}</td>
              <td>{exp.ename}</td>
              <td>₹{exp.eprice}</td>
              <td>{exp.paymentMethod}</td>
              <td>{exp.description}</td>
              {/* <td>{exp.category?.cname}</td> */}
              <td>{exp.categoryName}</td>
              {/* <td>{exp.edate}</td> ✅ Displaying date */}
              <td>{new Date(exp.expenseDate).toLocaleDateString()}</td>


              <td>
                <button className="update-btn" onClick={() => handleUpdate(exp.eid)}>
                  Update
                </button>
                <button className="delete-btn" onClick={() => handleDelete(exp.eid)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewExpense;
