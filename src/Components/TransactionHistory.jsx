// import React, { useEffect, useState } from 'react';
// import '../styles/TransactionHistory.css';

// const TransactionHistory = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) return;

//     fetch(`http://localhost:8080/api/transactions/user/${userId}`)
//       .then((res) => res.json())
//       .then((data) => setTransactions(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="transaction-history-container">
//       <h2>Your Transaction History</h2>
//       {transactions.length === 0 ? (
//         <p>No transactions found.</p>
//       ) : (
//         <table className="transaction-table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Amount (Rs.)</th>
//               <th>Date</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((tx) => (
//               <tr key={tx.id}>
//                 <td>{tx.title}</td>
//                 <td>{tx.amount}</td>
//                 <td>{tx.date}</td>
//                 <td>{tx.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default TransactionHistory;
