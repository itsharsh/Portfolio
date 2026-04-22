import styled from 'styled-components';
import { SideNav, SideNavItems, SideNavLink } from '@carbon/react';
import { theme } from '../../styles';

export const StyledSideNav = styled(SideNav)`
  background-color: ${theme.colors.surface} !important;
  border-right: 1px solid ${theme.colors.border} !important;
  width: 250px !important;

  // Header branding area for the sidebar
  &::before {
    content: 'TECHNICAL PORTFOLIO';
    display: block;
    padding: 2rem 1.5rem;
    font-family: ${theme.fonts.technical};
    font-size: 0.7rem;
    color: ${theme.colors.textMuted};
    letter-spacing: 0.2em;
    border-bottom: 1px solid ${theme.colors.border};
  }
`;

export const StyledSideNavItems = styled(SideNavItems)`
  margin-top: 1rem;
`;

export const StyledSideNavLink = styled(SideNavLink)`
  background-color: transparent !important;
  height: 3rem !important;
  
  span {
    font-family: ${theme.fonts.technical} !important;
    font-size: 0.9rem !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    color: ${theme.colors.textMuted} !important;
  }

  &[aria-current='page'], &.cds--side-nav__link--active {
    background-color: ${theme.colors.surfaceTonal} !important;
    
    &::before {
      background-color: ${theme.colors.primary} !important;
    }

    span {
      color: ${theme.colors.primary} !important;
    }
  }

  &:hover {
    background-color: ${theme.colors.surfaceTonal} !important;
    span {
      color: ${theme.colors.text} !important;
    }
  }
`;
