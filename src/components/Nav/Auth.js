import React, { useState, useEffect } from "react";
import User from "../../pages/User/User";

import "./Auth.scss";
const Auth = () => {
  // const [isToken, setIsToken] = useState(true);
  const [changeComponent, setChangeComponent] = useState("");
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    if (button1) {
      token ? setChangeComponent("버튼 1번") : setChangeComponent(<User />);
    }
  }, [button1]);

  useEffect(() => {
    if (button2) {
      token ? setChangeComponent("버튼 2번") : setChangeComponent(<User />);
    }
  }, [button2]);

  return (
    <>
      {changeComponent}
      <div className="auth">
        <button className="authButton" onClick={() => setButton1(!button1)}>
          버튼 1번 입니다
        </button>
        <button className="authButton" onClick={() => setButton2(!button2)}>
          버튼 2번 입니다
        </button>
      </div>
    </>
  );
};
export default Auth;
