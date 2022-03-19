import styled from "styled-components";
import imagesResource from "../../assets/images";
import {motion} from 'framer-motion'
export const StyledHeader = styled(motion.header)`
  min-height: 35vh;
  padding: 0.01em 9em;
  background-image: url(${imagesResource.HeroDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
  justify-content: space-between;

  .header-container {
    margin-top: 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 2em;
  }

  li {
    list-style-type: none;
    color: white;
    font-size: clamp(0.75rem, 1vw, 0.75rem);
  }

  .nav-icon {
    display: none;
  }

  @media (max-width: 768px) {
    padding:0.01em 2em;
  
    .nav-is-inactive {
      display: none;
    }

    .nav-icon {
      display: flex;
    }
  }

  @media (max-width: 450px) {
    background-image: url(${imagesResource.HeroMobile});
    min-height: 50vh;
    width: max(100%,350px);
    background-size: cover;
  }
`;

export const StyledActiveHeader = styled(motion.header)`
  display: flex;
  flex-direction: column;
  background-image: url(${imagesResource.HeroMobile});
  min-height: 50vh;
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0.01em 2em;
  width: max(100%,350px);

  .header-container {
    margin-top: 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.2);
  }

  li {
    list-style-type: none;
    color: black;
    background-color: white;
    padding: 1.75em 1em;
  }

  
`;
