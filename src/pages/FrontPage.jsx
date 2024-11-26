import React from "react";
import { useNavigate } from "react-router-dom";
import teams from "../imgs/team.svg";

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold">Welcome to <span className="text-yellow-300">TeamHub</span></h1>
        <p className="mt-4 text-lg">Collaborate seamlessly, manage roles, and power up your projects with ease.</p>
      </header>

      <div className="flex flex-wrap items-center justify-center space-x-8">
        <div className="max-w-lg">
          <img 
            src={teams} 
            alt="Team Collaboration" 
            className="w-full max-h-96 rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center">
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Empower your team with robust role-based access control and manage projects effectively.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-yellow-300 text-blue-800 font-semibold rounded-md hover:bg-yellow-400 transition"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-200">
        © {new Date().getFullYear()} TeamHub. All rights reserved.
      </footer>
    </div>
  );
};

export default FrontPage;
