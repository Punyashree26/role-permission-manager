function FinalDashboard() {
  const cards = [
    {
      title: "Users",
      value: 120,
    },
    {
      title: "Roles",
      value: 8,
    },
    {
      title: "Permissions",
      value: 25,
    },
    {
      title: "Active Sessions",
      value: 42,
    },
  ];

  return (
    <div style={container}>
      <h1 style={heading}>
        Role Permission Manager
      </h1>

      <div style={grid}>
        {cards.map((card, index) => (
          <div key={index} style={cardStyle}>
            <h2>{card.title}</h2>

            <p style={numberStyle}>
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div style={tableBox}>
        <h2>Recent Activity</h2>

        <table width="100%" border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Admin</td>
              <td>Created Role</td>
              <td>Success</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Manager</td>
              <td>Updated Permission</td>
              <td>Success</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={reviewBox}>
        <h3>Code Review Checklist</h3>

        <p>✔ Removed TODO comments</p>
        <p>✔ No secrets committed</p>
        <p>✔ UI tested</p>
        <p>✔ Folder structure verified</p>
        <p>✔ Ready for release v1.0</p>
      </div>
    </div>
  );
}

const container = {
  padding: "20px",
  fontFamily: "Arial",
};

const heading = {
  color: "#1B4F8A",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  backgroundColor: "#f4f4f4",
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid gray",
};

const numberStyle = {
  fontSize: "28px",
  fontWeight: "bold",
};

const tableBox = {
  marginTop: "30px",
};

const reviewBox = {
  marginTop: "30px",
  border: "1px solid black",
  padding: "15px",
};

export default FinalDashboard;