import React from "react";
import "./Payment.scss";
import CheckInput from "../CheckBox/CheckInput";
import { useNavigate } from "react-router-dom";

function Payment({ userData, totalPrice, setIsDelivery, cartProductList }) {
  console.log("🍈", userData);
  const { user } = userData;
  console.log("🍈", user.id);

  const totalPriceInComma = Number(totalPrice / 1000).toLocaleString();

  const navigate = useNavigate();

  const totalPoints = parseInt(user?.points).toLocaleString();

  const handlePrevComponent = () => {
    setIsDelivery(true);
  };

  const orderedProductsArr = cartProductList.map(cartItem => {
    return {
      productId: String(cartItem.id),
      quantity: cartItem.cartSum,
    };
  });

  // 최종 주문 데이터 넘겨주기.
  const postOrderData = () => {
    fetch("http://10.58.52.141:3000/orders/place-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: { userId: user.id, products: orderedProductsArr },
      // JSON.stringify({ userId: userData.id, products: orderedProductsArr }),
    })
      .then(response => {
        console.log(response);
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
      // body: { userData },
      body: JSON.stringify({ userData }),
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => console.log("통신 성공! ", data));
  };

  // 결제하기 버튼
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

        {/* 이용약관 동의 인풋 */}
        <div className="contractWrapper">
          {/* <div>
            <label className="agreeAll" htmlFor="agreeAll">
              <input type="checkbox" id="agreeAll" />
              <label htmlFor="agreeAll" />
              전체 동의
            </label>
          </div>
          <div className="agreementDetail">
            <label className="ageCheck" htmlFor="ageCheck">
              <input type="checkbox" id="ageCheck" />
              <label htmlFor="ageCheck" />
              본인은 만 14세 이상입니다 (필수)
            </label>
          </div>

          <div className="agreementDetail">
            <label className="privacy" htmlFor="privacy">
              <input type="checkbox" id="privacy" />
              <label htmlFor="privacy" />
              개인정보 수집 및 이용조건에 동의합니다 (필수)
            </label>
            <img
              className="arrowBottom"
              alt="toggle arrow"
              src="/images/order/Expand Arrow.png"
            />
          </div>
          <div className="agreementDetail">
            <label className="orderCheck" htmlFor="orderCheck">
              <input type="checkbox" id="orderCheck" />
              <label htmlFor="orderCheck" />
              주문내역을 확인했으며, 이에 동의합니다 (필수)
            </label>
          </div> */}
          <CheckInput />
          {/* <CheckBox
            className="testBox"
            inputText="주문내역을 확인했으며, 이에 동의합니다 (필수)"
          />
          <CheckBox inputText="체크박스 컴포넌트 생성!" /> */}
          {/*  {PAYMENT_TERMS.map(term => {
            return <CheckBox key={term.id} term={term} />;
          })} */}
          {/*  {PAYMENT_TERMS.map(term => {
            return <input type="checkbox" key={term.id} term={term} />;
          })} */}
        </div>
        <button className="bigButton dark" onClick={handlePayButton}>
          결제하기
        </button>
        {/* <Button buttonSize="bigButton" buttonColor="dark">
          결제하기
        </Button> */}
      </form>
    </div>
  );
}

export default Payment;
