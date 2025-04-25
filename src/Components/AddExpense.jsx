// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/addExpense.css"
// function AddExpense() {
//   const [expense, setExpense] = useState({
//     ename: "",
//     eprice: "",
//     payment_method: "",
//     description: "",
//     expense_date: "",
//     cid: ""
//   });

//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch categories to populate cid dropdown
//     axios.get("http://localhost:8080/categories")
//       .then((res) => setCategories(res.data))
//       .catch((err) => console.error("Failed to load categories", err));
//   }, []);

//   const handleChange = (e) => {
//     setExpense({ ...expense, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:8080/expenses", expense)
//       .then(() => {
//         alert("Expense added successfully!");
//         setExpense({
//           ename: "",
//           eprice: "",
//           payment_method: "",
//           description: "",
//           expense_date: "",
//           cid: ""
//         });
//       })
//       .catch((err) => {
//         console.error("Error adding expense:", err);
//         alert("Failed to add expense");
//       });
//   };

//   return (
//     <div className="form-container">
//       <h2>Add New Expense</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Expense Name*</label>
//         <input type="text" name="ename" value={expense.ename} onChange={handleChange} required />

//         <label>Amount</label>
//         <input type="number" name="eprice" value={expense.eprice} onChange={handleChange} step="0.01" />

//         <label>Payment Method*</label>
//         <select name="payment_method" value={expense.payment_method} onChange={handleChange} required>
//           <option value="">-- Select --</option>
//           <option value="Cash">Cash</option>
//           <option value="Card">Card</option>
//           <option value="UPI">UPI</option>
//         </select>

//         <label>Description</label>
//         <textarea name="description" value={expense.description} onChange={handleChange} />

//         <label>Date</label>
//         <input type="date" name="expense_date" value={expense.expense_date} onChange={handleChange} />

//         <label>Category</label>
//         <select name="cid" value={expense.cid} onChange={handleChange}>
//           <option value="">-- Select Category --</option>
//           {categories.map((cat) => (
//             <option key={cat.cid} value={cat.cid}>{cat.cname}</option>
//           ))}
//         </select>

//         <button type="submit">Add Expense</button>
//       </form>
//     </div>
//   );
// }

// export default AddExpense;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/addExpense.css"; // your CSS file

function AddExpense() {
  const [expense, setExpense] = useState({
    ename: "",
    eprice: "",
    paymentMethod: "",
    description: "",
    cid: "",
  });

  const [categories, setCategories] = useState([]); // ✅ This should come before useEffect

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
    axios
      .post("http://localhost:8080/user/addExpense", expense)
      .then((response) => {
        alert(response.data);
        setExpense({
          ename: "",
          eprice: "",
          paymentMethod: "",
          description: "",
          cid: "",
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
