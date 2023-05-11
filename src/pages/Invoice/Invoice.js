import React, { useEffect, useState } from "react";
import "./Invoice.scss";
import { useParams } from "react-router-dom";
import { API_ADDRESS_ORDERS } from "../../utils/API_ADDRESS";

function Invoice() {
  const [invoiceData, setInvoiceData] = useState();
  const params = useParams();
  const orderId = params.orderNumber;

  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    fetch(`${API_ADDRESS_ORDERS}orders/${orderId}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setInvoiceData(data));
  }, []);

  return <div className="invoice">Invoice Page</div>;
}

export default Invoice;
