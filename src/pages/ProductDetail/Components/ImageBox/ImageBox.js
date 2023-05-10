import React, { useEffect, useRef, useState } from "react";
// import Images from "../Images/Images";
import "./ImageBox.scss";

function ImageBox({ details }) {
  const { image_urls } = details;

  // console.log("details : ", details);
  // console.log("images :", image_urls);

  const TOTAL_SLIDE = 2;

  const [currentSlide, setCurrentSlide] = useState(0);
  // const [imageItem, setImageItem] = useState([]);
  const slideRef = useRef(null);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "transform 0.5s ease-in";
      slideRef.current.style.transform = `translateX(-${currentSlide * 105}%)`;
    }
  }, [currentSlide]);

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
      {/* 상품 이미지 */}
      {/* {image.map((item, index) => {
        return <LeftImage item={item} key={index} />;
      })} */}

      {/* <LeftImage image={details[0]?.img} /> */}
      {/* <img alt="artimg" src={`${item[0]}`} /> */}
      <div className="imageContainer">
        <div className="inner" ref={slideRef}>
          {/* {image_urls?.map((item, index) => {
          return (
            <Images item={item} key={index} />
            // <img key={index} alt="artimg" src={item} />
          );
        })} */}
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
