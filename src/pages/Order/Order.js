import React from "react";
import "./Order.scss";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";

function Order() {
  return (
    <div className="order">
      <OrderHeader />
      <div className="orderBox">
        <img
          className="leftArrow"
          alt="left arrow"
          src="/images/Order/arrow2.png"
        />
        {/* <Delivery /> */}
        <Payment />/
        <OrderList />
      </div>
    </div>
  );
}

export default Order;
