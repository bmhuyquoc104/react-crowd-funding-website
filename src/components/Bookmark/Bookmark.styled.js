import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledBookmark = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max(50%, 350px);
  background-color: #ffffff;
  margin-top: -5em;
  border-radius: 5px;
  gap: 1.5em;
  padding-bottom: 2em;
  h1 {
    color: var(--clr_b);
    font-size: clamp(1rem, 1.5vw, 1.4rem);
  }

  p {
    color: var(--clr_g);
    font-size: clamp(0.6rem, 1vw, 1rem);
    font-weight:var(--fw_l);
  }

  .card-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .image {
    margin-top: -1.75em;
  }

  .image img {
    width: 100%;
    object-fit: cover;
  }
  .bookmark-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .bookmark-container .back {
    padding: 0.75em 3em;
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    border-radius: 25px;
    color: #ffffff;
    border: 1px solid var(--clr_mcyan);
    background-color: var(--clr_mcyan);

  }

  .button-container {
    display: flex;
    align-items: center;
    font-weight: var(--fw_m);
    color: var(--clr_g);
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    background-color: #eaeaea;
    border: #eaeaea;
    border-radius: 25px;
    position: relative;
    padding: 0.75em;
    gap: 3em;
    padding-right: 1.2em;
  }

  .button-image {
    width: 100%;
  }

  .button-image img {
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
  }

  @media (max-width: 450px) {
    width: max(90%, 300px);
    align-items: center;
    justify-content: center;

    .card-info {
      width: 100%;
      justify-content:center;   
      align-items:center;
    }

    .card-info p{
        font-size: clamp(1rem, 1vw, 1.2rem);
        width: max(80%);
    }

    .card-info h1{
        width:50%;
    }

    .bookmark-container {
      justify-content: initial;
      padding: 0 2em;
      align-items: stretch;
      gap: 1em;
    }

    .bookmark-container .back {
      width: 75%;
      padding:  0.75em;
      font-size: clamp(1.2rem, 1vw, 1.4rem);

    }

    .button-container{
        align-items: initial;
        padding: 0;
    }


    .button-container p{
        display: none;
    }

  }
`;
