import React from "react";
import "./Login.scss";
import BigButton from "../Button/BigButton";

function Login() {
  return (
    <>
      <div className="login">
        <div className="loginBox">
          <h2 className="loginTitle">로그인</h2>
          <form className="loginForm">
            <input
              type="text"
              name="email"
              className="loginEmail"
              placeholder=" 이메일 주소"
            ></input>
            <input
              type="password"
              name="password"
              className="loginPw"
              placeholder=" 비밀번호"
            ></input>
          </form>
          <p>회원정보가 일치하지 않습니다.</p>
          <BigButton name={"로그인"} buttonColor={"dark"} />
          <div className="loginText">
            <p>이메일 찾기 및 비밀번호 재설정</p>
            <p>아직 회원이 아니십니까?</p>
          </div>
          <BigButton name={"가입하기"} buttonColor={"bright"} />
        </div>
      </div>
    </>
  );
}

export default Login;
