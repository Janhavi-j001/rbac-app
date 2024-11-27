import React, { useState } from "react";
import BackButton from "../components/BackButton";
import teams1 from "../imgs/teams.svg";
import "./ActivityLogs.css"; // Importing the CSS file for styling

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState("");

  const addTeam = () => {
    if (teamName) {
      setTeams([...teams, teamName]);
      setTeamName("");
    }
  };

  const deleteTeam = (teamToDelete) => {
    setTeams(teams.filter((team) => team !== teamToDelete));
  };

  return (
    <div className="activity-container">
      <BackButton />
      
      <h1 className="title">Teams Management</h1>
      <div className="input-container">
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="form-input"
          placeholder="Enter team name"
        />
        <button onClick={addTeam} className="add-button">
          Add Team
        </button>
      </div>
      <ul className="activity-list">
        {teams.map((team, index) => (
          <li key={index} className="activity-item">
            <span>{team}</span>
            <button
              onClick={() => deleteTeam(team)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="image-container">
        <img src={teams1} alt="teams" className="activity-image" />
      </div>
    </div>
  );
};

export default Teams;
