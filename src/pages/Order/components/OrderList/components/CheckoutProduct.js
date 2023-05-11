import React from "react";
import "./CheckoutProduct.scss";

function CheckoutProduct({ cartItem }) {
  const { image, price, title, count } = cartItem;

  const productPrice = (parseInt(price) * parseInt(count)).toLocaleString();

  return (
    <div className="checkoutProduct">
      <div className="thumbnailWrap">
        <img alt="product thumbnail" src={image} />
      </div>
      <div className="checkoutProductRight">
        <div className="topRow">
          <h5>{title}</h5>
          <span>{count}개</span>
        </div>
        <div className="bottomRow">
          <span>₩{productPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
