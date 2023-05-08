import React from "react";
import "./Payment.scss";
// import Button from "../../../../components/Button/Button";
// import CheckBox from "../CheckBox/CheckBox";
import CheckInput from "../CheckBox/CheckInput";
import { useNavigate } from "react-router-dom";

function Payment({ userData, totalPrice, setIsDelivery, cartProductList }) {
  const totalPriceInComma = Number(totalPrice / 1000).toLocaleString();

  const navigate = useNavigate();

  const totalPoints = parseInt(userData?.points).toLocaleString();

  const handlePrevComponent = () => {
    setIsDelivery(true);
  };

  /*   const postUserDeliveryData = () => {
    fetch("http://10.58.52.222:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: "", //요구하는 키값에 맞춰 헤더에 토큰을 담아 보낸다. authorization
      },
      // body: JSON.stringify({ ...userData, points: priceSum }),
      // userInfo
      // address: "상세주소 state로 업데이트하기", userInfo.address
      //   postalcode: "12569",
      //   cellphone:
      //     "12345678 - string type으로 보내야 하나? 유저가 입력한 8자리 숫자만 받아오기+상태관리",
    });
  };
 */

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
      body: { userId: userData.id, products: orderedProductsArr },
      // JSON.stringify({ userId: userData.id, products: orderedProductsArr }),
    })
      .then(response => {
        console.log(response);
        response.json();
      })
      .then(data => {
        if (data.message === "success") {
          alert("결제 완료되었습니다");
        } else {
          alert("다시 시도해주세요");
        }
      });
  };

  console.log("payment에서의 userData ", userData);

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
        className="leftArrow"
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

/* const PAYMENT_TERMS = [
  {
    id: 1,
    text: "본인은 만 14세 이상입니다 (필수)",
  },
  {
    id: 2,
    text: "개인정보 수집 및 이용 조건에 동의합니다 (필수)",
  },
];
 */
