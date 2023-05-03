import React from "react";
import Button from "../Button/Button";
import "./Login.scss";

const Login = ({ info }, setIsLogin) => {
  const { title, link } = info;
  return (
    <>
      <div className="login">
        <div className="loginBox">
          <h2 className="loginTitle">{title}</h2>
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
          <Button
            buttonName={"로그인"}
            buttonSize={"bigButton"}
            buttonColor={"dark"}
          />
          {/* <Button
            buttonSize={"bigButton"}
            buttonColor={"dark"}
          >로그인</> */}
          {/* {children}으로 넘겨주기 */}
          <div className="loginText">
            <p></p>
            <p
              onClick={() => {
                setIsLogin(prev => !prev);
              }}
            >
              {link}
            </p>
          </div>
          <Button
            buttonName={"가입하기"}
            buttonSize={"bigButton"}
            buttonColor={"bright"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
