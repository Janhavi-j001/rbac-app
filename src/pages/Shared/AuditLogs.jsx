import React, { useState, useEffect } from "react";

const AuditLogs = () => {
  const [auditLogs, setAuditLogs] = useState([]);

  useEffect(() => {
    // Mock API call to fetch audit logs (replace with real API)
    const fetchAuditLogs = async () => {
      const mockAuditLogs = [
        {
          id: 1,
          action: "Updated Role",
          performedBy: "Admin",
          timestamp: "2024-11-27 09:50:00",
        },
        {
          id: 2,
          action: "Deleted User",
          performedBy: "Project Leader",
          timestamp: "2024-11-27 09:55:00",
        },
      ];
      setAuditLogs(mockAuditLogs);
    };

    fetchAuditLogs();
  }, []);

  return (
    <div className="min-h-screen bg-light-bg p-6 md:p-10">
      <h1 className="text-primary text-2xl md:text-3xl font-bold mb-6">
        Audit Logs
      </h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm md:text-base font-medium">
                Action
              </th>
              <th className="py-3 px-4 text-left text-sm md:text-base font-medium">
                Performed By
              </th>
              <th className="py-3 px-4 text-left text-sm md:text-base font-medium">
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-light-gray">
            {auditLogs.length > 0 ? (
              auditLogs.map((log) => (
                <tr
                  key={log.id}
                  className="hover:bg-accent-light transition duration-200"
                >
                  <td className="py-3 px-4 text-secondary text-sm md:text-base">
                    {log.action}
                  </td>
                  <td className="py-3 px-4 text-gray-600 text-sm md:text-base">
                    {log.performedBy}
                  </td>
                  <td className="py-3 px-4 text-gray-500 text-xs md:text-sm">
                    {log.timestamp}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="py-6 px-4 text-center text-gray-500 text-sm md:text-base"
                >
                  No audit logs available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditLogs;
