import React from "react";

import Layout from "../../components/Layout";

import { SectionTitle, Paragraph, Pill } from "../../styles";
import { StyledProfileLink } from "./styles";

const Profile = ({ user }) => (
  <Layout user={user}>
    <div>
      <SectionTitle>About Me</SectionTitle>
      <Paragraph>{user.basics.summary}</Paragraph>
    </div>
    <div>
      <SectionTitle>Skills</SectionTitle>
      <div>
        {user.skills.map((skill) => (
          <span title={`${skill.rating}/5`}>
            <Pill key={skill.name}>{skill.name}</Pill>
          </span>
        ))}
      </div>
    </div>
    <div>
      <SectionTitle>Profiles</SectionTitle>
      <ul>
        {user.basics.profiles.map((profile, i) => (
          <StyledProfileLink key={profile.network}>
            {i !== 0 && " | "}{" "}
            <a href={profile.url} target="_blank" rel="noreferrer noopener">
              {profile.network}
            </a>
          </StyledProfileLink>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Profile;
