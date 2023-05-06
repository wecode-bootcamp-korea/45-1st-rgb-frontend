import React from "react";
import "./OrderList.scss";
import CheckoutProduct from "./components/CheckoutProduct";

function OrderList({ productList }) {
  const getSum = productList => {
    let sum = 0;
    productList.forEach(product => {
      sum += parseInt(product?.price);
    });
    return sum;
  };

  let totalPrice = getSum(productList);
  const totalPriceComma = Number(totalPrice).toLocaleString();

  return (
    <div className="orderList">
      <div className="orderListBox">
        <div className="orderItemWrapper">
          <ul className="orderItem">
            <li>소계(세금 포함)</li>
            <li>₩{totalPriceComma}</li>
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
            <li>₩{totalPriceComma}</li>
          </ul>
        </div>
        <div className="checkoutProductsBox">
          {productList.map(product => {
            return <CheckoutProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderList;
