import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import activity from "../imgs/activity.svg"

const ActivityLogs = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const mockActivities = [
      { id: 1, action: "User logged in", timestamp: "2024-11-24 10:00 AM" },
      { id: 2, action: "Role updated", timestamp: "2024-11-23 2:00 PM" },
    ];
    setActivities(mockActivities);
  }, []);

  return (
    <div className="p-4 activity">
      <BackButton />
      <h2 className="text-xl font-bold mb-4">Activity Logs</h2>
      <div className="max-w-lg">
          <img 
            src={activity} 
            alt="signup" 
            className="w-half max-h-80 rounded-lg"
          />
        </div>
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
