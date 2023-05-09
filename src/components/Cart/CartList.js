import { useState, useEffect } from "react";
import "./Cart.scss";
import Button from "../Button/Button";

export default function CartList({ handleClose }) {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJpYXQiOjE2ODM2MzI3NTF9.eyI8dQmAAefZVgrqcgM5xupnKzxjeI708rtvrUGbvMs";

  useEffect(() => {
    fetch("./data/productInfo.json", {
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
    fetch(`http://10.58.52.195:3000/carts/${items[index].id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <>
      {items.length === 0 ? (
        <div className="cartList">장바구니에 담긴 상품이 없습니다.</div>
      ) : (
        <>
          <div className="cartCategoryBox">
            <div className="cartCategory">카트</div>
            <div className="cartCategory">사이즈</div>
            <div className="cartCategory">수량</div>
            <div className="cartCategory">가격</div>
            <div className="cartCategory" />
          </div>
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
                <button
                  className="deleteButton"
                  onClick={() => {
                    deleteItem(idx);
                  }}
                />
              </div>
            </div>
          ))}
          <div className="cartSumBox">
            <div className="cartSummary">
              <div className="bottomPadding">
                <span className="cartFree">
                  rgb . 만의 무료 배송 혜택을 즐겨보세요.
                </span>
                <div className="totalPrice">
                  <span className="vat">소계(세금 포함)</span>
                  <span className="sum">{totalPrice.toLocaleString()}원</span>
                </div>
                <div className="payBtn">
                  <Button
                    buttonSize="mediumButton"
                    buttonColor="bright"
                    // 결제 페이지로만 이동되게
                  >
                    결제하기
                  </Button>
                </div>
                <button className="arrowUp" onClick={handleClose} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
