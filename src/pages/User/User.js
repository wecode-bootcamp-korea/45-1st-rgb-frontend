import React, { useState } from "react";
import Login from "../../components/Login/Login";
import "./User.scss";

function User() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="user">
<<<<<<< HEAD
      <Login
        info={isLogin ? LOGIN_INFO : SIGNUP_INFO}
        setIsLogin={setIsLogin}
      />
=======
      <h1>User Page</h1>
      <Login />
      <SignUp />
>>>>>>> master
    </div>
  );
}

export default User;

const LOGIN_INFO = {
  title: "로그인",
  link: "아직 회원이 아니십니까?",
};

const SIGNUP_INFO = {
  title: "회원가입",
  link: "이미 회원이십니까?",
};
