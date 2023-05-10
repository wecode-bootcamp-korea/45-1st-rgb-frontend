import React from "react";

function InvoiceOrderData() {
  return (
    <div className="invoiceOrderData">
      <p className="invoiceOrderDataSubTitle">주문 정보</p>
      <img className="invoiceProductImage" />
      <table>
        <tr>
          <td>상품명</td>
          <td>수량</td>
          <td>가격</td>
        </tr>
        <tr>
          <td>세금</td>
          <td>세금</td>
        </tr>
        <tr>
          <td>배송비</td>
          <td>가격</td>
        </tr>
        <tr>
          <td>합계</td>
          <td>총가격</td>
        </tr>
      </table>
    </div>
  );
}

export default InvoiceOrderData;
