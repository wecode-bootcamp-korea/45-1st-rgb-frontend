import React from "react";
import Button from "../../../../components/Button/Button";
import "./DetailRight.scss";

function DetailRight({ detailInfo }) {
  return (
    <div className="detailRight" key={detailInfo.id}>
      <h2>{detailInfo.title}</h2>
      <h3>{detailInfo.artistName}</h3>
      {/* 사이즈와 재료 */}
      <div className="rightTop">
        <p className="size">
          {`${detailInfo.productsSizeLeft} x ${detailInfo.productsSizeRight} cm`}
        </p>
        <p className="material">{`${detailInfo.material}`}</p>
      </div>
      {/* 상세 설명 */}
      <div className="rightMiddle">
        <span className="description">{`${detailInfo.description}`}</span>
        <span>
          <button>
            <img alt="plusButton" src="/images/productDetail/plusButton.png" />
          </button>
        </span>
      </div>
      {/* 가격과 수량 */}
      <div className="rightBottom">
        <div className="price">
          <span>Price</span>
          <span>{detailInfo.price}</span>
        </div>
        <div className="quantity">
          <span>수량</span>
          <div className="countButton">
            <button className="minusButton">-</button>
            1/{detailInfo.quantity}
            <button className="plusButton">+</button>
          </div>
        </div>
      </div>
      {/* 카트 추가 & 바로 구매 버튼 */}
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
