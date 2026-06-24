import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BloodPressureChart({ patient }) {
  if (!patient || !patient.diagnosis_history) {
    return <div className="card"><p>Loading chart...</p></div>;
  }

  const data = patient.diagnosis_history.slice(0, 6).map((entry) => ({
    month: `${entry.month} ${entry.year}`,
    Systolic: entry.blood_pressure.systolic.value,
    Diastolic: entry.blood_pressure.diastolic.value,
  }));

  return (
    <div className="card">
      <h3>Blood Pressure History</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Systolic"
            stroke="#ff4d4f"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="Diastolic"
            stroke="#1890ff"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div style={{ marginTop: "15px", display: "flex", gap: "30px" }}>
        <div>
          <p style={{ color: "#ff4d4f", fontWeight: "bold" }}>Systolic</p>
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>
            {data[0]?.Systolic}
          </p>
          <p style={{ color: "#6b7280", fontSize: "13px" }}>
            {patient.diagnosis_history[0].blood_pressure.systolic.levels}
          </p>
        </div>
        <div>
          <p style={{ color: "#1890ff", fontWeight: "bold" }}>Diastolic</p>
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>
            {data[0]?.Diastolic}
          </p>
          <p style={{ color: "#6b7280", fontSize: "13px" }}>
            {patient.diagnosis_history[0].blood_pressure.diastolic.levels}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BloodPressureChart;