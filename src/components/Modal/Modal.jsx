import React from "react";
import { StyledModal } from "./Modal.styled";
import imagesResource from "../../assets/images";
import { ModalCard } from "./ModalCard/ModalCard";
import { motion } from "framer-motion";
const Modal = () => {
  const cardContainerVariant = {
    hidden: {
      opacity: 0,
      x: "-100vh",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damp: 10,
        duration: 10,
        when: "beforeChildren",
        staggerChildren: 0.5
      },
    },
  };

  const cardItemVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const cardContent = [
    {
      id: 1,
      title: "Pledge with no reward",
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      limit: "",
      quantities: "",
    },
    {
      id: 2,
      title: "Bamboo Stand",
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      limit: "Pledge $25 or more",
      quantities: "101",
    },
    {
      id: 3,
      title: "Black Edition Stand",
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      limit: "Pledge $75 or more",
      quantities: "64",
    },
    {
      id: 4,
      title: "Mahogany Special Edition",
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      limit: "Pledge $200 or more",
      quantities: "0",
    },
  ];
  return (
    <StyledModal>
      <div className="modal-header">
        <h2>Back this project</h2>
        <div className="image">
          <img src={imagesResource.CloseModalIcon} alt="An close modal icon" />
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
      <motion.div
        whileInView="visible"
        variants={cardContainerVariant}
        animate="visible"
        initial="hidden"
        className="card-list"
      >
        {cardContent.map((card) => (
          
            <motion.div variants = {cardItemVariant}>
              <ModalCard
                as={motion.div}
                variants={cardItemVariant}
                key={card.id}
                title={card.title}
                description={card.description}
                limit={card.limit}
                quantities={card.quantities}
              ></ModalCard>
            </motion.div>
          )
        )}
      </motion.div>
    </StyledModal>
  );
};

export default Modal;
