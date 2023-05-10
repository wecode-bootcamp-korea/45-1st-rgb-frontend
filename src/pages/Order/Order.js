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
    // first_name: "",
    // last_name: "",
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

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://10.58.52.1150:3000/carts", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzY3OTI0NX0.tp76AbP1vvMOgTPPWRJE2IrOkOyjUGcDvSt69gKg-N4",
        // Authorization: token,
      },
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        console.log("data ? ", data);
        return setCartProductList(data);
      });

    fetch("/data/userData.json ", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY4MzYxMDY0Nn0.8m5ZuyVgy_u1g-wiW1v4RHX_WB5Q7QZpSAQsfjvUst8",
      },
    })
      .then(response => {
        console.log("get response ", response);
        return response.json();
      })
      .then(data => {
        console.log("get data ", data);
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
