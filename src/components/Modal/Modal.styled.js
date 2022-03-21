import styled from "styled-components";
import { motion } from "framer-motion";
export const StyledModal = styled(motion.section)`
  display: ${({dp}) => dp};
  flex-direction: column;
  padding: 2em;
  width: max(50%,300px);
  border-radius: 5px;
  align-items: center;
  gap:2em;
  background-color: "#ffffff";
  opacity: ${({opac}) => opac || 0.2};  
   

  .modal-header {
      display: flex;
      gap: 1em; 
      justify-content:space-between;
      flex-wrap:wrap;
  }

  .modal-header>:nth-child(3){
      width:100%;
      font-size: clamp(0.65rem,1vw,1rem);
      color:var(--clr_g);
      order:3;
  }

  .modal-header h2{
      align-self:flex-end;
      color:var(--clr_b);
      order:2;
      font-size:clamp(1rem,1.2vw,1.2rem);
      width:100%;

  }

  .modal-header .image{
      cursor: pointer;
      order:1;
      width:100%;
      position:relative;
  }

  .modal-header .image img {
      position:absolute;
      top:0;
      right:0;
      object-fit:contain;
      height:15px;
  }

  .card-list {
      display: flex;
      flex-direction: column;
      gap:1em;
      width:100%;

  }

  

  @media (max-width: 450px){
    width:max(100%,300px);

  }
`;
