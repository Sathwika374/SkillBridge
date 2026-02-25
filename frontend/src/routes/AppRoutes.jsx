import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Register from "../pages/Register";
import VolunteerProfile from "../pages/VolunteerProfile";
import NgoProfile from "../pages/NgoProfile";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/volunteer-profile" element={<VolunteerProfile />} />
      <Route path="/ngo-profile" element={<NgoProfile />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
};

export default AppRoutes;