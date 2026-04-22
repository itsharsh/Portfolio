import React from 'react';
import { Grid, Column } from '@carbon/react';
import { StyledTile, SectionHeader, TechPill, Container, theme } from '../../styles';
import styled from 'styled-components';


const ExperienceHero = styled.div`
  padding: 0 0 1.5rem 0;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 2rem;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2.5rem;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    bottom: 0;
    width: 1px;
    background-color: ${theme.colors.border};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 4rem;

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 0.5rem;
    width: 9px;
    height: 9px;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 0 4px ${theme.colors.background};
    z-index: 1;
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.25rem;
    margin: 0;
    color: ${theme.colors.text};
  }

  .date {
    background-color: ${theme.colors.surfaceTonal};
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    font-family: ${theme.fonts.technical};
    font-size: 0.8rem;
    color: ${theme.colors.textMuted};
    letter-spacing: 0.05em;
  }
`;

const ExpertCard = styled(StyledTile)`
  margin-bottom: 1.5rem;
  padding: 1.5rem !important;

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: ${theme.colors.text};
  }
`;

// Helper to format GitConnected dates safely
const formatYear = (dateString, backup) => {
  if (!dateString) return backup;
  return dateString.substring(0, 4);
};

// Categories for dynamic grouping of GitConnected skills
const categorizeSkills = (skills) => {
  const groups = {
    "Backend & Architecture": [],
    "Frontend": [],
    "Hardware & IoT": [],
    "Tools & Methodology": [],
    "Other": []
  };

  if (!skills) return groups;

  skills.forEach(skillObj => {
    const name = skillObj.name;
    const lowerName = name.toLowerCase();

    if (lowerName.includes('node') || lowerName.includes('mongo') || lowerName.includes('python') || lowerName.includes('c++') || lowerName.includes('auth') || lowerName.includes('go')) {
      groups["Backend & Architecture"].push(name);
    } else if (lowerName.includes('react') || lowerName.includes('html') || lowerName.includes('css')) {
      groups["Frontend"].push(name);
    } else if (lowerName.includes('iot') || lowerName.includes('robotic') || lowerName.includes('esp') || lowerName.includes('arduino') || lowerName.includes('raspberry')) {
      groups["Hardware & IoT"].push(name);
    } else if (lowerName.includes('agile') || lowerName.includes('git') || lowerName.includes('opencv') || lowerName.includes('image')) {
      groups["Tools & Methodology"].push(name);
    } else {
      groups["Other"].push(name);
    }
  });

  // Remove empty groups
  return Object.fromEntries(Object.entries(groups).filter(([_, items]) => items.length > 0));
};

const Experience = ({ user }) => {
  const groupedSkills = categorizeSkills(user.skills);

  return (
    <Container className="fade-in">
      <ExperienceHero>
        <SectionHeader style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          Experience & Skills
        </SectionHeader>
        <p style={{ fontSize: '1.25rem', color: theme.colors.textMuted, maxWidth: '600px' }}>
          A detailed look at my professional journey, technical expertise, and the systems I've built.
        </p>
      </ExperienceHero>

      <Grid>
        <Column lg={10} md={8} sm={4} style={{ paddingRight: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <span style={{ fontSize: '1.5rem' }}>💼</span>
            <h2 style={{ fontSize: '2rem' }}>Professional Timeline</h2>
          </div>
          <Timeline>
            {user.work?.map((work, i) => (
              <TimelineItem key={i}>
                <JobHeader>
                  <div>
                    <h3>{work.position}</h3>
                    <p style={{ color: theme.colors.textMuted, margin: '0.25rem 0 1rem 0' }}>{work.name}</p>
                  </div>
                  <span className="date">
                    {formatYear(work.startDate, work.start?.year)} - {work.isCurrentRole ? 'Present' : formatYear(work.endDate, work.end?.year)}
                  </span>
                </JobHeader>
                <div style={{ color: theme.colors.textMuted, lineHeight: '1.6' }}>
                  {work.summary && <p style={{ marginBottom: '1rem' }}>{work.summary}</p>}
                  {work.highlights?.length > 0 && (
                    <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                      {work.highlights.map((highlight, idx) => (
                        <li key={idx} style={{ marginBottom: '0.5rem' }}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>


                {/* Fallback to generic tags based on the position if none provided by GitConnected highlight schema yet */}
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {(work.name.includes('Chegg')) && (
                       ['AUTH0', 'IAM', 'PASSWORDLESS', 'UNIVERSAL LOGIN', 'RBAC', 'CURSOR & CLAUDE CODE', 'COST OPTIMIZATION'].map(t => <TechPill key={t} $highlight={true}>{t}</TechPill>)
                    )}
                    {(work.name.includes('Dhwani')) && (
                       ['MICROSERVICES', 'MULTITENANCY', 'DYNAMIC DASHBOARD BUILDER', 'COMPLEX SURVEY FORM BUILDER', 'NODE.JS', 'MONGODB'].map(t => <TechPill key={t} $highlight={true}>{t}</TechPill>)
                    )}
                    {(!work.name.includes('Chegg') && !work.name.includes('Dhwani')) && (
                       ['JAVASCRIPT', 'REACT', 'BACKEND ARCHITECTURE'].map(t => <TechPill key={t}>{t}</TechPill>)
                    )}
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </Column>

        <Column lg={6} md={8} sm={4}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <span style={{ fontSize: '1.5rem' }}>{"<>"}</span>
            <h2 style={{ fontSize: '2rem' }}>Technical Expertise</h2>
          </div>
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <ExpertCard key={category}>
              <h4>{category}</h4>
              <div>
                {skills.map(skill => (
                  <TechPill key={skill}>{skill}</TechPill>
                ))}
              </div>
            </ExpertCard>
          ))}
        </Column>
      </Grid>
    </Container>
  );
};

export default Experience;
