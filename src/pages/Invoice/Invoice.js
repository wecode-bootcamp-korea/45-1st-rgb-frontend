import React from "react";
import InvoiceUserData from "./InvoiceUserData";
import InvoiceOrderData from "./InvoiceOrderData";
import "./Invoice.scss";

function Invoice() {
  return (
    <div className="invoice">
      <h2>결제가 완료되었습니다.</h2>
      <InvoiceUserData />
      <InvoiceOrderData />
    </div>
  );
}

export default Invoice;
