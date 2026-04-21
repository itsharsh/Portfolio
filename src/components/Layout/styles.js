import styled from "styled-components";
import { Content } from "carbon-components-react";

export const StyledContent = styled(Content)`
  min-height: 10vh;

  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`;
