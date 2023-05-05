import React from "react";
import "./CheckBox.scss";

function CheckBox() {
  return (
    <div className="checkBox">
      <label for="text" className="labelWrap">
        <input type="checkbox" id="text" />
        <label for="text" />
        체크박스 잘 분리했습니다
      </label>
    </div>
  );
}

export default CheckBox;
