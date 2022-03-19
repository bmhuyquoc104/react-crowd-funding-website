import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    justify-content:${({jc}) => jc || "center"};
    align-items:${({ai}) => ai || "center"};
    flex-direction:${({fd}) => fd || "row"};
`
