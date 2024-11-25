import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");

  const handleAddProject = (e) => {
    e.preventDefault();

    // Prevent adding empty project names
    if (projectName.trim() === "") {
      alert("Project name cannot be empty.");
      return;
    }

    // Add new project to the list
    setProjects([...projects, projectName]);
    setProjectName("");
  };

  const handleDeleteProject = (index) => {
    // Remove the project by its index
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Projects</h1>

      {/* Add Project Form */}
      <form onSubmit={handleAddProject} className="mb-6">
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter project name"
          className="border rounded-md px-4 py-2 w-2/3 mr-4"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
        >
          Add Project
        </button>
      </form>

      {/* Projects List */}
      {projects.length === 0 ? (
        <p className="text-gray-600">No projects available. Add some projects!</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((project, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-md"
            >
              <span>{project}</span>
              <button
                onClick={() => handleDeleteProject(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
