import React, { useState, useRef, useEffect } from "react";
import "./MainCarousel2.scss";
import SecondCarousel from "./SecondCarousel";

const TOTAL_SLIDES = 6;

export default function MainCarousel2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselItem, setCarouselItem] = useState([]);
  const slideRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("./data/productImage.json");
      const json = await data.json();
      setCarouselItem(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "transform 0.2s ease-in";
      slideRef.current.style.transform = `translateX(-${currentSlide * 44.4}%)`;
    }
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="goodsContainer">
      <div className="goodsTitle">탁월한 셀렉션 -</div>
      <div className="goodsBox">
        <ul className="secondSlide" ref={slideRef}>
          {carouselItem.map((item, id) => (
            <SecondCarousel key={id} item={item} />
          ))}
        </ul>
        <div className="buttonContainer">
          <button className="buttonPre2" onClick={prevSlide} />
          <button className="buttonNext2" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
}
