import React from "react";
import "./CheckoutProduct.scss";

function CheckoutProduct({ product }) {
  const { image_urls, price, title } = product;

  const productPrice = parseInt(price).toLocaleString();

  return (
    <div className="checkoutProduct">
      <div className="thumbnailWrap">
        <img alt="product thumbnail" src={image_urls} />
      </div>
      <div className="checkoutProductRight">
        <div className="topRow">
          <h5>{title}</h5>
          <div className="counter">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
        <div className="bottomRow">
          <button>삭제</button>
          <span>₩{productPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
