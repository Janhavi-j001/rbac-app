import React, { useState, useEffect } from "react";

const ActivityLogs = () => {
  const [activities, setActivities] = useState([]); // Keep `setActivities` if you plan to update logs dynamically

  useEffect(() => {
    // Example data fetch
    const fetchActivityLogs = async () => {
      const mockActivities = [
        { id: 1, action: "User logged in", timestamp: "2024-11-24 10:00 AM" },
        { id: 2, action: "Role updated", timestamp: "2024-11-23 2:00 PM" },
      ];
      setActivities(mockActivities);
    };

    fetchActivityLogs();
  }, []); // Empty dependency ensures this runs once on mount

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Activity Logs</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.action} - <em>{activity.timestamp}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLogs;
