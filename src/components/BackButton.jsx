import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 mb-4"
    >
      Back
    </button>
  );
};

export default BackButton;
