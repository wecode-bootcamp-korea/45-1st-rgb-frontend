import React from "react";
import "./SignUpModal.scss";

const SignUpModal = ({ setIsLogin, firstName }) => {
  return (
    <div onClick={() => setIsLogin(true)} className="signUpModal">
      <div className="signUpModalBox">
        <h2>환영합니다. {firstName}님! </h2>
        <div className="messageBox">
          <p className="messageSubTitle">회원가입이 완료되셨습니다.</p>
          <p>화면을 누르면 로그인창으로 이동합니다.</p>
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
