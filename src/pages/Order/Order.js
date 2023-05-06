import React, { useEffect, useState } from "react";
import "./Order.scss";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";

function Order() {
  // q : 초기값 전달하지 않아도 되는 것인가??
  // 먼저, 상태관리를 부모에서 하는 것으로 생각하고, 자식에게 props를 통해 전달해주자!!

  const [userData, setUserData] = useState({});
  const [productList, setProductList] = useState([]);

  // 유저 정보 get [서버 통신]
  useEffect(() => {
    fetch("/data/userData.json")
      .then(response => response.json())
      .then(data => {
        console.log("json data !!", data);
        setUserData(data);
      });
  }, []);

  // product 정보 get [서버 통신]
  useEffect(() => {
    fetch("/data/productList.json")
      .then(response => response.json())
      .then(data => {
        console.log("order에서의 productList ", data);
        setProductList(data);
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
            productList={productList}
            setIsDelivery={setIsDelivery}
          />
        )}

        <OrderList productList={productList} />
      </div>
    </div>
  );
}

export default Order;
