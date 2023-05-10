import React from "react";
import "./CheckBoxItem.scss";

const CheckBoxItem = ({ data, handleSingleCheck, checkItems }) => {
  const { id, name, checkBoxName } = data;
  return (
    <div className="inputCheckBox">
      <input
        id={name}
        type="checkbox"
        name={name}
        onChange={e => handleSingleCheck(e.target.checked, id)}
        checked={checkItems.includes(id)}
      />
      <label for={name}>{checkBoxName}</label>
      <button className="viewMore" />
    </div>
  );
};
export default CheckBoxItem;
