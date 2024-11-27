import React, { useState } from "react";
import { toast } from "react-toastify";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");

  const handleAddProject = (e) => {
    e.preventDefault();
    if (projectName.trim() === "") {
      toast.error("Project name cannot be empty.");
      return;
    }
    setProjects([...projects, projectName]);
    toast.success(`Project "${projectName}" added successfully.`);
    setProjectName("");
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    toast.info(`Project "${projects[index]}" deleted.`);
    setProjects(updatedProjects);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4">
        <Navbar />
        <div className="projects-container">
          <h1 className="projects-title">Manage Projects</h1>
          <form onSubmit={handleAddProject} className="projects-form">
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name"
              className="project-input"
            />
            <button type="submit" className="add-project-btn">
              Add Project
            </button>
          </form>
          {projects.length === 0 ? (
            <p className="no-projects-message">No projects available. Add some projects!</p>
          ) : (
            <ul className="project-list">
              {projects.map((project, index) => (
                <li key={index} className="project-item">
                  <span className="project-name">{project}</span>
                  <button
                    onClick={() => handleDeleteProject(index)}
                    className="delete-project-btn"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects;
