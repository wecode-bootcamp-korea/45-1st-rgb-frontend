import React from "react";
import "./OrderHeader.scss";
import { useNavigate } from "react-router-dom";

function OrderHeader({ isDelivery, setIsDelivery }) {
  const handleDeliveryNavBar = () => {
    setIsDelivery(true);
  };
  const handlePaymentNavBar = () => {
    setIsDelivery(false);
  };
  const navigate = useNavigate();

  return (
    <div className="orderHeader">
      <header>
        <ul className="orderNav">
          <li
            className={isDelivery ? "orderNavActive" : "orderNavInactive"}
            onClick={handleDeliveryNavBar}
          >
            배송 정보
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
            결제 방법
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
            주문 확인
          </li>
        </ul>
      </header>
    </div>
  );
}

export default OrderHeader;
