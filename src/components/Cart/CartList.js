import React from "react";
import CartSum from "./CartSum";
import "./Cart.scss";

export default function CartList() {
  return (
    <>
      <div className="cartItem">
        <div className="itemName">Product 1</div>
        <div className="itemSize">220 x 480 / 아크릴</div>
        <div className="itemQuantity">
          <button className="minus" />1<button className="plus" />
        </div>
        <div className="itemPrice">790,0000 원</div>
        <div className="cartDelete">
          <button className="deleteButton" />
        </div>
      </div>
      <div className="cartItem">
        <div className="itemName">Product 2</div>
        <div className="itemSize">220 x 480 / 아크릴</div>
        <div className="itemQuantity">
          <button className="minus" />1<button className="plus" />
        </div>
        <div className="itemPrice">790,0000 원</div>
        <div className="cartDelete">
          <button className="deleteButton" />
        </div>
      </div>

      <CartSum />
    </>
  );
}
