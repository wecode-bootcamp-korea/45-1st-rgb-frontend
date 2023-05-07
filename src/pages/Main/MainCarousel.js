import React, { useEffect, useState, useRef } from "react";
import CarouselItem from "./CarouselItem";
import "./MainCarousel.scss";

export default function MainCarousel() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1)); // 포인트 커서 : 디폴트 값으로
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
    <div className="box2">
      <div className="artistBox">
        <div className="section">
          <ul className="carouselContainer" ref={carouselRef}>
            <div className="rgbText">
              <div>rgb. 이달의 아티스트를 만나보세요</div>
              <div>meet our international artist</div>
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
