import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { saveUser } from "../../utils/auth";
import signup from "../../imgs/signup.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Ensure passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Save the user to the database or local storage
    saveUser({ email, password });
    toast.success("Signup successful! Please login.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div style={{ backgroundColor: "#ede8f5", color: "#3d52a0" }} className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-lg">
          <img 
            src={signup} 
            alt="signup" 
            className="w-full max-h-96 rounded-lg"
          />
        </div>
      <div style={{ backgroundColor: "#3d52a0", color: "#adbbda" }} className="w-96 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          {/* Email input */}
          <div className="mb-4">
            <label className="block ">Email</label>
            <input
              style={{ backgroundColor: "#ede8f5" }}
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              value={email} // Ensure the value is tied to the state
              onChange={(e) => setEmail(e.target.value)} // Update state
              required
            />
          </div>
          {/* Password input */}
          <div className="mb-4">
            <label className="block">Password</label>
            <input
              style={{ backgroundColor: "#ede8f5" }}
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              value={password} // Ensure the value is tied to the state
              onChange={(e) => setPassword(e.target.value)} // Update state
              required
            />
          </div>
          {/* Confirm Password input */}
          <div className="mb-4">
            <label className="block ">Confirm Password</label>
            <input
              style={{ backgroundColor: "#ede8f5" }}
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              value={confirmPassword} // Ensure the value is tied to the state
              onChange={(e) => setConfirmPassword(e.target.value)} // Update state
              required
            />
          </div>
          {/* Signup button */}
          <button
            style={{ backgroundColor: "#7091e6", color: "#ede8f5" }}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Signup
          </button>
        </form>
        <p style={{ color: "#8697c4" }} className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <span
            style={{ color: "#7091e6" }}
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
