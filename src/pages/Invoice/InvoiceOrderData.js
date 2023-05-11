import React from "react";
import "./InvoiceOrderData.scss";

function InvoiceOrderData({ products, totalPrice }) {
  console.log("products", products[0]);
  return (
    <div className="invoiceOrderData">
      <p className="invoiceOrderDataSubTitle">주문 정보</p>
      <img className="invoiceProductImage" />
      <table className="invoiceOrderDataTable">
        <tr>
          <td>{products[0]?.product_id}</td>
          <td>{products[0]?.quantity}개</td>
          <td>{totalPrice - Math.floor(totalPrice / 11)} point</td>
        </tr>
        <tr>
          <td>세금</td>
          <td>{Math.floor(totalPrice / 11)} point</td>
        </tr>
        <tr>
          <td>배송비</td>
          <td>무료 배송</td>
        </tr>
        <tr>
          <td>합계</td>
          <td>{totalPrice} point</td>
        </tr>
      </table>
    </div>
  );
}

export default InvoiceOrderData;
