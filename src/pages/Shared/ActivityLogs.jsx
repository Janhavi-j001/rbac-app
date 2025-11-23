import React, { useState, useEffect } from "react";

const ActivityLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Mock API call to fetch activity logs (replace with real API)
    const fetchLogs = async () => {
      const mockLogs = [
        { id: 1, activity: "Logged in", timestamp: "2024-11-27 10:00:00" },
        { id: 2, activity: "Viewed Dashboard", timestamp: "2024-11-27 10:10:00" },
      ];
      setLogs(mockLogs);
    };

    fetchLogs();
  }, []);

  return (
    <div className="bg-light-bg min-h-screen p-6 md:p-10">
      <h1 className="text-primary text-2xl md:text-3xl font-bold mb-6">
        Activity Logs
      </h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="divide-y divide-light-gray">
          {logs.length > 0 ? (
            logs.map((log) => (
              <li
                key={log.id}
                className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-accent-light transition duration-200"
              >
                <span className="text-secondary text-sm md:text-base">
                  {log.activity}
                </span>
                <span className="text-gray-500 text-xs md:text-sm mt-2 md:mt-0">
                  {log.timestamp}
                </span>
              </li>
            ))
          ) : (
            <p className="p-6 text-gray-500 text-center">No logs available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ActivityLogs;
