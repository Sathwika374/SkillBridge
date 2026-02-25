import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./VolunteerProfile.css";

const VolunteerProfile = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  const [selectedSkills, setSelectedSkills] = useState([]);

  const [formData, setFormData] = useState({
    fullName: name || "",
    emailAddress: email || "",
    contact: "",
    city: "",
    experienceLevel: "",
    years: "",
    availability: "",
    hours: "",
    about: "",
    linkedin: "",
    portfolio: "",
  });

  const skills = [
    "Teaching",
    "Web Development",
    "Graphic Design",
    "Healthcare",
    "Fundraising",
    "Mentoring",
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>prev.includes(skill)? prev.filter((s) => s !== skill): [...prev, skill]
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, skills: selectedSkills });
  };

  return (
    <div className="volunteer-container">
      <div className="volunteer-card">
        <h1>
          Complete Your <span>Volunteer Profile</span>
        </h1>

        <form onSubmit={handleSubmit}>

          
          <div className="section-card">
            <h3>Personal Information</h3>
            <div className="row">
              <input type="text" value={formData.fullName} readOnly />
              <input type="email" value={formData.emailAddress} readOnly />
            </div>
            <div className="row">
              <input
                name="contact"
                placeholder="Contact Number"
                onChange={handleChange}
              />
              <input
                name="city"
                placeholder="City, State"
                onChange={handleChange}
              />
            </div>
          </div>

          
          <div className="section-card">
            <h3>Skills & Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className={`skill-chip ${
                    selectedSkills.includes(skill) ? "active" : ""
                  }`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

         
          <div className="section-card">
            <h3>Experience</h3>
            <div className="row">
              <select
                name="experienceLevel"
                onChange={handleChange}
              >
                <option value="">Experience Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>
              <input
                name="years"
                placeholder="Years of Experience"
                onChange={handleChange}
              />
            </div>
          </div>

          
          <div className="section-card">
            <h3>Availability</h3>
            <div className="row">
              <select
                name="availability"
                onChange={handleChange}
              >
                <option value="">Availability Type</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Weekends</option>
              </select>
              <input
                name="hours"
                placeholder="Hours per Week"
                onChange={handleChange}
              />
            </div>
          </div>

         
          <div className="section-card about-section">
             <h3>About You</h3>

              <textarea name="about"
                   placeholder="Share your motivation, goals, experience, and how you want to create impact through volunteering..."
                  onChange={handleChange}
              />
          </div>
          
          <div className="section-card">
            <h3>Portfolio / Social Links</h3>
            <div className="row">
              <input
                name="linkedin"
                placeholder="LinkedIn Profile"
                onChange={handleChange}
              />
              <input
                name="portfolio"
                placeholder="Portfolio Website"
                onChange={handleChange}
              />
            </div>
          </div>

          
          <div className="section-card">
            <h3>Profile Photo</h3>
            <label className="upload-box">
              <input type="file" hidden />
              <div>
                📸
                <span>Upload Profile Photo</span>
                <p>PNG, JPG up to 5MB</p>
              </div>
            </label>
          </div>

          <button className="submit-btn">
            Submit Volunteer Profile
          </button>

        </form>
      </div>
    </div>
  );
};

export default VolunteerProfile;