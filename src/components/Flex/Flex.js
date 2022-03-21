import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  padding: ${({v}) => v || "0"} ${({h}) => h || "2em"};
  justify-content: ${({ jc }) => jc || "center"};
  align-items: ${({ ai }) => ai || "center"};
  gap: 2em;
  flex-direction: ${({ fd }) => fd || "row"};
  @media (max-width: 450px) {
    & > * {
      width: 100%;
    }
  }
`;

export const AbsoluteFlexContainer = styled.div`
  display: ${({dp}) => dp};
  justify-content:center;
  align-items:center;
  position: absolute;
  top: 0;
  left: 0;
  min-height:100vh;
  background-color:rgba(211,211,211,0.6);
  width: 100%;
`