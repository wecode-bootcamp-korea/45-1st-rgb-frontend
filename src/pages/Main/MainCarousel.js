import React, { useEffect, useState, useRef } from "react";
import CarouselItem from "./CarouselItem";
import "./MainCarousel.scss";

export default function MainCarousel() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); //carousel 적용

  useEffect(() => {
    fetch("./data/productInfo.json", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  useEffect(() => {
    const lastIndex = items.length - 1;
    if (currentIndex === lastIndex) {
      document.querySelector(".buttonNext").style.display = "none";
    } else {
      document.querySelector(".buttonNext").style.display = "block";
    }
  }, [currentIndex, items]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  }; // pre 버튼 첫번째 이미지에서 막기? -> 사진 잘림

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "all 0.3s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 33.3
      }%)`;
    }
  }, [currentIndex, carouselRef]);

  return (
    <div className="box2">
      <div className="artistBox" ref={carouselRef}>
        <div className="carouselContainer">
          {items.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="buttonBox">
        <button className="buttonPre" onClick={handlePrev} />
        <button className="buttonNext" onClick={handleNext} />
      </div>
      <div className="indicatorBar">
        <div className="Bar1">
          <div className="Bar2" />
        </div>
      </div>
    </div>
  );
}
