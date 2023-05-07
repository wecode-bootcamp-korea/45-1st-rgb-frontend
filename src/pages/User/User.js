import React, { useState } from "react";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import "./User.scss";

const User = () => {
  const [isLogin, setIsLogin] = useState(true);

  const goToSignUp = () => {
    setIsLogin(false);
  };

  return (
    <div className="user">
      <div className="userTop">
        {!isLogin && (
          <button
            onClick={() => setIsLogin(true)}
            className="prevArrowIcon"
          ></button>
        )}
        <button className="closeIcon"></button>
      </div>
      <div className="user">
        {isLogin ? <Login goToSignUp={goToSignUp} /> : <SignUp />}
      </div>
    </div>
  );
};

export default User;
