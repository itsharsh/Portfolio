import React, { useState } from 'react';
import { Grid, Column } from '@carbon/react';
import { Search, Code, Launch } from '@carbon/icons-react';
import { StyledTile, SectionHeader, TechPill, Container, ProjectActionBtn, theme } from '../../styles';
import styled from 'styled-components';
import { formatUrl } from '../../utils';
import { personalData } from '../../personalData';

const ProjectsHero = styled.div`
  padding: 0 0 1rem 0;
  margin-bottom: 2rem;
`;

const MasonryGrid = styled.div`
  -webkit-column-count: 1;
  -moz-column-count: 1;
  column-count: 1;
  -webkit-column-gap: 2rem;
  -moz-column-gap: 2rem;
  column-gap: 2rem;
  
  @media (min-width: 1056px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  & > div {
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    margin-bottom: 2rem;
    display: table;
    width: 100%;
  }
`;

const FilterGrid = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchContainer = styled.div`
  flex-grow: 1;
  max-width: 600px;
  position: relative;

  input {
    background-color: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};
    color: ${theme.colors.text};
    height: 48px;
    width: 100%;
    padding-left: 3rem;
    border-radius: 4px;
    outline: none;
    font-family: ${theme.fonts.primary};

    &:focus {
      border-color: ${theme.colors.primary};
    }
  }

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    fill: ${theme.colors.textMuted};
  }
`;

const FilterButton = styled.button`
  background-color: \${props => props.$active ? theme.colors.surfaceTonal : 'transparent'};
  color: \${props => props.$active ? theme.colors.text : theme.colors.textMuted};
  border: 1px solid ${theme.colors.border};
  padding: 0 1.5rem;
  height: 48px;
  border-radius: 4px;
  font-family: ${theme.fonts.primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.surfaceTonal};
    color: ${theme.colors.text};
  }
`;

const ProjectCard = styled(StyledTile)`
  display: flex;
  flex-direction: column;
  padding: 2.5rem !important;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.text};
  }

  .actions {
    display: flex;
    gap: 0.5rem;

    a {
      color: ${theme.colors.text};
      transition: color 0.2s;
      &:hover { color: ${theme.colors.primary}; }
    }
  }

  p {
    color: ${theme.colors.textMuted};
    line-height: 1.6;
    margin-bottom: 2rem;
    flex-grow: 1;
  }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .preview-container {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1.5rem;
    position: relative;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    background-color: ${theme.colors.border};
    border: 1px solid ${theme.colors.border};

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: 0 0;
      border: none;
      pointer-events: none;
    }
  }
`;

const Projects = ({ user }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Combine GitConnected Projects with the temporary ones from personalData
  const baseProjects = user.projects.map(p => ({
    name: p.name,
    summary: p.summary || p.description,
    githubUrl: p.githubUrl,
    website: p.website,
    languages: p.languages || [],
    category: p.languages.includes('HTML') || p.languages.includes('CSS') ? 'Frontend' : 'Systems'
  }));

  const allProjects = [...personalData.pendingProjects, ...baseProjects].reverse();

  const filteredProjects = allProjects.filter(p => {
    const searchString = `${p.name} ${p.summary} ${p.languages.join(' ')}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <Container>
      <ProjectsHero>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <SectionHeader style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              Projects
            </SectionHeader>
            <p style={{ fontSize: '1.25rem', color: theme.colors.textMuted, maxWidth: '650px', lineHeight: '1.6' }}>
              A selection of technical projects demonstrating system architecture, performance optimization, and scalable solutions.
            </p>
          </Column>
        </Grid>
      </ProjectsHero>

      <Grid style={{ marginBottom: '2rem' }}>
        <Column lg={16} md={8} sm={4}>
          <SearchContainer style={{ maxWidth: '100%' }}>
            <Search size={20} />
            <input
              type="text"
              placeholder="Search by technology or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
        </Column>
      </Grid>

      <MasonryGrid className="fade-in" style={{ animationDelay: '0.4s' }}>
        {filteredProjects.map((project, i) => (
          <div key={i}>
            <StyledTile style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>{project.name}</h3>
                <div className="actions" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {(project.website && project.website !== '#' && !project.website.includes('github.com')) && (
                    <ProjectActionBtn $primary href={formatUrl(project.website)} target="_blank" rel="noreferrer">
                      <Launch size={16} /> Live Demo
                    </ProjectActionBtn>
                  )}
                  {project.githubUrl && (
                    <ProjectActionBtn href={formatUrl(project.githubUrl)} target="_blank" rel="noreferrer">
                      <Code size={16} /> Source Code
                    </ProjectActionBtn>
                  )}
                </div>
              </div>

              {(project.website && project.website !== '#' && !project.website.includes('github.com')) && (
                <div style={{
                  width: '100%', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem',
                  position: 'relative', paddingTop: '35%', backgroundColor: theme.colors.border, border: `1px solid ${theme.colors.border}`
                }}>
                  <iframe
                    src={formatUrl(project.website)}
                    title={`${project.name} Preview`}
                    sandbox="allow-scripts allow-same-origin"
                    loading="lazy"
                    style={{ position: 'absolute', top: 0, left: 0, width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: '0 0', border: 'none', pointerEvents: 'none' }}
                  />
                </div>
              )}

              <p style={{ color: theme.colors.textMuted, lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>{project.summary}</p>
              <div className="tags">
                {project.languages.map((lang, idx) => (
                  <TechPill key={idx} style={{ marginTop: 0 }}>{lang}</TechPill>
                ))}
              </div>
            </StyledTile>
          </div>
        ))}
      </MasonryGrid>
    </Container>
  );
};

export default Projects;
