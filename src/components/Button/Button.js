import react from "react";
import "./Button.scss";

const Button = ({ buttonSize, buttonColor, buttonName, change }) => {
  return (
    <button onClick={change} className={`${buttonSize} ${buttonColor}`}>
      {buttonName}
    </button>
  );
};
export default Button;
