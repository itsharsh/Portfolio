import React from "react";
import { User32, Code32, Portfolio32, Education32 } from "@carbon/icons-react";

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
        <StyledNavLink to="/work">
          <StyledNavButton
            hasIconOnly
            renderIcon={Portfolio32}
            iconDescription="Work"
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
      </StyledNavWrapper>
    </StyledSpacer>
  </StyledContainer>
);

export default MobileNav;
