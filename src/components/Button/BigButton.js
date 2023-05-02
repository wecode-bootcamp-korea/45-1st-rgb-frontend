import react from "react";
import "./BigButton.scss";

const BigButton = ({ buttonColor, name }) => {
  return <button className={`bigButton ${buttonColor}`}>{name}</button>;
};
export default BigButton;
