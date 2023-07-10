import { useState, useEffect } from "react";
import "./Cart.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../../utils/fetchApi";
import { countState } from "../../recoil/atom";
import { useRecoilState } from "recoil";

export default function CartList({
  cartItems,
  handleClose,
  setShowCart,
  getCartsData,
  setItems,
}) {
  const [cartCount, setCartCount] = useRecoilState(countState);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");
  const [showChangeButton, setShowChangeButton] = useState();

  const handleMouseEnter = id => {
    setShowChangeButton(id);
  };

  const handleMouseLeave = () => {
    setShowChangeButton(false);
  };

  const handleCount = async id => {
    await fetchApi(`carts/${cartItems[id].id}`, {
      method: "PATCH",
      body: JSON.stringify({
        count: cartItems[id].count,
      }),
    });
  };

  const deleteItem = async id => {
    const response = await fetchApi(`carts/${cartItems[id].id}`, {
      method: "DELETE",
    });
    await getCartsData();
    setCartCount(!cartCount);
    const newItems = cartItems.filter((_, i) => i !== id);
    setItems(newItems);
  };

  const decrement = id => {
    const newItems = [...cartItems];
    if (newItems[id].count > 1) {
      newItems[id].count--;
      setItems(newItems);
    }
  };

  const increment = id => {
    const newItems = [...cartItems];
    newItems[id].count++;
    setItems(newItems);
  };

  useEffect(() => {
    let total = 0;
    cartItems.length &&
      cartItems.forEach(item => {
        total += item.price * item.count;
      });
    setTotalPrice(total);
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length) return;
    const timer = setTimeout(() => {
      handleClose();
    }, 1000);
    return () => clearTimeout(timer);
  }, [handleClose, cartItems]);

  useEffect(() => {
    getCartsData();
  }, []);

  return (
    <>
      {cartItems?.length === 0 || !token ? (
        <div className="cartList">카트가 비어있습니다.</div>
      ) : (
        <>
          <div className="cartCategoryBox">
            <div className="cartCategory">카트</div>
            <div className="cartCategory">사이즈</div>
            <div className="cartCategory">수량</div>
            <div className="cartCategory">가격</div>
            <div className="cartCategory" />
          </div>
          {cartItems.map((item, id) => (
            <div key={id} className="cartItem">
              <div className="itemName">{item.title}</div>
              <div className="itemSize">
                {item.width}/{item.height}
              </div>
              <div
                className="itemQuantity"
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="minus" onClick={() => decrement(id)}>
                  -
                </button>
                {item.count}
                <button className="plus" onClick={() => increment(id)}>
                  +
                </button>
                {showChangeButton === id && (
                  <button className="check" onClick={() => handleCount(id)}>
                    수량변경
                  </button>
                )}
              </div>
              <div className="itemPrice">
                {(item.price * item.count).toLocaleString()} P
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
                  <span className="sum">{totalPrice.toLocaleString()} P</span>
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
              </div>
              <button
                className="arrowUp"
                onClick={() => {
                  handleClose();
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
