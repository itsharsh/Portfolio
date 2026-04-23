import { Content, Header } from '@carbon/react';
import { LogoLinkedin, LogoGithub, LogoInstagram, Home, Portfolio, Code, Map, Blog, Catalog, User } from '@carbon/icons-react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles';
import { useIntent } from '../../context/IntentContext';


const StyledHeader = styled(Header)`
  background-color: ${theme.colors.background} !important;
  border-bottom: 1px solid ${theme.colors.border} !important;
  height: 60px !important;
  position: fixed !important;
  z-index: 1000;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  overflow-x: auto;

  /* Scrollable tabs behavior for mobile */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const Brand = styled(Link)`
  font-family: ${theme.fonts.technical};
  font-weight: 700;
  color: ${theme.colors.text} !important;
  text-decoration: none;
  font-size: clamp(0.9rem, 4vw, 1.2rem);
  letter-spacing: 0.1em;
  flex-shrink: 0;
  margin-right: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: clamp(0.75rem, 2vw, 1.25rem);

  @media (max-width: 900px) {
    display: none;
  }

  a {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.textMuted};
    text-decoration: none;
    font-size: clamp(0.7rem, 2vw, 0.8rem);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.2s ease;
    white-space: nowrap;

    &.active {
      color: ${theme.colors.primary};
    }

    &:hover {
      color: ${theme.colors.text};
    }
  }
`;


const StyledContactButton = styled.a`
  font-family: ${theme.fonts.technical};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  background-color: transparent;
  color: ${theme.colors.text};
  padding: 0.5rem 1.25rem;
  border: 1px solid ${theme.colors.border};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;

  &:hover {
    color: ${theme.colors.background};
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    box-shadow: 0 4px 14px ${theme.colors.primary}40;
    transform: translateY(-1px);
  }
`;

const SocialGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;

  @media (max-width: 1056px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    color: ${theme.colors.textMuted};
    transition: color 0.2s ease;

    &:hover {
      color: ${theme.colors.text};
    }
  }
`;

const MobileBottomNav = styled.nav`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.background};
    border-top: 1px solid ${theme.colors.border};
    z-index: 2000;
    padding: 0.5rem;
    padding-bottom: env(safe-area-inset-bottom, 0.5rem);
    justify-content: space-around;
    align-items: center;
    overflow-x: visible;

    a {
      color: ${theme.colors.textMuted};
      text-decoration: none;
      transition: color 0.2s ease, transform 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;

      &.active {
        color: ${theme.colors.primary};
        transform: scale(1.1);
      }
    }
  }
`;

const Layout = ({ user, children }) => {
  const { clearIntent } = useIntent();
  const navigate = useNavigate();

  const formatUrl = (url) => {
    if (!url) return '#';
    if (url.startsWith('http')) return url;
    return `https://${url}`;
  };

  const linkedin = formatUrl(user.basics.profiles?.find(p => p.network === 'LinkedIn')?.url);
  const github = formatUrl(user.basics.profiles?.find(p => p.network === 'GitHub')?.url || user.basics.url);

  return (
      <>
        <StyledHeader aria-label="Harsh Portfolio">
          <NavContainer>
            <Brand to="/">ENGINEER_CORE</Brand>
            <NavLinks>
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/experience">Experience</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/journey">Journey</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/treasure">Treasure</NavLink>
              <NavLink to="/about">About</NavLink>
            </NavLinks>

            <SocialGroup>
              <a href="https://cv.itsharsh.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', fontWeight: 700, fontFamily: theme.fonts.technical, letterSpacing: '0.05em' }}>
                CV
              </a>
              <a href="https://resume.itsharsh.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', fontWeight: 700, fontFamily: theme.fonts.technical, letterSpacing: '0.05em', marginRight: '0.5rem' }}>
                RESUME
              </a>
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <LogoGithub size={24} />
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LogoLinkedin size={24} />
              </a>
              <a href="https://instagram.com/its_harsh" target="_blank" rel="noreferrer" aria-label="Instagram">
                <LogoInstagram size={24} />
              </a>
              <a href="https://geeksforgeeks.org/profile/itsharsh/" target="_blank" rel="noreferrer" aria-label="GFG" style={{ color: '#2E8B57', fontWeight: 700, fontSize:'1.2rem', textDecoration: 'none' }}>
                GFG
              </a>
              <StyledContactButton href={`mailto:${user.basics.email}`}>
                Let's Talk
              </StyledContactButton>
            </SocialGroup>
          </NavContainer>
        </StyledHeader>
        <MobileBottomNav>
          <NavLink to="/" end><Home size={24} aria-label="Home" /></NavLink>
          <NavLink to="/experience"><Portfolio size={24} aria-label="Experience" /></NavLink>
          <NavLink to="/projects"><Code size={24} aria-label="Projects" /></NavLink>
          <NavLink to="/journey"><Map size={24} aria-label="Journey" /></NavLink>
          <NavLink to="/blogs"><Blog size={24} aria-label="Blogs" /></NavLink>
          <NavLink to="/treasure"><Catalog size={24} aria-label="Treasure" /></NavLink>
          <NavLink to="/about"><User size={24} aria-label="About" /></NavLink>
        </MobileBottomNav>
        <Content style={{ paddingTop: '60px', paddingBottom: '60px', backgroundColor: theme.colors.background, minHeight: '100vh' }}>
          {children}
        </Content>
        <footer style={{
          padding: '4rem 2rem',
          borderTop: `1px solid ${theme.colors.border}`,
          backgroundColor: theme.colors.background,
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            color: theme.colors.textMuted,
            fontSize: '0.85rem',
            fontFamily: theme.fonts.technical
          }}>
            <div>© {new Date().getFullYear()} BUILT WITH PRECISION BY {user.basics.name.toUpperCase()}</div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href={linkedin} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LINKEDIN</a>
              <a href={`https://github.com/itsharsh`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GITHUB</a>
              <a href={`https://cv.itsharsh.com`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>CV</a>
              <a href={`https://resume.itsharsh.com`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>RESUME</a>
              <a href={`https://instagram.com/its_harsh`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>INSTAGRAM</a>
              <a href={`https://geeksforgeeks.org/profile/itsharsh/`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GFG MENTORSHIP</a>
              <a href={`https://itsharsh.com/v1/`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>V1 PORTFOLIO</a>
              <a href={`mailto:${user.basics.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>EMAIL</a>
              <button
                onClick={() => { clearIntent(); navigate('/'); }}
                style={{
                  background: 'none', border: 'none', color: theme.colors.primary,
                  fontFamily: 'inherit', fontSize: 'inherit', cursor: 'pointer',
                  textDecoration: 'underline', padding: 0, textTransform: 'uppercase'
                }}
              >
                CHANGE LENS
              </button>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
