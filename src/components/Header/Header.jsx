import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";

import {
  StyledHeaderContainer,
  StyledHeader,
  StyledImage,
  StyledViewResumeLink,
} from "./styles";

const Header = ({ user }) => {
  const location = useLocation();

  return (
    <StyledHeaderContainer isHome={location.pathname === "/"}>
      <StyledHeader>
        <StyledImage src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h5>{user.basics.headline}</h5>
          <h5>Total Experience: {user.basics.yearsOfExperience} year(s)</h5>
          <h5>
            Mail:
            <a href={`mailto:${user.basics.email}`}>{user.basics.email}</a>
          </h5>
          <h5>Contact: {user.basics.phone}</h5>
          <h5>Hometown: {user.basics.region}</h5>
        </div>
      </StyledHeader>
      <div>
        <StyledViewResumeLink
          href="https://resume.itsharsh.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Resume</span>
          <ArrowRight16 />
        </StyledViewResumeLink>
      </div>
    </StyledHeaderContainer>
  );
};

export default Header;
