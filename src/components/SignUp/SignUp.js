import React, { useState } from "react";
import Button from "../Button/Button";
import SignUpModal from "./SignUpModal";
import API_ADDRESS from "../../utils/API_ADDRESS";
import CheckBox from "../CheckBox/CheckBox";
import "./SignUp.scss";

const SignUp = ({ setLogIn }) => {
  const [signUpWarning, setSignUpWarning] = useState("");
  const [signUpModal, setSignUpModal] = useState("");
  const [checkItems, setCheckItems] = useState([]);
  const [isPassword, setIsPassword] = useState(true);
  const [inputValues, setInputValues] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { lastName, firstName, email, password, passwordCheck } = inputValues;

  const subscriptionValue = checkItems[1] ? "1" : "0";
  const loginValid =
    email.includes("@") &&
    password.length >= 5 &&
    firstName &&
    lastName &&
    passwordCheck === password &&
    checkItems[0] === 0;

  const regex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const signUp = () => {
    fetch(`${API_ADDRESS}users/signUp`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        subscription: subscriptionValue,
      }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("TOKEN", data.accessToken);
        if (localStorage.getItem("TOKEN") == "undefined") {
          return setSignUpWarning(
            <p className="inputWarning">다시 입력해주세요.</p>
          );
        } else if (localStorage.getItem("TOKEN")) {
          setSignUpModal(
            <SignUpModal setLogIn={setLogIn} firstName={firstName} />
          );
        }
      });
  };

  return (
    <>
      {signUpModal}
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
          {signUpWarning}
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
        <CheckBox checkItems={checkItems} setCheckItems={setCheckItems} />
        <Button
          btnOn={!loginValid}
          action={signUp}
          buttonSize="bigButton"
          buttonColor={loginValid ? "dark" : "buttonOff"}
        >
          가입하기
        </Button>
      </div>
    </>
  );
};

export default SignUp;
