import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./Profile";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";

const Pages = ({ user }) => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Profile user={user} />
      </Route>
      <Route path="/projects">
        <Projects user={user} />
      </Route>
      <Route path="/experience">
        <Experience user={user} />
      </Route>
      <Route path="/education">
        <Education user={user} />
      </Route>
      <Route path="/achievements">
        <Achievements user={user} />
      </Route>
    </Switch>
  </Router>
);

export default Pages;
