import React, { useEffect, useState } from "react";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";
import "./Order.scss";
import Cart from "../../components/Cart/Cart";
import { API_ADDRESS } from "../../utils/API_ADDRESS";
import { fetchApi } from "../../utils/fetchApi";

function Order() {
  const [cartProductList, setCartProductList] = useState([]);
  const [userData, setUserData] = useState({
    cellphone: "",
    address: "",
    postalCode: "",
  });
  const [isDelivery, setIsDelivery] = useState(true);
  const [isCart, setIsCart] = useState(false);
  
  const getSum = cartProductList => {
    let sum = 0;
    cartProductList.forEach(cartProduct => {
      sum += parseInt(cartProduct?.price) * parseInt(cartProduct?.count);
    });
    return sum;
  };

  let totalPrice = getSum(cartProductList);

  async function getCartsData() {
    const response = await fetchApi(`carts`, {
      method: "GET",
    });
    setCartProductList(response);
  }

  async function getUserData() {
    const response = await fetchApi(`users`, {
      method: "GET",
    });
    setUserData(response.user);
  }

  useEffect(() => {
    getCartsData();
    getUserData();
  }, []);

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
