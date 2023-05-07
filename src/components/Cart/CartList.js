import { React, useState, useEffect } from "react";
import CartSum from "./CartSum";
import "./Cart.scss";

export default function CartList() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("./data/productInfo.json", {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJpYXQiOjE2ODMyNzgyNjF9.v4TFKL1VrFeXB_WHY3gxTOgASs-uz8gfUWoEAnw5DNQ"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []); // cart list api

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.sum;
    });
    setTotalPrice(total);
  }, [items]);

  const decrement = (index) => {
    const newItems = [...items];
    if (newItems[index].sum > 1) {
      newItems[index].sum--;
      setItems(newItems);
    }
  };

  const increment = (index) => {
    const newItems = [...items];
    //if (newItems[index].sum < 5) { // 최대 수량이 5 이면 그 이상 못 담게 => 재고 부족 알람창
    newItems[index].sum++; // sum 값 +/- 도 api?
    setItems(newItems); // 데이터 값에 따라 max 수량 막기
    //}
  };

  const deleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems); // 카트 리스트 삭제 api
  };

  return (
    <>
      {items.map((item, id) => (
        <div key={id} className="cartItem">
          <div className="itemName">{item.title}</div>
          <div className="itemSize">
            {item.width}/{item.height}
          </div>
          <div className="itemQuantity">
            <button className="minus" onClick={() => decrement(id)}>
              -
            </button>
            {item.sum}
            <button className="plus" onClick={() => increment(id)}>
              +
            </button>
          </div>
          <div className="itemPrice">
            {(item.price * item.sum).toLocaleString()}원
          </div>
          <div className="cartDelete">
            <button className="deleteButton" onClick={() => deleteItem(id)} />
          </div>
        </div>
      ))}
      <CartSum totalPrice={totalPrice.toLocaleString()} />
    </>
  );
}
