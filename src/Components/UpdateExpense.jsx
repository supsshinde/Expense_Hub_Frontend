// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/addExpense.css"; // ✅ reuse AddExpense styling
// import { useParams, useNavigate } from "react-router-dom";

// function UpdateExpense() {
//   const { eid } = useParams();
//   const navigate = useNavigate();

//   const [expense, setExpense] = useState({
//     ename: "",
//     eprice: "",
//     paymentMethod: "",
//     description: "",
//     cid: "",
//   });

//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch expense by ID
//     axios.get(`http://localhost:8080/user/getExpenseById/${eid}`)
//       .then((response) => setExpense(response.data))
//       .catch((error) => console.error("Error fetching expense:", error));

//     // Fetch category list
//     axios.get("http://localhost:8080/admin/viewCategory")
//       .then((response) => setCategories(response.data))
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, [eid]);

//   const handleChange = (e) => {
//     setExpense({ ...expense, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:8080/user/updateExpense/${eid}`, expense)
//       .then((res) => {
//         alert(res.data);
//         navigate("/dashboard/view-expense");
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Failed to update expense");
//       });
//   };

//   return (
//     <div className="add-expense-form">
//       <h2>Update Expense</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="ename"
//           value={expense.ename}
//           onChange={handleChange}
//           placeholder="Expense Name"
//           required
//         />
//         <input
//           type="number"
//           name="eprice"
//           value={expense.eprice}
//           onChange={handleChange}
//           placeholder="Amount"
//           required
//         />

//         <select
//           name="paymentMethod"
//           value={expense.paymentMethod}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Payment Method</option>
//           <option value="Cash">Cash</option>
//           <option value="Card">Card</option>
//           <option value="UPI">UPI</option>
//         </select>

//         <textarea
//           name="description"
//           value={expense.description}
//           onChange={handleChange}
//           placeholder="Description"
//         />

//         <select name="cid" value={expense.cid} onChange={handleChange} required>
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat.cid} value={cat.cid}>
//               {cat.cname}
//             </option>
//           ))}
//         </select>

//         <button type="submit">Update Expense</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateExpense;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/addExpense.css";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function UpdateExpense() {
  const { eid } = useParams();
  const navigate = useNavigate();

  const [expense, setExpense] = useState({
    ename: "",
    eprice: "",
    paymentMethod: "",
    description: "",
    cid: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/user/getExpenseById/${eid}`)
      .then((response) => setExpense(response.data))
      .catch((error) => console.error("Error fetching expense:", error));

    axios.get("http://localhost:8080/admin/viewCategory")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, [eid]);

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/user/updateExpense/${eid}`, expense)
      .then((res) => {
        toast.success("Expense updated successfully!");
        setTimeout(() => navigate("/dashboard/view-expense"), 2000);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update expense");
      });
  };

  return (
    <motion.div
      className="add-expense-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Update Expense</h2>
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

        <button type="submit">Update Expense</button>
      </form>
    </motion.div>
  );
}

export default UpdateExpense;

