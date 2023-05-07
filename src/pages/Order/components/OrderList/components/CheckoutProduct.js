import React from "react";
import "./CheckoutProduct.scss";

function CheckoutProduct({ cartItem }) {
  const { image_url, individualPrice, title, cartSum } = cartItem;

  const productPrice = (
    parseInt(individualPrice) * parseInt(cartSum)
  ).toLocaleString();

  return (
    <div className="checkoutProduct">
      <div className="thumbnailWrap">
        <img alt="product thumbnail" src={image_url} />
      </div>
      <div className="checkoutProductRight">
        <div className="topRow">
          <h5>{title}</h5>
          <div className="counter">
            <button>-</button>
            <span>{cartSum}</span>
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
