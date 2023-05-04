import React from "react";
import Button from "../Button/Button";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="signUp">
      <h2 className="signUpTitle">회원가입</h2>
      <form className="signUpForm">
        <div className="signUpFormTop">
          <input
            type="text"
            name="lastName"
            className="lastName"
            placeholder=" 성"
          />
          <input
            type="text"
            name="firstName"
            className="firstName"
            placeholder="이름"
          />
        </div>
        <input
          type="text"
          name="email"
          className="signUpEmail"
          placeholder=" 이메일 주소"
        />
        <input
          type="password"
          name="password"
          className="signUpPw"
          placeholder=" 비밀번호"
        />
        <p className="inputWarning">
          영문 대문자, 숫자, 특수문자 포함 10글자 이상이여야 합니다.
        </p>
        <div className="checkSignUpPwBox">
          <input
            type="password"
            name="password"
            className="checkSignUpPw"
            placeholder=" 비밀번호 확인"
          />
          <button className="viewPw" />
        </div>
        <p className="inputWarning">비밀번호가 일치하지 않습니다.</p>
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
        buttonName="가입하기"
        buttonSize="bigButton"
        buttonColor="bright"
      />
    </div>
  );
};

export default SignUp;
