import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/TeamManagement.css";
import img from "../../imgs/teams.svg";

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Tester" },
  ]);
  const [newMember, setNewMember] = useState("");
  const [newRole, setNewRole] = useState("");

  const addMember = () => {
    if (newMember.trim() && newRole.trim()) {
      setTeamMembers([
        ...teamMembers,
        { id: teamMembers.length + 1, name: newMember, role: newRole },
      ]);
      setNewMember("");
      setNewRole("");
    }
  };

  return (
    <div className="team-management-container">
      <button className="back-button">
        <Link to="/project-leader/dashboard" className="back-link">
          Back
        </Link>
      </button>

      <h1 className="page-title">Team Management</h1>

      <div className="image-container">
        <img src={img} alt="Manage Teams" className="activity-image" />
      </div>

      {/* Team Members List */}
      <div className="team-list-container">
        <h2 className="team-list-title">Team Members</h2>
        <ul>
          {teamMembers.map((member) => (
            <li
              key={member.id}
              className={`team-member-item ${
                member.role === "Developer"
                  ? "role-developer"
                  : member.role === "Tester"
                  ? "role-tester"
                  : "role-default"
              }`}
            >
              <span className="team-member-name">{member.name}</span>
              <span className="team-member-role">{member.role}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Team Member Form */}
      <div className="add-member-container">
        <input
          type="text"
          value={newMember}
          placeholder="Add team member"
          onChange={(e) => setNewMember(e.target.value)}
          className="add-member-input"
        />
        <input
          type="text"
          value={newRole}
          placeholder="Role"
          onChange={(e) => setNewRole(e.target.value)}
          className="add-member-input"
        />
        <button
          onClick={addMember}
          className="add-project-button"
        >
          Add Member
        </button>
      </div>
    </div>
  );
};

export default TeamManagement;
