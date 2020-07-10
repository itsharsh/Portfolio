import React from "react";

import { Personal } from "../../Data";

const Intro = () => (
  <div>
    {Personal.subtopics.find((e) => e.title === "Intro").subtopics[0].title}
  </div>
);

export default Intro;
