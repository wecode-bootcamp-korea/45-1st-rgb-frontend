import react, { Children } from "react";
import "./Button.scss";

const Button = ({ buttonSize, buttonColor, children, goToSignUp }) => {
  return (
    <button
      onClick={() => goToSignUp()}
      className={`${buttonSize} ${buttonColor}`}
    >
      {children}
    </button>
  );
};
export default Button;
