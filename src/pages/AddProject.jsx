import React, { useState } from "react";
import BackButton from "../components/BackButton";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");

  const handleAddProject = () => {
    if (projectName) {
      alert(`Project "${projectName}" added successfully!`);
      setProjectName("");
    }
  };

  return (
    <div className="p-6">
      <BackButton />
      <h1 className="text-2xl font-bold mb-4">Add Project</h1>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="border px-4 py-2 rounded-md w-full mb-4"
        placeholder="Enter project name"
      />
      <button
        onClick={handleAddProject}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Add Project
      </button>
    </div>
  );
};

export default AddProject;
