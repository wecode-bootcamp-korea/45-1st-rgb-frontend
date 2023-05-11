import React, { useEffect, useRef, useState } from "react";
import "./ImageBox.scss";

function ImageBox({ details, inOut }) {
  const { image_urls } = details;
  const TOTAL_SLIDE = 2;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    if (inOut && slideRef.current) {
      slideRef.current.style.transition = "transform 0.5s ease-in";
      slideRef.current.style = ``;
    } else if (!inOut && slideRef.current) {
      slideRef.current.style.transition = "transform 0.5s ease-in";
      slideRef.current.style.transform = `translateX(-${currentSlide * 500}px)`;
    }
  }, [inOut, currentSlide]);

  const prevButton = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDE);
    } else {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const nextButton = () => {
    if (currentSlide >= TOTAL_SLIDE) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  return (
    <div className="detailLeft">
      <button className="arrowLeft" onClick={prevButton}>
        <img alt="left" src="/images/productDetail/button-pre.png" />
      </button>
      <div className="imageContainer">
        <div className="inner" ref={slideRef}>
          <img alt="images" src={`${image_urls}`} className="itemImage" />
          <img
            alt="images"
            src="https://raw.githubusercontent.com/haechan02/rgb_demo_arts/d753962f9aa85bc1508500c92eba6b434ca489db/assets/arts/11.jpeg"
            className="itemImage"
          />
          <img
            alt="images"
            className="itemImage"
            src="https://github.com/haechan02/rgb_demo_arts/blob/d753962f9aa85bc1508500c92eba6b434ca489db/assets/arts/13.jpeg?raw=true"
          />
        </div>
      </div>
      <button className="arrowRight" onClick={nextButton}>
        <img alt="right" src="/images/productDetail/button-next.png" />
      </button>
    </div>
  );
}

export default ImageBox;
