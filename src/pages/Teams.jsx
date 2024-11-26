import React, { useState } from "react";
import BackButton from "../components/BackButton";
import teams1 from "../imgs/teams.svg";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState("");

  const addTeam = () => {
    if (teamName) {
      setTeams([...teams, teamName]);
      setTeamName("");
    }
  };

  return (
    <div className="p-6">
      <BackButton />
      
      <h1 className="text-2xl font-bold mb-4">Teams Management</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          placeholder="Enter team name"
        />
        <button
          onClick={addTeam}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Team
        </button>
      </div>
      <ul 
      
      className="space-y-2">
        {teams.map((team, index) => (
          <li 
          style={{backgroundColor: "#8697c4", color: "#ede8f5"}}
          key={index} className="border px-4 py-2 rounded-md">
            {team}
          </li>
        ))}
      </ul>
      <div className="max-w-lg">
          <img 
            src={teams1} 
            alt="teams" 
            className="w-half max-h-80 rounded-lg"
          />
        </div>
    </div>
  );
};

export default Teams;
