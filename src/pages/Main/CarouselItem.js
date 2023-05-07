import React from "react";
import "./CarouselItem.scss";
export default function CarouselItem({ item }) {
  const { image, title, price } = item;

  return (
    <li className="carouselItem">
      <div className="artistImg">
        <img src={image} alt={title} />
      </div>
      <div className="textBox">
        <div className="textBoxName">
          {item.title} <div className="textBoxSize">{price}</div>
        </div>
      </div>
    </li>
  );
}
