import React from "react";
import "./Payment.scss";

function Payment() {
  return (
    <div className="payment">
      <h2 className="paymentTitle">어떻게 주문하시겠습니까?</h2>
      <form className="pointForm">
        <div className="pointTitle">
          <img alt="point logo" src="/images/Order/point_logo.png" />
          <span className="pointText">포인트</span>
        </div>
        <div>
          <label for="totalPoint">
            보유 <input type="text" id="totalPoint" />
            <span className="pointUnit">원</span>
          </label>
        </div>
        <div>
          <label for="pricePoint">
            사용 <input type="text" id="pricePoint" />
            <span className="pointUnit">원</span>
          </label>
        </div>
        <div className="contractWrapper">
          <div>
            <label for="agreeAll">
              <input type="checkbox" id="agreeAll" />
              전체 동의
            </label>
          </div>
          <div>
            <label for="ageCheck">
              <input type="checkbox" id="ageCheck" />
              본인은 만 14세 이상입니다 (필수)
            </label>
          </div>
          <div>
            <label for="useTerms">
              <input type="checkbox" id="useTerms" />
              이용 약관에 동의합니다 (필수)
            </label>
          </div>
          <div>
            <label for="privacy">
              <input type="checkbox" id="privacy" />
              개인정보 수집 및 이용조건에 동의합니다 (필수)
            </label>
          </div>
          <div>
            <label for="orderCheck">
              <input type="checkbox" id="orderCheck" />
              주문내역을 확인했으며, 이에 동의합니다 (필수)
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;
