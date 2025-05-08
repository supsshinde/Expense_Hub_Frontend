// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/AddExpense.css';

// const AddExpense = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     amount: '',
//     date: '',
//     category: '',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit logic goes here
//     console.log(formData);
//   };

//   return (
//     <div className="add-expense-container">
//       <div className="add-expense-header">
//         <h2>Add Expense</h2>
//         <Link to="/user/dashboard/view-expense" className="btn-view-expense">
//           View Expenses
//         </Link>
//       </div>

//       <form className="expense-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Amount</label>
//           <input
//             type="number"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Date</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Category</label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn-submit-expense">
//           Add Expense
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddExpense;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AddExpense.css';
const AddExpense = () => {
  const [expense, setExpense] = useState({
    ename: '',
    eprice: '',
    paymentMethod: '',
    description: '',
    cid: '',
  });

  const [categories, setCategories] = useState([]);
  const uid = localStorage.getItem('uid');

  useEffect(() => {
    axios.get('http://localhost:8080/user/category/viewCategory') // Adjust to your actual endpoint
      .then(res => setCategories(res.data))
      .catch(err => console.error('Error fetching categories', err));
  }, []);

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...expense,
      uid: parseInt(uid)
      // Don't send expenseDate
    };

    axios.post('http://localhost:8080/user/addExpense', payload)
      .then(() => {
        alert("Expense added successfully!");
        setExpense({
          ename: '',
          eprice: '',
          paymentMethod: '',
          description: '',
          cid: '',
        });
      })
      .catch(err => console.error('Error adding expense', err));
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
  <input name="ename" placeholder="Expense Name" value={expense.ename} onChange={handleChange} required />
  <input name="eprice" placeholder="Amount" type="number" value={expense.eprice} onChange={handleChange} required />
  
  <select name="paymentMethod" value={expense.paymentMethod} onChange={handleChange} required>
    <option value="">Select Payment Method</option>
    <option value="Card">Card</option>
    <option value="Cash">Cash</option>
    <option value="UPI">UPI</option>
  </select>

  <input name="description" placeholder="Description" value={expense.description} onChange={handleChange} required />
  
  <select name="cid" value={expense.cid} onChange={handleChange} required>
    <option value="">Select Category</option>
    {categories.map(c => (
      <option key={c.cid} value={c.cid}>{c.cname}</option>
    ))}
  </select>
  
  <button type="submit">Add Expense</button>
</form>

    </div>
  );
};

export default AddExpense;
