import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Location from "./Components/Location/Location";
import ImageBox from "./Components/ImageBox/ImageBox";
import DetailInformation from "./Components/DetailInformation/DetailInformation";
import ProductDescription from "./ProductDescription";
import User from "../User/User";
import "./ProductDetail.scss";

function ProductDetail() {
  const [changeComponent, setChangeComponent] = useState("");

  // mock data 저장하는 곳
  const [details, setDetails] = useState([]);
  // 버튼 누르면 translate 효과 주는 class 이름 바꿀 용 useState
  const [inOut, setInOut] = useState(false);
  const params = useParams();

  const productId = params.id;

  const showMore = () => {
    setInOut(true);
  };

  const noMore = () => {
    setInOut(false);
  };

  useEffect(() => {
    const url = `http://10.58.52.169:9000/products/${productId}`;

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then(res => res.json())
      .then(detailData => {
        setDetails(detailData);
      });
  }, [productId]);

  // useEffect(() => {
  //   fetch("/data/detailInfo.json")
  //     .then(res => res.json())
  //     .then(detailData => {
  //       setDetails(detailData);
  //     });
  // }, []);

  return (
    <>
      {changeComponent}
      <div className="productDetail">
        <div className="description">
          {/* 숨겨진 상세 설명 */}
          <ProductDescription
            details={details}
            inOut={inOut}
            setInOut={setInOut}
            noMore={noMore}
          />
        </div>
        <div className="productDetailBox">
          {/* 상단 */}
          <Location />
          {/* 하단 */}
          <div className="detailBox">
            {/* 하단 왼쪽 */}
            <div className="leftImage">
              <ImageBox details={details} />
            </div>
            {/* 하단 오른쪽 */}
            <div className="detailInfo">
              <DetailInformation
                setChangeComponent={setChangeComponent}
                details={details}
                inOut={inOut}
                setInOut={setInOut}
                showMore={showMore}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
