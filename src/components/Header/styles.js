import styled from "styled-components";
import { teal } from "@carbon/colors";

export const StyledHeaderContainer = styled.div`
  background: linear-gradient(135deg, #161616 0%, #212121 100%);
  padding: 4rem 3rem;
  border-bottom: 2px solid #393939;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    right: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(0, 157, 154, 0.08) 0%, transparent 70%);
    filter: blur(60px);
    pointer-events: none;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
    text-align: center;
    gap: 2.5rem;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  z-index: 1;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid ${teal[70]};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.05) rotate(2deg);
  }
`;

export const StyledName = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: -1.5px;
  line-height: 1;

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;

export const StyledInfo = styled.p`
  font-size: 1.35rem;
  color: ${teal[40]};
  margin: 0.75rem 0 0.5rem 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const StyledSubInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.25rem;
  color: #a8a8a8;
  font-size: 0.95rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${teal[40]};
    }
  }
`;

export const StyledSocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0 0;
  display: flex;
  gap: 1.25rem;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const StyledProfileLink = styled.li`
  svg {
    fill: #8d8d8d;
    transition: all 0.3s ease;
  }

  a:hover svg {
    fill: ${teal[40]};
    transform: translateY(-4px);
    filter: drop-shadow(0 0 8px rgba(0, 157, 154, 0.4));
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  z-index: 1;

  @media (max-width: 640px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
`;

export const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  padding: 0.85rem 1.5rem;
  background-color: transparent;
  border: 2px solid ${teal[60]};
  color: ${teal[30]};
  font-weight: 700;
  text-decoration: none;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${teal[60]};
    color: #ffffff;
    transform: translateX(5px);
    box-shadow: 0 4px 20px rgba(0, 157, 154, 0.2);
  }

  svg {
    margin-left: 0.75rem;
    fill: currentColor;
  }

  @media (max-width: 640px) {
    min-width: 140px;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;
