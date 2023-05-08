import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import User from "../../../User/User";

import "./DetailInformation.scss";

function DetailInformation({ details, showMore, setChangeComponent }) {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");
  const price = details.price;
  const total = count * price;

  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const token = localStorage.getItem("TOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    if (button1) {
      console.log("button1");
      // 이 자리에 카트에 수량 추가되는 함수
      token ? post() : setChangeComponent(<User />);
    }
  }, [button1]);

  useEffect(() => {
    if (button2) {
      // 이 자리에 useNavigate로 결제 창으로 넘어가는 함수
      token ? navigate("/order") : setChangeComponent(<User />);
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

  const post = () => {
    const url = `http://10.58.52.169:9000/products/`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ quantity: `${count}` }),
    })
      .then(res => res.json())
      .then(message => setMessage(message));
    alert("카트에 성공적으로 담겼습니다!");
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
          <span>{`${details.price} point`}</span>
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
