// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/UserReport.css';

// const UserReport = () => {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [reportData, setReportData] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   const handleGenerateReport = () => {
//     const uid = localStorage.getItem('uid');
//     axios.get(`http://localhost:8080/user/expense-report?uid=${uid}&from=${fromDate}&to=${toDate}`)

//       .then(response => {
//         setReportData(response.data.expenseList || []);
//         setTotalAmount(response.data.totalExpenseAmount || 0);
//       })
//       .catch(error => {
//         console.error("Failed to fetch report", error);
//         setReportData([]);
//         setTotalAmount(0);
//       });
//   };

//   return (
//     <div className="report-container">
//       <h2>📅 Generate Expense Report</h2>
//       <div className="filters">
//         <label>From: <input type="date" value={fromDate} onChange={e => setFromDate(e.target.value)} /></label>
//         <label>To: <input type="date" value={toDate} onChange={e => setToDate(e.target.value)} /></label>
//         <button onClick={handleGenerateReport}>Generate</button>
//       </div>

//       {reportData.length > 0 ? (
//         <>
//           <table className="report-table">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Category</th>
//                 <th>Amount</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reportData.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.expenseDate}</td>
//                   <td>{item.categoryName}</td>
//                   <td>₹{item.eprice}</td>
//                   <td>{item.description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <h3>Total Expense: ₹{totalAmount}</h3>
//         </>
//       ) : <p>No data found for selected period.</p>}
//     </div>
//   );
// };

// export default UserReport;
import React, { useState } from 'react';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import '../styles/UserReport.css'; // import CSS

const UserReport = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reportData, setReportData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleGenerateReport = () => {
    const uid = localStorage.getItem('uid');
    axios.get(`http://localhost:8080/user/expense-report?uid=${uid}&from=${fromDate}&to=${toDate}`)
      .then(response => {
        setReportData(response.data.expenseList || []);
        setTotalAmount(response.data.totalExpenseAmount || 0);
      })
      .catch(error => {
        console.error("Failed to fetch report", error);
        setReportData([]);
        setTotalAmount(0);
      });
  };

  return (
    <div className="report-container">
      <h2>📅 Generate Expense Report</h2>
      <div className="filters">
        <label>From: <input type="date" value={fromDate} onChange={e => setFromDate(e.target.value)} /></label>
        <label>To: <input type="date" value={toDate} onChange={e => setToDate(e.target.value)} /></label>
        <button onClick={handleGenerateReport}>Generate</button>
      </div>

      {reportData.length > 0 ? (
        <>
          <div className="export-buttons">
            <CSVLink
              data={reportData.map(item => ({
                Date: item.expenseDate,
                Category: item.categoryName,
                Amount: item.eprice,
                Description: item.description
              }))}
              filename="expense_report.csv"
              className="csv-button"
            >
              Export CSV
            </CSVLink>
          </div>

          <table className="report-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <tr key={index}>
                  <td>{item.expenseDate}</td>
                  <td>{item.categoryName}</td>
                  <td>₹{item.eprice}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Expense: ₹{totalAmount}</h3>
        </>
      ) : <p>No data found for selected period.</p>}
    </div>
  );
};

export default UserReport;
