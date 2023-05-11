import React, { useEffect, useState } from "react";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";
import "./Order.scss";
import Cart from "../../components/Cart/Cart";
import { API_ADDRESS_ORDERS } from "../../utils/API_ADDRESS";

function Order() {
  const [cartProductList, setCartProductList] = useState([]);
  const [userData, setUserData] = useState({
    cellphone: "",
    address: "",
    postalCode: "",
  });

  const getSum = cartProductList => {
    let sum = 0;
    cartProductList.forEach(cartProduct => {
      sum += parseInt(cartProduct?.price) * parseInt(cartProduct?.count);
    });
    return sum;
  };

  let totalPrice = getSum(cartProductList);

  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    fetch(`${API_ADDRESS_ORDERS}carts`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: token,
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setCartProductList(data);
      });

    fetch(`${API_ADDRESS_ORDERS}users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => setUserData(data.user));
  }, []);

  const [isDelivery, setIsDelivery] = useState(true);
  const [isCart, setIsCart] = useState(false);

  return (
    <div className="order">
      {isCart ? (
        <Cart />
      ) : (
        <>
          <OrderHeader isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
          <div className="orderBox">
            {isDelivery ? (
              <Delivery
                userData={userData}
                setIsDelivery={setIsDelivery}
                setUserData={setUserData}
                setIsCart={setIsCart}
              />
            ) : (
              <Payment
                userData={userData}
                totalPrice={totalPrice}
                setIsDelivery={setIsDelivery}
                cartProductList={cartProductList}
              />
            )}

            <OrderList
              cartProductList={cartProductList}
              totalPrice={totalPrice}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Order;
