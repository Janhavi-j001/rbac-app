import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import activity from "../imgs/activity.svg"; // Reuse the same image as in ActivityLogs
import "./ActivityLogs.css"; // Import the same CSS file for styling

const AuditLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const mockLogs = [
      { id: 1, user: "Admin", action: "Deleted a project", timestamp: "2024-11-22 5:00 PM" },
      { id: 2, user: "Manager", action: "Added a role", timestamp: "2024-11-21 3:00 PM" },
    ];
    setLogs(mockLogs);
  }, []);

  return (
    <div className="activity-container">
      <BackButton />
      <h2 className="title">Audit Logs</h2>
      <div className="content">
        {/* Image Section */}
        <div className="image-container">
          <img src={activity} alt="Audit illustration" className="activity-image" />
        </div>

        {/* Logs Section */}
        <div className="logs-container">
          <ul className="activity-list">
            {logs.map((log) => (
              <li key={log.id} className="activity-item">
                <strong>{log.user}</strong> - <span>{log.action}</span> - <em>{log.timestamp}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;
