import React from "react";
import "./InvoiceUserData.scss";

function InvoiceUserData({ userData }) {
  const {
    first_name,
    last_name,
    email,
    address,
    postcode,
    uuid,
    total_price,
    points,
  } = userData;
  return (
    <div className="invoiceUserData">
      <div className="invoiceUserDataTopBox">
        <div className="invoiceUserDataBox">
          <p className="invoiceUserDataSubTitle">주문자 성함</p>
          <p className="invoiceUserName boldText">
            {first_name}
            {last_name}
          </p>
          <p className="invoiceUserEmail">{email}</p>
        </div>
        <div className="invoiceUserDataBox">
          <p className="invoiceUserDataSubTitle">주문번호</p>
          <p className="invoiceOrderNumber">{uuid}</p>
        </div>
      </div>
      <div className="invoiceUserDataBox">
        <p className="invoiceUserDataSubTitle">배송 정보</p>
        <p className="invoiceAddressee boldText">
          {first_name}
          {last_name}
        </p>
        <p className="invoiceAddress boldText">{address}</p>
        <p className="invoiceAddressPostNumber">{postcode}</p>
        <p className="invoiceShippingCharge boldText">무료배송</p>
      </div>
      <ul className="invoiceUserDataBox">
        <li className="invoiceUserDataSubTitle">결제 내역</li>
        <li className="invoiceUserPoint">
          <p>보유 포인트</p>
          <span>
            ({points}+{total_price})point
          </span>
        </li>
        <li className="invoiceChargePoint">
          <p>차감 포인트</p>
          <span>{total_price}point</span>
        </li>
        <li className="InvoiceSavePoint">
          <p>남은 가용 포인트</p>
          <span>{points}point</span>
        </li>
      </ul>
    </div>
  );
}

export default InvoiceUserData;
