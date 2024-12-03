import React, { useState, useEffect } from "react";
import img from "../../imgs/teams.svg";
import "../../styles/ViewTeams.css";
import { Link } from "react-router-dom";

const ViewTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Mock API call to fetch team details (replace with real API)
    const fetchTeams = async () => {
      const mockTeams = [
        { id: 1, name: "Team Alpha", members: 5 },
        { id: 2, name: "Team Beta", members: 3 },
      ];
      setTeams(mockTeams);
    };

    fetchTeams();
  }, []);

  return (
    <div className="view-teams-container">

      <button className="back-button">
        <Link to="/team-member/dashboard" className="back-link">Back</Link>
      </button>

      <h1 className="page-title">Teams</h1>

      <div className="image-container">
        <img src={img} alt="Manage Teams" className="activity-image" />
      </div>

      <div className="teams-list-container">
        <h2 className="teams-list-title">Team List</h2>
        <ul className="teams-list">
          {teams.map((team) => (
            <li key={team.id} className="team-item">
              <div className="team-name">{team.name}</div>
              <span className="team-members">
                {team.members} Members
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewTeams;
