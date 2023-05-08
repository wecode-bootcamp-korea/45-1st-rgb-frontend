import React, { useEffect, useState } from "react";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";
import "./Order.scss";
import Cart from "../../components/Cart/Cart";

function Order() {
  const [cartProductList, setCartProductList] = useState([]);
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    cellphone: "",
    address: "",
    postalcode: "",
  });

  const getSum = cartProductList => {
    let sum = 0;
    cartProductList.forEach(cartProduct => {
      sum +=
        parseInt(cartProduct?.individualPrice) * parseInt(cartProduct?.cartSum);
    });
    return sum;
  };

  let totalPrice = getSum(cartProductList);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("/data/cartData.json", {
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

    fetch("/data/userData.json", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: token,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        return setUserData(data.user);
      });
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
