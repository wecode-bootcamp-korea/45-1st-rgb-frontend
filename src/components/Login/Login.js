import React from "react";
import Button from "../Button/Button";

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
          <Button
            buttonName={"로그인"}
            buttonSize={"bigButton"}
            buttonColor={"dark"}
          />
          <Button
            buttonName={"가입하기"}
            buttonSize={"bigButton"}
            buttonColor={"bright"}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
