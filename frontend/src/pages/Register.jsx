import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [role, setRole] = useState("volunteer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "volunteer") {
      navigate("/volunteer-profile", {
        state: formData,
      });
    } else {
      navigate("/ngo-profile", {
        state: formData,
      });
    }
  };

  return (
    <div className="register-container">
      <div className="card">
        <h2>Create Your Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />

          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <div className="role-section">
            <p>I am a...</p>

            <div className="role-options">
              <div
                className={`role-card ${role === "volunteer" ? "active" : ""}`}
                onClick={() => setRole("volunteer")}
              >
                👥 Volunteer
              </div>

              <div
                className={`role-card ${role === "ngo" ? "active" : ""}`}
                onClick={() => setRole("ngo")}
              >
                🏢 NGO
              </div>
            </div>
          </div>

          <button type="submit" className="register-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;