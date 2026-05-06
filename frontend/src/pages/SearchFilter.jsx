import { useEffect, useState } from "react";

const roleData = [
  {
    id: 1,
    role: "Admin",
    status: "Active",
    date: "2026-05-01",
  },
  {
    id: 2,
    role: "User",
    status: "Inactive",
    date: "2026-05-03",
  },
  {
    id: 3,
    role: "Manager",
    status: "Active",
    date: "2026-05-05",
  },
];

function SearchFilter() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [status, setStatus] = useState("");

  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredData = roleData.filter((item) => {
    return (
      item.role
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase()) &&
      (status === "" || item.status === status) &&
      (date === "" || item.date === date)
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search & Filter</h1>

      <input
        type="text"
        placeholder="Search role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.role}</td>
              <td>{item.status}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          width: "300px",
        }}
      >
        <h3>Audit Log</h3>

        <p>Admin created role</p>
        <p>User updated permission</p>
        <p>Manager deleted role</p>
      </div>
    </div>
  );
}

export default SearchFilter;