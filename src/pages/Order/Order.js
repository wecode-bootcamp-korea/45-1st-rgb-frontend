import React, { useEffect, useState } from "react";
import "./Order.scss";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";

function Order() {
  const [cartProductList, setCartProductList] = useState([]);
  const [userData, setUserData] = useState({});

  const getSum = cartProductList => {
    let sum = 0;
    cartProductList.forEach(cartProduct => {
      sum +=
        parseInt(cartProduct?.individualPrice) * parseInt(cartProduct?.cartSum);
    });
    return sum;
  };

  // 카트에 담기 아이템들의 가격 합계
  let totalPrice = getSum(cartProductList);
  console.log("⚙️", totalPrice);

  // 정보 get [서버 통신]
  useEffect(() => {
    // cart data 받아오기
    fetch("/data/cartData.json", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxLCJpYXQiOjE2ODM1Mzc1OTR9.T1xZb_n6v5qWIVNUNkbmfm0zKmyAYy61NHtTcmZL0ms",
      },
    })
      .then(res => {
        console.log("carts res ", res);
        return res.json();
      })
      .then(data => {
        console.log("carts data ", data);
        return setCartProductList(data);
      });

    // user data 받아오기
    fetch("/data/userData.json", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY4MzUzNjY2NH0.daR_fPreDTkZfz5b2k2qFsJZPF2jqqRpkLuCMDkiNfs",
      },
    })
      .then(response => {
        console.log("users response", response);
        return response.json();
      })
      .then(data => {
        console.log(">>>>> user data", data);
        return setUserData(data);
      });
  }, []);

  console.log("📢", userData);

  const [isDelivery, setIsDelivery] = useState(true);
  // true이면 Delivery 컴포넌트, false이면 Payment 컴포넌트
  return (
    <div className="order">
      <OrderHeader isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
      <div className="orderBox">
        {isDelivery ? (
          <Delivery
            userData={userData}
            setIsDelivery={setIsDelivery}
            setUserData={setUserData}
          />
        ) : (
          <Payment
            userData={userData}
            totalPrice={totalPrice}
            setIsDelivery={setIsDelivery}
            cartProductList={cartProductList}
          />
        )}

        <OrderList cartProductList={cartProductList} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Order;
