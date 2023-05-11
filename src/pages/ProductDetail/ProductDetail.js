import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Location from "./Components/Location/Location";
import ImageBox from "./Components/ImageBox/ImageBox";
import DetailInformation from "./Components/DetailInformation/DetailInformation";
import ProductDescription from "./ProductDescription";
import API_ADDRESS from "../../utils/API_ADDRESS";
import "./ProductDetail.scss";

function ProductDetail() {
  const [logIn, setLogIn] = useState("");

  const [details, setDetails] = useState([]);
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
    const url = `${API_ADDRESS}products/${productId}`;

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then(res => res.json())
      .then(detailData => {
        setDetails(detailData);
      });
  }, [productId]);

  return (
    <>
      {logIn}
      <div className="productDetail">
        <div className="description">
          <ProductDescription details={details} inOut={inOut} noMore={noMore} />
        </div>
        <div className="productDetailBox">
          <Location />
          <div className="detailBox">
            <div className="leftImage">
              <ImageBox details={details} inOut={inOut} />
            </div>
            <div className="detailInfo">
              <DetailInformation
                setLogIn={setLogIn}
                details={details}
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
