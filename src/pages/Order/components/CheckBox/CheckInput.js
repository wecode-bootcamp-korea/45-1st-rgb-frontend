import React, { useState } from "react";

const CheckInput = () => {
  const [checkInputs, setCheckInputs] = useState([]);

  const checkAllInputs = () => {};
  return (
    <div className="checkInput">
      <div className="agreeAllWrap">
        <label htmlFor="agreeAll">
          <input type="checkbox" id="agreeAll" checked={false} />
          전체동의
        </label>
      </div>
      {AGREEMENT_TERMS.map(term => {
        return (
          <div key={term.id}>
            <label htmlFor={term.htmlFor}>
              <input type="checkbox" id={term.htmlFor} />
              {term.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckInput;

const AGREEMENT_TERMS = [
  {
    id: 0,
    title: "본인은 만 14세 이상입니다 (필수)",
    isChecked: false,
    htmlFor: "age",
  },
  {
    id: 1,
    title: "개인정보 수집 및 이용조건에 동의합니다 (필수)",
    isChecked: false,
  },
  {
    id: 2,
    title: "주문내역을 확인했으며, 이에 동의합니다 (필수)",
    isChecked: false,
  },
];
