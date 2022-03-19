import React, { useState } from "react";
import { StyledHeader, StyledActiveHeader } from "./Header.styled";
import imagesResource from "../../assets/images";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [isShowBar, setShowBar] = useState(false);

  return (
    <>
      <AnimatePresence initial={false} enterBeforeExit>
        {isShowBar ? (
          <StyledActiveHeader
            key="1"
            animate={{
              opacity: 1,
              transition: {
                ease: "circIn",
                duration: 0.8,
              },
            }}
            initial={{ opacity: 0 }}
            exit={{ y: "100vh" }}
          >
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
          <StyledHeader
            key="1"
            animate={{
              opacity: 1,
              transition: {
                ease: "circOut",
                duration: 0.8,
              },
            }}
            initial={{ opacity: 0 }}
          >
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
      </AnimatePresence>
    </>
  );
};

export default Header;
