import React, { useState } from "react";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import "./User.scss";

const User = () => {
  const [isLogin, setIsLogin] = useState(false);

  const goToSignUp = () => {
    setIsLogin(false);
  };

  return (
    <div className="user">
      <div className="userTop">
        {!isLogin && (
          <button onClick={() => setIsLogin(true)} className="prevArrowIcon" />
        )}
        <button className="closeIcon" />
      </div>
      <div className="user">
        {isLogin ? <Login goToSignUp={goToSignUp} /> : <SignUp />}
      </div>
    </div>
  );
};

export default User;
