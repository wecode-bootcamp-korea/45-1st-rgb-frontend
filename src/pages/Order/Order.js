import React, { useEffect, useState } from "react";
import "./Order.scss";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";

function Order() {
  const [userList, setUserList] = useState([]);
  const [productList, setProductList] = useState([]);

  // 유저 정보 get
  useEffect(() => {
    fetch("/data/userList.json")
      .then(response => response.json())
      .then(data => {
        console.log("json data !!", data);
        setUserList(data);
      });
  }, []);

  // product 정보 get
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
          <Delivery userList={userList} setIsDelivery={setIsDelivery} />
        ) : (
          <Payment
            userList={userList}
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
