import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import Login from "../../components/Login/Login";
import "./User.scss";

function User() {
  return (
    <div className="user">
      <h1>User Page</h1>
      <SignUp />
      {/* <Login /> */}
    </div>
  );
}

export default User;
