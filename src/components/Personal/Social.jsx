import React from "react";

import { Personal } from "../../Data";

const SocialFields = Personal.subtopics.find((e) => e.title === "Social");

const Social = () => (
  <div>
    Looking for my{" "}
    <a
      href={`${
        SocialFields.subtopics.find((e) => e.title === "Resume").subtopics[0]
          .title
      }`}
    >
      Resume
    </a>
    ?
    <br /> Connect with me on{" "}
    <a
      href={`${
        SocialFields.subtopics.find((e) => e.title === "LinkedIn").subtopics[0]
          .title
      }`}
    >
      LinkedIn.
    </a>
    <br />
    Have a look at my{" "}
    <a
      href={`${
        SocialFields.subtopics.find((e) => e.title === "GitHub").subtopics[0]
          .title
      }`}
    >
      Github Profile.
    </a>{" "}
    or{" "}
    <a
      href={`${
        SocialFields.subtopics.find((e) => e.title === "Hackerrank")
          .subtopics[0].title
      }`}
    >
      Hackerrank Profile.
      <br />
    </a>{" "}
    Drop me a{" "}
    <a
      href={`mailto:${
        SocialFields.subtopics.find((e) => e.title === "Email").subtopics[1]
          .title
      }`}
    >
      mail.
    </a>{" "}
  </div>
);

export default Social;
