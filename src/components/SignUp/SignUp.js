import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./SignUp.scss";

const SignUp = () => {
  const [message, setMessage] = useState([]);
  const [isPassword, setIsPassword] = useState(true);
  const [inputValues, setInputValues] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { lastName, firstName, email, password, passwordCheck } = inputValues;

  const loginValid =
    email.includes("@") && password.length >= 5 && firstName && lastName != "";

  const regex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const signUp = () => {
    console.log("loginValid", loginValid);
    console.log(firstName);
    fetch("http://10.58.52.141:3000/users/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        lastName: inputValues.lastName,
        firstName: inputValues.firstName,
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then(res => res.json())
      .then(message => setMessage(message));
  };

  return (
    <div className="signUp">
      <h2 className="signUpTitle">회원가입</h2>
      <form className="signUpForm">
        <div className="signUpFormTop">
          <input
            onChange={handleInput}
            type="text"
            name="lastName"
            className="lastName"
            placeholder=" 성"
          />
          <input
            onChange={handleInput}
            type="text"
            name="firstName"
            className="firstName"
            placeholder="이름"
          />
        </div>
        <input
          onChange={handleInput}
          type="text"
          name="email"
          className="signUpEmail"
          placeholder=" 이메일 주소"
        />
        <p className="inputWarning">중복된 이메일입니다. 다시 입력해주세요.</p>
        <input
          onChange={handleInput}
          type="password"
          name="password"
          className="signUpPw"
          placeholder=" 비밀번호"
        />
        {!regex.test(password) && (
          <p className="inputWarning">
            영문 대문자, 숫자, 특수문자 포함 10글자 이상이여야 합니다.
          </p>
        )}

        <div className="checkSignUpPwBox">
          <input
            onChange={handleInput}
            type={isPassword ? "password" : "text"}
            name="passwordCheck"
            className="checkSignUpPw"
            placeholder=" 비밀번호 확인"
          />
          <button
            onMouseOver={() => setIsPassword(false)}
            className="viewPw"
            onMouseLeave={() => setIsPassword(true)}
          />
        </div>
        {passwordCheck != password && (
          <p className="inputWarning">비밀번호가 일치하지 않습니다.</p>
        )}
      </form>
      <fieldset>
        <div>
          <input type="checkbox" id="allAgree" name="allAgree" />
          <label for="allAgree">전체 동의</label>
        </div>
        <div>
          <input type="checkbox" id="privacy" name="privacy" />
          <label for="privacy">개인 정보 동의</label>
          <button className="viewMore" />
        </div>
        <div>
          <input type="checkbox" id="subscription" name="subscription" />
          <label for="subscription">뉴스레터 구독</label>
          <button className="viewMore" />
        </div>
      </fieldset>

      <Button
        btnOn={!loginValid}
        action={signUp}
        buttonSize="bigButton"
        buttonColor={loginValid ? "dark" : "buttonOff"}
      >
        가입하기
      </Button>
    </div>
  );
};

export default SignUp;
