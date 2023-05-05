import React, { useEffect, useState } from "react";
import "./Order.scss";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";

function Order() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("/data/userList.json")
      .then(response => response.json())
      .then(data => {
        console.log("json data !!", data);
        setUserList(data);
      });
  }, []);

  return (
    <div className="order">
      <OrderHeader />
      <div className="orderBox">
        <img
          className="leftArrow"
          alt="left arrow"
          src="/images/Order/arrow2.png"
        />
        <Delivery userList={userList} />
        <Payment />
        <OrderList />
      </div>
    </div>
  );
}

export default Order;
