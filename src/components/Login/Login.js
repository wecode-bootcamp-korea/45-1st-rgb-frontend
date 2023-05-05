import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Login.scss";

const Login = ({ goToSignUp }) => {
  return (
    <div className="login">
      <h2 className="loginTitle">로그인</h2>
      <form className="loginForm">
        <input
          type="text"
          name="email"
          className="loginEmail"
          placeholder=" 이메일 주소"
        />
        <input
          type="password"
          name="password"
          className="loginPw"
          placeholder=" 비밀번호"
        />
      </form>
      <p className="inputWarning">회원정보가 일치하지 않습니다.</p>
      <div className="buttonBox">
        <Button buttonSize="bigButton" buttonColor="dark">
          로그인
        </Button>
        <div className="loginTextBox">
          <Link to="/" className="loginText">
            이메일 및 비밀번호 찾기
          </Link>
          <p className="loginText">아직 회원이 아니십니까?</p>
        </div>
        <Button
          goToSignUp={goToSignUp}
          buttonSize="bigButton"
          buttonColor="bright"
        >
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default Login;
