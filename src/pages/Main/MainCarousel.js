import React, { useEffect, useState, useRef } from "react";
import CarouselItem from "./CarouselItem";
import "./MainCarousel.scss";

export default function MainCarousel() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch("./data/productImage.json", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "all 0.3s ease-in";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 52.5
      }%)`;
    }
  }, [currentIndex, carouselRef]);

  return (
    <div className="carouselContainer">
      <div className="artistBox">
        <div className="section">
          <ul className="carouselSlide" ref={carouselRef}>
            <div className="rgbText">
              <span className="rgbBold">rgb .</span>
              <span> 이달의 아티스트를 만나보세요</span>
              <div className="textEn">Make art part of your world!</div>
            </div>
            {items.map((item) => (
              <CarouselItem key={item.id} item={item} />
            ))}
          </ul>
          <button className="buttonPre" onClick={handlePrev} />
          <button className="buttonNext" onClick={handleNext} />
        </div>
      </div>

      <div className="indicatorBar">
        <div className="Bar1">
          <div className="Bar2" />
        </div>
      </div>
    </div>
  );
}
