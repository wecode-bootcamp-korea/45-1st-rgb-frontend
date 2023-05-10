import React from "react";

function InvoiceUserData() {
  return (
    <div className="InvoiceUserData">
      <div className="InvoiceUserDataBox">
        <p className="InvoiceUserDataSubTitle">주문자 성함</p>
        <p className="InvoiceUserName">InvoiceUserName</p>
        <p className="InvoiceUserEmail">InvoiceUserEmail</p>
      </div>
      <div className="InvoiceUserDataBox">
        <p className="InvoiceUserDataSubTitle">주문번호</p>
        <p className="InvoiceOrderNumber">InvoiceUserName</p>
      </div>
      <div className="InvoiceUserDataBox">
        <p className="InvoiceUserDataSubTitle">배송 정보</p>
        <p className="InvoiceAddressee">InvoiceAddressee</p>
        <p className="InvoiceAddress">InvoiceAddress</p>
        <p className="InvoiceAddressPostNumber">InvoiceAddressPostNumber</p>
        <p className="InvoiceShippingCharge">InvoiceShippingCharge</p>
      </div>
      <ul className="InvoiceUserDataBox">
        <li className="InvoiceUserDataSubTitle">결제 내역</li>
        <li className="InvoiceUserPoint">
          <p>보유 포인트</p>
          <span>point</span>
        </li>
        <li className="InvoiceChargePoint">
          <p>차감 포인트</p>
          <span>point</span>
        </li>
        <li className="InvoiceSavePoint">
          <p>남은 가용 포인트</p>
          <span>point</span>
        </li>
      </ul>
    </div>
  );
}

export default InvoiceUserData;
