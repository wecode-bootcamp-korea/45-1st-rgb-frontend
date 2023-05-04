import { React, useState } from "react";
import CartSum from "./CartSum";
import "./Cart.scss";

export default function CartList() {
  const [number, setNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(790000);

  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1);
      setTotalPrice((number - 1) * 8000000);
    }
  };
  const increment = () => {
    setNumber(number + 1);
    setTotalPrice((number + 1) * 8000000);
  };

  return (
    <>
      <div className="cartItem">
        <div className="itemName">Product 1</div>
        <div className="itemSize">220 x 480 / 아크릴</div>
        <div className="itemQuantity">
          <button className="minus" onClick={decrement}>
            -
          </button>
          {number}
          <button className="plus" onClick={increment}>
            +
          </button>
        </div>
        <div className="itemPrice">{totalPrice}원</div>
        <div className="cartDelete">
          <button className="deleteButton" />
        </div>
      </div>

      <CartSum totalPrice={totalPrice} />
    </>
  );
}
