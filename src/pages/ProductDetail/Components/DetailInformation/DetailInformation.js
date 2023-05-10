import React, { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import User from "../../../User/User";

import "./DetailInformation.scss";

function DetailInformation({ details, showMore, setLogIn }) {
  const {
    quantity,
    id,
    title,
    artist_name,
    products_size_left,
    products_size_right,
    material,
    description,
    price,
  } = details;

  const [count, setCount] = useState(1);
  const total = count * price;
  const [button1, setButton1] = useState(false);
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    if (button1) {
      token ? postCart() : setLogIn(<User setLogIn={setLogIn} />);
    }
  }, [button1]);

  const cartButton = () => {
    setButton1(!button1);
  };
  const plusCount = () => {
    setCount(count + 1);
    if (count === quantity) {
      setCount(count + 0);
    }
  };

  const minusCount = () => {
    setCount(count - 1);
    if (count === 1) {
      setCount(count - 0);
    }
  };

  const postCart = () => {
    const url = `http://10.58.52.150:3000/carts`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: token,
      },
      body: JSON.stringify({
        productsId: id,
        quantity: count,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
    alert("카트에 성공적으로 담겼습니다");
  };

  return (
    <div className="detailInformation">
      <h2>{title}</h2>
      <h3>{artist_name}</h3>
      <div className="infoTop">
        <p className="size">
          {`${products_size_left} x ${products_size_right} cm`}
        </p>
        <p className="material">{`${material}`}</p>
      </div>
      <div className="infoMiddle">
        <span className="description">{`${description}`}</span>
        <span>
          <button onClick={showMore}>
            <img alt="plusButton" src="/images/productDetail/plusButton.png" />
          </button>
        </span>
      </div>
      <div className="infoBottom">
        <div className="price">
          <span className="bold">Price</span>
          <span>{`${price} point`}</span>
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
      <div className="buyingButtons">
        <div className="totalPrice">
          <span className="bold">총 가격</span>
          <span>{`${total} point`}</span>
        </div>
        <div className="buttons">
          <Button
            buttonColor="bright"
            buttonSize="bigButton"
            action={cartButton}
          >
            카트 추가
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailInformation;
