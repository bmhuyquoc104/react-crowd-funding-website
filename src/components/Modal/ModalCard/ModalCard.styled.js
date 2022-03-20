import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledModalCard = styled(motion.div)`
  display: flex;
  gap: 1em;
  max-width: 100%;
  padding: 2em;
  border-radius: 10px;
  border: 1px solid ${({ clr }) => clr || "#eaeaea"};

  .checkbox-inside {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: var(--clr_mcyan);
    border-radius: 50%;
  }

  .checkbox {
    padding: 0.5em;
    position: relative;
    border-radius: 50%;
    height: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eaeaea;
  }

  .checkbox.hover {
    border: 1px solid var(--clr_mcyan);
    background-color: white;
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

  @media (max-width: 450px) {
    position: relative;
    padding: 6em 1.5em;
    & > * {
      margin-top: -4.8em;
    }

    .card-content {
      margin-top: -4.4em;
    }

    .title-container {
      flex-direction: column;
      justify-content: center;
      gap: 0.25em;
      align-items: flex-start;
    }

    .title-container .limit {
      margin-left: 0;
    }

    .quantities {
      position: absolute;
      left: 0;
      display: block;
      padding: 0 2.5em;
      bottom: 2em;
    }

    .card-description {
      position: absolute;
      left: 0;
      display: block;
      padding: 0 2.5em;
      bottom: 5em;
      line-height: 1.5;
    }
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
    padding: clamp(0.75em, 1.2vw, 1em);
    border-radius: 25px;
    width: 100%;
  }
  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 0.2em;
    border: 1px solid #eaeaea;
  }

  .input-container input::placeholder,
  .input-container input {
    color: var(--clr_mcyan);
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    width: 60%;
    border: none;
    outline: none;
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

  @media (max-width: 768px) {
    form {
      flex-direction: column;
      align-items: center;
      gap: 1em;
      text-align: center;
      justify-content: center;
    }
    .form-control {
      justify-content: space-between;
      align-items: center;
    }

    .form-control > * {
      padding: 0.75em;
      border-radius: 25px;
      width: 100%;
    }
  }
`;

export const StyledDefaultCard = styled(motion.section)`
  opacity: ${({ opacity }) => opacity || "1"};
  display: flex;
  flex-direction: column;
  padding: 2em;
  border-radius: 10px;
  border: 1px solid ${({ clr }) => clr || "#eaeaea"};
  gap: 1em;

  .title-container {
    display: flex;
    justify-content: space-between;
    font-size: clamp(1rem, 1vw, 1.2rem);
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
  }

  .card-description {
    color: var(--clr_g);
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    line-height: 2;
  }

  h2 {
    font-size: clamp(0.6rem, 0.8vw, 0.8rem);
  }

  .title-container .limit {
    color: var(--clr_mcyan);
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    font-weight: var(--fw_s);
  }

  .title-container .card-title {
    color: var(--clr_b);
    font-size: clamp(0.6rem, 1vw, 0.8rem);
  }

  button {
    text-align: center;
    background-color: ${({ bg }) => bg || "hsl(176, 50%, 47%)"};
    color: white;
    padding: 0.9em 2em;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    font-size: clamp(0.6rem, 1.2vw, 0.7rem);
    border: 1px solid ${({ bg }) => bg || "hsl(176, 50%, 47%)"};
  }

  span {
    color: var(--clr_g);
    margin-left: 0.2em;
    font-size: clamp(0.6rem, 1vw, 0.8rem);
  }

  @media (max-width: 768px) {
    .card-bottom {
      display: flex;
      flex-direction: column;
      justify-content: initial;
      gap: 1em;
    }

    button{
      width:70%;
    }

    .title-container {
      display: flex;
      flex-direction: column;
      justify-content: initial;
      font-size: clamp(1rem, 1vw, 1.2rem);
      gap: 0.4em;

    }
  }
`;
