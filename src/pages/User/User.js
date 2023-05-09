import React, { useState } from "react";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import "./User.scss";

const User = ({ setLogIn }) => {
  const [isLogin, setIsLogin] = useState(true);

  const goToSignUp = () => {
    setIsLogin(false);
  };

  return (
    <div className="user">
      <div className="userTop">
        {!isLogin && (
          <button onClick={() => setIsLogin(true)} className="prevArrowIcon" />
        )}

        <button className="closeIcon" onClick={() => setLogIn("")} />
      </div>
      <div className="userItem">
        {isLogin ? (
          <Login setLogIn={setLogIn} goToSignUp={goToSignUp} />
        ) : (
          <SignUp setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default User;
