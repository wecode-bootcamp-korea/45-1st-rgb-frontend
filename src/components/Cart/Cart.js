import React from "react";
import "./Cart.scss";
import CartList from "./CartList";

function Cart() {
  return (
    <div className="cart">
      <div className="cartBox">
        <div className="cartLeft">
          <div className="cartList">
            <div className="cartTitle">카트</div>
            <div className="cartSize">사이즈</div>
            <div className="cartQuantity">수량</div>
            <div className="cartPrice">가격</div>
            <div className="cartEmpty" />
          </div>
          <CartList />
        </div>
      </div>
    </div>
  );
}

export default Cart;
