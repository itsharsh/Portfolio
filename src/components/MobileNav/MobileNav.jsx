import React from "react";
import {
  User32,
  Code32,
  Portfolio32,
  Education32,
  Badge32,
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
            renderIcon={User32}
            iconDescription="Profile"
            tooltipPosition="bottom"
          />
        </StyledNavLink>
        <StyledNavLink to="/projects">
          <StyledNavButton
            hasIconOnly
            renderIcon={Code32}
            iconDescription="Projects"
            tooltipPosition="bottom"
          />
        </StyledNavLink>
        <StyledNavLink to="/experience">
          <StyledNavButton
            hasIconOnly
            renderIcon={Portfolio32}
            iconDescription="Experience"
            tooltipPosition="bottom"
          />
        </StyledNavLink>
        <StyledNavLink to="/education">
          <StyledNavButton
            hasIconOnly
            renderIcon={Education32}
            iconDescription="Education"
            tooltipPosition="bottom"
          />
        </StyledNavLink>
        <StyledNavLink to="/achievements">
          <StyledNavButton
            hasIconOnly
            renderIcon={Badge32}
            iconDescription="Achievements"
            tooltipPosition="bottom"
          />
        </StyledNavLink>
      </StyledNavWrapper>
    </StyledSpacer>
  </StyledContainer>
);

export default MobileNav;
