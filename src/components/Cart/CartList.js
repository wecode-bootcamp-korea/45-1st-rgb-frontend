import { React, useState, useEffect } from "react";
import CartSum from "./CartSum";
import "./Cart.scss";

export default function CartList() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("./data/mockData.json", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://10.58.52.141:3000/ping", {
  //     method: "GET"
  //   })
  //     .then((res) => res.json())
  //     .then((data) => localStorage.setItem("TOKEN", data.accessToken));
  // }, []);

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.count;
    });
    setTotalPrice(total);
  }, [items]);

  const decrement = (index) => {
    const newItems = [...items];
    if (newItems[index].count > 1) {
      newItems[index].count--;
      setItems(newItems);
      setTotalPrice(cartTotalPrice(newItems));
    }
  };

  const increment = (index) => {
    const newItems = [...items];
    newItems[index].count++;
    setItems(newItems);
    setTotalPrice(cartTotalPrice(newItems));
  };

  const cartTotalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.count;
    });
    return total;
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    setTotalPrice(cartTotalPrice(newItems));
  };

  return (
    <>
      {items.map((item, id) => (
        <div key={id} className="cartItem">
          <div className="itemName">{item.title}</div>
          <div className="itemSize">
            {item.size}/{item.material}
          </div>
          <div className="itemQuantity">
            <button className="minus" onClick={() => decrement(id)}>
              -
            </button>
            {item.count}
            <button className="plus" onClick={() => increment(id)}>
              +
            </button>
          </div>
          <div className="itemPrice">{item.price}원</div>
          <div className="cartDelete">
            <button className="deleteButton" onClick={() => deleteItem(id)} />
          </div>
        </div>
      ))}

      <CartSum totalPrice={totalPrice} />
    </>
  );
}
