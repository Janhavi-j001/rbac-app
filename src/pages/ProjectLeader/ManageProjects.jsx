import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import projectimg from "../../imgs/projects.svg";

const ManageProjects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project A", status: "In Progress", description: "Main application development" },
    { id: 2, name: "Project B", status: "Completed", description: "Website redesign project" },
  ]);
  const [newProject, setNewProject] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const addProject = () => {
    if (newProject.trim()) {
      setProjects([
        ...projects,
        { id: projects.length + 1, name: newProject, status: "Pending", description: "New project" },
      ]);
      setNewProject("");
      setShowAddForm(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white shadow-soft border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BackButton to="/project-leader/dashboard" />
              <div>
                <h1 className="text-3xl font-bold text-primary">Manage Projects</h1>
                <p className="text-gray-600 mt-1">Create and oversee your projects</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="btn-primary"
            >
              Add New Project
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {showAddForm && (
              <div className="card mb-6">
                <h2 className="text-xl font-semibold text-primary mb-4">Add New Project</h2>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={newProject}
                    placeholder="Enter project name"
                    onChange={(e) => setNewProject(e.target.value)}
                    className="input-field flex-1"
                  />
                  <button onClick={addProject} className="btn-primary">
                    Add
                  </button>
                  <button 
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="card hover:shadow-medium transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary">{project.name}</h3>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card h-fit">
            <div className="text-center">
              <img src={projectimg} alt="Manage Projects" className="w-full max-w-xs mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">Project Management</h3>
              <p className="text-gray-600 text-sm">
                Organize and track your projects efficiently with our management tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProjects;
