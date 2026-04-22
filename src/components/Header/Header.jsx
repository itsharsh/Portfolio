import React from 'react';
import { HeaderContainer } from '@carbon/react';
import { LogoGithub, LogoLinkedin, Email, Location, Calendar } from '@carbon/icons-react';
import { 
  StyledHeader, 
  HeroContainer, 
  ProfileImage, 
  Name, 
  Headline, 
  JobTitle, 
  MetaInfo, 
  MetaItem, 
  SocialLinks 
} from './styles';

const Header = ({ user }) => {
  const currentJob = user.work[0];
  
  // Dynamic experience calculation
  const totalExperience = user.work.reduce((total, job) => {
    const start = new Date(job.startDate);
    const end = job.endDate ? new Date(job.endDate) : new Date();
    return total + (end - start) / (1000 * 60 * 60 * 24 * 365.25);
  }, 0);

  return (
    <HeaderContainer
      render={() => (
        <StyledHeader aria-label="Harsh Portfolio">
          <HeroContainer>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <ProfileImage src={user.basics.image} alt={user.basics.name} />
              <div>
                <Name>{user.basics.name}</Name>
                <Headline>{user.basics.label}</Headline>
                <JobTitle>
                  Currently: {currentJob.position} @ {currentJob.name}
                </JobTitle>
                
                <MetaInfo>
                  <MetaItem>
                    <Location size={16} />
                    <span>Preferred Location: Delhi NCR | Remote</span>
                  </MetaItem>
                  <MetaItem>
                    <Calendar size={16} />
                    <span>{Math.floor(totalExperience)}+ Years Technical Experience</span>
                  </MetaItem>
                </MetaInfo>

                <SocialLinks>
                  <a href={user.basics.url} target="_blank" rel="noreferrer">
                    <LogoGithub size={24} />
                  </a>
                  <a href={`https://linkedin.com/in/${user.basics.profiles.find(p => p.network === 'LinkedIn')?.username}`} target="_blank" rel="noreferrer">
                    <LogoLinkedin size={24} />
                  </a>
                  <a href={`mailto:${user.basics.email}`}>
                    <Email size={24} />
                  </a>
                </SocialLinks>
              </div>
            </div>
          </HeroContainer>
        </StyledHeader>
      )}
    />
  );
};

export default Header;
