import React, { useState, useEffect } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);
  }, []);

  const handleAddProject = () => {
    if (newProject.trim() === '') return;
    const updatedProjects = [...projects, { name: newProject, archived: false }];
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    setNewProject('');
  };

  const handleArchiveProject = (projectName) => {
    const updatedProjects = projects.map((project) =>
      project.name === projectName ? { ...project, archived: true } : project
    );
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4">
        <Navbar />
        <h1 className="text-2xl font-bold">Manage Projects</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="New Project"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
            className="border p-2 rounded mr-2"
          />
          <button onClick={handleAddProject} className="bg-green-500 text-white px-4 py-2 rounded">
            Add Project
          </button>
        </div>
        <ul className="mt-6 space-y-2">
          {projects.map((project) => (
            <li
              key={project.name}
              className={`flex justify-between items-center border p-2 rounded ${
                project.archived ? 'bg-gray-300' : ''
              }`}
            >
              <span>{project.name}</span>
              {!project.archived && (
                <button
                  onClick={() => handleArchiveProject(project.name)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Archive
                </button>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Projects;
