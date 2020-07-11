import React from "react";

import { Skills as SkillsList } from "../Data";
import Domain from "./Projects/Domain";

const Skills = () => (
  <div>
    <h3>Skills:</h3>
    {SkillsList.subtopics.map((domain) => (
      <Domain domain={domain} key={domain.title} />
    ))}
  </div>
);

export default Skills;
