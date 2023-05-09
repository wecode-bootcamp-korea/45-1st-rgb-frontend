import React from "react";
import Images from "../Images/Images";
import "./ImageBox.scss";

function ImageBox({ details }) {
  const item = details.image_urls;

  return (
    <div className="detailLeft">
      <button className="arrowLeft">
        <img alt="left" src="/images/productDetail/button-pre.png" />
      </button>
      {/* 상품 이미지 */}
      {/* {image.map((item, index) => {
        return <LeftImage item={item} key={index} />;
      })} */}

      {/* <LeftImage image={details[0]?.img} /> */}
      {/* <img alt="artimg" src={`${item[0]}`} /> */}
      <div className="imageContainer">
        {item?.map((item, index) => {
          return (
            <Images item={item} key={index} />
            // <img key={index} alt="artimg" src={item} />
          );
        })}
      </div>
      <button className="arrowRight">
        <img alt="right" src="/images/productDetail/button-next.png" />
      </button>
    </div>
  );
}

export default ImageBox;
