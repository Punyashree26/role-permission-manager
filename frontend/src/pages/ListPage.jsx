import { useEffect, useState } from "react";

function ListPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          id: 1,
          role: "Admin",
          permission: "Read",
        },
        {
          id: 2,
          role: "User",
          permission: "Write",
        },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (data.length === 0) {
    return <h2>No Data Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Role Permission List</h1>

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
    </div>
  );
}

export default ListPage;