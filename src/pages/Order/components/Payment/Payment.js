import React from "react";
import "./Payment.scss";
import Button from "../../../../components/Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import { useNavigate } from "react-router-dom";

function Payment({
  userData,
  totalPrice,
  setUserData,
  productList,
  setIsDelivery,
  cartProductList,
  setCartProductList,
}) {
  const totalPriceInComma = Number(totalPrice / 1000).toLocaleString();

  const navigate = useNavigate();
  // 보유 포인트 콤마 사용하여 입력
  const totalPoints = parseInt(userData?.points / 1000).toLocaleString();

  const handlePrevComponent = () => {
    setIsDelivery(true);
  };

  /*   const postProductInfo = () => {
    fetch("http://10.58.52.222:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: "",
      },
      body: JSON.stringify(productList),
    });
  };
 */
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
  console.log("결제하기 버튼 단계 ", cartProductList, userData);

  const updatedOrderData = {
    products: cartProductList.map(cartItem => {
      return {
        productId: String(cartItem.id),
        quantity: cartItem.cartSum,
      };
    }),
  };

  console.log("updatedOrderData", updatedOrderData);

  // 최종 주문 데이터 넘겨주기.
  const postOrderData = () => {
    fetch("http://10.58.52.141:3000/orders/place-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(cartProductList),
    })
      .then(response =>
        response.json({ userId: userData.id, updatedOrderData })
      )
      .then(data => {
        if (data.message === "success") {
          alert("결제 완료되었습니다");
        } else {
          alert("다시 시도해주세요");
        }
      });
  };

  // 결제하기 버튼
  const handlePayButton = e => {
    e.preventDefault();
    setUserData({ ...userData, points: String(totalPrice / 1000) });
    // postUserDeliveryData();
    // postProductInfo();
    postOrderData();
    navigate("/invoice");
  };

  console.log("결제하기 버튼 클릭 이후, ", userData);

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
          <label className="pointLabel" for="totalPoint">
            보유 <input type="text" id="totalPoint" readOnly />
            <span className="pointUnit">{totalPoints}&nbsp;P</span>
          </label>
        </div>

        <div>
          <label className="pointLabel" for="pricePoint">
            사용 <input type="text" id="pricePoint" readOnly />
            <span className="pointUnit">{totalPriceInComma}&nbsp;P</span>
          </label>
        </div>

        {/* 이용약관 동의 인풋 */}
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
