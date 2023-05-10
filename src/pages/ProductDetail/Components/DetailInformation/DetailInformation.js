import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [button2, setButton2] = useState(false);
  const token = localStorage.getItem("TOKEN");
  // const [logIn, setLogIn] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (button1) {
      // 이 자리에 카트에 수량 추가되는 함수
      token ? postCart() : setLogIn(<User setLogIn={setLogIn} />);
    }
  }, [button1]);

  useEffect(() => {
    if (button2) {
      // 이 자리에 useNavigate로 결제 창으로 넘어가는 함수
      // token ? navigate("/order") : setLogIn(<User setLogIn={setLogIn} />);
      if (token) {
        postPay();
        navigate("/order");
      } else {
        setLogIn(<User setLogIn={setLogIn} />);
      }
    }
  }, [button2]);

  const cartButton = () => {
    setButton1(!button1);
  };
  const buyButton = () => {
    setButton2(!button2);
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
    const url = `http://10.58.52.195:3000/carts`;

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

  const postPay = () => {
    const url = `http://10.58.52.195:3000/carts`;

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
  };

  return (
    <div className="detailInformation">
      <h2>{title}</h2>
      <h3>{artist_name}</h3>
      {/* 사이즈와 재료 */}
      <div className="infoTop">
        <p className="size">
          {`${products_size_left} x ${products_size_right} cm`}
        </p>
        <p className="material">{`${material}`}</p>
      </div>
      {/* 상세 설명 */}
      <div className="infoMiddle">
        <span className="description">{`${description}`}</span>
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
      {/* 카트 추가 & 바로 구매 버튼 */}
      <div className="buyingButtons">
        <div className="totalPrice">
          <span className="bold">총 가격</span>
          <span>{`${total} point`}</span>
        </div>
        <div className="buttons">
          <Button
            buttonColor="bright"
            buttonSize="smallButton"
            action={cartButton}
          >
            카트 추가
          </Button>
          <Button
            buttonColor="dark"
            buttonSize="smallButton"
            action={buyButton}
          >
            바로 구매
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailInformation;
