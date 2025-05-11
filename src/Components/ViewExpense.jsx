// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "../styles/viewExpense.css";
// import { FaMoneyBillWave, FaCalendarAlt, FaCreditCard, FaTag, FaFileAlt, FaList,FaTrash,FaEdit } from 'react-icons/fa';

// const ViewExpense = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 6;

//   const uid = localStorage.getItem('uid');

//   useEffect(() => {
//     if (uid) {
//       axios.get(`http://localhost:8080/user/viewExpenseByUid?uid=${uid}`)
//         .then(response => setExpenses(response.data))
//         .catch(error => console.error('Error fetching expenses:', error));
//     }
//   }, [uid]);
//   const handleDelete = (eid) => {
//   if (window.confirm("Are you sure you want to delete this expense?")) {
//     axios.delete(`http://localhost:8080/user/deleteById/${eid}`)
//       .then(() => {
//         // Remove deleted expense from the state
//         setExpenses(prev => prev.filter(exp => exp.eid !== eid));
//       })
//       .catch(error => console.error("Delete error:", error));
//   }
// };
// const handleUpdate = (updatedExpense) => {
//   axios.put(`http://localhost:8080/user/updateExpense/${updatedExpense.eid}`, updatedExpense)
//     .then(response => {
//       alert("Expense updated successfully!");
//       // Optionally, refresh the data
//       setExpenses(prev => prev.map(exp => 
//         exp.eid === updatedExpense.eid ? updatedExpense : exp
//       ));
//     })
//     .catch(error => {
//       console.error("Update error:", error);
//       alert("Failed to update expense.");
//     });
// };


//   // Pagination logic
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentExpenses = expenses.slice(indexOfFirstRecord, indexOfLastRecord);
//   const totalPages = Math.ceil(expenses.length / recordsPerPage);

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(prev => prev + 1);
//     }
//   };

//   const goToPrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(prev => prev - 1);
//     }
//   };

//   return (
//     <div className="transaction-history-wrapper">
//       <div className="transaction-header">
//         <h2><FaList /> Transaction History</h2>
//       </div>

//       {expenses.length === 0 ? (
//         <p className="no-expenses">No expenses found.</p>
//       ) : (
//         <>
//           <div className="transaction-cards-container">
//             <div className="transaction-card-header">
//               <span><FaTag /> Name</span>
//               <span><FaMoneyBillWave /> Price</span>
//               <span><FaCreditCard /> Method</span>
//               <span><FaFileAlt /> Description</span>
//               <span><FaCalendarAlt /> Date</span>
//               <span><FaList /> Category</span>
//                <span><FaEdit /> Update</span>
//               <span><FaTrash />Delete</span>
             
//             </div>

//             {currentExpenses.map(exp => (
//               <div className="transaction-card-row" key={exp.eid}>
//                 <span>{exp.ename}</span>
//                 <span>₹{exp.eprice}</span>
//                 <span>{exp.paymentMethod}</span>
//                 <span>{exp.description}</span>
//                 <span>{exp.expenseDate}</span>
//                 <span>{exp.categoryName}</span>
                
//                 <span> <FaTrash className="delete-icon" onClick={() => handleDelete(exp.eid)} title="Delete" /></span>

//               </div>
//             ))}
//           </div>

//           {totalPages > 1 && (
//             <div className="pagination-controls">
//               <button onClick={goToPrevPage} disabled={currentPage === 1} style={{ marginRight: '20%' }}>Previous</button>
//               <span>Page {currentPage} </span>
//               <button onClick={goToNextPage} disabled={currentPage === totalPages} style={{ marginLeft: '20%' }}>Next</button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default ViewExpense;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/viewExpense.css";
import { FaMoneyBillWave, FaCalendarAlt, FaCreditCard, FaTag, FaFileAlt, FaList, FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ViewExpense = () => {
  const [expenses, setExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  const uid = localStorage.getItem('uid');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (uid) {
      axios.get(`http://localhost:8080/user/viewExpenseByUid?uid=${uid}`)
        .then(response => setExpenses(response.data))
        .catch(error => console.error('Error fetching expenses:', error));
    }
  }, [uid]);

  const handleDelete = (eid) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      axios.delete(`http://localhost:8080/user/deleteById/${eid}`)
        .then(() => {
          // Remove deleted expense from the state
          setExpenses(prev => prev.filter(exp => exp.eid !== eid));
        })
        .catch(error => console.error("Delete error:", error));
    }
  };

  const handleUpdate = (eid) => {
    navigate(`/user/dashboard/update-expense/${eid}`);
  };

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentExpenses = expenses.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(expenses.length / recordsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="transaction-history-wrapper">
      <div className="transaction-header">
        <h2><FaList /> Transaction History</h2>
      </div>

      {expenses.length === 0 ? (
        <p className="no-expenses">No expenses found.</p>
      ) : (
        <>
          <div className="transaction-cards-container">
            <div className="transaction-card-header">
              <span><FaTag /> Name</span>
              <span><FaMoneyBillWave /> Price</span>
              <span><FaCreditCard /> Method</span>
              <span><FaFileAlt /> Description</span>
              <span><FaCalendarAlt /> Date</span>
              <span><FaList /> Category</span>
              <span><FaEdit /> Update</span>
              <span><FaTrash />Delete</span>
            </div>

            {currentExpenses.map(exp => (
              <div className="transaction-card-row" key={exp.eid}>
                <span>{exp.ename}</span>
                <span>₹{exp.eprice}</span>
                <span>{exp.paymentMethod}</span>
                <span>{exp.description}</span>
                <span>{exp.expenseDate}</span>
                <span>{exp.categoryName}</span>
                
                <span>
                  <FaEdit className="edit-icon" onClick={() => handleUpdate(exp.eid)} title="Edit" />
                </span>
                <span>
                  <FaTrash className="delete-icon" onClick={() => handleDelete(exp.eid)} title="Delete" />
                </span>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination-controls">
              <button onClick={goToPrevPage} disabled={currentPage === 1} style={{ marginRight: '20%' }}>Previous</button>
              <span>Page {currentPage} </span>
              <button onClick={goToNextPage} disabled={currentPage === totalPages} style={{ marginLeft: '20%' }}>Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ViewExpense;
