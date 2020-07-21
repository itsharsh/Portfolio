import React from "react";

import Layout from "../../components/Layout";

import { SectionTitle, Paragraph } from "../../styles";
import { StyledWorkItem, StyledWorkTitle, StyledJobTitle } from "./styles";

const Work = ({ user }) => (
  <Layout user={user}>
    <div>
      <SectionTitle>Work</SectionTitle>
      <ul>
        {user.work.map((work, i) => (
          <StyledWorkItem key={i}>
            <StyledWorkTitle>{work.position}</StyledWorkTitle>
            <div>
              <StyledJobTitle>{work.company}</StyledJobTitle>
              <span>{work.location}</span>
              <span>&sdot;</span>
              <span>
                {work.start.year} to {work.end.year}
              </span>
            </div>
            <Paragraph>{work.summary}</Paragraph>
          </StyledWorkItem>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Work;
