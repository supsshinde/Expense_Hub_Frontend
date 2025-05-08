import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/viewExpense.css";
import { FaMoneyBillWave, FaCalendarAlt, FaCreditCard, FaTag, FaFileAlt, FaList } from 'react-icons/fa';

const ViewExpense = () => {
  const [expenses, setExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  const uid = localStorage.getItem('uid');

  useEffect(() => {
    if (uid) {
      axios.get(`http://localhost:8080/user/viewExpenseByUid?uid=${uid}`)
        .then(response => setExpenses(response.data))
        .catch(error => console.error('Error fetching expenses:', error));
    }
  }, [uid]);

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
            </div>

            {currentExpenses.map(exp => (
              <div className="transaction-card-row" key={exp.eid}>
                <span>{exp.ename}</span>
                <span>₹{exp.eprice}</span>
                <span>{exp.paymentMethod}</span>
                <span>{exp.description}</span>
                <span>{exp.expenseDate}</span>
                <span>{exp.categoryName}</span>
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
