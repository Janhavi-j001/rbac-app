import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import activity from "../imgs/activity.svg";
import "./ActivityLogs.css"; // Importing a CSS file for styles

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
    <div className="activity-container">
      <BackButton />
      <h2 className="title">Activity Logs</h2>
      <div className="content">
        <div className="image-container">
          <img src={activity} alt="Activity illustration" className="activity-image" />
        </div>
        <div className="logs-container">
          <ul className="activity-list">
            {activities.map((activity) => (
              <li key={activity.id} className="activity-item">
                <strong>{activity.action}</strong> - <em>{activity.timestamp}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;
