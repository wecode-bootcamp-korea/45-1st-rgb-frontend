import React, { useState } from "react";
import "./Delivery.scss";
import Button from "../../../../components/Button/Button";

function Delivery({ userList }) {
  const [isInputOpen, setIsInputOpen] = useState(false);

  return (
    <div className="delivery">
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
                <span className="userFamilyName">
                  {userList[0]?.first_name}
                </span>
              </div>
              <div className="firstNameWrap">
                <input
                  className="firstName"
                  type="text"
                  placeholder="이름"
                  readOnly
                />
                <span className="userFirstName">{userList[0]?.last_name}</span>
              </div>
            </div>
            <input className="phoneNumber" type="text" placeholder="전화번호" />
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
        <Button buttonSize="bigButton" buttonColor="dark">
          다음 페이지
        </Button>
      </form>
    </div>
  );
}

export default Delivery;
