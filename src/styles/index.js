import styled from "styled-components";
import { blue, teal } from "@carbon/colors";

export const SectionTitle = styled.h2`
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: ${teal[40]};
  border-bottom: 1px solid ${teal[90]};
  padding-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
  font-size: 1.05rem;
  line-height: 1.75rem;
  color: #d1d1d1;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.4rem 0.9rem;
  background-color: rgba(0, 157, 154, 0.1); /* Subtle Teal background */
  color: ${teal[30]};
  border: 1px solid ${teal[80]};
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.85rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;

  &:hover {
    background-color: rgba(0, 157, 154, 0.2);
    border-color: ${teal[50]};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledTile = styled.div`
  background-color: #262626;
  border: 1px solid #393939;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${teal[70]};
  }
`;
