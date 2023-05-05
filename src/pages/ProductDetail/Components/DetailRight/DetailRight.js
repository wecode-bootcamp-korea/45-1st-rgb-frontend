import React from "react";
import Button from "../../../../components/Button/Button";
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
        <p className="material">{`${detailInfo.material}`}</p>
      </div>
      <div className="rightMiddle">
        <span className="description">{`${detailInfo.description}`}</span>
        <span>
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
        <div className="quantity">
          <span>수량</span>
          <div className="countButton">
            <button className="minusButton">-</button>
            {detailInfo.count}/{detailInfo.quantity}
            <button className="plusButton">+</button>
          </div>
        </div>
      </div>
      <div className="buyingButtons">
        <Button
          buttonColor="bright"
          buttonSize="smallButton"
          buttonName="카트 추가"
          buttonRadius="radius"
        />
        <Button
          buttonColor="dark"
          buttonSize="smallButton"
          buttonName="바로 구매"
          buttonRadius="radius"
        />
      </div>
    </div>
  );
}

export default DetailRight;
