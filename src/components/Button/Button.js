import react, { Children } from "react";
import "./Button.scss";

const Button = ({ buttonSize, buttonColor, change, children }) => {
  return (
    <button onClick={change} className={`${buttonSize} ${buttonColor}`}>
      {children}
    </button>
  );
};
export default Button;
