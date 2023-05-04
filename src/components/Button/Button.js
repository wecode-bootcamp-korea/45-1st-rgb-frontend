import React from "react";
import "./Button.scss";

const Button = ({ buttonSize, buttonColor, buttonName, buttonRadius }) => {
  return (
    <button className={`${buttonSize} ${buttonColor} ${buttonRadius}`}>
      {buttonName}
    </button>
  );
};
export default Button;
