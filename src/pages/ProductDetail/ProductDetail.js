import React, { useEffect, useState } from "react";
import Location from "./Components/Location/Location";
import DetailLeft from "./Components/DetailLeft/DetailLeft";
import DetailRight from "./Components/DetailRight/DetailRight";
import ProductDescription from "./ProductDescription";
import "./ProductDetail.scss";

function ProductDetail() {
  const [details, setDetails] = useState([]);
  // 버튼 누르면 translate 효과 주는 class 이름 바꿀 용 useState
  const [inOut, setInOut] = useState(false);

  const showMore = () => {
    setInOut(true);
  };

  const noMore = () => {
    setInOut(false);
  };

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
        <ProductDescription inOut={inOut} setInOut={setInOut} noMore={noMore} />
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
            <DetailRight
              details={details}
              inOut={inOut}
              setInOut={setInOut}
              showMore={showMore}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
