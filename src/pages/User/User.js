import React, { useState } from "react";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import "./User.scss";

const User = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="user">
      <div className="userTop">
        <button className="arrow2"></button>
        <button className="close"></button>
      </div>
      <div className="user">{isLogin ? <Login /> : <SignUp />}</div>
    </div>
  );
};

export default User;
