import React from "react";
import "./InvoiceOrderData.scss";

function InvoiceOrderData({ invoiceData }) {
  const { products, total_price } = invoiceData;
  let totalQuantity = 0;
  products.map(data => {
    return (totalQuantity += data.quantity);
  });
  return (
    <div className="invoiceOrderData">
      <p className="invoiceOrderDataSubTitle">주문 정보</p>
      <img className="invoiceProductImage" src={products[0].image_url} />
      <table className="invoiceOrderDataTable">
        <tr>
          <td>
            {products.length > 1
              ? `${products[0].product_title} 외 ${products.length - 1}`
              : products[0].product_title}
          </td>
          <td>총 {totalQuantity}개</td>
          <td>{total_price - Math.floor(total_price / 11)} point</td>
        </tr>
        <tr>
          <td>세금</td>
          <td>{Math.floor(total_price / 11)} point</td>
        </tr>
        <tr>
          <td>배송비</td>
          <td>무료 배송</td>
        </tr>
        <tr>
          <td>합계</td>
          <td>{total_price} point</td>
        </tr>
      </table>
    </div>
  );
}

export default InvoiceOrderData;
