import React from "react";
import "./Cart.scss";
import CartList from "./CartList";

function Cart({ showCart, setShowCart, cartItems }) {
  const handleClose = () => {
    setShowCart(false);
  };

  return (
    <div className="cart">
      <div className="cartBox">
        <div className="cartContainer">
          <div className={`cart ${showCart ? "show" : ""}`}>
            <CartList cartItems={cartItems} handleClose={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
