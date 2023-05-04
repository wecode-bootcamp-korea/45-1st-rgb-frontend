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

          {/* <div className="buttonHidden">
          <div className="inputBox">
            <input className="inputEmail" placeholder="이메일" />{" "}
          </div>
          <div className="inputBox2">
            <input
              className="inputContent"
              placeholder="작가에게 무엇이든 물어보세요."
            />
          </div>
        </div> */}

          <div className="line" />
          <div className="cartForm2">
            <div className="formContent">
              <p className="rgb">rgb . 만의 보증 서비스</p>
              <span className="span1">
                감정서(Certificate of Authenticity) 포함된 원작
              </span>
              <span className="span2">계좌이체로 안전결제</span>
              <span className="span3">Safe shipping globally</span>
              <span className="span4">
                수령일로부터 14일 이내에 무료로 반품 가능합니다
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
