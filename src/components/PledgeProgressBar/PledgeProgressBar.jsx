import React, {useContext} from "react";
import { StyledPledgeProgressBar, StyledProgressBar } from "./PledgeProgressBar.styled";
import { PledgeContext } from "../../hooks/useContext";

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
  const {pledge} = useContext(PledgeContext);
  console.log(pledge.totalDaysLeft);
  return (
    <StyledPledgeProgressBar>
      <div className="progress-container">
        <div className="content-pledgeAmount">
          <h2>${pledge.totalAmount}</h2>
          <h3>of $100,000 backed</h3>
        </div>
        <div className="content-backers">
          <h2>{pledge.totalBackers}</h2>
          <h3>total backers</h3>
        </div>
        <div className="days-left">
          <h2>{pledge.totalDaysLeft}</h2>
          <h3>days left</h3>
        </div>
      </div>
      {(pledge.totalAmount/100000)*100 <= 100 ? (
      <ProgressBar done = {(pledge.totalAmount/100000)*100}/>

      ):(
        <ProgressBar done = "100"/>

      )}
    </StyledPledgeProgressBar >
  );
};

export default PledgeProgressBar;
