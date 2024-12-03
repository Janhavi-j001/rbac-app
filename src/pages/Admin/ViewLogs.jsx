import React from "react";
import img from "../../imgs/activity.svg";
import "../../styles/ViewLogs.css";
import { Link } from "react-router-dom";

const mockLogs = [
  { id: 1, message: "User 'Admin' logged in", timestamp: "2024-11-27 09:00:00" },
  { id: 2, message: "Role 'Team Member' added", timestamp: "2024-11-27 09:15:00" },
  { id: 3, message: "Permission 'Edit Projects' granted", timestamp: "2024-11-27 09:30:00" },
];

const ViewLogs = () => {
  return (
    <div className="view-logs-container" style={{backgroundColor: "#ede8f5"}}>
      {/* Back Button */}
      <button className="back-button">
        <Link to="/admin/dashboard" className="back-link">Back</Link>
      </button>

      {/* Title */}
      <h1 className="page-title">Activity Logs</h1>

      {/* Image */}
      <div className="image-container">
        <img src={img} alt="Activity Logs" className="activity-image" />
      </div>

      {/* Logs List */}
      <div className="logs-list-container">
        <ul className="logs-list">
          {mockLogs.map((log) => (
            <li key={log.id} className="log-item">
              <p className="log-timestamp">{log.timestamp}</p>
              <p className="log-message">{log.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewLogs;
