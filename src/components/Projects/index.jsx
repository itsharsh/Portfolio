import React from "react";

import Domain from "./Domain";
import { Projects as ProjectsList } from "../../Data";

const Projects = () => (
  <div>
    <h3>Here is the glimpse of projects made by me:</h3>
    {ProjectsList.subtopics.map((domain) => (
      <Domain domain={domain} key={domain.title} />
    ))}
  </div>
);

export default Projects;
