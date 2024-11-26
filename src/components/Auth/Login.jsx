import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../utils/auth";
import login from "../../imgs/login.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginUser(email, password)) {
      toast.success("Login successful!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div style={{ backgroundColor: "#ede8f5", color: "#3d52a0" }} className="flex justify-center items-center h-screen ">
      <div className="max-w-lg">
          <img 
            src={login} 
            alt="login" 
            className="w-full max-h-96 rounded-lg "
          />
        </div>
      <div style={{ backgroundColor: "#3d52a0", color: "#adbbda" }} className="w-96 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block ">Email</label>
            <input
              style={{ backgroundColor: "#ede8f5" }}
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block ">Password</label>
            <input
              style={{ backgroundColor: "#ede8f5" }}
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            style={{ backgroundColor: "#7091e6", color: "#ede8f5" }}
            type="submit"
            className="w-full py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p style={{ color: "#8697c4" }} className="text-center mt-4 ">
          Don't have an account?{" "}
          <span
            style={{ color: "#ede8f5" }}
            onClick={() => navigate("/signup")}
            className="cursor-pointer hover:underline"
          >
            SignUp here
          </span>
        </p>
        
      </div>
      
    </div>
  );
};

export default Login;
