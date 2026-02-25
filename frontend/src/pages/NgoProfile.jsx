import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./NgoProfile.css";

const NgoProfile = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  const [selectedAreas, setSelectedAreas] = useState([]);

  const [formData, setFormData] = useState({
    ngoName: name || "",
    officialEmail: email || "",
    registration: "",
    phone: "",
    city: "",
    state: "",
    established: "",
    website: "",
    projects: "",
    teamSize: "",
    beneficiaries: "",
    skillsRequired: "",
    mission: "",
    vision: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  });

  const focusOptions = [
    "Education",
    "Healthcare",
    "Environment",
    "Women Empowerment",
    "Child Welfare",
  ];

  const toggleArea = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area)
        ? prev.filter((a) => a !== area)
        : [...prev, area]
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
    console.log({ ...formData, focusAreas: selectedAreas });
  };

  return (
    <div className="ngo-container">
      <div className="ngo-card">
        <h1>
          Complete Your <span>NGO Profile</span>
        </h1>

        <form onSubmit={handleSubmit}>

          {/* Basic Info */}
          <div className="section-card">
            <h3>Basic Information</h3>
            <div className="row">
              <input type="text" value={formData.ngoName} readOnly />
              <input
                type="text"
                name="registration"
                placeholder="Registration Number"
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <input type="email" value={formData.officialEmail} readOnly />
              <input
                type="text"
                name="phone"
                placeholder="Contact Phone"
                onChange={handleChange}
              />
            </div>
          </div>

          
          <div className="section-card">
            <h3>Location & Establishment</h3>
            <div className="row">
              <input name="city" placeholder="City" onChange={handleChange} />
              <input name="state" placeholder="State" onChange={handleChange} />
            </div>
            <div className="row">
              <input name="established" placeholder="Year Established" onChange={handleChange} />
              <input name="website" placeholder="Website URL" onChange={handleChange} />
            </div>
          </div>

          
          <div className="section-card">
            <h3>Focus Areas</h3>
            <div className="focus-areas">
              {focusOptions.map((area) => (
                <div
                  key={area}
                  className={`focus-chip ${selectedAreas.includes(area) ? "active" : ""}`}
                  onClick={() => toggleArea(area)}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

         
          <div className="section-card">
            <h3>Mission & Vision</h3>
            <div className="mission-vision">
              <div className="mv-box">
                <h4>Our Mission</h4>
                <textarea
                  name="mission"
                  placeholder="What problem are you solving?"
                  onChange={handleChange}
                />
              </div>
              <div className="mv-box vision">
                <h4>Our Vision</h4>
                <textarea
                  name="vision"
                  placeholder="What future impact do you aim to create?"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          
          <div className="section-card">
            <h3>Organization Details</h3>
            <div className="row">
              <input name="projects" placeholder="Active Projects" onChange={handleChange} />
              <input name="teamSize" placeholder="Team Size" onChange={handleChange} />
            </div>
            <div className="row">
              <input name="beneficiaries" placeholder="Target Beneficiaries" onChange={handleChange} />
              <input name="skillsRequired" placeholder="Volunteer Skills Required" onChange={handleChange} />
            </div>
          </div>

          
          <div className="section-card">
            <h3>Social Media Links</h3>
            <div className="row">
              <input name="facebook" placeholder="Facebook URL" onChange={handleChange} />
              <input name="instagram" placeholder="Instagram URL" onChange={handleChange} />
            </div>
            <div className="row">
              <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
              <input name="twitter" placeholder="Twitter URL" onChange={handleChange} />
            </div>
          </div>

          
          <div className="section-card">
            <h3>Verification Documents</h3>
            <label className="upload-box">
              <input type="file" hidden />
              <div>
                📄
                <span>Upload Registration Certificate</span>
                <p>PDF, PNG, JPG (Max 10MB)</p>
              </div>
            </label>
          </div>

          <button className="submit-btn">Submit NGO Profile</button>

        </form>
      </div>
    </div>
  );
};

export default NgoProfile;