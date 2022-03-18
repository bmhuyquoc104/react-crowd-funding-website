import React, { useState } from "react";
import { StyledHeader, StyledActiveHeader } from "./Header.styled";
import imagesResource from "../assets/images";

const Header = () => {
  const [isShowBar, setShowBar] = useState(false);

  return (
    <>
      {isShowBar ? (
        <StyledActiveHeader>
          <div className="header-container">
            <div className="image">
              <img src={imagesResource.Logo} alt="App logo" />
            </div>

            <div className="nav-icon" onClick={() => setShowBar(!isShowBar)}>
              <img
                src={imagesResource.CloseMenuIcon}
                alt="Button to toggle navbar"
              />
            </div>
          </div>

          <ul className="nav-is-active">
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
        </StyledActiveHeader>
      ) : (
        <StyledHeader>
          <div className="header-container">
            <div className="image">
              <img src={imagesResource.Logo} alt="App logo" />
            </div>

            <ul className="nav-is-inactive">
              <li>About</li>
              <li>Discover</li>
              <li>Get Started</li>
            </ul>

            <div className="nav-icon" onClick={() => setShowBar(!isShowBar)}>
              <img
                src={imagesResource.HamburgerIcon}
                alt="Button to toggle navbar"
              />
            </div>
          </div>
        </StyledHeader>
      )}
    </>
  );
};

export default Header;
