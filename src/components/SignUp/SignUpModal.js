import React from "react";
import "./SignUpModal.scss";

const SignUpModal = ({ firstName }) => {
  return (
    <div onClick={() => console.log("닫기")} className="signUpModal">
      <h2>환영합니다. {firstName}님! </h2>
      <div className="messageBox">
        <p className="messageSubTitle">회원가입이 완료되셨습니다.</p>
        <p>창을 닫으시면 로그인 페이지로 이동합니다.</p>
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
