import React from "react";
import Image from "../LeftImage/LeftImage";
import "./DetailLeft.scss";

function DetailLeft() {
  return (
    <div className="detailLeft">
      <button className="arrowLeft">
        <img alt="left" src="/images/productDetail/button-pre.png" />
      </button>
      <Image />
      <button className="arrowRight">
        <img alt="right" src="/images/productDetail/button-next.png" />
      </button>
    </div>
  );
}

export default DetailLeft;
