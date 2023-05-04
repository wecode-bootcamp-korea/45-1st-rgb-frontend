import React from "react";
import "./Cart.scss";
//import CartRight from "./CartRight";
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
        {/* 오른쪽 카트 입력칸 */}
        {/* <CartRight /> */}
      </div>
    </div>
  );
}

export default Cart;
