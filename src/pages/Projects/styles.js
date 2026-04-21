import styled from "styled-components";
import { teal } from "@carbon/colors";

export const StyledProjectItem = styled.div`
  padding-bottom: 0.5rem;
`;

export const StyledProjectTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
`;

export const StyledSkillContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledProjectDemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  color: ${teal[40]};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-left: 4px;
    fill: currentColor;
  }
`;

export const StyledProjectSourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  color: #8d8d8d;
  transition: color 0.2s ease;

  &:hover {
    color: ${teal[30]};
  }

  svg {
    margin-left: 4px;
    fill: currentColor;
  }
`;
