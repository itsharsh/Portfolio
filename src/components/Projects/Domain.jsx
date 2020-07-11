import React from "react";

import Topic from "./Topic";

const Projects = (props) => (
  <div>
    <h4>{props.domain.title}:</h4>
    {props.domain.subtopics.map((topic) => (
      <Topic topic={topic} key={topic.title} />
    ))}
  </div>
);

export default Projects;
