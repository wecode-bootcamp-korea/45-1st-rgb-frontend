import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckInput from "../CheckBox/CheckInput";
import "./Payment.scss";
import { API_ADDRESS_ORDERS } from "../../../../utils/API_ADDRESS";

function Payment({ userData, totalPrice, setIsDelivery, cartProductList }) {
  const [checkInputs, setCheckInputs] = useState([]);

  const activatedPaymentButtonCondition = checkInputs.length === 3;

  const totalPriceInComma = Number(totalPrice / 1000).toLocaleString();

  const navigate = useNavigate();

  const totalPoints = parseInt(userData?.points).toLocaleString();

  const handlePrevComponent = () => {
    setIsDelivery(true);
  };

  const token = localStorage.getItem("TOKEN");

  const postOrderData = () => {
    fetch(`${API_ADDRESS_ORDERS}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: token,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === "Order placed successfully") {
          navigate(`/invoice/${data.orderNumber}`);
          alert("결제 완료되었습니다");
        } else {
          alert("다시 시도해주세요");
        }
      });
  };

  const handlePayButton = e => {
    e.preventDefault();
    postOrderData();
    navigate("/invoice");
  };

  return (
    <div className="payment">
      <img
        className="goBackArrow"
        alt="left arrow"
        src="/images/Order/arrow2.png"
        onClick={handlePrevComponent}
      />
      <h2 className="paymentTitle">이대로 주문하시겠습니까?</h2>
      <form className="pointForm">
        <div className="pointTitle">
          <img alt="point logo" src="/images/Order/point_logo.png" />
          <span className="pointText">포인트</span>
        </div>
        <div>
          <label className="pointLabel" htmlFor="totalPoint">
            <div>
              <span>보유</span> <input type="text" id="totalPoint" readOnly />
            </div>
            <span className="pointUnit">{totalPoints}&nbsp;P</span>
          </label>
        </div>

        <div>
          <label className="pointLabel" htmlFor="pricePoint">
            <div>
              <span>사용</span> <input type="text" id="pricePoint" readOnly />
            </div>
            <span className="pointUnit">{totalPriceInComma}&nbsp;P</span>
          </label>
        </div>

        <div className="contractWrapper">
          <CheckInput
            checkInputs={checkInputs}
            setCheckInputs={setCheckInputs}
          />
        </div>
        <button
          className={
            !activatedPaymentButtonCondition
              ? `bigButton buttonOff`
              : `bigButton dark`
          }
          disabled={!activatedPaymentButtonCondition}
          onClick={handlePayButton}
        >
          결제하기
        </button>
      </form>
    </div>
  );
}

export default Payment;
