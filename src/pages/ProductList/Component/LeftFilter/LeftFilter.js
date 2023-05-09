import React from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import "./LeftFilter.scss";

function LeftFilter({ shopContent, setShopContent }) {
  return (
    <div className="leftFilter">
      {/* <div className="show">
        <label for="checkbox">Show only available artwork</label>
        <input type="checkbox" id="checkbox" />
      </div> */}
      <div className="filters">
        <FilterComponent
          shopContent={shopContent}
          setShopContent={setShopContent}
        />
      </div>
    </div>
  );
}

export default LeftFilter;
