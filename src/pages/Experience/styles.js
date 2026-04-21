import styled from "styled-components";
import { teal } from "@carbon/colors";

export const StyledWorkItem = styled.div`
  padding-bottom: 0.5rem;
`;

export const StyledJobTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

export const StyledWorkTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${teal[30]};
`;

export const StyledHighlight = styled.li`
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: #d1d1d1;
`;
