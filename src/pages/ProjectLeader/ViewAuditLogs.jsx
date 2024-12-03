import React from "react";
import "../../styles/ViewAuditLogs.css";
import { Link } from "react-router-dom";
import activity from "../../imgs/activity.svg"; // Update with the correct path to your image

const mockAuditLogs = [
  { id: 1, action: "Project Created", user: "Project Leader", timestamp: "2024-11-27 10:00:00" },
  { id: 2, action: "Team Member Added", user: "Project Leader", timestamp: "2024-11-27 11:00:00" },
  { id: 3, action: "Project Status Updated", user: "Project Leader", timestamp: "2024-11-27 12:00:00" },
];

const ViewAuditLogs = () => {
  return (
    <div className="audit-logs-container">
      <button className="back-button">
        <Link to="/project-leader/dashboard" >Back</Link>
      </button>
      <h1 className="title">Audit Logs</h1>
      <div className="image-container">
        <img src={activity} alt="Activity illustration" className="activity-image" />
      </div>
      <div className="logs-container">
        {mockAuditLogs.map((log) => (
          <div key={log.id} className="log-entry fade-in">
            <div className="log-user">{log.user}</div>
            <div className="log-action">{log.action}</div>
            <div className="log-timestamp">{log.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAuditLogs;
