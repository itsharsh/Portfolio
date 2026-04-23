import styled, { createGlobalStyle } from "styled-components";
import { Tile } from "@carbon/react";

export const theme = {
  colors: {
    background: "#161616",
    surface: "#262626",
    surfaceTonal: "#393939",
    primary: "#0F62FE",
    secondary: "#24A148",
    text: "#F4F4F4",
    textMuted: "#C6C6C6",
    border: "#393939",
  },
  fonts: {
    primary: "'Inter', sans-serif",
    technical: "'Space Grotesk', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  rounding: {
    sm: "2px",
    md: "4px",
    lg: "8px",
  },
};

export const GlobalStyle = createGlobalStyle`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeInUp 0.5s ease-out forwards;
  }

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  h1, h2, h3 {
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary};
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const StyledTile = styled(Tile)`
  background-color: ${theme.colors.surface} !important;
  border: 1px solid ${theme.colors.border} !important;
  border-radius: ${theme.rounding.md} !important;
  margin-bottom: 1rem;
  padding: 1.25rem !important;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.primary} !important;
    background-color: ${theme.colors.surfaceTonal} !important;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.textMuted};
  margin-bottom: 1rem;
`;

export const TechPill = styled.span`
  background-color: ${props => props.$highlight ? 'rgba(15, 98, 254, 0.1)' : theme.colors.surfaceTonal};
  border: 1px solid ${props => props.$highlight ? theme.colors.primary : 'transparent'};
  color: ${props => props.$highlight ? theme.colors.primary : theme.colors.textMuted};
  font-family: ${theme.fonts.technical};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: ${theme.rounding.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  transition: all 0.2s ease;

  ${props => props.$highlight && `
    box-shadow: 0 0 10px rgba(15, 98, 254, 0.1);
  `}

  &:hover {
    color: ${theme.colors.text};
    background-color: ${props => props.$highlight ? 'rgba(15, 98, 254, 0.2)' : theme.colors.border};
  }
`;

export const StatusPill = styled.div`
  background: ${theme.colors.surfaceTonal};
  border: 1px solid ${theme.colors.primary}40;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.technical};
  padding: 0.4rem 0.8rem;
  border-radius: ${theme.rounding.sm};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: inline-block;
  margin-bottom: 1.5rem;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const HeroHeadline = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-weight: 700;

  span {
    color: ${theme.colors.textMuted};
    font-weight: 500;
    font-size: 0.6em;
    display: block;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
     margin-bottom: 1rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: ${theme.colors.textMuted};
  max-width: 650px;
  line-height: 1.6;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const SectionHeader = styled.h2`
  font-size: clamp(1.75rem, 6vw, 3rem);
  margin-bottom: 3rem;
  color: ${theme.colors.text};

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

// Alias for compatibility
export const SectionTitle = SectionHeader;

export const ProjectActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: 30px;
  font-family: ${theme.fonts.technical};
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  cursor: pointer;

  /* Primary variant */
  ${props => props.$primary ? `
    background: linear-gradient(135deg, ${theme.colors.primary}, #60a5fa);
    color: #fff !important;
    box-shadow: 0 4px 15px rgba(15, 98, 254, 0.3);
    
    &:hover {
      box-shadow: 0 6px 20px rgba(15, 98, 254, 0.4);
      transform: translateY(-2px);
    }
  ` : `
    background: transparent;
    color: ${theme.colors.text} !important;
    border: 1px solid ${theme.colors.border};
    
    &:hover {
      background: ${theme.colors.surfaceTonal};
      border-color: ${theme.colors.textMuted};
      transform: translateY(-2px);
    }
  `}
`;
