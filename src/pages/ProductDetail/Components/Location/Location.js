import React from "react";
import { Link } from "react-router-dom";
import "./Location.scss";

function Location() {
  return (
    <div className="location">
      <p>Shop &gt; Art Works</p>
      <button>
        <Link to="/productList/all">
          <img alt="arrow" src="/images/productDetail/arrow2.png" />
        </Link>
      </button>
    </div>
  );
}

export default Location;
