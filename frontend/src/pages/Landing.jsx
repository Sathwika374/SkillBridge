import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <nav className="navbar">
        <h1 className="logo">
          Skill<span>Build</span>
        </h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <div className="hero">
        <h2>Learn. Volunteer. Grow.</h2>

        <p>
          SkillBuild connects learners with volunteers to share knowledge
          and build a stronger community.
        </p>

        <div className="buttons">
          <Link to="/register" className="primary">
            Get Started
          </Link>

          <Link to="/register" className="secondary">
            Become a Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;