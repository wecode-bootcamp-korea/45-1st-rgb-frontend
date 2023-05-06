import React, { useEffect, useState } from "react";
import "./ProductDescription.scss";

const ProductDescription = ({ inOut }, { setInOut, noMore }) => {
  // mock data 저장할 useState
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch("/data/detailInfo.json")
      .then(res => res.json())
      .then(data => {
        setDescription(data);
      });
  }, []);

  return (
    <div className="productDescription">
      {/* className=
      {`${inOut ? "productDescription" : "productDescription out"}`}
      > */}
      <button onClick={noMore} />
      <div className="descriptionBox" key={description[0]?.id}>
        <h2>{description[0]?.title}</h2>
        <p className="artistName">{description[0]?.artistName}</p>
        <p className="productsSize">
          {`${description[0]?.productsSizeLeft} x ${description[0]?.productsSizeRight}cm`}
        </p>
        <p className="material">{description[0]?.material}</p>
        <p className="description">{description[0]?.description}</p>
      </div>
    </div>
  );
};
export default ProductDescription;
