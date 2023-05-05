import React from "react";
import "./Payment.scss";
import Button from "../../../../components/Button/Button";
import CheckBox from "../CheckBox/CheckBox";

function Payment() {
  return (
    <div className="payment">
      <h2 className="paymentTitle">이대로 주문하시겠습니까?</h2>
      <form className="pointForm">
        <div className="pointTitle">
          <img alt="point logo" src="/images/Order/point_logo.png" />
          <span className="pointText">포인트</span>
        </div>
        <div>
          <label className="pointLabel" for="totalPoint">
            보유 <input type="text" id="totalPoint" />
            <span className="pointUnit">원</span>
          </label>
        </div>
        <div>
          <label className="pointLabel" for="pricePoint">
            사용 <input type="text" id="pricePoint" />
            <span className="pointUnit">원</span>
          </label>
        </div>
        <div className="contractWrapper">
          <div>
            <label className="agreeAll" for="agreeAll">
              <input type="checkbox" id="agreeAll" />
              <label for="agreeAll" />
              전체 동의
            </label>
          </div>
          <div className="agreementDetail">
            <label className="ageCheck" for="ageCheck">
              <input type="checkbox" id="ageCheck" />
              <label for="ageCheck" />
              본인은 만 14세 이상입니다 (필수)
            </label>
          </div>

          <div className="agreementDetail">
            <label className="privacy" for="privacy">
              <input type="checkbox" id="privacy" />
              <label for="privacy" />
              개인정보 수집 및 이용조건에 동의합니다 (필수)
            </label>
            <img
              className="arrowBottom"
              alt="toggle arrow"
              src="/images/order/Expand Arrow.png"
            />
          </div>
          <div className="agreementDetail">
            <label className="orderCheck" for="orderCheck">
              <input type="checkbox" id="orderCheck" />
              <label for="orderCheck" />
              주문내역을 확인했으며, 이에 동의합니다 (필수)
            </label>
          </div>
          <CheckBox />
        </div>
        <Button
          buttonSize="bigButton"
          buttonColor="dark"
          buttonName="결제하기"
        />
      </form>
    </div>
  );
}

export default Payment;
