import { useState } from "react";

function FileUploadExport() {
  const [message, setMessage] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const allowedTypes = ["text/csv", "application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      setMessage("Invalid file type");
      return;
    }

    if (file.size > 2000000) {
      setMessage("File size exceeds 2MB");
      return;
    }

    setMessage("File uploaded successfully");
  };

  const exportCSV = () => {
    const csvContent =
      "ID,Role,Permission\n1,Admin,Read\n2,User,Write";

    const blob = new Blob([csvContent], {
      type: "text/csv",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "roles.csv";

    a.click();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>File Upload & CSV Export</h1>

      <button onClick={exportCSV}>
        Export CSV
      </button>

      <br /><br />

      <input
        type="file"
        onChange={handleFileUpload}
      />

      <br /><br />

      <p>{message}</p>

      <div
        style={{
          border: "1px solid black",
          padding: "15px",
          width: "400px",
        }}
      >
        <h3>Swagger/OpenAPI</h3>

        <p>GET /all</p>
        <p>POST /create</p>
        <p>PUT /update</p>
        <p>DELETE /delete</p>
      </div>
    </div>
  );
}

export default FileUploadExport;