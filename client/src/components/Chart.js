import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Chart() {
  const expenses = useSelector((state) => {
    if (state.expenses.length > 0)
      return state.expenses.map((expense) => ({
        ...expense,
        date: expense.date.substring(5),
      }));
    return []
  });

  return (
    <LineChart
      width={800}
      height={500}
      data={expenses}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="amount"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
