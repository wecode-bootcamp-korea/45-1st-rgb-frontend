import React, { useEffect, useState } from "react";
import "./Invoice.scss";
import { useParams } from "react-router-dom";

function Invoice() {
  const [invoiceData, setInvoiceData] = useState();
  const params = useParams();
  const orderId = params.uuid;

  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    fetch(`http://10.58.52.169:9001/orders/${orderId}`, {
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
