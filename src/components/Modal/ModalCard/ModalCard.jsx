import React, { useState } from "react";
import { StyledModalCard } from "./ModalCard.styled";

export const ModalCard = ({ title, description, quantities, limit }) => {
  let [isToggle, setToggle] = useState(false);

  return (
    <>
      {isToggle ? (
        <StyledModalCard>
          <button
            className="checkbox"
            onClick={() => {
              setToggle(!isToggle);
            }}
          ></button>
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
          <div className="pledge-container">
            <form action="#" method="get">
              <label >Enter your pledge</label>
              <div className="form-control">
                <div className="input-container">
                  <h3 className="currency">$</h3>
                  <input
                    type="text"
                    name="pledge-value"
                    min="25"
                    placeholder="25"
                  ></input>
                </div>
                <button className = "submit" type="submit">Continue</button>
              </div>
            </form>
          </div>
        </StyledModalCard>
      ) : (
        <StyledModalCard>
          <button
            className="checkbox"
            onClick={() => {
              setToggle(!isToggle);
            }}
          ></button>
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
      )}
    </>
  );
};
