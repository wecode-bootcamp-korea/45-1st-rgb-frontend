import React from "react";

const CheckInput = ({ checkInputs, setCheckInputs }) => {
  console.log("자식 ", checkInputs);

  const checkAllInputs = checked => {
    if (checked) {
      const idArray = [];
      AGREEMENT_TERMS.forEach(term => idArray.push(term.id));
      setCheckInputs(idArray);
    } else {
      setCheckInputs([]);
    }
  };

  const checkSingleInput = (id, checked) => {
    if (checked) {
      setCheckInputs(prev => [...prev, id]);
    } else {
      setCheckInputs(checkInputs.filter(input => input !== id));
    }
  };

  return (
    <div className="checkInput">
      <div className="agreeAllWrap">
        <label htmlFor="agreeAll">
          <input
            type="checkbox"
            id="agreeAll"
            checked={AGREEMENT_TERMS.length === checkInputs.length}
            onChange={e => {
              // console.log(e.target.checked);
              checkAllInputs(e.target.checked);
            }}
          />
          전체동의
        </label>
      </div>
      {AGREEMENT_TERMS.map(term => {
        return (
          <div key={term.id}>
            <label htmlFor={term.htmlFor}>
              <input
                type="checkbox"
                id={term.htmlFor}
                checked={checkInputs.includes(term.id)}
                onChange={e => {
                  checkSingleInput(term.id, e.target.checked);
                  // console.log("하나의 인풋 변화 ", e.target.checked);/
                }}
              />
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
