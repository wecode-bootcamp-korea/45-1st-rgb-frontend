import React from "react";
import "./Delivery.scss";
import Button from "../../../../components/Button/Button";

function Delivery() {
  return (
    <div className="delivery">
      <h2 className="deliveryTitle">주문을 어디로 보내시겠습니까?</h2>
      <form className="deliveryForm">
        <div className="inputFormWrapper">
          <div className="userInfoForm">
            <h3 className="formTitle">주문자 정보</h3>
            <div className="inputNameWrap">
              <input className="familyName" type="text" placeholder="성" />
              <input className="firstName" type="text" placeholder="이름" />
            </div>
            <input className="phoneNumber" type="text" placeholder="전화번호" />
          </div>
          <div className="deliveryInfoForm">
            <h3 className="formTitle">배송지 정보</h3>
            <div className="addressInput">
              <input type="text" placeholder="주소" />
            </div>
            <div className="addressDetailInput">
              <input
                type="text"
                placeholder="상세주소(아파트 동, 호수, 일반 주택 등)"
              />
            </div>
          </div>
          <label>
            <input type="checkbox" size="10" maxLength="10" />이 주소를 기본
            배송지로 저장합니다
          </label>
          <div>
            <label>
              <input type="checkbox" />
              주문자 정보와 배송지 정보가 동일합니다
            </label>
          </div>
          <br />
          <div className="requestInputWrapper">
            <label>
              <input type="checkbox" />
              배송 기사님께 요청 사항이 있습니다
            </label>
            <input type="text" className="requestInput" />
          </div>
        </div>
        <Button
          buttonSize="bigButton"
          buttonColor="dark"
          buttonName="다음 페이지"
        />
      </form>
    </div>
  );
}

export default Delivery;
