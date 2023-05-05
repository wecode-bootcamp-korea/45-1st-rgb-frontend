import React, { useEffect, useState } from "react";
import "./ProductDescription.scss";

const ProductDescription = () => {
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch("/data/detailInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setDescription(data);
      });
  }, []);

  return (
    <div className="productDescription">
      <button></button>
      {description.map((data) => (
        <div className="descriptionBox" key={data.id}>
          <h2>{data.title}</h2>
          <p className="artistName">{data.artistName}</p>
          <p className="productsSize">
            {data.productsSizeLeft} × {data.productsSizeRight}cm
          </p>
          <p className="material">{data.material}</p>
          <p className="description">{data.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductDescription;
