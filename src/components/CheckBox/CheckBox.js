import React, { useState, useEffect } from "react";
import CheckBoxItem from "./CheckBoxItem";
import "./CheckBox.scss";

const CheckBox = ({ checkItems, setCheckItems }) => {
  const handleAllCheck = checked => {
    if (checked) {
      const idArray = [];
      CHECKBOX_INFO.forEach(el => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };
  return (
    <>
      <div className="selectAllBox">
        <input
          type="checkbox"
          name="allAgree"
          id="allAgree"
          onChange={e => handleAllCheck(e.target.checked)}
          checked={checkItems.length === CHECKBOX_INFO.length ? true : false}
        />
        <label for="allAgree">전체 동의</label>
      </div>
      <div>
        {CHECKBOX_INFO.map((data, key) => (
          <CheckBoxItem
            data={data}
            handleSingleCheck={handleSingleCheck}
            checkItems={checkItems}
          />
        ))}
      </div>
    </>
  );
};
export default CheckBox;

const CHECKBOX_INFO = [
  {
    id: 0,
    name: "privacy",
    checkBoxName: "개인 정보 동의 (필수)",
  },
  {
    id: 1,
    name: "subscription",
    checkBoxName: "뉴스레터 구독 (선택)",
  },
];
