import React, { useEffect, useState } from "react";
import "./Delivery.scss";

function Delivery({ userData, setUserData, setIsDelivery, setIsCart }) {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [isDefaultAddressChecked, setIsDefaultAddressChecked] = useState(false);

  const handlePrevArrowBtn = () => {
    setIsCart(true);
  };

  const handleNextPageBtn = e => {
    e.preventDefault();
    goToPayment();
  };

  const goToPayment = () => {
    setIsDelivery(false);
  };

  const handleInputs = e => {
    const { name, value } = e.target;
    // if (value === "") alert("배송 정보를 입력해주세요.");
    setUserData({ ...userData, [name]: value });
  };

  const acceptOnlyNumbers = e => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  const preventEnterKey = e => {
    if (e.code === "Enter") {
      e.preventDefault();
    }
  };

  const activatedButtonCondition =
    userData.cellphone?.length === 8 &&
    userData?.address !== "" &&
    userData.postalcode?.length >= 5;

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!isDefaultAddressChecked) return;

    console.log("인풋 체크되서, [POST] userAddress[GET] userData 실행!!");

    // [POST] userAddress
    fetch("http://10.58.52.169:9001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY4MzYxMDY0Nn0.8m5ZuyVgy_u1g-wiW1v4RHX_WB5Q7QZpSAQsfjvUst8",
      },
      body: JSON.stringify({
        cellphone: userData?.cellphone,
        address: userData?.address,
        postalcode: userData?.postalcode,
      }),
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        console.log(data);
      });
  }, [
    isDefaultAddressChecked,
    userData?.cellphone,
    userData?.address,
    userData?.postalcode,
  ]);

  // 여기가 기본 배송지 저장 기능!
  const handleDefaultAddress = () => {
    console.log(isDefaultAddressChecked);
    setIsDefaultAddressChecked(!isDefaultAddressChecked);
  };

  return (
    <div className="delivery">
      <img
        className="goBackArrow"
        alt="left arrow"
        src="/images/Order/arrow2.png"
        onClick={handlePrevArrowBtn}
      />
      <h2 className="deliveryTitle">주문을 어디로 보내시겠습니까?</h2>
      <form className="deliveryForm" onSubmit={e => e.preventDefault()}>
        <div className="inputFormWrapper">
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

          {/* 여기서부터 수정 필요!! */}
          <div className="cellphoneWrap">
            <label className="phonePlaceholder" htmlFor="cellphone">
              전화번호 뒷 8자리
            </label>
            <input
              id="cellphone"
              className="phoneNumberInput"
              name="cellphone"
              type="text"
              maxLength="8"
              onKeyDown={preventEnterKey}
              onInput={acceptOnlyNumbers}
              onChange={handleInputs}
              readOnly={isDefaultAddressChecked}
            />
            <span className="userPhoneNumber">{userData?.cellphone}</span>
          </div>
          <div className="deliveryInfoForm">
            <h3 className="formTitle">배송지 정보</h3>
            <div className="addressInput">
              <label className="addressPlaceholder" htmlFor="address">
                상세주소
              </label>
              <input
                id="address"
                className="address"
                type="text"
                name="address"
                onKeyDown={preventEnterKey}
                onChange={handleInputs}
                readOnly={isDefaultAddressChecked}
                // value="상세주소"
              />
              <span className="userAddress">{userData?.address}</span>
            </div>
            <div className="postInput">
              <label className="postalPlaceholder" htmlFor="postalcode">
                우편번호
              </label>
              <input
                id="postalcode"
                className="postalcode"
                type="text"
                maxLength="5"
                name="postalcode"
                onKeyDown={preventEnterKey}
                onInput={acceptOnlyNumbers}
                onChange={handleInputs}
                readOnly={isDefaultAddressChecked}
                // value="우편번호"
              />
              <span className="userPostalcode">{userData?.postalcode}</span>
            </div>
          </div>

          <div className="labelWrapper">
            <label className="default">
              <input
                type="checkbox"
                id="default"
                onChange={handleDefaultAddress}
              />
              이 주소를 기본 배송지로 저장합니다
            </label>
          </div>
          <br />

          <div className="requestInputWrapper">
            <label for="requestInput">
              <input id="requestInput" type="checkbox" />
              <label
                className="request"
                htmlFor="requestInput"
                onClick={() => setIsInputOpen(!isInputOpen)}
              >
                배송 기사님께 요청 사항이 있습니다
              </label>
            </label>
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
      </form>
    </div>
  );
}

export default Delivery;
