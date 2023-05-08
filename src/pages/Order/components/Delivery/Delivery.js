import React, { useState } from "react";
import "./Delivery.scss";
import Button from "../../../../components/Button/Button";

function Delivery({ userData, setUserData, setIsDelivery }) {
  const [isInputOpen, setIsInputOpen] = useState(false);

  const handleNextPageBtn = e => {
    e.preventDefault();
    goToPayment();
  };

  const goToPayment = () => {
    setIsDelivery(false);
  };

  // 인풋창 값 받아오기 + setUserData하기
  const handleCellphoneInput = e => {
    if (e.target.value === "") return;
    setUserData({ ...userData, cellphone: e.target.value });
  };

  // 전화번호에 숫자 입력만 받기
  const acceptOnlyNumbers = e => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  // 주소창 인풋창 값 받아오기 + setUserData하기
  const handleAddressInput = e => {
    setUserData({ ...userData, address: e.target.value });
  };

  const getPostalCode = e => {
    setUserData({ ...userData, postalcode: e.target.value });
  };

  // 모든 인풋창의 엔터키 막기
  const preventEnterKey = e => {
    if (e.code === "Enter") {
      e.preventDefault();
    }
  };

  const activatedButtonCondition =
    userData?.cellphone?.length === 8 &&
    userData.address !== "" &&
    userData.postalcode.length >= 5;

  return (
    <div className="delivery">
      <img
        className="leftArrow"
        alt="left arrow"
        src="/images/Order/arrow2.png"
      />
      <h2 className="deliveryTitle">주문을 어디로 보내시겠습니까?</h2>
      <form className="deliveryForm" onSubmit={e => e.preventDefault()}>
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
              placeholder="전화번호 뒷 8자리를 입력해주세요"
              maxLength="8"
              onKeyDown={preventEnterKey}
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
                name="address"
                onKeyDown={preventEnterKey}
                onChange={handleAddressInput}
              />
            </div>
            <div className="postInput">
              <input
                type="text"
                placeholder="우편번호"
                maxLength="5"
                name="postalcode"
                onKeyDown={preventEnterKey}
                onInput={acceptOnlyNumbers}
                onChange={getPostalCode}
              />
            </div>
          </div>

          <div className="labelWrapper">
            <label className="default">
              <input type="checkbox" id="default" />
              <label htmlFor="default" />이 주소를 기본 배송지로 저장합니다
            </label>
            <label className="identical">
              <input id="identical" type="checkbox" />
              <label htmlFor="identical" />
              주문자 정보와 배송지 정보가 동일합니다
            </label>
          </div>
          <br />

          <div className="requestInputWrapper">
            <div className="request" htmlFor="request">
              <input id="request" type="checkbox" />
              <label
                htmlFor="request"
                onClick={() => setIsInputOpen(!isInputOpen)}
              />
              배송 기사님께 요청 사항이 있습니다
            </div>
            {isInputOpen && (
              <input
                type="text"
                className="requestInput"
                onKeyDown={preventEnterKey}
              />
            )}
          </div>
        </div>
        <button
          onClick={handleNextPageBtn}
          className={
            activatedButtonCondition
              ? `bigButton dark activate`
              : `bigButton buttonOff`
          }
          disabled={!activatedButtonCondition}
        >
          다음페이지
        </button>
        {/*  <Button
          buttonSize="bigButton"
          buttonColor="dark"
          // submitAction={handleNextPageBtn}
        >
          다음 페이지
        </Button> */}
      </form>
    </div>
  );
}

export default Delivery;
