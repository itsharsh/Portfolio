import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";

import {
  LogoFacebook32,
  LogoGithub32,
  LogoLinkedin32,
  LogoTwitter32,
} from "@carbon/icons-react";

import {
  StyledHeaderContainer,
  StyledHeader,
  StyledImage,
  StyledName,
  StyledLink,
  StyledInfo,
  StyledProfileLink,
} from "./styles";

const Header = ({ user }) => {
  const location = useLocation();

  return (
    <StyledHeaderContainer isHome={location.pathname === "/"}>
      <StyledHeader>
        <StyledImage src={user.basics.picture} />
        <div>
          <StyledName>{user.basics.name}</StyledName>
          <StyledInfo>{user.basics.headline}</StyledInfo>
          <StyledInfo>
            Total Experience: {user.basics.yearsOfExperience} year(s)
          </StyledInfo>
          <StyledInfo>
            Mail:{" "}
            <a href={`mailto:${user.basics.email}`}>{user.basics.email}</a>
          </StyledInfo>
          <StyledInfo>Hometown: {user.basics.region}</StyledInfo>
          <StyledInfo>Preferred Location: Delhi NCR</StyledInfo>
          <ul>
            {user.basics.profiles
              .filter(
                (profile) =>
                  profile.network !== "gitconnected" &&
                  profile.network !== "HackerRank"
              )
              .map((profile, i) => (
                <StyledProfileLink key={profile.network}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {(() => {
                      switch (profile.network) {
                        case "Facebook":
                          return <LogoFacebook32 />;
                        case "LinkedIn":
                          return <LogoLinkedin32 />;
                        case "GitHub":
                          return <LogoGithub32 />;
                        case "Twitter":
                          return <LogoTwitter32 />;
                        default:
                          return "HR";
                      }
                    })()}
                  </a>
                </StyledProfileLink>
              ))}
          </ul>
        </div>
      </StyledHeader>
      <div>
        <StyledLink
          href="https://cv.itsharsh.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>CV</span>
          <ArrowRight16 />
        </StyledLink>
        <StyledLink
          href="https://resume.itsharsh.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Resume</span>
          <ArrowRight16 />
        </StyledLink>
      </div>
    </StyledHeaderContainer>
  );
};

export default Header;
