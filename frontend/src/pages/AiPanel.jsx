import { useState } from "react";

function AiPanel() {
  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState("");

  const generateAI = () => {
    setLoading(true);

    setTimeout(() => {
      setResponse(
        "AI Recommendation: Admin users should have read and write access only."
      );

      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Recommendation Panel</h1>

      <button onClick={generateAI}>
        Generate AI Response
      </button>

      <br /><br />

      {loading && (
        <div>
          <h3>Loading AI Response...</h3>
        </div>
      )}

      {response && (
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            width: "400px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <h3>AI Response</h3>

          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default AiPanel;