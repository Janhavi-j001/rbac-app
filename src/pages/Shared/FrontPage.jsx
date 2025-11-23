import React from "react";
import { useNavigate } from "react-router-dom";
import teams from "../../imgs/team-colab.svg";
import "../../styles/FrontPage.css";

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="frontpage-container">
      {/* Header Section */}
      <header className="header">
        <h1>
          Welcome to <span className="highlight">TeamHub</span>
        </h1>
        <p className="subtext">
          Collaborate seamlessly, manage roles, and power up your projects with ease.
        </p>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <div className="image-container">
          <img src={teams} alt="Team Collaboration" className="team-image" />
        </div>

        <div className="info-container">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Empower your team with
            robust role-based access control and manage projects effectively.
          </p>
          <div className="buttons">
            <button className="btn login-btn" onClick={() => navigate("/login")}>
              Log In
            </button>
            <button className="btn signup-btn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            TeamHub is a cutting-edge platform designed to enhance collaboration, streamline
            role management, and make project workflows seamless.
          </p>
          <p>
            Designed with robust features and a user-friendly interface, TeamHub empowers
            teams to achieve their goals effortlessly.
          </p>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} TeamHub. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;
