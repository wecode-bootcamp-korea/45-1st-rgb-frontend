import React from "react";
import "./DetailRight.scss";

function DetailRight({ detailInfo }) {
  return (
    <div className="detailRight" key={detailInfo.id}>
      <h2>{detailInfo.title}</h2>
      <h3>{detailInfo.artistName}</h3>
      <div className="rightTop">
        <p>
          {`${detailInfo.productsSizeLeft} x ${detailInfo.productsSizeRight} cm`}
        </p>
        <p>{`${detailInfo.material}`}</p>
      </div>
      <div className="rightMiddle">
        <span>
          {`${detailInfo.description}`}
          <button>
            <img alt="plusButton" src="/images/productDetail/plusButton.png" />
          </button>
        </span>
      </div>
      <div className="rightBottom">
        <div className="price">
          <span>Price</span>
          <span>{detailInfo.price}</span>
        </div>
        <div className="quntity">
          <span>수량</span>
        </div>
      </div>
    </div>
  );
}

export default DetailRight;
