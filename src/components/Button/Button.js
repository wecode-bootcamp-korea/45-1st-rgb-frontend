import react from "react";
import "./Button.scss";

const Button = ({ buttonSize, buttonColor, name }) => {
  return <button className={`${buttonSize} ${buttonColor}`}>{name}</button>;
};
export default Button;
