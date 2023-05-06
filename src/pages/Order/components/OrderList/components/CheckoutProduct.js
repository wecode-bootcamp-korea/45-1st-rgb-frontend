import React from "react";
import "./CheckoutProduct.scss";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <div className="thumbnailWrap">
        <img
          alt="product thumbnail"
          src="https://images.pexels.com/photos/3792175/pexels-photo-3792175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="checkoutProductRight">
        <div className="topRow">
          <h5>Dots 2023</h5>
          <div className="counter">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
        <div className="bottomRow">
          <button>삭제</button>
          <span>$2600</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
