import React from "react";
import "./InvoiceUserData.scss";

function InvoiceUserData({ userData }) {
  return (
    <div className="invoiceUserData">
      <div className="invoiceUserDataTopBox">
        <div className="invoiceUserDataBox">
          <p className="invoiceUserDataSubTitle">주문자 성함</p>
          <p className="invoiceUserName boldText">invoiceUserName</p>
          <p className="invoiceUserEmail">invoiceUserEmail</p>
        </div>
        <div className="invoiceUserDataBox">
          <p className="invoiceUserDataSubTitle">주문번호</p>
          <p className="invoiceOrderNumber">invoiceUserName</p>
        </div>
      </div>
      <div className="invoiceUserDataBox">
        <p className="invoiceUserDataSubTitle">배송 정보</p>
        <p className="invoiceAddressee boldText">invoiceAddressee</p>
        <p className="invoiceAddress boldText">invoiceAddress</p>
        <p className="invoiceAddressPostNumber">invoiceAddressPostNumber</p>
        <p className="invoiceShippingCharge boldText">invoiceShippingCharge</p>
      </div>
      <ul className="invoiceUserDataBox">
        <li className="invoiceUserDataSubTitle">결제 내역</li>
        <li className="invoiceUserPoint">
          <p>보유 포인트</p>
          <span>point</span>
        </li>
        <li className="invoiceChargePoint">
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
