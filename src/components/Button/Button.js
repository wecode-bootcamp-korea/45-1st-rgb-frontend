import react from "react";
import "./Button.scss";

const Button = ({ buttonSize, buttonColor, buttonName }) => {
  return (
    <button className={`${buttonSize} ${buttonColor}`}>{buttonName}</button>
  );
};
export default Button;
