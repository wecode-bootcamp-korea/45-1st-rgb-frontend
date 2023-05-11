import React from "react";
import "./OrderList.scss";
import CheckoutProduct from "./components/CheckoutProduct";

function OrderList({ cartProductList, totalPrice }) {
  const totalPriceComma = Number(totalPrice).toLocaleString();

  return (
    <div className="orderList">
      <div className="orderListBox">
        <div className="orderItemWrapper">
          <ul className="orderItem">
            <li>소계(세금 포함)</li>
            <li>{totalPriceComma}P</li>
          </ul>
          <ul className="orderItem">
            <li>배송비</li>
            <li>0</li>
          </ul>
          <ul className="orderItem">
            <li>포함된 세금</li>
            <li>0</li>
          </ul>
          <ul className="orderItem">
            <li>합계</li>
            <li>{totalPriceComma}P</li>
          </ul>
        </div>
        <div className="checkoutProductsBox">
          {cartProductList.map(cartItem => {
            return <CheckoutProduct key={cartItem.id} cartItem={cartItem} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderList;
