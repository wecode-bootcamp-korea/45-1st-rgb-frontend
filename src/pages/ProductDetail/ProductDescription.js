import React from "react";
import "./ProductDescription.scss";

const ProductDescription = ({ inOut, noMore, details }) => {
  const {
    id,
    title,
    artist_name,
    products_size_left,
    products_size_right,
    material,
    description,
  } = details;

  return (
    <div
      className={`${inOut ? "productDescription" : "productDescription out"}`}
    >
      <button onClick={noMore} />
      <div className="descriptionBox" key={id}>
        <h2>{title}</h2>
        <p className="artistName">{artist_name}</p>
        <p className="productsSize">
          {`${products_size_left} x ${products_size_right}cm`}
        </p>
        <p className="material">{material}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
export default ProductDescription;
