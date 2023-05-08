import React, { useState } from "react";
import "./Cart.scss";
import CartList from "./CartList";

function Cart() {
  return (
    <div className="cart">
      <div className="cartBox">
        <div className="cartContainer">
          <div className="cartCategoryBox">
            <div className="cartCategory">카트</div>
            <div className="cartCategory">사이즈</div>
            <div className="cartCategory">수량</div>
            <div className="cartCategory">가격</div>
            <div className="cartCategory" />
          </div>
          <CartList />
        </div>
      </div>
    </div>
  );
}

export default Cart;
