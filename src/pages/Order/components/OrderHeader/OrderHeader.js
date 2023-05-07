import React from "react";
import "./OrderHeader.scss";
import { Link, useNavigate } from "react-router-dom";

function OrderHeader({ isDelivery, setIsDelivery }) {
  const handleDeliveryNavBar = () => {
    setIsDelivery(true);
  };
  const handlePaymentNavBar = () => {
    setIsDelivery(false);
  };
  const navigate = useNavigate();

  // console.log("isDelivery 상태값? ", isDelivery);
  return (
    <div className="orderHeader">
      <header>
        <ul className="orderNav">
          <li
            className={isDelivery ? "orderNavActive" : "orderNavInactive"}
            onClick={handleDeliveryNavBar}
          >
            <a>배송 정보</a>
          </li>
          <img
            className="orderNavArrow"
            src="/images/order/arrow-small.png"
            alt="arrow"
          />
          <span />
          <li
            className={!isDelivery ? "orderNavActive" : "orderNavInactive"}
            onClick={handlePaymentNavBar}
          >
            <a>결제 방법</a>
          </li>
          <img
            className="orderNavArrow"
            src="/images/order/arrow-small.png"
            alt="arrow"
          />
          <li
            className="orderNavInactive invoiceNav"
            onClick={() => {
              navigate("/invoice");
            }}
          >
            <Link to="/invoice">주문 확인</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default OrderHeader;
