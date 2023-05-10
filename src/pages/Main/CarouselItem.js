import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarouselItem.scss";

export default function CarouselItem({ item }) {
  const { title, size, img } = item;
  const navigate = useNavigate();

  return (
    <li className="carouselItem">
      <img
        onClick={() => navigate("/Artist")}
        className="artistImg"
        src={img}
        alt="artist"
      />
      <div className="textBox">
        <div className="textBoxName">
          {title} <div className="textBoxSize">{size}</div>
        </div>
      </div>
    </li>
  );
}
