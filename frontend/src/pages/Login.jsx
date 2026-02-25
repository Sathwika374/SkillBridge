import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("volunteer");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Welcome Back</h2>
        <p className="subtitle">
          Sign in as {role === "volunteer" ? "Volunteer" : "NGO"}
        </p>

        
        <div className="role-toggle">
          <button
            className={role === "volunteer" ? "active" : ""}
            onClick={() => setRole("volunteer")}
          >
            Volunteer
          </button>

          <button
            className={role === "ngo" ? "active" : ""}
            onClick={() => setRole("ngo")}
          >
            NGO
          </button>
        </div>

        <form>
          <input type="email" placeholder="Email Address" required />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="extra-links">
          <a href="#">Forgot Password?</a>
          <p>
            Don’t have an account? <a href="/Register">Sign Up</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;