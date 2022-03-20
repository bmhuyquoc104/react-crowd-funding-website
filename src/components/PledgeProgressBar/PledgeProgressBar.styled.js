import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPledgeProgressBar = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  gap: 1em;
  width: max(50%, 300px);
  background-color: #ffffff;

  h2 {
    color: var(--clr_sb);
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    width: 80%;
  }

  h3 {
    color: grey;
    font-size: clamp(0.6rem, 1.2vw, 0.8rem);
    width: 80%;
  }

  .progress-container {
    display: flex;
    flex-direction: row;
  }

  .progress-container > * {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  }

  .progress-container > :first-child,
  .progress-container > :nth-child(2) {
    flex: 1;
  }

  .progress-container > :nth-child(3),
  .progress-container > :nth-child(2) {
    padding-left: 2em;
    border-left: 1px solid var(--clr_g);
  }

  .progress-container > :nth-child(3) {
    flex: 2;
  }

  @media (max-width: 768px) {
    .progress-container {
      flex-direction: column;
      align-items: center;
      gap:1em;
    }

    .progress-container >*{
        flex:1;
        text-align: center;
    }

    h2,h3{
        width: 100%;
    }
    .progress-container > :nth-child(3),
    .progress-container > :nth-child(2) {
      padding: 0;
      border-left: none;
      padding-top:1em;
      width: 30%;
      border-top:1px solid var(--clr_g);

    }
  }
`;

let defaultWidth = (89914 / 100000) * 100;

export const StyledProgressBar = styled(motion.div)`
  border-radius: 25px;
  background-color: #eaeaea;
  position: relative;
  height: 10px;

  .progress-done {
    position: absolute;
    border-radius: 25px;
    top: 0;
    left: 0;
    bottom: 0;
    color: transparent;
    background-color: var(--clr_mcyan);
    width: ${({ done }) => done || `${defaultWidth}%`};
  }
`;
