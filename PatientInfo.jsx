import { useEffect, useState } from "react";
import { fetchPatientData } from "../services/api";

function PatientTable() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPatientData()
      .then((data) => {
        setPatients(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load patient data.");
        setLoading(false);
      });
  }, []);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="card"><p>Loading patients...</p></div>;
  if (error) return <div className="card"><p style={{ color: "red" }}>{error}</p></div>;

  return (
    <div className="card" style={{ gridColumn: "1 / -1" }}>
      <h2 style={{ marginBottom: "15px" }}>Patient Records</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 15px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          fontSize: "15px",
          outline: "none",
        }}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.gender}</td>
              <td>{patient.age}</td>
              <td>{patient.date_of_birth}</td>
              <td>{patient.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;