import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles';
import { useIntent } from '../../context/IntentContext';
import { LogoLinkedin, LogoGithub, LogoTwitter, Education, LogoInstagram } from '@carbon/icons-react';
import { formatUrl } from '../../utils';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  padding: 4rem 2rem;
  font-family: ${theme.fonts.primary};
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  animation: ${fadeIn} 0.8s ease-out;
  text-align: center;
`;

const QuestionText = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.textMuted};
  margin-bottom: 3rem;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  a {
    color: ${theme.colors.textMuted};
    transition: color 0.2s ease, transform 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;

    &:hover {
      color: ${theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const OptionCard = styled.button`
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 0.85rem;
    color: ${theme.colors.textMuted};
    margin: 0;
    line-height: 1.5;
  }

  &:hover {
    border-color: ${theme.colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(15, 98, 254, 0.1);
    
    h3 {
      color: ${theme.colors.primary};
    }
  }
`;

const Welcome = ({ user }) => {
  const { setIntent } = useIntent();

  const handleSelect = (intentValue) => {
    setIntent(intentValue);
  };

  const linkedin = formatUrl(user?.basics?.profiles?.find(p => p.network === 'LinkedIn')?.url);
  const github = formatUrl(user?.basics?.profiles?.find(p => p.network === 'GitHub')?.url || user?.basics?.url);
  const twitter = formatUrl(user?.basics?.profiles?.find(p => p.network === 'Twitter')?.url);

  // Fallback parsing for headline if GitConnected doesn't provide it as a separate string explicitly
  const headline = user?.basics?.summary?.split('.')[0] || "Highly skilled Backend Engineer";

  return (
    <WelcomeContainer>
      <ContentWrapper>
        {user?.basics?.image && (
          <img 
            src={user.basics.image} 
            alt={user.basics.name} 
            style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              marginBottom: '1.5rem',
              border: `2px solid ${theme.colors.border}`,
              objectFit: 'cover'
            }} 
          />
        )}
        <QuestionText>Hi, I'm {(user?.basics?.name || "Harsh").split(' ')[0]}</QuestionText>
        
        <p style={{ color: theme.colors.text, fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 500 }}>
          {headline}.
        </p>
        <p style={{ color: theme.colors.primary, fontSize: '1rem', fontFamily: theme.fonts.technical, marginBottom: '2rem', letterSpacing: '0.05em' }}>
          {user?.basics?.label?.toUpperCase()}
        </p>

        <SocialRow>
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <LogoGithub size={20} /> GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LogoLinkedin size={20} /> LinkedIn
          </a>
          {twitter && twitter !== '#' && (
            <a href={twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
              <LogoTwitter size={20} /> Twitter
            </a>
          )}
          <a href="https://instagram.com/its_harsh" target="_blank" rel="noreferrer" aria-label="Instagram">
            <LogoInstagram size={20} /> Instagram
          </a>
          <a href="https://www.geeksforgeeks.org/profile/itsharsh/" target="_blank" rel="noreferrer" aria-label="GeeksForGeeks" style={{ color: '#2E8B57' }}>
            <Education size={20} /> GFG
          </a>
        </SocialRow>

        <Subtitle>To curate the best experience, what brings you here today?</Subtitle>
        
        <OptionsGrid>
          <OptionCard onClick={() => handleSelect('hiring')}>
            <span style={{ fontSize: '2rem' }}>🏢</span>
            <h3>Looking to Hire</h3>
            <p>I'm recruiting for a full-time engineering or leadership role.</p>
          </OptionCard>
          
          <OptionCard onClick={() => handleSelect('freelance')}>
            <span style={{ fontSize: '2rem' }}>⚡</span>
            <h3>Freelance Project</h3>
            <p>I have a specific project, MVP, or system architecture challenge.</p>
          </OptionCard>

          <OptionCard onClick={() => handleSelect('mentorship')}>
            <span style={{ fontSize: '2rem' }}>👨‍🏫</span>
            <h3>Seek Mentorship</h3>
            <p>I want to connect for career guidance or technical mentorship.</p>
          </OptionCard>
          
          <OptionCard onClick={() => handleSelect('browsing')}>
            <span style={{ fontSize: '2rem' }}>👀</span>
            <h3>Casually Browsing</h3>
            <p>I'm just exploring your work, engineering philosophy, and hobbies.</p>
          </OptionCard>
        </OptionsGrid>
      </ContentWrapper>
    </WelcomeContainer>
  );
};

export default Welcome;
