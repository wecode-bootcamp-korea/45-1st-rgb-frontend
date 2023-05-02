import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import Login from "../../components/Login/Login";
import "./User.scss";

function User() {
  return (
    <div className="user">
      <Login />
      <SignUp />
    </div>
  );
}

export default User;
