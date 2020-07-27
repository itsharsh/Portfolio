import styled from "styled-components";
import { white, purple, teal } from "@carbon/colors";

export const StyledProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const StyledProjectTitle = styled.h4`
  font-weight: bold;
`;

export const StyledSkillContainer = styled.div`
  margin-top: 1.2rem;
`;

export const StyledProjectDemoLink = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.3rem 0.8rem;
  font-weight: bold;
  align-items: center;
  margin-left: 1rem;
  border-radius: 0.5rem;
  background-color: ${teal[60]};
  transition: background-color 250ms ease;

  &:hover {
    background-color: #2ecc40;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;

export const StyledProjectSourceLink = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.3rem 0.8rem;
  font-weight: bold;
  align-items: center;
  margin-left: 1rem;
  border-radius: 0.5rem;
  background-color: ${purple[60]};
  transition: background-color 250ms ease;

  &:hover {
    background-color: #2ecc4f;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;
