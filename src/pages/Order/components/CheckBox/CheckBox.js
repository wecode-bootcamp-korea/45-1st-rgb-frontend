import React from "react";
import "./CheckBox.scss";

function CheckBox({ term }) {
  return (
    <div className="checkBox">
      <label for="text" className="labelWrap">
        <input type="checkbox" id="text" />
        <label for="text" />
        {term.text}
      </label>
    </div>
  );
}

export default CheckBox;
