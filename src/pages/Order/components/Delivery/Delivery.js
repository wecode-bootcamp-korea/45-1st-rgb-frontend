import React, { useState } from "react";
import "./Delivery.scss";
import Button from "../../../../components/Button/Button";

function Delivery({ userData, setUserData, setIsDelivery }) {
  console.log("userData", userData);
  const [isInputOpen, setIsInputOpen] = useState(false);

  /*   // user data 상태 관리 -> 이 data를 서버에 post 요청을 통해 넘겨줘야 한다.
  const [userInfo, setUserInfo] = useState({
    address: "",
    postalcode: "",
    cellphone: "",
    points: "",
  });
 */
  const handleNextPageBtn = event => {
    console.log("e! ", event);
    event.preventDefault();
    // postUserDeliveryData();
    goToPayment();
  };

  const postUserDeliveryData = () => {
    fetch("http://10.58.52.222:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: "", //요구하는 키값에 맞춰 헤더에 토큰을 담아 보낸다. authorization
      },
      body: JSON
        .stringify
        // userInfo
        /* address: "상세주소 state로 업데이트하기", userInfo.address
        postalcode: "12569",
        cellphone:
          "12345678 - string type으로 보내야 하나? 유저가 입력한 8자리 숫자만 받아오기+상태관리", */
        (),
    });
  };

  const goToPayment = () => {
    setIsDelivery(false);
  };

  // 인풋창 값 받아오기
  const handleCellphoneInput = e => {
    setUserData({ ...userData, cellphone: e.target.value });
  };

  // 전화번호에 숫자 입력만 받기
  const acceptOnlyNumbers = e => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  return (
    <div className="delivery">
      <img
        className="leftArrow"
        alt="left arrow"
        src="/images/Order/arrow2.png"
      />
      <h2 className="deliveryTitle">주문을 어디로 보내시겠습니까?</h2>
      <form className="deliveryForm">
        <div className="inputFormWrapper">
          <div className="userInfoForm">
            <h3 className="formTitle">주문자 정보</h3>
            <div className="inputNameWrap">
              <div className="familyNameWrap">
                <input
                  className="familyName"
                  type="text"
                  placeholder="성"
                  readOnly
                />
                <span className="userFamilyName">{userData?.first_name}</span>
              </div>
              <div className="firstNameWrap">
                <input
                  className="firstName"
                  type="text"
                  placeholder="이름"
                  readOnly
                />
                <span className="userFirstName">{userData?.last_name}</span>
              </div>
            </div>
            <input
              className="phoneNumber"
              name="cellphone"
              type="text"
              placeholder="전화번호(010-0000-0000)"
              maxLength="13"
              onInput={acceptOnlyNumbers}
              onChange={handleCellphoneInput}
            />
          </div>
          <div className="deliveryInfoForm">
            <h3 className="formTitle">배송지 정보</h3>
            <div className="addressInput">
              <input
                type="text"
                placeholder="상세주소 (아파트 동, 호수, 일반 주택 등)"
              />
            </div>
            <div className="postInput">
              <input type="text" placeholder="우편번호" />
            </div>
          </div>

          <div className="labelWrapper">
            <label className="default">
              <input type="checkbox" id="default" />
              <label for="default" />이 주소를 기본 배송지로 저장합니다
            </label>
            <label className="identical">
              <input id="identical" type="checkbox" />
              <label for="identical" />
              주문자 정보와 배송지 정보가 동일합니다
            </label>
          </div>
          <br />

          {/* 글자 선택하면 하단의 인풋창 나오도록 다시 만들기 */}
          <div className="requestInputWrapper">
            <div className="request" htmlFor="request">
              <input id="request" type="checkbox" />
              <label
                htmlFor="request"
                onClick={() => setIsInputOpen(!isInputOpen)}
              />
              배송 기사님께 요청 사항이 있습니다
            </div>
            {isInputOpen && <input type="text" className="requestInput" />}
          </div>
        </div>
        <Button
          buttonSize="bigButton"
          buttonColor="dark"
          action={handleNextPageBtn}
        >
          다음 페이지
        </Button>
      </form>
    </div>
  );
}

export default Delivery;
