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
  padding: 0.5rem 1rem;
  font-weight: bold;
  align-items: center;
  border-radius: 0.5px;
  color: ${teal[80]};
  background-color: ${teal[50]};
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
  padding: 0.5rem 1rem;
  font-weight: bold;
  align-items: center;
  border-radius: 0.5px;
  color: ${purple[90]};
  background-color: ${purple[40]};
  transition: background-color 250ms ease;

  &:hover {
    background-color: #2ecc4f;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;
