import { useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const roleData = [
  { name: "Admin", value: 10 },
  { name: "User", value: 20 },
  { name: "Manager", value: 15 },
];

const analyticsData = [
  { month: "Jan", users: 5 },
  { month: "Feb", users: 8 },
  { month: "Mar", users: 12 },
  { month: "Apr", users: 15 },
  { month: "May", users: 20 },
];

const demoRecords = [
  "Admin Access",
  "User Read",
  "Manager Write",
  "Editor Modify",
  "Viewer Access",
  "HR Control",
  "Finance Read",
  "Developer Write",
  "Support Access",
  "Testing Role",
  "Operations Control",
  "Guest Read",
  "Lead Access",
  "Analytics Read",
  "Security Admin",
];

function Analytics() {
  const [period, setPeriod] = useState("Monthly");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Analytics Dashboard</h1>

      <select
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
      >
        <option>Weekly</option>
        <option>Monthly</option>
        <option>Yearly</option>
      </select>

      <br /><br />

      <h2>Role Distribution</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={roleData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          <Cell fill="blue" />
          <Cell fill="green" />
          <Cell fill="orange" />
        </Pie>

        <Tooltip />
      </PieChart>

      <h2>User Growth</h2>

      <BarChart width={500} height={300} data={analyticsData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="users" fill="purple" />
      </BarChart>

      <br />

      <div
        style={{
          border: "1px solid black",
          padding: "15px",
          width: "300px",
        }}
      >
        <h3>Demo Records</h3>

        {demoRecords.map((record, index) => (
          <p key={index}>{record}</p>
        ))}
      </div>
    </div>
  );
}

export default Analytics;