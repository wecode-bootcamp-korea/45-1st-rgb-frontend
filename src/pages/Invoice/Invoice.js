import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InvoiceUserData from "./InvoiceUserData";
import InvoiceOrderData from "./InvoiceOrderData";
import { useParams } from "react-router-dom";
import { API_ADDRESS_ORDERS } from "../../utils/API_ADDRESS";
import "./Invoice.scss";
function Invoice() {
  const [invoiceData, setInvoiceData] = useState();
  const params = useParams();
  const orderId = params.orderNumber;

  useEffect(() => {
    fetch(`${API_ADDRESS_ORDERS}orders/${orderId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return setInvoiceData(data);
      });
  }, []);

  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");
  // const [userData, setUserData] = useState([]);
  // const [orderData, setOrderData] = useState([]);

  // useEffect(() => {
  //   if (!token) return;
  //   fetch(`${API_ADDRESS_ORDERS}users`, {
  //     method: "GET",
  //     headers: { Authorization: token },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setUserData(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (!token) return;
  //   fetch(`${API_ADDRESS_ORDERS}orders`, {
  //     method: "GET",
  //     headers: { Authorization: token },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setOrderData(data);
  //     });
  // }, []);

  return (
    <div className="invoice">
      <div className="invoiceBox">
        <button className="closeIcon" onClick={() => navigate("/")} />
        <h2 className="invoiceTitle">결제가 완료되었습니다.</h2>
        <InvoiceUserData invoiceData={invoiceData} />
        <InvoiceOrderData invoiceData={invoiceData} />
      </div>
    </div>
  );
}

export default Invoice;
