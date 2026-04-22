import styled from 'styled-components';
import { Header } from '@carbon/react';
import { theme } from '../../styles';

export const StyledHeader = styled(Header)`
  background-color: ${theme.colors.surface} !important;
  border-bottom: 1px solid ${theme.colors.border} !important;
  height: auto !important;
  padding: 4rem 2rem;
  position: relative !important;
  display: block !important;
`;

export const HeroContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid ${theme.colors.primary};
  padding: 4px;
  background-color: ${theme.colors.background};
`;

export const Name = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  color: ${theme.colors.text};
  line-height: 1;
`;

export const Headline = styled.p`
  font-family: ${theme.fonts.technical};
  font-size: 1.25rem;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0.5rem 0 1rem 0;
  font-weight: 500;
`;

export const JobTitle = styled.div`
  font-size: 1.1rem;
  color: ${theme.colors.textMuted};
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

export const MetaInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.technical};
  font-size: 0.9rem;
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  svg {
    fill: ${theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${theme.colors.textMuted};
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: ${theme.colors.primary};
      transform: scale(1.1);
    }
  }
`;
