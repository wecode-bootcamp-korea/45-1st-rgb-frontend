import React from "react";
import CartSum from "./CartSum";

export default function CartList() {
  return (
    <>
      <div className="cartItem">
        <div className="itemName">Product 1</div>
        <div className="itemSize">220 x 480 / 아크릴</div>
        <div className="itemQuantity">1</div>
        <div className="itemPrice">790,0000 원</div>
      </div>
      <div className="cartItem">
        <div className="itemName">Product 2</div>
        <div className="itemSize">220 x 480 / 아크릴</div>
        <div className="itemQuantity">1</div>
        <div className="itemPrice">790,0000 원</div>
      </div>
      <CartSum />
    </>
  );
}
