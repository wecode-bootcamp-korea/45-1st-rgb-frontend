import React from "react";
import "./CheckBoxItem.scss";

const CheckBoxItem = ({ data, handleSingleCheck, checkItems }) => {
  console.log("data", data);

  console.log("checkItems", checkItems);
  const { id, name, checkBoxName } = data;
  console.log("id", id);
  return (
    <div className="inputCheckBox">
      <input
        id={name}
        type="checkbox"
        name={name}
        onChange={e => handleSingleCheck(e.target.checked, id)}
        // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
        checked={checkItems.includes(id)}
      />
      <label for={name}>{checkBoxName}</label>
    </div>
  );
};
export default CheckBoxItem;
