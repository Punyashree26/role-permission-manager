import { useState } from "react";

function ManageRoles() {
  const [role, setRole] = useState("");
  const [permission, setPermission] = useState("");

  const [data, setData] = useState([
    { id: 1, role: "Admin", permission: "Read" },
    { id: 2, role: "User", permission: "Write" },
  ]);

  const [search, setSearch] = useState("");

  const handleAdd = () => {
    if (role === "" || permission === "") {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      role,
      permission,
    };

    setData([...data, newItem]);

    setRole("");
    setPermission("");
  };

  const handleDelete = (id) => {
    const filtered = data.filter((item) => item.id !== id);
    setData(filtered);
  };

  const filteredData = data.filter((item) =>
    item.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Role Permission Manager</h1>

      <input
        type="text"
        placeholder="Search role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <input
        type="text"
        placeholder="Permission"
        value={permission}
        onChange={(e) => setPermission(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <br /><br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Role</th>
            <th>Permission</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.role}</td>
              <td>{item.permission}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageRoles;