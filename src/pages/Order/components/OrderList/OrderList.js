import React from "react";
import "./OrderList.scss";
import CheckoutProduct from "./components/CheckoutProduct";

function OrderList({ cartProductList, totalPrice }) {
  /*  // 왜 배송지 정보 인풋을 입력하면 cartProductList 정보가 렌더링되나......이거 수정해야할듯.ㅜㅜ
  console.log(cartProductList); */
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
          {cartProductList.map(cartItem => {
            return <CheckoutProduct key={cartItem.id} cartItem={cartItem} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderList;
