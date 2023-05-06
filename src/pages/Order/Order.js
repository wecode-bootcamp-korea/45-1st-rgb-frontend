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

  return (
    <div className="order">
      <OrderHeader />
      <div className="orderBox">
        <img
          className="leftArrow"
          alt="left arrow"
          src="/images/Order/arrow2.png"
        />
        {/* <Delivery userList={userList} /> */}
        <Payment userList={userList} productList={productList} />
        <OrderList productList={productList} />
      </div>
    </div>
  );
}

export default Order;
