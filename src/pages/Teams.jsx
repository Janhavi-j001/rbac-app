import React, { useState } from "react";

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
      <ul className="space-y-2">
        {teams.map((team, index) => (
          <li key={index} className="border px-4 py-2 rounded-md">
            {team}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
