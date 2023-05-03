import React from "react";
import ListBottom from "./Component/ListBottom";
import ListTop from "./Component/ListTop";
import "./ProductList.scss";

function ProductList() {
  return (
    <div className="productList">
      <ListTop />
      <ListBottom />
    </div>
  );
}

export default ProductList;
