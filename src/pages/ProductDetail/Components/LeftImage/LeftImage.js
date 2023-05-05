import React from "react";
import "./LeftImage.scss";

function Image({ image }) {
  return <img alt="artimg" src={`${image}`} />;
}

export default Image;
