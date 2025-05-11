// // src/Components/ExpensePiechart.jsx
// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// const COLORS = ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71'];

// const ExpensePieChart = ({ data }) => {
//   return (
//     <div className="chart">
//       <h3>Expenses Breakdown</h3>
//       <PieChart width={300} height={250}>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           outerRadius={90}
//           label
//           dataKey="amount"
//         >
//           {data.map((_, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//         <Legend />
//       </PieChart>
//     </div>
//   );
// };

// export default ExpensePieChart;
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71'];

const ExpensePieChart = ({ data }) => {
  return (
    <div className="chart">
      <h3>Expenses Breakdown</h3>
      <PieChart width={300} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={90}
          label
          dataKey="amount"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpensePieChart;
