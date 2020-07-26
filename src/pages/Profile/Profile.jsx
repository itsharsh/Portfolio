import React from "react";

import Layout from "../../components/Layout";

import { SectionTitle, Paragraph, Pill } from "../../styles";

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
          <span key={skill.name} title={`${skill.rating}/5`}>
            <Pill>{skill.name}</Pill>
          </span>
        ))}
      </div>
    </div>
  </Layout>
);

export default Profile;
