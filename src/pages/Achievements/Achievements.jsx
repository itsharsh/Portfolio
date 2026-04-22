import React from 'react';
import { Grid, Column } from '@carbon/react';
import { Launch } from '@carbon/icons-react';
import { StyledTile, SectionHeader, Container, theme } from '../../styles';
import styled from 'styled-components';

const AchievementsHero = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 2rem;
`;

const AchievementCard = styled(StyledTile)`
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
    margin-bottom: 1.5rem;
  }
`;

const Achievements = ({ user }) => {
  return (
    <Container>
      <AchievementsHero>
        <SectionHeader style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          Technical Recognition
        </SectionHeader>
        <p style={{ fontSize: '1.25rem', color: theme.colors.textMuted, maxWidth: '600px' }}>
          A record of publications, industry awards, and professional contributions.
        </p>
      </AchievementsHero>

      <div style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Publications</h2>
        <Grid>
          {user.publications.map((pub, i) => (
            <Column lg={6} md={8} sm={4} key={i}>
              <AchievementCard>
                <div className="title-row">
                  <h3 className="main-title">{pub.name}</h3>
                  <a href={pub.website} target="_blank" rel="noreferrer">
                    <Launch size={24} style={{ fill: theme.colors.primary }} />
                  </a>
                </div>
                <div className="issuer">{pub.publisher} • {pub.releaseDate}</div>
                <p style={{ color: theme.colors.textMuted, lineHeight: '1.6' }}>{pub.summary}</p>
              </AchievementCard>
            </Column>
          ))}
        </Grid>
      </div>

      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Honors & Awards</h2>
        <Grid>
          {user.awards.map((award, i) => (
            <Column lg={6} md={8} sm={4} key={i}>
              <AchievementCard>
                <h3 className="main-title">{award.title}</h3>
                <div className="issuer">{award.awarder} • {award.date}</div>
                <p style={{ color: theme.colors.textMuted, lineHeight: '1.6' }}>{award.summary}</p>
              </AchievementCard>
            </Column>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Achievements;
