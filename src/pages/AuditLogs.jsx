import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";

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
    <div className="p-4">
      <BackButton />
      <h2 className="text-xl font-bold mb-4">Audit Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {log.user} - {log.action} - <em>{log.timestamp}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuditLogs;
