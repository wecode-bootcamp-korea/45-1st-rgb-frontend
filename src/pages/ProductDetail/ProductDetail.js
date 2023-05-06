import React, { useEffect, useState } from "react";
import Location from "./Components/Location/Location";
import DetailLeft from "./Components/DetailLeft/DetailLeft";
import DetailRight from "./Components/DetailRight/DetailRight";
import ProductDescription from "./ProductDescription";
import "./ProductDetail.scss";

function ProductDetail() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/data/detailInfo.json")
      .then(res => res.json())
      .then(detailData => {
        setDetails(detailData);
      });
  }, []);

  return (
    <div className="productDetail">
      <div className="description">
        {/* 숨겨진 상세 설명 */}
        <ProductDescription />
      </div>
      <div className="productDetailBox">
        {/* 상단 */}
        <Location />
        {/* 하단 */}
        <div className="detailBox">
          {/* 하단 왼쪽 */}
          <div className="leftLeft">
            <DetailLeft details={details} />
          </div>
          {/* 하단 오른쪽 */}
          <div className="leftRight">
            <DetailRight details={details} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
