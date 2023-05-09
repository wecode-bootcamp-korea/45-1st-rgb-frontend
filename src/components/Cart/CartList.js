import { useState, useEffect } from "react";
import CartSum from "./CartSum";
import "./Cart.scss";

export default function CartList({ toggleCart }) {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJpYXQiOjE2ODM1OTM0Mzd9.RA1t9pgmR2C2h16KMCe3esvQMkTBfRS7yBm5D9nH3mw";

  useEffect(() => {
    fetch("http://10.58.52.195:3000/carts", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setItems(data);
      });
  }, []);

  //fetch로 보내줄때 -> 확인버튼 클릭 수량 변경
  const handleCount = index => {
    fetch(`http://10.58.52.195:3000/carts/${items[index].id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ count: items[index].count }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.count;
    });
    setTotalPrice(total);
  }, [items]);

  const decrement = index => {
    const newItems = [...items];
    if (newItems[index].count > 1) {
      newItems[index].count--;
      setItems(newItems);
    }
  };

  const increment = index => {
    const newItems = [...items];
    newItems[index].count++;
    setItems(newItems);
  };

  //  delete api
  const deleteItem = index => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <>
      {items.map((item, idx) => (
        <div key={item.id} className="cartItem">
          <div className="itemName">{item.title}</div>
          <div className="itemSize">
            {item.width}/{item.height}
          </div>
          <div className="itemQuantity">
            <button className="minus" onClick={() => decrement(idx)}>
              -
            </button>
            {item.count}
            <button className="plus" onClick={() => increment(idx)}>
              +
            </button>
            <button className="check" onClick={() => handleCount(idx)}>
              확인
            </button>
            {/* 확인 버튼 생성 */}
          </div>

          <div className="itemPrice">
            {(item.price * item.count).toLocaleString()}원
          </div>
          <div className="cartDelete">
            <button className="deleteButton" onClick={() => deleteItem(idx)} />
          </div>
        </div>
      ))}
      <CartSum
        totalPrice={totalPrice.toLocaleString()}
        toggleCart={toggleCart}
      />
    </>
  );
}
