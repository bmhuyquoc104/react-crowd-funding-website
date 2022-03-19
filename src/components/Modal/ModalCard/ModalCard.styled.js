import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledModalCard = styled(motion.div)`
  display: flex;
  gap: 1em;
  max-width: 100%;
  padding: 2em;
  border-radius: 10px;
  border: 1px solid ${({ clr }) => clr || "#eaeaea"};
  flex-wrap: wrap;

  .checkbox-inside {
    padding: 0.25em;
    background-color: var(--clr_mcyan);
    border-radius: 50px;
  }

  .checkbox {
    padding: 0.5em;
    border-radius: 50px;
    min-height: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eaeaea;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    font-size: clamp(1rem, 1vw, 1.2rem);
  }

  .title-container .limit {
    color: var(--clr_mcyan);
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    width: fit-content;
    margin-left: 1em;
  }

  .title-container .card-title {
    color: var(--clr_b);
    width: fit-content;
  }

  .card-description {
    color: var(--clr_g);
    font-size: clamp(0.6rem, 1vw, 0.8rem);
  }

  h2 {
    font-size: clamp(0.6rem, 0.8vw, 0.8rem);
  }

  span {
    color: var(--clr_g);
    margin-left: 0.4em;
    font-size: clamp(0.6rem, 1vw, 0.8rem);
  }
  .card-content {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .quantities {
    flex: 2;
    text-align: right;
    font-size: clamp(0.6rem, 1vw, 0.8rem);
  }
`;

export const StyledPledge = styled(motion.section)`
    width: 100%;
    border-top: 1px solid #eaeaea;
    padding: 1.5em;
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  label {
    width: 100%;
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    color: var(--clr_g);
  }
  .form-control {
    display: flex;
    gap: 0.5em;
    align-items: center;
    justify-content: flex-end;
  }

  .form-control > * {
    padding: 1em;
    border-radius: 25px;
    width: 100%;
  }
  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #eaeaea;
  }

  .input-container input::placeholder,
  .input-container input {
    color: var(--clr_b);
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    width: 60%;
    border: none;
  }

  .currency {
    color: #eaeaea;
    font-size: clamp(0.6rem, 1vw, 0.8rem);
  }

  .submit {
    border: 1px solid var(--clr_mcyan);
    background-color: var(--clr_mcyan);
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    color: white;
  }

  
`;
