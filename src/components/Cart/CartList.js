import { React, useState, useEffect } from "react";
import CartSum from "./CartSum";
import "./Cart.scss";

export default function CartList() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("./data/productInfo.json", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

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
    newItems[index].sum++;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);

    if (newItems.length === 0) {
      // 장바구니에 상품이 없으면 드롭다운 닫기
      const dropdown = document.querySelector(".dropdown");
      dropdown.classList.remove("open");
    }

    window.scrollTo(0, 0);
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
