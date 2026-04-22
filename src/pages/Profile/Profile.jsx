import React from 'react';
import { Grid, Column, Button } from '@carbon/react';
import { ArrowRight, Code, Cloud, DataBase, Events, Video, LogoInstagram, LogoYoutube, Launch } from '@carbon/icons-react';
import {
  StyledTile,
  HeroHeadline,
  HeroSubtitle,
  TechPill,
  Container,
  SectionHeader,
  ProjectActionBtn,
  theme
} from '../../styles';
import styled from 'styled-components';
import { useIntent } from '../../context/IntentContext';
import { categorizeSkills, formatUrl } from '../../utils';
import { GFGArticles, MentorshipFeedbacks, MediumArticles } from '../Blogs/Blogs';

const HIGH_DEMAND_SKILLS = ['NodeJS', 'ReactJS', 'Auth0', 'MongoDB', 'Go', 'Microservices', 'AWS', 'Python', 'Kafka', 'Docker'];

const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${theme.colors.surfaceTonal};
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-family: ${theme.fonts.technical};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.textMuted};
  margin-bottom: 2rem;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: ${theme.colors.secondary};
    border-radius: 50%;
  }
`;

const CategoryCard = styled(StyledTile)`
  position: relative;
  height: 100%;

  .icon {
    background-color: ${theme.colors.surfaceTonal};
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    svg {
      fill: ${theme.colors.primary};
    }
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
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

const CareerTile = styled.div`
  padding: 1.5rem;
  border-left: 2px solid ${theme.colors.border};
  position: relative;
  margin-bottom: 1rem;

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 2rem;
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    color: ${theme.colors.text};
  }

  p {
    color: ${theme.colors.textMuted};
    font-size: 0.9rem;
  }
`;

const HobbyCard = styled(StyledTile)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem !important;
  text-align: center;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  .links {
    margin-top: auto;
    display: flex;
    gap: 1rem;
    padding-top: 1.5rem;

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      font-weight: 600;
      font-family: ${theme.fonts.technical};
      font-size: 0.9rem;
      &:hover { color: ${theme.colors.text}; }
    }
  }
`;

// Map grouped skill categories to carbon icons
const categoryIcons = {
  "Backend & Architecture": <DataBase size={24} />,
  "Frontend": <Code size={24} />,
  "Hardware & IoT": <Cloud size={24} />,
  "Tools & Methodology": <Events size={24} />
};

const Profile = ({ user }) => {
  const { intent } = useIntent();

  // Determine Hero Messaging based on intent
  let heroSubline = "7+ Years of Engineering Excellence.";
  let heroSummary = user.basics.summary || "I build resilient, high-performance systems. My work focuses on scalable architectures, clean code, and solving complex technical challenges with precision.";

  // Dynamic Mantra variables
  let mantraTitle = "Engineering Vision";
  let mantra1 = `"Write code that is easy to delete, not easy to extend. Focus on modularity, testability, and delivering value quickly."`;
  let mantra2 = `"Hope for the best, prepare for the worst."`;

  if (intent === 'hiring') {
    heroSubline = "Full Stack Engineer & Team Leader.";
    heroSummary = "With a proven track record of driving scale and agility—from modernizing complex monoliths at Dhwani RIS to optimizing massive IAM architectures at Chegg. I bring comprehensive end-to-end expertise across modern stacks and robust system architecture.";
    mantraTitle = "Leadership & Scale";
    mantra1 = `"AI might automate tasks and even write code, but true engineering is about the mindset—understanding the deep root of a problem before crafting the solution."`;
    mantra2 = `"As AI evolves, it won't take our jobs; it will challenge us to create entirely new ones. Take ownership and build elegant systems that adapt."`;
  } else if (intent === 'freelance') {
    heroSubline = "Scalable Architecture. Direct Business Impact.";
    heroSummary = "Delivering scalable MERN, Python, & Golang architectures with precision. Whether it's rapid MVP prototypes like Zemba, complex data handling pipelines, or high-throughput enterprise systems, I build software that directly drives business goals.";
    mantraTitle = "Delivery & Value";
    mantra1 = `"I build fast, simple, and highly effective tools that help your business grow without the technical headaches."`;
    mantra2 = `"Good software should make your day-to-day work easier, not more complicated."`;
  } else if (intent === 'mentorship') {
    heroSubline = "Developer Mentorship & Guidance.";
    heroSummary = "Passionate about giving back to the community via GFG mentorship. I help developers scale their technical skills, grasp complex microservice architectures, and build sustainable career paths in Software Engineering.";
    mantraTitle = "Mentorship Philosophy";
    mantra1 = `"Continuous learning is the absolute cornerstone of engineering. Trust the process, stay consistent, and share your knowledge openly."`;
    mantra2 = `"The purest test of understanding complex systems is the ability to teach them simply to someone else."`;
  }

  const groupedSkills = categorizeSkills(user.skills);
  const topProjects = [...(user.projects || [])].reverse().slice(0, 4);


  const HeroSection = (
    <Grid className="fade-in" style={{ marginBottom: '4rem', alignItems: 'center' }}>
      <Column lg={7} md={8} sm={4}>
        <StatusPill>{user.basics.label}</StatusPill>
        <HeroHeadline style={{ fontSize: '3.5rem' }}>
          {user.basics.name.split(' ')[0]}.<br />
          <span style={{ fontSize: '2rem' }}>{heroSubline}</span>
        </HeroHeadline>
        <HeroSubtitle style={{ maxWidth: '90%' }}>
          {heroSummary}
        </HeroSubtitle>
        {intent === 'mentorship' && (
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Button renderIcon={ArrowRight} size="lg" as="a" href="https://www.geeksforgeeks.org/profile/itsharsh/" target="_blank">
              Book Mentorship Session
            </Button>
          </div>
        )}
      </Column>
      <Column lg={5} md={8} sm={4}>
        <StyledTile style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', border: `1px solid ${theme.colors.primary}40`, backgroundColor: `${theme.colors.primary}05` }}>
           <h2 style={{ fontSize: '1.5rem', color: theme.colors.primary, marginBottom: '0.5rem' }}>{mantraTitle}</h2>
           <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: theme.colors.text, lineHeight: '1.6' }}>
            {mantra1}
          </p>
           <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: theme.colors.textMuted, lineHeight: '1.6', marginTop: '0.5rem' }}>
            {mantra2}
          </p>
        </StyledTile>
      </Column>
    </Grid>
  );

  const CareerSection = (
    <>
      <SectionHeader className="fade-in" style={{ animationDelay: '0.2s', marginBottom: '1.5rem', fontSize:'2rem' }}>Career Snapshot</SectionHeader>
      <Grid className="fade-in" style={{ marginBottom: '2rem', animationDelay: '0.2s' }}>
        {user.work?.map((job, idx) => (
          <Column lg={4} md={4} sm={4} key={idx}>
            <CareerTile>
              <div style={{
                fontFamily: theme.fonts.technical,
                color: theme.colors.primary,
                fontSize: '0.8rem',
                marginBottom: '0.5rem',
                textTransform: 'uppercase'
              }}>
                {job.startDate ? job.startDate.substring(0, 4) : ''} - {job.isCurrentRole ? 'Present' : (job.endDate ? job.endDate.substring(0, 4) : '')}
              </div>
              <h4>{job.position}</h4>
              <p>{job.name}</p>
            </CareerTile>
          </Column>
        ))}
      </Grid>
    </>
  );

  const SkillsSection = (
    <>
      <SectionHeader className="fade-in" style={{ animationDelay: '0.3s', marginBottom: '1.5rem', fontSize:'2rem' }}>Technical Arsenal</SectionHeader>
      <Grid className="fade-in" style={{ marginBottom: '2rem', animationDelay: '0.3s' }}>
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <Column lg={4} md={4} sm={4} key={category} style={{ marginBottom: '2rem' }}>
            <CategoryCard>
              <div className="icon">
                {categoryIcons[category] || <Code size={24} />}
              </div>
              <h3>{category}</h3>
              <div>
                {skills.slice(0, 8).map(skill => (
                  <TechPill key={skill} $highlight={HIGH_DEMAND_SKILLS.some(h => skill.toLowerCase().includes(h.toLowerCase()))}>
                    {skill}
                  </TechPill>
                ))}
                {skills.length > 8 && <span style={{ color: theme.colors.textMuted, fontSize: '0.8rem', marginLeft: '0.5rem' }}>+{skills.length - 8} more...</span>}
              </div>
            </CategoryCard>
          </Column>
        ))}
      </Grid>
    </>
  );

  const ProjectsSection = (
    <>
      <SectionHeader className="fade-in" style={{ animationDelay: '0.4s', marginBottom: '1.5rem', fontSize:'2rem' }}>Featured Work</SectionHeader>
      <MasonryGrid className="fade-in" style={{ marginBottom: '2rem', animationDelay: '0.4s' }}>
        {topProjects.map((project, i) => (
          <div key={i}>
            <StyledTile style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>{project.name}</h3>
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

              <p style={{ color: theme.colors.textMuted, fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1 }}>
                {project.summary || project.description || "A comprehensive technical project."}
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                {project.languages?.slice(0,4).map(lang => (
                  <TechPill key={lang}>{lang}</TechPill>
                ))}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {(project.website && !project.website.includes('github.com')) && (
                  <ProjectActionBtn
                    $primary
                    href={formatUrl(project.website)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Launch size={16} /> Live Demo
                  </ProjectActionBtn>
                )}
                {(project.githubUrl || project.repositoryUrl) && (
                  <ProjectActionBtn
                    href={formatUrl(project.githubUrl || project.repositoryUrl)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code size={16} /> Source Code
                  </ProjectActionBtn>
                )}
              </div>
            </StyledTile>
          </div>
        ))}
      </MasonryGrid>
    </>
  );

  const HobbiesSection = (
    <>
      <SectionHeader className="fade-in" style={{ animationDelay: '0.5s', marginBottom: '1.5rem', fontSize:'2rem' }}>Beyond Engineering</SectionHeader>
      <Grid className="fade-in" style={{ animationDelay: '0.5s', marginBottom: '2rem' }}>
         <Column lg={6} md={8} sm={4}>
           <HobbyCard>
              <Video size={48} style={{ fill: theme.colors.primary }} />
              <h3>Wanderer Engineers</h3>
              <p style={{ color: theme.colors.textMuted, fontSize: '1rem', maxWidth: '400px' }}>
                Documenting adventures, travel vlogs, and the life of engineers on the road.
              </p>
              <div className="links">
                <a href="https://www.youtube.com/@wandererengineers" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <LogoYoutube size={20} /> YOUTUBE
                </a>
                <a href="https://www.instagram.com/wanderer_engineers/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <LogoInstagram size={20} /> INSTAGRAM
                </a>
              </div>
           </HobbyCard>
         </Column>
         <Column lg={6} md={8} sm={4}>
           <HobbyCard>
              <Events size={48} style={{ fill: theme.colors.primary }} />
              <h3>Shuttle Diaries</h3>
              <p style={{ color: theme.colors.textMuted, fontSize: '1rem', maxWidth: '400px' }}>
                Badminton highlights, drills, and the pursuit of athletic excellence on the court.
              </p>
              <div className="links">
                <a href="https://www.youtube.com/@shuttle-diaries" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <LogoYoutube size={20} /> YOUTUBE
                </a>
                <a href="https://www.instagram.com/shuttlediaries/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <LogoInstagram size={20} /> INSTAGRAM
                </a>
              </div>
           </HobbyCard>
         </Column>
      </Grid>
    </>
  );

  const NetworkSection = (
    <div style={{ marginTop: '2rem', marginBottom: '4rem' }}>
      <SectionHeader className="fade-in" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Blogs</SectionHeader>
      <Grid>
        <MediumArticles hideHeader={true} />
        <GFGArticles hideHeader={true} />
      </Grid>
      <div style={{ marginTop: '3rem' }}>
        <MentorshipFeedbacks />
      </div>
    </div>
  );

  let renderOrder = [];
  if (intent === 'hiring') {
    renderOrder = [CareerSection, SkillsSection, ProjectsSection, NetworkSection, HobbiesSection];
  } else if (intent === 'freelance') {
    renderOrder = [ProjectsSection, SkillsSection, CareerSection, NetworkSection, HobbiesSection];
  } else if (intent === 'mentorship') {
    renderOrder = [NetworkSection, SkillsSection, ProjectsSection, CareerSection, HobbiesSection];
  } else {
    renderOrder = [CareerSection, SkillsSection, ProjectsSection, NetworkSection, HobbiesSection];
  }

  return (
    <Container className="fade-in" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {HeroSection}
      {renderOrder.map((Section, idx) => <React.Fragment key={idx}>{Section}</React.Fragment>)}
    </Container>
  );
};

export default Profile;
