import React, { useState, useRef } from "react";
import {
  StyledModalCard,
  StyledPledge,
  StyledDefaultCard,
} from "./ModalCard.styled";
import { FlexContainer } from "../../Flex/Flex";
import { motion } from "framer-motion";

export const DefaultCard = ({ title, description, quantities, limit,opacity,buttonText,bg }) => {
  console.log(title);
  console.log(opacity);
  console.log(bg);
  return (
    <>
      {title !== "Pledge with no reward" ? (
        <StyledDefaultCard opacity = {opacity}>
          <div className="title-container">
            <motion.h2 className="card-title">{title}</motion.h2>
            <div className="limit">{limit !== "" && <h2> {limit}</h2>}</div>
          </div>
          <div className="card-description">{description}</div>
          <div className="card-bottom">
            <div className="quantities">
              {quantities !== "" && (
                <h3>
                  {" "}
                  {quantities} <span>left</span>
                </h3>
              )}
            </div>
            <motion.button
              whileHover={{
                backgroundColor: "hsl(176, 72%, 28%)",
                cursor: "pointer",
              }}
              className="select"
              style = {{backgroundColor: `${bg}`,border: `1px solid ${bg}`}}
            >
              {buttonText}
            </motion.button>
          </div>
        </StyledDefaultCard>
      ):(
        <StyledDefaultCard style = {{display:"none"}}/>
      )}
    </>
  );
};

export const ModalCard = ({ title, description, quantities, limit }) => {
  let [isToggle, setToggle] = useState(false);
  let buttonRef = useRef(null);
  console.log(title);
  return (
    <>
      {isToggle && title !== "Pledge with no reward" ? (
        <FlexContainer
          fd="column"
          ai="flex-start"
          jc="flex-start"
          h="0"
          style={{
            border: "1px solid hsl(176, 72%, 28%)",
            borderRadius: "5px",
          }}
        >
          <StyledModalCard style={{ borderRadius: "0", border: "none" }}>
            <button
              className="checkbox"
              onClick={() => {
                setToggle(!isToggle);
              }}
            >
              <div className="checkbox-inside"></div>
            </button>
            <div className="card-content">
              <div className="title-container">
                <h2 className="card-title">{title}</h2>
                <div className="limit">{limit !== "" && <h2> {limit}</h2>}</div>
                <div className="quantities">
                  {quantities !== "" && (
                    <h3>
                      {" "}
                      {quantities} <span>left</span>
                    </h3>
                  )}
                </div>
              </div>
              <div className="card-description">{description}</div>
            </div>
          </StyledModalCard>
          <StyledPledge className="pledge-container">
            <form action="#" method="get">
              <label>Enter your pledge</label>
              <div className="form-control">
                <div className="input-container">
                  <h3 className="currency">
                    $<strong style={{ color: "grey" }}>25</strong>
                  </h3>
                  <input type="text" name="pledge-value" min="25"></input>
                </div>
                <button className="submit" type="submit">
                  Continue
                </button>
              </div>
            </form>
          </StyledPledge>
        </FlexContainer>
      ) : (
        <StyledModalCard>
          <button
            ref={buttonRef}
            className="checkbox"
            onClick={() => {
              setToggle(!isToggle);
            }}
          ></button>
          <div className="card-content">
            <div className="title-container">
              <motion.h2
                whileHover={{ color: "hsl(176, 50%, 47%)", cursor: "pointer" }}
                className="card-title"
                onMouseOver={() => buttonRef.current.classList.add("hover")}
                onMouseLeave={() => buttonRef.current.classList.remove("hover")}
              >
                {title}
              </motion.h2>
              <div className="limit">{limit !== "" && <h2> {limit}</h2>}</div>
              <div className="quantities">
                {quantities !== "" && (
                  <h3>
                    {" "}
                    {quantities} <span>left</span>
                  </h3>
                )}
              </div>
            </div>
            <div className="card-description">{description}</div>
          </div>
        </StyledModalCard>
      )}
    </>
  );
};
