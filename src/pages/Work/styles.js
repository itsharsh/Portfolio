import styled from "styled-components";
import { white } from "@carbon/colors";

export const StyledWorkItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const StyledJobTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  display: inline;
`;

export const StyledWorkTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  display: inline;
`;

export const StyledHighlight = styled.li`
  margin-left: 2.5rem;
  display: list-item;
  list-style-type: circle;
`;
