import React from "react";

import Layout from "../../components/Layout";

import { SectionTitle, Paragraph, Pill, StyledTile } from "../../styles";

const Profile = ({ user }) => (
  <Layout user={user}>
    <StyledTile>
      <SectionTitle style={{ marginTop: 0 }}>About Me</SectionTitle>
      <Paragraph>{user.basics.summary}</Paragraph>
    </StyledTile>

    <StyledTile>
      <SectionTitle style={{ marginTop: 0 }}>Expertise & Skills</SectionTitle>
      <div style={{ marginTop: '1.5rem' }}>
        <h4 style={{ color: '#00d1b2', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Core Technologies</h4>
        <div style={{ marginBottom: '1.5rem' }}>
          {user.skills.map((skill, i) => (
            <span key={i} title={`${skill.rating}/5`}>
              <Pill>{skill.name}</Pill>
            </span>
          ))}
        </div>
      </div>
    </StyledTile>
  </Layout>
);

export default Profile;
