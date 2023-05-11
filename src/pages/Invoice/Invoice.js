import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InvoiceUserData from "./InvoiceUserData";
import InvoiceOrderData from "./InvoiceOrderData";
import { useParams } from "react-router-dom";
import { API_ADDRESS_ORDERS } from "../../utils/API_ADDRESS";
import "./Invoice.scss";
function Invoice() {
  const [invoiceData, setInvoiceData] = useState();
  const params = useParams();
  const orderId = params.orderNumber;
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const [uuid, setUuid] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    fetch(`${API_ADDRESS_ORDERS}orders/${orderId}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log("data in invoice", data);
        return setInvoiceData(data);
      });
  }, []);

  console.log("invoiceData ", invoiceData?.products[0]);
  console.log("invoiceData ", invoiceData?.user.first_name);

  useEffect(() => {
    setProducts(invoiceData?.products);
    setUser(invoiceData?.user);
    setUuid(invoiceData?.uuid);
    setTotalPrice(invoiceData?.total_price);

    console.log("products in effect ", products);
    console.log("user in effect ", user);
  }, [products, user, uuid, totalPrice]);

  console.log("products ", invoiceData?.products);
  console.log("userfv ", user);

  // useEffect(() => {
  //   if (!token) return;
  //   fetch(`${API_ADDRESS_ORDERS}users`, {
  //     method: "GET",
  //     headers: { Authorization: token },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setUserData(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (!token) return;
  //   fetch(`${API_ADDRESS_ORDERS}orders`, {
  //     method: "GET",
  //     headers: { Authorization: token },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setOrderData(data);
  //     });
  // }, []);

  return (
    <div className="invoice">
      <div className="invoiceBox">
        <button className="closeIcon" onClick={() => navigate("/")} />
        <h2 className="invoiceTitle">결제가 완료되었습니다.</h2>
        <InvoiceUserData user={user} uuid={uuid} totalPrice={totalPrice} />
        <InvoiceOrderData
          user={user}
          products={products}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}

export default Invoice;
