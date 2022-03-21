import React from "react";
import { StyledAboutSection } from "./AboutUs.styled";
import { CardDefault } from "../Modal/Modal";
const AboutUsSection = () => {
  return (
    <StyledAboutSection>
      <h2 className="project-title">About this project</h2>
      <p className="first-paragraph">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="second-paragraph">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
        <CardDefault  />
    </StyledAboutSection>
  );
};

export default AboutUsSection;
