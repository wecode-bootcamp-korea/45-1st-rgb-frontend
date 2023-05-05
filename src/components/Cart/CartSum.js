import React from "react";
import Button from "../Button/Button";

export default function CartSum({ totalPrice }) {
  return (
    <div className="cartSumBox">
      <div className="cartSummary">
        <div className="bottomPadding">
          <span className="cartFree">전 제품 무료 배송 혜택을 즐겨보세요.</span>
          <div className="totalPrice">
            <span className="vat">소계(세금 포함)</span>
            <span className="sum">{totalPrice}원</span>
          </div>
          <div className="payBtn">
            <Button action="/" buttonSize="mediumButton" buttonColor="bright">
              결제하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
