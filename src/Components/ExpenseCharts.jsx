import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a0522d", "#20b2aa"];

const ExpenseCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/admin/expense-distribution")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Chart fetch error:", err));
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      <div>
        <h5>Expense Distribution - Pie Chart</h5>
        <PieChart width={400} height={300}>
          <Pie data={data} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div>
        <h5>Expense Distribution - Bar Chart</h5>
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default ExpenseCharts;
