import React from "react";
import {StyledBookmark} from "./Bookmark.styled";
import imagesResource from "../../assets/images";
const Bookmark = () => {
  return (
      <StyledBookmark>
        <div className="image">
          <img src={imagesResource.LogoMastercraft} alt="An circle mastercraft icon" />
        </div>
        <div className = "card-info">
          <h1 className="card-title">Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div className="bookmark-container">
          <button className="back">Back this project</button>
          <button className="button-container">
                <div className="button-image">
                    <img src={imagesResource.BookmarkIcon} alt="A bookmark icon" />
                </div>
                <p>Bookmark</p>
          </button>
          
        </div>
      </StyledBookmark>
  );
};

export default Bookmark;
