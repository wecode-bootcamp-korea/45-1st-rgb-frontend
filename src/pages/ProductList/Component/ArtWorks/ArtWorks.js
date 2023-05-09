import React from "react";
import "./ArtWorks.scss";

function ArtWorks({ art }) {
  const {
    image_urls,
    title,
    price,
    material,
    products_size_left,
    products_size_right,
  } = art;
  return (
    <div className="artWorks">
      <img alt="artimg" src={`${image_urls}`} />
      <div className="titleAndPrice">
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <p>{material}</p>
      <p>{`${products_size_left} x ${products_size_right} cm`}</p>
    </div>
  );
}

export default ArtWorks;
