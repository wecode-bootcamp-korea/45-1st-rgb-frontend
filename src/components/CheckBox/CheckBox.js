import React, { useState, useEffect } from "react";
import CheckBoxItem from "./CheckBoxItem";
import "./CheckBox.scss";

const CheckBox = () => {
  console.log("checkItems", checkItems);
  return (
    <>
      <input
        type="checkbox"
        name="selectAll"
        onChange={e => handleAllCheck(e.target.checked)}
        // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
        checked={checkItems.length === CHECKBOX_INFO.length ? true : false}
      />
      <div>
        {CHECKBOX_INFO.map((data, key) => (
          <CheckBoxItem
            data={data}
            handleSingleCheck={handleSingleCheck}
            checkItems={checkItems}
          />
        ))}
        ;
      </div>
    </>
  );
};
export default CheckBox;
const CHECKBOX_INFO = [
  {
    id: 0,
    name: "privacy",
    children: "개인 정보 동의",
  },
  {
    id: 1,
    name: "subscription",
    children: "뉴스레터 구독",
  },
  {
    id: 2,
    name: "test1",
    children: "테스트1",
  },
  {
    id: 3,
    name: "test2",
    children: "테스트2",
  },
];
