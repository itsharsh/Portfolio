import React from "react";

import { Personal } from "../../Data";

const SocialFields = Personal.subtopics.find((e) => e.title === "Social");

const Social = () => (
  <div>
    Looking for my{" "}
    <a
      href={`http://${
        SocialFields.subtopics.find((e) => e.title === "Resume").subtopics[0]
          .title
      }`}
    >
      Resume
    </a>
    ?
    <br /> Connect with me on{" "}
    <a
      href={`http://${
        SocialFields.subtopics.find((e) => e.title === "LinkedIn").subtopics[0]
          .title
      }`}
    >
      LinkedIn.
    </a>
    <br />
    Have a loot at my{" "}
    <a
      href={`http://${
        SocialFields.subtopics.find((e) => e.title === "GitHub").subtopics[0]
          .title
      }`}
    >
      Github Profile.
    </a>{" "}
  </div>
);

export default Social;
