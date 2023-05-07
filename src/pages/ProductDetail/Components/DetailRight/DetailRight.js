import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import "./DetailRight.scss";

function DetailRight({ details, inOut, showMore }) {
  const [count, setCount] = useState(1);
  const price = details[0]?.price;
  const total = count * price;

  const plusCount = () => {
    setCount(count + 1);
    if (count === details[0]?.quantity) {
      setCount(count + 0);
    }
  };

  const minusCount = () => {
    setCount(count - 1);
    if (count === 1) {
      setCount(count - 0);
    }
  };
  return (
    <div className="detailRight">
      <h2>{details[0]?.title}</h2>
      <h3>{details[0]?.artistName}</h3>
      {/* 사이즈와 재료 */}
      <div className="rightTop">
        <p className="size">
          {`${details[0]?.productsSizeLeft} x ${details[0]?.productsSizeRight} cm`}
        </p>
        <p className="material">{`${details[0]?.material}`}</p>
      </div>
      {/* 상세 설명 */}
      <div className="rightMiddle">
        <span className="description">{`${details[0]?.description}`}</span>
        <span>
          <button onClick={showMore}>
            <img alt="plusButton" src="/images/productDetail/plusButton.png" />
          </button>
        </span>
      </div>
      {/* 가격과 수량 */}
      <div className="rightBottom">
        <div className="price">
          <span className="bold">Price</span>
          <span>{`${details[0]?.price} won`}</span>
        </div>
        <div className="quantity">
          <span className="bold">수량</span>
          <div className="countButton">
            <button className="minusButton" onClick={minusCount}>
              -
            </button>
            {count}/{details[0]?.quantity}
            <button className="plusButton" onClick={plusCount}>
              +
            </button>
          </div>
        </div>
      </div>
      {/* 카트 추가 & 바로 구매 버튼 */}
      <div className="buyingButtons">
        <div className="totalPrice">
          <span className="bold">총 가격</span>
          <span>{`${total} won`}</span>
        </div>
        <div className="buttons">
          <Button
            buttonColor="bright"
            buttonSize="smallButton"
            children="카트 추가"
          />
          <Button
            buttonColor="dark"
            buttonSize="smallButton"
            children="바로 구매"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailRight;
