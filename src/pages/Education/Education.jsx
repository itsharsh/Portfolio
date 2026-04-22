import React from 'react';
import { Grid, Column } from '@carbon/react';
import { StyledTile, SectionHeader, Container, theme } from '../../styles';
import styled from 'styled-components';

const EducationHero = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 2rem;
`;

const EducationCard = styled(StyledTile)`
  margin-bottom: 2rem;
  
  .institution {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.text};
  }

  .degree {
    font-family: ${theme.fonts.technical};
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .meta {
    display: flex;
    gap: 1rem;
    font-size: 0.9rem;
    color: ${theme.colors.textMuted};
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid ${theme.colors.border};
  }
`;

const Education = ({ user }) => {
  return (
    <Container>
      <EducationHero>
        <SectionHeader style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          Academic Foundation
        </SectionHeader>
        <p style={{ fontSize: '1.25rem', color: theme.colors.textMuted, maxWidth: '600px' }}>
          Specialized education and academic research in computer science and engineering.
        </p>
      </EducationHero>

      <Grid>
        {user.education.map((edu, i) => (
          <Column lg={6} md={8} sm={4} key={i}>
            <EducationCard>
              <h3 className="institution">{edu.institution}</h3>
              <div className="degree">{edu.studyType} in {edu.area}</div>
              <p style={{ color: theme.colors.textMuted, lineHeight: '1.6' }}>
                {edu.description || 'Focused on systems architecture, data structures, and algorithmic efficiency.'}
              </p>
              <div className="meta">
                <span>{edu.start.year} — {edu.end.year}</span>
              </div>
            </EducationCard>
          </Column>
        ))}
      </Grid>
    </Container>
  );
};

export default Education;
