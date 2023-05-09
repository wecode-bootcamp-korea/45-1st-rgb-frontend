import React from "react";
import "./CarouselItem.scss";
export default function CarouselItem({ item }) {
  const { title, size, img } = item;

  return (
    <li className="carouselItem">
      <img className="artistImg" src={img} alt="artist" />
      <div className="textBox">
        <div className="textBoxName">
          {title} <div className="textBoxSize">{size}</div>
        </div>
      </div>
    </li>
  );
}
