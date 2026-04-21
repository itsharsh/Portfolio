import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./Profile";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";

const Pages = ({ user }) => (
  <Router>
    <Routes>
      <Route path="/" element={<Profile user={user} />} />
      <Route path="/projects" element={<Projects user={user} />} />
      <Route path="/experience" element={<Experience user={user} />} />
      <Route path="/education" element={<Education user={user} />} />
      <Route path="/achievements" element={<Achievements user={user} />} />
    </Routes>
  </Router>
);

export default Pages;
