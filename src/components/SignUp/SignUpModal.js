import React from "react";
import "./SignUpModal.scss";

const SignUpModal = ({ firstName }) => {
  return (
    <div className="signUpModal">
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
  );
};
export default SignUpModal;
