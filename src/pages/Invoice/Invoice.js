import React from "react";
import "./Invoice.scss";

function Invoice() {
  return (
    <div className="invoice">
      <InvoiceUserData />
      <InvoiceOrderData />
    </div>
  );
}

export default Invoice;
