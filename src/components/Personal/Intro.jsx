import React from "react";

import { Personal } from "../../Data";

const Intro = () => (
  <div>
    <h2>
      Hey, You've reached Harsh from{" "}
      {
        Personal.subtopics
          .find((e) => e.title === "Location")
          .subtopics.find((e) => e.title === "Hometown").subtopics[0].title
      }
      .
    </h2>
  </div>
);

export default Intro;
