import React from "react";
import "./ArtWorks.scss";

function ArtWorks({ art }) {
  return (
    <div className="artWorks">
      <img alt="artimg" src={`${art.image_urls}`} />
      <div className="titleAndPrice">
        <p>{art.title}</p>
        <p>{art.price}</p>
      </div>
      <p>{art.material}</p>
      <p>{`${art.products_size_left} x ${art.products_size_right} cm`}</p>
    </div>
  );
}

export default ArtWorks;
