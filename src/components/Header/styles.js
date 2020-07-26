import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? "none" : "flex")};
    flex-direction: column;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const StyledImage = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
`;

export const StyledViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;

  &:hover {
    background-color: #2ecc40;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;

export const StyledInfo = styled.h5`
  line-height: 1.4rem;
`;

export const StyledProfileLink = styled.li`
  margin: 0.5rem 0.5rem 0.5rem 0;
  display: inline-block;
  font-size: 18px;
`;
