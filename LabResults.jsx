import { FaDownload } from "react-icons/fa";

function LabResults({ patient }) {
  if (!patient || !patient.lab_results) {
    return <div className="card"><p>Loading...</p></div>;
  }

  return (
    <div className="card">
      <h3>Lab Results</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {patient.lab_results.map((result, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid #f3f4f6",
            }}
          >
            <span>{result}</span>
            <FaDownload
              style={{ color: "#6b7280", cursor: "pointer" }}
              title="Download"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LabResults;