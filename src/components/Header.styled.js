import styled from "styled-components";
import imagesResource from "../assets/images";
export const StyledHeader = styled.header`
  display: flex;
  min-height: 35vh;
  padding:3em 0;
  background-image: url(${imagesResource.HeroDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
  justify-content: space-around;

  ul {
    display: flex;
    flex-direction: row;
  }

  ul>*{
      margin-left:30px;
  }

  li {
    list-style-type: none;
  }
`;
