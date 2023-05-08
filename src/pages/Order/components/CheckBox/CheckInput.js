import React from "react";

const CheckInput = () => {
  return (
    <div className="checkInput">
      <label htmlFor="agreeAll">
        <input type="checkbox" id="agreeAll" />
        전체동의
      </label>
      <div>
        <input type="radio" name="privacy" />
        <div>전체 동의</div>
      </div>
    </div>
  );
};

export default CheckInput;
