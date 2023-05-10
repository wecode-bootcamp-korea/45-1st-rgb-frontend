import React from "react";
import ListBottom from "./Component/ListBottom/ListBottom";
import ListTop from "./Component/ListTop/ListTop";
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
