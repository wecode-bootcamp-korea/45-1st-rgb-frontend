import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InvoiceUserData from "./InvoiceUserData";
import InvoiceOrderData from "./InvoiceOrderData";
import API_ADDRESS from "../../utils/API_ADDRESS";

import "./Invoice.scss";

function Invoice() {
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");
  const [userData, setUserData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  console.log("userData", userData);
  console.log("orderData", orderData);
  useEffect(() => {
    if (!token) return;
    fetch(`${API_ADDRESS}users`, {
      method: "GET",
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data);
      });
  }, []);

  useEffect(() => {
    if (!token) return;
    fetch(`${API_ADDRESS}orders`, {
      method: "GET",
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        setOrderData(data);
      });
  }, []);

  return (
    <div className="invoice">
      <div className="invoiceBox">
        <button className="closeIcon" onClick={() => navigate("/")} />
        <h2 className="invoiceTitle">결제가 완료되었습니다.</h2>
        <InvoiceUserData userData={userData} />
        <InvoiceOrderData orderData={orderData} />
      </div>
    </div>
  );
}

export default Invoice;
