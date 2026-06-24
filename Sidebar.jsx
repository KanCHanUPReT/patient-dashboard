import {
  FaHome,
  FaUserInjured,
  FaCalendar,
  FaEnvelope,
  FaCreditCard
} from "react-icons/fa";

function Sidebar({ setActiveTab }) {
  return (
    <div className="sidebar">
      <h2>MedCare</h2>

      <ul className="sidebar-menu">

        <li onClick={() => setActiveTab("overview")}>
          <FaHome />
          Overview
        </li>

        <li onClick={() => setActiveTab("patients")}>
          <FaUserInjured />
          Patients
        </li>

        <li>
          <FaCalendar />
          Schedule
        </li>

        <li>
          <FaEnvelope />
          Messages
        </li>

        <li>
          <FaCreditCard />
          Transactions
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;