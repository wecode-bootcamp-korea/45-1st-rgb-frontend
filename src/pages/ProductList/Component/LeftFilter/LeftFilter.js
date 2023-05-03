import React from "react";
import "./LeftFilter.scss";

function LeftFilter({ Show }) {
  return (
    <div className="leftFilter">
      <div className="show">
        <label for="checkbox">Show only available artwork</label>
        <input type="checkbox" id="checkbox" />
      </div>
      <p>
        Price
        <button className="arrow">arrow</button>
      </p>
      <p>
        Size
        <button className="arrow">arrow</button>
      </p>
      <p>
        Material
        <button className="arrow">arrow</button>
      </p>
    </div>
  );
}

export default LeftFilter;
