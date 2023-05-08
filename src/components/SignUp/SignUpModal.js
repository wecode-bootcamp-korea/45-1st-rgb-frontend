import React from "react";
import "./SignUpModal.scss";

const SignUpModal = ({ firstName }) => {
  return (
    <div className="signUpModal">
      //모달창 추가 구현시 필요, 아무곳이나 클릭해도 모달창이 닫기도록 하기위함
      <div className="signUpModalBox">
        <h2>환영합니다. {firstName}님! </h2>
        <div className="messageBox">
          <p className="messageSubTitle">회원가입이 완료되셨습니다.</p>
          <p>창을 닫으시면 자동으로 로그인이 됩니다.</p>
        </div>
        <div className="border" />
        <div className="messageBox">
          <p className="messageSubTitle">신규 회원 가입 혜택</p>
          <p>1000 point 지급 완료</p>
        </div>
      </div>
    </div>
  );
};
export default SignUpModal;
