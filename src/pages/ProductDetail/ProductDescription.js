import React from "react";
import "./ProductDescription.scss";

const ProductDescription = ({ inOut, noMore, details }) => {
  return (
    <div
      className={`${inOut ? "productDescription" : "productDescription out"}`}>
      <button onClick={noMore} />
      <div className="descriptionBox" key={details.id}>
        <h2>{details.title}</h2>
        <p className="artistName">{details.artist_name}</p>
        <p className="productsSize">
          {`${details.products_size_left} x ${details.products_size_right}cm`}
        </p>
        <p className="material">{details.material}</p>
        <p className="description">{details.description}</p>
      </div>
    </div>
  );
};
export default ProductDescription;
