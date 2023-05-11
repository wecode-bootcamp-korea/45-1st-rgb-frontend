import React from "react";
import "./InvoiceOrderData.scss";

function InvoiceOrderData({ invoiceData }) {
  const { total_price, products } = invoiceData;
  const { quantity, product_id } = products;
  return (
    <div className="invoiceOrderData">
      <p className="invoiceOrderDataSubTitle">주문 정보</p>
      <img className="invoiceProductImage" />
      <table className="invoiceOrderDataTable">
        <tr>
          <td>
            {quantity > 1
              ? `${product_id}외 
            ${quantity - 1}`
              : { quantity }}
          </td>
          <td>{quantity}수량</td>
          <td>{total_price}가격</td>
        </tr>
        <tr>
          <td>세금</td>
          <td>{total_price}*0.1</td>
        </tr>
        <tr>
          <td>배송비</td>
          <td>무료 배송</td>
        </tr>
        <tr>
          <td>합계</td>
          <td>{total_price}</td>
        </tr>
      </table>
    </div>
  );
}

export default InvoiceOrderData;
