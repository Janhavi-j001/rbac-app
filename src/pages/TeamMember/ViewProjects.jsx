import React, { useState, useEffect } from "react";
import img from "../../imgs/projects.svg";
import "../../styles/ViewProjects.css"
import { Link } from "react-router-dom";

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Mock API call to fetch projects (replace with real API)
    const fetchProjects = async () => {
      const mockProjects = [
        { id: 1, name: "Project A", status: "In Progress" },
        { id: 2, name: "Project B", status: "Completed" },
      ];
      setProjects(mockProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div className="view-projects-container">

      <button className="back-button">
        <Link to="/team-member/dashboard" className="back-link">Back</Link>
      </button>

      <h1 className="page-title">Projects</h1>

      <div className="image-container">
        <img src={img} alt="Manage Projects" className="activity-image" />
      </div>

      <div className="projects-list-container">
        <h2 className="project-list-title">Project List</h2>
        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project.id} className="project-item">
              <div className="project-name">{project.name}</div>
              <span
                className={`project-status ${
                  project.status === "Completed"
                    ? "status-completed"
                    : "status-in-progress"
                }`}
              >
                {project.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewProjects;
