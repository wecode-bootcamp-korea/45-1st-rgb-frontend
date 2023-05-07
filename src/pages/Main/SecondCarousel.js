import React from "react";
import "./SecondCarousel.scss";

export default function SecondCarousel({ item }) {
  const { img, size, title } = item;

  return (
    <li className="slideBox">
      <img className="goodsImg" src={img} alt="artist" />
      <div className="textBox">
        <div className="textBoxName">
          {title} <div className="textBoxSize">{size}</div>
        </div>
      </div>
    </li>
  );
}
