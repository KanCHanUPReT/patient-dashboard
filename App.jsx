import { useState, useEffect } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PatientInfo from "./components/PatientInfo";
import BloodPressureChart from "./components/BloodPressureChart";
import DiagnosisList from "./components/DiagnosisList";
import LabResults from "./components/LabResults";
import PatientTable from "./components/PatientTable";
import { fetchPatientData } from "./services/api";

function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPatientData()
      .then((data) => {
        setPatient(data[0]);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load patient data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="main-container">
      <Sidebar setActiveTab={setActiveTab} />

      <div className="dashboard">
        <Header />

        {loading && (
          <div className="card" style={{ marginTop: "20px" }}>
            <p>Loading patient data...</p>
          </div>
        )}

        {error && (
          <div className="card" style={{ marginTop: "20px", color: "red" }}>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="cards-container">
            {activeTab === "overview" && (
              <>
                <PatientInfo patient={patient} />
                <BloodPressureChart patient={patient} />
                <DiagnosisList patient={patient} />
                <LabResults patient={patient} />
              </>
            )}
            {activeTab === "patients" && <PatientTable />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;