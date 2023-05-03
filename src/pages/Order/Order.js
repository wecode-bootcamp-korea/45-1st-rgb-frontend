import React from "react";
import "./Order.scss";
import OrderList from "./components/OrderList/OrderList";
import OrderHeader from "./components/OrderHeader/OrderHeader";
import Payment from "./components/Payment/Payment";

function Order() {
  return (
    <div className="order">
      <OrderHeader />
      <div className="orderBox">
        <img
          className="leftArrow"
          alt="left arrow"
          src="/images/Order/arrow2.png"
        />
        <Payment />
        {/* left section 컴포넌트 분리하기 */}
        {/*  <div className="orderBoxLeft">
          <h2 className="orderBoxLeftTitle">주문을 어디로 보내시겠습니까?</h2>
          <form className="orderInfoForm">
            <h3>주문자 정보</h3>
            <div className="inputNameWrap">
              <input type="text" placeholder="성" />
              <input type="text" placeholder="이름" />
            </div>
            <input type="text" placeholder="전화번호" />
          </form>

          <form className="addressForm">
            <h3>배송지 정보</h3>
            <div className="addressInput">
              <input type="text" placeholder="주소" />
            </div>
            <div className="addressDetailInput">
              <input type="text" placeholder="상세주소" />
            </div>
            <label>
              <input type="checkbox" size="10" maxLength="10" />이 주소를 기본
              배송지로 저장합니다
            </label>
            <label>
              <input type="checkbox" />
              주문자 정보와 배송지 정보가 동일합니다
            </label>
          </form>

          <form>
            <label>
              <input type="checkbox" />
              배송 기사님께 요청 사항이 있습니다
              <textarea />
            </label>
          </form>
        </div> */}

        <OrderList />
      </div>
    </div>
  );
}

export default Order;
