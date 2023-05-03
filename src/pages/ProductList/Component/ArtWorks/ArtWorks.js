import React from "react";
import "./ArtWorks.scss";

function ArtWorks({ art }) {
  return (
    <div className="artWorks">
      <img alt="artimg" src={`${art.img}`} />
      <div className="titleAndPrice">
        <p>{art.title}</p>
        <p>{art.price}</p>
      </div>
      <p>{art.material}</p>
      <p>{`${art.productsSizeLeft} x ${art.productsSizeRight} cm`}</p>
    </div>
  );
}

export default ArtWorks;
