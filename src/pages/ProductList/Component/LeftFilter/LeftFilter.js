import React from "react";
import "./LeftFilter.scss";

function LeftFilter({ Show }) {
  return (
    <div className="leftFilter">
      <div className="show">
        <label for="checkbox">Show only available artwork</label>
        <input type="checkbox" id="checkbox" />
      </div>
      <div className="filters">
        <div className="filterContent">
          <span>Price</span>
          <button>arrow</button>
          <p>0원 - 2만원</p>
          <p>2만원 - 5만원</p>
        </div>
        <div className="filterContent">
          <span>Size</span>
          <button>arrow</button>
          <p>0원 - 2만원</p>
          <p>2만원 - 5만원</p>
        </div>
        <div className="filterContent">
          <span>Material</span>
          <button>arrow</button>
          <p>0원 - 2만원</p>
          <p>2만원 - 5만원</p>
        </div>
      </div>
    </div>
  );
}

export default LeftFilter;
