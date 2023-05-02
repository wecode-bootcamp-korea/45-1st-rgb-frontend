import React from "react";
import "./Login.scss";

function Login() {
  return (
    <>
      <div className="login">
        <div className="loginContent">
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
              name="userPassword"
              className="loginPw"
              placeholder=" 비밀번호"
            ></input>
          </form>
          <BigButton name={"로그인"} buttonColor={"dark"} />
          <BigButton name={"가입하기"} buttonColor={"bright"} />
        </div>
      </div>
    </>
  );
}

export default Login;
