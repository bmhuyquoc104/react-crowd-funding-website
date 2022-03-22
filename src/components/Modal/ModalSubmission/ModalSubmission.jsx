import React, {useContext} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import imagesResource from "../../../assets/images";
import { ModalContext } from "../../../hooks/useContext";

const StyledModalSubmission = styled(motion.div)`
  display: ${({dp}) => dp};
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding: 3em 0;
  width: max(30%,350px);
  text-align: center;
  gap:1em;  
  margin-top:3em;
  background-color:#ffffff;
  border-radius:10px;
  margin-bottom:10em;
  .title{
      color: black;
      font-weight: var(--fw_l);
      font-size:clamp(1rem,1.5vw,1.4rem);  
  }

  .content {
      color:var(--clr_g);
      font-size:clamp(0.8rem,1.3vw,1rem);  
      width:max(60%,300px);
  }
  button {
      padding: 1em 2em;
      border: 1px solid var(--clr_mcyan);
      box-shadow: 0px 5px 10px 0 rgba(0,0,0,0.2);
      color:#ffffff;
      font-size:clamp(0.8rem,1.3vw,1rem);  
      background-color:var(--clr_mcyan);
      border-radius:25px;
  }
`;

const ModalSubmission = ({dp}) => {
  let {dispatch} = useContext(ModalContext);
  return (
    <StyledModalSubmission dp = {dp}>
      <div className="image">
        <img src={imagesResource.CheckIcon} alt="A circle tick icon " />
      </div>
      <p className="title">Thanks for your support!</p>
      <p className="content">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      {/* Use the useContext to ref the dispatch function to the onClick event */}
      <motion.button onClick = {() => dispatch({type:"CLOSEMODALSUBMISSION"})} whileHover = {{cursor: 'pointer',backgroundColor: 'hsl(176, 72%, 28%)'}}>Got it!</motion.button>
    </StyledModalSubmission>
  );
};

export default ModalSubmission;
