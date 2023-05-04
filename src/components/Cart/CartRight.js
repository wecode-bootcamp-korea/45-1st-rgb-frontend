import React from "react";
import "./Cart.scss";
import Button from "../Button/Button";

export default function CartRight() {
  return (
    <div className="cartRight">
      <div className=" cartWarp">
        <div className="cartForm">
          <div className="profileBox">
            <div className="profileImg" />
            <div className="profileText">
              작품에 관해 궁금한 점이 있으신가요?
            </div>
          </div>
          <div className="submitButton">
            <Button
              buttonName="문의하기"
              buttonSize="mediumButton"
              buttonColor="dark"
            />
          </div>
          <div className="line" />
          <div className="cartForm2">
            <div className="formContent">
              <p className="rgb">rgb . 만의 보증 서비스</p>
              <div className="formText">
                <p className="formText1">
                  감정서(Certificate of Authenticity) 포함된 원작
                </p>
                <p className="formText2">계좌이체로 안전결제</p>
                <p className="formText3">Safe shipping globally</p>
                <p className="formText4">
                  수령일로부터 14일 이내에 무료로 반품 가능합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
