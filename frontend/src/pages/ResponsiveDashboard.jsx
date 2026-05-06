function ResponsiveDashboard() {
  const cards = [
    { title: "Users", value: 120 },
    { title: "Roles", value: 8 },
    { title: "Permissions", value: 25 },
    { title: "Active", value: 95 },
  ];

  return (
    <div style={container}>
      <h1>Responsive Dashboard</h1>

      <div style={gridContainer}>
        {cards.map((card, index) => (
          <div key={index} style={cardStyle}>
            <h2>{card.title}</h2>
            <p>{card.value}</p>
          </div>
        ))}
      </div>

      <div style={tableContainer}>
        <h2>Role Table</h2>

        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Admin</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>User</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={performanceBox}>
        <h3>Performance Optimization</h3>

        <p>✔ Added DB indexes</p>
        <p>✔ Optimized search queries</p>
        <p>✔ Reduced repeated API calls</p>
      </div>
    </div>
  );
}

const container = {
  padding: "20px",
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  border: "1px solid gray",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#f5f5f5",
};

const tableContainer = {
  marginTop: "30px",
  overflowX: "auto",
};

const performanceBox = {
  marginTop: "30px",
  border: "1px solid black",
  padding: "15px",
};

export default ResponsiveDashboard;