import React from "react";
import "./Images.scss";

function Images({ item }) {
  return <img alt="artimg" src={`${item}`} className="itemImage" />;
}

export default Images;
