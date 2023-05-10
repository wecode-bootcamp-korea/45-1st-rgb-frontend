import React, { useState, useEffect } from "react";
import CheckBoxItem from "./CheckBoxItem";
import "./CheckBox.scss";

const CheckBox = () => {
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 전체 선택
  const handleAllCheck = checked => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      CHECKBOX_INFO.forEach(el => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };
  console.log("checkItems", checkItems);
  return (
    <>
      <div className="selectAllBox">
        <input
          type="checkbox"
          name="selectAll"
          id="selectAll"
          onChange={e => handleAllCheck(e.target.checked)}
          // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
          checked={checkItems.length === CHECKBOX_INFO.length ? true : false}
        />
        <label for="selectAll">전체 동의</label>
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
    checkBoxName: "개인 정보 동의",
  },
  {
    id: 1,
    name: "subscription",
    checkBoxName: "뉴스레터 구독",
  },
  {
    id: 2,
    name: "test1",
    checkBoxName: "테스트1",
  },
  {
    id: 3,
    name: "test2",
    checkBoxName: "테스트2",
  },
];
