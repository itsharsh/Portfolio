import styled from "styled-components";
import { white, blue } from "@carbon/colors";

export const StyledAchievementItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const StyledTitle = styled.h4`
  font-weight: bold;
`;

export const StyledIssuer = styled.h5`
  font-weight: bold;
`;

export const StyledSummary = styled.p`
  font-weight: bold;
  display: inline-block;
`;

export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.3rem 0.8rem;
  font-weight: bold;
  align-items: center;
  margin-left: 1rem;
  border-radius: 0.5rem;
  color: ${blue[80]};
  background-color: ${blue[50]};
  transition: background-color 250ms ease;

  &:hover {
    background-color: #2ecc40;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;
