import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectimg from "../../imgs/projects.svg";
import "../../styles/ManageProjects.css"; // Import the CSS file

const ManageProjects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project A", status: "In Progress" },
    { id: 2, name: "Project B", status: "Completed" },
  ]);
  const [newProject, setNewProject] = useState("");

  const addProject = () => {
    if (newProject.trim()) {
      setProjects([
        ...projects,
        { id: projects.length + 1, name: newProject, status: "Pending" },
      ]);
      setNewProject("");
    }
  };

  return (
    <div className="manage-projects-container">
      <button className="back-button">
        <Link to="/project-leader/dashboard" className="back-link">Back</Link>
      </button>

      <h1 className="page-title">Manage Projects</h1>

      <div className="image-container">
        <img src={projectimg} alt="Manage Projects" className="activity-image" />
      </div>

      {/* Project List */}
      <div className="projects-list-container">
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="project-item fade-in">
              <span className="project-name">{project.name}</span>
              <span
                className={`project-status ${
                  project.status === "Completed"
                    ? "status-completed"
                    : project.status === "In Progress"
                    ? "status-in-progress"
                    : "status-pending"
                }`}
              >
                {project.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Project */}
      <div className="add-project-container">
        <input
          type="text"
          value={newProject}
          placeholder="Add new project"
          onChange={(e) => setNewProject(e.target.value)}
          className="add-project-input"
        />
        <button
          onClick={addProject}
          className="add-project-button"
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default ManageProjects;
