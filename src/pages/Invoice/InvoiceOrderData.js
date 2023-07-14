import { React, useState } from "react";
import "./InvoiceOrderData.scss";

function InvoiceOrderData({ invoiceData }) {
  const [openList, setOpenList] = useState(false) 
  const { products, total_price } = invoiceData;
  let totalQuantity = 0;
  products.map(data => {
    return (totalQuantity += data.quantity);
  });

  return (
    <div className="invoiceOrderData">
      <p className="invoiceOrderDataSubTitle">주문 상세 정보</p>
      <img className="invoiceProductImage" src={products[0].image_url} />
      <div className="invoiceOrderDataTable">
        <div>
          <div >
            {products.length > 1
              ? 
              <div className="orderDetailList">
                <p>{products[0].product_title} 외 {products.length - 1}</p>
                <span onClick={() => setOpenList(prev => !prev)}>상세 내역 보기</span>
              </div>
              : products[0].product_title}
          </div>
          <div>총 {totalQuantity}개</div>
          <div>{total_price - Math.floor(total_price / 11)} point</div>
        </div>
         {openList ?
            <div className="orderedDetailList">
              {products.map(data => {
                return (
                  <div>
                    <span>{data.product_title}</span>
                    <span>{data.quantity}</span>
                    <span>금액 </span>
                  </div>
                )
              })}
            </div> : ""}
        <div>
          <div>세금</div>
          <div>{Math.floor(total_price / 11)} point</div>
        </div>
        <div>
          <div>배송비</div>
          <td>무료 배송</td>
        </div>
        <div>
          <div>합계</div>
          <div>{total_price} point</div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceOrderData;
