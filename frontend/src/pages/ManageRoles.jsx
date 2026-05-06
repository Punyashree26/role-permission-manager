import { useEffect, useState } from "react";

function ManageRoles() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fakeData = [
      { id: 1, role: "Admin", permission: "Read" },
      { id: 2, role: "User", permission: "Write" },
      { id: 3, role: "Manager", permission: "Delete" },
    ];

    setData(fakeData);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Manage Roles</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Role</th>
            <th>Permission</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.role}</td>
              <td>{item.permission}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      <span style={{ margin: "10px" }}>
        Page {page}
      </span>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default ManageRoles;