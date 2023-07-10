import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InvoiceUserData from "./InvoiceUserData";
import InvoiceOrderData from "./InvoiceOrderData";
import LoadingPage from "../LoadingPage/LoadingPage";
import { fetchApi } from "../../utils/fetchApi";
import { useRecoilState } from "recoil";
import { countState } from "../../recoil/atom";
import "./Invoice.scss";

function Invoice() {
  const params = useParams();
  const navigate = useNavigate();
  const orderId = params.orderNumber;
  const [invoiceData, setInvoiceData] = useState();
  const [cartCount, setCartCount] = useRecoilState(countState);

  const getOrderData = async () => {
    const response = await fetchApi(`orders/${orderId}`);
    setInvoiceData(response);
  };

  useEffect(() => {
    getOrderData();
  }, []);

  if (!invoiceData) return <LoadingPage />;

  return (
    <div className="invoice">
      <div className="invoiceBox">
        <button
          className="closeIcon"
          onClick={() => {
            setCartCount(!cartCount);
            navigate("/");
          }}
        />
        <h2 className="invoiceTitle">결제가 완료되었습니다.</h2>
        <InvoiceUserData invoiceData={invoiceData} />
        <InvoiceOrderData invoiceData={invoiceData} />
      </div>
    </div>
  );
}

export default Invoice;
