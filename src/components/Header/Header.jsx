import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "@carbon/icons-react";

import {
  LogoFacebook,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "@carbon/icons-react";

import {
  StyledHeaderContainer,
  StyledHeader,
  StyledImage,
  StyledName,
  StyledLink,
  StyledInfo,
  StyledSubInfo,
  StyledSocialList,
  StyledProfileLink,
  StyledButtonContainer,
} from "./styles";

const Header = ({ user }) => {
  const location = useLocation();

  // Dynamic calculation for seniority based on the first work start date
  const totalExperience = React.useMemo(() => {
    const startDates = user.work
      .filter(w => w.startDate)
      .map(w => new Date(w.startDate).getTime());
    if (startDates.length === 0) return "7+";
    const oldestDate = new Date(Math.min(...startDates));
    const years = (new Date() - oldestDate) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(years);
  }, [user.work]);

  return (
    <StyledHeaderContainer isHome={location.pathname === "/"}>
      <StyledHeader>
        <StyledImage src={user.basics.image} />
        <div>
          <StyledName>{user.basics.name}</StyledName>
          <StyledInfo>{user.basics.label}</StyledInfo>
          {user.work && user.work[0] && (
            <div style={{ color: '#8d8d8d', fontSize: '1rem', marginTop: '0.25rem' }}>
              {user.work[0].position} at {user.work[0].name}
            </div>
          )}
          
          <StyledSubInfo>
            <span><strong>Total Experience:</strong> {totalExperience} Year(s)</span>
            <span><strong>Hometown:</strong> {user.basics.location.city}</span>
            <span><strong>Location:</strong> Delhi NCR | Remote</span>
            <span>
              <strong>Mail:</strong>{" "}
              <a href={`mailto:${user.basics.email}`}>{user.basics.email}</a>
            </span>
          </StyledSubInfo>

          <StyledSocialList>
            {user.basics.profiles
              .filter(
                (profile) =>
                  profile.network !== "gitconnected" &&
                  profile.network !== "HackerRank"
              )
              .map((profile) => (
                <StyledProfileLink key={profile.network}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    title={profile.network}
                  >
                    {(() => {
                      switch (profile.network) {
                        case "Facebook": return <LogoFacebook size={24} />;
                        case "LinkedIn": return <LogoLinkedin size={24} />;
                        case "GitHub": return <LogoGithub size={24} />;
                        case "Twitter": return <LogoTwitter size={24} />;
                        default: return null;
                      }
                    })()}
                  </a>
                </StyledProfileLink>
              ))}
          </StyledSocialList>
        </div>
      </StyledHeader>

      <StyledButtonContainer>
        <StyledLink
          href="https://cv.itsharsh.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>View CV</span>
          <ArrowRight />
        </StyledLink>
        <StyledLink
          href="https://resume.itsharsh.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Download Resume</span>
          <ArrowRight />
        </StyledLink>
      </StyledButtonContainer>
    </StyledHeaderContainer>
  );
};

export default Header;
