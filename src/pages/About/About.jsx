import React from 'react';
import { Grid, Column } from '@carbon/react';
import { Container, StyledTile, SectionHeader, TechPill, ProjectActionBtn, theme } from '../../styles';
import styled from 'styled-components';

import { useIntent } from '../../context/IntentContext';

const AboutHero = styled.div`
  padding: 0 0 2rem 0;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 2rem;
`;

const ContactCard = styled(StyledTile)`
  padding: 2.5rem !important;
  position: relative;
  overflow: hidden;
  border: 1px solid ${theme.colors.border};
  background: linear-gradient(145deg, ${theme.colors.surface} 0%, rgba(0, 0, 0, 0.4) 100%);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${theme.colors.primary}50;
    transform: translateY(-4px);
    box-shadow: 0 10px 40px ${theme.colors.primary}15;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
  }

  h3 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(120deg, ${theme.colors.text}, ${theme.colors.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  p {
    color: ${theme.colors.textMuted};
    margin-bottom: 2rem;
    font-size: 1.05rem;
    line-height: 1.6;
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

  // Dynamic Philosophy variables
  let mantraTitle = "Engineering Philosophy";
  let mantra1 = `"Write code that is easy to delete, not easy to extend. Focus on modularity, testability, and delivering value quickly."`;
  let mantra2 = `"Trust the process. Excellence is the byproduct of consistency, curiosity, and relentless iteration."`;

  if (intent === 'hiring') {
    mantraTitle = "Leadership & Scale";
    mantra1 = `"AI might automate tasks and even write code, but true engineering is about the mindset—understanding the deep root of a problem before crafting the solution."`;
    mantra2 = `"As AI evolves, it won't take our jobs; it will challenge us to create entirely new ones. Take ownership and build elegant systems that adapt."`;
  } else if (intent === 'freelance') {
    mantraTitle = "Delivery & Value";
    mantra1 = `"I build fast, simple, and highly effective tools that help your business grow without the technical headaches."`;
    mantra2 = `"Good software should make your day-to-day work easier, not more complicated."`;
  } else if (intent === 'mentorship') {
    mantraTitle = "Mentorship Philosophy";
    mantra1 = `"Continuous learning is the absolute cornerstone of engineering. Trust the process, stay consistent, and share your knowledge openly."`;
    mantra2 = `"The purest test of understanding complex systems is the ability to teach them simply to someone else."`;
  }

  return (
    <Container className="fade-in">
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
              {mantraTitle}
            </h4>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: theme.colors.text, lineHeight: '1.8' }}>
              {mantra1}
            </p>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: theme.colors.text, lineHeight: '1.8', marginTop: '1rem' }}>
              {mantra2}
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
            <p>Ready to push boundaries? Let's discuss how we can work together to architect your next system.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <ProjectActionBtn
                $primary
                as="a"
                href={mailtoLink}
                style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
              >
                Send Message via Email
              </ProjectActionBtn>
              <ProjectActionBtn
                as="a"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
              >
                Connect on LinkedIn
              </ProjectActionBtn>
              <ProjectActionBtn
                as="a"
                href={github}
                target="_blank"
                rel="noreferrer"
                style={{ width: '100%', justifyContent: 'center', padding: '1rem', backgroundColor: 'transparent', borderColor: 'transparent', opacity: 0.8 }}
              >
                View Code on GitHub
              </ProjectActionBtn>
            </div>
          </ContactCard>
        </Column>
      </Grid>
    </Container>
  );
};

export default About;
