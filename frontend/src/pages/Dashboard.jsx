import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Admin", users: 10 },
  { name: "User", users: 20 },
  { name: "Manager", users: 15 },
];

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={cardStyle}>
          <h3>Total Roles</h3>
          <p>3</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Users</h3>
          <p>45</p>
        </div>

        <div style={cardStyle}>
          <h3>Permissions</h3>
          <p>12</p>
        </div>

        <div style={cardStyle}>
          <h3>Active</h3>
          <p>40</p>
        </div>
      </div>

      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="blue" />
      </BarChart>

      <br />

      <div style={detailStyle}>
        <h2>Role Detail</h2>

        <p>
          Role: <strong>Admin</strong>
        </p>

        <p>
          Permission Score:
          <span style={badgeStyle}> High </span>
        </p>

        <button>Edit</button>

        <button style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid gray",
  padding: "20px",
  width: "150px",
};

const detailStyle = {
  marginTop: "30px",
  border: "1px solid black",
  padding: "20px",
  width: "300px",
};

const badgeStyle = {
  backgroundColor: "green",
  color: "white",
  padding: "5px",
  borderRadius: "5px",
};

export default Dashboard;