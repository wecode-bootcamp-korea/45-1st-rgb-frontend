import React from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import "./LeftFilter.scss";

function LeftFilter({ shopContent, setShopContent }) {
  return (
    <div className="leftFilter">
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
