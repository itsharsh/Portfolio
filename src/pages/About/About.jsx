import React from 'react';
import { Grid, Column, Button } from '@carbon/react';
import { Container, StyledTile, SectionHeader, TechPill, theme } from '../../styles';
import styled from 'styled-components';

import { useIntent } from '../../context/IntentContext';

const AboutHero = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 2rem;
`;

const ContactCard = styled(StyledTile)`
  padding: 3rem !important;

  h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.textMuted};
    margin-bottom: 3rem;
  }
`;

const About = ({ user }) => {
  const { intent } = useIntent();
  const formatUrl = (url) => {
    if (!url) return '#';
    if (url.startsWith('http')) return url;
    return `https://${url}`;
  };

  const linkedin = formatUrl(user.basics.profiles?.find(p => p.network === 'LinkedIn')?.url);
  const github = formatUrl(user.basics.profiles?.find(p => p.network === 'GitHub')?.url || user.basics.url);

  // Formatting subject line based on intent
  let subject = "Hello Harsh";
  let body = "Hi Harsh,\n\nI visited your portfolio and wanted to reach out regarding...";
  
  if (intent === 'hiring') {
    subject = "Full-Time Engineering Opportunity for Harsh";
    body = "Hi Harsh,\n\nI was impressed by your portfolio and leadership background. We are looking to fill a role and think you might be a fit...\n\nLet's connect!";
  } else if (intent === 'freelance') {
    subject = "Inquiry: Freelance Project / Consulting";
    body = "Hi Harsh,\n\nI saw your work on architectural scaling and the Zemba project. I have a project that requires your expertise...\n\nLet's connect!";
  }

  const mailtoLink = `mailto:${user.basics.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <Container>
      <AboutHero>
        <Grid>
          <Column lg={10} md={8} sm={4}>
            <SectionHeader style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              {user.basics.name}
            </SectionHeader>
            <h2 style={{ fontSize: '2rem', color: theme.colors.textMuted, marginBottom: '2rem', fontWeight: 400 }}>
              Software Engineer
            </h2>
            <p style={{ fontSize: '1.25rem', color: theme.colors.text, maxWidth: '800px', lineHeight: '1.6' }}>
              I am a passionate Software Engineer who thrives on building scalable and robust solutions. My journey involves continuous learning and applying cutting-edge technologies to solve complex problems.
            </p>
          </Column>
        </Grid>
      </AboutHero>

      <Grid style={{ marginBottom: '2rem' }}>
        <Column lg={7} md={8} sm={4} style={{ paddingRight: '2rem' }}>
          <StyledTile style={{ padding: '1.5rem !important', marginBottom: '1.5rem' }}>
            <h4 style={{ 
              fontFamily: theme.fonts.technical, 
              color: theme.colors.primary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
              fontSize: '0.9rem'
            }}>
              Engineering Philosophy
            </h4>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: theme.colors.text, lineHeight: '1.8' }}>
              "Write code that is easy to delete, not easy to extend. Focus on modularity, testability, and delivering value quickly."
            </p>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: theme.colors.text, lineHeight: '1.8', marginTop: '1rem' }}>
              "Hope for the best, prepare for the worst."
            </p>
          </StyledTile>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
             <TechPill>REACT</TechPill>
             <TechPill>NODE.JS</TechPill>
             <TechPill>MONGODB</TechPill>
             <TechPill>AWS</TechPill>
             <TechPill>AUTH0</TechPill>
             <TechPill>MICROSERVICES</TechPill>
          </div>
        </Column>

        <Column lg={5} md={8} sm={4}>
          <ContactCard>
            <h3>Get in Touch</h3>
            <p>Let's discuss how we can work together.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
              <Button 
                as="a" 
                href={mailtoLink} 
                size="lg" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Send Message via Email
              </Button>
              <Button 
                as="a" 
                href={linkedin} 
                target="_blank" 
                rel="noreferrer"
                kind="secondary" 
                size="lg" 
                style={{ width: '100%', justifyContent: 'center', backgroundColor: '#161616', border: `1px solid ${theme.colors.border}`, color: 'white' }}
              >
                Connect on LinkedIn
              </Button>
              <Button 
                as="a" 
                href={github} 
                target="_blank" 
                rel="noreferrer"
                kind="tertiary" 
                size="lg" 
                style={{ width: '100%', justifyContent: 'center', color: theme.colors.textMuted }}
              >
                View Code on GitHub
              </Button>
            </div>
          </ContactCard>
        </Column>
      </Grid>
    </Container>
  );
};

export default About;
