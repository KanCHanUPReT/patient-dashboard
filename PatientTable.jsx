import { useEffect, useState } from "react";

function PatientTable() {

  const [patients, setPatients] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {

        const formattedData = data.map((user) => ({
          name: user.name,
          age: Math.floor(Math.random() * 30) + 20,
          gender: Math.random() > 0.5 ? "Male" : "Female",
          status: Math.random() > 0.5 ? "Active" : "Recovered"
        }));

        setPatients(formattedData);

      })
      .catch(() => {
        setError("Failed to load patient data");
      });

  }, []);

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">

      <h2>Patient Records</h2>
      <input
     type="text"
      placeholder="Search patient..."
       value={search}
      onChange={(e) => setSearch(e.target.value)}
     className="search-input"
/>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>
  <span
    className={
      patient.status === "Active"
        ? "status active"
        : "status recovered"
    }
  >
    {patient.status}
  </span>
</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default PatientTable;