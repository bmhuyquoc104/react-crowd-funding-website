import React, { useState } from "react";
import { StyledBookmark } from "./Bookmark.styled";
import imagesResource from "../../assets/images";
import { motion } from "framer-motion";
const Bookmark = () => {
  let [isToggle, setToggle] = useState(false);

  return (
    <StyledBookmark>
      <div className="image">
        <img
          src={imagesResource.LogoMastercraft}
          alt="An circle mastercraft icon"
        />
      </div>
      <div className="card-info">
        <h1 className="card-title">Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="bookmark-container">
        <motion.button
          whileHover={{
            backgroundColor: "hsl(176, 72%, 28%)",
            cursor: "pointer",
            border: "1px solid hsl(176, 72%, 28%)",
          }}
          className="back"
        >
          Back this project
        </motion.button>
        {/* Render depends on the toggle function */}
        {isToggle ? (
          <button
            className="button-container"
            onClick={() => {
              setToggle(!isToggle);
            }}
          >
            <div className="button-image">
              <img src={imagesResource.ActiveBookmarkIcon} alt="A bookmark icon" />
            </div>
            <p style ={{color:"hsl(176, 72%, 28%)"}}>Bookmarked</p>
          </button>
        ) : (
          <button
            className="button-container"
            onClick={() => {
              setToggle(!isToggle);
            }}
          >
            <div className="button-image">
              <img src={imagesResource.BookmarkIcon} alt="A bookmark icon" />
            </div>
            <p>Bookmark</p>
          </button>
        )}
      </div>
    </StyledBookmark>
  );
};

export default Bookmark;
