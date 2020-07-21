import React from "react";

import Layout from "../../components/Layout";

import { SectionTitle, Pill } from "../../styles";
import {
  StyledProjectItem,
  StyledProjectTitle,
  StyledSkillContainer,
} from "./styles";

const Projects = ({ user }) => (
  <Layout user={user}>
    <div>
      <SectionTitle>Projects</SectionTitle>
      <ul>
        {user.projects.map((project, i) => (
          <StyledProjectItem key={i}>
            <StyledProjectTitle>
              <a
                href={project.website ? project.website : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.displayName}
              </a>
            </StyledProjectTitle>
            <p>{project.summary}</p>
            <StyledSkillContainer>
              {[...project.languages, ...project.libraries].map((item, j) => (
                <Pill key={j}>{item}</Pill>
              ))}
            </StyledSkillContainer>
          </StyledProjectItem>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Projects;
