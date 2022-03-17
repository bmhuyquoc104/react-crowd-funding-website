import React from "react";
import {StyledHeader} from './Header.styled'
import imagesResource from "../assets/images";


const Header = () => {
  return (
    <StyledHeader>
        <div className="image">
            <img src={imagesResource.Logo} alt="App logo" />
        </div>
        <ul>
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
        </ul>
    </StyledHeader>
  );
};

export default Header;
