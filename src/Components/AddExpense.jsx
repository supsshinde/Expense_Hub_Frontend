import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/addExpense.css"; // Your CSS file

function AddExpense() {
  const [expense, setExpense] = useState({
    ename: "",
    eprice: "",
    paymentMethod: "",
    description: "",
    cid: "",
    uid: localStorage.getItem("uid"), // ✅ get uid from localStorage
  });

  const [categories, setCategories] = useState([]);

  // ✅ Fetch category list from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/viewCategory")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Ensure uid is present
    const uid = localStorage.getItem("uid");
    if (!uid) {
      alert("User not logged in");
      return;
    }

    // ✅ Add uid to the expense object before sending
    const updatedExpense = { ...expense, uid: uid };

    axios
      .post("http://localhost:8080/user/addExpense", updatedExpense)
      .then((response) => {
        alert(response.data);
        setExpense({
          ename: "",
          eprice: "",
          paymentMethod: "",
          description: "",
          cid: "",
          uid: uid, // ✅ Preserve uid
        });
      })
      .catch((error) => {
        console.error("Error adding expense:", error);
        alert("Failed to add expense");
      });
  };

  return (
    <div className="add-expense-form">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="ename"
          value={expense.ename}
          onChange={handleChange}
          placeholder="Expense Name"
          required
        />
        <input
          type="number"
          name="eprice"
          value={expense.eprice}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <select
          name="paymentMethod"
          value={expense.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
        </select>
        <textarea
          name="description"
          value={expense.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <select name="cid" value={expense.cid} onChange={handleChange} required>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.cid} value={cat.cid}>
              {cat.cname}
            </option>
          ))}
        </select>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
