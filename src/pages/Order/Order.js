import React, { useEffect, useState } from "react";
import "./Order.scss";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";

function Order() {
  // q : 초기값 전달하지 않아도 되는 것인가??
  // 먼저, 상태관리를 부모에서 하는 것으로 생각하고, 자식에게 props를 통해 전달해주자!!

  // 합계를 상태로 관리해야 할 것 같다. 모든 부모, 자식에서 같은 상태를 바라보도록.
  // 지워야할 내용

  const [sumPrice, setSumPrice] = useState();

  const [cartProductList, setCartProductList] = useState([]);

  const getSum = cartProductList => {
    let sum = 0;
    cartProductList.forEach(cartProduct => {
      sum +=
        parseInt(cartProduct?.individualPrice) * parseInt(cartProduct?.cartSum);
    });
    return sum;
  };

  // 카트에 담기 아이템들의 가격 합계
  let totalPrice = getSum(cartProductList);

  const [userData, setUserData] = useState({
    address: "",
    postalcode: "",
    cellphone: "",
  });

  console.log("부모 유저 누구야? ", userData);
  console.log("부모 유저 누구야? ", userData.id);

  /*   // 가격 정보 get
  useEffect(() => {
    let total = 0;
    productList.forEach(product => {
      total += product.price * product.quantity;
    });
    setPriceSum(total);
  }, []);
  // console.log("priceSum?? ", priceSum); */

  // 정보 get [서버 통신]
  useEffect(() => {
    // cart data 받아오기
    fetch("/data/cartData.json")
      .then(res => res.json())
      .then(data => setCartProductList(data));

    // user data 받아오기
    fetch("/data/userData.json")
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      });
  }, []);

  const [isDelivery, setIsDelivery] = useState(true);
  // true이면 Delivery 컴포넌트, false이면 Payment 컴포넌트

  return (
    <div className="order">
      <OrderHeader isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
      <div className="orderBox">
        {isDelivery ? (
          <Delivery
            userData={userData}
            setIsDelivery={setIsDelivery}
            setUserData={setUserData}
          />
        ) : (
          <Payment
            userData={userData}
            setUserData={setUserData}
            totalPrice={totalPrice}
            setIsDelivery={setIsDelivery}
            cartProductList={cartProductList}
            setCartProductList={setCartProductList}
          />
        )}

        <OrderList cartProductList={cartProductList} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Order;
