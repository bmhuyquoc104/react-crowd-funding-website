import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  padding: ${({v}) => v || "0"} ${({h}) => h || "2em"};
  justify-content: ${({ jc }) => jc || "center"};
  align-items: ${({ ai }) => ai || "center"};
  flex-direction: ${({ fd }) => fd || "row"};
  @media (max-width: 450px) {
    & > * {
      width: 100%;
    }
  }
`;
