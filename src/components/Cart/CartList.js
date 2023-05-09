import { useState, useEffect } from "react";
import CartSum from "./CartSum";
import "./Cart.scss";

export default function CartList({}) {
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

  const handleCheckout = () => {
    fetch("http://10.58.52.195:3000/carts/117", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ count: items[0].count }),
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

  // const updateCart = (newItems) => {
  //   fetch(`http://cart/${product_id}`, {
  //     method: "POST",
  //     body: JSON.stringify({ items: newItems }),
  //     headers: {}
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // };

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

  const deleteItem = index => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  // const deleteItem = index => {
  //   const id = items[index].id; // 삭제할 아이템의 ID를 가져옴
  //   fetch(`http://example.com/api/cart/items/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const newItems = items.filter((item, i) => i !== index); // 상태 업데이트
  //       setItems(newItems);
  //     })
  //     .catch(error => console.error("Error:", error));
  // };

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
        handleCheckout={handleCheckout}
      />
    </>
  );
}
