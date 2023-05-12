import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InvoiceUserData from "./InvoiceUserData";
import InvoiceOrderData from "./InvoiceOrderData";
import { API_ADDRESS_ORDERS } from "../../utils/API_ADDRESS";
import LoadingPage from "../LoadingPage/LoadingPage";

import "./Invoice.scss";

function Invoice() {
  const [invoiceData, setInvoiceData] = useState();
  const params = useParams();
  const orderId = params.orderNumber;
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    fetch(`${API_ADDRESS_ORDERS}orders/${orderId}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        return setInvoiceData(data);
      });
  }, []);

  if (!invoiceData) return <LoadingPage />;

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
