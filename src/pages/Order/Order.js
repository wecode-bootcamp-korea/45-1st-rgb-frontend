import React from "react";
import "./Order.scss";

function Order() {
  return (
    <div className="order">
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
      <div className="orderBox">
        <div className="orderBoxLeft">
          <h2 className="orderBoxLeftTitle">주문을 어디로 보내시겠습니까?</h2>
          <form className="orderBoxLeftForm">
            <h3>주문자 정보</h3>
            <div className="inputNameWrap">
              <input placeholder="성" />
              <input placeholder="이름" />
            </div>
            <h3>배송지 정보</h3>
          </form>
        </div>
        <div className="loginBoxRight">
          <div>주문내역 박스(예정)</div>
        </div>
      </div>
    </div>
  );
}

export default Order;
