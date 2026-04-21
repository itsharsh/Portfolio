import styled from "styled-components";
import { SideNav } from "carbon-components-react";
import { teal } from "@carbon/colors";

export const StyledSideNav = styled(SideNav)`
  background-color: #161616;
  border-right: 1px solid #393939;
  z-index: 10;

  &.cds--side-nav {
    width: 256px;
  }

  .cds--side-nav__items {
    padding-top: 3rem;
  }

  .cds--side-nav__link {
    height: 3.5rem;
    padding-left: 2rem;
    color: #c6c6c6;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: #262626;
      color: ${teal[40]};
    }
  }

  .cds--side-nav__link--current {
    background-color: rgba(0, 157, 154, 0.1);
    color: ${teal[30]};
    border-right: 4px solid ${teal[40]};
    
    &::before {
      display: none;
    }
    
    .cds--side-nav__link-text {
      color: ${teal[30]};
      font-weight: 700;
    }
  }

  .cds--side-nav__link-text {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;
