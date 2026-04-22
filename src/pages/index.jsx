import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";
import About from "./About/About"; // We will create this
import Welcome from "./Welcome/Welcome";
import { GlobalStyle } from "../styles";
import { IntentProvider, useIntent } from "../context/IntentContext";

const Routing = ({ user }) => {
  const { hasVisited } = useIntent();

  if (!hasVisited) {
    return <Welcome user={user} />;
  }

  return (
    <Layout user={user}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Profile user={user} />} />
        <Route path="/about" element={<About user={user} />} />
        <Route path="/projects" element={<Projects user={user} />} />
        <Route path="/experience" element={<Experience user={user} />} />
        <Route path="/education" element={<Education user={user} />} />
        <Route path="/achievements" element={<Achievements user={user} />} />
      </Routes>
    </Layout>
  );
};

const Pages = ({ user }) => (
  <IntentProvider>
    <Router>
      <GlobalStyle />
      <Routing user={user} />
    </Router>
  </IntentProvider>
);

export default Pages;
