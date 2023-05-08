import React, { useEffect, useState } from "react";
import "./Order.scss";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";

function Order() {
  const [cartProductList, setCartProductList] = useState([]);
  const [userData, setUserData] = useState({
    address: "",
    postalcode: "",
    cellphone: "",
  });

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

  const parsedUserDefaultPoints = parseInt(userData.points);
  const updatedUserPoints = parsedUserDefaultPoints - totalPrice / 1000;
  console.log("updatedUserPoints", updatedUserPoints);
  console.log("updatedUserPoints!!", parseInt(userData.points));

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
            totalPrice={totalPrice}
            setIsDelivery={setIsDelivery}
            cartProductList={cartProductList}
          />
        )}

        <OrderList cartProductList={cartProductList} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Order;
