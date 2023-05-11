import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarouselItem.scss";

export default function CarouselItem({ item }) {
  const { title, products_size_left, products_size_right, image_urls } = item;
  const navigate = useNavigate();

  return (
    <li className="carouselItem">
      <img
        onClick={() => navigate("/productList/all")}
        className="artistImg"
        src={image_urls}
        alt="artist"
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
