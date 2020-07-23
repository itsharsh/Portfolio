import React from "react";
import { ArrowRight16 } from "@carbon/icons-react";

import Layout from "../../components/Layout";

import { SectionTitle, Pill } from "../../styles";
import {
  StyledProjectItem,
  StyledProjectTitle,
  StyledSkillContainer,
  StyledProjectDemoLink,
  StyledProjectSourceLink,
} from "./styles";

const Projects = ({ user }) => (
  <Layout user={user}>
    <div>
      <SectionTitle>Projects</SectionTitle>
      <ul>
        {user.projects.map((project, i) => (
          <StyledProjectItem key={i}>
            <StyledProjectTitle>
              {project.displayName}{" "}
              {project.website && (
                <StyledProjectDemoLink
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo <ArrowRight16 />
                </StyledProjectDemoLink>
              )}{" "}
              {project.githubUrl && (
                <StyledProjectSourceLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code <ArrowRight16 />
                </StyledProjectSourceLink>
              )}
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
