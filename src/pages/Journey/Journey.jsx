import React from 'react';
import { Grid, Column } from '@carbon/react';
import { Launch } from '@carbon/icons-react';
import { StyledTile, SectionHeader, Container, theme } from '../../styles';
import styled from 'styled-components';

const JourneyHero = styled.div`
  padding: 0 0 1.5rem 0;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 2rem;
`;

const JourneyCard = styled(StyledTile)`
  margin-bottom: 2rem;
  
  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .main-title {
    font-size: 1.5rem;
    color: ${theme.colors.text};
    margin: 0;
  }

  .issuer {
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

const Journey = ({ user }) => {
  return (
    <Container className="fade-in">
      <JourneyHero>
        <SectionHeader style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          My Journey
        </SectionHeader>
        <p style={{ fontSize: '1.25rem', color: theme.colors.textMuted, maxWidth: '600px' }}>
          A consolidated record of my academic foundation, professional honors, and technical publications.
        </p>
      </JourneyHero>

      {/* EDUCATION SECTION */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Academic Background</h2>
        <Grid>
          {user.education.map((edu, i) => (
            <Column lg={6} md={8} sm={4} key={`edu-${i}`}>
              <JourneyCard>
                <h3 className="main-title">{edu.institution}</h3>
                <div className="issuer">{edu.studyType} {edu.area ? `in ${edu.area}` : ''}</div>
                {edu.description && (
                  <p style={{ color: theme.colors.textMuted, lineHeight: '1.6' }}>
                    {edu.description}
                  </p>
                )}
                <div className="meta">
                  <span>{edu.start.year} — {edu.end.year}</span>
                </div>
              </JourneyCard>
            </Column>
          ))}
        </Grid>
      </div>

      {/* PUBLICATIONS SECTION */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Publications</h2>
        <Grid>
          {user.publications.map((pub, i) => (
            <Column lg={6} md={8} sm={4} key={`pub-${i}`}>
              <JourneyCard>
                <div className="title-row">
                  <h3 className="main-title">{pub.name}</h3>
                  <a href={pub.website} target="_blank" rel="noreferrer">
                    <Launch size={24} style={{ fill: theme.colors.primary }} />
                  </a>
                </div>
                <div className="issuer">{pub.publisher} • {pub.releaseDate}</div>
                <p style={{ color: theme.colors.textMuted, lineHeight: '1.6' }}>{pub.summary}</p>
              </JourneyCard>
            </Column>
          ))}
        </Grid>
      </div>

      {/* AWARDS SECTION */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Honors & Awards</h2>
        <Grid>
          {user.awards.map((award, i) => (
            <Column lg={6} md={8} sm={4} key={`award-${i}`}>
              <JourneyCard>
                <h3 className="main-title">{award.title}</h3>
                <div className="issuer">{award.awarder} • {award.date}</div>
                <p style={{ color: theme.colors.textMuted, lineHeight: '1.6' }}>{award.summary}</p>
              </JourneyCard>
            </Column>
          ))}
        </Grid>
      </div>

    </Container>
  );
};

export default Journey;
