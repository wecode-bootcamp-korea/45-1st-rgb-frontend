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
          <div className="counter">
            <button>-</button>
            <span>{count}</span>
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
