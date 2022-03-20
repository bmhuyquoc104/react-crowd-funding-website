import React from "react";
import { StyledPledgeProgressBar, StyledProgressBar } from "./PledgeProgressBar.styled";

const ProgressBar = ({ done }) => {
  return (
  <StyledProgressBar  className="progressbar-container">
    <div className="progress-done" style={{ width:`${done}%`}}>
        hello
    </div>
  </StyledProgressBar>
  );
};

const PledgeProgressBar = () => {
  return (
    <StyledPledgeProgressBar>
      <div className="progress-container">
        <div className="content-pledgeAmount">
          <h2>$89,914</h2>
          <h3>of $100,000 backed</h3>
        </div>
        <div className="content-backers">
          <h2>5,007</h2>
          <h3>total backers</h3>
        </div>
        <div className="days-left">
          <h2>56</h2>
          <h3>days left</h3>
        </div>
      </div>
      <ProgressBar/>
    </StyledPledgeProgressBar >
  );
};

export default PledgeProgressBar;
