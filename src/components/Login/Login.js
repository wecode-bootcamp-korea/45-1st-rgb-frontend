import React from "react";
import BigButton from "../Button/BigButton";
import MediumButton from "../Button/MediumButton";

import "./Login.scss";

function Login() {
  return (
    <>
      <div className="login">Login Page</div>
      <BigButton name={"로그인"} buttonColor={"dark"} />
      <BigButton name={"가입하기"} buttonColor={"bright"} />
      <MediumButton name={"바로가기"} />
    </>
  );
}

export default Login;
