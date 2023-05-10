import { useState, useEffect } from "react";
import "./Cart.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function CartList({ handleClose, setShowCart }) {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    fetch("http://10.58.52.195:3000/carts", {
      method: "GET", //api 통신 질문
      headers: {
        Authorization: localStorage.getItem(token),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setItems(data);
      });
  }, []);

  const handleCount = id => {
    fetch(`http://10.58.52.195:3000/carts/${items[id].id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("TOKEN"),
      },
      body: JSON.stringify({ count: items[id].count }),
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

  const decrement = id => {
    const newItems = [...items];
    if (newItems[id].count > 1) {
      newItems[id].count--;
      setItems(newItems);
    }
  };

  const increment = id => {
    const newItems = [...items];
    newItems[id].count++;
    setItems(newItems);
  };

  //  delete api
  const deleteItem = id => {
    fetch(`http://10.58.52.195:3000/carts/${items[id].id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("TOKEN"),
      },
    });

    const newItems = items.filter((item, i) => i !== id);
    setItems(newItems);
  };

  useEffect(() => {
    if (items.length) return;
    const timer = setTimeout(() => {
      handleClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
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
          {items.map((item, id) => (
            <div key={item.id} className="cartItem">
              <div className="itemName">{item.title}</div>
              <div className="itemSize">
                {item.width}/{item.height}
              </div>
              <div className="itemQuantity">
                <button className="minus" onClick={() => decrement(id)}>
                  -
                </button>
                {item.count}
                <button className="plus" onClick={() => increment(id)}>
                  +
                </button>
                <button className="check" onClick={() => handleCount(id)}>
                  <span className="texth">수량변경</span>
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
                    deleteItem(id);
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
                    action={() => {
                      navigate("/order");
                      setShowCart(false);
                    }}
                    buttonSize="mediumButton"
                    buttonColor="bright"
                  >
                    결제하기
                  </Button>
                </div>
                <button
                  className="arrowUp"
                  onClick={() => {
                    handleClose();
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
