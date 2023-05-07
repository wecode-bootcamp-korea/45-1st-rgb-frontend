import React, { useState, useEffect } from "react";

const Authe = () => {
  const [isToken, setIsToken] = useState(false);
  const [changeComponent, setChangeComponent] = useState("");
  const token = localStorage.getItem("TOKEN");

  const goToLogin = () => {
    token && setIsToken(true);
    isToken
      ? setChangeComponent("로그인 성공")
      : setChangeComponent("로그인 하세요");
  };

  return (
    <>
      <button onClick={() => goToLogin()}>버튼입니다</button>
      {changeComponent}
    </>
  );
};
export default Authe;
