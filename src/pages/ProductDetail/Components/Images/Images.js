import React from "react";
import "./Images.scss";

function Images({ item }) {
  console.log(`사진들`, item);
  return <img alt="artimg" src={`${item}`} className="itemImage" />;
}

export default Images;
