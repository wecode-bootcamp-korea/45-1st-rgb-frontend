import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckInput from "../CheckBox/CheckInput";
import "./Payment.scss";

function Payment({ userData, totalPrice, setIsDelivery, cartProductList }) {
  console.log(userData);
  const [checkInputs, setCheckInputs] = useState([]);

  const activatedPaymentButtonCondition = checkInputs.length === 3;

  const totalPriceInComma = Number(totalPrice / 1000).toLocaleString();

  const navigate = useNavigate();

  const totalPoints = parseInt(userData?.points).toLocaleString();

  const handlePrevComponent = () => {
    setIsDelivery(true);
  };

  const orderedProductsArr = cartProductList.map(cartItem => {
    return {
      productId: String(cartItem.id),
      quantity: cartItem.cartSum,
    };
  });

  const token = localStorage.getItem("token");

  const postOrderData = () => {
    fetch("http://10.58.52.141:3000/orders/place-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: token,
      },
      body: JSON.stringify({
        products: orderedProductsArr,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === "success") {
          alert("결제 완료되었습니다");
        } else {
          alert("다시 시도해주세요");
        }
      });
  };

  const postUserData = () => {
    fetch("http://10.58.52.141:3000/getUserData", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ userData }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => console.log("통신 성공! ", data));
  };

  const handlePayButton = e => {
    e.preventDefault();
    postOrderData();
    postUserData();
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
            보유 <input type="text" id="totalPoint" readOnly />
            <span className="pointUnit">{totalPoints}&nbsp;P</span>
          </label>
        </div>

        <div>
          <label className="pointLabel" htmlFor="pricePoint">
            사용 <input type="text" id="pricePoint" readOnly />
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
