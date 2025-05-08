// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/ViewExpense.css';

// const ViewExpense = () => {
//   // Mock data (replace this with actual data from API or props)
//   const expenses = [
//     { id: 1, title: 'Groceries', amount: 1200 },
//     { id: 2, title: 'Rent', amount: 5000 },
//     { id: 3, title: 'Internet', amount: 700 },
//   ];

//   return (
//     <div className="view-expense-container">
//       <div className="view-expense-header">
//         <h2>All Expenses</h2>
//         <Link to="/user/dashboard/add-expense" className="btn-add-expense">
//           + Add Expense
//         </Link>
//       </div>

//       <div className="expense-list">
//         {expenses.length > 0 ? (
//           expenses.map((expense) => (
//             <div key={expense.id} className="expense-item">
//               <span className="expense-title">{expense.title}</span>
//               <span className="expense-amount">Rs. {expense.amount}</span>
//             </div>
//           ))
//         ) : (
//           <p>No expenses found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewExpense;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewExpense = () => {
  const [expenses, setExpenses] = useState([]);
  const uid = localStorage.getItem('uid');

  useEffect(() => {
    if (uid) {
      axios.get(`http://localhost:8080/user/viewExpenseByUid?uid=${uid}`)
        .then(response => setExpenses(response.data))
        .catch(error => console.error('Error fetching expenses:', error));
    }
  }, [uid]);
  

  return (
    <div>
      <h2>Transaction History</h2>
      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Price</th>
              <th>Payment Method</th>
              <th>Description</th>
              <th>Date</th>
              <th>Category</th> {/* Optional: only if you want to show cid */}
            </tr>
          </thead>
          <tbody>
            {expenses.map(exp => (
              <tr key={exp.eid}>
                <td>{exp.ename}</td> 
                <td>{exp.eprice}</td>
                <td>{exp.paymentMethod}</td>
                <td>{exp.description}</td>
                <td>{exp.expenseDate}</td>
                <td>{exp.categoryName}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewExpense;
