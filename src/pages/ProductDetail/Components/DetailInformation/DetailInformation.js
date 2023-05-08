import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import "./DetailInformation.scss";

function DetailInformation({ details, showMore }) {
  const [count, setCount] = useState(1);
  const price = details.price;
  const total = count * price;

  const plusCount = () => {
    setCount(count + 1);
    if (count === details.quantity) {
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
    <div className="detailInformation">
      <h2>{details.title}</h2>
      <h3>{details.artistName}</h3>
      {/* 사이즈와 재료 */}
      <div className="infoTop">
        <p className="size">
          {`${details.products_size_left} x ${details.products_size_right} cm`}
        </p>
        <p className="material">{`${details.material}`}</p>
      </div>
      {/* 상세 설명 */}
      <div className="infoMiddle">
        <span className="description">{`${details.description}`}</span>
        <span>
          <button onClick={showMore}>
            <img alt="plusButton" src="/images/productDetail/plusButton.png" />
          </button>
        </span>
      </div>
      {/* 가격과 수량 */}
      <div className="infoBottom">
        <div className="price">
          <span className="bold">Price</span>
          <span>{`${details.price} won`}</span>
        </div>
        <div className="quantity">
          <span className="bold">수량</span>
          <div className="countButton">
            <button className="minusButton" onClick={minusCount}>
              -
            </button>
            {count}/{details.quantity}
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

export default DetailInformation;
