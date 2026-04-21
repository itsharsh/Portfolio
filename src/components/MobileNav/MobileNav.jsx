import React from "react";
import {
  User,
  Code,
  Portfolio,
  Education,
  Badge,
} from "@carbon/icons-react";

import {
  StyledContainer,
  StyledSpacer,
  StyledNavWrapper,
  StyledNavLink,
  StyledNavButton,
} from "./styles";

const MobileNav = () => (
  <StyledContainer>
    <StyledSpacer>
      <StyledNavWrapper>
        <StyledNavLink to="/">
          <StyledNavButton
            hasIconOnly
            renderIcon={User}
            iconDescription="Profile"
            tooltipPosition="bottom"
          />
        </StyledNavLink>
        <StyledNavLink to="/projects">
          <StyledNavButton
            hasIconOnly
            renderIcon={Code}
            iconDescription="Projects"
            tooltipPosition="bottom"
          />
        </StyledNavLink>
        <StyledNavLink to="/experience">
          <StyledNavButton
            hasIconOnly
            renderIcon={Portfolio}
            iconDescription="Experience"
            tooltipPosition="bottom"
          />
        </StyledNavLink>
        <StyledNavLink to="/education">
          <StyledNavButton
            hasIconOnly
            renderIcon={Education}
            iconDescription="Education"
            tooltipPosition="bottom"
          />
        </StyledNavLink>
        <StyledNavLink to="/achievements">
          <StyledNavButton
            hasIconOnly
            renderIcon={Badge}
            iconDescription="Achievements"
            tooltipPosition="bottom"
          />
        </StyledNavLink>
      </StyledNavWrapper>
    </StyledSpacer>
  </StyledContainer>
);

export default MobileNav;
