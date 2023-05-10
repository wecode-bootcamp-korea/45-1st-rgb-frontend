import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import API_ADDRESS from "../../utils/API_ADDRESS";
import "./Login.scss";

const Login = ({ setLogIn, goToSignUp }) => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValues;
  const [loginWarning, setLoginWarning] = useState("");
  // const token = localStorage.getItem("TOKEN");
  const loginValid = email.includes("@") && password.length >= 5;

  const loginOn = () => {
    fetch(`${API_ADDRESS}users/logIn`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("TOKEN", data.accessToken);

        if (!localStorage.getItem("TOKEN")) {
          setLoginWarning("회원정보가 일치하지 않습니다.");
        } else {
          setLogIn("");
        }
      });
  };

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div className="login">
      <h2 className="loginTitle">로그인</h2>
      <form className="loginForm">
        <input
          onChange={handleInput}
          type="text"
          name="email"
          className="loginEmail"
          placeholder=" 이메일 주소"
        />
        <input
          onChange={handleInput}
          type="password"
          name="password"
          className="loginPw"
          placeholder=" 비밀번호"
        />
      </form>
      <p className="inputWarning">{loginWarning}</p>
      <div className="buttonBox">
        <Button
          btnOn={!loginValid}
          action={loginOn}
          buttonSize="bigButton"
          buttonColor="dark"
        >
          로그인
        </Button>
        <div className="loginTextBox">
          <Link to="/" className="loginText">
            이메일 및 비밀번호 찾기
          </Link>
          <p className="loginText">아직 회원이 아니십니까?</p>
        </div>
        <Button action={goToSignUp} buttonSize="bigButton" buttonColor="bright">
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default Login;
