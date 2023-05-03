import React from "react";
import "./OrderHeader.scss";

function OrderHeader() {
  return (
    <div className="orderHeader">
      <header>
        <ul className="orderNav">
          <li className="orderNavActive">
            <a>배송 정보</a>
          </li>
          <img
            className="orderNavArrow"
            src="/images/order/arrow-small.png"
            alt="arrow"
          />
          <span />
          <li className="orderNavInactive">
            <a>결제 방법</a>
          </li>
          <img
            className="orderNavArrow"
            src="/images/order/arrow-small.png"
            alt="arrow"
          />
          <li className="orderNavInactive">
            <a>주문 확인</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default OrderHeader;
