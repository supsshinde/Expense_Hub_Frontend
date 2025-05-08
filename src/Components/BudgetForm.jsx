// // BudgetForm.js

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/Budget.css";
// import "../styles/BudgetForm.css";

// const BudgetForm = ({ fetchBudgets, editingBudget, setEditingBudget, uid }) => {
//   const [budgetAmount, setBudgetAmount] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     if (editingBudget) {
//       setBudgetAmount(editingBudget.budgetAmount);
//       setEndDate(editingBudget.endDate);
//     }
//   }, [editingBudget]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Include startDate when editing
//     const budgetData = {
//       budgetAmount,
//       endDate,
//       uid: uid,
//       ...(editingBudget && { startDate: editingBudget.startDate })
//     };

//     try {
//       if (editingBudget) {
//         // Update existing budget
//         await axios.put(`http://localhost:8080/user/updateBudgetById/${editingBudget.bid}`, budgetData);

//         console.log("Budget updated successfully!");
//         alert("Budget updated successfully!");
//         setEditingBudget(null);
//       } else {
//         // Add new budget
//         await axios.post("http://localhost:8080/user/addBudget", budgetData);

//         console.log("Budget added successfully!");
//         alert("Budget added successfully!");
//       }

//       setBudgetAmount("");
//       setEndDate("");
//       fetchBudgets();
//     } catch (err) {
//       console.error("Error saving budget", err);
//       alert("Something went wrong! Please try again.");
//     }
//   };

//   const handleCancel = () => {
//     setEditingBudget(null);
//     setBudgetAmount("");
//     setEndDate("");
//   };

//   return (
//     <div className="budget-form">
//       <h3>{editingBudget ? "Edit Budget" : "Add Budget"}</h3>

//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Budget Amount:</label>
//           <input
//             type="number"
//             value={budgetAmount}
//             onChange={(e) => setBudgetAmount(e.target.value)}
//             required
//             placeholder="Enter budget amount"
//           />
//         </div>

//         <div className="form-group">
//           <label>End Date:</label>
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-buttons">
//           <button type="submit" className="submit-button">
//             {editingBudget ? "Update Budget" : "Add Budget"}
//           </button>

//           {editingBudget && (
//             <button type="button" className="cancel-button" onClick={handleCancel}>
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BudgetForm;
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/BudgetForm.css';

const BudgetForm = ({ uid, fetchBudgets, editingBudget, setEditingBudget }) => {
  const [budgetAmount, setBudgetAmount] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (editingBudget) {
      setBudgetAmount(editingBudget.budgetAmount);
      setEndDate(editingBudget.endDate);
    }
  }, [editingBudget]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const budgetData = {
      uid,
      budgetAmount,
      endDate,
      ...(editingBudget && { startDate: editingBudget.startDate }),
    };

    try {
      if (editingBudget) {
        await axios.put(`http://localhost:8080/user/updateBudgetById/${editingBudget.bid}`, budgetData);
        alert("Budget updated!");
      } else {
        await axios.post("http://localhost:8080/user/addBudget", budgetData);
        alert("Budget added!");
      }

      resetForm();
      fetchBudgets();
    } catch (err) {
      console.error("Error saving budget:", err);
      alert("Something went wrong!");
    }
  };

  const resetForm = () => {
    setBudgetAmount("");
    setEndDate("");
    setEditingBudget(null);
  };

  return (
    <form onSubmit={handleSubmit} className="budget-form">
  <h3>{editingBudget ? "Edit Budget" : "Add Budget"}</h3>

  <div className="form-row">
    <div className="form-group">
      <label>Budget Amount</label>
      <input
        type="number"
        value={budgetAmount}
        onChange={(e) => setBudgetAmount(e.target.value)}
        required
        placeholder="Enter budget amount"
      />
    </div>

    <div className="form-group">
      <label>End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
    </div>
  </div>

  <div className="button-group">
    <button type="submit" className="btn-submit">
      {editingBudget ? "Update" : "Add"}
    </button>
    {editingBudget && (
      <button onClick={resetForm} type="button" className="btn-cancel">
        Cancel
      </button>
    )}
  </div>
</form>

  );
};

export default BudgetForm;
