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
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
        </div>
      </StyledHeader>
      <div>
        <StyledViewResumeLink
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Résumé</span>
          <ArrowRight16 />
        </StyledViewResumeLink>
      </div>
    </StyledHeaderContainer>
  );
};

export default Header;