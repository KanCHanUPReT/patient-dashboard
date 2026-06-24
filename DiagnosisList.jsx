function DiagnosisList({ patient }) {
  if (!patient || !patient.diagnostic_list) {
    return <div className="card"><p>Loading...</p></div>;
  }

  return (
    <div className="card">
      <h3>Diagnosis History</h3>
      <table>
        <thead>
          <tr>
            <th>Condition</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patient.diagnostic_list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: "12px",
                    fontSize: "13px",
                    background:
                      item.status === "Active" ? "#fee2e2" : "#dcfce7",
                    color:
                      item.status === "Active" ? "#dc2626" : "#16a34a",
                  }}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DiagnosisList;