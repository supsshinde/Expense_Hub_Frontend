// src/Components/BudgetPiechart.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#e74c3c", "#2ecc71"]; // Red for spent, green for remaining

const BudgetPieChart = ({ totalSpent, totalBudget }) => {
  const remaining = totalBudget - totalSpent;

  const data = [
    { name: "Spent", value: totalSpent },
    { name: "Remaining", value: remaining > 0 ? remaining : 0 },
  ];

  return (
    <div className="chart">
      <h3>Budget Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetPieChart;
