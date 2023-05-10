import React from "react";
import "./SecondCarousel.scss";
import { useNavigate } from "react-router-dom";

export default function SecondCarousel({ item, pointer }) {
  const { title, products_size_left, products_size_right, image_urls } = item;
  const navigate = useNavigate();

  return (
    <li className="slideBox">
      <img
        className="goodsImg"
        src={image_urls}
        alt="artist"
        onClick={() => navigate("/artist")}
        style={{ cursor: pointer }}
      />
      <div className="textBox">
        <div className="textBoxName">
          {title}
          <div className="textBoxSize">
            {products_size_left}/{products_size_right}
          </div>
        </div>
      </div>
    </li>
  );
}
