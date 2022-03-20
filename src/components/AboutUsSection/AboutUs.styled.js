import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAboutSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap:1em;
  width:max(50%,300px);
  background-color:#ffffff;
  padding:2em;
  border-radius:15px;
  
  &>*{
      width: 100%;
  }
  
  &>:nth-child(4){
    padding:0;
    margin-top:0;
    width: 100%;
  }
  .project-title {
    color: var(--clr_sb);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
  }

  .first-paragraph,.second-paragraph {
    color: grey;
    line-height: 2;
    font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  }
`;
