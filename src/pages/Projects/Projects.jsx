import React from "react";
import { ArrowRight } from "@carbon/icons-react";

import Layout from "../../components/Layout";

import { SectionTitle, Pill, StyledTile } from "../../styles";
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
          <StyledTile key={i}>
            <StyledProjectItem>
              <StyledProjectTitle>
                {project.displayName}{" "}
              </StyledProjectTitle>
              <div style={{ margin: '1rem 0' }}>
                {project.website && (
                  <StyledProjectDemoLink
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#00d1b2', borderBottom: '1px solid #00d1b2', paddingBottom: '2px', marginRight: '1.5rem' }}
                  >
                    Live Demo <ArrowRight size={16} />
                  </StyledProjectDemoLink>
                )}{" "}
                {project.githubUrl && (
                  <StyledProjectSourceLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#8d8d8d', borderBottom: '1px solid #8d8d8d', paddingBottom: '2px' }}
                  >
                    Source Code <ArrowRight size={16} />
                  </StyledProjectSourceLink>
                )}
              </div>
              <p style={{ color: '#d1d1d1', lineHeight: '1.6', marginBottom: '1.5rem' }}>{project.summary}</p>
              <StyledSkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </StyledSkillContainer>
            </StyledProjectItem>
          </StyledTile>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Projects;
